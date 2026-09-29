import React, { useState, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { OptionItem } from '../types';

interface SelectorColumnProps {
  title: string;
  items: OptionItem[];
  selectedId: string | string[];
  onSelect: (id: string, variantPrompt?: string) => void;
  themeColor?: string;
  enableHaptic?: boolean;
  variants?: Record<string, OptionItem[]>;
  isDisabled?: boolean;
}

  const SelectorColumn: React.FC<SelectorColumnProps> = ({ title, items, selectedId, onSelect, themeColor = '#ff8c37', enableHaptic = false, variants, isDisabled = false }) => {
  const isMulti = Array.isArray(selectedId);
  const hasSelection = isMulti ? (selectedId as string[]).length > 0 : (selectedId && selectedId !== 'none');
  
  const listRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  const [activeVariantModal, setActiveVariantModal] = useState<{ itemId: string, label: string, options: OptionItem[] } | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const headerPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartPos = useRef<{ x: number, y: number } | null>(null);

  const triggerHaptic = (force = false) => {
      if ((enableHaptic || force) && navigator.vibrate) {
          navigator.vibrate(15); 
      }
  };

  const startHeaderPress = () => {
      headerPressTimer.current = setTimeout(() => {
          triggerHaptic(true);
          setShowSearch(true);
          setSearchText('');
      }, 500);
  };

  const endHeaderPress = () => {
      if (headerPressTimer.current) {
          clearTimeout(headerPressTimer.current);
          headerPressTimer.current = null;
      }
  };

  const startItemPress = (e: React.TouchEvent | React.MouseEvent, item: OptionItem) => {
      if ('touches' in e) {
          touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else {
          touchStartPos.current = { x: (e as React.MouseEvent).clientX, y: (e as React.MouseEvent).clientY };
      }

      if (variants && variants[item.id]) {
        itemPressTimer.current = setTimeout(() => {
            if (!hasMoved) {
                triggerHaptic(true);
                setActiveVariantModal({
                    itemId: item.id,
                    label: item.label,
                    options: variants[item.id]
                });
                touchStartPos.current = null;
            }
        }, 500);
      }
  };

  const handleListMouseDown = (e: React.MouseEvent) => {
      if (!listRef.current) return;
      setIsDragging(true);
      setHasMoved(false);
      setStartY(e.pageY - listRef.current.offsetTop);
      setScrollTop(listRef.current.scrollTop);
  };

  const handleListMouseMove = (e: React.MouseEvent) => {
      if (itemPressTimer.current && touchStartPos.current) {
          const moveX = e.clientX;
          const moveY = e.clientY;
          const diffX = Math.abs(moveX - touchStartPos.current.x);
          const diffY = Math.abs(moveY - touchStartPos.current.y);
          if (diffX > 5 || diffY > 5) {
              clearTimeout(itemPressTimer.current);
              itemPressTimer.current = null;
          }
      }

      if (!isDragging || !listRef.current) return;
      
      const y = e.pageY - listRef.current.offsetTop;
      const walk = (y - startY);
      
      if (Math.abs(walk) > 5) {
          setHasMoved(true);
          listRef.current.scrollTop = scrollTop - walk;
      }
  };

  const handleListMouseUp = () => {
      setIsDragging(false);
  };

  const handleListMouseLeave = () => {
      setIsDragging(false);
  };

  const handleListTouchStart = (e: React.TouchEvent) => {
      if (!listRef.current) return;
      setIsDragging(true);
      setHasMoved(false);
      setStartY(e.touches[0].pageY - listRef.current.offsetTop);
      setScrollTop(listRef.current.scrollTop);
  };

  const handleListTouchMove = (e: React.TouchEvent) => {
      if (itemPressTimer.current && touchStartPos.current) {
          const moveX = e.touches[0].clientX;
          const moveY = e.touches[0].clientY;
          const diffX = Math.abs(moveX - touchStartPos.current.x);
          const diffY = Math.abs(moveY - touchStartPos.current.y);
          if (diffX > 5 || diffY > 5) {
              clearTimeout(itemPressTimer.current);
              itemPressTimer.current = null;
          }
      }

      if (!isDragging || !listRef.current) return;
      const y = e.touches[0].pageY - listRef.current.offsetTop;
      const walk = (y - startY);
      
      if (Math.abs(walk) > 5) {
          setHasMoved(true);
          listRef.current.scrollTop = scrollTop - walk;
      }
  };

  const handleListTouchEnd = () => {
      setIsDragging(false);
  };

  const endItemPress = () => {
      if (itemPressTimer.current) {
          clearTimeout(itemPressTimer.current);
          itemPressTimer.current = null;
      }
  };

  const handleHeaderDoubleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      triggerHaptic();
      onSelect('none');
  };

  const handleItemClick = (id: string, isSelected: boolean) => {
    if (activeVariantModal || hasMoved) return;
    triggerHaptic();
    if (isMulti) {
        onSelect(id);
    } else {
        onSelect(isSelected ? 'none' : id);
    }
  };

  const handleVariantSelect = (variant: OptionItem) => {
      triggerHaptic();
      if (activeVariantModal) {
          onSelect(activeVariantModal.itemId, variant.promptValue);
          setActiveVariantModal(null);
      }
  };

  const filteredItems = useMemo(() => {
    const term = searchText.trim().toLocaleUpperCase('tr-TR');
    if (!term) return [];
    return items.filter(item => item.label.toLocaleUpperCase('tr-TR').includes(term));
  }, [items, searchText]);

  const handleSearchResultClick = (item: OptionItem) => {
      triggerHaptic();
      const isSelected = isMulti ? (selectedId as string[]).includes(item.id) : item.id === selectedId;
      handleItemClick(item.id, isSelected);
      setShowSearch(false);
      setSearchText('');

      // Seçilen öğeye otomatik scroll yap
      setTimeout(() => {
          const element = document.getElementById(`item-btn-${item.id}`);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      }, 100);
  };

  const selectedItems = useMemo(() => {
      if (isMulti) {
          return items.filter(i => (selectedId as string[]).includes(i.id));
      }
      const single = items.find(i => i.id === selectedId);
      return single && selectedId !== 'none' ? [single] : [];
  }, [items, selectedId, isMulti]);

  return (
    <div className={`w-full h-full flex flex-col group relative overflow-hidden transition-all bg-transparent ${isDisabled ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
      
      {/* Header */}
      <div 
        onMouseDown={startHeaderPress} onMouseUp={endHeaderPress} onMouseLeave={endHeaderPress}
        onTouchStart={startHeaderPress} onTouchEnd={endHeaderPress}
        onDoubleClick={handleHeaderDoubleClick}
        className={`
          text-center py-2 md:py-3 font-[Oswald] text-[9px] md:text-xs font-bold tracking-widest uppercase border-b border-[var(--app-border)] select-none cursor-pointer transition-colors z-20 relative
          ${hasSelection ? 'bg-[var(--app-accent)] text-[var(--app-on-accent)]' : 'bg-transparent text-[var(--app-text-muted)] hover:text-[var(--app-text)]'}
        `}
      >
        {title}
      </div>

      {/* PINNED SECTION */}
      {selectedItems.length > 0 && (
          <div className="flex-none bg-[var(--app-accent)]/10 border-b border-[var(--app-border)] p-1 flex flex-col gap-1 max-h-[120px] overflow-y-auto no-scrollbar animate-in slide-in-from-top duration-300 shadow-inner">
              {selectedItems.map(item => (
                  <button
                    key={`pinned-${item.id}`}
                    onClick={() => handleItemClick(item.id, true)}
                    className="w-full py-1.5 px-2 bg-[var(--app-accent)] text-[var(--app-on-accent)] rounded text-[10px] font-[Oswald] font-bold uppercase tracking-wider flex items-center justify-between group/pinned shadow-sm active:scale-95 transition-transform"
                  >
                      <span className="truncate flex-1 text-left pr-1">{item.label}</span>
                      <span className="shrink-0 w-3 h-3 rounded-full bg-black/20 flex items-center justify-center text-[7px] group-hover/pinned:bg-black/40 transition-colors">✕</span>
                  </button>
              ))}
          </div>
      )}

      {/* Main Scrollable List */}
      <div 
        ref={listRef} 
        onMouseDown={handleListMouseDown}
        onMouseMove={handleListMouseMove}
        onMouseUp={handleListMouseUp}
        onMouseLeave={handleListMouseLeave}
        onTouchStart={handleListTouchStart}
        onTouchMove={handleListTouchMove}
        onTouchEnd={handleListTouchEnd}
        onClickCapture={(e) => {
            if (hasMoved) {
                e.stopPropagation();
                e.preventDefault();
            }
        }}
        className={`flex-1 overflow-y-auto overflow-x-hidden p-0.5 space-y-0.5 scrollbar-none snap-y snap-mandatory no-scrollbar relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {items.map((item) => {
            const isSelected = isMulti ? (selectedId as string[]).includes(item.id) : item.id === selectedId;
            const hasVariants = variants && variants[item.id] && variants[item.id].length > 0;

            return (
                <button
                    key={item.id}
                    id={`item-btn-${item.id}`}
                    onMouseDown={(e) => startItemPress(e, item)} 
                    onMouseUp={endItemPress} 
                    onMouseLeave={endItemPress}
                    onTouchStart={(e) => startItemPress(e, item)} 
                    onTouchEnd={endItemPress}
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => handleItemClick(item.id, isSelected)}
                    className={`
                        w-full min-h-[32px] shrink-0 text-center transition-all duration-200 rounded
                        flex flex-col items-center justify-center
                        snap-start relative overflow-hidden group/item select-none
                        ${isSelected 
                            ? 'bg-[var(--app-accent)]/20 border border-[var(--app-accent)]/50 text-[var(--app-text)]' 
                            : 'bg-transparent border border-transparent text-[var(--app-text-muted)] hover:bg-[var(--app-text)]/5 hover:text-[var(--app-text)]'
                        }
                    `}
                >
                    <span className={`
                        font-[Oswald] uppercase tracking-wider block transition-all duration-200 truncate px-1 pointer-events-none
                        ${isSelected ? 'text-[10px] font-bold text-[var(--app-accent)]' : 'text-[8px] group-hover/item:text-[9px]'}
                    `}>
                        {item.label}
                    </span>
                    {hasVariants && (
                        <div className={`absolute top-0.5 right-0.5 w-1 h-1 rounded-full ${isSelected ? 'bg-[var(--app-accent)]' : 'bg-[var(--app-text-muted)] opacity-50'}`}></div>
                    )}
                </button>
            )
        })}
      </div>

      {/* Search Modal */}
      {showSearch && createPortal(
          <div className="fixed inset-0 z-[9999] bg-[var(--app-bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-200 p-4">
              <div className="w-full max-w-md bg-[var(--app-surface)] border border-[var(--app-border)] rounded-3xl p-6 shadow-2xl flex flex-col gap-6 max-h-[90vh]">
                  <div className="text-[var(--app-accent)] font-[Oswald] tracking-[0.5em] text-xl uppercase font-bold text-center">{title} — ARA</div>
                  <input 
                    autoFocus 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} 
                    placeholder="Arama yapın..." 
                    className="w-full bg-[var(--app-bg)] border border-[var(--app-border)] rounded-xl py-4 px-6 text-center text-lg font-[Oswald] tracking-widest uppercase text-[var(--app-text)] outline-none" 
                  />
                  <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-1">
                      {searchText.trim().length > 0 && filteredItems.map(item => (
                          <button
                              key={item.id}
                              onClick={() => handleSearchResultClick(item)}
                              className="w-full py-4 rounded-xl font-[Oswald] text-sm uppercase tracking-widest text-center transition-all bg-[var(--app-bg)]/50 text-[var(--app-text-muted)] hover:text-[var(--app-accent)]"
                          >
                              {item.label}
                          </button>
                      ))}
                  </div>
                  <button onClick={() => setShowSearch(false)} className="shrink-0 w-full py-4 rounded-xl bg-red-500/10 text-red-500 font-[Oswald] tracking-widest uppercase text-xs">VAZGEÇ</button>
              </div>
          </div>, document.body
      )}

      {/* Variant Selection Modal */}
      {activeVariantModal && createPortal(
          <div className="fixed inset-0 z-[9999] bg-[var(--app-bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in zoom-in-50 duration-200 p-6">
              <div className="w-full max-w-sm bg-[var(--app-surface)] border border-[var(--app-border)] rounded-3xl p-6 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
                  <div className="text-center border-b border-[var(--app-border)] pb-4">
                      <h3 className="text-[var(--app-accent)] font-[Oswald] tracking-[0.2em] text-xl uppercase font-bold">{activeVariantModal.label}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto no-scrollbar p-1">
                      {activeVariantModal.options.map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => handleVariantSelect(opt)}
                            className="p-4 rounded-xl border border-[var(--app-border)] bg-[var(--app-bg)] hover:border-[var(--app-accent)] hover:bg-[var(--app-accent)]/10 transition-all text-center"
                          >
                              <span className="font-[Oswald] text-xs font-bold uppercase text-[var(--app-text)] group-hover:text-[var(--app-accent)]">{opt.label}</span>
                          </button>
                      ))}
                  </div>
                  <button onClick={() => setActiveVariantModal(null)} className="mt-2 w-full py-3 bg-[var(--app-bg)] text-[var(--app-text-muted)] rounded-lg font-[Oswald] uppercase tracking-widest text-xs">İptal</button>
              </div>
          </div>, document.body
      )}

    </div>
  );
};

export default SelectorColumn;