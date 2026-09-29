import React, { useState } from 'react';
import { getApiKey, setApiKey } from '../lib/apiKey';
import { getImageProvider, setImageProvider, getFreeKey, setFreeKey, ImageProvider } from '../lib/imageProvider';

const PROVIDERS: { id: ImageProvider; label: string }[] = [
    { id: 'auto', label: 'OTOMATİK' },
    { id: 'free', label: 'ÜCRETSİZ' },
    { id: 'gemini', label: 'GEMİNİ' },
];

const inputCls = "flex-1 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-xl px-4 py-3 text-xs";
const labelCls = "text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] uppercase";
const noteCls = "text-[10px] text-[var(--app-text-muted)]";

const ApiKeyField: React.FC = () => {
    const [provider, setProvider] = useState<ImageProvider>(getImageProvider());
    const [gemini, setGemini] = useState(getApiKey());
    const [free, setFree] = useState(getFreeKey());
    const [saved, setSaved] = useState(false);

    const save = () => {
        setApiKey(gemini);
        setFreeKey(free);
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
    };

    return (
        <section className="bg-[var(--app-bg)]/50 p-6 rounded-2xl border border-[var(--app-border)] space-y-4 mb-6">
            <label className={labelCls}>GÖRSEL ÜRETİMİ</label>
            <div className="flex bg-[var(--app-surface)] rounded-xl p-1 border border-[var(--app-border)]">
                {PROVIDERS.map(p => (
                    <button
                        key={p.id}
                        onClick={() => { setProvider(p.id); setImageProvider(p.id); }}
                        className={`flex-1 py-3 text-xs font-[Oswald] font-bold rounded-lg transition-all ${provider === p.id ? 'bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow-lg' : 'text-[var(--app-text-muted)]'}`}
                    >
                        {p.label}
                    </button>
                ))}
            </div>
            <p className={noteCls}>
                Ücretsiz mod yalnızca yazıdan görsel üretir, yüklediğiniz fotoğrafları kullanamaz ve art arda isteklerde bekleyebilir.
                Otomatik: Gemini anahtarı varsa Gemini, yoksa veya hata verirse ücretsiz mod.
            </p>

            <label className={labelCls}>GEMİNİ API ANAHTARI (isteğe bağlı)</label>
            <input type="password" value={gemini} onChange={e => setGemini(e.target.value)} placeholder="AIza..." className={`${inputCls} w-full`} />

            <label className={labelCls}>POLLINATIONS ANAHTARI (isteğe bağlı, daha az bekleme)</label>
            <input type="password" value={free} onChange={e => setFree(e.target.value)} placeholder="enter.pollinations.ai" className={`${inputCls} w-full`} />

            <button onClick={save} className="w-full py-3 bg-[var(--app-accent)] text-[var(--app-on-accent)] font-[Oswald] text-xs font-bold uppercase rounded-xl">
                {saved ? 'KAYDEDİLDİ' : 'KAYDET'}
            </button>
            <p className={noteCls}>Anahtarlar yalnızca bu cihazda saklanır.</p>
        </section>
    );
};

export default ApiKeyField;
