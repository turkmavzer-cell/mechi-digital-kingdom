import React, { useState, useRef } from 'react';
import { PatternState, SubComponentProps, QueuedPattern } from '../types';
import { PATTERN_CATEGORIES, LOGO_STYLE_VARIANTS } from '../constants';
import { generatePatternChange } from '../services/geminiService';
import SelectorColumn from './SelectorColumn';
import DraggableScrollContainer from './DraggableScrollContainer';
import ImageSourceModal from './ImageSourceModal';
import LoadingScreen from './LoadingScreen';
import PromptSuggestionsModal from './PromptSuggestionsModal';

const PatternModifier: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [showPromptModal, setShowPromptModal] = useState(false);
    const promptInputRef = useRef<HTMLInputElement>(null);
    const [state, setState] = useState<PatternState>({
        selectedMaterial: 'none',
        selectedPattern: 'none',
        selectedStyle: 'none',
        selectedStickerStyle: 'none',
        selectedStickerBorder: 'none',
        selectedLogoStyle: [], 
        selectedProductShoot: 'none',
        selectedColor: 'none',
        selectedTechnique: 'none',
        customPrompt: '',
        logoVariant: undefined
    });

    // Yeni: Kuyruk state'leri
    const [queue, setQueue] = useState<QueuedPattern[]>([]);
    const [isBatchLoading, setIsBatchLoading] = useState(false);
    const [batchProgress, setBatchProgress] = useState(0);

    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const [showSourceModal, setShowSourceModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const triggerHaptic = () => {
        if (enableHaptic && navigator.vibrate) {
            navigator.vibrate(15);
        }
    };

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

    const handleLogoSelect = (id: string, variantPrompt?: string) => {
        if (id === 'none') {
            setState(prev => ({ ...prev, selectedLogoStyle: [], logoVariant: undefined }));
            return;
        }
        setState(prev => {
            const current = prev.selectedLogoStyle || [];
            const isAlreadySelected = current.includes(id);
            const newStyles = isAlreadySelected 
                ? current.filter(x => x !== id)
                : current.length < 3 
                    ? [...current, id] 
                    : current;
            
            return { 
                ...prev, 
                selectedLogoStyle: newStyles,
                logoVariant: variantPrompt || prev.logoVariant 
            };
        });
    };

    const handleGenerate = async () => {
        const isLogoMode = state.selectedLogoStyle.length > 0;
        
        if (!originalImage && !isLogoMode) {
            return setError("Lütfen bir resim yükleyin veya bir Logo Tasarım stili seçin.");
        }

        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);
        try {
            const result = await generatePatternChange(originalImage, state);
            setGeneratedImage(result);
            onHistoryUpdate(result, isLogoMode ? 'Logo Tasarımcı' : 'Desen Değiştirici');
        } catch (err: any) {
            setError(err.message || "Hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    // Yeni: Kuyruğa ekleme fonksiyonu
    const handleAddToQueue = () => {
        const isLogoMode = state.selectedLogoStyle.length > 0;
        if (!originalImage && !isLogoMode) {
            setError("Kuyruğa eklemek için bir görsel yükleyin veya logo stili seçin.");
            return;
        }
        if (queue.length >= 100) {
            alert("Maksimum 100 öğe sıraya alabilirsiniz.");
            return;
        }

        triggerHaptic();

        const newItem: QueuedPattern = {
            state: JSON.parse(JSON.stringify(state)),
            image: originalImage
        };

        setQueue(prev => [...prev, newItem]);
    };

    // Yeni: Kuyruğu işleme fonksiyonu - Akıllı Hata Yönetimi Eklendi
    const handleGenerateAll = async () => {
        if (queue.length === 0) return;

        setIsBatchLoading(true);
        setBatchProgress(0);
        setError(null);
        setGeneratedImage(null);

        let completedCount = 0;
        try {
            for (let i = 0; i < queue.length; i++) {
                setBatchProgress(i + 1);
                const item = queue[i];
                const result = await generatePatternChange(item.image, item.state);
                
                const moduleName = item.state.selectedLogoStyle.length > 0 ? 'Logo (Sıradan)' : 'Desen (Sıradan)';
                onHistoryUpdate(result, `${moduleName} #${i+1}`);
                
                if (i === queue.length - 1) setGeneratedImage(result);
                completedCount++;
            }
            setQueue([]); // Bittiğinde temizle
        } catch (err: any) {
            const remainingCount = queue.length - completedCount;
            setError(`Kuyrukta hata oluştu. Başarılı: ${completedCount}, Kalan: ${remainingCount}. Kalanlar sırada bekliyor.`);
            setQueue(prev => prev.slice(completedCount)); // Başarılıları çıkar
        } finally {
            setIsBatchLoading(false);
            setBatchProgress(0);
        }
    };

    const handleReset = () => {
        setState({ 
            selectedMaterial: 'none', 
            selectedPattern: 'none', 
            selectedStyle: 'none', 
            selectedStickerStyle: 'none', 
            selectedStickerBorder: 'none', 
            selectedLogoStyle: [], 
            selectedProductShoot: 'none',
            selectedColor: 'none', 
            selectedTechnique: 'none', 
            customPrompt: '',
            logoVariant: undefined
        });
        setOriginalImage(null);
        setGeneratedImage(null);
        setError(null);
        setQueue([]);
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

            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            <input type="file" ref={cameraInputRef} className="hidden" accept="image/*" capture="environment" onChange={handleImageUpload} />
            {showSourceModal && (
                <ImageSourceModal 
                    onClose={() => setShowSourceModal(false)}
                    onCameraSelect={() => cameraInputRef.current?.click()}
                    onGallerySelect={() => fileInputRef.current?.click()}
                />
            )}
            
            <div className="flex-none flex gap-2 h-[30vh]">
                <div 
                    className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden group flex items-center justify-center cursor-pointer"
                    onClick={() => !originalImage && setShowSourceModal(true)}
                >
                        {originalImage ? (
                        <>
                            <img src={originalImage} alt="Original" className="w-full h-full object-contain" onClick={() => setShowSourceModal(true)} />
                            <button onClick={(e) => {e.stopPropagation(); setOriginalImage(null);}} className="absolute top-2 right-2 bg-red-600/80 text-white w-6 h-6 rounded-full flex items-center justify-center">✕</button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center group w-full h-full">
                             <div className="w-10 h-10 rounded-full border border-dashed border-[var(--app-text-muted)] group-hover:border-[var(--app-accent)] flex items-center justify-center mb-1 transition-all">
                                <span className="text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] text-lg">+</span>
                             </div>
                            <span className="text-[8px] tracking-widest font-medium font-[Oswald] text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] uppercase text-center">YÜKLE</span>
                        </div>
                    )}
                </div>

                <div className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex items-center justify-center shadow-inner">
                    {generatedImage ? (
                        <>
                             <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" onClick={() => setZoomedImage(generatedImage)} />
                             <button onClick={() => handleDownload(generatedImage!)} className="absolute top-2 right-2 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-2 py-1 rounded-full text-[9px] font-[Oswald] shadow-lg">İNDİR</button>
                        </>
                    ) : (
                        <div className="text-[var(--app-text-muted)] text-[9px] tracking-widest opacity-30 font-[Oswald]">SONUÇ</div>
                    )}
                </div>
            </div>

            <div className="flex-none flex flex-wrap md:flex-nowrap gap-2 items-center min-h-[40px] h-auto">
                <PromptSuggestionsModal 
                    isOpen={showPromptModal}
                    onClose={() => setShowPromptModal(false)}
                    moduleType="editor"
                    themeColor={themeColor}
                    onSelect={(txt) => { setState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
                    onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
                />
                <button onClick={handleReset} className="w-10 h-10 rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                </button>
                <input 
                    ref={promptInputRef}
                    type="text" 
                    value={state.customPrompt} 
                    onChange={(e) => setState(s => ({ ...s, customPrompt: e.target.value }))} 
                    onClick={() => { if(!state.customPrompt) setShowPromptModal(true); }}
                    className="flex-1 min-w-[150px] h-10 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-3 text-[var(--app-text)] placeholder-[var(--app-text-muted)] focus:border-[var(--app-accent)] outline-none font-[Oswald] tracking-wide text-xs" 
                    placeholder="Talimat / Konsept..." 
                />

                <div className="flex gap-1 h-10 w-full md:w-auto justify-end">
                    <button 
                        onClick={handleAddToQueue}
                        disabled={isLoading || isBatchLoading}
                        className="h-full px-3 rounded-lg font-bold font-[Oswald] tracking-[0.1em] uppercase bg-blue-600/20 text-blue-400 border border-blue-600/50 hover:bg-blue-600 hover:text-white transition-all text-[9px] disabled:opacity-50"
                    >
                        SIRAYA AL ({queue.length})
                    </button>

                    <button 
                        onClick={handleGenerate} 
                        disabled={isLoading || isBatchLoading} 
                        className={`h-full px-4 rounded-lg font-[Oswald] uppercase tracking-wider font-bold hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-[9px] bg-[var(--app-accent)] text-[var(--app-on-accent)]`}
                    >
                        {isLoading ? '...' : (originalImage ? 'UYGULA' : 'ÜRET')}
                    </button>

                    {queue.length > 0 && (
                        <button 
                            onClick={handleGenerateAll}
                            disabled={isLoading || isBatchLoading}
                            className="h-full px-3 rounded-lg font-bold font-[Oswald] tracking-[0.1em] uppercase bg-green-600 text-white shadow-lg animate-pulse hover:animate-none text-[9px]"
                        >
                            BAŞLAT
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                 <DraggableScrollContainer className="flex flex-row h-full gap-1.5 pb-1">
                    {PATTERN_CATEGORIES.map((cat) => {
                        const isLogo = cat.id === 'selectedLogoStyle';
                        return (
                            <div key={cat.id} className="h-full min-w-[110px] md:min-w-[180px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                                <SelectorColumn 
                                    title={cat.title} 
                                    items={cat.items} 
                                    selectedId={(state as any)[cat.id]} 
                                    variants={isLogo ? LOGO_STYLE_VARIANTS : undefined}
                                    onSelect={(id, variantPrompt) => {
                                        if (isLogo) {
                                            handleLogoSelect(id, variantPrompt);
                                        } else {
                                            setState(prev => ({ ...prev, [cat.id]: id }));
                                        }
                                    }} 
                                    themeColor={themeColor}
                                    enableHaptic={enableHaptic}
                                />
                            </div>
                        );
                    })}
                </DraggableScrollContainer>
            </div>

            {isLoading && !generatedImage && (
                <LoadingScreen 
                    message={state.selectedLogoStyle.length > 0 ? 'LOGO TASARLANIYOR...' : 'DESEN İŞLENİYOR...'} 
                    submessage="Yapay zeka görseli analiz ediyor ve oluşturuyor" 
                />
            )}

            {isBatchLoading && (
                <LoadingScreen 
                    message={`${batchProgress} / ${queue.length} İŞLENİYOR...`}
                    submessage="Toplu üretim devam ediyor, lütfen bekleyin." 
                />
            )}

            {error && <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"><div className="bg-red-900/90 p-4 rounded-xl text-white text-center border border-red-500"><span className="text-[10px] font-[Oswald]">{error}</span><button onClick={() => setError(null)} className="block w-full mt-2 bg-white/20 px-4 py-1 rounded text-[10px] font-[Oswald] uppercase">Kapat</button></div></div>}
        </div>
    );
};

export default PatternModifier;