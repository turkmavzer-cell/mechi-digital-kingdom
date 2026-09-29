import React, { useState, useRef } from 'react';
import { OutfitState, OutfitImages, SubComponentProps, QueuedOutfit } from '../types';
import { 
    OUTFIT_CONCEPTS, MODEL_DETAILS, OUTFIT_WEAR_TYPES, OUTFIT_VIEWS, OUTFIT_AGES, 
    OUTFIT_CONCEPT_VARIANTS, MODEL_DETAIL_VARIANTS, OUTFIT_WEAR_VARIANTS, 
    OUTFIT_VIEW_VARIANTS, OUTFIT_AGE_VARIANTS, OUTFIT_BODY_TYPES, 
    OUTFIT_BODY_TYPE_VARIANTS, OUTFIT_SHOE_TYPES, OUTFIT_SHOE_VARIANTS,
    OUTFIT_COLORS
} from '../constants';
import { generateOutfitCombination } from '../services/geminiService';
import SelectorColumn from './SelectorColumn';
import DraggableScrollContainer from './DraggableScrollContainer';
import ImageSourceModal from './ImageSourceModal';
import LoadingScreen from './LoadingScreen';
import PromptSuggestionsModal from './PromptSuggestionsModal';

const OutfitCombiner: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [outfitState, setOutfitState] = useState<OutfitState>({
        selectedConcept: 'none',
        selectedModelDetail: 'none',
        selectedBodyType: 'none',
        selectedWearType: [],
        selectedShoeType: [], 
        selectedView: 'none', 
        selectedAge: 'none',
        customPrompt: '',
        conceptVariant: undefined,
        modelVariant: undefined,
        bodyTypeVariant: undefined,
        viewVariant: undefined,
        ageVariant: undefined,
        wearVariant: undefined,
        shoeVariant: undefined,
        selectedColor: 'none', // Başlangıç değeri
    });

    const [images, setImages] = useState<OutfitImages>({
        fullBody: null,
        topWear: null,
        bottomWear: null,
        shoes: null,
        accessory: null,
        model: null
    });

    // Yeni: Kuyruk state'i
    const [queue, setQueue] = useState<QueuedOutfit[]>([]);
    const [isBatchLoading, setIsBatchLoading] = useState(false);
    const [batchProgress, setBatchProgress] = useState(0);

    const [showSourceModal, setShowSourceModal] = useState(false);
    const [showPromptModal, setShowPromptModal] = useState(false);
    const [activeUploadKey, setActiveUploadKey] = useState<keyof OutfitImages | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const promptInputRef = useRef<HTMLInputElement>(null);

    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [resultImage, setResultImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isProductOnlyMode = outfitState.selectedModelDetail === 'no_model';

    const triggerHaptic = () => {
        if (enableHaptic && navigator.vibrate) {
            navigator.vibrate(15);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && activeUploadKey) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(prev => ({ ...prev, [activeUploadKey]: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
        setShowSourceModal(false);
        if(fileInputRef.current) fileInputRef.current.value = '';
        if(cameraInputRef.current) cameraInputRef.current.value = '';
    };

    const triggerUpload = (key: keyof OutfitImages) => {
        setActiveUploadKey(key);
        setShowSourceModal(true);
    };

    const handleWearTypeSelect = (id: string, variant?: string) => {
        if (id === 'none') {
            setOutfitState(prev => ({ ...prev, selectedWearType: [], wearVariant: undefined }));
            return;
        }
        setOutfitState(prev => {
            const current = prev.selectedWearType;
            let newWearType = [...current];
            if (current.includes(id)) {
                newWearType = current.filter(x => x !== id);
            } else {
                if (current.length >= 2) {
                    const [, ...rest] = current;
                    newWearType = [...rest, id];
                } else {
                    newWearType = [...current, id];
                }
            }
            return { ...prev, selectedWearType: newWearType, wearVariant: variant || prev.wearVariant };
        });
    };

    const handleShoeTypeSelect = (id: string, variant?: string) => {
        if (id === 'none') {
            setOutfitState(prev => ({ ...prev, selectedShoeType: [], shoeVariant: undefined }));
            return;
        }
        setOutfitState(prev => {
            const current = prev.selectedShoeType;
            let newShoeType = [...current];
            if (current.includes(id)) {
                newShoeType = current.filter(x => x !== id);
            } else {
                if (current.length >= 2) {
                    const [, ...rest] = current;
                    newShoeType = [...rest, id];
                } else {
                    newShoeType = [...current, id];
                }
            }
            return { ...prev, selectedShoeType: newShoeType, shoeVariant: variant || prev.shoeVariant };
        });
    };

    const handleGenerate = async () => {
        if (!images.fullBody && !images.topWear && !images.bottomWear && !images.accessory && !images.shoes) {
            setError("En az bir parça görseli yüklemelisiniz.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setResultImage(null);
        try {
            const result = await generateOutfitCombination(images, outfitState);
            setResultImage(result);
            onHistoryUpdate(result, 'Kombin Yapıcı');
        } catch (err: any) {
            setError(err.message || "Kombin oluşturulurken hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    // Yeni: Kuyruğa ekleme fonksiyonu
    const handleAddToQueue = () => {
        if (queue.length >= 100) {
            alert("Maksimum 100 öğe sıraya alabilirsiniz.");
            return;
        }
        if (!images.fullBody && !images.topWear && !images.bottomWear && !images.accessory && !images.shoes) {
            setError("Kuyruğa eklemek için en az bir parça görseli yüklemelisiniz.");
            return;
        }

        triggerHaptic();
        
        // Mevcut durumu derin kopyalayarak kuyruğa ekle
        const newItem: QueuedOutfit = {
            state: JSON.parse(JSON.stringify(outfitState)),
            images: { ...images }
        };
        
        setQueue(prev => [...prev, newItem]);
    };

    // Yeni: Kuyruğu işleme fonksiyonu - Akıllı Hata Yönetimi Eklendi
    const handleGenerateAll = async () => {
        if (queue.length === 0) return;
        
        setIsBatchLoading(true);
        setBatchProgress(0);
        setError(null);
        setResultImage(null);

        let completedCount = 0;
        try {
            for (let i = 0; i < queue.length; i++) {
                setBatchProgress(i + 1);
                const item = queue[i];
                const result = await generateOutfitCombination(item.images, item.state);
                onHistoryUpdate(result, `Kombin (Sıradan #${i+1})`);
                if (i === queue.length - 1) setResultImage(result);
                completedCount++;
            }
            setQueue([]); // İşlem bitince temizle
        } catch (err: any) {
            const remainingCount = queue.length - completedCount;
            setError(`Kuyrukta hata oluştu. Başarılı: ${completedCount}, Kalan: ${remainingCount}. Kalanlar sırada bekliyor.`);
            setQueue(prev => prev.slice(completedCount)); // Başarılı olanları kuyruktan çıkar
        } finally {
            setIsBatchLoading(false);
            setBatchProgress(0);
        }
    };

    // Added missing required property 'selectedColor' to the handleReset object
    const handleReset = () => {
        setOutfitState({
            selectedConcept: 'none',
            selectedModelDetail: 'none',
            selectedBodyType: 'none',
            selectedWearType: [],
            selectedShoeType: [], 
            selectedView: 'none', 
            selectedAge: 'none',
            customPrompt: '',
            selectedColor: 'none',
        });
        setImages({
            fullBody: null,
            topWear: null,
            bottomWear: null,
            shoes: null,
            accessory: null,
            model: null
        });
        setResultImage(null);
        setError(null);
        setQueue([]);
    };

    const renderUploadBox = (key: keyof OutfitImages, label: string) => (
        <div 
            onClick={() => !images[key] && triggerUpload(key)}
            className="flex-1 min-w-[70px] h-full relative border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/50 hover:border-[var(--app-accent)] hover:bg-[var(--app-bg)]/80 transition-all group flex flex-col items-center justify-center text-center p-0.5 overflow-hidden shrink-0 cursor-pointer"
        >
            {images[key] ? (
                <>
                    <img src={images[key]!} alt={label} className="w-full h-full object-contain rounded-lg" onClick={(e) => { e.stopPropagation(); setZoomedImage(images[key]) }} />
                    <div className="absolute top-1 right-1 bg-black/80 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 active:scale-125" onClick={(e) => { e.stopPropagation(); setImages(prev => ({ ...prev, [key]: null })); }}>
                        <span className="text-white font-bold text-[10px]">✕</span>
                    </div>
                </>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                    <div className="w-5 h-5 rounded-full border border-dashed border-[var(--app-text-muted)] group-hover:border-[var(--app-accent)] flex items-center justify-center transition-colors">
                        <span className="text-sm text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] text-lg font-light">+</span>
                    </div>
                    <span className="text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] font-[Oswald] text-[7px] uppercase font-bold tracking-widest leading-tight">{label}</span>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
             <PromptSuggestionsModal 
                isOpen={showPromptModal}
                onClose={() => setShowPromptModal(false)}
                moduleType="outfit"
                themeColor={themeColor}
                onSelect={(txt) => { setOutfitState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
                onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
            />

             {zoomedImage && (
                <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center cursor-pointer p-4" onClick={() => setZoomedImage(null)}>
                    <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain shadow-2xl border-2 border-[var(--app-accent)]/50 rounded-lg" />
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
            
            <div className="flex-none h-[30vh] flex gap-2 overflow-x-auto pb-1 no-scrollbar snap-x snap-mandatory">
                <div className="flex flex-col gap-2 min-w-[110px] md:min-w-[160px] flex-shrink-0 snap-center h-full">
                    {renderUploadBox('fullBody', 'TAM BOY GİYİM')}
                </div>
                <div className="flex flex-col gap-2 min-w-[90px] md:min-w-[140px] flex-shrink-0 snap-center h-full">
                    {renderUploadBox('topWear', 'Üst Giyim')}
                    {renderUploadBox('bottomWear', 'Alt Giyim')}
                </div>
                <div className="flex flex-col gap-2 min-w-[90px] md:min-w-[140px] flex-shrink-0 snap-center h-full">
                    {renderUploadBox('shoes', 'Ayakkabı')}
                    {renderUploadBox('accessory', 'Aksesuar')}
                </div>
                <div className="flex flex-col gap-2 min-w-[110px] md:min-w-[160px] flex-shrink-0 snap-center h-full">
                    {renderUploadBox('model', 'Duruş Referans')}
                </div>
            </div>

            <div className="flex-none flex flex-wrap md:flex-nowrap gap-2 items-center min-h-[40px] h-auto">
                <button onClick={handleReset} className="w-10 h-10 rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                </button>
                <input 
                    ref={promptInputRef}
                    type="text" 
                    value={outfitState.customPrompt} 
                    onChange={(e) => setOutfitState(s => ({...s, customPrompt: e.target.value}))} 
                    onClick={() => { if(!outfitState.customPrompt) setShowPromptModal(true); }}
                    className="flex-1 min-w-[150px] h-10 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-4 text-[var(--app-text)] placeholder-[var(--app-text-muted)] focus:border-[var(--app-accent)] outline-none font-[Oswald] tracking-wide text-xs" 
                    placeholder="Ekstra talimat..." 
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
                        className={`h-full px-4 rounded-lg font-bold font-[Oswald] tracking-[0.1em] uppercase transition-all shadow-lg whitespace-nowrap text-[9px] ${isLoading ? 'bg-gray-700 text-gray-400 cursor-wait' : 'bg-[var(--app-accent)] hover:brightness-110 text-[var(--app-on-accent)]'}`}
                    >
                        {isLoading ? '...' : 'KOMBİNLE'}
                    </button>
                    
                    {queue.length > 0 && (
                        <button 
                            onClick={handleGenerateAll}
                            disabled={isLoading || isBatchLoading}
                            className="h-full px-3 rounded-lg font-bold font-[Oswald] tracking-[0.1em] uppercase bg-green-600 text-white shadow-lg animate-pulse hover:animate-none text-[9px]"
                        >
                            SIRAYI BAŞLAT
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                <DraggableScrollContainer className="flex flex-row h-full gap-1.5 pb-1">
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="MANKEN"
                            items={MODEL_DETAILS}
                            selectedId={outfitState.selectedModelDetail}
onSelect={(id, v) => {
    setOutfitState(s => {
        const newState = { ...s, selectedModelDetail: id, modelVariant: v };
        // Eğer "Mankensiz" modu seçildiyse, ilgili alanları sıfırla
        if (id === 'no_model') {
            newState.selectedBodyType = 'none';
            newState.selectedAge = 'none';
            newState.selectedView = 'none';
            newState.selectedShoeType = []; // Bu bir dizi olduğu için boş dizi yapıyoruz
            // Varyantlarını da temizleyelim
            newState.bodyTypeVariant = undefined;
            newState.ageVariant = undefined;
            newState.viewVariant = undefined;
            newState.shoeVariant = undefined;
        }
        return newState;
    });
}}                            variants={MODEL_DETAIL_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="FİZİK"
                            items={OUTFIT_BODY_TYPES}
                            selectedId={outfitState.selectedBodyType}
                            onSelect={(id, v) => setOutfitState(s => ({...s, selectedBodyType: id, bodyTypeVariant: v}))}
                            variants={OUTFIT_BODY_TYPE_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                            isDisabled={isProductOnlyMode}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="YAŞ"
                            items={OUTFIT_AGES}
                            selectedId={outfitState.selectedAge}
                            onSelect={(id, v) => setOutfitState(s => ({...s, selectedAge: id, ageVariant: v}))}
                            variants={OUTFIT_AGE_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                            isDisabled={isProductOnlyMode}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="KONSEPT"
                            items={OUTFIT_CONCEPTS}
                            selectedId={outfitState.selectedConcept}
                            onSelect={(id, v) => setOutfitState(s => ({...s, selectedConcept: id, conceptVariant: v}))}
                            variants={OUTFIT_CONCEPT_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="KADRAJ"
                            items={OUTFIT_VIEWS}
                            selectedId={outfitState.selectedView}
                            onSelect={(id, v) => setOutfitState(s => ({...s, selectedView: id, viewVariant: v}))}
                            variants={OUTFIT_VIEW_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                            isDisabled={isProductOnlyMode}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="GİYİM"
                            items={OUTFIT_WEAR_TYPES}
                            selectedId={outfitState.selectedWearType}
                            onSelect={(id, v) => handleWearTypeSelect(id, v)}
                            variants={OUTFIT_WEAR_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="RENK"
                            items={OUTFIT_COLORS}
                            selectedId={outfitState.selectedColor}
                            onSelect={(id, v) => setOutfitState(s => ({...s, selectedColor: id, colorVariant: v}))}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                        />
                    </div>
                    <div className="h-full min-w-[110px] md:min-w-[170px] rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden flex flex-col snap-center">
                        <SelectorColumn 
                            title="AYAKKABI"
                            items={OUTFIT_SHOE_TYPES}
                            selectedId={outfitState.selectedShoeType}
                            onSelect={(id, v) => handleShoeTypeSelect(id, v)}
                            variants={OUTFIT_SHOE_VARIANTS}
                            themeColor={themeColor}
                            enableHaptic={enableHaptic}
                            isDisabled={isProductOnlyMode}
                        />
                    </div>
                </DraggableScrollContainer>
            </div>

            {resultImage && (
                <div className="flex-none h-16 flex items-center justify-between bg-[var(--app-surface)] border border-[var(--app-border)] rounded-xl px-3 animate-in slide-in-from-bottom duration-300">
                    <div className="flex items-center gap-2">
                         <div className="w-10 h-10 rounded bg-[var(--app-bg)] border border-[var(--app-border)] overflow-hidden cursor-pointer" onClick={() => setZoomedImage(resultImage)}>
                            <img src={resultImage} className="w-full h-full object-cover" alt="Result Small" />
                         </div>
                         <div>
                             <p className="text-[var(--app-accent)] font-[Oswald] text-[10px] font-bold uppercase tracking-wider">Kombin Hazır</p>
                             <p className="text-[var(--app-text-muted)] text-[8px] uppercase tracking-widest">Önizlemek için dokun</p>
                         </div>
                    </div>
                    <button onClick={() => handleDownload(resultImage)} className="bg-[var(--app-accent)] text-[var(--app-on-accent)] px-5 py-1.5 rounded-lg font-[Oswald] text-[10px] font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform">İndir</button>
                </div>
            )}

             {isLoading && !resultImage && (
                <LoadingScreen 
                    message="KOMBIN TASARLANIYOR..." 
                    submessage="Manken giydiriliyor ve sahne hazırlanıyor" 
                />
            )}

            {isBatchLoading && (
                <LoadingScreen 
                    message={`${batchProgress} / ${queue.length} İŞLENİYOR...`}
                    submessage="Lütfen bekleyin, tüm kombinler sırayla üretiliyor." 
                />
            )}
            
            {error && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top duration-300 pointer-events-none">
                    <div className="bg-red-950/90 border border-red-500/50 text-red-200 px-6 py-2 rounded-full shadow-2xl backdrop-blur-md text-[9px] font-[Oswald] uppercase tracking-widest whitespace-nowrap">
                        <span className="mr-2">⚠️</span> {error}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OutfitCombiner;