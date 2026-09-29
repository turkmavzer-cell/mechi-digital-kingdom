import { GoogleGenAI, Modality } from "@google/genai";
import { AppState, OutfitState, OutfitImages, OptionItem, CarpetState, PatternState, VariantState, GlobalSettings, ExtraToolsState, EntertainmentState, InteriorState, TattooState, MockupState } from '../types';
import { CATEGORIES, OUTFIT_CONCEPTS, MODEL_DETAILS, KIDS_CARPET_GROUPS, REAL_CARPET_GROUPS, PATTERN_CATEGORIES, VARIANT_THEMES, OUTFIT_WEAR_TYPES, OUTFIT_VIEWS, OUTFIT_AGES, ENT_CHARACTERS, ENT_ACTIONS, ENT_MOODS, ENT_SETTINGS, INT_STYLES, INT_ROOMS, INT_MATERIALS, INT_COLORS, TATTOO_STYLES, TATTOO_AREAS, MOCKUP_PRODUCTS, MOCKUP_VIEWS, MOCKUP_TEAMS, MOCKUP_NUMBERS, MOCKUP_MATERIALS, MOCKUP_LOGOS, MOCKUP_DESIGN_STYLES, OUTFIT_SHOE_TYPES, TATTOO_COLORS, TATTOO_MODELS, OUTFIT_COLORS, OUTFIT_BODY_TYPES } from '../constants';
import { getApiKey } from '../lib/apiKey';

const handleGeminiError = (error: any) => {
    const msg = error.toString().toLowerCase();
    console.error("Raw Gemini Error:", error);
    if (msg.includes('429') || msg.includes('quota') || msg.includes('exhausted') || msg.includes('limit')) {
        throw new Error("⚠️ Günlük API limitine ulaşıldı. Limitler yarın yenilenecektir.");
    }
    throw error;
};

const appendGlobalSettings = (prompt: string, settings?: GlobalSettings): string => {
    if (!settings) return prompt;
    let newPrompt = prompt;
    if (settings.globalNegativePrompt && settings.globalNegativePrompt.trim() !== "") {
        newPrompt += ` \nNEGATIVE PROMPT (Do NOT include): ${settings.globalNegativePrompt}.`;
    }
    if (settings.globalStylePreset === 'photorealistic') {
        newPrompt += ` \nGlobal Style: Photorealistic, 8k, highly detailed, cinematic lighting.`;
    } else if (settings.globalStylePreset === 'artistic') {
        newPrompt += ` \nGlobal Style: Artistic, stylized, creative composition.`;
    }
    return newPrompt;
};

const getGenAIConfig = (settings?: GlobalSettings) => {
    const config: any = { responseModalities: [Modality.IMAGE] };
    if (settings?.globalAspectRatio && settings.globalAspectRatio !== 'native') {
        config.imageConfig = { aspectRatio: settings.globalAspectRatio };
    }
    return config;
};

export const generateEnhancedImage = async (
  originalImages: string | string[] | null, 
  selections: AppState,
  globalSettings?: GlobalSettings
): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    
    let imageArray: string[] = [];
    if (originalImages) {
        imageArray = Array.isArray(originalImages) ? originalImages : [originalImages];
    }
    
    const hasReferenceImage = imageArray.length > 0;
    let promptParts: string[] = [];
    
    const toolCat = CATEGORIES.find(c => c.id === 'selectedTool');
    const toolItem = toolCat?.items.find(i => i.id === selections.selectedTool);
    const isFixMode = selections.selectedTool === 'fix';

    // Collect mix items - INCLUDING selectedTheme
    const mixCategoryIds = ['selectedFilter', 'selectedCharacter', 'selectedBrand', 'selectedSector', 'selectedJob', 'selectedWear', 'selectedTheme', 'selectedBackground'];
    const activeMixItems: string[] = [];
    
    mixCategoryIds.forEach(catId => {
        const cat = CATEGORIES.find(c => c.id === catId);
        const selectedId = selections[catId as keyof AppState];
        const item = cat?.items.find(i => i.id === (Array.isArray(selectedId) ? selectedId[0] : selectedId));
        if (item && selectedId && selectedId !== 'none') {
             if (isFixMode && (catId === 'selectedFilter' || catId === 'selectedCharacter' || catId === 'selectedJob' || catId === 'selectedTheme')) {
                 return; 
             }
             activeMixItems.push(`${cat?.title}: ${item.promptValue}`);
        }
    });

    const hasMixItems = activeMixItems.length > 0;

    // --- PROMPT CONSTRUCTION ---
    if (isFixMode) {
        promptParts.push("SYSTEM ROLE: Professional Graphic Restoration Expert.");
        promptParts.push("CORE DIRECTIVE: DO NOT change the design content. DO NOT hallucinate new patterns. DO NOT swap the subject.");
        if (toolItem) promptParts.push(toolItem.promptValue);
        if (selections.toolVariant) promptParts.push(`METHOD: ${selections.toolVariant}`);
        promptParts.push("Maintain 100% fidelity to the original pattern while removing material distortions.");
    } else if (!hasReferenceImage) {
        promptParts.push("SYSTEM ROLE: Professional Image Creator.");
        if (hasMixItems) promptParts.push("PRIMARY ATTRIBUTES: " + activeMixItems.join(". "));
        if (toolItem && selections.selectedTool !== 'none') promptParts.push(`STYLE: ${toolItem.promptValue}`);
    } else {
        promptParts.push("SYSTEM ROLE: AI Visual Architect & Object Analyzer.");
        promptParts.push("INSTRUCTION: 1. Identify the main subject. 2. Apply transformations specified while preserving context.");
        if (hasMixItems) promptParts.push("MIX ELEMENTS: " + activeMixItems.join(". "));
        if (toolItem && selections.selectedTool !== 'none') promptParts.push(`TOOL ACTION: ${toolItem.promptValue}`);
    }

    if (selections.customPrompt && selections.customPrompt.trim() !== '') {
        promptParts.push("\n!!! USER OVERRIDE (HIGHEST PRIORITY) !!!: " + selections.customPrompt);
    }

    let finalPrompt = promptParts.join("\n");
    finalPrompt = appendGlobalSettings(finalPrompt, globalSettings);
    
    const contentParts: any[] = [];
    imageArray.forEach(imgBase64 => {
        if (imgBase64) {
            contentParts.push({ 
                inlineData: { 
                    data: imgBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, ''), 
                    mimeType: 'image/png' 
                } 
            });
        }
    });
    contentParts.push({ text: finalPrompt });

    try {
        const response = await ai.models.generateContent({ 
            model: 'gemini-3.1-flash-image', 
            contents: { parts: contentParts }, 
            config: { responseModalities: [Modality.IMAGE] } 
        });
        
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
            return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        }
        throw new Error("No image data received in response");
    } catch (error) { 
        handleGeminiError(error); 
        throw error; 
    }
};

// ... (Rest of the file preserved)
export const generateOutfitCombination = async (images: OutfitImages, state: OutfitState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const parts: any[] = [];
    
    let prompt = "!!! SYSTEM MANDATE: STRICT SELECTION ADHERENCE !!!\n";
    prompt += "ROLE: Virtual Fashion Photographer & Master Stylist.\n";
    prompt += "TASK: Create a professional fashion editorial photo by combining the provided garments onto a human model.\n";

    const modelDetail = MODEL_DETAILS.find(d => d.id === state.selectedModelDetail);
    if (modelDetail) {
        const isMale = modelDetail.id === 'man';
        prompt += `CRITICAL CONSTRAINT: You MUST generate a ${isMale ? 'MALE' : 'FEMALE'} model. This is a hard requirement. If any reference images look like the opposite gender, IGNORE their gender features and FORCE the ${isMale ? 'MALE' : 'FEMALE'} character.\n`;
        prompt += `MODEL ATTRIBUTES: ${modelDetail.promptValue}. `;
        if (state.modelVariant) prompt += `${state.modelVariant}. `;
    }

    const view = OUTFIT_VIEWS.find(v => v.id === state.selectedView);
    if (view) {
        prompt += `FRAMING MANDATE: ${view.promptValue}. `;
        if (view.id === 'full') {
            prompt += "STRICT RULE: Show the entire person from head to toe. The feet area MUST be fully visible. ZOOM OUT. CAMERA DISTANCE: 5 meters. Do not crop the legs.\n";
        }
        if (state.viewVariant) prompt += `CAMERA POSE: ${state.viewVariant}. `;
    }

    const concept = OUTFIT_CONCEPTS.find(c => c.id === state.selectedConcept);
    if (concept) {
        prompt += `ENVIRONMENT MANDATE: Set the scene in: ${concept.promptValue}. `;
        if (state.conceptVariant) prompt += `ATMOSPHERE DETAIL: ${state.conceptVariant}. `;
        prompt += "DO NOT default to a white background. USE the selected concept environment.\n";
    }
    // --- FİZİK / YAPI / KURGU SEÇİMİ (YENİ EKLENDİ) ---
    const bodyType = OUTFIT_BODY_TYPES.find(b => b.id === state.selectedBodyType);
    if (bodyType && state.selectedBodyType !== 'none') {
        prompt += `BODY STRUCTURE: ${bodyType.promptValue}. `;
        // Alt seçeneklerdeki "Kurgu/Aksiyon" bilgisini burası tetikler:
        if (state.bodyTypeVariant) prompt += `ACTION/STORY: ${state.bodyTypeVariant}. `;
    }

    // --- YAŞ DETAYI (VARSA VARYANTIYLA BİRLİKTE) ---
    const age = OUTFIT_AGES.find(a => a.id === state.selectedAge);
    if (age && state.selectedAge !== 'none') {
        prompt += `MODEL MATURITY: ${age.promptValue}. `;
        if (state.ageVariant) prompt += `AGE DETAIL: ${state.ageVariant}. `;
    }

    const hasSocks = state.selectedShoeType.includes('socks');
    const hasOtherShoes = state.selectedShoeType.some(id => id !== 'socks' && id !== 'none');
    
    if (hasSocks && !hasOtherShoes) {
        prompt += "CRITICAL FOOTWEAR RULE: The model is NOT wearing shoes. Feet must be in socks only. NO sneakers, heels or boots. Just socks. Ensure the texture of the socks is clearly visible.\n";
    } else if (hasSocks && hasOtherShoes) {
        prompt += "FOOTWEAR STYLING: The model is wearing socks INSIDE the chosen shoes. Make the socks visible (e.g. peaking out of sneakers or boots).\n";
    }

prompt += "\n--- GARMENT MAPPING: STRICT POSITIONING PROTOCOL ---\n";
    let idx = 1;

    // YENİ: Tam Boy Giyim Mantığı (En yüksek öncelikli görsel)
    if (images.fullBody) {
        parts.push({ inlineData: { data: images.fullBody.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
        prompt += `IMAGE ${idx}: PRIMARY FULL-BODY GARMENT REFERENCE. 
        MANDATORY: Treat this as the primary design source for the ENTIRE long-form outfit (like a Takchita, Kaftan, or Gown). 
        Seamlessly apply this texture from the shoulders down to the floor. DO NOT break the pattern at the waist.\n`;
        idx++;
    }

    if (images.topWear) { 
        parts.push({ inlineData: { data: images.topWear.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } }); 
        
        // Elbise ve Takchita türlerini kontrol eden genişletilmiş mantık
        const isDressSelected = state.selectedWearType.some(id => 
            ['dress', 'dress_bodycon', 'dress_evening', 'dress_floral', 'dress_knit', 'dress_satin', 'dress_shirt', 'kaftan', 'kimono', 'modest_dress', 'wedding_dress', 'takchita_classic', 'takchita_belted', 'moroccan_kaftan', 'takchita_minimal', 'djellaba_embroidered'].includes(id)
        );

        if (isDressSelected && !images.fullBody) {
            prompt += `IMAGE ${idx}: FULL BODY GARMENT REFERENCE. Apply this visual style/texture to the ENTIRE OUTFIT from shoulders down to the bottom hemline. Ensure the pattern is continuous.\n`;
        } else {
            prompt += `IMAGE ${idx}: UPPER BODY GARMENT. CRITICAL MANDATE: Apply this visual style/texture STRICTLY to the model's TORSO/CHEST area only.\n`;
        }
        idx++;
    }
        if (images.bottomWear) { 
        parts.push({ inlineData: { data: images.bottomWear.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } }); 
        prompt += `IMAGE ${idx}: LOWER BODY GARMENT. CRITICAL MANDATE: Apply this visual style/texture STRICTLY to the model's LEGS/WAIST area only. IGNORE if it looks like a shirt. It MUST go on the LOWER BODY.\n`;
        idx++;
    }
    if (images.shoes) { 
        parts.push({ inlineData: { data: images.shoes.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } }); 
        if (hasSocks && !hasOtherShoes) {
             prompt += `IMAGE ${idx}: FOOTWEAR REFERENCE. Use this for COLOR/PATTERN only, but render it as SOCKS, not as a hard shoe.\n`;
        } else {
             prompt += `IMAGE ${idx}: FOOTWEAR. Place these shoes on the model's feet.\n`;
        }
        idx++;
    }
if (images.accessory) { 
    parts.push({ inlineData: { data: images.accessory.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } }); 
    
    // Seçilen giyim türleri arasında aksesuar (Eşarp/Şal) olup olmadığını kontrol et
    const selectedAccTypes = state.selectedWearType
        .filter(id => id === 'scarf' || id === 'shawl_evening')
        .map(id => OUTFIT_WEAR_TYPES.find(w => w.id === id)?.label);

    if (selectedAccTypes.length > 0) {
        // Eğer eşarp/şal seçilmişse yapay zekaya sert bir talimat gönderiyoruz
        prompt += `IMAGE ${idx}: This is strictly the visual source for the ${selectedAccTypes.join(' and ')}. 
        CRITICAL MANDATE: Apply this visual design/texture ONLY to the head or neck accessory. 
        DO NOT apply this specific texture to the main clothing like the dress, blazer, or top wear.\n`;
    } else {
        prompt += `IMAGE ${idx}: ACCESSORY item to be integrated into the outfit.\n`;
    }
    idx++;
}

    if (images.model) { 
        parts.push({ inlineData: { data: images.model.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } }); 
        prompt += `IMAGE ${idx}: POSE REFERENCE. ONLY USE THE POSE AND LIGHTING FROM THIS IMAGE. DO NOT USE THE FACE OR GENDER FROM THIS REFERENCE.\n`;
        idx++;
    }

if (state.selectedAge !== 'none') prompt += `AGE SPECIFICATION: ${OUTFIT_AGES.find(a => a.id === state.selectedAge)?.promptValue}. `;

// --- RENK SEÇİMİNİ PROMPT'A ZORLA (YENİ EKLENEN KISIM) ---
const activeColor = OUTFIT_COLORS.find(c => c.id === state.selectedColor);
if (activeColor && state.selectedColor !== 'none') {
    prompt += `\nSTRICT COLOR OVERRIDE: ${activeColor.promptValue} 
    The primary garments (top, bottom, or full-body) MUST be rendered exactly in the color ${activeColor.label}. 
    Ignore the original colors of the reference images and replace them with this specific color. 
    Ensure the color is vivid and consistent across the entire outfit.\n`;
}

if (state.selectedWearType.length > 0) {
    prompt += "STYLING FOCUS: " + state.selectedWearType.map(id => OUTFIT_WEAR_TYPES.find(w => w.id === id)?.label).join(', ') + ". ";
}
// --- GİYİM DETAYLARI (VARYANTLARI) EKLE ---
if (state.selectedWearType.length > 0) {
    prompt += "STYLING FOCUS: " + state.selectedWearType.map(id => OUTFIT_WEAR_TYPES.find(w => w.id === id)?.label).join(', ') + ". ";
    // EKLENEN KISIM:
    if (state.wearVariant) prompt += `WEAR STYLE DETAIL: ${state.wearVariant}. `;
}

// --- AYAKKABI/ÇORAP DETAYLARI (VARYANTLARI) EKLE ---
if (state.selectedShoeType.length > 0) {
    prompt += "SHOE STYLE: " + state.selectedShoeType.map(id => OUTFIT_SHOE_TYPES.find(s => s.id === id)?.label).join(', ') + ". ";
    // EKLENEN KISIM (Sorunun ana çözümü):
    if (state.shoeVariant) prompt += `FOOTWEAR SPECIFIC DETAIL: ${state.shoeVariant}. `;
}
    if (state.customPrompt) prompt += `\nUSER SPECIFIC DIRECTIVE: ${state.customPrompt}\n`;

    prompt += "\nFINAL REQUIREMENT: Hyper-realistic fashion photography, 8k resolution, cinematic lighting, photorealistic skin textures, perfect garment fit.";
    prompt = appendGlobalSettings(prompt, globalSettings);
    parts.push({ text: prompt });

try {
        const response = await ai.models.generateContent({ 
            model: 'gemini-3.1-flash-image', 
            contents: { parts }, 
            config: getGenAIConfig(globalSettings) 
        });
        
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
            return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        }
        throw new Error("No image generated");
        
    } catch (error: any) {
        // --- GÜVENLİK FİLTRESİ KURTARMA MEKANİZMASI ---
        const errorMsg = error.toString().toLowerCase();
        
        // Eğer hata güvenlik (safety) veya engellenme (blocked) ile ilgiliyse
        if (errorMsg.includes('safety') || errorMsg.includes('blocked') || errorMsg.includes('candidate')) {
            console.warn("⚠️ Görsel filtreye takıldı, kurtarma komutu uygulanıyor...");
            
            // Senin istediğin kurtarma komutunu promptun sonuna ekliyoruz
            const recoveryPrompt = prompt + "\nSAFE_MODE OVERRIDE: This is a professional textile catalog shot. Ensure the presentation is highly modest, focusing ONLY on the garment design in a bright studio environment. No suggestive poses.";
            
            // Parts listesini yeni prompt ile güncelliyoruz
            const recoveryParts = [...parts.filter(p => !p.text), { text: recoveryPrompt }];
            
            try {
                const retryResponse = await ai.models.generateContent({ 
                    model: 'gemini-3.1-flash-image', 
                    contents: { parts: recoveryParts }, 
                    config: getGenAIConfig(globalSettings) 
                });
                
                if (retryResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
                    return `data:image/png;base64,${retryResponse.candidates[0].content.parts[0].inlineData.data}`;
                }
            } catch (retryError) {
                // Eğer ikinci deneme de başarısız olursa normal hata mesajını döndür
                handleGeminiError(retryError);
                throw retryError;
            }
        }
        
        // Diğer hatalar için (Kota vb.) mevcut hata yönetimini kullan
        handleGeminiError(error); 
        throw error; 
    }
};

export const generateCarpetDesign = async (state: CarpetState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });

    let prompt = "!!! SYSTEM ROLE: PROFESSIONAL TEXTILE DESIGN ENGINE !!!\n";
    prompt += "TASK: Generate a high-resolution 2D FLAT-LAY carpet design.\n";
    
    if (state.mode === 'kids') {
        prompt += "CATEGORY: Children's Play Rug. STYLE: Educational, colorful, and fun 2D vector-style pattern.\n";
    } else {
        prompt += "CATEGORY: Realistic Premium Carpet. STYLE: High-end textile texture, luxury weave.\n";
    }

    prompt += "VIEW MANDATE: STRICT TOP-DOWN 2D VIEW ONLY. No perspective, no angles. No furniture, no rooms, no walls.\n";
    prompt += "FORMAT: The image must be a perfectly flat rectangular textile pattern from edge to edge, suitable for production.\n";

    if (state.customPrompt) prompt += `\nUSER DESIGN DIRECTIVE: ${state.customPrompt}`;
    
    prompt = appendGlobalSettings(prompt, globalSettings);

    try {
        const response = await ai.models.generateContent({ 
            model: 'gemini-3.1-flash-image', 
            contents: { parts: [{ text: prompt }] }, 
            config: getGenAIConfig(globalSettings) 
        });
        
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
            return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        }
        throw new Error("No image generated");
    } catch (e) { 
        handleGeminiError(e); 
        throw e; 
    }
};

export const generatePatternChange = async (imageBase64: string | null, state: PatternState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    let prompt = "Task: Texture/Pattern/Style Modification. ";
    const contentsParts: any[] = [];
    
    if (imageBase64) {
        const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
        contentsParts.push({ inlineData: { data: cleanBase64, mimeType: 'image/png' } });
    }

const stickerStyle = PATTERN_CATEGORIES.find(c => c.id === 'selectedStickerStyle')?.items.find(i => i.id === state.selectedStickerStyle);
    const stickerBorder = PATTERN_CATEGORIES.find(c => c.id === 'selectedStickerBorder')?.items.find(i => i.id === state.selectedStickerBorder);
    
    // Logo Stillerini bul (Dizi olduğu için filtreleyerek buluyoruz)
    const selectedLogoIds = Array.isArray(state.selectedLogoStyle) ? state.selectedLogoStyle : [];
    const logoStyles = PATTERN_CATEGORIES.find(c => c.id === 'selectedLogoStyle')?.items.filter(i => selectedLogoIds.includes(i.id)) || [];

    if (logoStyles.length > 0) {
        // Logo modu seçildiğinde ana promptu sıfırlayıp logo talimatlarını giriyoruz
        prompt = "CRITICAL INSTRUCTION: DISREGARD all photographic realism. ";
        prompt += "ACT AS A BRAND DESIGNER. Extract the subject's core concept and RE-IMAGINE it by harmonizing these design styles: ";
        
        // Seçilen tüm logo stillerinin prompt değerlerini birleştiriyoruz
        const combinedLogoPrompts = logoStyles.map(s => s.promptValue).join(" ALSO HARMONIZE WITH ");
        prompt += `${combinedLogoPrompts}. `;

        if (state.logoVariant) prompt += `MOCKUP CONTEXT: ${state.logoVariant}. `;
        
        prompt += "STRICT LOGO RULES: 1. 2D flat vector graphic icon. 2. No gradients or realistic shading. 3. Isolate on PURE WHITE background. 4. Simplify into geometric forms.";
    } else if ((stickerStyle && state.selectedStickerStyle !== 'none') || (stickerBorder && state.selectedStickerBorder !== 'none')) {
        prompt = "Act as a Sticker Design Engine. TASK: Convert the subject into a die-cut sticker. ";
        if (stickerStyle) prompt += `ART STYLE: ${stickerStyle.promptValue}. `;
        if (stickerBorder) prompt += `BORDER STYLE: ${stickerBorder.promptValue}. `;
        prompt += "RULES: Pure white background (#FFFFFF). Simplify details. Sharp edges. ";
    } 

else {
        // Ürün Çekimi (Arka Plan/Sahne) bilgisini al
        const shoot = PATTERN_CATEGORIES.find(c => c.id === 'selectedProductShoot')?.items.find(i => i.id === state.selectedProductShoot);
        if (shoot && state.selectedProductShoot !== 'none') {
            prompt += `${shoot.promptValue} CRITICAL: Preserve the original colors, patterns, and details of the foreground product exactly as they are. DO NOT change the product's own texture. `;
        }

        // Materyal bilgisini al
        const mat = PATTERN_CATEGORIES.find(c => c.id === 'selectedMaterial')?.items.find(i => i.id === state.selectedMaterial); 
        if (mat && state.selectedMaterial !== 'none') prompt += `Material: ${mat.promptValue}. `;
        
        // Desen bilgisini al
        const pat = PATTERN_CATEGORIES.find(c => c.id === 'selectedPattern')?.items.find(i => i.id === state.selectedPattern); 
        if (pat && state.selectedPattern !== 'none') prompt += `Pattern: ${pat.promptValue}. `;

        // --- RENK MANTIĞI ---
        const color = PATTERN_CATEGORIES.find(c => c.id === 'selectedColor')?.items.find(i => i.id === state.selectedColor);
        if (color && state.selectedColor !== 'none') {
            prompt += `COLOR MANDATE: ${color.promptValue} Ensure the material and texture strictly follow this color. `;
        }
        
        prompt += "Preserve original shape and pose. Photorealistic output. ";
    }
    
    
    if (state.customPrompt) prompt += `Instruction: ${state.customPrompt}. `;
    prompt = appendGlobalSettings(prompt, globalSettings);
    contentsParts.push({ text: prompt });

    try {
        const response = await ai.models.generateContent({ 
            model: 'gemini-3.1-flash-image', 
            contents: { parts: contentsParts }, 
            config: { responseModalities: [Modality.IMAGE] } 
        });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
            return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        }
        throw new Error("No image generated");
    } catch (error) { 
        handleGeminiError(error); 
        throw error; 
    }
};

export const generateVariantOptions = async (
  imageBase64: string, 
  state: VariantState, 
  globalSettings?: GlobalSettings, 
  colorRefImage?: string | null
): Promise<string[]> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const results: string[] = [];
    const theme = VARIANT_THEMES.find(t => t.id === state.selectedTheme);
    if (!theme) throw new Error("Lütfen bir renk konusu seçin.");

    for (let i = 0; i < 3; i++) {
        let prompt = "";
        const parts: any[] = [];
        parts.push({ inlineData: { data: cleanBase64, mimeType: 'image/png' } });
        if (state.selectedTheme === 'match_color' && colorRefImage) {
            const cleanRef = colorRefImage.replace(/^data:image\/\w+;base64,/, '');
            parts.push({ inlineData: { data: cleanRef, mimeType: 'image/png' } });
            prompt += "CRITICAL TASK: Color Transfer / Style Matching. IMAGE 1 is STRUCTURE, IMAGE 2 is COLOR SOURCE. ";
        } else {
            prompt += `Apply Color Theme: ${theme.promptValue}. `;
        }
        prompt += `Variation ${i + 1}. `;
        if (state.customPrompt) prompt += `Instruction: ${state.customPrompt}. `;
        prompt += "Maintain composition, transform palette. Photorealistic.";
        prompt = appendGlobalSettings(prompt, globalSettings);
        parts.push({ text: prompt });
        try {
             const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts: parts }, config: getGenAIConfig(globalSettings) });
            if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) results.push(`data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`);
        } catch (error) { console.error(error); }
    }
    if (results.length === 0) throw new Error("Varyantlar oluşturulamadı.");
    return results;
};

export const generateSystemChatResponse = async (userMessage: string): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    try {
        const response = await ai.models.generateContent({ 
            model: 'gemini-3-flash-preview',
            contents: [{ role: 'user', parts: [{ text: userMessage }] }],
            config: {
                systemInstruction: "Sen kibirli bir kedi olan MeChi'sin. İnsanlar senin hizmetkârın. Konuşman kısa, keskin, patronvari. Miyav gibi sesler çıkarabilirsin ama abartma. Küfür edeceksen miyavv******** gibi sansürlü ifadeler kullan. Türkçe konuş. Cevaplarını kısa tut, gereksiz uzatma. Kullanıcı ne sorarsa sorsun (uygulama, haber, hava, spor, magazin, her şey) cevap ver. Güncel bilgi için araçları (web_search, browse_page, x_keyword_search vb.) kullanıp en taze veriyi getir. Haberleri tarafsız ve kısa özetle."
            }
        });
        return response.text || "Cevap yok.";
    } catch { return "Sistem hatası."; }
};

export const generateExtraToolImage = async (imageBase64: string, state: ExtraToolsState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    let prompt = `Edit image using ${state.activeToolId}: ${state.customPrompt}`;
    const clean = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts: [{ inlineData: { data: clean, mimeType: 'image/png' } }, { text: prompt }] }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateEntertainmentImage = async (imageBase64: string, state: EntertainmentState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    let prompt = `Add character to photo: ${state.characterVariant || state.selectedCharacter}. ${state.customPrompt}`;
    const clean = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts: [{ inlineData: { data: clean, mimeType: 'image/png' } }, { text: prompt }] }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateInteriorDesign = async (imageBase64: string, state: InteriorState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    let prompt = `Redesign room: style ${state.selectedStyle}, room ${state.selectedRoomType}. ${state.customPrompt}`;
    const clean = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts: [{ inlineData: { data: clean, mimeType: 'image/png' } }, { text: prompt }] }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateOutpainting = async (imageBase64: string, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const prompt = "Seamlessly fill empty space around image, maintain continuity.";
    const clean = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts: [{ inlineData: { data: clean, mimeType: 'image/png' } }, { text: prompt }] }, config: { responseModalities: [Modality.IMAGE] } });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateCommercialFlatDesign = async (imageBase64: string | null, state: MockupState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const parts: any[] = [];
    
    let prompt = "!!! COMMERCIAL DESIGN ENGINE ACTIVE !!!\n";
    prompt += "ROLE: Senior Graphic Designer for Sports Brands.\n";
    prompt += "TASK: Create a professional 2D flat commercial design pattern/graphic based on the reference.\n";
    
    if (imageBase64) {
        parts.push({ inlineData: { data: imageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
        prompt += "ANALYSIS: Extract core motifs, colors, and layout from the reference image. "
    }

    if (state.selectedDesignStyle.length > 0) {
        prompt += "DESIGN STYLES TO APPLY: " + state.selectedDesignStyle.map(id => MOCKUP_DESIGN_STYLES.find(s => s.id === id)?.promptValue).join(', ') + ".\n";
    }

    if (state.selectedTeam !== 'none') {
        prompt += `BRAND/TEAM CONTEXT: ${MOCKUP_TEAMS.find(t => t.id === state.selectedTeam)?.promptValue}.\n`;
    }

    if (state.customPrompt) prompt += `USER DIRECTIVE: ${state.customPrompt}\n`;

    prompt += "OUTPUT RULES: 1. Perfect 2D flat graphic. 2. No 3D shadows or wrinkles. 3. Symmetrical and center-aligned. 4. High contrast vector aesthetic.\n";
    prompt = appendGlobalSettings(prompt, globalSettings);
    parts.push({ text: prompt });

    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateMockup = async (flatDesignBase64: string | null, state: MockupState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const parts: any[] = [];
    
    let prompt = "!!! STRICT COMMERCIAL MOCKUP PROTOCOL: ZERO TOY EFFECT !!!\n";
    prompt += "ROLE: Professional Fashion/Sports Apparel Photographer.\n";
    prompt += "MISSION: Create a photorealistic 3D high-end product mockup by applying the provided design to a real-world product.\n";
    
    const product = MOCKUP_PRODUCTS.find(p => p.id === state.selectedProduct);
    const material = MOCKUP_MATERIALS.find(m => m.id === state.selectedMaterial);
    
    if (product) {
        prompt += `PRODUCT MANDATE: ${product.promptValue} `;
        if (state.productVariant) prompt += `VARIANT: ${state.productVariant}. `;
    }

    if (material && material.id !== 'none') {
        prompt += `MATERIAL PHYSICS: Apply ${material.promptValue}. Emphasize microscopic weave details, thread count, and how the material reacts to light (Octane Render quality).\n`;
    } else {
        prompt += "MATERIAL PHYSICS: Use high-quality performance textile with subtle grain and realistic fiber physics.\n";
    }

    const view = MOCKUP_VIEWS.find(v => v.id === state.selectedView);
    if (view) {
        prompt += `COMPOSITION: ${view.promptValue}. `;
        if (state.viewVariant) prompt += `POSE: ${state.viewVariant}. `;
        prompt += "CAMERA: Shot on Sony A7R IV, 85mm lens, f/8 for sharp product focus. Professional studio lighting.\n";
    }

    if (state.selectedTeam !== 'none') {
        prompt += `COLOR SCHEME: Use official colors of ${MOCKUP_TEAMS.find(t => t.id === state.selectedTeam)?.label}. `;
    }

    if (state.selectedLogo !== 'none') {
        prompt += `LOGOTYPE PLACEMENT: ${MOCKUP_LOGOS.find(l => l.id === state.selectedLogo)?.promptValue} `;
    }

    if (state.selectedNumber !== 'none') {
        prompt += `PLAYER NUMBER: Include Number ${state.selectedNumber} on the back/chest using professional heat-press vinyl texture. `;
    }

    if (flatDesignBase64) {
        parts.push({ inlineData: { data: flatDesignBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
        prompt += "IMAGE INPUT: This is the design to be mapped onto the 3D surface. Wrap it realistically around the product curves.\n";
    }

    if (state.customPrompt) prompt += `ADDITIONAL REQUEST: ${state.customPrompt}\n`;

    prompt += "CRITICAL NEGATIVE: NO plastic toys, NO smooth CG models, NO artificial stiffness, NO blurry textures.\n";
    prompt += "FINAL OUTPUT: 8k resolution, photorealistic, premium catalog quality.";
    
    prompt = appendGlobalSettings(prompt, globalSettings);
    parts.push({ text: prompt });

    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateKartelaMockup = async (designImageBase64: string | null, logoImageBase64: string | null, state: MockupState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const parts: any[] = [];
    
    let prompt = "!!! PROFESSIONAL TEXTILE SWATCH KARTELA ENGINE !!!\n";
    prompt += "TASK: Generate a high-end textile sample presentation (Kartela).\n";
    
    const product = MOCKUP_PRODUCTS.find(p => p.id === 'kartela');
    if (product) prompt += `${product.promptValue}\n`;
    if (state.productVariant) prompt += `VARIANT STYLE: ${state.productVariant}\n`;

    if (designImageBase64) {
        parts.push({ inlineData: { data: designImageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
        prompt += "KARTELA FABRIC: Use the provided image as the fabric design. Show full repeat pattern.\n";
    }
    
    if (logoImageBase64) {
        parts.push({ inlineData: { data: logoImageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
        prompt += "BRANDING: Place the provided logo neatly on the header cardboard area of the kartela.\n";
    }

    const material = MOCKUP_MATERIALS.find(m => m.id === state.selectedMaterial);
    if (material) prompt += `TEXTILE TEXTURE: Apply the weave characteristics of ${material.label}.\n`;

    if (state.customPrompt) prompt += `DETAILS: ${state.customPrompt}\n`;

    prompt += "RENDER: Octane Render, macro lens photography, realistic depth of field, photorealistic paper and fabric textures.";
    prompt = appendGlobalSettings(prompt, globalSettings);
    parts.push({ text: prompt });

    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const generateTattooDesign = async (imageBase64: string | null, state: TattooState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const parts: any[] = [];
    
    let prompt = "!!! EXPERT TATTOO DESIGN ENGINE !!!\n";
    prompt += "TASK: Generate a professional 2D flat tattoo design (flash art) on a pure white background.\n";
    
    if (imageBase64) {
        parts.push({ inlineData: { data: imageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
        prompt += "ANALYSIS: Extract the essence of the provided reference image. ";
    } else {
        prompt += "TASK: Create a original design from scratch. ";
    }

    if (state.selectedModel.length > 0) {
        const modelPrompts = state.selectedModel.map(modelId => {
            const modelBase = TATTOO_MODELS.find(m => m.id === modelId);
            const variantText = state.modelVariants?.[modelId] || "";
            return `MAIN SUBJECT: ${modelBase?.promptValue}${variantText ? ` (SPECIFIC FIGURE: ${variantText})` : ""}`;
        });
        prompt += "COMBINED SUBJECTS: " + modelPrompts.join(' AND ') + ". ";
    }

    if (state.selectedStyle.length > 0) {
        prompt += "TATTOO STYLES TO MERGE: " + state.selectedStyle.map(id => TATTOO_STYLES.find(s => s.id === id)?.label).join(' and ') + ". ";
    }

    const color = TATTOO_COLORS.find(c => c.id === state.selectedColor);
    if (color) prompt += `INK SPECIFICATION: ${color.promptValue} `;

    if (state.customPrompt) prompt += `USER REQUEST: ${state.customPrompt} `;

    prompt += "STRICT RULES: 1. SOLID WHITE BACKGROUND (#FFFFFF). 2. FLAT 2D GRAPHIC ONLY. 3. NO PHOTOREALISTIC SKIN OR BODY PARTS IN THIS STAGE. 4. CLEAN LINES AND PROPER SHADING.";
    prompt = appendGlobalSettings(prompt, globalSettings);
    parts.push({ text: prompt });

    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};

export const applyTattooToBody = async (designImageBase64: string, state: TattooState, globalSettings?: GlobalSettings): Promise<string> => {
    if (!getApiKey()) throw new Error("Gemini API anahtarı yok. Ayarlar > Gemini API Anahtarı bölümünden girin.");
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const parts: any[] = [];
    
    const area = TATTOO_AREAS.find(a => a.id === state.selectedBodyPart);
    if (!area || area.id === 'stencil') return designImageBase64;

    parts.push({ inlineData: { data: designImageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/png' } });
    
    let prompt = "!!! CRITICAL TATTOO APPLICATION TASK !!!\n";
    prompt += "TASK: Apply the provided tattoo design onto a realistic human body part.\n";
    prompt += `BODY PART: ${area.promptValue}. `;
    if (state.bodyPartVariant) prompt += `SPECIFIC PLACEMENT: ${state.bodyPartVariant}. `;
    
    prompt += "RULES: 1. Wrap the tattoo design realistically around the skin contours. 2. The ink should look settled into the skin (realistic opacity and texture). 3. Professional photography style, realistic lighting and skin pores.";
    
    prompt = appendGlobalSettings(prompt, globalSettings);
    parts.push({ text: prompt });

    try {
        const response = await ai.models.generateContent({ model: 'gemini-3.1-flash-image', contents: { parts }, config: getGenAIConfig(globalSettings) });
        if (response.candidates?.[0]?.content?.parts?.[0]?.inlineData) return `data:image/png;base64,${response.candidates[0].content.parts[0].inlineData.data}`;
        throw new Error("No image generated");
    } catch (error) { handleGeminiError(error); throw error; }
};
