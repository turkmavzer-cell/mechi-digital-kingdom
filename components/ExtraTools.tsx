
import React, { useState, useRef } from 'react';
import { ExtraToolsState, SubComponentProps, GlobalSettings } from '../types';
import { EXTRA_TOOLS_LIST } from '../constants';
import { generateExtraToolImage } from '../services/geminiService';
import ImageSourceModal from './ImageSourceModal';

interface ExtraToolsProps extends SubComponentProps {
    globalSettings?: GlobalSettings;
}

const ExtraTools: React.FC<ExtraToolsProps> = ({ onHistoryUpdate, themeColor = '#ff8c37', globalSettings }) => {
    const [state, setState] = useState<ExtraToolsState>({
        activeToolId: 'eraser',
        customPrompt: '',
        subSettings: {}
    });

    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // Upload & Modal
    const [showSourceModal, setShowSourceModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setOriginalImage(reader.result as string);
                setGeneratedImage(null);
                setError(null);
            };
            reader.readAsDataURL(file);
        }
        setShowSourceModal(false);
        if(fileInputRef.current) fileInputRef.current.value = '';
        if(cameraInputRef.current) cameraInputRef.current.value = '';
    };

    const handleGenerate = async () => {
        if (!originalImage) return setError("Lütfen önce bir resim yükleyin.");
        
        // Basic validation depending on tool
        if (!state.customPrompt && state.activeToolId === 'eraser') {
            return setError("Lütfen neyin silineceğini yazın.");
        }

        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const result = await generateExtraToolImage(originalImage, state, globalSettings);
            setGeneratedImage(result);
            onHistoryUpdate(result, `Ekstra: ${EXTRA_TOOLS_LIST.find(t => t.id === state.activeToolId)?.label}`);
        } catch (err: any) {
            setError(err.message || "Hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (generatedImage) {
            const now = new Date();
            // Format: meçi_YYMMDD_HHMMSS
            const dateStr = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
            const timeStr = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
            const filename = `mechi_${dateStr}_${timeStr}.png`;

            const link = document.createElement('a');
            link.href = generatedImage;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const updateSubSetting = (key: string, value: any) => {
        setState(prev => ({
            ...prev,
            subSettings: { ...prev.subSettings, [key]: value }
        }));
    };

    // --- ICONS ---
    const Icons = {
        Eraser: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.418a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.002 16.002 0 00-4.649 4.763m5.42 5.419a15.996 15.996 0 01-3.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.418a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.002 16.002 0 00-4.649 4.763" /></svg>,
        Background: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
        Sketch: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
        Face: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
        Expand: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>,
    };

    const getIcon = (id: string) => {
        switch(id) {
            case 'eraser': return Icons.Eraser;
            case 'background': return Icons.Background;
            case 'sketch': return Icons.Sketch;
            case 'face': return Icons.Face;
            case 'expand': return Icons.Expand;
            default: return Icons.Eraser;
        }
    };

    // --- TOOL INTERFACES ---
    const renderToolInterface = () => {
        switch(state.activeToolId) {
            case 'eraser':
                return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)]">FIRÇA BOYUTU</label>
                                <span className="text-[10px] font-mono text-[var(--app-accent)]">{state.subSettings.brushSize || 50}px</span>
                            </div>
                            <input 
                                type="range" 
                                min="10" 
                                max="100" 
                                value={state.subSettings.brushSize || 50} 
                                onChange={(e) => updateSubSetting('brushSize', parseInt(e.target.value))}
                                className="w-full accent-[var(--app-accent)] h-1 bg-[var(--app-border)] rounded-full appearance-none"
                            />
                        </div>
                        <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">SİLİNECEK NESNE</label>
                             <input 
                                type="text" 
                                value={state.customPrompt}
                                onChange={(e) => setState(prev => ({...prev, customPrompt: e.target.value}))}
                                placeholder="Örn: Masadaki vazo, duvardaki tablo..."
                                className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-3 text-sm font-[Oswald] focus:border-[var(--app-accent)] outline-none"
                             />
                        </div>
                    </div>
                );
            case 'background':
                return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">HAZIR MEKANLAR</label>
                             <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                 {['Ofis', 'Stüdyo', 'Doğa', 'Plaj', 'Şehir', 'Minimal', 'Lüks'].map(preset => (
                                     <button 
                                        key={preset}
                                        onClick={() => updateSubSetting('bgPreset', preset)}
                                        className={`px-4 py-2 rounded-lg font-[Oswald] text-xs uppercase tracking-wide border whitespace-nowrap transition-all ${state.subSettings.bgPreset === preset ? 'bg-[var(--app-accent)] border-[var(--app-accent)] text-[var(--app-on-accent)]' : 'bg-[var(--app-surface)] border-[var(--app-border)] text-[var(--app-text-muted)]'}`}
                                     >
                                         {preset}
                                     </button>
                                 ))}
                             </div>
                        </div>
                        <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">ÖZEL ARKA PLAN TANIMI</label>
                             <input 
                                type="text" 
                                value={state.customPrompt}
                                onChange={(e) => setState(prev => ({...prev, customPrompt: e.target.value}))}
                                placeholder="Örn: Neon ışıklı cyberpunk sokak..."
                                className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-3 text-sm font-[Oswald] focus:border-[var(--app-accent)] outline-none"
                             />
                        </div>
                    </div>
                );
            case 'sketch':
                return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">ÇİZİM STİLİ</label>
                             <div className="flex gap-2">
                                 {['Fotogerçekçi', '3D Render', 'Anime', 'Sinematik', 'Mimari'].map(style => (
                                     <button 
                                        key={style}
                                        onClick={() => updateSubSetting('sketchStyle', style)}
                                        className={`flex-1 py-2 rounded-lg font-[Oswald] text-[10px] md:text-xs uppercase tracking-wide border transition-all ${state.subSettings.sketchStyle === style ? 'bg-[var(--app-accent)] border-[var(--app-accent)] text-[var(--app-on-accent)]' : 'bg-[var(--app-surface)] border-[var(--app-border)] text-[var(--app-text-muted)]'}`}
                                     >
                                         {style}
                                     </button>
                                 ))}
                             </div>
                        </div>
                         <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">EKSTRA DETAY</label>
                             <input 
                                type="text" 
                                value={state.customPrompt}
                                onChange={(e) => setState(prev => ({...prev, customPrompt: e.target.value}))}
                                placeholder="Örn: Gece vakti, yağmurlu hava..."
                                className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-3 text-sm font-[Oswald] focus:border-[var(--app-accent)] outline-none"
                             />
                        </div>
                    </div>
                );
            case 'face':
                 return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex gap-2">
                             <div className="flex-1">
                                <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">YAŞ GRUBU</label>
                                <select 
                                    onChange={(e) => updateSubSetting('faceAge', e.target.value)}
                                    className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-2 text-xs font-[Oswald] outline-none"
                                >
                                    <option value="none">Seçiniz</option>
                                    <option value="Çocuk">Çocuk</option>
                                    <option value="Genç">Genç</option>
                                    <option value="Yetişkin">Yetişkin</option>
                                    <option value="Yaşlı">Yaşlı</option>
                                </select>
                             </div>
                             <div className="flex-1">
                                <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">İFADE</label>
                                <select 
                                    onChange={(e) => updateSubSetting('faceExpression', e.target.value)}
                                    className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-2 text-xs font-[Oswald] outline-none"
                                >
                                    <option value="none">Seçiniz</option>
                                    <option value="Mutlu">Mutlu</option>
                                    <option value="Ciddi">Ciddi</option>
                                    <option value="Şaşkın">Şaşkın</option>
                                    <option value="Profesyonel">Profesyonel</option>
                                </select>
                             </div>
                        </div>
                        <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">HEDEF GÖRÜNÜM</label>
                             <input 
                                type="text" 
                                value={state.customPrompt}
                                onChange={(e) => setState(prev => ({...prev, customPrompt: e.target.value}))}
                                placeholder="Örn: Sarışın, mavi gözlü, gözlüklü..."
                                className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-3 text-sm font-[Oswald] focus:border-[var(--app-accent)] outline-none"
                             />
                        </div>
                    </div>
                );
             case 'expand':
                return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                            <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">GENİŞLETME ORANI</label>
                            <div className="flex gap-2">
                                {['1.5x', '2x', 'Geniş Açı'].map(ratio => (
                                     <button 
                                        key={ratio}
                                        onClick={() => updateSubSetting('expandRatio', ratio)}
                                        className={`flex-1 py-2 rounded-lg font-[Oswald] text-xs uppercase tracking-wide border transition-all ${state.subSettings.expandRatio === ratio ? 'bg-[var(--app-accent)] border-[var(--app-accent)] text-[var(--app-on-accent)]' : 'bg-[var(--app-surface)] border-[var(--app-border)] text-[var(--app-text-muted)]'}`}
                                     >
                                         {ratio}
                                     </button>
                                 ))}
                            </div>
                        </div>
                         <div>
                             <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] block mb-2">CONTEXT (İÇERİK)</label>
                             <input 
                                type="text" 
                                value={state.customPrompt}
                                onChange={(e) => setState(prev => ({...prev, customPrompt: e.target.value}))}
                                placeholder="Örn: Odanın geri kalanı, gökyüzü..."
                                className="w-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg p-3 text-sm font-[Oswald] focus:border-[var(--app-accent)] outline-none"
                             />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
             {zoomedImage && (
                <div 
                    className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center cursor-pointer p-4"
                    onClick={() => setZoomedImage(null)}
                >
                    <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain border-2 border-[var(--app-accent)] rounded-lg" />
                </div>
            )}

            {/* Hidden Inputs & Modal */}
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            <input type="file" ref={cameraInputRef} className="hidden" accept="image/*" capture="environment" onChange={handleImageUpload} />
            {showSourceModal && (
                <ImageSourceModal 
                    onClose={() => setShowSourceModal(false)}
                    onCameraSelect={() => cameraInputRef.current?.click()}
                    onGallerySelect={() => fileInputRef.current?.click()}
                />
            )}
            
            {/* 1. TOP MENU (Horizontal Tabs) */}
            <div className="flex-none h-14 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-xl flex items-center px-2 gap-2 overflow-x-auto no-scrollbar shadow-md">
                {EXTRA_TOOLS_LIST.map((tool) => {
                    const isActive = state.activeToolId === tool.id;
                    const Icon = getIcon(tool.id);
                    return (
                        <button
                            key={tool.id}
                            onClick={() => setState(prev => ({ ...prev, activeToolId: tool.id as any, customPrompt: '', subSettings: {} }))}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 shrink-0 border
                                ${isActive 
                                    ? 'bg-[var(--app-accent)] text-[var(--app-on-accent)] border-[var(--app-accent)] shadow-lg scale-105' 
                                    : 'bg-[var(--app-bg)] text-[var(--app-text-muted)] border-transparent hover:border-[var(--app-border)] hover:bg-[var(--app-bg)]/80'
                                }
                            `}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="font-[Oswald] uppercase text-xs tracking-wider font-bold">{tool.label}</span>
                        </button>
                    )
                })}
            </div>

            {/* 2. MAIN CONTENT AREA */}
            <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-4 overflow-hidden">
                
                {/* LEFT: IMAGE AREA */}
                <div className="flex-[1.5] flex flex-col gap-2 min-h-0 h-full">
                     {/* Original & Result in Split View or Toggle? Let's do Split for comparison */}
                     <div className="flex-1 flex gap-2 min-h-0">
                         {/* ORIGINAL / UPLOAD */}
                        <div 
                            className={`
                                flex-1 border border-[var(--app-border)] rounded-xl relative overflow-hidden group flex items-center justify-center cursor-pointer
                                ${state.activeToolId === 'sketch' ? 'bg-[#f4f1ea] border-dashed border-gray-400' : 'bg-[var(--app-bg)]/30'}
                            `}
                            onClick={() => !originalImage && setShowSourceModal(true)}
                        >
                            {originalImage ? (
                                <>
                                    <img src={originalImage} alt="Original" className="w-full h-full object-contain" onClick={() => setShowSourceModal(true)} />
                                    
                                    {/* Brush Cursor Simulation for Eraser */}
                                    {state.activeToolId === 'eraser' && (
                                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                             <div 
                                                className="rounded-full border-2 border-red-500/50 bg-red-500/10 shadow-[0_0_10px_rgba(255,0,0,0.3)] backdrop-blur-sm"
                                                style={{ width: `${state.subSettings.brushSize || 50}px`, height: `${state.subSettings.brushSize || 50}px` }}
                                             ></div>
                                        </div>
                                    )}

                                    <button onClick={(e) => { e.stopPropagation(); setOriginalImage(null); }} className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center transition-colors">✕</button>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center group w-full h-full">
                                     {state.activeToolId === 'sketch' ? (
                                         <div className="text-gray-400 font-[Oswald] text-center">
                                             <div className="text-4xl mb-2">✏️</div>
                                             <span className="tracking-widest text-xs uppercase">ESKİZ YÜKLE</span>
                                             <p className="text-[9px] opacity-60 mt-1">Kağıt veya dijital çizim</p>
                                         </div>
                                     ) : (
                                         <>
                                            <div className="w-16 h-16 rounded-full border border-dashed border-[var(--app-text-muted)] group-hover:border-[var(--app-accent)] flex items-center justify-center mb-3 transition-colors">
                                                <span className="text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] text-3xl font-light">+</span>
                                            </div>
                                            <span className="text-xs tracking-widest font-medium font-[Oswald] text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] uppercase">GÖRSEL SEÇ</span>
                                         </>
                                     )}
                                </div>
                            )}
                        </div>

                        {/* GENERATED */}
                        <div className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex items-center justify-center shadow-inner">
                            {generatedImage ? (
                                <>
                                     <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" onClick={() => setZoomedImage(generatedImage)} />
                                     <button onClick={handleDownload} className="absolute bottom-4 right-4 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-4 py-2 rounded-lg text-xs font-[Oswald] shadow-xl hover:scale-105 transition-transform font-bold">İNDİR</button>
                                </>
                            ) : isLoading ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-10 h-10 border-2 border-[var(--app-accent)] border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-[10px] text-[var(--app-accent)] font-[Oswald] tracking-widest animate-pulse">SİHİR YAPILIYOR...</span>
                                </div>
                            ) : (
                                <div className="text-[var(--app-text-muted)] text-[10px] tracking-widest opacity-30 font-[Oswald] uppercase">SONUÇ ALANI</div>
                            )}
                        </div>
                     </div>
                </div>

                {/* RIGHT: TOOLS PANEL (Specific to Active Tool) */}
                <div className="flex-1 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-xl p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-6 border-b border-[var(--app-border)] pb-4">
                        <span className="w-2 h-8 bg-[var(--app-accent)] rounded-full"></span>
                        <h2 className="text-lg font-[Oswald] uppercase tracking-widest font-bold text-[var(--app-text)]">
                            {EXTRA_TOOLS_LIST.find(t => t.id === state.activeToolId)?.label}
                        </h2>
                    </div>
                    
                    {/* Render Specific Interface */}
                    <div className="flex-1 overflow-y-auto no-scrollbar">
                        {renderToolInterface()}
                    </div>

                    <button 
                        onClick={handleGenerate} 
                        disabled={!originalImage || isLoading} 
                        className="mt-6 w-full py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow-lg font-[Oswald] disabled:opacity-50 hover:brightness-110 transition-all active:scale-95"
                    >
                        UYGULA
                    </button>
                </div>

            </div>

            {error && <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-8 z-50 text-red-400 text-center text-sm pointer-events-none rounded-xl backdrop-blur-sm border border-red-500/30 m-4">{error}</div>}
        </div>
    );
};

export default ExtraTools;
