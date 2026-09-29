
export interface OptionItem {
  id: string;
  label: string;
  promptValue: string; // The text sent to Gemini
}

export interface Category {
  id: string;
  title: string;
  items: OptionItem[];
}

export interface AppState {
  selectedTool: string;
  selectedFilter: string;
  selectedCharacter: string;
  selectedBrand: string;
  selectedSector: string;
  selectedJob: string; // New category
  selectedWear: string;
  selectedBackground: string; // New background category
  selectedTheme: string; // NEW: Theme category (Attractive, Feminine, etc.)
  customPrompt: string; // New custom prompt field
  toolVariant?: string; // New: Variant for specific tools like FIX
}

export type CategoryKey = keyof AppState;

export interface GeneratedImageResult {
  imageData: string; // Base64
}

// History Item Structure
export interface HistoryItem {
    id: number;
    imageData: string;
    timestamp: string;
    module: string;
    promptSummary?: string;
}

// Common Props for Sub-Components
export interface SubComponentProps {
    onHistoryUpdate: (image: string, moduleName: string) => void;
    handleDownload: (imgData?: string) => void; // YENİ: Merkezi indirme fonksiyonu eklendi
    themeColor?: string; 
    enableHaptic?: boolean;
}


// Types for Outfit Combiner Interface
export interface OutfitState {
  selectedConcept: string;
  selectedModelDetail: string;
  selectedBodyType: string; // New: Body Structure (Yapı)
  selectedWearType: string[]; // Changed to array for multi-select
  selectedShoeType: string[]; // New: Multi-select for shoes (e.g. Socks + Sneakers)
  selectedView: string; // New: Camera framing (Full body, portrait etc.)
  selectedAge: string; // New: Age selection
  customPrompt: string;
  // New Variant Fields
  conceptVariant?: string;
  modelVariant?: string;
  bodyTypeVariant?: string; // New
  viewVariant?: string;
  ageVariant?: string;
  wearVariant?: string;
  shoeVariant?: string; // New
  selectedColor: string; // Yeni alan
  colorVariant?: string; // Yeni alan (detaylar için)
}

export interface OutfitImages {
  fullBody: string | null; // Yeni eklenen alan
  topWear: string | null;
  bottomWear: string | null;
  shoes: string | null;
  accessory: string | null;
  model: string | null;
}

// Yeni: Kuyruğa alınan kombinler
export interface QueuedOutfit {
  state: OutfitState;
  images: OutfitImages;
}

// Yeni: Kuyruğa alınan editör görevleri
export interface QueuedEditorTask {
  state: AppState;
  images: string[];
}

// Types for Carpet Designer
export type CarpetMode = 'kids' | 'real';

export interface CarpetOptionGroup {
    id: string;
    title: string;
    multiSelect: boolean;
    options: OptionItem[];
}

export interface CarpetState {
    mode: CarpetMode;
    selectedTags: string[]; // For multi-select items (Kids & Real)
    shape: string; // 1:1, 3:4, round, pill
    customPrompt: string;
}

// Types for Pattern Modifier (Merged with Sticker Options)
export interface PatternState {
  selectedMaterial: string;
  selectedPattern: string;
  selectedStyle: string; // Pattern style
  selectedStickerStyle: string; // New: From Sticker Module
  selectedStickerBorder: string; // New: From Sticker Module
  selectedLogoStyle: string[]; // New: Logo Design Option
  selectedProductShoot: string; // New: Product Shoot Option
  selectedColor: string;
  selectedTechnique: string;
  customPrompt: string;
  logoVariant?: string; // New: Logo Mockup Variant (Card, Sign, etc.)
}

// Yeni: Kuyruğa alınan desen değişiklikleri
export interface QueuedPattern {
  state: PatternState;
  image: string | null;
}

// Types for Variant Generator
export interface VariantState {
    selectedTheme: string;
    selectedStyle: string;
    selectedLighting: string;
    customPrompt: string;
    // Variants
    themeVariant?: string;
    styleVariant?: string;
    lightingVariant?: string;
}

// --- NEW MODULES TYPES ---

// 1. Entertainment (Eğlence)
export interface EntertainmentState {
    selectedCharacter: string; // Who/What
    characterVariant?: string; // New: Specific race/breed prompt
    selectedAction: string; // Hugging, standing next to...
    selectedMood: string; // Horror, Funny, Romantic
    selectedSetting: string; // New: Environment/Background
    customPrompt: string;
}

// 2. Interior Designer (İç Mimar)
export interface InteriorState {
    selectedRoomType: string;
    selectedStyle: string;
    selectedMaterial: string; // New: Wood, Marble, etc.
    selectedColor: string; // New: Warm, Cool, etc.
    customPrompt: string;
}

// 4. Tattoo (Dövme) - UPDATED FOR MULTI-SELECT
export interface TattooState {
    selectedStyle: string[]; // Array for multi-select
    selectedModel: string[]; // UPDATED: Array for multi-select (Max 3)
    modelVariants?: Record<string, string>; // UPDATED: Key-value map for category variants
    selectedBodyPart: string; // Arm, Back, Leg (Context)
    bodyPartVariant?: string; // New: Specific area variant
    selectedColor: string; // Black & Grey, Colorful
    customPrompt: string;
}

// 5. Mockup Generator
export interface MockupState {
    selectedProduct: string; // Jersey type, Tshirt, etc.
    selectedView: string; // Scene/Angle
    selectedTeam: string; // NEW: Real world teams
    selectedDesignStyle: string[]; // UPDATED: Changed from string to string[] for multi-select (Max 3)
    selectedLogo: string; // NEW: Chest Logo Style
    selectedNumber: string; // NEW: Jersey number
    selectedMaterial: string; // Mesh, Cotton
    customPrompt: string;
    // Variants
    productVariant?: string;
    viewVariant?: string;
}

// Types for Global Settings
export interface GlobalSettings {
    watermarkEnabled: boolean;
    watermarkOpacity: number; // 0.1 to 1.0
    globalNegativePrompt: string;
    globalStylePreset: string;
    globalAspectRatio?: string;
    historyLimit: number;
    hapticsEnabled: boolean;
}

// Types for Terminal Chat
export interface ChatMessage {
    sender: 'user' | 'system';
    text: string;
    timestamp: string;
}

// Types for Extra Tools
export interface ExtraToolsState {
    activeToolId: string;
    customPrompt: string;
    subSettings: Record<string, any>;
}
