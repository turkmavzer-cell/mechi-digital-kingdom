import React from 'react';

interface ImageSourceModalProps {
    onClose: () => void;
    onCameraSelect: () => void;
    onGallerySelect: () => void;
}

const ImageSourceModal: React.FC<ImageSourceModalProps> = ({ onClose, onCameraSelect, onGallerySelect }) => {
    return (
        <div 
            className="fixed inset-0 z-[3000] bg-black/90 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200 p-6"
            onClick={onClose}
        >
            <div className="w-full max-w-sm bg-[var(--app-surface)] border border-[var(--app-border)] rounded-2xl shadow-2xl p-6 flex flex-col gap-4 animate-in zoom-in-50 duration-300" onClick={e => e.stopPropagation()}>
                <div className="text-center pb-2 border-b border-[var(--app-border)]">
                    <h3 className="text-[var(--app-accent)] font-[Oswald] uppercase tracking-[0.2em] font-bold text-lg">Görsel Kaynağı</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                     <button 
                        onClick={() => { onCameraSelect(); onClose(); }}
                        className="aspect-square rounded-xl bg-[var(--app-bg)] border border-[var(--app-border)] hover:border-[var(--app-accent)] hover:bg-[var(--app-accent)]/10 flex flex-col items-center justify-center gap-3 transition-all group"
                     >
                        <div className="p-4 rounded-full bg-[var(--app-surface)] shadow-md group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--app-text)]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                            </svg>
                        </div>
                        <span className="font-[Oswald] uppercase tracking-widest text-xs font-bold text-[var(--app-text-muted)] group-hover:text-[var(--app-text)]">Kamera</span>
                     </button>

                     <button 
                        onClick={() => { onGallerySelect(); onClose(); }}
                        className="aspect-square rounded-xl bg-[var(--app-bg)] border border-[var(--app-border)] hover:border-[var(--app-accent)] hover:bg-[var(--app-accent)]/10 flex flex-col items-center justify-center gap-3 transition-all group"
                     >
                        <div className="p-4 rounded-full bg-[var(--app-surface)] shadow-md group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--app-text)]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <span className="font-[Oswald] uppercase tracking-widest text-xs font-bold text-[var(--app-text-muted)] group-hover:text-[var(--app-text)]">Galeri</span>
                     </button>
                </div>
                <button onClick={onClose} className="mt-2 w-full py-3 bg-[var(--app-bg)] hover:bg-red-500/10 hover:text-red-500 text-[var(--app-text-muted)] rounded-lg font-[Oswald] uppercase tracking-widest text-xs transition-colors">
                    İptal
                </button>
            </div>
        </div>
    );
};

export default ImageSourceModal;