
import React from 'react';
import { createPortal } from 'react-dom';

interface ModuleInfo {
  title: string;
  description: string;
  features: string[];
}

const MODULE_INFO_DATA: Record<string, ModuleInfo> = {
  editor: {
    title: "GÖRSEL DÜZENLEYİCİ",
    description: "Gemini 2.5 Flash mimarisini kullanarak fotoğraflarınızı profesyonel seviyede restore eder ve manipüle eder.",
    features: ["Bozuk patternleri tamir eder (FIX)", "Düşük çözünürlüklü görselleri 4K kalitesine taşır", "Stil transferi ve arka plan izolasyonu yapar"]
  },
  outfit: {
    title: "KOMBİN YAPICI",
    description: "Parça parça yüklenen kıyafetleri, seçtiğiniz manken ve konsept üzerine gerçekçi bir şekilde giydirir.",
    features: ["Üst, alt ve ayakkabı görsellerini birleştirir", "Mankenin yaşını, fiziğini ve etnik kökenini belirler", "Dünya çapındaki konsept mekanlara yerleştirir"]
  },
  carpet: {
    title: "HALI TASARIM",
    description: "Tekstil sektörü için profesyonel 2D düzlemsel (flat-lay) halı desenleri üretir.",
    features: ["Çocuk oyun halıları için vektörel haritalar", "Modern ve klasik halı dokuları", "Üretim için 1:1 format desteği"]
  },
  pattern: {
    title: "OLUŞTUR (PATTERN)",
    description: "Mevcut nesnelerin materyallerini, renklerini ve desenlerini yapay zeka ile yeniden tanımlar.",
    features: ["Ürün çekimi sahneleme", "Logo tasarımı ve Mockup entegrasyonu", "Materyal dönüşümü (Ahşap, Altın, Mermer vb.)"]
  },
  variant: {
    title: "VARYANT GENERATOR",
    description: "Bir görselin farklı renk, ışık ve sanatsal versiyonlarını saniyeler içinde oluşturur.",
    features: ["Tek tıklamayla 3 farklı alternatif", "Renk eşleştirme (Match) özelliği", "Farklı ışıklandırma modları"]
  },
  fun: {
    title: "EĞLENCE (ENTERTAINMENT)",
    description: "Fotoğraflarınıza popüler karakterler, partnerler veya evcil hayvanlar ekleyerek sahneyi canlandırır.",
    features: ["Karakter ekleme ve etkileşim kurma", "Romantik, aksiyon veya korku modları", "Mekan değişikliği desteği"]
  },
  interior: {
    title: "İÇ MİMAR",
    description: "Oda fotoğraflarınızı mimari yapıyı bozmadan seçtiğiniz tarzda yeniden dekore eder.",
    features: ["Materyal ve renk paleti değişimi", "Modern, Endüstriyel, Scandi gibi 10+ tarz", "Ferahlık ve ışık optimizasyonu"]
  },
  tattoo: {
    title: "DÖVME TASARIM",
    description: "Hayalinizdeki dövmeyi önce 2D kağıt üzerinde tasarlar, sonra vücudunuzda simüle eder.",
    features: ["30+ farklı dövme stili ve figür seçeneği", "Vücut bölgelerine gerçekçi giydirme", "Stencil (şablon) çıktısı desteği"]
  },
  mockup: {
    title: "MOCKUP ÜRETİCİ",
    description: "Tasarımlarınızı gerçek dünya ürünleri üzerinde 3D render kalitesinde görselleştirir.",
    features: ["Formalar, tekstil ürünleri ve aksesuarlar", "Kumaş dokusu ve dikiş detayları", "Ticari sunumlar için profesyonel çekim modları"]
  }
};

interface ModuleInfoModalProps {
  moduleId: string;
  onClose: () => void;
}

const ModuleInfoModal: React.FC<ModuleInfoModalProps> = ({ moduleId, onClose }) => {
  const info = MODULE_INFO_DATA[moduleId];
  if (!info) return null;

  return createPortal(
    <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-[var(--app-surface)] border border-[var(--app-border)] rounded-[2.5rem] shadow-2xl p-8 overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--app-bg)] border border-[var(--app-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-[var(--app-accent)] hover:border-[var(--app-accent)] transition-all z-10 active:scale-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--app-accent)]/10 border border-[var(--app-accent)]/20">
            <span className="text-[var(--app-accent)] font-[Oswald] text-[10px] font-bold tracking-[0.3em] uppercase">SİSTEM BİLGİSİ</span>
          </div>

          <h2 className="text-3xl font-[Oswald] font-bold text-white tracking-widest uppercase">{info.title}</h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            {info.description}
          </p>

          <div className="space-y-3 pt-4">
            <h4 className="text-[10px] font-[Oswald] text-[var(--app-accent)] tracking-widest uppercase font-bold">ÖNE ÇIKAN ÖZELLİKLER</h4>
            <div className="grid gap-2">
              {info.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-[var(--app-bg)]/50 p-3 rounded-xl border border-[var(--app-border)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--app-accent)] mt-1.5 shrink-0 shadow-[0_0_10px_var(--app-accent)]"></div>
                  <span className="text-xs text-gray-300 uppercase tracking-wide font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 text-center">
            <button 
              onClick={onClose}
              className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-white font-[Oswald] font-bold tracking-[0.2em] uppercase text-xs transition-all active:scale-95"
            >
              ANLADIM
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--app-accent)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
      </div>
    </div>,
    document.body
  );
};

export default ModuleInfoModal;
