import { GoogleGenAI } from "@google/genai";
import { Capacitor, CapacitorHttp } from "@capacitor/core";
import { getApiKey } from "./apiKey";

// 'auto': Gemini anahtarı varsa Gemini, yoksa (veya Gemini hata verirse) ücretsiz sağlayıcı.
export type ImageProvider = 'auto' | 'gemini' | 'free';

const PROVIDER_KEY = 'mechiImageProvider';
const FREE_KEY_KEY = 'mechiPollinationsKey';

const read = (k: string) => { try { return localStorage.getItem(k) || ''; } catch { return ''; } };
const write = (k: string, v: string) => { try { localStorage.setItem(k, v.trim()); } catch {} };

export const getImageProvider = (): ImageProvider => {
    const v = read(PROVIDER_KEY);
    return v === 'gemini' || v === 'free' ? v : 'auto';
};
export const setImageProvider = (p: ImageProvider) => write(PROVIDER_KEY, p);
export const getFreeKey = () => read(FREE_KEY_KEY);
export const setFreeKey = (k: string) => write(FREE_KEY_KEY, k);

// Görsel üretmeye hazır mıyız? (Gemini anahtarı yoksa da ücretsiz sağlayıcı vardır.)
export const canGenerate = () => getImageProvider() !== 'gemini' || !!getApiKey();

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const ASPECTS: Record<string, [number, number]> = {
    '1:1': [1024, 1024], '3:4': [768, 1024], '4:3': [1024, 768], '9:16': [576, 1024], '16:9': [1024, 576],
    '2:3': [683, 1024], '3:2': [1024, 683], '4:5': [820, 1024], '5:4': [1024, 820], '21:9': [1024, 439],
};

const blobToPngBase64 = async (blob: Blob): Promise<string> => {
    const bmp = await createImageBitmap(blob);
    const canvas = document.createElement('canvas');
    canvas.width = bmp.width; canvas.height = bmp.height;
    canvas.getContext('2d')!.drawImage(bmp, 0, 0);
    return canvas.toDataURL('image/png').split(',')[1];
};

// Ücretsiz sağlayıcı yalnızca metinden görsel üretir; yüklenen fotoğraflar yok sayılır.
const generateFree = async (parts: any[], config: any): Promise<string> => {
    const prompt = parts.filter(p => p.text).map(p => p.text).join('\n').replace(/\s+/g, ' ').trim().slice(0, 1400);
    if (parts.some(p => p.inlineData)) console.warn("Ücretsiz sağlayıcı referans görselleri kullanamaz, yalnızca metin gönderildi.");
    const [w, h] = ASPECTS[config?.imageConfig?.aspectRatio] || [1024, 1024];
    const key = getFreeKey();
    const base = key ? 'https://gen.pollinations.ai/image/' : 'https://image.pollinations.ai/prompt/';
    const seed = Math.floor(Math.random() * 1e6);
    const url = `${base}${encodeURIComponent(prompt)}?width=${w}&height=${h}&nologo=true&seed=${seed}`;

    // Anahtarsız kullanımda art arda isteklerde 402/429 dönebilir; bekleyip tekrar dene.
    // Pollinations tarayıcıdan gelen anahtarsız istekleri captcha (403) ile engeller; APK'da istek
    // WebView yerine yerel HTTP katmanıyla gönderilir.
    const desktop = (window as any).mechiDesktop;
    const native = Capacitor.isNativePlatform();
    const headers: Record<string, string> = key ? { Authorization: `Bearer ${key}` } : {};
    let lastStatus = 0;
    for (let attempt = 0; attempt < 5; attempt++) {
        if (attempt > 0) await sleep(12000 * attempt);
        if (desktop) {
            const res = await desktop.httpGetImage(url, headers);
            lastStatus = res.status;
            if (res.status === 200 && res.data) {
                const bytes = Uint8Array.from(atob(res.data), c => c.charCodeAt(0));
                return blobToPngBase64(new Blob([bytes], { type: 'image/jpeg' }));
            }
        } else if (native) {
            const res = await CapacitorHttp.get({ url, headers, responseType: 'blob', readTimeout: 120000, connectTimeout: 30000 });
            lastStatus = res.status;
            if (res.status === 200 && typeof res.data === 'string' && res.data.length > 100) {
                const bin = atob(res.data);
                const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
                return blobToPngBase64(new Blob([bytes], { type: 'image/jpeg' }));
            }
        } else {
            const res = await fetch(url, { headers });
            lastStatus = res.status;
            if (res.ok && (res.headers.get('content-type') || '').startsWith('image/')) {
                return blobToPngBase64(await res.blob());
            }
        }
        if (![402, 429, 500, 502, 503, 504].includes(lastStatus)) break;
    }
    if (lastStatus === 403) {
        throw new Error("Ücretsiz servis bu ortamda anahtarsız kullanılamıyor. APK'da çalışır; tarayıcıda Ayarlar'a Pollinations anahtarı girin.");
    }
    throw new Error(`Ücretsiz görsel servisi şu an yoğun (HTTP ${lastStatus}). Biraz sonra tekrar deneyin.`);
};

const fakeImageResponse = (data: string) => ({ candidates: [{ content: { parts: [{ inlineData: { data, mimeType: 'image/png' } }] } }] });

const shouldFallback = (e: any) => /429|quota|exhausted|billing|permission|403|404|not found|not available|api key|safety|blocked/i.test(String(e));

// GoogleGenAI ile aynı arayüz; görsel modeli çağrıları sağlayıcıya göre yönlendirilir.
export const createAI = () => {
    const real = getApiKey() ? new GoogleGenAI({ apiKey: getApiKey() }) : null;
    return {
        models: {
            generateContent: async (params: any): Promise<any> => {
                const isImage = String(params.model).includes('image');
                if (!isImage) return real!.models.generateContent(params);
                const provider = getImageProvider();
                const parts = params.contents?.parts || [];
                if (provider === 'free' || (provider === 'auto' && !real)) {
                    return fakeImageResponse(await generateFree(parts, params.config));
                }
                try {
                    return await real!.models.generateContent(params);
                } catch (e) {
                    if (provider === 'auto' && shouldFallback(e)) {
                        console.warn("Gemini görsel isteği başarısız, ücretsiz sağlayıcıya geçiliyor:", e);
                        return fakeImageResponse(await generateFree(parts, params.config));
                    }
                    throw e;
                }
            },
        },
    };
};
