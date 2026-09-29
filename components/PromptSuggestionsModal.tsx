
import React from 'react';
import { createPortal } from 'react-dom';

interface Suggestion {
    id: string;
    label: string;
    text: string;
}

interface PromptSuggestionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (text: string) => void;
    onWriteManual: () => void;
    moduleType: string;
    themeColor: string;
}

const SUGGESTIONS: Record<string, Suggestion[]> = {
    'editor': [
        { id: '1', label: 'SİBERPUNK YAP', text: 'Görseli neon ışıklı, yağmurlu bir siberpunk atmosferine dönüştür.' },
        { id: '2', label: 'RENKLERİ CANLANDIR', text: 'Renk paletini daha canlı, doygun ve dinamik hale getir.' },
        { id: '3', label: 'KARANLIK / GOTİK', text: 'Daha karanlık, gizemli ve gotik bir hava ekle.' },
        { id: '4', label: 'FÜTÜRİSTİK DETAY', text: 'Yüksek teknolojiye sahip fütüristik cihazlar ve detaylar ekle.' },
        { id: '5', label: 'HDR ETKİSİ', text: 'Yüksek dinamik aralık ve kristal netliğinde detaylar uygula.' },
        { id: '6', label: 'VAPORWAVE ESTETİĞİ', text: 'Pembe-mavi neon tonlar, retro grid zemin ve 80ler vaporwave havası ekle.' },
        { id: '7', label: 'FİLM GRAIN EFEKTİ', text: 'Analog film grain, hafif ışık sızıntısı ve sinematik gren dokusu uygula.' },
        { id: '8', label: 'STEAMPUNK DÖNÜŞÜM', text: 'Dişliler, pirinç detaylar ve viktoryen steampunk mekanik unsurlar ekle.' },
        { id: '9', label: 'GLITCH EFEKTİ', text: 'Dijital glitch bozulmaları, RGB kaymaları ve cyber hataları ekle.' },
        { id: '10', label: 'DREAMY BULANIKLIK', text: 'Yumuşak bokeh, dreamy lens flare ve rüya gibi puslu atmosfer yarat.' },
        { id: '11', label: '3.3 Kombine', text: 'Görseldeki deseni algıla; üründen bağımsız hale getirerek Protokol 3.1 (Kusursuz Yüzey) ve Protokol 3.3 (Süreklilik) kurallarıyla, fotoğrafik kusurlardan arındırılmış, kenardan kenara tam kare bir grafik olarak yeniden oluştur.' },
{ 
  id: '12', 
  label: 'FORMA DESEN ÇIKARICI', 
  text: 'FORMA ANALİZİ: Görseldeki forma üzerinde bulunan tüm logo, amblem, sponsor ve numaraları SİL. Kumaş kıvrımlarını ve perspektif bozulmalarını tamamen düzleştirerek, sadece temel grafik deseni 2D ortografik düzlemde, kenardan kenara kesintisiz bir vektör illüstrasyon olarak yeniden oluştur.' 
},

    ],
    'outfit': [
        { id: '1', label: 'PASTEL TONLAR', text: 'Kombini yumuşak pastel renkler ve soft dokularla harmanla.' },
        { id: '2', label: 'LÜKS DAVET', text: 'Zengin dokulu kumaşlar ve şık aksesuarlarla premium bir davet tarzı oluştur.' },
        { id: '3', label: 'SALAŞ & RAHAT', text: 'Oversize kesimler, salaş duruş ve maksimal konfor odaklı bir stil.' },
        { id: '4', label: 'SOKAK MODASI', text: 'Trendy urban detaylar ve modern sokak kültürü yansıması.' },
        { id: '5', label: 'VINTAGE ESİNTİ', text: '90\'lar retro modası ve nostaljik dokunuşlar ekle.' },
        { id: '6', label: 'CYBERPUNK STREET', text: 'Neon ışıklı deri ceketler, techwear detaylar ve cyberpunk sokak stili.' },
        { id: '7', label: 'BOHEM ŞIKLIK', text: 'Akıcı kumaşlar, etnik desenler ve özgür bohem ruhu yansıtan kombin.' },
        { id: '8', label: 'Y2K PARILTISI', text: 'Metalik parlaklıklar, düşük bel ve 2000ler Y2K trendleriyle donat.' },
        { id: '9', label: 'GOTH GLAM', text: 'Siyah kadife, dantel ve dramatik goth glam aksesuarlar ekle.' },
        { id: '10', label: 'ATHLEISURE LÜKS', text: 'Yüksek kaliteli spor giyim, lüks logo ve konforlu athleisure tarzı.' },
    ],
    'tattoo': [
        { id: '1', label: 'İNCE ÇİZGİLER', text: 'Minimalist, ultra ince tek iğne (fine-line) detayları.' },
        // Fixed: Removed invalid 'promptValue' property
        { id: '2', label: 'GÖLGELİ REALİZM', text: 'Derin gölgeli, üç boyutlu görünüme sahip gerçekçi dokular.' },
        { id: '3', label: 'MANDALA DETAY', text: 'Geometrik kutsal geometri ve mandala süslemeleriyle zenginleştir.' },
        { id: '4', label: 'ESKİTME EFEKTİ', text: 'Zamanla solmuş, vintage dövme görünümü ve grenli doku.' },
        { id: '5', label: 'JAPON IREZUMI', text: 'Geleneksel Japon dalga, ejderha ve çiçek motifleriyle irezumi stili.' },
        { id: '6', label: 'WATERCOLOR SULUBOYA', text: 'Canlı suluboya renk geçişleri ve fırça darbesi efektiyle boya.' },
        { id: '7', label: 'GEOMETRİK DOTWORK', text: 'Nokta işi (dotwork) tekniğiyle geometrik desenler ve kutsal şekiller.' },
        { id: '8', label: 'NEO-TRADITIONAL', text: 'Kalın konturlar, canlı renkler ve modern geleneksel neo-traditional detaylar.' },
    ],
    'interior': [
        { id: '1', label: 'MODERN MİNAMALİST', text: 'Gereksiz objelerden arınmış, temiz çizgili ve ferah bir tasarım.' },
        { id: '2', label: 'ENDÜSTRİYEL LOFT', text: 'Açık tuğla duvarlar, metal aksanlar ve ham beton dokular.' },
        { id: '3', label: 'SICAK AHŞAP', text: 'Doğal ahşap dokular ve sıcak aydınlatma ile huzurlu bir ortam.' },
        { id: '4', label: 'SCANDI HYGGE', text: 'Beyaz tonlar, yumuşak tekstiller ve hygge sıcaklığıyla İskandinav tarzı.' },
        { id: '5', label: 'BOHO EKLEKTİK', text: 'Etnik desenler, bitkiler ve bohem eklektik karışımla doldur.' },
        { id: '6', label: 'LÜKS ART DECO', text: 'Altın detaylar, mermer yüzeyler ve 1920ler art deco şıklığı.' },
        { id: '7', label: 'JAPON WABI-SABI', text: 'Kusurlu güzellik, doğal malzemeler ve minimalist wabi-sabi felsefesi.' },
    ],
    'mockup': [
        { id: '1', label: 'STÜDYO IŞIĞI', text: 'Ürünü profesyonel beyaz stüdyo ışığı altında, net gölgelerle göster.' },
        { id: '2', label: 'KULLANIM ANINDAYMIŞ GİBİ', text: 'Ürünü gerçek hayat kullanım senaryosunda, doğal bir ortamda göster.' },
        { id: '3', label: 'DOĞAL GÜNEŞ IŞIĞI', text: 'Pencereden gelen yumuşak doğal gün ışığıyla sıcak ve gerçekçi göster.' },
        { id: '4', label: 'LEVİTASYON EFEKTİ', text: 'Ürünü havada süzülüyormuş gibi, minimalist levitasyon mockup ile sun.' },
        { id: '5', label: 'ELDE TUTULUYOR', text: 'Bir elin ürünü doğal ve rahat şekilde tuttuğu gerçekçi bir mockup oluştur.' },
        { id: '6', label: 'KARANLIK MOOD', text: 'Dramatik düşük ışık ve koyu arka planla premium karanlık mood mockup.' },
    ]
};

const PromptSuggestionsModal: React.FC<PromptSuggestionsModalProps> = ({ 
    isOpen, onClose, onSelect, onWriteManual, moduleType, themeColor 
}) => {
    if (!isOpen) return null;

    const currentSuggestions = SUGGESTIONS[moduleType] || SUGGESTIONS['editor'];

    return createPortal(
        <div className="fixed inset-0 z-[5000] flex items-end md:items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}></div>
            
            <div className="relative w-full max-w-lg bg-[var(--app-surface)] border border-[var(--app-border)] rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-500">
                
                {/* Header */}
                <div className="p-8 border-b border-[var(--app-border)] text-center">
                    <h3 className="text-[var(--app-accent)] font-[Oswald] text-xl font-bold tracking-[0.3em] uppercase mb-2">Hazır Komutlar</h3>
                    <p className="text-[var(--app-text-muted)] text-[10px] font-[Oswald] uppercase tracking-widest">Yapay zekayı yönlendirmek için birini seçin</p>
                </div>

                {/* Suggestions Grid */}
                <div className="flex-1 overflow-y-auto p-6 max-h-[50vh] grid grid-cols-1 gap-3 custom-scrollbar">
                    {currentSuggestions.map(s => (
                        <button
                            key={s.id}
                            onClick={() => onSelect(s.text)}
                            className="w-full p-5 rounded-2xl border border-[var(--app-border)] bg-[var(--app-bg)]/50 hover:border-[var(--app-accent)] hover:bg-[var(--app-accent)]/5 transition-all text-left group active:scale-[0.98]"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-[var(--app-accent)] font-[Oswald] text-xs font-bold tracking-widest uppercase mb-1">{s.label}</span>
                                <span className="text-[var(--app-text)] text-sm leading-relaxed opacity-80 group-hover:opacity-100">{s.text}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Manual Write Option */}
                <div className="p-6 bg-[var(--app-bg)]/50 border-t border-[var(--app-border)] flex flex-col gap-3">
                    <button 
                        onClick={onWriteManual}
                        className="w-full py-5 bg-white/5 border border-white/10 hover:border-white/30 text-white rounded-2xl font-[Oswald] font-bold tracking-[0.2em] uppercase text-xs transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        KENDİM YAZICAM
                    </button>
                    <button 
                        onClick={onClose}
                        className="w-full py-3 text-[var(--app-text-muted)] hover:text-white font-[Oswald] uppercase text-[10px] tracking-widest transition-colors"
                    >
                        VAZGEÇ
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PromptSuggestionsModal;
