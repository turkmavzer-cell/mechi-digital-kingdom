import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SubComponentProps, MockupState } from '../types';
import { MOCKUP_PRODUCTS, MOCKUP_VIEWS, MOCKUP_TEAMS, MOCKUP_NUMBERS, MOCKUP_MATERIALS, MOCKUP_PRODUCT_VARIANTS, MOCKUP_VIEW_VARIANTS, MOCKUP_LOGOS, MOCKUP_DESIGN_STYLES } from '../constants';
import { generateMockup, generateCommercialFlatDesign, generateKartelaMockup } from '../services/geminiService';
import SelectorColumn from './SelectorColumn';
import ImageSourceModal from './ImageSourceModal';
import LoadingScreen from './LoadingScreen';
import PromptSuggestionsModal from './PromptSuggestionsModal';

const MockupGenerator: React.FC<SubComponentProps> = ({ onHistoryUpdate, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [state, setState] = useState<MockupState>({
        selectedProduct: 'none',
        selectedView: 'none',
        selectedTeam: 'none',
        selectedDesignStyle: [], 
        selectedLogo: 'none',
        selectedNumber: 'none',
        selectedMaterial: 'none',
        customPrompt: '',
        productVariant: undefined,
        viewVariant: undefined
    });

    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [designImage, setDesignImage] = useState<string | null>(null); 
    const [logoImage, setLogoImage] = useState<string | null>(null); 
    
    const [flatResultImage, setFlatResultImage] = useState<string | null>(null); 
    const [resultImage, setResultImage] = useState<string | null>(null); 
    
    const [isLoading, setIsLoading] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [error, setError] = useState<string | null>(null);

    const [showSourceModal, setShowSourceModal] = useState(false);
    const [showModeModal, setShowModeModal] = useState(false); 
    const [showPromptModal, setShowPromptModal] = useState(false);
    const [activeUploadTarget, setActiveUploadTarget] = useState<'design' | 'logo'>('design');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const promptInputRef = useRef<HTMLInputElement>(null);

    const isKartela = state.selectedProduct === 'kartela';

    const triggerUpload = (target: 'design' | 'logo') => {
        setActiveUploadTarget(target);
        setShowSourceModal(true);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (activeUploadTarget === 'design') {
                    setDesignImage(reader.result as string);
                    setFlatResultImage(null); 
                } else {
                    setLogoImage(reader.result as string);
                }
                setResultImage(null); 
                setError(null);
            };
            reader.readAsDataURL(file);
        }
        setShowSourceModal(false);
        if(fileInputRef.current) fileInputRef.current.value = '';
        if(cameraInputRef.current) cameraInputRef.current.value = '';
    };

    const handleStyleSelect = (id: string) => {
        if (id === 'none') {
            setState(prev => ({ ...prev, selectedDesignStyle: [] }));
            return;
        }
        setState(prev => {
            const current = prev.selectedDesignStyle;
            let newStyles = [...current];
            if (current.includes(id)) {
                newStyles = current.filter(x => x !== id);
            } else {
                if (current.length >= 3) {
                    const [, ...rest] = current; 
                    newStyles = [...rest, id];
                } else {
                    newStyles = [...current, id];
                }
            }
            return { ...prev, selectedDesignStyle: newStyles };
        });
    };

    const handleStartGeneration = () => {
        if (state.selectedProduct === 'none') return setError("Lütfen bir ürün seçin.");
        if (isKartela) {
            executeGeneration('kartela');
        } else {
            setShowModeModal(true);
        }
    };

    const handleReset = () => {
        setState({
            selectedProduct: 'none',
            selectedView: 'none',
            selectedTeam: 'none',
            selectedDesignStyle: [], 
            selectedLogo: 'none',
            selectedNumber: 'none',
            selectedMaterial: 'none',
            customPrompt: '',
        });
        setDesignImage(null);
        setLogoImage(null);
        setFlatResultImage(null);
        setResultImage(null);
        setError(null);
    };

    const executeGeneration = async (mode: 'kartela' | 'redesign' | 'use_existing') => {
        setShowModeModal(false);
        setIsLoading(true);
        setError(null);
        setResultImage(null);
        
        if (mode !== 'use_existing' && !isKartela) {
            setFlatResultImage(null);
        }

        try {
            if (mode === 'kartela') {
                setStatusText("KARTELA HAZIRLANIYOR...");
                const result = await generateKartelaMockup(designImage, logoImage, state);
                setResultImage(result);
                onHistoryUpdate(result, 'Kartela Tasarım');
            } else if (mode === 'redesign') {
                setStatusText("2D TİCARİ TASARIM OLUŞTURULUYOR...");
                const flatDesign = await generateCommercialFlatDesign(designImage, state);
                setFlatResultImage(flatDesign);
                onHistoryUpdate(flatDesign, 'Mockup (2D Desen)');
                setStatusText("ÜRÜNE GİYDİRİLİYOR (3D RENDER)...");
                const mockup3d = await generateMockup(flatDesign, state);
                setResultImage(mockup3d);
                onHistoryUpdate(mockup3d, 'Mockup (3D)');
            } else if (mode === 'use_existing') {
                if (!designImage) throw new Error("Var olanı kullanmak için referans yükleyin.");
                setFlatResultImage(designImage); 
                setStatusText("GÖRSEL ÜRÜNE GİYDİRİLİYOR...");
                const mockup3d = await generateMockup(designImage, state);
                setResultImage(mockup3d);
                onHistoryUpdate(mockup3d, 'Mockup (Direkt)');
            }
        } catch (err: any) {
            setError(err.message || "Hata oluştu.");
        } finally {
            setIsLoading(false);
            setStatusText('');
        }
    };

    const handleDownload = (img: string, prefix: string) => {
        if (img) {
            const now = new Date();
            const dateStr = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
            const timeStr = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
            const filename = `mechi_${prefix}_${dateStr}_${timeStr}.png`;
            const link = document.createElement('a');
            link.href = img;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
             {zoomedImage && (
                <div 
                    className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4"
                    onClick={() => setZoomedImage(null)}
                >
                    <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain border border-[var(--app-accent)]/30 rounded-lg shadow-2xl" />
                </div>
            )}

            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            <input type="file" ref={cameraInputRef} className="hidden" accept="image/*" capture="environment" onChange={handleImageUpload} />
            
            <PromptSuggestionsModal 
                isOpen={showPromptModal}
                onClose={() => setShowPromptModal(false)}
                moduleType="mockup"
                themeColor={themeColor}
                onSelect={(txt) => { setState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
                onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
            />

            {showSourceModal && (
                <ImageSourceModal 
                    onClose={() => setShowSourceModal(false)}
                    onCameraSelect={() => cameraInputRef.current?.click()}
                    onGallerySelect={() => fileInputRef.current?.click()}
                />
            )}

            {showModeModal && createPortal(
                <div className="fixed inset-0 z-[2500] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
                    <div className="w-full max-w-sm bg-[var(--app-surface)] border border-[var(--app-border)] rounded-2xl shadow-2xl p-6 flex flex-col gap-4 animate-in zoom-in-50 duration-300">
                        <div className="text-center pb-2 border-b border-[var(--app-border)]">
                            <h3 className="text-[var(--app-accent)] font-[Oswald] uppercase tracking-[0.2em] font-bold text-xl">Tasarım Yöntemi</h3>
                        </div>
                        <button onClick={() => executeGeneration('use_existing')} disabled={!designImage} className={`w-full py-4 rounded-xl border transition-all group flex flex-col items-center gap-1 ${!designImage ? 'bg-gray-800/50 border-gray-700 opacity-50' : 'bg-[var(--app-bg)] border-[var(--app-border)] hover:border-[var(--app-accent)] hover:bg-[var(--app-accent)]/10'}`}>
                            <span className="font-[Oswald] text-sm font-bold text-[var(--app-text)] group-hover:text-[var(--app-accent)] tracking-widest uppercase">VAR OLANI KULLAN</span>
                        </button>
                        <button onClick={() => executeGeneration('redesign')} className="w-full py-4 rounded-xl bg-[var(--app-bg)] border border-[var(--app-border)] hover:border-[var(--app-accent)] hover:bg-[var(--app-accent)]/10 transition-all group flex flex-col items-center gap-1">
                            <span className="font-[Oswald] text-sm font-bold text-[var(--app-text)] group-hover:text-[var(--app-accent)] tracking-widest uppercase">{designImage ? "YENİDEN TASARLA" : "SIFIRDAN TASARLA"}</span>
                        </button>
                        <button onClick={() => setShowModeModal(false)} className="mt-2 w-full py-3 bg-transparent text-[var(--app-text-muted)] hover:text-red-500 font-[Oswald] uppercase tracking-widest text-xs">İptal</button>
                    </div>
                </div>, document.body
            )}
            
            <div className="flex-none flex gap-2 h-[35vh]">
                <div className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden group flex items-center justify-center cursor-pointer" onClick={() => !designImage && triggerUpload('design')}>
                    {designImage ? (
                        <>
                            <img src={designImage} alt="Ref" className="w-full h-full object-contain p-4" onClick={() => triggerUpload('design')} />
                            <button onClick={(e) => {e.stopPropagation(); setDesignImage(null);}} className="absolute top-2 right-2 bg-red-600/80 text-white w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">✕</button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                             <div className="w-10 h-10 rounded-full border border-dashed border-[var(--app-text-muted)] group-hover:border-[var(--app-accent)] flex items-center justify-center"><span className="text-lg font-light">+</span></div>
                            <span className="text-[9px] tracking-widest font-medium font-[Oswald] text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] uppercase text-center">{isKartela ? 'KUMAŞ' : 'REFERANS'}</span>
                        </div>
                    )}
                </div>

                <div className={`flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex items-center justify-center shadow-inner group ${isKartela ? 'cursor-pointer hover:border-[var(--app-accent)]/50' : ''}`} onClick={() => isKartela && !logoImage && triggerUpload('logo')}>
                    {isKartela ? (
                        logoImage ? (
                            <>
                                <img src={logoImage} alt="Logo" className="w-full h-full object-contain p-4" onClick={() => triggerUpload('logo')} />
                                <button onClick={(e) => {e.stopPropagation(); setLogoImage(null);}} className="absolute top-2 right-2 bg-red-600/80 text-white w-5 h-5 rounded-full flex items-center justify-center transition-all text-xs">✕</button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="w-10 h-10 rounded-full border border-dashed border-[var(--app-text-muted)] flex items-center justify-center"><span className="text-lg font-light">+</span></div>
                                <span className="text-[9px] tracking-widest uppercase text-center font-[Oswald]">LOGO</span>
                            </div>
                        )
                    ) : (
                        flatResultImage ? (
                            <>
                                <img src={flatResultImage} alt="2D Design" className="w-full h-full object-contain cursor-zoom-in p-2" onClick={() => setZoomedImage(flatResultImage)} />
                                <button onClick={() => handleDownload(flatResultImage, '2d_design')} className="absolute bottom-2 right-2 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-3 py-1 rounded text-[9px] font-[Oswald] opacity-0 group-hover:opacity-100 transition-all">İNDİR</button>
                            </>
                        ) : (
                            <div className="text-[var(--app-text-muted)] text-[9px] tracking-widest opacity-30 font-[Oswald] uppercase text-center">2D TASARIM</div>
                        )
                    )}
                </div>

                <div className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex items-center justify-center shadow-inner group">
                    {resultImage ? (
                        <>
                             <img src={resultImage} alt="3D Mockup" className="w-full h-full object-contain cursor-zoom-in" onClick={() => setZoomedImage(resultImage)} />
                             <button onClick={() => handleDownload(resultImage, '3d_mockup')} className="absolute bottom-4 right-4 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-4 py-2 rounded-lg text-xs font-[Oswald] shadow-xl opacity-0 group-hover:opacity-100 transition-all">İNDİR</button>
                        </>
                    ) : (
                        <div className="text-[var(--app-text-muted)] text-[9px] tracking-widest opacity-30 font-[Oswald] uppercase text-center">3D SONUÇ</div>
                    )}
                </div>
            </div>

            <div className="flex-none flex flex-wrap md:flex-nowrap gap-2 items-center min-h-[40px] h-auto">
                 <button onClick={handleReset} className="w-10 h-10 rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                 </button>
                 <input 
                    ref={promptInputRef}
                    type="text" 
                    value={state.customPrompt} 
                    onChange={(e) => setState(s => ({ ...s, customPrompt: e.target.value }))} 
                    onClick={() => { if(!state.customPrompt) setShowPromptModal(true); }}
                    className="flex-1 min-w-[150px] h-10 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-3 text-[var(--app-text)] focus:border-[var(--app-accent)] outline-none text-xs font-[Oswald]" 
                    placeholder="Ekstra not..." 
                 />
                <div className="flex gap-1 h-10 w-full md:w-auto justify-end">
                    <button onClick={handleStartGeneration} disabled={isLoading} className="h-full px-6 rounded-lg font-bold bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow-lg text-xs font-[Oswald] hover:brightness-110 active:scale-95 transition-all">
                        {isLoading ? '...' : 'BAŞLA'}
                    </button>
                </div>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                 <div className="flex flex-row h-full gap-2 overflow-x-auto pb-1">
                    <div className="h-full min-w-[140px] md:min-w-[180px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn title="ÜRÜN" items={MOCKUP_PRODUCTS} selectedId={state.selectedProduct} variants={MOCKUP_PRODUCT_VARIANTS} onSelect={(id, v) => setState(s => ({ ...s, selectedProduct: id, productVariant: v }))} themeColor={themeColor} enableHaptic={enableHaptic} />
                    </div>
                    {!isKartela && (
                    <>
                        <div className="h-full min-w-[140px] md:min-w-[180px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                            <SelectorColumn title="TASARIM" items={MOCKUP_DESIGN_STYLES} selectedId={state.selectedDesignStyle} onSelect={handleStyleSelect} themeColor={themeColor} enableHaptic={enableHaptic} />
                        </div>
                        <div className="h-full min-w-[140px] md:min-w-[180px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                            <SelectorColumn title="TAKIM" items={MOCKUP_TEAMS} selectedId={state.selectedTeam} onSelect={(id) => setState(s => ({ ...s, selectedTeam: id }))} themeColor={themeColor} enableHaptic={enableHaptic} />
                        </div>
                        <div className="h-full min-w-[100px] md:min-w-[120px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                            <SelectorColumn title="ARMA" items={MOCKUP_LOGOS} selectedId={state.selectedLogo} onSelect={(id) => setState(s => ({ ...s, selectedLogo: id }))} themeColor={themeColor} enableHaptic={enableHaptic} />
                        </div>
                        <div className="h-full min-w-[140px] md:min-w-[180px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                            <SelectorColumn title="SAHNE" items={MOCKUP_VIEWS} selectedId={state.selectedView} variants={MOCKUP_VIEW_VARIANTS} onSelect={(id, v) => setState(s => ({ ...s, selectedView: id, viewVariant: v }))} themeColor={themeColor} enableHaptic={enableHaptic} />
                        </div>
                    </>
                    )}
                    <div className="h-full min-w-[120px] md:min-w-[160px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn title="KUMAŞ" items={MOCKUP_MATERIALS} selectedId={state.selectedMaterial} onSelect={(id) => setState(s => ({ ...s, selectedMaterial: id }))} themeColor={themeColor} enableHaptic={enableHaptic} />
                    </div>
                </div>
            </div>

            {isLoading && (
                <LoadingScreen 
                    message={statusText} 
                    submessage={isKartela ? 'Kumaş ve logo birleştiriliyor' : 'Profesyonel üretim hattı çalışıyor'} 
                />
            )}
        </div>
    );
};

export default MockupGenerator;
