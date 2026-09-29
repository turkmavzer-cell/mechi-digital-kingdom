
import React, { useState, useRef } from 'react'; // useRef eklendi
import { CarpetState, CarpetOptionGroup, SubComponentProps } from '../types';
import { KIDS_CARPET_GROUPS, REAL_CARPET_GROUPS } from '../constants';
import { generateCarpetDesign } from '../services/geminiService';
import SelectorColumn from './SelectorColumn';
import DraggableScrollContainer from './DraggableScrollContainer';
import LoadingScreen from './LoadingScreen';
import PromptSuggestionsModal from './PromptSuggestionsModal'; // Pencere bileşeni eklendi

const CarpetDesigner: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [carpetState, setCarpetState] = useState<CarpetState>({
        mode: 'kids',
        selectedTags: [],
        shape: '3:4',
        customPrompt: ''
    });

    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [resultImage, setResultImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPromptModal, setShowPromptModal] = useState(false); // Pencereyi açan anahtar
    const promptInputRef = useRef<HTMLInputElement>(null); // Yazı kutusuna odaklanma aracı

    const handleGenerate = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await generateCarpetDesign(carpetState);
            setResultImage(result);
            onHistoryUpdate(result, 'Halı Tasarımcısı');
        } catch (err: any) {
            setError(err.message || "Hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGroupSelect = (group: CarpetOptionGroup, selectedId: string) => {
        setCarpetState(prev => {
            const groupOptionIds = group.options.map(o => o.id);
            const newTags = prev.selectedTags.filter(tag => !groupOptionIds.includes(tag));
            if (selectedId !== 'none') newTags.push(selectedId);
            return { ...prev, selectedTags: newTags };
        });
    };

    const getSelectedIdForGroup = (group: CarpetOptionGroup): string => {
        const groupOptionIds = group.options.map(o => o.id);
        return carpetState.selectedTags.find(tag => groupOptionIds.includes(tag)) || 'none';
    };

    const handleReset = () => {
        setCarpetState({
            mode: 'kids',
            selectedTags: [],
            shape: '3:4',
            customPrompt: ''
        });
        setResultImage(null);
        setError(null);
    };

    const activeGroups = carpetState.mode === 'kids' ? KIDS_CARPET_GROUPS : REAL_CARPET_GROUPS;

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
             {zoomedImage && (
                <div 
                    className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center cursor-pointer p-4"
                    onClick={() => setZoomedImage(null)}
                >
                    <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain border-2 border-[var(--app-accent)] rounded-lg shadow-2xl" />
                </div>
            )}
            
            <div className="flex-none flex flex-col gap-2 h-[35vh]">
                <div className="flex bg-[var(--app-surface)] p-1 rounded-lg border border-[var(--app-border)] w-full shrink-0 h-10 items-center">
                    <button onClick={() => setCarpetState(s => ({ ...s, mode: 'kids' }))} className={`flex-1 py-1 rounded-md font-[Oswald] tracking-widest transition-all text-[10px] md:text-xs font-bold h-full ${carpetState.mode === 'kids' ? 'bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow' : 'text-[var(--app-text-muted)] hover:bg-[var(--app-bg)]'}`}>ÇOCUK</button>
                    <button onClick={() => setCarpetState(s => ({ ...s, mode: 'real' }))} className={`flex-1 py-1 rounded-md font-[Oswald] tracking-widest transition-all text-[10px] md:text-xs font-bold h-full ${carpetState.mode === 'real' ? 'bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow' : 'text-[var(--app-text-muted)] hover:bg-[var(--app-bg)]'}`}>GERÇEKÇİ</button>
                </div>

                <div className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex items-center justify-center shadow-lg">
                    {resultImage ? (
                        <>
                            <img src={resultImage} alt="Carpet" className="w-full h-full object-contain p-2" onClick={() => setZoomedImage(resultImage)} />
                             <button onClick={() => handleDownload(resultImage!)} className="absolute top-2 right-2 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-3 py-1 rounded-full text-[10px] font-[Oswald] shadow-lg">İNDİR</button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center opacity-30 gap-2">
                             <div className="w-12 h-12 border-2 border-dashed border-[var(--app-text-muted)] rounded-lg"></div>
                             <span className="font-[Oswald] tracking-widest text-[10px] uppercase">ÖNİZLEME</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-none flex gap-2 items-center h-10">
                <button onClick={handleReset} className="w-10 h-full rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                </button>
<>
    <PromptSuggestionsModal 
        isOpen={showPromptModal}
        onClose={() => setShowPromptModal(false)}
        moduleType="editor"
        themeColor={themeColor}
        onSelect={(txt) => { setCarpetState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
        onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
    />
    <input 
        ref={promptInputRef}
        type="text" 
        value={carpetState.customPrompt} 
        onChange={(e) => setCarpetState(s => ({ ...s, customPrompt: e.target.value }))} 
        onClick={() => { if(!carpetState.customPrompt) setShowPromptModal(true); }}
        className="flex-1 h-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-3 text-[var(--app-text)] focus:border-[var(--app-accent)] outline-none text-xs font-[Oswald]" 
        placeholder="Desen detayı (isteğe bağlı)..." 
    />
</>
                <button 
                    onClick={handleGenerate} 
                    disabled={isLoading} 
                    className="h-full px-5 rounded-lg text-xs font-bold tracking-widest uppercase bg-[var(--app-accent)] text-[var(--app-on-accent)] shadow-lg font-[Oswald] disabled:opacity-50 hover:brightness-110 transition-all"
                >
                    {isLoading ? '...' : 'TASARLA'}
                </button>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                 <DraggableScrollContainer className="flex flex-row h-full gap-1 pb-1">
                    {activeGroups.map((group) => {
                        const hasSelection = getSelectedIdForGroup(group) !== 'none';
                        return (
                             <div 
                                key={group.id} 
                                className={`
                                    h-full rounded-lg overflow-hidden border transition-all duration-300 ease-in-out bg-[var(--app-surface)] flex flex-col relative
                                    ${hasSelection 
                                        ? 'flex-[1.5] border-[var(--app-accent)] ring-1 ring-[var(--app-accent)]/30 min-w-[100px] opacity-100' 
                                        : 'flex-1 border-[var(--app-border)] min-w-[70px] opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
                                    }
                                `}
                            >
                                <SelectorColumn 
                                    title={group.title}
                                    items={group.options}
                                    selectedId={getSelectedIdForGroup(group)}
                                    onSelect={(id) => handleGroupSelect(group, id)}
                                    themeColor={themeColor}
                                    enableHaptic={enableHaptic}
                                />
                            </div>
                        );
                    })}
                </DraggableScrollContainer>
            </div>
            
             {error && (
                <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
                    <div className="bg-red-900/90 p-4 rounded-xl text-white text-center border border-red-500">
                        <span className="text-xs font-[Oswald]">{error}</span>
                        <button onClick={() => setError(null)} className="block w-full mt-2 bg-white/20 px-4 py-1 rounded text-[10px] font-[Oswald] uppercase">Kapat</button>
                    </div>
                </div>
            )}

            {isLoading && !resultImage && (
                <LoadingScreen 
                    message="HALI DOKUNUYOR..." 
                    submessage="Özel desenler ve tekstil dokuları oluşturuluyor" 
                />
            )}
        </div>
    );
};

export default CarpetDesigner;
