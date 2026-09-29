
import React, { useState, useRef, useEffect } from 'react';
import { generateOutpainting } from '../services/geminiService';
import { GlobalSettings } from '../types';

interface ImageManipulatorProps {
    image: string;
    onClose: () => void;
    onSave: (newImage: string) => void;
    globalSettings?: GlobalSettings;
    themeColor: string;
}

const ImageManipulator: React.FC<ImageManipulatorProps> = ({ image, onClose, onSave, globalSettings, themeColor }) => {
    const [mode, setMode] = useState<'crop' | 'expand'>('crop');
    const [isLoading, setIsLoading] = useState(false);
    
    // Canvas & Interaction Refs
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // State
    const [imgObj, setImgObj] = useState<HTMLImageElement | null>(null);
    const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
    
    // Crop State (Normalized 0-1)
    const [crop, setCrop] = useState({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    // Expand State
    const [expandScale, setExpandScale] = useState(0.7); // 1 = full size, 0.5 = half size (more padding)

    // Initialize Image
    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setImgObj(img);
            // Fit to container logic would go here to set initial canvas size
        };
    }, [image]);

    // Draw Loop
    useEffect(() => {
        if (!imgObj || !canvasRef.current || !containerRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Determine Canvas Size (Fit to container, maintain aspect ratio)
        const containerW = containerRef.current.clientWidth;
        const containerH = containerRef.current.clientHeight;
        const aspect = imgObj.width / imgObj.height;
        
        let drawW = containerW;
        let drawH = containerW / aspect;

        if (drawH > containerH) {
            drawH = containerH;
            drawW = containerH * aspect;
        }

        canvas.width = drawW;
        canvas.height = drawH;
        setCanvasSize({ w: drawW, h: drawH });

        // Clear
        ctx.clearRect(0, 0, drawW, drawH);

        if (mode === 'crop') {
            // Draw Image Full
            ctx.drawImage(imgObj, 0, 0, drawW, drawH);
            
            // Draw Overlay
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(0, 0, drawW, drawH);
            
            // Draw Crop Hole
            const cx = crop.x * drawW;
            const cy = crop.y * drawH;
            const cw = crop.w * drawW;
            const ch = crop.h * drawH;

            // Clear rect for crop area to show image
            // Note: clearRect makes it transparent, we need to redraw image there
            ctx.drawImage(imgObj, 
                crop.x * imgObj.width, crop.y * imgObj.height, crop.w * imgObj.width, crop.h * imgObj.height,
                cx, cy, cw, ch
            );

            // Draw Border
            ctx.strokeStyle = themeColor;
            ctx.lineWidth = 2;
            ctx.strokeRect(cx, cy, cw, ch);

            // Handles
            ctx.fillStyle = 'white';
            const hw = 6;
            ctx.fillRect(cx - hw, cy - hw, hw*2, hw*2); // TL
            ctx.fillRect(cx + cw - hw, cy + ch - hw, hw*2, hw*2); // BR

        } else if (mode === 'expand') {
            // Draw Background (White or Transparent)
            // For AI generation, white background is usually better for "filling" unless we use specific mask
            ctx.fillStyle = '#ffffff'; 
            ctx.fillRect(0, 0, drawW, drawH);

            // Draw Checkerboard for transparency visualization
            // (Optional, skip for simplicity)

            // Draw Image Centered & Scaled
            const scaledW = drawW * expandScale;
            const scaledH = drawH * expandScale;
            const x = (drawW - scaledW) / 2;
            const y = (drawH - scaledH) / 2;

            ctx.drawImage(imgObj, x, y, scaledW, scaledH);
            
            // Draw Border around original image to show boundary
            ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, scaledW, scaledH);
        }

    }, [imgObj, mode, crop, expandScale, themeColor, canvasRef.current?.width]); // Re-draw on state change

    // --- INTERACTION HANDLERS (Basic Crop Drag) ---
    // A full robust crop tool is complex. Implementing a simple "Drag to create/move rect" approach.
    const handleMouseDown = (e: React.MouseEvent) => {
        if (mode !== 'crop' || !canvasSize.w) return;
        setIsDragging(true);
        const rect = canvasRef.current!.getBoundingClientRect();
        const x = (e.clientX - rect.left) / canvasSize.w;
        const y = (e.clientY - rect.top) / canvasSize.h;
        setStartPos({ x, y });
        setCrop({ x, y, w: 0, h: 0 }); // Start new selection
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || mode !== 'crop' || !canvasSize.w) return;
        const rect = canvasRef.current!.getBoundingClientRect();
        const curX = Math.max(0, Math.min(1, (e.clientX - rect.left) / canvasSize.w));
        const curY = Math.max(0, Math.min(1, (e.clientY - rect.top) / canvasSize.h));

        const w = Math.abs(curX - startPos.x);
        const h = Math.abs(curY - startPos.y);
        const x = Math.min(curX, startPos.x);
        const y = Math.min(curY, startPos.y);

        setCrop({ x, y, w, h });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Ensure minimum size
        if (crop.w < 0.05 || crop.h < 0.05) {
            setCrop({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 }); // Reset if click without drag
        }
    };

    // --- ACTIONS ---

    const executeCrop = () => {
        if (!imgObj) return;
        const canvas = document.createElement('canvas');
        const targetW = imgObj.width * crop.w;
        const targetH = imgObj.height * crop.h;
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        ctx.drawImage(imgObj, 
            imgObj.width * crop.x, imgObj.height * crop.y, targetW, targetH,
            0, 0, targetW, targetH
        );
        
        onSave(canvas.toDataURL('image/png'));
        onClose();
    };

    const executeExpand = async () => {
        if (!imgObj) return;
        setIsLoading(true);
        
        try {
            // 1. Prepare Canvas for AI
            const canvas = document.createElement('canvas');
            // We want the output to be high res. Let's base it on original image width
            // If scale is 0.5, it means original image is 50% of canvas. 
            // So canvas width = img.width / 0.5
            const targetW = imgObj.width / expandScale;
            const targetH = imgObj.height / expandScale;
            
            canvas.width = targetW;
            canvas.height = targetH;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            // Fill Background (White)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, targetW, targetH);
            
            // Draw Image Centered
            const x = (targetW - imgObj.width) / 2;
            const y = (targetH - imgObj.height) / 2;
            ctx.drawImage(imgObj, x, y, imgObj.width, imgObj.height);
            
            const finalBase64 = canvas.toDataURL('image/png');
            
            // 2. Call AI
            const result = await generateOutpainting(finalBase64, globalSettings);
            onSave(result);
            onClose();

        } catch (e) {
            alert("Genişletme hatası: " + e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        // Downloads whatever is currently visible/proposed
        if (!imgObj) return;
        
        if (mode === 'crop') {
            const canvas = document.createElement('canvas');
            canvas.width = imgObj.width * crop.w;
            canvas.height = imgObj.height * crop.h;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(imgObj, imgObj.width * crop.x, imgObj.height * crop.y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
            
            const now = new Date();
            // Format: meçi_YYMMDD_HHMMSS
            const dateStr = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
            const timeStr = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
            const filename = `mechi_crop_${dateStr}_${timeStr}.png`;

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = filename;
            link.click();
        } else {
             // For expand preview download (without AI fill yet)
             alert("Genişletme için önce 'OLUŞTUR' butonuna basarak yapay zekanın doldurmasını sağlayın.");
        }
    };
    // --- TOUCH HANDLERS (TELEFON İÇİN) ---
    const handleTouchStart = (e: React.TouchEvent) => {
        if (mode !== 'crop' || !canvasSize.w) return;
        setIsDragging(true);
        const rect = canvasRef.current!.getBoundingClientRect();
        // İlk parmağın konumunu al
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) / canvasSize.w;
        const y = (touch.clientY - rect.top) / canvasSize.h;
        setStartPos({ x, y });
        setCrop({ x, y, w: 0, h: 0 });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || mode !== 'crop' || !canvasSize.w) return;
        const rect = canvasRef.current!.getBoundingClientRect();
        const touch = e.touches[0];
        
        const curX = Math.max(0, Math.min(1, (touch.clientX - rect.left) / canvasSize.w));
        const curY = Math.max(0, Math.min(1, (touch.clientY - rect.top) / canvasSize.h));

        const w = Math.abs(curX - startPos.x);
        const h = Math.abs(curY - startPos.y);
        const x = Math.min(curX, startPos.x);
        const y = Math.min(curY, startPos.y);

        setCrop({ x, y, w, h });
    };

    return (
        <div className="fixed inset-0 z-[3000] bg-[#050810] flex flex-col animate-in fade-in duration-300">
            {/* Header */}
            <div className="h-14 border-b border-[var(--app-border)] bg-[var(--app-surface)] flex items-center justify-between px-4 shrink-0">
                <h2 className="text-[var(--app-accent)] font-[Oswald] tracking-widest uppercase font-bold text-lg">GÖRSEL DÜZENLE</h2>
                <button onClick={onClose} className="text-[var(--app-text-muted)] hover:text-[var(--app-text)] px-3 py-1 text-xs font-[Oswald] uppercase">İptal</button>
            </div>

            {/* Main Workspace */}
            <div className="flex-1 overflow-hidden relative flex flex-col items-center justify-center p-4 bg-[#0a0a0a]">
                <div ref={containerRef} className="w-full h-full max-w-4xl flex items-center justify-center relative shadow-2xl border border-[var(--app-border)]/20 bg-[var(--app-bg)]/50 rounded-lg">
                    <canvas 
                        ref={canvasRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseUp} 
                        className={`max-w-full max-h-full object-contain ${mode === 'crop' ? 'cursor-crosshair' : 'cursor-default'}`}
                    />
                    {isLoading && (
                        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
                            <div className="w-12 h-12 border-4 border-[var(--app-accent)] border-t-transparent rounded-full animate-spin mb-4"></div>
                            <span className="text-white font-[Oswald] tracking-widest animate-pulse">YAPAY ZEKA DOLDURUYOR...</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="h-auto bg-[var(--app-surface)] border-t border-[var(--app-border)] p-4 shrink-0 flex flex-col gap-4">
                
                {/* Tabs */}
                <div className="flex gap-2 justify-center">
                    <button onClick={() => setMode('crop')} className={`px-6 py-2 rounded-lg font-[Oswald] tracking-widest text-xs uppercase border transition-all ${mode === 'crop' ? 'bg-[var(--app-accent)] border-[var(--app-accent)] text-[var(--app-on-accent)]' : 'border-[var(--app-border)] text-[var(--app-text-muted)]'}`}>KIRP</button>
                    <button onClick={() => setMode('expand')} className={`px-6 py-2 rounded-lg font-[Oswald] tracking-widest text-xs uppercase border transition-all ${mode === 'expand' ? 'bg-[var(--app-accent)] border-[var(--app-accent)] text-[var(--app-on-accent)]' : 'border-[var(--app-border)] text-[var(--app-text-muted)]'}`}>GENİŞLET</button>
                </div>

                {/* Context Controls */}
                <div className="flex flex-col items-center justify-center h-16">
                    {mode === 'crop' && (
                        <p className="text-[var(--app-text-muted)] text-[10px] font-[Oswald] uppercase animate-pulse">
                            Resim üzerinde basılı tutup sürükleyerek alan seçin
                        </p>
                    )}
                    {mode === 'expand' && (
                        <div className="w-full max-w-md flex flex-col gap-2">
                            <div className="flex justify-between text-[10px] font-[Oswald] text-[var(--app-text-muted)]">
                                <span>ORJİNAL (1x)</span>
                                <span className="text-[var(--app-accent)]">{(1/expandScale).toFixed(1)}x GENİŞLİK</span>
                            </div>
                            <input 
                                type="range" 
                                min="0.3" 
                                max="0.9" 
                                step="0.1" 
                                value={expandScale} 
                                onChange={(e) => setExpandScale(parseFloat(e.target.value))}
                                className="w-full accent-[var(--app-accent)] h-1 bg-[var(--app-border)] rounded-full appearance-none"
                            />
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-center">
                    <button 
                        onClick={handleDownload}
                        className="px-6 py-3 rounded-lg border border-[var(--app-border)] text-[var(--app-text)] font-[Oswald] tracking-widest text-xs uppercase hover:bg-[var(--app-bg)]"
                    >
                        İNDİR ({mode === 'crop' ? 'Kesik' : 'Önizleme'})
                    </button>
                    <button 
                        onClick={mode === 'crop' ? executeCrop : executeExpand}
                        disabled={isLoading}
                        className="px-12 py-3 rounded-lg bg-[var(--app-accent)] text-[var(--app-on-accent)] font-[Oswald] tracking-widest text-xs uppercase shadow-lg hover:brightness-110 disabled:opacity-50"
                    >
                        {isLoading ? 'İŞLENİYOR...' : 'SONUÇ OLARAK OLUŞTUR'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ImageManipulator;
