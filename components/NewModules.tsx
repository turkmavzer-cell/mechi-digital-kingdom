import LoadingScreen from './LoadingScreen';
import React, { useState, useRef } from 'react';
import DraggableScrollContainer from './DraggableScrollContainer';
import { SubComponentProps, EntertainmentState, InteriorState, TattooState } from '../types';
import { 
    ENT_CHARACTERS, ENT_ACTIONS, ENT_MOODS, ENT_SETTINGS, 
    INT_STYLES, INT_ROOMS, INT_MATERIALS, INT_COLORS, 
    TATTOO_STYLES, TATTOO_AREAS, ENT_VARIANTS, 
    TATTOO_AREA_VARIANTS, TATTOO_STYLE_VARIANTS, 
    TATTOO_COLORS, TATTOO_MODELS, TATTOO_MODEL_VARIANTS 
} from '../constants';
import { 
    generateEntertainmentImage, generateInteriorDesign, 
    generateTattooDesign, applyTattooToBody 
} from '../services/geminiService';
import SelectorColumn from './SelectorColumn';
import ImageSourceModal from './ImageSourceModal';
import PromptSuggestionsModal from './PromptSuggestionsModal';

// --- SHARED HELPER COMPONENTS ---

const ModuleLoadingOverlay = ({ text, subtext }: { text: string, subtext: string }) => (
    <div className="fixed inset-0 z-[1001] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
        <div className="relative flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--app-accent)]/30 bg-black/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="w-20 h-20 border-4 border-[var(--app-accent)] border-t-transparent rounded-full animate-spin mb-6 shadow-[0_0_20px_var(--app-accent)]"></div>
            <h2 className="text-2xl font-[Oswald] font-bold text-white tracking-[0.2em] animate-pulse text-center">{text}</h2>
            <p className="text-[var(--app-text-muted)] text-sm font-[Oswald] mt-4 tracking-wide uppercase text-center max-w-[200px] leading-relaxed">
                {subtext}
            </p>
        </div>
    </div>
);

const ZoomModal = ({ image, onClose }: { image: string, onClose: () => void }) => (
    <div 
        className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4 animate-in fade-in duration-200"
        onClick={onClose}
    >
        <img 
            src={image} 
            alt="Zoomed" 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg border border-[var(--app-accent)]/30" 
        />
        <div className="absolute bottom-10 bg-black/50 px-4 py-2 rounded-full text-white/70 text-[10px] font-[Oswald] uppercase tracking-widest backdrop-blur-sm pointer-events-none">
            Kapatmak için dokun
        </div>
    </div>
);

const ModuleImageUploader = ({ image, onUpload, label, onClear }: { image: string | null, onUpload: (file: File) => void, label: string, onClear: () => void }) => {
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.[0]) onUpload(e.target.files[0]);
    };

    return (
        <>
            <div 
                className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden group flex items-center justify-center h-[35vh] cursor-pointer"
                onClick={() => !image && setShowModal(true)}
            >
                {image ? (
                    <>
                        <img src={image} alt="Upload" className="w-full h-full object-contain" onClick={() => setShowModal(true)} />
                        <button onClick={(e) => {e.stopPropagation(); onClear();}} className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center transition-colors">✕</button>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center group w-full h-full">
                        <div className="w-12 h-12 rounded-full border border-dashed border-[var(--app-text-muted)] group-hover:border-[var(--app-accent)] flex items-center justify-center mb-2 transition-colors">
                            <span className="text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] text-xl font-light">+</span>
                        </div>
                        <span className="text-[10px] tracking-widest font-medium font-[Oswald] text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] uppercase">{label}</span>
                    </div>
                )}
            </div>
            
            {showModal && (
                <ImageSourceModal 
                    onClose={() => setShowModal(false)}
                    onCameraSelect={() => cameraInputRef.current?.click()}
                    onGallerySelect={() => fileInputRef.current?.click()}
                />
            )}
            
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            <input type="file" ref={cameraInputRef} className="hidden" accept="image/*" capture="environment" onChange={handleFileChange} />
        </>
    );
};

const ResultViewer = ({ image, onDownload, onZoom, label }: any) => (
    <div className="flex-1 border border-[var(--app-border)] rounded-xl bg-[var(--app-bg)]/30 relative overflow-hidden flex items-center justify-center shadow-inner h-[35vh] group">
        {image ? (
            <>
                 <img 
                    src={image} 
                    alt="Result" 
                    className="w-full h-full object-contain cursor-zoom-in active:scale-95 transition-transform" 
                    onClick={onZoom} 
                 />
                 <div className="absolute top-2 left-2 bg-black/40 px-2 py-0.5 rounded text-[8px] font-[Oswald] text-white uppercase tracking-widest">{label}</div>
                 <button onClick={(e) => { e.stopPropagation(); onDownload(); }} className="absolute bottom-4 right-4 bg-[var(--app-accent)] text-[var(--app-on-accent)] px-4 py-2 rounded-lg text-xs font-[Oswald] shadow-xl hover:scale-105 transition-transform font-bold opacity-0 group-hover:opacity-100 transition-opacity">İNDİR</button>
            </>
        ) : (
            <div className="text-[var(--app-text-muted)] text-[10px] tracking-widest opacity-30 font-[Oswald] uppercase">{label}</div>
        )}
    </div>
);

// --- 1. ENTERTAINMENT MODULE ---
export const EntertainmentTool: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [state, setState] = useState<EntertainmentState>({ selectedCharacter: 'none', characterVariant: undefined, selectedAction: 'none', selectedMood: 'none', selectedSetting: 'none', customPrompt: '' });
    const [original, setOriginal] = useState<string | null>(null);
    const [generated, setGenerated] = useState<string | null>(null);
    const [zoomed, setZoomed] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPromptModal, setShowPromptModal] = useState(false);
    const promptInputRef = useRef<HTMLInputElement>(null);

    const handleGenerate = async () => {
        if (!original) return alert("Fotoğraf yükleyin");
        setLoading(true); setGenerated(null);
        try {
            const res = await generateEntertainmentImage(original, state);
            setGenerated(res);
            onHistoryUpdate(res, 'Eğlence');
        } catch (e) { alert(e); } finally { setLoading(false); }
    };

    const handleReset = () => {
        setState({ selectedCharacter: 'none', characterVariant: undefined, selectedAction: 'none', selectedMood: 'none', selectedSetting: 'none', customPrompt: '' });
        setOriginal(null);
        setGenerated(null);
    };

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
            {loading && !generated && (
                <LoadingScreen 
                    message="EĞLENCE BAŞLIYOR..." 
                    submessage="Yapay zeka sahneye yeni karakterleri ekliyor" 
                />
            )}
            
            {zoomed && <ZoomModal image={zoomed} onClose={() => setZoomed(null)} />}

            <PromptSuggestionsModal 
                isOpen={showPromptModal}
                onClose={() => setShowPromptModal(false)}
                moduleType="editor"
                themeColor={themeColor}
                onSelect={(txt) => { setState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
                onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
            />

            <div className="flex-none flex gap-2">
                <ModuleImageUploader 
                    image={original} 
                    label="FOTOĞRAFINIZ" 
                    onClear={() => setOriginal(null)} 
                    onUpload={(file) => {
                        const r=new FileReader(); 
                        r.onload=()=>setOriginal(r.result as string); 
                        r.readAsDataURL(file);
                    }} 
                />
                <ResultViewer 
                    image={generated} 
                    label="SONUÇ"
                    onZoom={() => setZoomed(generated)}
                    onDownload={() => handleDownload(generated!)} 
                />
            </div>
            <div className="flex-none flex gap-2 h-10 items-center">
                 <button onClick={handleReset} className="w-10 h-full rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                 </button>
                 <input 
                    ref={promptInputRef}
                    type="text" 
                    value={state.customPrompt} 
                    onChange={(e) => setState(s => ({...s, customPrompt: e.target.value}))} 
                    onClick={() => { if(!state.customPrompt) setShowPromptModal(true); }}
                    className="flex-1 h-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-3 text-[var(--app-text)] text-xs font-[Oswald] outline-none" 
                    placeholder="Ekstra detay (örn: kırmızı şapka taksın)..." 
                 />
                 <button onClick={handleGenerate} disabled={!original || loading} className="h-full px-6 rounded-lg bg-[var(--app-accent)] text-[var(--app-on-accent)] font-[Oswald] text-xs font-bold uppercase disabled:opacity-50 hover:brightness-110 shadow-lg">EKLE</button>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
                <DraggableScrollContainer className="flex h-full gap-2 pb-1">
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden">
                    <SelectorColumn 
                        title="KİM/NE?" 
                        items={ENT_CHARACTERS} 
                        selectedId={state.selectedCharacter} 
                        variants={ENT_VARIANTS}
                        onSelect={(id, variantPrompt) => setState(s=>({...s, selectedCharacter: id, characterVariant: variantPrompt}))} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                    />
                 </div>
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="NE YAPIYOR?" items={ENT_ACTIONS} selectedId={state.selectedAction} onSelect={(id) => setState(s=>({...s, selectedAction: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="MOD" items={ENT_MOODS} selectedId={state.selectedMood} onSelect={(id) => setState(s=>({...s, selectedMood: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="MEKAN" items={ENT_SETTINGS} selectedId={state.selectedSetting} onSelect={(id) => setState(s=>({...s, selectedSetting: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                </DraggableScrollContainer>
            </div>
        </div>
    );
};

// --- 2. INTERIOR DESIGNER MODULE ---
export const InteriorDesigner: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [state, setState] = useState<InteriorState>({ selectedRoomType: 'none', selectedStyle: 'none', selectedMaterial: 'none', selectedColor: 'none', customPrompt: '' });
    const [original, setOriginal] = useState<string | null>(null);
    const [generated, setGenerated] = useState<string | null>(null);
    const [zoomed, setZoomed] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPromptModal, setShowPromptModal] = useState(false);
    const promptInputRef = useRef<HTMLInputElement>(null);

    const handleGenerate = async () => {
        if (!original) return alert("Oda fotoğrafı yükleyin");
        setLoading(true); setGenerated(null);
        try {
            const res = await generateInteriorDesign(original, state);
            setGenerated(res);
            onHistoryUpdate(res, 'İç Mimar');
        } catch (e) { alert(e); } finally { setLoading(false); }
    };

    const handleReset = () => {
        setState({ selectedRoomType: 'none', selectedStyle: 'none', selectedMaterial: 'none', selectedColor: 'none', customPrompt: '' });
        setOriginal(null);
        setGenerated(null);
    };

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
            {loading && !generated && (
                <LoadingScreen 
                    message="YENİDEN TASARLANIYOR..." 
                    submessage="Mimari yapılar korunarak stil değiştiriliyor" 
                />
            )}
            
            {zoomed && <ZoomModal image={zoomed} onClose={() => setZoomed(null)} />}

            <PromptSuggestionsModal 
                isOpen={showPromptModal}
                onClose={() => setShowPromptModal(false)}
                moduleType="interior"
                themeColor={themeColor}
                onSelect={(txt) => { setState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
                onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
            />

            <div className="flex-none flex gap-2">
                <ModuleImageUploader 
                    image={original} 
                    label="ODA FOTOSU" 
                    onClear={() => setOriginal(null)} 
                    onUpload={(file) => {
                        const r=new FileReader(); 
                        r.onload=()=>setOriginal(r.result as string); 
                        r.readAsDataURL(file);
                    }} 
                />
                <ResultViewer 
                    image={generated} 
                    label="SONUÇ"
                    onZoom={() => setZoomed(generated)}
                    onDownload={() => handleDownload(generated!)} 
                />
            </div>
            <div className="flex-none flex gap-2 h-10 items-center">
                 <button onClick={handleReset} className="w-10 h-full rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                 </button>
                 <input 
                    ref={promptInputRef}
                    type="text" 
                    value={state.customPrompt} 
                    onChange={(e) => setState(s => ({...s, customPrompt: e.target.value}))} 
                    onClick={() => { if(!state.customPrompt) setShowPromptModal(true); }}
                    className="flex-1 h-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-3 text-[var(--app-text)] text-xs font-[Oswald] outline-none" 
                    placeholder="Detay (örn: modern avizeler, büyük ayna)..." 
                 />
                 <button onClick={handleGenerate} disabled={!original || loading} className="h-full px-6 rounded-lg bg-[var(--app-accent)] text-[var(--app-on-accent)] font-[Oswald] text-xs font-bold uppercase disabled:opacity-50 hover:brightness-110 shadow-lg">TASARLA</button>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
                <DraggableScrollContainer className="flex h-full gap-2 pb-1">
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="ODA TİPİ" items={INT_ROOMS} selectedId={state.selectedRoomType} onSelect={(id) => setState(s=>({...s, selectedRoomType: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="TARZ" items={INT_STYLES} selectedId={state.selectedStyle} onSelect={(id) => setState(s=>({...s, selectedStyle: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="MATERYAL" items={INT_MATERIALS} selectedId={state.selectedMaterial} onSelect={(id) => setState(s=>({...s, selectedMaterial: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                 <div className="flex-1 min-w-[120px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden"><SelectorColumn title="RENK TONU" items={INT_COLORS} selectedId={state.selectedColor} onSelect={(id) => setState(s=>({...s, selectedColor: id}))} themeColor={themeColor} enableHaptic={enableHaptic} /></div>
                </DraggableScrollContainer>
            </div>
        </div>
    );
};

// --- 4. TATTOO DESIGNER MODULE ---
export const TattooDesigner: React.FC<SubComponentProps> = ({ onHistoryUpdate, handleDownload, themeColor = '#ff8c37', enableHaptic = false }) => {
    const [state, setState] = useState<TattooState>({ selectedStyle: [], selectedModel: [], modelVariants: {}, selectedBodyPart: 'none', selectedColor: 'none', customPrompt: '', bodyPartVariant: undefined });
    const [original, setOriginal] = useState<string | null>(null);
    const [designResult, setDesignResult] = useState<string | null>(null);
    const [finalResult, setFinalResult] = useState<string | null>(null);
    const [zoomed, setZoomed] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPromptModal, setShowPromptModal] = useState(false);
    const promptInputRef = useRef<HTMLInputElement>(null);

    const handleStyleSelect = (id: string) => {
        if (id === 'none') {
            setState(prev => ({ ...prev, selectedStyle: [] }));
            return;
        }
        setState(prev => {
            const current = prev.selectedStyle;
            if (current.includes(id)) {
                return { ...prev, selectedStyle: current.filter(x => x !== id) };
            } else {
                return { ...prev, selectedStyle: [...current, id] };
            }
        });
    };

    const handleModelSelect = (id: string, variantPrompt?: string) => {
        if (id === 'none') {
            setState(prev => ({ ...prev, selectedModel: [], modelVariants: {} }));
            return;
        }
        setState(prev => {
            const current = prev.selectedModel;
            const isAlreadySelected = current.includes(id);
            const newModel = isAlreadySelected 
                ? current.filter(x => x !== id) 
                : [...current, id].slice(-3); // Limit 3
            
            const newVariants = { ...prev.modelVariants };
            if (variantPrompt) {
                newVariants[id] = variantPrompt;
            } else if (!newModel.includes(id)) {
                delete newVariants[id];
            }
            
            return { ...prev, selectedModel: newModel, modelVariants: newVariants };
        });
    };

    const handleGenerate = async () => {
        if (!original && state.selectedModel.length === 0) return alert("Lütfen bir resim yükleyin veya model seçin");
        setLoading(true); setDesignResult(null); setFinalResult(null);
        try {
            const design = await generateTattooDesign(original, state);
            setDesignResult(design);
            onHistoryUpdate(design, 'Dövme Tasarım');

            if (state.selectedBodyPart !== 'none' && state.selectedBodyPart !== 'stencil') {
                const applied = await applyTattooToBody(design, state);
                setFinalResult(applied);
                onHistoryUpdate(applied, 'Dövme Uygulama');
            }
        } catch (e: any) { alert(e.message); } finally { setLoading(false); }
    };

    const handleReset = () => {
        setState({ selectedStyle: [], selectedModel: [], modelVariants: {}, selectedBodyPart: 'none', selectedColor: 'none', customPrompt: '', bodyPartVariant: undefined });
        setOriginal(null);
        setDesignResult(null);
        setFinalResult(null);
    };

    return (
        <div className="w-full h-full flex flex-col p-2 gap-2 animate-in fade-in">
            <PromptSuggestionsModal 
                isOpen={showPromptModal}
                onClose={() => setShowPromptModal(false)}
                moduleType="tattoo"
                themeColor={themeColor}
                onSelect={(txt) => { setState(s => ({...s, customPrompt: txt})); setShowPromptModal(false); }}
                onWriteManual={() => { setShowPromptModal(false); setTimeout(() => promptInputRef.current?.focus(), 400); }}
            />

            {loading && !designResult && <LoadingScreen message="DÖVME ÇİZİLİYOR..." submessage="Sanatçı dijital mürekkebini hazırlıyor" />}
            {zoomed && <ZoomModal image={zoomed} onClose={() => setZoomed(null)} />}
            
            <div className="flex-none flex gap-2">
                <ModuleImageUploader image={original} label="TEMA REFERANSI" onClear={() => setOriginal(null)} onUpload={(file) => { const r=new FileReader(); r.onload=()=>setOriginal(r.result as string); r.readAsDataURL(file); }} />
                <ResultViewer image={designResult} label="2D TASARIM" onZoom={() => setZoomed(designResult)} onDownload={() => handleDownload(designResult!)} />
                <ResultViewer image={finalResult} label="UYGULAMA" onZoom={() => setZoomed(finalResult)} onDownload={() => handleDownload(finalResult!)} />
            </div>

            <div className="flex-none flex gap-2 h-10 items-center">
                 <button onClick={handleReset} className="w-10 h-full rounded-lg bg-[var(--app-surface)] text-[var(--app-text-muted)] flex items-center justify-center border border-[var(--app-border)] hover:text-red-500 transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                 </button>
<input 
    ref={promptInputRef}
    type="text" 
    value={state.customPrompt} 
    onChange={(e) => setState(s => ({...s, customPrompt: e.target.value}))} 
    onClick={() => { if(!state.customPrompt) setShowPromptModal(true); }}
    className="flex-1 h-full bg-[var(--app-surface)] border border-[var(--app-border)] rounded-lg px-3 text-[var(--app-text)] text-xs font-[Oswald] outline-none" 
    placeholder="Dövme detayı..." 
/>

                 <button onClick={handleGenerate} disabled={loading} className="h-full px-6 rounded-lg bg-[var(--app-accent)] text-[var(--app-on-accent)] font-[Oswald] text-xs font-bold uppercase disabled:opacity-50 hover:brightness-110 shadow-lg">OLUŞTUR</button>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                <DraggableScrollContainer className="flex h-full gap-2 pb-1">
                 <div className="flex-1 min-w-[130px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden">
                    <SelectorColumn 
                        title="TARZ" 
                        items={TATTOO_STYLES} 
                        selectedId={state.selectedStyle} 
                        variants={TATTOO_STYLE_VARIANTS}
                        onSelect={handleStyleSelect} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                    />
                 </div>
                 <div className="flex-1 min-w-[130px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden">
                    <SelectorColumn 
                        title="FİGÜR" 
                        items={TATTOO_MODELS} 
                        selectedId={state.selectedModel} 
                        variants={TATTOO_MODEL_VARIANTS}
                        onSelect={handleModelSelect} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                    />
                 </div>
                 <div className="flex-1 min-w-[130px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden">
                    <SelectorColumn 
                        title="RENK" 
                        items={TATTOO_COLORS} 
                        selectedId={state.selectedColor} 
                        onSelect={(id) => setState(s => ({...s, selectedColor: id}))} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                    />
                 </div>
                 <div className="flex-1 min-w-[130px] bg-[var(--app-surface)] rounded border border-[var(--app-border)] overflow-hidden">
                    <SelectorColumn 
                        title="UYGULAMA" 
                        items={TATTOO_AREAS} 
                        selectedId={state.selectedBodyPart} 
                        variants={TATTOO_AREA_VARIANTS}
                        onSelect={(id, variant) => setState(s=>({...s, selectedBodyPart: id, bodyPartVariant: variant}))} 
                        themeColor={themeColor} 
                        enableHaptic={enableHaptic} 
                    />
                 </div>
                </DraggableScrollContainer>
            </div>
        </div>
    );
};