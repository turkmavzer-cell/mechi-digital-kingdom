
import React, { useState, useRef } from 'react';
import { VariantState, SubComponentProps } from '../types';
import { VARIANT_THEMES, VARIANT_STYLES, VARIANT_LIGHTING, VARIANT_THEME_VARIANTS, VARIANT_STYLE_VARIANTS, VARIANT_LIGHTING_VARIANTS } from '../constants';
import { generateVariantOptions } from '../services/geminiService';
import SelectorColumn from './SelectorColumn';
import DraggableScrollContainer from './DraggableScrollContainer';
import ImageSourceModal from './ImageSourceModal';
import LoadingScreen from './LoadingScreen';
import PromptSuggestionsModal from './PromptSuggestionsModal'; // Eklendi

const VariantGenerator: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [showPromptModal, setShowPromptModal] = useState(false); 
    const promptInputRef = useRef<HTMLInputElement>(null);
    const [state, setState] = useState<VariantState>({ 
        selectedTheme: 'none', 
        selectedStyle: 'none', 
        selectedLighting: 'none', 
        customPrompt: '',
        themeVariant: undefined,
        styleVariant: undefined,
        lightingVariant: undefined
    });
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
        const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [colorRefImage, setColorRefImage] = useState<string | null>(null);
    const [uploadTarget, setUploadTarget] = useState<'original' | 'colorRef'>('original');

    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [showSourceModal, setShowSourceModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const triggerUpload = (target: 'original' | 'colorRef') => {
        setUploadTarget(target);
        setShowSourceModal(true);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => { 
                if (uploadTarget === 'original') {
                    setOriginalImage(reader.result as string); 
                    setGeneratedImages([]); 
                } else {
                    setColorRefImage(reader.result as string);
                }
                setError(null); 
            };
            reader.readAsDataURL(file);
        }
        setShowSourceModal(false);
        if(fileInputRef.current) fileInputRef.current.value = '';
        if(cameraInputRef.current) cameraInputRef.current.value = '';
    };

    const handleThemeSelect = (id: string, variantPrompt?: string) => {
        setState(prev => ({ ...prev, selectedTheme: id, themeVariant: variantPrompt }));
        if (id === 'match_color') {
            triggerUpload('colorRef');
        }
    };

    const handleGenerate = async () => {
        if (!originalImage) return setError("Lütfen ana resmi yükleyin.");
        if (state.selectedTheme === 'match_color' && !colorRefImage) {
            return setError("Match özelliği için lütfen referans renk görselini yükleyin.");
        }
        if (state.selectedTheme === 'none' && state.selectedStyle === 'none' && state.selectedLighting === 'none') {
            return setError("En az bir seçenek (Renk, Stil veya Işık) seçin.");
        }

        setIsLoading(true); setError(null); setGeneratedImages([]);
        try {
            const results = await generateVariantOptions(originalImage, state, undefined, colorRefImage);
            setGeneratedImages(results);
            results.forEach((img, idx) => onHistoryUpdate(img, `Varyant ${idx + 1}`));
        } catch (err: any) { setError(err.message || "Hata."); } finally { setIsLoading(false); }
    };
    
    const handleReset = () => {
        setState({
            selectedTheme: 'none', 
            selectedStyle: 'none', 
            selectedLighting: 'none', 
            customPrompt: '',
            themeVariant: undefined,
            styleVariant: undefined,
            lightingVariant: undefined
        });
        setOriginalImage(null); 
        setColorRefImage(null);
        setGeneratedImages([]); 
        setError(null);
    }

    const hasResults = generatedImages.length > 0;

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

            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            <input type="file" ref={cameraInputRef} className="hidden" accept="image/*" capture="environment" onChange={handleImageUpload} />
            {showSourceModal && (
                <ImageSourceModal 
                    onClose={() => setShowSourceModal(false)}
                    onCameraSelect={() => cameraInputRef.current?.click()}
                    onGallerySelect={() => fileInputRef.current?.click()}
                />
            )}
            
            {!hasResults && (
                <div className="flex-none h-[35vh] flex gap-2 animate-in slide-in-from-top-4 duration-500">
                     <div 
                        className="flex-1 h-full border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden group flex items-center justify-center cursor-pointer"
                        onClick={() => !originalImage && triggerUpload('original')}
                    >
                         {originalImage ? (
                             <>
                                <img src={originalImage} alt="Orig" className="w-full h-full object-contain" onClick={() => triggerUpload('original')} />
                                <button onClick={(e) => {e.stopPropagation(); setOriginalImage(null);}} className="absolute top-2 right-2 bg-red-600/80 text-white w-6 h-6 rounded-full flex items-center justify-center">✕</button>
                                <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none"><span className="text-[8px] bg-black/50 text-white px-2 py-1 rounded font-[Oswald]">ANA GÖRSEL</span></div>
                             </>
                         ) : (
                             <div className="flex flex-col items-center">
                                 <div className="w-16 h-16 rounded-full border border-dashed border-[var(--app-text-muted)] group-hover:border-[var(--app-accent)] flex items-center justify-center mb-4 transition-colors">
                                     <span className="text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] text-3xl font-light">+</span>
                                 </div>
                                 <span className="text-xs font-[Oswald] tracking-widest text-[var(--app-text-muted)] uppercase">VARYANT İÇİN RESİM YÜKLE</span>
                             </div>
                         )}
                    </div>

                    {state.selectedTheme === 'match_color' && (
                        <div 
                            className="w-[120px] h-full border border-[var(--app-border)] border-dashed rounded-xl bg-[var(--app-bg)]/20 relative overflow-hidden group flex items-center justify-center cursor-pointer animate-in fade-in slide-in-from-right-10"
                            onClick={() => triggerUpload('colorRef')}
                        >
                            {colorRefImage ? (
                                <>
                                    <img src={colorRefImage} alt="ColorRef" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <button onClick={(e) => {e.stopPropagation(); setColorRefImage(null);}} className="absolute top-2 right-2 bg-red-600/80 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">✕</button>
                                    <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none"><span className="text-[8px] bg-[var(--app-accent)] text-[var(--app-on-accent)] px-2 py-1 rounded font-[Oswald]">RENK KAYNAĞI</span></div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center text-center p-2">
                                    <div className="w-10 h-10 rounded-full bg-[var(--app-accent)]/10 flex items-center justify-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--app-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.418a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.002 16.002 0 00-4.649 4.763m5.42 5.419a15.996 15.996 0 01-3.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.418a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.002 16.002 0 00-4.649 4.763" /></svg>
                                    </div>
                                    <span className="text-[9px] font-[Oswald] tracking-widest text-[var(--app-text-muted)]">RENK FOTOSU YÜKLE</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {hasResults && (
                <div className="flex-none h-[35vh] flex gap-2 animate-in zoom-in duration-500">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex flex-col items-center justify-center transition-all shadow-lg hover:border-[var(--app-accent)]/50">
                            {generatedImages[i] ? (
                                <>
                                    <img src={generatedImages[i]} alt={`Var ${i+1}`} className="w-full h-full object-cover animate-in fade-in duration-500 cursor-zoom-in" onClick={() => setZoomedImage(generatedImages[i])} />
                                    <button onClick={() => handleDownload(generatedImages[i])} className="absolute bottom-4 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-4 py-2 rounded-full font-[Oswald] text-xs font-bold shadow-xl opacity-90 hover:opacity-100 hover:scale-105 transition-all">İNDİR</button>
                                </>
                            ) : (
                                <div className="w-8 h-8 border-2 border-[var(--app-accent)] border-t-transparent rounded-full animate-spin"></div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="flex-none flex gap-2 h-10 items-center">
                 <button onClick={handleReset} className="w-10 h-full rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                 </button>
                 
                 <div className="flex-1 h-full relative">
<>
    <PromptSuggestionsModal 
        isOpen={showPromptModal}
        onClose={() => setShowPromptModal(false)}
        moduleType="variant"
        themeColor={themeColor}
        onSelect={(txt) => { setState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
        onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
    />
    <input 
        ref={promptInputRef}
        type="text" 
        value={state.customPrompt} 
        onChange={(e) => setState(prev => ({ ...prev, customPrompt: e.target.value }))} 
        onClick={() => { if(!state.customPrompt) setShowPromptModal(true); }}
        className="w-full h-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg pl-4 pr-24 text-[var(--app-text)] placeholder-[var(--app-text-muted)] focus:border-[var(--app-accent)] outline-none font-[Oswald] tracking-wide text-xs" 
        placeholder="Özel talimat ekle (isteğe bağlı)..." 
    />
</>                    <button 
                        onClick={handleGenerate} 
                        disabled={!originalImage || isLoading} 
                        className="absolute right-1 top-1 bottom-1 px-4 rounded font-bold tracking-widest uppercase bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow-lg font-[Oswald] text-xs disabled:opacity-50 hover:brightness-110 active:scale-95 transition-all"
                    >
                        {hasResults ? 'YENİLE' : 'OLUŞTUR'}
                    </button>
                 </div>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                <DraggableScrollContainer className="flex h-full gap-2 pb-1">
                 <div className="flex-1 min-w-[120px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden">
                     <SelectorColumn 
                        title="RENK KONUSU" 
                        items={VARIANT_THEMES} 
                        selectedId={state.selectedTheme} 
                        variants={VARIANT_THEME_VARIANTS}
                        onSelect={handleThemeSelect} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                     />
                 </div>
                 <div className="flex-1 min-w-[120px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden">
                     <SelectorColumn 
                        title="SANATSAL STİL" 
                        items={VARIANT_STYLES} 
                        selectedId={state.selectedStyle} 
                        variants={VARIANT_STYLE_VARIANTS}
                        onSelect={(id, v) => setState(prev => ({ ...prev, selectedStyle: id, styleVariant: v }))} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                     />
                 </div>
                 <div className="flex-1 min-w-[120px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden">
                     <SelectorColumn 
                        title="IŞIKLANDIRMA" 
                        items={VARIANT_LIGHTING} 
                        selectedId={state.selectedLighting} 
                        variants={VARIANT_LIGHTING_VARIANTS}
                        onSelect={(id, v) => setState(prev => ({ ...prev, selectedLighting: id, lightingVariant: v }))} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                     />
                 </div>
                </DraggableScrollContainer>
            </div>

            {isLoading && generatedImages.length === 0 && (
                <LoadingScreen 
                    message="VARYANTLAR ÜRETİLİYOR..." 
                    submessage={state.selectedTheme === 'match_color' ? 'Renkler ve dokular transfer ediliyor' : 'Alternatif seçenekler hazırlanıyor'} 
                />
            )}

            {error && <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-8 z-50 text-red-400 text-center text-xs pointer-events-none">{error}</div>}
        </div>
    );
};

export default VariantGenerator;
