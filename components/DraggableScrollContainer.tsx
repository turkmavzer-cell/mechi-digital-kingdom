import React, { useRef, useState, useCallback, useEffect } from 'react';

interface DraggableScrollContainerProps {
    children: React.ReactNode;
    className?: string;
    onDragStart?: () => void;
}

/**
 * A container that allows horizontal scrolling by dragging with the mouse or touch.
 * It also handles the "drag vs click" logic to prevent unwanted clicks during scrolling.
 */
const DraggableScrollContainer: React.FC<DraggableScrollContainerProps> = ({ children, className, onDragStart }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasMoved, setHasMoved] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!ref.current) return;
        setIsDragging(true);
        setHasMoved(false);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !ref.current) return;
        
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX);
        
        if (Math.abs(walk) > 5) {
            if (!hasMoved && onDragStart) onDragStart();
            setHasMoved(true);
            e.preventDefault();
            ref.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (hasMoved) {
            // Prevent click event if we dragged
            e.stopPropagation();
        }
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Touch events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!ref.current) return;
        setIsDragging(true);
        setHasMoved(false);
        setStartX(e.touches[0].pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !ref.current) return;
        const x = e.touches[0].pageX - ref.current.offsetLeft;
        const walk = (x - startX);
        
        if (Math.abs(walk) > 5) {
            if (!hasMoved && onDragStart) onDragStart();
            setHasMoved(true);
            // We don't preventDefault here to allow vertical page scroll if needed, 
            // but for horizontal tabs it's usually fine.
            ref.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Capture clicks if we moved
    const handleClickCapture = (e: React.MouseEvent) => {
        if (hasMoved) {
            e.stopPropagation();
            e.preventDefault();
        }
    };

    return (
        <div 
            ref={ref}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClickCapture={handleClickCapture}
            className={`${className} cursor-grab active:cursor-grabbing select-none overflow-x-auto no-scrollbar`}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
            {children}
        </div>
    );
};

export default DraggableScrollContainer;
