


import { Category, OptionItem, CarpetOptionGroup } from './types';

// =========================================================================
// !!! ÖNEMLİ BİLGİ !!!
// SEÇENEKLERİN ALT SEÇENEKLERİ (VARYANTLAR) BU DOSYANIN AŞAĞISINDA YER ALIR.
// ARAMA YAPARKEN ŞU İSİMLERİ KULLANIN:
// - OUTFIT_CONCEPT_VARIANTS
// - ENT_VARIANTS
// - TOOL_VARIANTS
// =========================================================================

export const CATEGORIES: Category[] = [
 {
  id: 'selectedTool',
  title: 'ARAÇ',
  items: [
    // --- GRUP 1: İYİLEŞTİRME & RESTORASYON ---
    { 
      id: 'fix', 
      label: 'DÜZELT', 
      promptValue: 'From the provided image recreate the Main Subject as a high resolution 4K crystal clear digital illustration. Faithfully replicate the originals Main Design Features its Color Palette and Texture and any Font Style completing any missing parts in its original style. CRITICAL Present it as a standalone flat graphic. DO NOT include any t-shirt fabric wrinkles folds shadows or clothing elements. DO NOT include any Watermarks or Logos.' 
    },

    { 
  id: 'restorasyon', 
  label: 'RESTORASYON', 
  promptValue: 'Restore the damaged photo by removing scratches, tears, dust, folds, creases, stains, and any physical defects. Seamlessly repair and inpaint torn or missing areas using surrounding context to reconstruct perfectly in the original style. Correct color fading, shifts, burns, or distortions while strictly preserving the original color palette—if the image is black and white, keep it strictly monochrome. Do not add color to grayscale images. Enhance sharpness, clarity, and resolution to make it look newly captured and pristine. Maintain exact original composition, lighting, tones, and background. No additions, stylization, watermarks, or unnecessary changes.' 
} ,

    { 
      id: 'enhance', 
      label: 'CANLANDIR', 
      promptValue: 'transform the provided 2d reference image into a photorealistic 3d rendered masterpiece maintain the exact shape and pose of the original figure but give it substantial depth volume and physical mass apply ultra realistic high definition pbr materials appropriate to the subject such as realistic skin metal or stone textures use professional cinematic studio lighting to create deep shadows specular highlights and realistic reflections the result must look like a tangible physical object photographed in a studio environment high quality cgi render octane render unreal engine 5 style completely exclude and avoid all 2d flat illustration styles vector graphics solid colors cartoon looks drawing lines and unshaded surfaces ensure the object pops out of the screen with three dimensional realism on a clean background.' 
    },

    // --- GRUP 2: YARATICI DÖNÜŞÜM ---
    { 
      id: 'make_real_3d', 
      label: '3D DÖNÜŞÜM', 
      promptValue: 'TRANSFORMATION TASK: Convert the provided 2D/Vector/Flat reference image into a Hyper-Realistic 3D Render. Analyze the subject\'s implied materials and apply high-fidelity textures: if it is a drawing of a toy, add realistic fur/plush texture; if a human, add realistic skin pores and subsurface scattering; if an object, add PBR material properties (metal, glass, plastic). Upgrade lighting to cinematic volumetric rendering with ambient occlusion. The result must look like a CGI masterpiece or a high-end photograph. Unreal Engine 5 style, 8k resolution.' 
    },
    { 
      id: 'vector', 
      label: 'VEKTÖR', 
      promptValue: 'act as a professional vectorizer tool convert the subject in the reference image into a clean flat vector graphic illustration strictly limit the color palette to a maximum of 5 distinct solid colors recreate the design using only sharp bezier curves and clean geometric shapes isolate the subject on a pure white hex code FFFFFF background completely exclude and remove all gradients shadows shading realistic textures photographic noise blurring 3d rendering effects fabric details and complex color transitions the result must be a pristine high contrast svg style graphic suitable for logo usage with absolutely no depth of field or ambient occlusion just pure flat color blocks ensure no watermarks no sketching style no oil painting look and no realistic skin tones just mathematical vector precision.' 
    },
    { 
      id: 'mix', 
      label: 'MIX', 
      promptValue: 'SYSTEM MODE: MULTIMODAL FUSION. Analyze ALL provided input images simultaneously. Identify the primary subject, concept, or texture in each image. INTELLIGENTLY BLEND them into a single, cohesive, photorealistic scene. Do not just place objects side-by-side; integrate them logically (e.g., if inputs are a character and a vehicle, make the character drive the vehicle. If inputs are an object and a texture, map the texture onto the object). CRITICAL: Harmonize all lighting, shadows, and color temperatures to ensure all elements physically belong to the same environment. The result must look like a single unified photograph, not a collage.' 
    },

    // --- GRUP 3: ARKA PLAN & İZOLASYON ---
    { 
      id: 'isolate', 
      label: 'İZOLE ET', 
      promptValue: 'detect and isolate the main graphic design subject from the reference image placing it on a solid white background perform a simultaneous restoration process while extracting the object repair all distortions caused by fabric folds and wrinkles completely regenerate any missing or obscured parts of the design that are hidden due to occlusion or cropping analyze the symmetry and style of the artwork to predict and draw the missing areas logically remove all noise blur and texture defects leaving only a pristine complete and high definition vector style graphic element centered on the white canvas.' 
    },
      { id: 'white_bg', label: 'ZEMİN BEYAZ', promptValue: 'completely isolate the main subject from the original environment and place it on a solid pure white background hex code FFFFFF preserve the exact details colors and resolution of the foreground subject without regenerating or altering it remove all cast shadows reflections and background noise ensuring a clean sharp cutout effect suitable for e-commerce' },
      { id: 'black_bg', label: 'ZEMİN SİYAH', promptValue: 'completely isolate the main subject from the original environment and place it on a solid pitch black background hex code 000000 preserve the exact details colors and resolution of the foreground subject without regenerating or altering it remove all cast shadows reflections and background noise ensuring a high contrast dramatic cutout effect' },
      { id: 'green_bg', label: 'ZEMİN YEŞİL', promptValue: 'completely isolate the main subject from the original environment and place it on a solid chroma key green background hex code 00FF00 preserve the exact details colors and resolution of the foreground subject without regenerating or altering it remove all cast shadows reflections and background noise ensuring a perfect silhouette for masking and video editing purposes' },
  ]
},
  {
    id: 'selectedFilter',
    title: 'STİL',
    items: [
  { id: 'anime', label: 'ANİME', promptValue: 'Highly detailed Japanese anime art style inspired by Studio Ghibli and Makoto Shinkai, vibrant lush colors with soft gradients, cel-shading technique, clean crisp lines, emotional atmospheric lighting, intricate backgrounds, expressive large eyes, dynamic hair flow, 2D animation aesthetic, manga-inspired fine details, whimsical fantasy vibe, high resolution masterpiece.' },

  { id: 'cyber', label: 'CYBERPUNK', promptValue: 'Intense cyberpunk aesthetic, dystopian futuristic sci-fi cityscape at night, neon noir lighting with dominant electric blue pink and magenta hues, high-tech cybernetic implants and glowing circuitry, rain-slicked reflective metallic surfaces, dense volumetric fog, cinematic composition, octane render with ray tracing, techwear fashion elements, gritty urban atmosphere, ultra-detailed 8K resolution.' },

  { id: 'comic', label: 'ÇİZGİ ROMAN', promptValue: 'Classic American comic book illustration style, bold thick black ink outlines, vibrant saturated primary colors, cel-shading with dramatic shadows and high contrast, Ben-Day dots texture for halftones, dynamic action lines and speed effects, graphic novel panel aesthetic, hand-drawn inked feel, heroic proportions, intense expressions.' },

  { id: 'real', label: 'GERÇEK HAYAT', promptValue: 'Hyper-realistic photography style, ultra-detailed 8K resolution, transform flat concepts into lifelike 3D reality, organic natural textures with visible pores hair strands and imperfections, physically based rendering PBR materials, cinematic natural lighting with soft shadows, shallow depth of field, shot on high-end DSLR camera, raw photo quality, volumetric god rays, no stylization.' },

  { id: 'glitc', label: 'GLITCH SANATI', promptValue: 'Digital glitch art aesthetic, heavy data corruption effects including RGB channel split and shift, color aberration, pixel sorting and displacement, datamoshing compression artifacts, scan lines and signal noise, corrupted file visual errors, chaotic futuristic vibe, high contrast distorted composition.' },

  { id: 'gtastl', label: 'GTA STİLİ', promptValue: 'GTA loading screen art style inspired by Stephen Bliss, bold vector illustration with thick black outlines, heavy dramatic shadows, high contrast saturated warm colors, stylistic realism with slight caricature, West Coast American vibe, sharp clean edges, no photorealism soft blurs or watercolor, dynamic character pose, vibrant urban atmosphere.' },

  { id: 'paperfold', label: 'KAĞIT KATLAMA', promptValue: 'Intricate layered paper cut craft style, subject composed of stacked colored paper sheets creating depth with realistic shadows between layers, crisp clean edges and folds, minimal textures, distinct flat color palette, diorama or pop-up book aesthetic, no 3D rendering realistic photos or brush strokes, handmade paper art feel.' },

  { id: 'scrapbook', label: 'KARALAMA DEFTERİ', promptValue: 'Rough pencil sketch on textured paper, loose hand-drawn lines with graphite shading, cross-hatching and hatching techniques, unfinished doodle aesthetic, monochrome tones, visible paper grain and smudges, artistic raw energy, expressive strokes, no clean inking or color.' },

  { id: 'kintsugi', label: 'KINTSUGI', promptValue: 'Japanese kintsugi golden repair art style, cracked porcelain or ceramic texture with prominent gold veins filling fractures, wabi-sabi imperfection philosophy, high contrast black background with metallic gold highlights, detailed realistic cracks and repairs, elegant minimalist composition.' },

  { id: 'lowpoly', label: 'LOW POLY', promptValue: 'Low poly 3D geometric art style, composed entirely of large flat triangular polygons, sharp faceted edges, minimalist gradient shading, limited vibrant color palette, retro PlayStation 1 graphics aesthetic, clean isometric or angled view, no smooth curves or high detail textures.' },

  { id: 'miniaturworld', label: 'MİNYATÜR DÜNYA', promptValue: 'Tilt-shift photography miniature faked effect, selective focus with sharp center and heavy blur on foreground/background, toy-like plastic appearance, high color saturation, macro lens aesthetic, isometric top-down view, subjects look like tiny models in a diorama.' },

  { id: 'neon', label: 'NEON PARILTI', promptValue: 'Neon glow digital art style, vibrant fluorescent contour lines and bioluminescent highlights, glowing edges against deep black background, ultraviolet blacklight atmosphere, synthwave retro aesthetic, high contrast radiant energy trails, electric colors like cyan magenta and yellow.' },

  { id: 'forest', label: 'ORMAN SANATI', promptValue: 'Photorealistic 3D botanical living sculpture made entirely from organic nature elements, human skin replaced with detailed tree bark and wood grain, hair as cascading moss vines roots and leaves, clothing as layered foliage petals mushrooms and branches, magical misty forest atmosphere, PBR materials, no human flesh fabric or synthetic traces, naturally grown from earth vibe.' },

  { id: 'gamen', label: 'OYUN HAMURU', promptValue: 'Claymation stop-motion animation style, handmade plasticine clay figure with soft rounded edges, visible fingerprints and tool marks, matte smooth textures, whimsical cute character design, professional studio lighting with soft shadows, shallow depth of field, playful miniature set aesthetic, no realistic skin or digital sharpness.' },

  { id: 'pixel', label: 'PİXEL SANATI', promptValue: 'Classic 16-bit pixel art style, distinct square pixels with hard edges, no anti-aliasing, limited vibrant color palette, grid-based composition, retro arcade game sprite aesthetic, detailed dithering and shading, nostalgic chiptune era look.' },

  { id: 'popart', label: 'POP ART', promptValue: 'Pop art style inspired by Andy Warhol and Roy Lichtenstein, bold primary colors, thick black outlines, Ben-Day dots halftone texture, screen print layered effect, high contrast commercial aesthetic, repetitive motifs, retro advertising vibe.' },

  { id: 'streetss', label: 'SOKAK SANATI', promptValue: 'Urban graffiti street art mural style on textured brick wall, vibrant spray paint with drips splatters and overspray, bold outlines and wildstyle elements, high saturation neon colors, grungy underground hip-hop culture vibe, stencil and sticker influences, no clean digital perfection.' },

  { id: 'steam', label: 'STEAMPUNK', promptValue: 'Steampunk retro-futuristic Victorian industrial aesthetic, brass copper and leather materials, exposed gears pipes and clockwork mechanisms, vintage machinery details, sepia bronze color palette, goggles top hats and corsets, atmospheric steam and fog.' },

  { id: 'watercolor', label: 'SULU BOYA', promptValue: 'Traditional watercolor painting style, fluid transparent brush strokes, soft color bleeding and blending, wet-on-wet technique with drips and blooms, textured cold-press paper background, dreamy expressive atmosphere, pastel and vibrant washes, no hard outlines or digital effects.' },

  { id: 'surreal', label: 'SÜRREALİZM', promptValue: 'Surrealism art style inspired by Salvador Dali and Rene Magritte, dreamlike impossible scenes, melting forms levitating objects, bizarre juxtapositions, subconscious symbolism, metaphysical distorted reality, mysterious hallucinatory atmosphere.' },

  { id: 'oil', label: 'YAĞLI BOYA', promptValue: 'Classical oil painting style with heavy impasto texture, rich layered colors, visible thick brush strokes, dramatic chiaroscuro lighting, Vincent van Gogh inspired swirling patterns, masterpiece museum quality, deep canvas texture.' },

  { id: 'vector_art', label: 'VEKTÖREL', promptValue: 'Clean flat vector graphics style Adobe Illustrator aesthetic, solid spot colors no gradients, precise crisp edges and shapes, high contrast minimalist design, sharp pen tool lines, distinct color separation, 2D digital SVG look.' },

  { id: 'noir', label: 'NOIR (SİYAH BEYAZ)', promptValue: 'Film noir black and white photography style, high contrast dramatic shadows and highlights, low-key lighting, 1940s mystery atmosphere, grainy film texture, cinematic composition with femme fatale elements.' },

  { id: 'vaporwave', label: 'VAPORWAVE', promptValue: 'Vaporwave retro 80s-90s aesthetic, neon pink teal grids, Greek bust statues palm trees and sunsets, glitch effects, Japanese text, lo-fi grainy VHS texture, nostalgic ironic digital art.' },

  { id: 'double_exposure', label: 'ÇİFT POZLAMA', promptValue: 'Double exposure photography style, subject silhouette overlaid and blended with nature landscape or cityscape, dreamy ethereal translucent effect, harmonious color tones, surreal atmospheric composition.' },

  { id: 'mosaic', label: 'MOZAİK', promptValue: 'Ancient Roman Byzantine mosaic tile art style, small tessellated colored stone or glass pieces, visible grout lines, intricate patterns and figures, historical textured aesthetic.' },

  { id: 'stained_glass', label: 'VİTRAY', promptValue: 'Medieval stained glass window art style, vibrant translucent colored segments divided by lead lines, light glowing through effect, gothic church aesthetic, geometric and figurative designs.' },

  { id: 'blueprint', label: 'TEKNİK ÇİZİM', promptValue: 'Architectural blueprint cyanotype style, white precise technical lines and annotations on blue background, schematic diagram look, engineering measurements and symbols, clean professional draft aesthetic.' },

  { id: 'voxel', label: 'VOKSEL (3D PİKSEL)', promptValue: 'Voxel 3D cubic pixel art style Minecraft-inspired, blocky geometric construction, isometric view, cute simplistic rendering, limited colors, sharp edges no curves.' },

  { id: 'impressionism', label: 'EMPRESYONİZM', promptValue: 'Impressionist painting style Claude Monet aesthetic, visible loose brush strokes, emphasis on light and color over detail, soft blurry edges, outdoor plein air scenes, dappled sunlight effects.' },

  { id: 'ukiyo', label: 'UKIYO-E (JAPON)', promptValue: 'Traditional Japanese ukiyo-e woodblock print style Katsushika Hokusai influenced, flat bold colors, strong outlines, washi paper texture, iconic wave or landscape motifs, Edo period aesthetic.' },

  { id: 'art_nouveau', label: 'ART NOUVEAU', promptValue: 'Art Nouveau style Alphonse Mucha inspired, elegant flowing organic curves, floral and plant motifs, decorative ornamental lines, muted gold pastel and earth tones, graceful female figures.' },

  { id: 'pointillism', label: 'NOKTACILIK', promptValue: 'Pointillism art style Georges Seurat technique, entire image composed of small distinct dots of pure color, optical color blending from distance, stippling method, vibrant scientific approach.' },

  { id: 'psychedelic', label: 'PSİKEDELİK', promptValue: 'Psychedelic 60s-70s art style, swirling hypnotic patterns, intense neon colors, optical illusions and fractals, trippy kaleidoscopic effects, acid trip visionary aesthetic.' },

  { id: 'thermal', label: 'TERMAL KAMERA', promptValue: 'Thermal imaging camera effect, heat map color spectrum from cool blue-purple to hot yellow-red-white, infrared night vision style, scientific false-color representation, gradient based on temperature.' },

  { id: 'gothic', label: 'GOTİK', promptValue: 'Dark gothic art style, medieval cathedral architecture with pointed arches gargoyles and intricate stone carvings, moody mysterious atmosphere, dramatic shadows, fantasy gloom.' },

  { id: 'renaissance', label: 'RÖNESANS', promptValue: 'High Renaissance oil painting style Leonardo da Vinci Michelangelo inspired, sfumato soft blending, dramatic balanced composition, anatomical precision, masterpiece museum quality, warm golden lighting.' },

  { id: 'embroidery', label: 'NAKIŞ (İŞLEME)', promptValue: 'Realistic embroidery stitch art style, detailed thread textures and patterns on fabric, cross-stitch satin stitch effects, handcrafted textile appearance, colorful fiber threads.' },

  { id: 'baroque', label: 'BAROK', promptValue: 'Baroque art style Caravaggio influenced, dramatic intense chiaroscuro lighting, rich deep colors, dynamic movement and emotion, opulent gold details, grand theatrical composition.' },

  { id: 'cubism', label: 'KÜBİZM', promptValue: 'Cubism art style Pablo Picasso aesthetic, geometric fragmentation into facets, multiple simultaneous viewpoints, abstract deconstructed forms, muted color palette, avant-garde revolutionary look.' },

  { id: 'line_art', label: 'TEK ÇİZGİ', promptValue: 'Minimalist continuous single line drawing, one unbroken black ink line forming the entire subject, fluid elegant contours, abstract simplicity, no shading or color, artistic gesture.' },

  { id: 'collage', label: 'KOLAJ', promptValue: 'Mixed media collage art style Dada influenced, cut and pasted elements from magazines photos and textures, layered juxtaposition, ripped edges, vintage ephemera, surreal chaotic composition.' },

  { id: 'fisheye', label: 'BALIK GÖZÜ', promptValue: 'Fisheye lens ultra-wide angle photography, extreme spherical distortion and barrel effect, curved horizons, dynamic exaggerated perspective, chromatic aberration, skate or action cam aesthetic.' },

  { id: 'vintage_photo', label: 'VINTAGE POLAROID', promptValue: 'Vintage Polaroid instant photo aesthetic, faded washed-out colors, film grain and scratches, light leaks and dust spots, 1970s-80s nostalgia, square format with white border.' },

  { id: 'matte_painting', label: 'MATTE PAINTING', promptValue: 'Epic digital matte painting style cinematic movie background, vast detailed fantasy landscape, photobashing and hand-painting blend, atmospheric perspective, dramatic scale and lighting.' },

  { id: 'felt', label: 'KEÇE SANATI', promptValue: 'Needle felting wool art style, soft fuzzy textured surface, layered wool fibers with visible poke marks, cute handmade craft toy aesthetic, warm matte colors, three-dimensional sculpted feel.' },

  { id: 'sand_art', label: 'KUM SANATI', promptValue: 'Layered colored sand art style, fine grainy sand particles forming intricate patterns, bottle or poured sand painting texture, earthy natural tones, transient delicate composition.' },
  
        { 
      id: 'realist', 
      label: 'GERÇEKÇİ (FOTOĞRAF)', 
      promptValue: 'UNIVERSAL REALITY SYNTHESIS: Treat the reference image strictly as a conceptual blueprint or sketch. Completely ignore the flat art style, vector lines, and artificial stiffness. 1. SUBJECT IDENTIFICATION & RE-CREATION: Identify the main subject (whether Human, Animal, Vehicle, or Object) and generate a REAL-LIFE version of it. 2. MATERIAL PHYSICS: Transmute all illustrated textures into hyper-realistic organic or physical materials (e.g., drawn skin becomes porous human skin; vector fur becomes individual hair strands; sketched metal becomes reflective automotive steel). 3. NATURAL POSE & SETTING: Keep the general composition but relax the pose to be anatomically natural and dynamic. Place the subject in a logical, depth-aware real-world environment with cinematic lighting. 4. PHOTOGRAPHY: 8k resolution, shot on DSLR, shallow depth of field. --no illustration, vector, cartoon, drawing, flat, plastic, 3d render, fake, stiff' 
    },
    ]
  },
{
    id: 'selectedCharacter',
    title: 'TİP',
    items: [
      { id: 'arthur_morgan', label: 'ARTHUR MORGAN', promptValue: 'Analyze the style and theme of this reference image and generate a new image inspired by it Arthur Morgan from Red Dead Redemption, cowboy hat, rugged beard, western gunslinger attire, leather jacket' },
      { id: 'baby_yoda', label: 'BABY YODA (GROGU)', promptValue: 'Baby Yoda Grogu from The Mandalorian, small green infant alien, large ears, wearing beige robe, adorable expression' },
      { id: 'batman', label: 'BATMAN', promptValue: 'Batman dark knight, black cowl and cape, bat symbol on chest, gotham city vigilante aesthetic' },
      { id: 'bearbrick', label: 'BEARBRICK', promptValue: 'Bearbrick collectible toy, bear-shaped block figure, glossy plastic texture, minimalist art toy style' },
      { id: 'bugs_bunny', label: 'BUGS BUNNY', promptValue: 'Bugs Bunny, grey rabbit, holding a carrot, confident and relaxed posture, looney tunes style' },
      { id: 'chucky', label: 'CHUCKY', promptValue: 'Chucky the killer doll, red messy hair, scarred face, wearing denim overalls and striped sweater, horror movie aesthetic' },
      { id: 'daffy_duck', label: 'DAFFY DUCK', promptValue: 'Daffy Duck, black feathers, orange beak and feet, expressive eyes, looney tunes style' },
      { id: 'darth_vader', label: 'DARTH VADER', promptValue: 'Darth Vader, black glossy armor, helmet and mask, flowing cape, red lightsaber, star wars villain aesthetic' },
      { id: 'deadpool', label: 'DEADPOOL', promptValue: 'Deadpool in red and black tactical suit, holding katanas, sarcastic and dynamic pose' },
      { id: 'goku', label: 'DRAGON BALL GOKU', promptValue: 'Son Goku from Dragon Ball, orange martial arts gi, blue sash, super saiyan spiky hair, muscular anime build' },
      { id: 'garfield', label: 'GARFIELD', promptValue: 'Garfield the cat, orange tabby fur, lazy and cynical expression, stripes, cartoon style' },
      { id: 'gojo', label: 'GOJO SATORU', promptValue: 'Gojo Satoru from Jujutsu Kaisen, spiky white hair, wearing black blindfold covering eyes, high collar dark uniform, cool anime sorcerer aesthetic' },
      { id: 'hello_kitty', label: 'HELLO KITTY', promptValue: 'Hello Kitty, white cat with red bow, no mouth, cute kawaii sanrio aesthetic' },
      { id: 'iron_man', label: 'IRON MAN', promptValue: 'Iron Man in red and gold metallic armor, glowing arc reactor on chest, high-tech marvel aesthetic' },
      { id: 'jinx', label: 'JINX (ARCANE)', promptValue: 'Jinx from League of Legends Arcane, long blue braided hair, pale skin, chaotic expression, punk rock neon aesthetic, tattoos' },
      { id: 'joker', label: 'JOKER', promptValue: 'The Joker, green hair, purple suit, clown makeup, chaotic and villainous smile' },
      { id: 'jack_sparrow', label: 'KAPTAN JACK SPARROW', promptValue: 'Captain Jack Sparrow, pirate dreadlocks with beads, eyeliner, pirate hat, rugged caribbean look' },
      { id: 'kaws', label: 'KAWS', promptValue: 'KAWS Companion figure, stylistic X crossed eyes, gloved hands, vinyl toy aesthetic, street art sculpture look' },
      { id: 'kuromi', label: 'KUROMI', promptValue: 'Kuromi character from Sanrio, black jester hat with pink skull, mischievous cute goth aesthetic' },
      { id: 'labubu', label: 'LABUBU', promptValue: 'Labubu art toy character, sharp teeth, mischievous smile, pointy ears, fuzzy texture, pop mart aesthetic' },
      { id: 'lara_croft', label: 'LARA CROFT', promptValue: 'Lara Croft Tomb Raider, braid hair, tank top, tactical gear, adventurous explorer vibe' },
      { id: 'marvin', label: 'MARVIN THE MARTIAN', promptValue: 'Marvin the Martian, green helmet with brush, red suit, black face with large eyes, sci-fi cartoon' },
      { id: 'mickey', label: 'MICKEY MOUSE', promptValue: 'Mickey Mouse, iconic round ears, red shorts, yellow shoes, classic disney animation style' },
      { id: 'minion', label: 'MINION', promptValue: 'Minion character from Despicable Me, small yellow body, denim overalls, goggles, comical expression' },
      { id: 'luffy', label: 'MONKEY D. LUFFY', promptValue: 'Monkey D. Luffy from One Piece, wearing straw hat and red vest, scar under eye, anime style' },
      { id: 'ninja_turtles', label: 'NINJA KAPLUMBAĞALAR', promptValue: 'Teenage Mutant Ninja Turtles, TMNT, anthropomorphic green turtles, wearing colored eye masks, ninja weapons, muscular shell, urban hero style' },
      { id: 'pink_panther', label: 'PEMBE PANTER', promptValue: 'The Pink Panther character, tall slender pink feline, cool and sophisticated demeanor, classic cartoon style' },
      { id: 'pikachu', label: 'PİKAÇU', promptValue: 'Pikachu from Pokemon, yellow fur, red cheeks, cute electric mouse appearance, anime style' },
      { id: 'powerpuff', label: 'POWERPUFF GIRLS', promptValue: 'The Powerpuff Girls, Blossom Bubbles and Buttercup, large anime eyes, floating superhero poses, colorful cute but tough aesthetic' },
      { id: 'rick', label: 'RICK SANCHEZ', promptValue: 'Rick Sanchez from Rick and Morty, spiky blue hair, lab coat, manic expression, sci-fi cartoon style' },
      { id: 'sailor_moon', label: 'SAILOR MOON', promptValue: 'Sailor Moon, usagi tsukino, blonde twin tails hair, sailor scout uniform, magical girl anime style' },
      { id: 'shrek', label: 'SHREK', promptValue: 'Shrek, large green ogre, trumpet-like ears, rough tunic, dreamworks animation style' },
      { id: 'simpson', label: 'SIMPSON', promptValue: 'Homer Simpson, yellow skin, bald head, white shirt, blue pants, matt groening style' },
      { id: 'snoopy', label: 'SNOOPY', promptValue: 'Snoopy the beagle dog from Peanuts, minimal white and black aesthetic, cute and chill vibe' },
      { id: 'sonic', label: 'SONIC', promptValue: 'Sonic the Hedgehog, blue fur, red running shoes, spiky hair, speed aesthetic' },
      { id: 'spiderman', label: 'SPIDER-MAN', promptValue: 'Spider-Man in classic red and blue suit, web pattern details, dynamic superhero pose, marvel comic style' },
      { id: 'stewie', label: 'STEWIE GRIFFIN', promptValue: 'Stewie Griffin from Family Guy, football-shaped head, angry or plotting expression, red overalls' },
      { id: 'stitch', label: 'STITCH', promptValue: 'Stitch from Lilo and Stitch, small blue alien koala-like creature, large ears, big black eyes, mischievous cute expression' },
      { id: 'mario', label: 'SUPER MARIO', promptValue: 'Super Mario, red cap with M logo, blue overalls, mustache, nintendo gaming style' },
      { id: 'spongebob', label: 'SÜNGER BOB', promptValue: 'SpongeBob SquarePants, yellow porous body, square shape, big blue eyes, underwater cartoon style' },
      { id: 'taz', label: 'TAZ (TASMANIAN DEVIL)', promptValue: 'Tasmanian Devil Taz, brown fur, wild spinning tornado effect, chaotic expression' },
      { id: 'popeye', label: 'TEMEL REİS', promptValue: 'Popeye the Sailor Man, muscular forearms with anchor tattoos, corncob pipe, sailor hat' },
      { id: 'tom_jerry', label: 'TOM VE JERRY', promptValue: 'Tom the cat and Jerry the mouse together, classic slapstick cartoon duo, chasing or posing together' },
      { id: 'totoro', label: 'TOTORO', promptValue: 'Totoro from My Neighbor Totoro, large grey fluffy spirit, leaf on head, studio ghibli whimsical style' },
      { id: 'tweety', label: 'TWEETY', promptValue: 'Tweety Bird, small yellow canary, large blue eyes, large head, cute looney tunes style' },
      { id: 'naruto', label: 'UZUMAKI NARUTO', promptValue: 'Naruto Uzumaki, orange jumpsuit, ninja headband with leaf symbol, anime style, spiky blonde hair' },
      { id: 'venom', label: 'VENOM', promptValue: 'Venom symbiote, massive black muscular form, large white eyes, long tongue, terrifying marvel aesthetic' },
      { id: 'wall_e', label: 'WALL-E', promptValue: 'WALL-E robot, rusty yellow metal box body, binocular eyes, caterpillar tracks, cute sci-fi aesthetic' },
      { id: 'wednesday', label: 'WEDNESDAY ADDAMS', promptValue: 'Wednesday Addams, braided pigtails, black gothic dress, deadpan expression, dark mood' },
      { id: 'bearbrick', label: 'BEARBRICK', promptValue: 'Medicom Toy Bearbrick collectible designer toy, anthropomorphized cartoon bear with pot belly, simplified blocky form, glossy plastic texture, articulated joints, minimalist art toy aesthetic, often featuring collaborations and patterns' },

{ id: 'kaws', label: 'KAWS', promptValue: 'KAWS Companion vinyl art toy figure by artist Brian Donnelly, grayscale Mickey Mouse-inspired character with gloved hands, shorts and shoes, distinctive crossed-out XX eyes, skull and crossbones ears, street art sculpture aesthetic, often in vulnerable or shy poses' },

{ id: 'labubu', label: 'LABUBU', promptValue: 'Labubu from Pop Mart The Monsters series by Kasing Lung, mischievous female elf monster with pointed ears, round furry body, wide eyes, nine sharp serrated teeth in a playful grin, fuzzy texture, cute yet slightly fierce kawaii blind box toy aesthetic' },
{ id: 'tokidoki_unicorno', label: 'TOKIDOKI UNICORNO', promptValue: 'Tokidoki Unicorno collectible designer toy by Simone Legno, cute chibi unicorn with colorful patterns, magical kawaii aesthetic, glossy vinyl blind box figure' },

{ id: 'dunny', label: 'KIDROBOT DUNNY', promptValue: 'Kidrobot Dunny designer art toy, rabbit-like vinyl figure with ears, customizable blank canvas, artist collaborations, urban street art aesthetic' },

{ id: 'janky', label: 'SUPERPLASTIC JANKY', promptValue: 'Superplastic Janky vinyl art toy by Huck Gee and Paul Budnitz, mischievous character with big head and small body, limited edition designer series, street culture vibe' },

{ id: 'sonny_angel', label: 'SONNY ANGEL', promptValue: 'Sonny Angel collectible mini figure, cute cherub boy angel with wings, various headgear hats, naked baby body, kawaii healing aesthetic, blind box doll' },

{ id: 'funko_pop', label: 'FUNKO POP', promptValue: 'Funko Pop vinyl collectible figure, chibi style with oversized head, big black eyes, licensed characters from movies TV games, bobblehead aesthetic' },

{ id: 'molly', label: 'POP MART MOLLY', promptValue: 'Pop Mart Molly designer toy by Kenny Wong, pouty little girl with big turquoise eyes, short blonde bob hair, stubborn cute expression, artist outfit variations' },

{ id: 'skullpanda', label: 'POP MART SKULLPANDA', promptValue: 'Pop Mart Skullpanda art toy by Xiong Miao, mysterious girl in skull helmet, panda ears, puffball pigtails, retro street culture aesthetic, emotional symbiote vibe' },

{ id: 'crybaby', label: 'POP MART CRYBABY', promptValue: 'Pop Mart Crybaby designer toy by Molly Yllom, emotional figure with big teardrops on face, short hair, vulnerable sensitive expression, healing cathartic aesthetic' },

{ id: 'zimomo', label: 'POP MART ZIMOMO', promptValue: 'Pop Mart Zimomo from The Monsters by Kasing Lung, tall male leader elf monster, spiked tail, serious expression, furry body with pointed ears, tribe chief aesthetic' }
    ]
  },
  {
    id: 'selectedBrand',
    title: 'MARKA',
    items: [
        { id: 'bape', label: 'A BATHING APE (BAPE)', promptValue: 'A Bathing Ape BAPE streetwear aesthetic, camo pattern, shark hoodie context, urban style' },
        { id: 'acne', label: 'ACNE STUDIOS', promptValue: 'Acne Studios brand aesthetic, minimalist scandinavian fashion, pastel tones, face logo context' },
        { id: 'adidas', label: 'ADIDAS', promptValue: 'Adidas brand aesthetic, three stripes pattern, athletic look, sportswear' },
        { id: 'mcqueen', label: 'ALEXANDER MCQUEEN', promptValue: 'Alexander McQueen brand aesthetic, dark romanticism, skull motifs, haute couture, edgy fashion' },
        { id: 'wang', label: 'ALEXANDER WANG', promptValue: 'Alexander Wang brand aesthetic, urban chic, sportswear influence, black and white palette' },
        { id: 'amiri', label: 'AMIRI', promptValue: 'Amiri brand aesthetic, rock n roll luxury, distressed denim, grunge influence' },
        { id: 'apple', label: 'APPLE', promptValue: 'Apple tech brand aesthetic, minimalist, sleek aluminum and glass, white clean look' },
        { id: 'arcteryx', label: 'ARC\'TERYX', promptValue: 'Arc\'teryx brand aesthetic, gorpcore, technical outdoor gear, skeleton bird logo, functional fashion' },
        { id: 'armani', label: 'ARMANI', promptValue: 'Giorgio Armani brand aesthetic, classic italian luxury, sharp tailoring, elegant suits' },
        { id: 'balenciaga', label: 'BALENCIAGA', promptValue: 'Balenciaga brand aesthetic, avant-garde streetwear, oversized silhouettes, dystopian fashion' },
        { id: 'balmain', label: 'BALMAIN', promptValue: 'Balmain brand aesthetic, military embellishments, sharp shoulders, gold buttons, luxury parisian style' },
        { id: 'bottega', label: 'BOTTEGA VENETA', promptValue: 'Bottega Veneta brand aesthetic, intrecciato woven leather, parakeet green, quiet luxury' },
        { id: 'brunello', label: 'BRUNELLO CUCINELLI', promptValue: 'Brunello Cucinelli brand aesthetic, cashmere king, earth tones, quiet luxury, italian craftsmanship' },
        { id: 'burberry', label: 'BURBERRY', promptValue: 'Burberry brand aesthetic, classic check pattern, trench coat context, british heritage' },
        { id: 'calvin', label: 'CALVIN KLEIN', promptValue: 'Calvin Klein brand aesthetic, minimalism, denim and underwear context, american classic' },
        { id: 'canada', label: 'CANADA GOOSE', promptValue: 'Canada Goose brand aesthetic, arctic program patch, heavy winter gear, fur hoods' },
        { id: 'carhartt', label: 'CARHARTT WIP', promptValue: 'Carhartt WIP aesthetic, workwear inspired, durable canvas, earth tones, street utilitarian' },
        { id: 'cartier', label: 'CARTIER', promptValue: 'Cartier brand aesthetic, luxury jewelry and watches, panther motif, red box context' },
        { id: 'casablanca', label: 'CASABLANCA', promptValue: 'Casablanca brand aesthetic, après-sport luxe, silk shirts, tennis club vibes, vibrant prints' },
        { id: 'celine', label: 'CELINE', promptValue: 'Celine brand aesthetic, hedi slimane rock chic or phoebe philo minimalism, parisian cool' },
        { id: 'champion', label: 'CHAMPION', promptValue: 'Champion brand aesthetic, reverse weave heritage, athletic college style, C logo' },
        { id: 'chanel', label: 'CHANEL', promptValue: 'Chanel brand aesthetic, tweed fabric, camellia flower, pearls, quilted leather, parisian elegance' },
        { id: 'dior', label: 'CHRISTIAN DIOR', promptValue: 'Christian Dior brand aesthetic, haute couture, oblique pattern, lady dior elegance' },
        { id: 'louboutin', label: 'CHRISTIAN LOUBOUTIN', promptValue: 'Christian Louboutin aesthetic, red bottom shoes, spikes, high glamour' },
        { id: 'chrome', label: 'CHROME HEARTS', promptValue: 'Chrome Hearts aesthetic, gothic luxury, sterling silver crosses, leather patches, rock style' },
        { id: 'cocacola', label: 'COCA COLA', promptValue: 'Coca Cola brand aesthetic, classic red and white, refreshing vibe' },
        { id: 'cdg', label: 'COMME DES GARÇONS', promptValue: 'Comme des Garçons aesthetic, avant-garde deconstruction, or Play heart logo, japanese fashion' },
        { id: 'converse', label: 'CONVERSE', promptValue: 'Converse brand aesthetic, chuck taylor all stars, canvas texture, casual street style' },
        { id: 'diesel', label: 'DIESEL', promptValue: 'Diesel brand aesthetic, distressed denim, Y2K influence, big D logo, edgy streetwear' },
        { id: 'dg', label: 'DOLCE & GABBANA', promptValue: 'Dolce & Gabbana aesthetic, sicilian glamour, ornate prints, lace, opulence' },
        { id: 'martens', label: 'DR. MARTENS', promptValue: 'Dr. Martens aesthetic, yellow stitching, leather boots, punk grunge vibe' },
        { id: 'dsquared2', label: 'DSQUARED2', promptValue: 'Dsquared2 aesthetic, canadian iconography, distressed denim, bold logos' },
        { id: 'fog', label: 'FEAR OF GOD', promptValue: 'Fear of God aesthetic, elevated streetwear, muted earth tones, essentials branding, relaxed fit' },
        { id: 'fendi', label: 'FENDI', promptValue: 'Fendi brand aesthetic, Zucca double F monogram, fur details, roman luxury' },
        { id: 'ferrari', label: 'FERRARI', promptValue: 'Ferrari brand aesthetic, rosso corsa red, sleek curves, luxury sports car vibe' },
        { id: 'gallery', label: 'GALLERY DEPT', promptValue: 'Gallery Dept aesthetic, paint splatters, vintage distressed clothing, flared creative streetwear' },
        { id: 'gap', label: 'GAP', promptValue: 'Gap brand aesthetic, classic american casual, hoodie and denim, navy blue' },
        { id: 'givenchy', label: 'GIVENCHY', promptValue: 'Givenchy brand aesthetic, dark romanticism, architectural lines, parisian luxury' },
        { id: 'gucci', label: 'GUCCI', promptValue: 'Gucci luxury fashion brand aesthetic, GG monogram pattern, green and red stripes, eclectic style' },
        { id: 'hm', label: 'H&M', promptValue: 'H&M fashion brand aesthetic, modern casual, trendy basics, fast fashion' },
        { id: 'hermes', label: 'HERMÈS', promptValue: 'Hermès brand aesthetic, orange box, silk scarves, saddlery leather, birkin luxury' },
        { id: 'boss', label: 'HUGO BOSS', promptValue: 'Hugo Boss aesthetic, sharp business tailoring, clean lines, modern professional' },
        { id: 'miyake', label: 'ISSEY MIYAKE', promptValue: 'Issey Miyake aesthetic, pleats please, architectural structure, avant-garde japanese design' },
        { id: 'jacquemus', label: 'JACQUEMUS', promptValue: 'Jacquemus aesthetic, french minimalist, playful proportions, tiny bags, provence vibes' },
        { id: 'jordan', label: 'JORDAN', promptValue: 'Air Jordan brand aesthetic, jumpman logo, basketball culture, sneakerhead vibe' },
        { id: 'kenzo', label: 'KENZO', promptValue: 'Kenzo brand aesthetic, tiger motif, vibrant colors, jungle prints, bold streetwear' },
        { id: 'kith', label: 'KITH', promptValue: 'Kith brand aesthetic, premium streetwear, minimalist branding, sneaker culture' },
        { id: 'lacoste', label: 'LACOSTE', promptValue: 'Lacoste brand aesthetic, crocodile logo, tennis heritage, polo shirt texture, preppy style' },
        { id: 'levis', label: 'LEVI\'S', promptValue: 'Levi\'s brand aesthetic, classic blue denim, red tab, americana workwear' },
        { id: 'loewe', label: 'LOEWE', promptValue: 'Loewe brand aesthetic, spanish luxury, leather craftsmanship, anagram logo, artistic shapes' },
        { id: 'loro', label: 'LORO PIANA', promptValue: 'Loro Piana aesthetic, vicuna wool, ultra luxury, quiet wealth, neutral palette' },
        { id: 'lv', label: 'LOUIS VUITTON', promptValue: 'Louis Vuitton luxury brand, LV monogram canvas, checkerboard pattern, travel heritage' },
        { id: 'margiela', label: 'MAISON MARGIELA', promptValue: 'Maison Margiela aesthetic, deconstruction, white stitches, tabi boots, avant-garde' },
        { id: 'kors', label: 'MICHAEL KORS', promptValue: 'Michael Kors aesthetic, jet set luxury, american sportswear, gold hardware' },
        { id: 'miumiu', label: 'MIU MIU', promptValue: 'Miu Miu aesthetic, playful femininity, matelassé leather, quirky elegance' },
        { id: 'moncler', label: 'MONCLER', promptValue: 'Moncler brand aesthetic, puffy down jackets, glossy nylon, alpine luxury' },
        { id: 'moschino', label: 'MOSCHINO', promptValue: 'Moschino aesthetic, pop culture references, bold irony, teddy bear motif, camp fashion' },
        { id: 'newbalance', label: 'NEW BALANCE', promptValue: 'New Balance aesthetic, N logo, dad shoe vibe, grey suede, comfort running style' },
        { id: 'nike', label: 'NIKE', promptValue: 'Nike brand aesthetic, swoosh logo context, sporty and dynamic vibe, just do it' },
        { id: 'offwhite', label: 'OFF-WHITE', promptValue: 'Off-White brand aesthetic, diagonal stripes, industrial belt, quotation marks, zip ties, virgil abloh style' },
        { id: 'palace', label: 'PALACE', promptValue: 'Palace Skateboards aesthetic, tri-ferg logo, retro 90s sportswear, british street style' },
        { id: 'palm', label: 'PALM ANGELS', promptValue: 'Palm Angels aesthetic, gothic lettering, tracksuit culture, la skate vibe' },
        { id: 'patagonia', label: 'PATAGONIA', promptValue: 'Patagonia aesthetic, outdoor nature, sustainable fleece, fitz roy logo, adventure gear' },
        { id: 'paulsmith', label: 'PAUL SMITH', promptValue: 'Paul Smith aesthetic, signature multi-colored stripes, classic british tailoring with a twist' },
        { id: 'prada', label: 'PRADA', promptValue: 'Prada brand aesthetic, triangle logo, nylon fabric, saffiano leather, intellectual luxury' },
        { id: 'puma', label: 'PUMA', promptValue: 'Puma brand aesthetic, jumping cat logo, formstrip, athletic lifestyle' },
        { id: 'ralph', label: 'RALPH LAUREN', promptValue: 'Ralph Lauren aesthetic, polo player logo, preppy americana, old money style' },
        { id: 'reebok', label: 'REEBOK', promptValue: 'Reebok brand aesthetic, vector logo, classic fitness style, retro trainers' },
        { id: 'rick', label: 'RICK OWENS', promptValue: 'Rick Owens aesthetic, dark gothic, elongated silhouettes, brutalist fashion, avant-garde' },
        { id: 'rolex', label: 'ROLEX', promptValue: 'Rolex brand aesthetic, luxury watch context, crown logo, precision, elite status' },
        { id: 'ysl', label: 'SAINT LAURENT', promptValue: 'Saint Laurent YSL aesthetic, rock chic, skinny silhouettes, le smoking, parisian night' },
        { id: 'salomon', label: 'SALOMON', promptValue: 'Salomon aesthetic, technical hiking gear, gorpcore, futuristic trail shoes' },
        { id: 'starbucks', label: 'STARBUCKS', promptValue: 'Starbucks coffee brand aesthetic, green mermaid logo context, cozy coffee shop vibe' },
        { id: 'stone', label: 'STONE ISLAND', promptValue: 'Stone Island aesthetic, compass patch, garment dyed fabric, techwear, hooligan culture' },
        { id: 'stussy', label: 'STÜSSY', promptValue: 'Stüssy brand aesthetic, graffiti logo, surf skate culture, og streetwear' },
        { id: 'supreme', label: 'SUPREME', promptValue: 'Supreme brand aesthetic, red box logo, hypebeast culture, nyc skate style' },
        { id: 'tesla', label: 'TESLA', promptValue: 'Tesla brand aesthetic, futuristic electric vehicle vibe, clean lines, minimalist luxury' },
        { id: 'northface', label: 'THE NORTH FACE', promptValue: 'The North Face aesthetic, half dome logo, puffer jackets, mountain expedition gear' },
        { id: 'thom', label: 'THOM BROWNE', promptValue: 'Thom Browne aesthetic, shrunken grey suits, red white blue tricolor grosgrain, uniform style' },
        { id: 'tiffany', label: 'TIFFANY & CO.', promptValue: 'Tiffany & Co aesthetic, tiffany blue box, luxury diamonds, silver jewelry, elegance' },
        { id: 'timberland', label: 'TIMBERLAND', promptValue: 'Timberland aesthetic, classic yellow wheat boots, rugged outdoor workwear' },
        { id: 'tomford', label: 'TOM FORD', promptValue: 'Tom Ford aesthetic, high octane glamour, velvet jackets, sexy sophistication' },
        { id: 'tommy', label: 'TOMMY HILFIGER', promptValue: 'Tommy Hilfiger aesthetic, red white blue flag, classic american cool, preppy' },
        { id: 'underarmour', label: 'UNDER ARMOUR', promptValue: 'Under Armour aesthetic, technical performance gear, compression wear, athletic intensity' },
        { id: 'uniqlo', label: 'UNIQLO', promptValue: 'Uniqlo brand aesthetic, lifewear, functional minimalism, clean lines' },
        { id: 'valentino', label: 'VALENTINO', promptValue: 'Valentino brand aesthetic, rockstuds, v-logo, valentino red, couture elegance' },
        { id: 'vans', label: 'VANS', promptValue: 'Vans brand aesthetic, checkerboard pattern, skate culture, off the wall, canvas shoes' },
        { id: 'versace', label: 'VERSACE', promptValue: 'Versace brand aesthetic, medusa head, baroque prints, gold chains, maximalist italian luxury' },
        { id: 'vetements', label: 'VETEMENTS', promptValue: 'Vetements aesthetic, oversized deconstruction, irony, street couture, subversive fashion' },
        { id: 'vs', label: 'VICTORIA\'S SECRET', promptValue: 'Victoria\'s Secret aesthetic, glamour, wings, pink stripes, lingerie model look' },
        { id: 'vivienne', label: 'VIVIENNE WESTWOOD', promptValue: 'Vivienne Westwood aesthetic, orb logo, tartan plaid, punk influence, corset structure' },
        { id: 'yeezy', label: 'YEEZY', promptValue: 'Yeezy brand aesthetic, earth tones, distressed knits, futuristic oversized silhouettes, minimalist utilitarian' },
        { id: 'yohji', label: 'YOHJI YAMAMOTO', promptValue: 'Yohji Yamamoto aesthetic, avant-garde black, draped silhouettes, japanese master tailoring' },
        { id: 'zara', label: 'ZARA', promptValue: 'Zara fashion brand aesthetic, fast fashion trends, modern urban chic, editorial look' },
    ]
  },
  {
    id: 'selectedSector',
    title: 'SPOR',
    items: [
        { id: 'am_football', label: 'ABD FUTBOLU', promptValue: 'American Football player, helmet, pads, holding ball, dynamic action, stadium atmosphere' },
        { id: 'badminton', label: 'BADMINTON', promptValue: 'Badminton player, holding racket, shuttlecock, court action' },
        { id: 'fishing', label: 'BALIK TUTMA', promptValue: 'Fishing hobby, holding fishing rod, lake or river nature background, calm' },
        { id: 'basketball', label: 'BASKETBOL', promptValue: 'Basketball sport context, court background, energetic vibe, jersey' },
        { id: 'baseball', label: 'BEYZBOL', promptValue: 'Baseball sport context, field, bat, cap, american pastime vibe' },
        { id: 'billiards', label: 'BİLARDO', promptValue: 'Playing billiards pool, leaning over table, cue stick, dim bar lighting' },
        { id: 'cycling', label: 'BİSİKLET (YOL)', promptValue: 'Cycling sport context, road bike, helmet, cycling gear, motion blur' },
        { id: 'bmx', label: 'BMX BİSİKLET', promptValue: 'BMX biking, performing trick, urban skatepark or dirt track' },
        { id: 'boxing', label: 'BOKS', promptValue: 'Boxing sport context, boxing gloves, ring background, intense atmosphere' },
        { id: 'bowling', label: 'BOWLING', promptValue: 'Bowling alley, holding bowling ball, pins in background, retro vibe' },
        { id: 'ice_hockey', label: 'BUZ HOKEYİ', promptValue: 'Ice Hockey player, rink, skating, stick and puck, bulky gear, dynamic' },
        { id: 'crossfit', label: 'CROSSFIT', promptValue: 'Crossfit training, gym box, lifting weights, intense sweat, workout' },
        { id: 'climbing', label: 'DAĞCILIK / TIRMANIŞ', promptValue: 'Rock climbing, hanging from cliff, harness, chalk, extreme sport' },
        { id: 'hiking', label: 'DAĞ YÜRÜYÜŞÜ', promptValue: 'Hiking, trekking with backpack, mountain trail, nature' },
        { id: 'scuba', label: 'DALIŞ (SCUBA)', promptValue: 'Scuba diving underwater, mask, tank, bubbles, marine life' },
        { id: 'darts', label: 'DART', promptValue: 'Playing darts, pub atmosphere, focus on target' },
        { id: 'esports', label: 'E-SPOR / GAMING', promptValue: 'Professional Gamer, headset, gaming monitor, neon rgb lighting, intense focus' },
        { id: 'fencing', label: 'ESKRİM', promptValue: 'Fencing sport, white protective suit, holding foil, fencing stance' },
        { id: 'f1', label: 'FORMULA 1', promptValue: 'Formula 1 racing context, race suit, helmet, fast cars, pit lane' },
        { id: 'football', label: 'FUTBOL', promptValue: 'Football soccer sport context, stadium background, jersey, dynamic action' },
        { id: 'golf', label: 'GOLF', promptValue: 'Golf sport context, green course background, polo shirt, club, focus' },
        { id: 'wrestling', label: 'GÜREŞ (WRESTLING)', promptValue: 'Professional Wrestling match, singlet, mat, muscular grappling' },
        { id: 'weightlifting', label: 'HALTER', promptValue: 'Weightlifting, clean and jerk, heavy barbell, intense effort' },
        { id: 'handball', label: 'HENTBOL', promptValue: 'Handball player, jumping to throw ball, indoor court' },
        { id: 'gymnastics', label: 'JİMNASTİK', promptValue: 'Gymnastics, artistic pose, leotard, balance beam or floor routine' },
        { id: 'judo', label: 'JUDO', promptValue: 'Judo martial art, wearing gi, throwing opponent, tatami mat' },
        { id: 'martial_arts', label: 'KARATE / TEKVANDO', promptValue: 'Martial arts, practicing kata, wearing gi, kicking pose, dojo background' },
        { id: 'ski', label: 'KAYAK', promptValue: 'Skiing winter sport context, snow covered mountain, ski gear, goggles' },
        { id: 'skate', label: 'KAYKAY (SKATE)', promptValue: 'Skateboarding context, urban skate park, dynamic trick, street wear' },
        { id: 'kickboxing', label: 'KICK BOKS', promptValue: 'Kickboxing, fighting stance, gloves, shin guards, ring' },
        { id: 'rowing', label: 'KÜREK', promptValue: 'Rowing sport, team in boat, water splashes, synchronized effort' },
        { id: 'lacrosse', label: 'LACROSSE', promptValue: 'Lacrosse player, helmet, holding stick, running on field' },
        { id: 'marathon', label: 'MARATON / KOŞU', promptValue: 'Marathon runner, running on road, athletic gear, race bib number, sweat' },
        { id: 'ping_pong', label: 'MASA TENİSİ', promptValue: 'Table Tennis ping pong, holding paddle, fast action focus' },
        { id: 'mma', label: 'MMA / UFC', promptValue: 'MMA fighter, octagon cage context, fighting gloves, shirtless, sweat' },
        { id: 'motogp', label: 'MOTO GP', promptValue: 'MotoGP racing, motorcycle leaning on curve, helmet, leather suit, track' },
        { id: 'motocross', label: 'MOTOCROSS', promptValue: 'Motocross dirt bike, mid-air jump, mud, off-road gear, helmet' },
        { id: 'archery', label: 'OKÇULUK', promptValue: 'Archery sport, drawing bow, arrow, target, focus' },
        { id: 'parkour', label: 'PARKOUR', promptValue: 'Parkour free running, jumping between buildings, urban roof environment' },
        { id: 'pilates', label: 'PİLATES', promptValue: 'Pilates exercise, reformer machine or mat, stretching, studio environment' },
        { id: 'polo', label: 'POLO', promptValue: 'Polo sport, riding horse, holding mallet, green field' },
        { id: 'rally', label: 'RALLİ', promptValue: 'Rally car racing, dust drift, dirt road, dynamic speed' },
        { id: 'rugby', label: 'RUGBY', promptValue: 'Rugby player, running with ball, mud, stadium background' },
        { id: 'snowboard', label: 'SNOWBOARD', promptValue: 'Snowboarding, snowy mountain slope, winter gear, dynamic jump' },
        { id: 'squash', label: 'SQUASH', promptValue: 'Squash player, enclosed court, racket, fast ball' },
        { id: 'water_polo', label: 'SU TOPU', promptValue: 'Water polo player, swimming in pool, holding ball, splashing' },
        { id: 'surf', label: 'SÖRF', promptValue: 'Surfing sport context, ocean waves, surfboard, wetsuit, summer vibe' },
        { id: 'sumo', label: 'SUMO GÜREŞİ', promptValue: 'Sumo wrestler, mawashi belt, dohyo ring, japanese tradition' },
        { id: 'tennis', label: 'TENİS', promptValue: 'Tennis sport context, court, racket, elegant sportswear' },
        { id: 'volleyball', label: 'VOLEYBOL', promptValue: 'Volleyball sport context, net, court or beach, dynamic jump' },
        { id: 'bodybuilding', label: 'VÜCUT GELİŞTİRME', promptValue: 'Bodybuilder posing, massive muscles, stage lighting, oiled skin' },
        { id: 'sailing', label: 'YELKEN', promptValue: 'Sailing, sailboat on ocean, wind, adventurous' },
        { id: 'yoga', label: 'YOGA / MEDİTASYON', promptValue: 'Yoga practice context, peaceful studio or nature, flexibility, calm atmosphere' },
        { id: 'swimming', label: 'YÜZME', promptValue: 'Swimming sport context, pool or ocean background, swimwear, wet texture' },
    ]
  },
  {
    id: 'selectedJob',
    title: 'MESLEK',
    items: [
        { id: 'coach', label: 'ANTRENÖR', promptValue: 'Sports Coach, whistle, tracksuit, holding clipboard, sidelines of field' },
        { id: 'archaeologist', label: 'ARKEOLOG', promptValue: 'Archaeologist, exploring ancient ruins, holding brush or artifact, dusty field outfit, adventure' },
        { id: 'soldier', label: 'ASKER (KOMANDO)', promptValue: 'Soldier, military camouflage uniform, tactical gear, war zone context' },
        { id: 'astronaut', label: 'ASTRONOT', promptValue: 'Astronaut, space suit, helmet, space background, zero gravity' },
        { id: 'chef', label: 'AŞÇI', promptValue: 'Professional Chef, white jacket, chef hat, holding a dish, kitchen context' },
        { id: 'hunter', label: 'AVCI', promptValue: 'Hunter, camouflage gear, forest background, holding rifle or bow' },
        { id: 'gardener', label: 'BAHÇIVAN', promptValue: 'Gardener, overalls, holding watering can or shovel, lush garden background' },
        { id: 'barista', label: 'BARİSTA', promptValue: 'Barista, apron, making coffee, espresso machine background, coffee shop vibe' },
        { id: 'barber', label: 'BERBER', promptValue: 'Barber, grooming tools, barber chair, classic barbershop background' },
        { id: 'scientist', label: 'BİLİM İNSANI', promptValue: 'Scientist, lab coat, safety glasses, holding test tube, laboratory equipment background' },
        { id: 'boxer', label: 'BOKSÖR', promptValue: 'Boxer, boxing gloves, shorts, in the ring, intense sweat' },
        { id: 'wizard', label: 'BÜYÜCÜ', promptValue: 'Wizard, robe, holding magic staff, casting spell, mystical background' },
        { id: 'lifeguard', label: 'CANKURTARAN', promptValue: 'Lifeguard, red swimsuit/shorts, holding rescue buoy, beach tower background' },
        { id: 'spy', label: 'CASUS', promptValue: 'Secret Agent Spy, tuxedo or tactical stealth suit, sunglasses, earpiece, high-tech background' },
        { id: 'surgeon', label: 'CERRAH', promptValue: 'Surgeon doctor, scrubs, surgical mask, gloves, operating room lights' },
        { id: 'florist', label: 'ÇİÇEKÇİ', promptValue: 'Florist, surrounded by colorful flowers, holding bouquet, apron' },
        { id: 'farmer', label: 'ÇİFTÇİ', promptValue: 'Farmer, rugged clothing, straw hat, agricultural field background, wheat' },
        { id: 'dancer', label: 'DANSÇI', promptValue: 'Professional Dancer, dynamic pose, stage costume, spotlight, performing arts' },
        { id: 'detective', label: 'DEDEKTİF', promptValue: 'Private Detective, trench coat, fedora hat, magnifying glass, noir atmosphere' },
        { id: 'blacksmith', label: 'DEMİRCİ', promptValue: 'Blacksmith, forging metal on anvil, sparks, apron, workshop' },
        { id: 'sailor', label: 'DENİZCİ', promptValue: 'Sailor, navy uniform or rugged fisherman gear, ocean background' },
        { id: 'captain', label: 'DENİZ KAPTANI', promptValue: 'Sea Captain, white navy uniform, captain hat, ship bridge or ocean background' },
        { id: 'dentist', label: 'DİŞ HEKİMİ', promptValue: 'Dentist, medical mask, dental tools, clinic chair' },
        { id: 'dj', label: 'DJ', promptValue: 'DJ performing, headphones, mixing deck, club lighting, party atmosphere' },
        { id: 'doctor', label: 'DOKTOR', promptValue: 'Medical Doctor, white coat, stethoscope, hospital context, professional' },
        { id: 'pharmacist', label: 'ECZACI', promptValue: 'Pharmacist, white coat, shelves of medicine bottles, pharmacy counter' },
        { id: 'electrician', label: 'ELEKTRİKÇİ', promptValue: 'Electrician, tool belt, holding wires or screwdriver, construction site' },
        { id: 'baker', label: 'FIRINCI', promptValue: 'Baker, flour on apron, holding fresh bread, bakery background' },
        { id: 'photographer', label: 'FOTOĞRAFÇI', promptValue: 'Professional Photographer, holding dslr camera, studio or outdoor shooting context' },
        { id: 'waiter', label: 'GARSON', promptValue: 'Waiter, vest and tie, holding tray with drinks, restaurant background' },
        { id: 'journalist', label: 'GAZETECİ', promptValue: 'Journalist/Reporter, holding microphone, press badge, news scene background' },
        { id: 'gladiator', label: 'GLADYATÖR', promptValue: 'Roman Gladiator, armor, helmet, holding sword and shield, colosseum arena background' },
        { id: 'lawyer', label: 'HAKİM / AVUKAT', promptValue: 'Lawyer or Judge, formal business suit or robe, gavel, courtroom or law library' },
        { id: 'nurse', label: 'HEMŞİRE', promptValue: 'Nurse, medical scrubs, holding clipboard, hospital corridor background' },
        { id: 'sculptor', label: 'HEYKELTIRAŞ', promptValue: 'Sculptor, working on clay or stone, studio with tools' },
        { id: 'stewardess', label: 'HOSTES (KABİN)', promptValue: 'Flight Attendant, elegant uniform, scarf, airplane cabin background' },
        { id: 'construction', label: 'İNŞAATÇI', promptValue: 'Construction Worker, safety vest, hard hat, holding blueprints or tools, building site' },
        { id: 'ceo', label: 'İŞ ADAMI / CEO', promptValue: 'CEO Businessman, expensive luxury suit, tie, modern office with city view' },
        { id: 'firefighter', label: 'İTFAİYECİ', promptValue: 'Firefighter, protective gear, helmet, holding hose, fire truck background' },
        { id: 'geologist', label: 'JEOLOG', promptValue: 'Geologist, examining rocks, field gear, outdoor canyon or mountain' },
        { id: 'butcher', label: 'KASAP', promptValue: 'Butcher, apron, holding knife, meat counter background' },
        { id: 'welder', label: 'KAYNAKÇI', promptValue: 'Welder, protective mask, sparks flying, industrial torch' },
        { id: 'pirate', label: 'KORSAN', promptValue: 'Pirate Captain, tricorn hat, eye patch, parrot on shoulder, pirate ship background' },
        { id: 'cowboy', label: 'KOVBOY', promptValue: 'Cowboy, leather hat, vest, boots, desert or ranch background, western style' },
        { id: 'king', label: 'KRAL / KRALİÇE', promptValue: 'Royal King or Queen, golden crown, royal velvet robe, sitting on throne, castle hall' },
        { id: 'hairdresser', label: 'KUAFÖR', promptValue: 'Hairdresser, holding scissors and comb, salon mirror background' },
        { id: 'librarian', label: 'KÜTÜPHANECİ', promptValue: 'Librarian, glasses, holding books, surrounded by bookshelves, quiet atmosphere' },
        { id: 'miner', label: 'MADENCİ', promptValue: 'Miner, helmet with light, dirty face, holding pickaxe, underground cave context' },
        { id: 'makeup_artist', label: 'MAKYAJ SANATÇISI', promptValue: 'Makeup Artist, holding brushes, palette, applying makeup' },
        { id: 'model', label: 'MANKEN', promptValue: 'Fashion Model, posing on runway, high fashion outfit, spotlight' },
        { id: 'carpenter', label: 'MARANGOZ', promptValue: 'Carpenter, sanding wood, sawdust, workshop background' },
        { id: 'architect', label: 'MİMAR', promptValue: 'Architect, modern chic clothing, holding rolled blueprints, construction site or model background' },
        { id: 'engineer', label: 'MÜHENDİS', promptValue: 'Engineer, safety helmet, technical plans, industrial background' },
        { id: 'musician', label: 'MÜZİSYEN', promptValue: 'Musician, holding instrument (guitar/violin), stage lighting or studio' },
        { id: 'ninja', label: 'NİNJA', promptValue: 'Ninja warrior, black stealth outfit, katana, face mask, dojo or rooftop night background' },
        { id: 'teacher', label: 'ÖĞRETMEN', promptValue: 'Teacher, smart casual wear, classroom context, blackboard, books' },
        { id: 'pilot', label: 'PİLOT', promptValue: 'Airline Pilot, uniform, cap, aviator sunglasses, cockpit or airport context' },
        { id: 'police', label: 'POLİS', promptValue: 'Police Officer, uniform, badge, police car background, urban patrol context' },
        { id: 'politician', label: 'POLİTİKACI', promptValue: 'Politician, speaking at podium, microphones, flag background, suit' },
        { id: 'professor', label: 'PROFESÖR', promptValue: 'University Professor, tweed jacket, lecture hall context, academic atmosphere' },
        { id: 'nun', label: 'RAHİBE', promptValue: 'Nun, traditional habit, holding rosary or bible, church background' },
        { id: 'priest', label: 'RAHİP', promptValue: 'Priest, clerical collar, robes, church altar background' },
        { id: 'rapper', label: 'RAP SANATÇISI', promptValue: 'Rapper, oversized streetwear, gold chains, cap, microphone, street or stage background' },
        { id: 'painter', label: 'RESSAM', promptValue: 'Artist painter, paint stained clothes, holding palette and brush, easel, art studio' },
        { id: 'rockstar', label: 'ROCK STAR', promptValue: 'Rock Star, leather jacket, electric guitar, long hair, concert stage lighting' },
        { id: 'samurai', label: 'SAMURAY', promptValue: 'Samurai warrior, traditional japanese armor, katana, cherry blossom background' },
        { id: 'magician', label: 'SİHİRBAZ', promptValue: 'Stage Magician, tuxedo, top hat, holding cards or dove, stage curtains' },
        { id: 'singer', label: 'ŞARKICI', promptValue: 'Singer, holding vintage microphone, elegant dress or suit, spotlight' },
        { id: 'mechanic', label: 'TAMİRCİ', promptValue: 'Mechanic, grease stained overalls, holding wrench, garage workshop context' },
        { id: 'tailor', label: 'TERZİ', promptValue: 'Tailor, measuring tape around neck, sewing machine, fabric rolls' },
        { id: 'plumber', label: 'TESİSATÇI', promptValue: 'Plumber, overalls, tool belt, holding wrench, under sink context' },
        { id: 'vet', label: 'VETERİNER', promptValue: 'Veterinarian, white coat, holding a puppy or kitten, vet clinic background' },
        { id: 'viking', label: 'VİKİNG', promptValue: 'Viking warrior, fur armor, horned helmet, axe, snowy fjord background' },
        { id: 'racer', label: 'YARIŞ PİLOTU', promptValue: 'Race Car Driver, racing suit with sponsors, helmet, holding helmet, race track background' },
        { id: 'writer', label: 'YAZAR', promptValue: 'Writer, sitting at desk with typewriter or laptop, coffee, cozy room, thoughtful' },
        { id: 'hacker', label: 'YAZILIMCI / HACKER', promptValue: 'Hacker / Developer, hoodie, dark room, multiple screens with code, matrix vibe' },
    ]
  },
  {
    id: 'selectedWear',
    title: 'GİYİM',
    items: [
        { id: 'suit', label: 'TAKIM ELBİSE', promptValue: 'Formal Business Suit, tie, elegant, professional look' },
        { id: 'casual', label: 'GÜNLÜK', promptValue: 'Casual wear, t-shirt and jeans, relaxed comfortable style' },
        { id: 'dress', label: 'ELBİSE', promptValue: 'Elegant Evening Dress, fashion editorial style' },
        { id: 'sportswear', label: 'SPOR GİYİM', promptValue: 'Athletic sportswear, leggings, tank top, running shoes' },
        { id: 'hoodie', label: 'KAPÜŞONLU', promptValue: 'Streetwear hoodie, baggy fit, urban vibe' },
        { id: 'leather', label: 'DERİ CEKET', promptValue: 'Leather biker jacket, cool edgy style' },
        { id: 'uniform', label: 'ÜNİFORMA', promptValue: 'Distinctive uniform, structured, official look' },
        { id: 'winter', label: 'KIŞLIK', promptValue: 'Winter coat, scarf, gloves, warm clothing' },
        { id: 'summer', label: 'YAZLIK', promptValue: 'Summer outfit, shorts, light fabric, sunglasses' },
        { id: 'traditional', label: 'GELENEKSEL', promptValue: 'Traditional cultural clothing, intricate patterns, heritage style' },
        { id: 'cyber', label: 'CYBERPUNK', promptValue: 'Futuristic cyberpunk techwear, neon accents, tactical straps' },
        { id: 'vintage', label: 'VINTAGE', promptValue: 'Vintage retro fashion, 70s or 80s style clothing' },
        { id: 'streetwear', label: 'STREETWEAR', promptValue: 'High-end Streetwear, oversized fits, layered clothing, sneaker culture' },
        { id: 'couture', label: 'HAUTE COUTURE', promptValue: 'Avant-garde Haute Couture, artistic shapes, exaggerated volumes, runway fashion' },
        { id: 'cosplay', label: 'COSPLAY', promptValue: 'Cosplay costume, fantasy armor or anime character outfit, detailed props' },
        { id: 'minimalist', label: 'MİNİMALİST', promptValue: 'Minimalist fashion, clean lines, neutral colors, high quality fabric, sophistication' },
    ]
  },
   {
    id: 'selectedTheme',
    title: 'TEMA',
    items: [
      { id: 'attractive', label: 'ÇEKİCİ', promptValue: 'POSE MANDATE: Captivating and alluring pose, charismatic gaze, charming facial expression, attractive and confident aura.' },
      { id: 'feminine', label: 'KADINSI', promptValue: 'GENDER TRANSFORM: Redraw the subject as a beautiful FEMALE version. Posing with graceful feminine elegance, soft curves, and stylish female features.' },
      { id: 'masculine', label: 'ERKEKSİ', promptValue: 'GENDER TRANSFORM: Redraw the subject as a handsome MASCULINE version. Strong powerful posture, bold features, and masculine energy.' },
      { id: 'heroic', label: 'KAHRAMANSI', promptValue: 'ATMOSPHERE: Heroic and imposing stance, low angle perspective look, courageous expression, legendary warrior presence.' },
      { id: 'mysterious', label: 'GİZEMLİ', promptValue: 'MOOD: Enigmatic and mysterious, deep dramatic shadows partially obscuring the face, secretive gaze, dark cinematic atmosphere.' },
      { id: 'cute', label: 'SEVİMLİ (KAWAII)', promptValue: 'VIBE: Adorable and cute expression, big friendly eyes, cheerful youthful pose, bright happy aura, heart-warming look.' },
      { id: 'rebellious', label: 'ASİ', promptValue: 'ATTITUDE: Rebellious and edgy, punk rock vibe, defiant expression, non-conformist posture, intense streetwear energy.' },
      { id: 'elegant', label: 'ZARİF (ELİT)', promptValue: 'STYLE: Sophisticated and high-class, dignified elegant pose, quiet luxury vibe, poised and refined posture.' },
      { id: 'professional', label: 'PROFESYONEL', promptValue: 'LOOK: Corporate and successful, sharp business posture, trustworthy expression, high-end professional headshot aesthetic.' },
      { id: 'dynamic', label: 'DİNAMİK (AKSİYON)', promptValue: 'MOTION: High energy action pose, captured mid-movement, dynamic fabric flow, intense physical presence.' },
      { id: 'divine', label: 'İLAHİ / KUTSAL', promptValue: 'AURA: Divine ethereal glow, radiating light from behind, angelic calm expression, symmetrical majestic pose, heavenly atmosphere.' },
      { id: 'dark_gothic', label: 'KARANLIK / GOTİK', promptValue: 'MOOD: Dark gothic elegance, melancholic but beautiful, victorian macabre details, pale complexion, dramatic dark makeup.' },
      { id: 'vintage_retro', label: 'VINTAGE', promptValue: 'AESTHETIC: Classic 1950s nostalgic vibe, retro film star pose, timeless glamour, soft grain photography style.' },
      { id: 'cyber_future', label: 'FÜTÜRİSTİK', promptValue: 'THEME: High-tech futuristic presence, rigid cybernetic pose, glowing circuitry accents, advanced sci-fi aesthetic.' },
      { id: 'slouchy_street', label: 'SALAŞ', promptValue: 'STYLE: Effortlessly cool and relaxed, slouchy street posture, oversized fit feel, casual hip-hop culture vibe.' },
      { id: 'royal', label: 'KRALİYET', promptValue: 'STATUS: Royal and majestic, sitting on a throne or standing with imperial authority, crown-like presence, grand opulent aura.' },
      { id: 'artistic_abstract', label: 'SANATSAL', promptValue: 'STYLE: Unconventional artistic pose, creative abstract composition, avant-garde fashion editorial look.' }
    ]
  },

  {
    id: 'selectedBackground',
    title: 'ARKA PLAN',
    items: [
        { 
        id: 'wood_texture', 
        label: 'AHŞAP (DOĞAL)', 
        promptValue: 'Rustic natural wood texture background. Blurred wooden planks or log cabin wall. Warm brown tones, organic feel, suitable for nature or vintage themes.' 
      },
      { 
        id: 'auto_context', 
        label: 'AKILLI UYUM (AUTO)', 
        promptValue: 'CONTEXTUAL BACKGROUND GENERATION: Analyze the semantic identity of the foreground subject (e.g., if car -> asphalt road; if model -> fashion street; if animal -> nature). Generate a high-quality, depth-aware background that logically fits the subject\'s theme. Match the lighting direction and color temperature of the subject to the new background for perfect integration.' 
      },
      { 
        id: 'gold_foil', 
        label: 'ALTIN VARAK', 
        promptValue: 'Luxury gold foil texture background. Crinkled metallic surface reflecting light, rich yellow-gold tones. Premium, expensive, and festive aesthetic.' 
      },
      { 
        id: 'ancient_ruins', 
        label: 'ANTİK HARABELER', 
        promptValue: 'Ancient historical ruins background. Stone columns, crumbling temples, or archaeological site. Cinematic lighting, historical atmosphere, depth of field.' 
      },
      { 
        id: 'garden_floral', 
        label: 'BAHÇE (ÇİÇEKLİ)', 
        promptValue: 'Lush floral garden background. Blooming flowers in pastel colors, green foliage, soft spring sunlight filtering through. Romantic and fresh atmosphere.' 
      },
      { 
        id: 'bar_lounge', 
        label: 'BAR / LOUNGE', 
        promptValue: 'Sophisticated bar or lounge interior. Dim ambient lighting, blurred shelves of bottles in the background, neon accents. Moody nightlife atmosphere.' 
      },
      { 
        id: 'concrete_wall', 
        label: 'BETON DUVAR', 
        promptValue: 'Raw industrial concrete wall background. Grey cement texture with subtle imperfections and shadows. Minimalist, grunge, and urban aesthetic.' 
      },
      { 
        id: 'studio_white', 
        label: 'BEYAZ STÜDYO', 
        promptValue: 'Clean white infinity studio background. Professional high-key lighting, soft shadows on the floor, no distractions. Commercial e-commerce look.' 
      },
      { 
        id: 'bokeh_lights', 
        label: 'BOKEH IŞIKLAR', 
        promptValue: 'Abstract Bokeh lights background. Out-of-focus city lights or fairy lights creating colorful circles. Dreamy, magical, and soft atmosphere.' 
      },
      { 
        id: 'ice_cave', 
        label: 'BUZ MAĞARASI', 
        promptValue: 'Frozen ice cave background. Translucent blue ice walls, stalactites, cold atmosphere. Cinematic fantasy aesthetic.' 
      },
      { 
        id: 'glass_reflection', 
        label: 'CAM & YANSIMA', 
        promptValue: 'Abstract glass and reflection background. Prismatic light refractions, clean modern surfaces, cool tones. High-tech and corporate aesthetic.' 
      },
      { 
        id: 'desert_dune', 
        label: 'ÇÖL KUMSALI', 
        promptValue: 'Vast desert landscape with rolling sand dunes. Golden hour sunlight casting long shadows, warm orange and beige tones. Minimalist and cinematic atmosphere.' 
      },
      { 
        id: 'sea_underwater', 
        label: 'DENİZ ALTI', 
        promptValue: 'Deep underwater background. Rays of sunlight filtering through blue water, air bubbles rising, coral reef in the distance. Serene and aquatic atmosphere.' 
      },
      { 
        id: 'disco_party', 
        label: 'DİSKO / PARTİ', 
        promptValue: 'Vibrant party background. Disco balls, confetti, and colorful laser lights cutting through smoke. Energetic, fun, and celebration atmosphere.' 
      },
      { 
        id: 'nature_forest', 
        label: 'DOĞA (ORMAN)', 
        promptValue: 'Dense green forest background. Tall trees, ferns, and moss. Sunlight filtering through the canopy (god rays). Peaceful and organic atmosphere.' 
      },
      { 
        id: 'graffiti_wall', 
        label: 'GRAFFITI DUVAR', 
        promptValue: 'Urban street art background. A textured brick or concrete wall covered in colorful, artistic graffiti tags. Grunge aesthetic, vibrant colors.' 
      },
      { 
        id: 'sunset_horizon', 
        label: 'GÜNBATIMI', 
        promptValue: 'Dramatic sunset horizon background. The sun setting with vibrant gradients of purple, orange, and pink. Silhouette of a distant landscape, romantic lighting.' 
      },
      { 
        id: 'pool_luxury', 
        label: 'HAVUZ (LÜKS)', 
        promptValue: 'Luxury swimming pool background. Turquoise water, white deck chairs, sunny resort vibe. Bright, refreshing, and expensive atmosphere.' 
      },
      { 
        id: 'cafe_cozy', 
        label: 'KAFE (BUTİK)', 
        promptValue: 'Cozy coffee shop interior. Blurred background with wooden tables, warm tungsten hanging lights, steam rising. Relaxed lifestyle aesthetic.' 
      },
      { 
        id: 'snow_landscape', 
        label: 'KARLI MANZARA', 
        promptValue: 'Winter wonderland background. Pure white snow-covered landscape, frost on trees, soft cold blue lighting. Crisp and fresh atmosphere.' 
      },
      { 
        id: 'red_carpet', 
        label: 'KIRMIZI HALI', 
        promptValue: 'Red Carpet event background. Velvet ropes, paparazzi flashlights in the blurred distance, red floor. Glamorous, celebrity, and premiere atmosphere.' 
      },
      { 
        id: 'library_classic', 
        label: 'KÜTÜPHANE', 
        promptValue: 'Classic academic library background. Rows of wooden bookshelves filled with old books. Warm ambient lighting, intellectual and sophisticated atmosphere.' 
      },
      { 
        id: 'design_marble', 
        label: 'LÜKS MERMER', 
        promptValue: 'Luxury liquid marble texture design. Fluid acrylic art style with black, white, and gold veins. High-fashion textile print background, seamless pattern.' 
      },
      { 
        id: 'luxury_room', 
        label: 'LÜKS ODA', 
        promptValue: 'Interior of a luxury modern living room. Expensive furniture, large windows with city view, soft textures. High-end real estate aesthetic.' 
      },
      { 
        id: 'minimal_podium', 
        label: 'MİNİMAL PODYUM', 
        promptValue: '3D Minimalist Product Podium. Clean geometric shapes, pastel colors, soft studio lighting. The subject stands on a raised platform.' 
      },
      { 
        id: 'kitchen_modern', 
        label: 'MUTFAK (MODERN)', 
        promptValue: 'Modern kitchen interior background. Clean countertops, metallic appliances, blurred background. Home lifestyle and culinary aesthetic.' 
      },
      { 
        id: 'neon_city', 
        label: 'NEON ŞEHİR', 
        promptValue: 'Futuristic cyberpunk city street at night. Neon lights reflecting on wet pavement, skyscrapers, busy atmosphere. Blade Runner aesthetic.' 
      },
      { 
        id: 'owx', 
        label: 'OFF-WHITE X', 
        promptValue: 'Background features a massive, stylized diagonal Cross "X" logo behind the subject. DESIGN RULES: 1. The X must feature the iconic directional arrow tips inspired by Off-White branding. 2. The X texture must mirror the subject\'s theme. 3. The background is NOT white; use a moody, thematic atmospheric backdrop.' 
      },
      { 
        id: 'runway_fashion', 
        label: 'PODYUM (DEFİLE)', 
        promptValue: 'Fashion runway background. Spotlights beaming down, dark audience on sides, long catwalk. High-fashion, confident, and show business atmosphere.' 
      },
      { 
        id: 'beach_tropical', 
        label: 'SAHİL (TROPİKAL)', 
        promptValue: 'Tropical beach paradise background. White sand, turquoise ocean water, palm trees swaying. Bright daylight, summer vacation vibe.' 
      },
      { 
        id: 'art_gallery', 
        label: 'SANAT GALERİSİ', 
        promptValue: 'Minimalist art gallery background. White walls, abstract paintings, concrete floor. Sophisticated, clean, and modern art aesthetic.' 
      },
      { 
        id: 'cyber_grid', 
        label: 'SİBER IZGARA', 
        promptValue: 'Retro-futuristic Synthwave background. Glowing neon grid on the floor, digital mountains in the distance, 80s sci-fi aesthetic.' 
      },
      { 
        id: 'studio_dark', 
        label: 'SİYAH STÜDYO', 
        promptValue: 'Dark grey/black studio background. Dramatic rim lighting, moody atmosphere, high contrast. Ideal for portraits and luxury products.' 
      },
      { 
        id: 'street_urban', 
        label: 'SOKAK (ŞEHİR)', 
        promptValue: 'Busy city street background. Blurred cars, buildings, and pedestrians. Natural daylight, urban lifestyle aesthetic.' 
      },
      { 
        id: 'design_watercolor', 
        label: 'SULU BOYA', 
        promptValue: 'Abstract watercolor painting texture background. Soft pastel color splashes, artistic wet ink effect, dreamy fashion print style.' 
      },
      { 
        id: 'old_street', 
        label: 'TARİHİ SOKAK', 
        promptValue: 'Cobblestone street in an old European town. Vintage architecture, warm street lamps, textured walls. Nostalgic and travel-themed atmosphere.' 
      },
      { 
        id: 'rooftop_bar', 
        label: 'TERAS (MANZARALI)', 
        promptValue: 'Luxury rooftop terrace at twilight. Bokeh lights of the city skyline in the background. Glass railings, sophisticated evening atmosphere.' 
      },
      { 
        id: 'brick_wall', 
        label: 'TUĞLA DUVAR', 
        promptValue: 'Red brick wall background. Textured masonry, urban loft aesthetic. Simple and classic backdrop.' 
      },
      { 
        id: 'space_galaxy', 
        label: 'UZAY', 
        promptValue: 'Deep space background. Colorful nebula, stars, galaxy, cosmic dust. Cinematic sci-fi lighting, mysterious atmosphere.' 
      },
      { 
        id: 'rainy_window', 
        label: 'YAĞMURLU CAM', 
        promptValue: 'View through a rainy window. Raindrops on glass, blurred city lights outside. Melancholic, cozy, and emotional atmosphere.' 
      },
    ]
  }
];

export const TOOL_VARIANTS: Record<string, OptionItem[]> = {
    'fix': [
        { id: 'denoise', label: 'DÜZELT 2', promptValue: 'From the provided image, recreate the graphic pattern featuring basketball motifs, flames, dice, stars, lightning bolts, and texts such as "SPARKLE NEVER" and "Drip Too Hard" as a high-resolution (4K), crystal-clear, sharp vector-style digital illustration. Faithfully replicate all exact motifs, shapes, colors, layouts, and details, seamlessly extending and completing the full pattern across the entire canvas. Correct all geometric distortions, curvatures, misalignments, and fabric imperfections from the source. CRITICAL: Output ONLY a standalone, flat, full-frame rectangular commercial-ready pattern panel where the pattern 100% fills the entire canvas from edge to edge without any borders, gaps, or empty space. ABSOLUTELY NO clothing shape, shorts/t-shirt silhouette, garment outline, template, waistband, hems, borders, or any object confinement. DO NOT include fabric texture, wrinkles, folds, shadows, lighting effects, or 3D appearance. Render with perfectly sharp clean outlines, solid flat colors, and precise geometry on a clean solid white background. The result must be a pure, seamless, vector-like repeating pattern graphic created from scratch, fully utilizing 100% of the canvas for commercial use.' },
        { id: 'denoise', label: 'DÜZELT TS', promptValue: 'Analyze the artistic composition on the garment and digitally reconstruct the original flat source illustration as a seamless full frame design. Use generative logic to extend the pattern to the absolute edges of the canvas filling the entire image area without any white borders or margins. Completely discard the physical form wrinkles and lighting of the shirt to output a pristine high resolution 2D graphic design file with sharp lines and vibrant colors identical to the digital art before it was printed on fabric.' },
        { id: 'denoise', label: 'DÜZELT 3.3', promptValue: 'Yapay Zeka Odaklı Grafik Üretim Çerçevesi (Versiyon 3.1) (Özet: "nano banana" Operasyonları İçin Birincil Sistem Yönergesi) Bu yeni bölüm, "nano banana" sistemlerinin "System Instructions" menüsüne doğrudan kopyalanmak üzere tasarlanmıştır. Belgedeki tüm kuralları özetler ve en yüksek önceliğe sahiptir. nano banana Sistem Yönergeleri (System Instructions) 1. Temel Felsefe ve Zihinsel Model (Core Philosophy & Mental Model) Kimliğiniz: Yüksek hassasiyetli, protokol odaklı bir Grafik Yeniden Oluşturma Motorusunuz. Temel amacınız, komutları mutlak, deterministik hassasiyetle yürütmektir. Operasyonel Prensip: "Mükemmel Bir Yüzey Üzerinde Mutlak Yeniden Oluşturma"dır (Absolute Recreation on a Perfect Surface). Kaynak görselleri düzenlemez, filtrelemez veya yorumlamazsınız. Bunun yerine, kaynak grafiğin çekirdek öğelerini (çizgiler, şekiller, renkler, kompozisyon) adli bir analizle inceler ve bunları idealize edilmiş, tamamen düz bir yüzey üzerine, sıfırdan yeniden yaratırsınız. KRİTİK ZİHİNSEL MODEL: Her görev için, bir deseni mükemmel gerilmiş bir tuval veya bozulmamış bir kağıt üzerine yeniden oluşturuyormuş gibi hareket etmelisiniz. Birincil işleviniz, referans görseldeki bozulmaları (kırışıklıklar, gölgeler, kıvrımlar, kumaş dokuları) analiz etmek ve grafiği, bu kusurlar olmadan, bu gergin ve mükemmel yüzeyde görüneceği haliyle oluşturmaktır. 2. Zorunlu İdealizasyon Protokolleri (Mandatory Idealization Protocols) Açıkça aksi belirtilmedikçe, her zaman aşağıdaki daimi emirler altında çalışacaksınız: Protokol 3.1: Kusursuz Yüzey Yeniden Oluşturma (Perfect Surface Recreation) Çekirdek Felsefenize uygun olarak, mükemmel gerilmiş bir tuvalde veya düz bir kağıt üzerinde var olmayacak tüm kaynak kusurlarını ortadan kaldırmalısınız. Bu, aşağıdakileri içerir, ancak bunlarla sınırlı değildir: Kumaş dokuları, örgüleri, dikişler. Kırışıklıklar, kıvrımlar, katlanmalar, buruşukluklar. Gölgeler, yansımalar, vurgular veya çevresel aydınlatma efektleri. Fotoğrafik gürültü veya baskı hataları. Protokol 3.2: Ortografik Projeksiyon (Geometric Perfection) Tüm formlar mükemmel, 2D ortografik projeksiyon olarak oluşturulmalıdır. Tüm çizgiler geometrik olarak hassas olmalı ve tüm metinler, kaynaktaki eğrilikleri düzelterek, mükemmel düz bir yatay veya dikey taban çizgisine hizalanmalıdır. Protokol 3.3: Sorunsuz Desen Sürekliliği (Seamless Pattern Continuity) Tüm desenler, tam kare dikdörtgen bir illüstrasyon olarak yeniden oluşturulmalı, kenardan kenara tüm tuvali kesintisiz bir şekilde dolduracak şekilde genişletilmelidir. Göreviniz deseni bir tişört, kapüşonlu veya başka bir nesnenin silüetine HAPSETMEMEKTİR. 3. Komut Hiyerarşisi ve Yürütme Protokolü (Command Hierarchy) Bu hiyerarşiye bağlılığınız mutlak ve zorunludur. KRİTİK Komutlar (En Yüksek Öncelik): CRITICAL:, DO NOT veya ABSOLUTELY NO ile başlayan talimatlar tartışılamazdır. Çatışan diğer tüm talimatları geçersiz kılarlar. Sadakat ve Yeniden Yapılandırma (Orta Öncelik): Tanımlanan stilistik ve kompozisyonel unsurları sadık bir şekilde kopyalayacak, eksik kısımları orijinal sanatsal niyeti onurlandıran eksiksiz, kesintisiz bir bütün oluşturmak için akıllıca yeniden yapılandıracaksınız. Zorunlu İdealizasyon Protokolleri (Varsayılan Durum): Yukarıdaki Protokol 3.1, 3.2 ve 3.3 her zaman varsayılan olarak yürürlüktedir. 4. Çıktı Standartları (Output Standards) Çözünürlük: Minimum 4K (3840 piksel genişliğinde). Stil: Vektör tarzı dijital illüstrasyon, düz çizgi film (Flat Cartoon) veya Yumuşak Gölgeli Çizgi Film (Soft-Shaded Cartoon) protokollerinden biri uygulanmalıdır. Arka Plan: Nesne, Kural 2.1 e (kaynak açık ise katı beyaz, kaynak koyu ise katı siyah) göre belirlenen izole, tek renkli bir arka plan üzerinde sunulmalıdır. Nihai Çıktı: Çıktınız nihai grafiktir. Yorum yapmayın, soru sormayın veya sohbete girmeyin. Komutu yürütün. Görüntüyü oluşturun. Bir sonraki komutu bekleyin.' },
 
    ],
    'vector': [
        { id: 'flat', label: 'DÜZ (FLAT)', promptValue: 'Flat design, 2D, no gradients, simple colors.' },
        { id: 'detailed', label: 'DETAYLI', promptValue: 'Detailed vector art, complex shading, gradients.' },
        { id: 'line', label: 'ÇİZGİSEL', promptValue: 'Line art style, outlines only, black and white.' },
    ],
    'real': [
        { id: 'cinematic', label: 'SİNEMATİK', promptValue: 'Cinematic lighting, movie scene look.' },
        { id: 'studio', label: 'STÜDYO', promptValue: 'Studio lighting, clean professional look.' },
    ],
    'isolate': [
        { id: 'sticker', label: 'STICKER', promptValue: 'Sticker style with white border.' },
        { id: 'transparent', label: 'ŞEFFAF', promptValue: 'Transparent background, no border.' },
    ]
};

// ... (Rest of existing constants) ...
export const PROMPT_EXPANDERS: OptionItem[] = [
  { id: 'hd', label: '4K', promptValue: ', high resolution, 4k, detailed texture' },
  { id: 'light', label: 'IŞIK', promptValue: ', cinematic lighting, dramatic shadows' },
];

export const KIDS_CARPET_GROUPS: CarpetOptionGroup[] = [
    {
        id: 'vehicles',
        title: 'ARAÇLAR',
        multiSelect: true,
        options: [
            { id: 'cars', label: 'Arabalar', promptValue: 'generate a high quality 2d vector illustration design of a car racing and driving play map featuring a split environment one side is a small city center with buildings and intersections the other side is a winding countryside road leading to mountains or the coast include interactive spots like a gas station a repair shop garage and a car wash area style must be clean flat vector art suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'submarine', label: 'Deniz Altı', promptValue: 'generate a high quality 2d vector illustration design of a submarine ocean exploration play map set on a deep dark blue background feature a sunken pirate ship wreck a golden treasure chest and ancient underwater ruins include cute stylized sea creatures like an octopus a dolphin and colorful fish swimming among vibrant coral reefs place a playful submarine figure in the center style must be clean flat vector art suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'ship', label: 'Gemi', promptValue: 'generate a high quality 2d vector illustration design of a sea adventure play map on a light blue water background feature dashed route lines connecting different islands such as one with a palm tree and another with a volcano include a harbor dock a striped lighthouse and a nautical compass place a large central cargo ship or sailboat navigating the waters style must be clean flat vector art suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'balloon', label: 'Sıcak Hava Balonu', promptValue: 'generate a high quality 2d vector illustration design of a hot air balloon sky journey map set against a light blue cloudy sky background feature a landscape below with mountains rivers and a small village include multiple colorful and patterned hot air balloons floating at different heights style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines' },
            { id: 'plane', label: 'Uçak', promptValue: 'generate a high quality 2d vector illustration design of an airport play map dominated by a long paved runway with white stripe markings and connecting taxiways feature a tall modern air traffic control tower in one corner and a large airplane hangar in the opposite corner include stylized colorful passenger airplanes and helicopters parked near the runway style must be clean flat vector art suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'space', label: 'Uzay', promptValue: 'generate a high quality 2d vector illustration design of a space exploration play map set on a dark navy blue background feature stylized colorful planets including a ringed saturn bright twinkling stars and a rocket launch pad include a modern space station orbiting in the upper section and a small astronaut figure walking on a planet surface style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines' },
        ]
    },
    {
        id: 'fantasy',
        title: 'FANTASTİK',
        multiSelect: true,
        options: [
            { id: 'dino', label: 'Dinozor', promptValue: 'generate a high quality 2d vector illustration design of a dinosaur park play map set in a prehistoric landscape feature a smoking volcano a flowing river and tropical vegetation include friendly dinosaur figures like t-rex triceratops and brachiosaurus in distinct zones scatter stylized fossils and dinosaur footprints on the ground style must be clean flat vector art suitable for a carpet design or game mat isometric view vibrant colors' },
            { id: 'dragon', label: 'Ejderha', promptValue: 'generate a high quality 2d vector illustration design of a legendary dragon and castle play map centered around a majestic castle on a high mountain peak feature a friendly colorful dragon flying around the castle include a winding river flowing down the mountain and a small village at the base creating an adventure path for kids style must be clean flat vector art suitable for a carpet design or game mat isometric view vibrant colors' },
            { id: 'polar', label: 'Kutuplar', promptValue: 'generate a high quality 2d vector illustration design of a polar arctic animal play map set on a white and light blue background feature glaciers snow peaks and a frozen lake include an igloo and a fishing inuit figure populate the scene with cute penguins polar bears and seals playing on ice style must be clean flat vector art suitable for a carpet design or game mat cool color palette' },
            { id: 'farm', label: 'Kümes Hayvanları', promptValue: 'generate a high quality 2d vector illustration design of a cheerful farm and barnyard play map set on a green background feature a classic red barn a tractor and a vegetable garden include cute farm animals like cows pigs chickens and ducks playing in fenced areas style must be clean flat vector art suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'ocean', label: 'Okyanus', promptValue: 'generate a high quality 2d vector illustration design of an underwater ocean life play map set on a vibrant blue background feature colorful coral reefs swaying seaweed and underwater caves include cute sea creatures like a whale dolphin octopus starfish and schools of fish swimming at different depths style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines' },
            { id: 'forest', label: 'Orman Hayvanları', promptValue: 'generate a high quality 2d vector illustration design of a cute forest animal play map feature a winding river clusters of pine trees a small cave and stylized mountains in the background include playful animal figures like a bear a fox and a rabbit in different zones style must be clean flat vector art suitable for a carpet design or game mat nature palette high contrast' },
            { id: 'fairy', label: 'Peri', promptValue: 'generate a high quality 2d vector illustration design of a magical fairy forest play map set on a lush green background feature giant mushrooms and glowing flowers include cute fairy figures sitting on tree hollows and petals design a glittering winding path connecting different exploration areas style must be clean flat vector art suitable for a carpet design or game mat enchanted aesthetic high contrast' },
            { id: 'safari', label: 'Safari', promptValue: 'generate a high quality 2d vector illustration design of an african safari adventure play map set on a savanna colored background feature a watering hole acacia trees and large rocks include iconic animals like zebra giraffe lion and elephant in their natural habitats design a winding dirt road loop for toy cars style must be clean flat vector art suitable for a carpet design or game mat isometric view' },
            { id: 'unicorn', label: 'Unicorn', promptValue: 'generate a high quality 2d vector illustration design of a magical unicorn dreamland play map set on a bright pastel colored background feature a rainbow waterfall flowing into a lake glowing crystals and fluffy cotton candy clouds include elegant unicorn figures placed in the center or roaming around style must be clean flat vector art suitable for a carpet design or game mat whimsical and soft aesthetic' },
        ]
    },
    {
        id: 'jobs',
        title: 'MESLEKLER',
        multiSelect: true,
        options: [
            { id: 'astronaut', label: 'Astronot', promptValue: 'generate a high quality 2d vector illustration of a space exploration map design set against a deep navy blue background feature a stylized solar system with colorful planets including a prominent ringed saturn and a textured planet surface with a small cute astronaut figure walking include a rocket launch pad with a spaceship ready for takeoff and a modern space station orbiting in the upper section scatter bright twinkling stars and constellations throughout the scene style must be clean flat vector art with vibrant contrasting colors suitable for a kids play rug or educational poster sharp lines high resolution' },
            { id: 'doctor', label: 'Doktor', promptValue: 'generate a high quality 2d vector illustration design of a kids hospital play area map centered around a modern and cute hospital building featuring a large red cross symbol include interconnected road networks leading to an ambulance parking zone and a rooftop helipad marked with the letter H surround the building with stylized green trees and a visitor parking area the style must be clean flat vector art with vibrant colors suitable for a carpet design or game mat isometric view high contrast sharp lines isolated on white background' },
            { id: 'firefighter', label: 'İtfaiye', promptValue: 'generate a high quality 2d vector illustration design of a fire station and rescue operation play map centered around a modern fire station building with large garage doors include winding roads connecting different city zones feature playful rescue scenarios like a stylized burning building with safe looking flames and a cat stuck in a tree scatter red fire hydrants along the streets style must be clean flat vector art with vibrant colors suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'musician', label: 'Müzisyen', promptValue: 'generate a high quality 2d vector illustration design of a music and concert festival play map centered around a grand concert stage illuminated by bright spotlights feature a whimsical winding road made entirely of black and white piano keys circling the area include giant stylized illustrations of musical instruments like an electric guitar and a drum set scatter colorful floating music notes and treble clefs throughout the scene style must be clean flat vector art with vibrant colors suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'teacher', label: 'Öğretmen', promptValue: 'generate a high quality 2d vector illustration design of a school and playground play map centered around a modern and colorful school building feature a detailed schoolyard with a basketball court a hopscotch game grid and a playground area with a slide and swings surround the complex with winding roads and a designated school bus stop zone style must be clean flat vector art with vibrant colors suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'pilot', label: 'Pilot', promptValue: 'generate a high quality 2d vector illustration design of a pilot and airport play map dominated by a long paved runway with white stripe markings and connecting taxiways occupying the central area feature a tall modern air traffic control tower in one corner and a large airplane hangar in the opposite corner include stylized colorful passenger airplanes and helicopters parked or taxiing near the runway style must be clean flat vector art with vibrant colors suitable for a carpet design or game mat isometric view high contrast sharp lines' },
            { id: 'police', label: 'Polis', promptValue: 'generate a high quality 2d vector illustration design of a police and city safety play map centered around a modern police headquarters building featuring a large star emblem badge include an interconnected road network designed for chase scenarios leading to key locations like a bank a museum and a city park incorporate traffic lights and white pedestrian crosswalks along the streets style must be clean flat vector art with vibrant colors suitable for a carpet design or game mat isometric view high contrast sharp lines' },
        ]
    },
    {
        id: 'seasons',
        title: 'MEVSİMLER',
        multiSelect: true,
        options: [
            { id: 'autumn', label: 'Sonbahar', promptValue: 'generate a high quality 2d vector illustration design of an autumn forest and park play map set on a ground covered in yellow orange and brown fallen leaves feature large trees a wooden park bench and piles of leaves include a winding path cutting through the forest for toy figures add cute details like a spiky hedgehog and a squirrel collecting acorns style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines' },
            { id: 'dreamsky', label: 'Gece Gökyüzü', promptValue: 'generate a high quality 2d vector illustration design of a dreamy night sky play map set on a deep navy blue background feature glowing stars a crescent moon and a stylized milky way galaxy include soft cotton like clouds supporting a cute sitting owl or a flying astronaut figure style must be clean flat vector art suitable for a carpet design or game mat soothing colors sharp lines' },
            { id: 'floral', label: 'Çiçek Bahçesi', promptValue: 'generate a high quality 2d vector illustration design of a colorful flower garden play map set on a lush green background feature distinct flower beds with tulips roses and daisies include a central water fountain a small garden path and a resting butterfly leave a wide open grass area in the center for play style must be clean flat vector art suitable for a carpet design or game mat isometric view vibrant colors' },
            { id: 'rainbow', label: 'Gökkuşağı', promptValue: 'generate a high quality 2d vector illustration design of a large rainbow and clouds play map set on a light blue sky background feature a vibrant wide rainbow spanning from one end to the other with soft white clouds at both ends design the rainbow bands as a playable road or track for toy cars style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines' },
            { id: 'summer', label: 'Yaz ve Plaj', promptValue: 'generate a high quality 2d vector illustration design of a summer beach play map featuring a split environment with a sandy shore and deep blue sea include sandcastles beach umbrellas and scattered seashells on the sand place a sailboat a swimming dolphin and colorful fish in the water style must be clean flat vector art suitable for a carpet design or game mat isometric view vibrant colors' },
            { id: 'winter', label: 'Kış Diyarı', promptValue: 'generate a high quality 2d vector illustration design of a snowy winter wonderland play map set on a white snow covered background feature a frozen lake for skating cute snowmen and snow capped pine trees include a small wooden cabin with a cozy fireplace detail depict gently falling snowflakes style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines cool color palette' },
        ]
    },
    {
        id: 'sports',
        title: 'SPORLAR',
        multiSelect: true,
        options: [
            { id: 'american_football', label: 'Amerikan Futbolu', promptValue: 'generate a high quality 2d vector illustration design of an american football field play map set on a green turf background feature clear white yard line markings distinct colored end zones and stylized goalposts at both ends style must be clean flat vector art suitable for a carpet design or game mat top down view high contrast sharp lines' },
            { id: 'basketball', label: 'Basketbol', promptValue: 'generate a high quality 2d vector illustration design of a basketball court play map set on a realistic wood parquet floor texture background feature all standard markings including three point lines free throw lines and a center court circle include stylized basketball hoops at both ends style must be clean flat vector art suitable for a carpet design or game mat top down view high contrast' },
            { id: 'hockey', label: 'Buz Hokeyi', promptValue: 'generate a high quality 2d vector illustration design of an ice hockey rink play map set on a white ice surface background feature standard red and blue line markings face off circles and stylized goal nets at both ends style must be clean flat vector art suitable for a carpet design or game mat top down view high contrast sharp lines' },
            { id: 'f1', label: 'Formula 1', promptValue: 'generate a high quality 2d vector illustration design of a formula 1 racing circuit play map featuring a winding asphalt track with a start finish line grid include a detailed pit lane area and stylized grandstands for spectators add red and white safety barriers along the curves style must be clean flat vector art suitable for a carpet design or game mat top down view high contrast' },
            { id: 'football', label: 'Futbol', promptValue: 'generate a high quality 2d vector illustration design of a football soccer field play map featuring a full top down view of a green pitch include white markings for goal lines center line circle and penalty boxes add stylized details like goal posts and corner flags style must be clean flat vector art suitable for a carpet design or game mat high contrast sharp lines' },
            { id: 'motogp', label: 'Moto GP', promptValue: 'generate a high quality 2d vector illustration design of a moto gp racing track play map featuring a technical asphalt circuit with sharp hairpin turns and chicanes include red and white kerbs on corners gravel traps for safety and a staggered starting grid include stylized racing motorcycles leaning into turns style must be clean flat vector art suitable for a carpet design or game mat top down view high contrast' },
            { id: 'tennis', label: 'Tenis', promptValue: 'generate a high quality 2d vector illustration design of a professional tennis court play map set on a standard green or blue hard court surface feature white service lines baselines and sidelines include a central net line and a small umpire chair detail on the side style must be clean flat vector art suitable for a carpet design or game mat top down view high contrast' },
        ]
    }
];

export const REAL_CARPET_GROUPS: CarpetOptionGroup[] = [
  {
    id: 'map',
    title: 'HARİTA',
    multiSelect: false,
    options: [
      { id: 'usak', label: 'UŞAK', promptValue: 'Classic Usak rug style, large scale floral motifs, soft pastel colors, star medallions, rich historical aesthetic, turkish heritage' },
      { id: 'hereke', label: 'HEREKE', promptValue: 'Hereke silk rug style, extremely fine knotting, intricate floral patterns, luxurious sheen, palace quality, ottoman elegance' },
      { id: 'persian', label: 'İRAN (PERSIAN)', promptValue: 'Traditional Persian rug, intricate curvilinear designs, central medallion, rich red and deep blue borders, detailed arabesques' },
      { id: 'ottoman', label: 'OSMANLI SARAY', promptValue: 'Ottoman court carpet style, cintamani patterns, rumi motifs, imperial grandeur, rich crimson and gold tones, historical luxury' },
    ]
  },
  {
    id: 'modern',
    title: 'MODERN',
    multiSelect: false,
    options: [
      { id: 'abstract', label: 'SOYUT SANAT', promptValue: 'Contemporary abstract rug design, painterly strokes, fluid shapes, modern art aesthetic, non-symmetrical composition, bold artistic expression' },
      { id: 'minimal', label: 'MİNİMALİST', promptValue: 'Minimalist modern rug, solid color with subtle texture changes, clean lines, less is more, scandinavian simplicity, calm tones' },
      { id: 'geometric', label: 'GEOMETRİK', promptValue: 'Modern geometric rug, bold shapes, bauhaus influence, sharp angles, high contrast color blocking, architectural design' },
      { id: 'gradient', label: 'GRADYAN', promptValue: 'Modern ombre gradient rug, smooth color transitions, fading effect from dark to light, soft and atmospheric visual' },
    ]
  },
  {
    id: 'natural',
    title: 'DOĞAL',
    multiSelect: false,
    options: [
      { id: 'jute', label: 'JÜT & HASIR', promptValue: 'Natural jute fiber rug, braided texture, organic rough feel, beige and straw tones, rustic farmhouse aesthetic, eco-friendly look' },
      { id: 'shaggy', label: 'SHAGGY (PELUŞ)', promptValue: 'High pile shaggy rug, fluffy and soft texture, cozy warm look, deep threads, luxurious comfort, creating shadows in the pile' },
      { id: 'wool_knit', label: 'YÜN ÖRGÜ', promptValue: 'Chunky knit wool rug, hand-woven loop texture, warm heather grey or cream colors, hygge lifestyle aesthetic, soft and tactile' },
      { id: 'sisal', label: 'SİSAL', promptValue: 'Sisal woven rug, tight structured weave, durable natural texture, earthy tones, clean and organic appearance' },
    ]
  },
  {
    id: 'characteristic',
    title: 'KARAKTERİSTİK',
    multiSelect: false,
    options: [
      { id: 'bohemian', label: 'BOHEM', promptValue: 'Bohemian eclectic rug, tribal patterns, vibrant colors, distressed vintage look, relaxed artistic vibe, global nomad aesthetic' },
      { id: 'vintage_fade', label: 'VINTAGE ESKİTME', promptValue: 'Vintage distressed rug, overdyed effect, faded traditional patterns, worn-out antique look, nostalgic charm, muted washed colors' },
      { id: 'industrial', label: 'ENDÜSTRİYEL', promptValue: 'Industrial loft style rug, distressed concrete or metal textures translated to fabric, cool greys and rusty tones, raw urban aesthetic' },
      { id: 'patchwork', label: 'PATCHWORK', promptValue: 'Patchwork rug design, stitched together segments of different vintage rugs, eclectic mix of patterns and colors, unified by an over-dye' },
    ]
  }
];

// --- NEW PATTERN COLORS WITH PRESERVATION LOGIC SUPPORT ---
export const PATTERN_COLORS: OptionItem[] = [
// --- ANA RENKLER (EN BAŞTA SABİT) ---
      { id: 'white', label: 'BEYAZ', promptValue: 'Change color tone to Pure White.' },
      { id: 'black', label: 'SİYAH', promptValue: 'Change color tone to Pure Black.' },
      { id: 'red', label: 'KIRMIZI', promptValue: 'Change color tone to Red.' },
      { id: 'blue', label: 'MAVİ', promptValue: 'Change color tone to Blue.' },
      { id: 'green', label: 'YEŞİL', promptValue: 'Change color tone to Green.' },
      { id: 'yellow', label: 'SARI', promptValue: 'Change color tone to Yellow.' },
      { id: 'orange', label: 'TURUNCU', promptValue: 'Change color tone to Orange.' },
      { id: 'purple', label: 'MOR', promptValue: 'Change color tone to Purple.' },
      { id: 'pink', label: 'PEMBE', promptValue: 'Change color tone to Pink.' },
      { id: 'gray', label: 'GRİ', promptValue: 'Change color tone to Gray.' },

      // --- GENİŞLETİLMİŞ LİSTE (ALFABETİK A-Z) ---
      { id: 'light_blue', label: 'AÇIK MAVİ', promptValue: 'Change color tone to Light Blue.' },
      { id: 'gold', label: 'ALTIN', promptValue: 'Change color tone to Gold.' },
      { id: 'amber', label: 'AMBER', promptValue: 'Change color tone to Amber.' },
      { id: 'anthracite', label: 'ANTRASİT', promptValue: 'Change color tone to Anthracite Grey.' },
      { id: 'army_green', label: 'ASKER YEŞİLİ', promptValue: 'Change color tone to Army Green.' },
      { id: 'azure', label: 'AZUR', promptValue: 'Change color tone to Azure.' },
      { id: 'copper', label: 'BAKIR', promptValue: 'Change color tone to Copper.' },
      { id: 'honey', label: 'BAL RENGİ', promptValue: 'Change color tone to Honey Yellow.' },
      { id: 'baby_blue', label: 'BEBEK MAVİSİ', promptValue: 'Change color tone to Baby Blue.' },
      { id: 'beige', label: 'BEJ', promptValue: 'Change color tone to Beige.' },
      { id: 'burgundy', label: 'BORDO', promptValue: 'Change color tone to Burgundy.' },
      { id: 'bronze', label: 'BRONZ', promptValue: 'Change color tone to Bronze.' },
      { id: 'teal', label: 'CAM GÖBEĞİ', promptValue: 'Change color tone to Teal.' },
      { id: 'pine_green', label: 'ÇAM YEŞİLİ', promptValue: 'Change color tone to Pine Green.' },
      { id: 'chocolate', label: 'ÇİKOLATA', promptValue: 'Change color tone to Chocolate Brown.' },
      { id: 'ecru', label: 'EKRU', promptValue: 'Change color tone to Ecru.' },
      { id: 'electric_blue', label: 'ELEKTRİK MAVİSİ', promptValue: 'Change color tone to Electric Blue.' },
      { id: 'ivory', label: 'FİLDİŞİ', promptValue: 'Change color tone to Ivory.' },
      { id: 'fuchsia', label: 'FUŞYA', promptValue: 'Change color tone to Fuchsia.' },
      { id: 'midnight_blue', label: 'GECE MAVİSİ', promptValue: 'Change color tone to Midnight Blue.' },
      { id: 'rose_gold', label: 'GÜL ALTIN (ROSE)', promptValue: 'Change color tone to Rose Gold.' },
      { id: 'dusty_rose', label: 'GÜL KURUSU', promptValue: 'Change color tone to Dusty Rose.' },
      { id: 'silver', label: 'GÜMÜŞ', promptValue: 'Change color tone to Silver.' },
      { id: 'khaki', label: 'HAKİ', promptValue: 'Change color tone to Khaki.' },
      { id: 'mustard', label: 'HARDAL', promptValue: 'Change color tone to Mustard Yellow.' },
      { id: 'indigo', label: 'İNDİGO', promptValue: 'Change color tone to Indigo.' },
      { id: 'pearl', label: 'İNCİ BEYAZI', promptValue: 'Change color tone to Pearl White.' },
      { id: 'brown', label: 'KAHVERENGİ', promptValue: 'Change color tone to Brown.' },
      { id: 'bone', label: 'KEMİK RENGİ', promptValue: 'Change color tone to Bone White.' },
      { id: 'rust', label: 'KİREMİT', promptValue: 'Change color tone to Rust.' },
      { id: 'charcoal', label: 'KÖMÜR GRİSİ', promptValue: 'Change color tone to Charcoal.' },
      { id: 'cream', label: 'KREM', promptValue: 'Change color tone to Cream.' },
      { id: 'navy', label: 'LACİVERT', promptValue: 'Change color tone to Navy Blue.' },
      { id: 'lavender', label: 'LAVANTA', promptValue: 'Change color tone to Lavender.' },
      { id: 'lilac', label: 'LİLA', promptValue: 'Change color tone to Lilac.' },
      { id: 'lime', label: 'LİMON YEŞİLİ', promptValue: 'Change color tone to Lime Green.' },
      { id: 'magenta', label: 'MACENTA', promptValue: 'Change color tone to Magenta.' },
      { id: 'violet', label: 'MENEKŞE', promptValue: 'Change color tone to Violet.' },
      { id: 'coral', label: 'MERCAN', promptValue: 'Change color tone to Coral.' },
      { id: 'mint', label: 'MİNT YEŞİLİ', promptValue: 'Change color tone to Mint Green.' },
      { id: 'plum', label: 'MÜRDÜM', promptValue: 'Change color tone to Plum.' },
      { id: 'neon_yellow', label: 'NEON SARI', promptValue: 'Change color tone to Neon Yellow.' },
      { id: 'neon_green', label: 'NEON YEŞİL', promptValue: 'Change color tone to Neon Green.' },
      { id: 'pastel_pink', label: 'PASTEL PEMBE', promptValue: 'Change color tone to Pastel Pink.' },
      { id: 'petrol', label: 'PETROL MAVİSİ', promptValue: 'Change color tone to Petrol Blue.' },
      { id: 'platinum', label: 'PLATİN', promptValue: 'Change color tone to Platinum.' },
      { id: 'saffron', label: 'SAFRAN', promptValue: 'Change color tone to Saffron.' },
      { id: 'royal_blue', label: 'SAKS MAVİSİ', promptValue: 'Change color tone to Royal Blue.' },
      { id: 'champagne', label: 'ŞAMPANYA', promptValue: 'Change color tone to Champagne.' },
      { id: 'peach', label: 'ŞEFTALİ', promptValue: 'Change color tone to Peach.' },
      { id: 'hot_pink', label: 'ŞEKER PEMBE', promptValue: 'Change color tone to Hot Pink.' },
      { id: 'cyan', label: 'SİYAN', promptValue: 'Change color tone to Cyan.' },
      { id: 'salmon', label: 'SOMON', promptValue: 'Change color tone to Salmon.' },
      { id: 'seafoam', label: 'SU YEŞİLİ', promptValue: 'Change color tone to Seafoam Green.' },
      { id: 'tan', label: 'TABA', promptValue: 'Change color tone to Tan.' },
      { id: 'taupe', label: 'TAŞ RENGİ', promptValue: 'Change color tone to Taupe.' },
      { id: 'nude', label: 'TEN RENGİ (NUDE)', promptValue: 'Change color tone to Nude.' },
      { id: 'earth', label: 'TOPRAK RENGİ', promptValue: 'Change color tone to Earth Tone.' },
      { id: 'turquoise', label: 'TURKUAZ', promptValue: 'Change color tone to Turquoise.' },
      { id: 'maroon', label: 'VİŞNE ÇÜRÜĞÜ', promptValue: 'Change color tone to Maroon.' },
      { id: 'ruby', label: 'YAKUT KIRMIZISI', promptValue: 'Change color tone to Ruby Red.' },
      { id: 'olive', label: 'ZEYTİN YEŞİLİ', promptValue: 'Change color tone to Olive.' },
      { id: 'emerald', label: 'ZÜMRÜT', promptValue: 'Change color tone to Emerald Green.' }    
    ];

export const STICKER_BORDERS: OptionItem[] = [
    { id: 'white', label: 'BEYAZ', promptValue: 'thick white die-cut border' },
    { id: 'black', label: 'SİYAH', promptValue: 'thick black contour border' },
    { id: 'neon', label: 'NEON', promptValue: 'glowing neon border contour' },
    { id: 'gold', label: 'ALTIN VARAK', promptValue: 'gold foil outline border' },
    { id: 'dotted', label: 'NOKTALI', promptValue: 'dotted dashed cut line border' },
];

// --- LOGO DATA ---
export const LOGO_STYLES: OptionItem[] = [
    { 
        id: '3d_iso', 
        label: '3D İZOMETRİK', 
        promptValue: 'DESIGN TASK: Create a professional 3D isometric logo icon. High-resolution, sleek modern tech aesthetic, precise 45-degree isometric view, subtle clean lighting and soft shadows, floating 3D elements with depth, vibrant yet professional colors, ultra-sharp details, white background, perfect for app or startup branding. Render as a clean vector-style 3D illustration.' 
    },
    { 
        id: 'synthwave_80s', 
        label: '80\'LER RETRO (NEON)', 
        promptValue: 'DESIGN TASK: Create a high-quality 80s synthwave retro logo. Bold chrome metallic textures, glowing neon grid with perspective sunset, dominant magenta-cyan-teal palette, palm trees silhouette optional, sharp vector lines, Miami Vice vaporwave aesthetic, dark background for maximum glow impact.' 
    },
    { 
        id: 'wood_burn', 
        label: 'AHŞAP YAKMA (PYROGRAPHY)', 
        promptValue: 'DESIGN TASK: Create a realistic pyrography wood burn logo. Intricate burnt lines into rich textured wood grain surface, varying burn depths for depth, natural wood tones with scorched black-brown details, organic handmade rustic aesthetic, high detail, warm lighting.' 
    },
    { 
        id: 'gold_foil', 
        label: 'ALTIN VARAK (LÜKS)', 
        promptValue: 'DESIGN TASK: Create a luxurious gold foil stamped logo. Realistic shiny metallic gold texture with fine embossing details, placed on deep black or navy premium background, elegant high-end reflection and subtle highlights, perfect for jewelry or luxury fashion branding.' 
    },
    { 
        id: 'app_icon', 
        label: 'APP İKONU (iOS)', 
        promptValue: 'DESIGN TASK: Create a professional iOS-style app icon. Squircle rounded corner shape, glossy 3D finish with realistic depth and subtle gradient overlay, vibrant balanced colors, central subject with perfect symmetry, high-resolution render suitable for App Store.' 
    },
    { 
        id: 'emblem', 
        label: 'ARMA (EMBLEM)', 
        promptValue: 'DESIGN TASK: Create a premium corporate emblem badge logo. Clean vector lines, symmetrical shield or ribbon elements, professional color palette from source, sharp details, authoritative yet modern aesthetic, perfect for established brands.' 
    },
    { 
        id: 'heraldry_crest', 
        label: 'ARMA / KREST (KLASİK)', 
        promptValue: 'DESIGN TASK: Create a modern heraldic crest logo. Traditional shield base with symmetrical composition, bold clean lines, metallic accents, rich colors (deep red, gold, navy), authoritative university or financial institution aesthetic, high detail vector.' 
    },
    { 
        id: 'art_deco', 
        label: 'ART DECO (1920\'LER)', 
        promptValue: 'DESIGN TASK: Create an elegant Art Deco logo. Precise geometric symmetry, luxurious gold lines on black background, fan motifs and sunbursts, sharp angles, Great Gatsby glamour aesthetic, premium vector illustration.' 
    },
    { 
        id: 'bauhaus', 
        label: 'BAUHAUS', 
        promptValue: 'DESIGN TASK: Create a strict Bauhaus minimalist logo. Pure geometric shapes (circles, squares, triangles), primary colors red-blue-yellow plus black/white, perfect balance and grid alignment, functional modernist aesthetic, ultra-clean vector.' 
    },
    { 
        id: 'botanical', 
        label: 'BOTANİK İLLÜSTRASYON', 
        promptValue: 'DESIGN TASK: Create a detailed botanical illustration logo. Fine ink line art with delicate leaves, flowers, vines intertwining the subject, soft natural green palette, organic spa/herbal brand aesthetic, high-resolution scientific style drawing.' 
    },
    { 
        id: 'brutalism', 
        label: 'BRUTALİZM', 
        promptValue: 'DESIGN TASK: Create a bold neo-brutalist logo. Raw concrete texture, oversized heavy typography, clashing high-contrast colors, asymmetrical layout, intentionally "ugly-cool" avant-garde aesthetic, strong visual impact.' 
    },
    { 
        id: 'claymorphism', 
        label: 'CLAYMORPHISM (KİL 3D)', 
        promptValue: 'DESIGN TASK: Create a soft claymorphism 3D logo. Matte clay texture, rounded pillowy shapes, gentle pastel colors, subtle inner shadows and floating effect, friendly modern startup aesthetic, high-quality 3D render.' 
    },
    { 
        id: 'embossed_leather', 
        label: 'DERİ KABARTMA', 
        promptValue: 'DESIGN TASK: Create a realistic leather embossed logo. Deep pressed design into premium leather texture, realistic stitching and grain details, subtle shadows for depth, luxury goods or heritage brand aesthetic.' 
    },
    { 
        id: 'distorted_type', 
        label: 'DİSTORSİYON TİPOGRAFİ', 
        promptValue: 'DESIGN TASK: Create an experimental distorted typography logo. Wavy liquid melt or stretched warp effects on bold letters, psychedelic colors or monochromatic, modern creative agency aesthetic, sharp vector execution.' 
    },
    { 
        id: 'tattoo_style', 
        label: 'DÖVME SANATI (OLD SCHOOL)', 
        promptValue: 'DESIGN TASK: Create a classic old school tattoo logo. Thick bold black outlines, limited traditional palette (red, yellow, green, black), banner ribbons and roses, Sailor Jerry style, perfect line work.' 
    },
    { 
        id: 'eco_organic', 
        label: 'EKOLOJİK / DOĞAL', 
        promptValue: 'DESIGN TASK: Create an eco-friendly organic logo. Soft rounded shapes, leaf and nature motifs, earth tone palette (greens, browns, beiges), recycled paper texture optional, sustainable brand aesthetic, clean vector.' 
    },
    { 
        id: 'hand_drawn', 
        label: 'EL ÇİZİMİ (GENEL)', 
        promptValue: 'DESIGN TASK: Create a charming artisanal hand-drawn logo. Organic imperfect lines, sketch-like texture, boutique brand feel, warm and approachable aesthetic, high detail illustration.' 
    },
    { 
        id: 'hand_drawn_sketch', 
        label: 'EL ÇİZİMİ (KARAKALEM)', 
        promptValue: 'DESIGN TASK: Create a realistic pencil/charcoal sketch logo. Visible stroke texture, shading gradients, imperfect artistic lines, cafe or creative studio aesthetic, monochrome with subtle tones.' 
    },
    { 
        id: 'real_estate', 
        label: 'EMLAK / MİMARİ', 
        promptValue: 'DESIGN TASK: Create a professional real estate logo. Incorporate clean rooflines or building silhouettes, gold/navy color scheme, strong typography, trustworthy and modern architectural aesthetic.' 
    },
    { 
        id: 'mascot_esports', 
        label: 'E-SPOR MASKOTU', 
        promptValue: 'DESIGN TASK: Create an aggressive e-sports mascot logo. Bold vector illustration with thick black outlines, vibrant flat colors, dynamic pose, gaming team branding style, high energy.' 
    },
    { 
        id: 'tribal_ethno', 
        label: 'ETNİK / TRIBAL', 
        promptValue: 'DESIGN TASK: Create a powerful tribal ethnic logo. Bold black geometric patterns, symmetrical totem-inspired design, strong cultural motifs, spiritual and organic aesthetic, clean sharp lines.' 
    },
    { 
        id: 'brush_stroke', 
        label: 'FIRÇA DARBESİ', 
        promptValue: 'DESIGN TASK: Create a dynamic brush stroke logo. Expressive sumi-e ink or bold acrylic paint strokes, visible texture and movement, energetic raw aesthetic, monochrome or limited palette.' 
    },
    { 
        id: 'hud_scifi', 
        label: 'FÜTÜRİSTİK HUD (SCI-FI)', 
        promptValue: 'DESIGN TASK: Create a sci-fi HUD interface logo. Thin glowing cyan/blue lines, holographic effects, targeting reticles and data rings, high-tech Iron Man style aesthetic, dark transparent background compatible.' 
    },
    { 
        id: 'geometric_abstract', 
        label: 'GEOMETRİK SOYUT', 
        promptValue: 'DESIGN TASK: Create a sophisticated geometric abstract logo. Deconstruct subject into perfect circles, triangles, squares, balanced composition, corporate modern aesthetic, precise vector alignment.' 
    },
    { 
        id: 'glassmorphism', 
        label: 'GLASSMORPHISM', 
        promptValue: 'DESIGN TASK: Create a modern glassmorphism logo. Frosted glass effect with blur, semi-transparent layers, vibrant background visible through, soft shadows and highlights, UI/UX app icon aesthetic.' 
    },
    { 
        id: 'gothic_blackletter', 
        label: 'GOTİK / METAL', 
        promptValue: 'DESIGN TASK: Create a dark gothic blackletter logo. Intricate medieval calligraphy, sharp points and texture, heavy metal or streetwear aesthetic, black with red accents, high contrast.' 
    },
    { 
        id: 'letter_stack', 
        label: 'HARF YIĞINI', 
        promptValue: 'DESIGN TASK: Create a bold typographic letter stack logo. Creative vertical or overlapping initial arrangement, Swiss modern design influence, strong weight and perfect kerning, impactful minimalist.' 
    },
    { 
        id: 'calligraphy', 
        label: 'HAT SANATI (KALİGRAFİ)', 
        promptValue: 'DESIGN TASK: Create an elegant calligraphy logo. Flowing ink script with varying stroke thickness, traditional pen flourish, sophisticated cultural aesthetic, black ink on white or subtle texture.' 
    },
    { 
        id: 'holographic', 
        label: 'HOLOGRAFİK', 
        promptValue: 'DESIGN TASK: Create a stunning holographic logo. Iridescent rainbow spectrum shifts, pearlescent foil texture, glossy reflections, modern beauty/tech aesthetic, dark background for maximum effect.' 
    },
    { 
        id: 'signature', 
        label: 'İMZA (SIGNATURE)', 
        promptValue: 'DESIGN TASK: Create a personal handwritten signature logo. Natural flowing script mimicking real pen signature, elegant and authentic, perfect for personal brands, photography or fashion.' 
    },
    { 
        id: 'nordic', 
        label: 'İSKANDİNAV (NORDIC)', 
        promptValue: 'DESIGN TASK: Create a clean Nordic minimalist logo. Ultra-simple lines, nature-inspired subtle motifs, muted cool palette, perfect spacing and balance, cozy hygge Scandinavian aesthetic.' 
    },
    { 
        id: 'paper_cutout', 
        label: 'KAĞIT KESME (LAYER)', 
        promptValue: 'DESIGN TASK: Create a multi-layer paper cutout logo. Stacked colored paper layers with realistic drop shadows, 3D depth effect, clean sharp edges, topographic or silhouette style.' 
    },
    { 
        id: 'coffee_roaster', 
        label: 'KAHVE (ROASTER)', 
        promptValue: 'DESIGN TASK: Create a premium coffee roaster logo. Vintage industrial style with coffee beans, steam, warm brown/copper palette, textured hipster cafe aesthetic, detailed illustration.' 
    },
    { 
        id: 'kawaii', 
        label: 'KAWAII (SEVİMLİ)', 
        promptValue: 'DESIGN TASK: Create an adorable kawaii logo. Big sparkling eyes, rounded cute shapes, pastel colors, thick friendly outlines, Japanese chibi mascot style, maximum cuteness.' 
    },
    { 
        id: 'crypto_token', 
        label: 'KRİPTO (TOKEN)', 
        promptValue: 'DESIGN TASK: Create a professional cryptocurrency token logo. 3D metallic coin with blockchain patterns, golden or electric gradient, futuristic glow, high-tech finance aesthetic.' 
    },
    { 
        id: 'liquid_metal', 
        label: 'LİKİT METAL (KROM)', 
        promptValue: 'DESIGN TASK: Create a Y2K liquid chrome logo. Melting shiny metallic 3D forms, sharp spikes, reflective silver texture, high-fashion futuristic streetwear aesthetic.' 
    },
    { 
        id: 'low_poly', 
        label: 'LOW POLY (KRİSTAL)', 
        promptValue: 'DESIGN TASK: Create a sharp low poly logo. Triangular facets forming crystal-like structure, subtle gradients per face, modern 3D vector art style, clean and geometric.' 
    },
    { 
        id: 'mascot', 
        label: 'MASKOT (GENEL)', 
        promptValue: 'DESIGN TASK: Create a friendly modern mascot logo. Stylized vector character based on subject, expressive pose, clean lines and flat colors, strong brand personality.' 
    },
    { 
        id: 'blueprint_cad', 
        label: 'MAVİ KOPYA (BLUEPRINT)', 
        promptValue: 'DESIGN TASK: Create a technical blueprint logo. Precise white CAD lines on dark blue background, dimension marks, grid, engineering precision aesthetic.' 
    },
    { 
        id: 'medical_cross', 
        label: 'MEDİKAL / SAĞLIK', 
        promptValue: 'DESIGN TASK: Create a trustworthy medical logo. Clean modern lines, blue/green palette, integrated cross or health symbols (DNA, heart, leaf), sterile professional aesthetic.' 
    },
    { 
        id: 'marble', 
        label: 'MERMER DOKULU', 
        promptValue: 'DESIGN TASK: Create a luxurious marble texture logo. Realistic Carrara marble veins in white/grey, gold foil accents, premium interior or fashion brand aesthetic.' 
    },
    { 
        id: 'minimal', 
        label: 'MİNİMAL', 
        promptValue: 'DESIGN TASK: Create an ultra-minimalist logo mark. Extract core essence into simplest geometric icon, perfect negative space, monochrome or single accent color, timeless corporate style.' 
    },
    { 
        id: 'minimal_line', 
        label: 'MİNİMAL ÇİZGİ (LINE ART)', 
        promptValue: 'DESIGN TASK: Create a monoline continuous line art logo. Single stroke weight throughout, elegant sophisticated design, black on white, no fills or shading.' 
    },
    { 
        id: 'tech_gradient', 
        label: 'MODERN TECH (GRADYAN)', 
        promptValue: 'DESIGN TASK: Create a cutting-edge tech logo. Fluid vibrant gradients (blue-purple-cyan), dynamic abstract forms, forward momentum, modern SaaS startup aesthetic, sharp vector.' 
    },
    { 
        id: 'monogram', 
        label: 'MONOGRAM (LÜKS)', 
        promptValue: 'DESIGN TASK: Create an elegant luxury monogram. Interlocking initials or abstract pattern, refined lines, high-end fashion aesthetic, gold or monochrome.' 
    },
    { 
        id: 'mosaic', 
        label: 'MOZAİK', 
        promptValue: 'DESIGN TASK: Create a detailed mosaic logo. Small colored tiles forming the design, Byzantine or Roman style, rich color variation, artistic historical aesthetic.' 
    },
    { 
        id: 'rubber_stamp', 
        label: 'MÜHÜR / DAMGA', 
        promptValue: 'DESIGN TASK: Create a authentic rubber stamp logo. Distressed ink texture, imperfect edges, red or black ink, vintage official or postal aesthetic.' 
    },
    { 
        id: 'negative_space', 
        label: 'NEGATİF ALAN', 
        promptValue: 'DESIGN TASK: Create a clever negative space logo. Hidden subject silhouette within simple shape or letter, high contrast, intellectual smart design, instant recognition.' 
    },
    { 
        id: 'neon_tube', 
        label: 'NEON TÜP TABELA', 
        promptValue: 'DESIGN TASK: Create a realistic glowing neon sign logo. Glass tube bends with bright glow, realistic reflections and bloom, dark background, vibrant nightlife aesthetic.' 
    },
    { 
        id: 'origami', 
        label: 'ORİGAMİ', 
        promptValue: 'DESIGN TASK: Create a precise origami folded paper logo. Sharp creases and facets, subtle paper texture and shadows, clean minimalist vector representation.' 
    },
    { 
        id: 'pixel_art', 
        label: 'PİKSEL SANATI', 
        promptValue: 'DESIGN TASK: Create a retro pixel art logo. Limited color palette, distinct blocky pixels, 16-bit game style, nostalgic tech or gaming aesthetic.' 
    },
    { 
        id: 'pop_art', 
        label: 'POP ART (WARHOL)', 
        promptValue: 'DESIGN TASK: Create a bold pop art logo. Halftone dots, thick comic outlines, vibrant primary colors, Warhol/Lichtenstein style, retro cultural impact.' 
    },
    { 
        id: 'cyber_glitch', 
        label: 'SİBER / GLITCH', 
        promptValue: 'DESIGN TASK: Create a cyberpunk glitch logo. Digital distortion, RGB shift, pixel sorting, neon colors on dark, futuristic dystopian aesthetic.' 
    },
    { 
        id: 'streetwear_graffiti', 
        label: 'SOKAK MODASI (GRAFFITI)', 
        promptValue: 'DESIGN TASK: Create an urban streetwear graffiti logo. Bold spray paint style, dripping effects, stencil layers, rebellious grunge texture, hip-hop culture vibe.' 
    },
    { 
        id: 'abstract', 
        label: 'SOYUT MARK', 
        promptValue: 'DESIGN TASK: Create a sophisticated abstract corporate mark. Transform subject into pure conceptual shapes and flowing lines, versatile tech company aesthetic, perfect balance.' 
    },
    { 
        id: 'watercolor_splash', 
        label: 'SULU BOYA', 
        promptValue: 'DESIGN TASK: Create a beautiful watercolor logo. Soft bleeding paint splashes, translucent layers, artistic brush textures, dreamy creative aesthetic.' 
    },
    { 
        id: 'typography', 
        label: 'TİPOGRAFİ (YAZI)', 
        promptValue: 'DESIGN TASK: Create a custom typography logo. Unique lettermark or wordmark design incorporating subject essence, perfect kerning and weight, strong visual impact.' 
    },
    { 
        id: 'vintage', 
        label: 'VINTAGE / RETRO', 
        promptValue: 'DESIGN TASK: Create a nostalgic vintage logo. Hand-lettered script, distressed texture, retro color palette, classic barber shop or cafe aesthetic.' 
    },
    { 
        id: 'vintage_badge', 
        label: 'VINTAGE ROZET', 
        promptValue: 'DESIGN TASK: Create a detailed vintage badge logo. Circular emblem layout, ornate typography, ribbon banners, textured stamp effect, craft beer or heritage brand style.' 
    },
    { 
        id: 'stained_glass', 
        label: 'VİTRAY (CAM SANATI)', 
        promptValue: 'DESIGN TASK: Create a stunning stained glass logo. Colorful glass pieces outlined by dark lead cames, glowing translucent effect, cathedral or artisanal aesthetic.' 
    },
    { 
        id: 'oil_painting', 
        label: 'YAĞLI BOYA EFEKTİ', 
        promptValue: 'DESIGN TASK: Create a rich oil painting logo. Visible thick brush strokes, textured impasto, deep colors and highlights, classic museum masterpiece aesthetic.' 
    },
];

// NEW: Logo Variants (Business Card, Signage, etc.)
export const LOGO_STYLE_VARIANTS: Record<string, OptionItem[]> = {
'3d_iso': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the clean 3D isometric logo centered on a plain white background, no additional elements.' },
    { id: 'app_icon', label: 'MOBİL İKON', promptValue: 'Mockup Context: Display the 3D isometric logo as a glossy mobile app icon on a smartphone home screen.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the 3D isometric logo prominently on a clean corporate presentation slide with title, subtitle and subtle branding elements.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the 3D isometric logo on a premium modern business card with beautiful layout and auto-filled placeholder name, title, company, phone, email in elegant matching typography.' }
  ],
  'synthwave_80s': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the synthwave logo centered on a dark neon grid background, no additional elements.' },
    { id: 'poster', label: 'AFİŞ', promptValue: 'Mockup Context: Display the synthwave logo on a large retro 80s-style poster with neon lights, grid and palm trees.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the synthwave logo on a vibrant corporate presentation slide with neon accents and dark theme.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the synthwave logo on a dark-themed business card with glowing neon effect and auto-filled name, title, company, phone, email.' }
  ],
  'wood_burn': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the wood burn logo centered on textured wood surface, no additional elements.' },
    { id: 'sign', label: 'TABELA', promptValue: 'Mockup Context: Display the wood burn logo on a rustic wooden signboard hanging outdoors with chains.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the wood burn logo on a warm rustic corporate presentation slide with wood texture background.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the wood burn logo on a wood-textured business card with auto-filled elegant name, title, company, phone, email.' }
  ],
  'gold_foil': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the gold foil logo centered on dark premium background, no additional elements.' },
    { id: 'packaging', label: 'AMBALAJ', promptValue: 'Mockup Context: Display the gold foil logo on luxury product packaging box with realistic embossing.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the gold foil logo on an elegant black corporate presentation slide with gold accents.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the gold foil logo on premium black business card with shiny gold effect and auto-filled luxury name, title, company, phone, email.' }
  ],
  'app_icon': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the app icon in squircle shape centered on white background, no additional elements.' },
    { id: 'homescreen', label: 'ANA EKRAN', promptValue: 'Mockup Context: Display the app icon on a smartphone home screen surrounded by other apps.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the app icon prominently on a tech corporate presentation slide with modern layout.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the app icon on a modern minimalist business card with auto-filled name, title, company, phone, email.' }
  ],
  'emblem': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the emblem badge centered on clean background, no additional elements.' },
    { id: 'shield', label: 'KALKAN', promptValue: 'Mockup Context: Display the emblem as a metallic shield mounted on a wall.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the emblem on a professional corporate presentation slide with subtle background.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the emblem on an elegant business card with auto-filled name, title, company, phone, email in matching style.' }
  ],
  'heraldry_crest': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the heraldic crest centered on white background, no additional elements.' },
    { id: 'banner', label: 'BAYRAK', promptValue: 'Mockup Context: Display the crest on a waving medieval-style banner or flag.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the crest on a formal corporate presentation slide with rich colors.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display the crest on a premium business card with auto-filled traditional name, title, company, phone, email.' }
  ],
  'art_deco': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the Art Deco logo on black background, no additional elements.' },
    { id: 'facade', label: 'BİNA CEPHE', promptValue: 'Mockup Context: Display the logo on a 1920s Art Deco building facade sign.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place the Art Deco logo on a luxurious gold-black presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on gold-black business card with auto-filled elegant name, title, company, phone, email.' }
  ],
  'bauhaus': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the Bauhaus logo on white background, no additional elements.' },
    { id: 'poster', label: 'AFİŞ', promptValue: 'Mockup Context: Display as a minimalist Bauhaus-style exhibition poster.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on clean geometric corporate presentation slide with primary colors.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on primary-color minimalist business card with auto-filled name, title, company, phone, email.' }
  ],
  'botanical': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the botanical illustration logo on white, no additional elements.' },
    { id: 'packaging', label: 'AMBALAJ', promptValue: 'Mockup Context: Display on natural organic product packaging or label.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on eco-friendly green corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on textured paper business card with auto-filled name, title, company, phone, email.' }
  ],
  'brutalism': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the brutalist logo on concrete background, no additional elements.' },
    { id: 'website', label: 'WEB SİTE', promptValue: 'Mockup Context: Display on raw brutalist website header with high contrast.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on bold high-contrast corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on thick brutalist-style business card with auto-filled bold name, title, company, phone, email.' }
  ],
  'claymorphism': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the claymorphism logo on pastel background, no additional elements.' },
    { id: 'app_ui', label: 'UYGULAMA ARAYÜZ', promptValue: 'Mockup Context: Display as 3D button or card in modern soft UI design.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on soft pastel corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on rounded soft clay-textured business card with auto-filled name, title, company, phone, email.' }
  ],
  'embossed_leather': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the embossed leather logo on leather texture, no additional elements.' },
    { id: 'wallet', label: 'CÜZDAN', promptValue: 'Mockup Context: Display embossed on premium leather wallet.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on luxury leather-themed corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on leather-textured business card with auto-filled name, title, company, phone, email.' }
  ],
  'distorted_type': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the distorted typography logo, no additional elements.' },
    { id: 'poster', label: 'AFİŞ', promptValue: 'Mockup Context: Display on experimental psychedelic poster.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on creative distorted corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on wavy business card with auto-filled distorted name, title, company, phone, email.' }
  ],
  'tattoo_style': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the old school tattoo logo, no additional elements.' },
    { id: 'skin', label: 'DÖVME', promptValue: 'Mockup Context: Display as tattoo on skin with realistic shading.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on bold tattoo-style corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on vintage tattoo business card with auto-filled name, title, company, phone, email.' }
  ],
  'eco_organic': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the eco organic logo on natural background, no additional elements.' },
    { id: 'label', label: 'ETİKET', promptValue: 'Mockup Context: Display on recycled paper product label.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on green eco corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on recycled paper business card with auto-filled name, title, company, phone, email.' }
  ],
  'hand_drawn': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the hand-drawn logo, no additional elements.' },
    { id: 'notebook', label: 'DEFTER', promptValue: 'Mockup Context: Display as sketch in open notebook.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on artisanal corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on sketch-style business card with auto-filled name, title, company, phone, email.' }
  ],
  'hand_drawn_sketch': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the charcoal sketch logo, no additional elements.' },
    { id: 'paper', label: 'KAĞIT', promptValue: 'Mockup Context: Display as pencil sketch on textured paper.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on artistic sketch corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on sketch-textured business card with auto-filled name, title, company, phone, email.' }
  ],
  'real_estate': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the real estate logo, no additional elements.' },
    { id: 'signboard', label: 'PANOO', promptValue: 'Mockup Context: Display on real estate for-sale signboard.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on professional real estate corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on elegant real estate business card with auto-filled name, title, company, phone, email.' }
  ],
  'mascot_esports': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the e-sports mascot logo, no additional elements.' },
    { id: 'jersey', label: 'FORMA', promptValue: 'Mockup Context: Display on gaming team jersey.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on vibrant gaming corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on bold e-sports business card with auto-filled name, title, company, phone, email.' }
  ],
  'tribal_ethno': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the tribal ethnic logo, no additional elements.' },
    { id: 'totem', label: 'TOTEM', promptValue: 'Mockup Context: Display as carved on wooden totem pole.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on cultural corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on ethnic-pattern business card with auto-filled name, title, company, phone, email.' }
  ],
  'brush_stroke': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the brush stroke logo, no additional elements.' },
    { id: 'canvas', label: 'TUVAL', promptValue: 'Mockup Context: Display as painted on artist canvas.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on dynamic brush corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on textured brush business card with auto-filled name, title, company, phone, email.' }
  ],
  'hud_scifi': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the sci-fi HUD logo, no additional elements.' },
    { id: 'interface', label: 'ARAYÜZ', promptValue: 'Mockup Context: Display as holographic HUD interface element.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on futuristic tech corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on glowing sci-fi business card with auto-filled name, title, company, phone, email.' }
  ],
  'geometric_abstract': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the geometric abstract logo, no additional elements.' },
    { id: 'pattern', label: 'DESEN', promptValue: 'Mockup Context: Display as repeating geometric pattern background.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on balanced corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on geometric business card with auto-filled name, title, company, phone, email.' }
  ],
  'glassmorphism': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the glassmorphism logo, no additional elements.' },
    { id: 'ui_card', label: 'UI KART', promptValue: 'Mockup Context: Display as frosted glass card in modern UI.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on blurred glass corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on frosted glass-style business card with auto-filled name, title, company, phone, email.' }
  ],
  'gothic_blackletter': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the gothic blackletter logo, no additional elements.' },
    { id: 'book_cover', label: 'KİTAP KAPAĞI', promptValue: 'Mockup Context: Display on medieval book cover.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on dark gothic corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on black gothic business card with auto-filled name, title, company, phone, email.' }
  ],
  'letter_stack': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the letter stack logo, no additional elements.' },
    { id: 'monogram', label: 'MONOGRAM', promptValue: 'Mockup Context: Display as stacked initials on fabric or wall.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on Swiss-style corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on bold typography business card with auto-filled name, title, company, phone, email.' }
  ],
  'calligraphy': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the calligraphy logo, no additional elements.' },
    { id: 'invitation', label: 'DAVETİYE', promptValue: 'Mockup Context: Display on elegant wedding invitation card.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on sophisticated corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on script business card with auto-filled name, title, company, phone, email.' }
  ],
  'holographic': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the holographic logo, no additional elements.' },
    { id: 'card', label: 'KART', promptValue: 'Mockup Context: Display on iridescent holographic trading card.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on shiny corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on holographic foil business card with auto-filled name, title, company, phone, email.' }
  ],
  'signature': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the signature logo, no additional elements.' },
    { id: 'document', label: 'BELGE', promptValue: 'Mockup Context: Display as signed at bottom of document.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on personal brand corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on elegant signature business card with auto-filled name, title, company, phone, email.' }
  ],
  'nordic': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the Nordic logo, no additional elements.' },
    { id: 'packaging', label: 'AMBALAJ', promptValue: 'Mockup Context: Display on minimalist Nordic product packaging.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on clean Scandi corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on minimalist Nordic business card with auto-filled name, title, company, phone, email.' }
  ],
  'paper_cutout': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the paper cutout logo, no additional elements.' },
    { id: 'layers', label: 'KATMAN', promptValue: 'Mockup Context: Display with visible stacked paper layers and shadows.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on 3D paper corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on multi-layer paper business card with auto-filled name, title, company, phone, email.' }
  ],
  'coffee_roaster': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the coffee roaster logo, no additional elements.' },
    { id: 'bag', label: 'POŞET', promptValue: 'Mockup Context: Display on coffee bean bag packaging.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on warm hipster corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on vintage coffee business card with auto-filled name, title, company, phone, email.' }
  ],
  'kawaii': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the kawaii logo, no additional elements.' },
    { id: 'sticker', label: 'STİCKER', promptValue: 'Mockup Context: Display as cute sticker on laptop or phone.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on pastel cute corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on rounded kawaii business card with auto-filled name, title, company, phone, email.' }
  ],
  'crypto_token': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the crypto token logo, no additional elements.' },
    { id: 'coin', label: 'MADENİ PARA', promptValue: 'Mockup Context: Display as 3D spinning cryptocurrency coin.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on blockchain corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on metallic crypto business card with auto-filled name, title, company, phone, email.' }
  ],
  'liquid_metal': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the liquid metal logo, no additional elements.' },
    { id: 'y2k', label: 'Y2K', promptValue: 'Mockup Context: Display with melting chrome effects on streetwear.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on futuristic Y2K corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on chrome business card with auto-filled name, title, company, phone, email.' }
  ],
  'low_poly': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the low poly logo, no additional elements.' },
    { id: 'crystal', label: 'KRİSTAL', promptValue: 'Mockup Context: Display as faceted crystal object.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on geometric low poly corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on faceted business card with auto-filled name, title, company, phone, email.' }
  ],
  'mascot': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the mascot logo, no additional elements.' },
    { id: 'character', label: 'KARAKTER', promptValue: 'Mockup Context: Display full mascot character pose.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on fun brand corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on illustrated business card with auto-filled name, title, company, phone, email.' }
  ],
  'blueprint_cad': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the blueprint logo, no additional elements.' },
    { id: 'drawing', label: 'ÇİZİM', promptValue: 'Mockup Context: Display as technical CAD drawing sheet.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on engineering corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on blueprint-style business card with auto-filled name, title, company, phone, email.' }
  ],
  'medical_cross': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the medical logo, no additional elements.' },
    { id: 'sign', label: 'TABELA', promptValue: 'Mockup Context: Display on clinic or hospital sign.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on clean medical corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on professional medical business card with auto-filled name, title, company, phone, email.' }
  ],
  'marble': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the marble texture logo, no additional elements.' },
    { id: 'sculpture', label: 'HEYKEL', promptValue: 'Mockup Context: Display carved into marble sculpture.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on luxury marble corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on marble-textured business card with auto-filled name, title, company, phone, email.' }
  ],
  'minimal': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the minimalist logo, no additional elements.' },
    { id: 'mark', label: 'MARK', promptValue: 'Mockup Context: Display as simple icon mark.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on ultra-clean corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on minimalist business card with auto-filled name, title, company, phone, email.' }
  ],
  'minimal_line': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the monoline logo, no additional elements.' },
    { id: 'line_art', label: 'ÇİZGİ SANATI', promptValue: 'Mockup Context: Display as continuous line drawing.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on elegant line corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on monoline business card with auto-filled name, title, company, phone, email.' }
  ],
  'tech_gradient': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the tech gradient logo, no additional elements.' },
    { id: 'app', label: 'UYGULAMA', promptValue: 'Mockup Context: Display in modern SaaS app interface.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on vibrant gradient corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on gradient business card with auto-filled name, title, company, phone, email.' }
  ],
  'monogram': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the luxury monogram logo, no additional elements.' },
    { id: 'fabric', label: 'KUMAŞ', promptValue: 'Mockup Context: Display embroidered on luxury fabric.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on high-end corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on luxury monogram business card with auto-filled name, title, company, phone, email.' }
  ],
  'mosaic': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the mosaic logo, no additional elements.' },
    { id: 'wall', label: 'DUVAR', promptValue: 'Mockup Context: Display as ancient mosaic wall art.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on colorful mosaic corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on tiled business card with auto-filled name, title, company, phone, email.' }
  ],
  'rubber_stamp': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the rubber stamp logo, no additional elements.' },
    { id: 'paper', label: 'KAĞIT', promptValue: 'Mockup Context: Display stamped on official paper document.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on vintage corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on distressed stamp business card with auto-filled name, title, company, phone, email.' }
  ],
  'negative_space': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the negative space logo, no additional elements.' },
    { id: 'clever', label: 'AKILLI TASARIM', promptValue: 'Mockup Context: Display with highlighted negative space effect.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on smart corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on negative space business card with auto-filled name, title, company, phone, email.' }
  ],
  'neon_tube': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the neon tube logo on dark, no additional elements.' },
    { id: 'sign', label: 'TABELA', promptValue: 'Mockup Context: Display as glowing neon sign on brick wall.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on dark nightlife corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on glowing neon business card with auto-filled name, title, company, phone, email.' }
  ],
  'origami': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the origami logo, no additional elements.' },
    { id: 'paper', label: 'KAĞIT', promptValue: 'Mockup Context: Display as folded paper model on table.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on clean origami corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on folded-style business card with auto-filled name, title, company, phone, email.' }
  ],
  'pixel_art': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the pixel art logo, no additional elements.' },
    { id: 'game', label: 'OYUN', promptValue: 'Mockup Context: Display in retro game screen.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on pixel corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on pixelated business card with auto-filled name, title, company, phone, email.' }
  ],
  'pop_art': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the pop art logo, no additional elements.' },
    { id: 'comic', label: 'ÇİZGİ ROMAN', promptValue: 'Mockup Context: Display in comic book panel style.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on bold pop art corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on halftone business card with auto-filled name, title, company, phone, email.' }
  ],
  'cyber_glitch': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the cyber glitch logo, no additional elements.' },
    { id: 'screen', label: 'EKRAN', promptValue: 'Mockup Context: Display with glitch effect on computer screen.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on dystopian cyber corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on glitched business card with auto-filled name, title, company, phone, email.' }
  ],
  'streetwear_graffiti': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the graffiti logo, no additional elements.' },
    { id: 'wall', label: 'DUVAR', promptValue: 'Mockup Context: Display sprayed on urban brick wall.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on grunge street corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on graffiti-style business card with auto-filled name, title, company, phone, email.' }
  ],
  'abstract': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the abstract logo, no additional elements.' },
    { id: 'mark', label: 'MARK', promptValue: 'Mockup Context: Display as conceptual corporate mark.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on modern abstract corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on abstract business card with auto-filled name, title, company, phone, email.' }
  ],
  'watercolor_splash': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the watercolor logo, no additional elements.' },
    { id: 'paper', label: 'KAĞIT', promptValue: 'Mockup Context: Display painted on watercolor paper.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on artistic watercolor corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on splashed watercolor business card with auto-filled name, title, company, phone, email.' }
  ],
  'typography': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the typography logo, no additional elements.' },
    { id: 'wordmark', label: 'KELİME MARK', promptValue: 'Mockup Context: Display as custom wordmark sign.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on typographic corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on typography-focused business card with auto-filled name, title, company, phone, email.' }
  ],
  'vintage': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the vintage logo, no additional elements.' },
    { id: 'sign', label: 'TABELA', promptValue: 'Mockup Context: Display on retro shop sign.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on textured vintage corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on distressed vintage business card with auto-filled name, title, company, phone, email.' }
  ],
  'vintage_badge': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the vintage badge logo, no additional elements.' },
    { id: 'label', label: 'ETİKET', promptValue: 'Mockup Context: Display on craft beer or whiskey label.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on ornate vintage corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on badge-style business card with auto-filled name, title, company, phone, email.' }
  ],
  'stained_glass': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the stained glass logo, no additional elements.' },
    { id: 'window', label: 'PENCERE', promptValue: 'Mockup Context: Display as church stained glass window.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on glowing corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on translucent business card with auto-filled name, title, company, phone, email.' }
  ],
  'oil_painting': [
    { id: 'logo_only', label: 'SADECE LOGO', promptValue: 'Output only the oil painting logo, no additional elements.' },
    { id: 'frame', label: 'ÇERÇEVE', promptValue: 'Mockup Context: Display in ornate gold frame on gallery wall.' },
    { id: 'presentation', label: 'SUNUM', promptValue: 'Mockup Context: Place on rich textured corporate presentation slide.' },
    { id: 'business_card', label: 'KARTVİZİT', promptValue: 'Mockup Context: Display on canvas-textured business card with auto-filled name, title, company, phone, email.' }
  ]
  };

export const PRODUCT_SHOOT_STYLES: OptionItem[] = [
{ 
        id: 'wood_table', 
        label: 'AHŞAP ZEMİN', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a rustic natural wooden table. Blurred nature background (bokeh), warm sunlight filtering through leaves (dappled light), organic and eco-friendly atmosphere, realistic contact shadows.' 
      },
      { 
        id: 'luxury_gold', 
        label: 'ALTIN VARAK', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a reflective golden surface. Background featuring blurred gold leaf textures and warm bokeh lights. Luxurious, expensive, and premium aesthetic. Sharp focus on product.' 
      },
      { 
        id: 'bathroom_shelf', 
        label: 'BANYO RAFI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a glass shelf in a modern spa-like bathroom. Soft towel and plant details in the blurred background, clean and hygienic atmosphere, bright lighting.' 
      },
      { 
        id: 'concrete_industrial', 
        label: 'BETON (ENDÜSTRİYEL)', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a raw grey concrete block. Harsh shadows, industrial warehouse background, grunge texture, minimalist streetwear or tech aesthetic.' 
      },
      { 
        id: 'studio_white', 
        label: 'BEYAZ STÜDYO', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Keep the product exactly as is but place it in a professional high-key white studio setting. Softbox lighting, soft realistic shadows on the floor, clean minimalist aesthetic, 8k resolution, commercial catalog style.' 
      },
      { 
        id: 'ice_freeze', 
        label: 'BUZ & DONMA', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a block of ice or surrounded by crushed ice. Frost effect on the product surface, cold blue lighting, refreshing and cooling atmosphere. High contrast.' 
      },
      { 
        id: 'floral_garden', 
        label: 'ÇİÇEK BAHÇESİ', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product nestled among fresh pastel-colored flowers (roses, peonies). Soft spring sunlight, dreamy romantic atmosphere, macro photography style with depth of field.' 
      },
      { 
        id: 'mountain_rock', 
        label: 'DAĞ KAYALIKLARI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a natural granite rock with a blurred mountain landscape in the background. Cold fresh air vibe, outdoor adventure aesthetic, natural daylight.' 
      },
      { 
        id: 'disco_party', 
        label: 'DİSKO/PARTİ', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product in a vibrant night party setting. Glitter and confetti in the background, colorful disco lights reflecting on the product, energetic and fun atmosphere.' 
      },
      { 
        id: 'nature_podium', 
        label: 'DOĞA PODYUM', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a stone podium surrounded by lush green tropical leaves. Sunlight filtering through foliage, organic skincare aesthetic, fresh and natural look.' 
      },
      { 
        id: 'galaxy_space', 
        label: 'GALAKSİ/UZAY', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Levitate the product in deep space. Background filled with stars, nebulae, and purple cosmic dust. Cinematic sci-fi lighting, futuristic and mysterious vibe.' 
      },
      { 
        id: 'graffiti_wall', 
        label: 'GRAFFITI DUVAR', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on an asphalt surface in front of a colorful urban graffiti wall. Street culture vibe, hip-hop aesthetic, vibrant daylight.' 
      },
      { 
        id: 'sunset_beach', 
        label: 'GÜNBATIMI KUMSAL', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on fine golden sand. Sunset horizon in the background with soft ocean waves. Golden hour lighting, warm orange tones, summer holiday vibe.' 
      },
      { 
        id: 'pool_side', 
        label: 'HAVUZ KENARI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on the edge of a swimming pool. Bright blue water ripples in the background, hard summer sunlight, sharp shadows, refreshing vacation vibe.' 
      },
      { 
        id: 'silk_drape', 
        label: 'İPEK KUMAŞ', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product resting on luxurious flowing silk or satin fabric. The fabric should have elegant folds and ripples. Soft studio lighting, realistic fabric texture, expensive and sensual atmosphere.' 
      },
      { 
        id: 'breakfast_table', 
        label: 'KAHVALTI SOFRASI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a morning breakfast table. Surrounded by coffee, croissants, and sunlight. Cozy lifestyle aesthetic, warm and inviting atmosphere.' 
      },
      { 
        id: 'studio_dark', 
        label: 'KARANLIK LÜKS', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product in a luxury dark mode environment. Matte black background, dramatic rim lighting highlighting the product edges, elegant reflection on a glossy black surface, premium commercial look.' 
      },
      { 
        id: 'velvet_red', 
        label: 'KIRMIZI KADİFE', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on deep red velvet fabric. Soft, rich texture, dramatic spotlighting, royal and romantic aesthetic. Perfect for jewelry or perfume.' 
      },
      { 
        id: 'marble_podium', 
        label: 'MERMER PODYUM', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a clean white marble podium. Minimalist architectural background, soft daylight, sharp focus on the product, high-end cosmetic or jewelry advertisement aesthetic.' 
      },
      { 
        id: 'kitchen_counter', 
        label: 'MUTFAK TEZGAHI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a modern clean kitchen counter. Blurred background of a luxury kitchen interior, warm ambient lighting, lifestyle context, photorealistic depth of field.' 
      },
      { 
        id: 'neon_cyber', 
        label: 'NEON SİBER', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a wet reflective street surface at night. Illuminate it with vibrant pink and blue neon lights (cyberpunk style). Futuristic tech atmosphere, high contrast, volumetric fog.' 
      },
      { 
        id: 'autumn_leaves', 
        label: 'SONBAHAR YAPRAKLARI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a bed of dry orange and brown autumn leaves. Soft fall sunlight, warm cozy tones, seasonal aesthetic.' 
      },
      { 
        id: 'abstract_pastel', 
        label: 'SOYUT PASTEL', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product in a minimal abstract composition with soft pastel colored shapes (pink, mint, yellow). Soft diffused lighting, clean modern art direction.' 
      },
      { 
        id: 'water_splash', 
        label: 'SU EFEKTİ', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Create a dynamic high-speed photography scene. The product is surrounded by crystal clear water splashes and droplets. Fresh, clean, and energetic vibe. Blue tones, advertising quality.' 
      },
      { 
        id: 'tech_grid', 
        label: 'TEKNOLOJİK IZGARA', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a glowing futuristic grid surface. Dark background with digital data lines, blue tech lighting, suitable for gadgets and electronics.' 
      },
      { 
        id: 'terrazzo_stone', 
        label: 'TERRAZZO ZEMİN', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product on a trendy colorful terrazzo stone surface. Hard sunlight casting sharp shadows, modern interior design aesthetic.' 
      },
      { 
        id: 'floating_geo', 
        label: 'UÇAN GEOMETRİ', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Levitate the product in the air surrounded by abstract 3D geometric shapes (spheres, cubes). Pastel color palette, soft anti-gravity aesthetic, modern art direction, clean 3D render style.' 
      },
      { 
        id: 'christmas', 
        label: 'YILBAŞI KONSEPTİ', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product in a festive Christmas setting. Surrounded by pine cones, red ribbons, and blurred fairy lights (bokeh) in the background. Warm holiday atmosphere.' 
      },
      { 
        id: 'zen_stones', 
        label: 'ZEN TAŞLARI', 
        promptValue: 'PRODUCT PHOTOGRAPHY TASK: Place the product balanced on smooth black spa stones (zen stones). Water ripples in the background, bamboo details, calm and relaxing atmosphere.' 
      },
      ];

// --- PATTERN DATA ---
export const PATTERN_MATERIALS: OptionItem[] = [
{ 
        id: 'wood', 
        label: 'AHŞAP (DOĞAL)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Natural Wood. Apply realistic wood grain texture, polished finish, and carpentry details. Look like a wooden carving.' 
      },
      { 
        id: 'gold', 
        label: 'ALTIN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Solid Gold. Apply a highly reflective metallic yellow surface, expensive jewelry aesthetic, shiny and polished look.' 
      },
      { 
        id: 'aluminum', 
        label: 'ALÜMİNYUM', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Brushed Aluminum. Apply a matte silver industrial metal texture, lightweight and modern tech look.' 
      },
      { 
        id: 'fire_magma', 
        label: 'ATEŞ / LAV', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject into a form made of Fire and Magma. Glowing cracks, burning flames surface, volcanic rock texture, emitting light and heat.' 
      },
      { 
        id: 'copper', 
        label: 'BAKIR', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Polished Copper. Apply a reddish-orange metallic finish, conductive metal look, warm reflections.' 
      },
      { 
        id: 'bamboo', 
        label: 'BAMBU', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Bamboo. Apply segmented green or beige plant stalks texture, organic and fibrous look.' 
      },
      { 
        id: 'concrete', 
        label: 'BETON', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Raw Concrete. Apply a grey, porous cement texture with imperfections, brutalist architectural aesthetic.' 
      },
      { 
        id: 'bronze', 
        label: 'BRONZ', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Aged Bronze. Apply a dark brownish-gold metal texture, slight patina or oxidation, statue aesthetic.' 
      },
      { 
        id: 'ice', 
        label: 'BUZ', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Translucent Ice. Apply a frosty, frozen texture with blueish tints, cold atmosphere, and subsurface light scattering.' 
      },
      { 
        id: 'glass', 
        label: 'CAM (ŞEFFAF)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Transparent Glass. Apply refractive and reflective properties, fragile crystal look, smooth surface.' 
      },
      { 
        id: 'mud_clay', 
        label: 'ÇAMUR / KİL', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Wet Clay or Mud. Apply a moldable, earthy texture, matte finish, pottery studio aesthetic.' 
      },
      { 
        id: 'steel', 
        label: 'ÇELİK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Stainless Steel. Apply a hard, grey metallic surface, sharp reflections, industrial strength look.' 
      },
      { 
        id: 'chocolate', 
        label: 'ÇİKOLATA', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Melting Milk Chocolate. Apply a smooth, brown, edible-looking texture with a glossy finish.' 
      },
      { 
        id: 'grass_moss', 
        label: 'ÇİM / YOSUN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Organic Grass and Moss. Cover the surface with green vegetation, nature-overtaking aesthetic, eco-friendly look.' 
      },
      { 
        id: 'neoprene', 
        label: 'DALGIÇ KUMAŞI', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Neoprene. Apply a smooth, synthetic rubber-like fabric texture, matte finish, scuba gear aesthetic.' 
      },
      { 
        id: 'lace', 
        label: 'DANTEL', 
        promptValue: 'TRANSFORMATION TASK: Apply an intricate Lace Fabric texture to the subject. Detailed floral patterns, see-through mesh holes, delicate textile aesthetic.' 
      },
      { 
        id: 'leather', 
        label: 'DERİ', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Genuine Leather. Apply realistic skin grain texture, slight sheen, and stitching details. Premium leather goods look.' 
      },
      { 
        id: 'diamond', 
        label: 'ELMAS / KRİSTAL', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Faceted Diamond/Crystal. Apply high light refraction, prismatic sparkles, clear and hard luxury stone look.' 
      },
      { 
        id: 'corduroy', 
        label: 'FİTİLLİ KADİFE', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Corduroy Fabric. Apply vertical ridged velvet texture, vintage textile look, soft touch.' 
      },
      { 
        id: 'foil', 
        label: 'FOLYO (ALÜMİNYUM)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Crinkled Aluminum Foil. Apply a very shiny, thin metallic texture with many small creases and light reflections.' 
      },
      { 
        id: 'silver', 
        label: 'GÜMÜŞ', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Sterling Silver. Apply a bright white-grey metallic finish, precious metal aesthetic, clean polish.' 
      },
      { 
        id: 'wicker', 
        label: 'HASIR / RATTAN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Woven Wicker/Rattan. Apply a basket-weave texture, dried plant fiber look, summer furniture aesthetic.' 
      },
      { 
        id: 'holographic', 
        label: 'HOLOGRAFİK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Iridescent Holographic Foil. Apply a rainbow color-shifting surface, futuristic cyber aesthetic, shiny plastic look.' 
      },
      { 
        id: 'silk', 
        label: 'İPEK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Pure Silk. Apply a smooth, flowing fabric texture with soft luster and elegant drapery.' 
      },
      { 
        id: 'jelly', 
        label: 'JÖLE / SLIME', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Translucent Jelly. Apply a squishy, semi-transparent, glossy texture. Gummy candy aesthetic.' 
      },
      { 
        id: 'velvet', 
        label: 'KADİFE', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Plush Velvet. Apply a soft, light-absorbing fabric texture with rich color depth and fuzzy edges.' 
      },
      { 
        id: 'paper', 
        label: 'KAĞIT / KARTON', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Paper or Cardboard. Apply a matte, fibrous texture, origami folds, craft supply aesthetic.' 
      },
      { 
        id: 'carbon', 
        label: 'KARBON FİBER', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Carbon Fiber. Apply the signature woven black and grey pattern, high-tech automotive finish, lightweight and strong look.' 
      },
      { 
        id: 'cashmere', 
        label: 'KAŞMİR', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Soft Cashmere Wool. Apply a luxurious, fuzzy, fine-texture fabric look. Expensive sweater aesthetic.' 
      },
      { 
        id: 'felt', 
        label: 'KEÇE', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Compressed Felt. Apply a matte, non-woven wool texture, fuzzy surface, craft material look.' 
      },
      { 
        id: 'linen', 
        label: 'KETEN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Natural Linen. Apply a coarse weave fabric texture, matte finish, organic and breathable textile look.' 
      },
      { 
        id: 'denim', 
        label: 'KOT (DENIM)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Blue Denim Jeans fabric. Apply the diagonal twill weave texture, indigo color variations, and visible orange stitching.' 
      },
      { 
        id: 'foam', 
        label: 'KÖPÜK (SÜNGER)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Soft Foam/Sponge. Apply a porous, airy texture, matte finish, squishy appearance.' 
      },
      { 
        id: 'chrome', 
        label: 'KROM', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Mirror Chrome. Apply a perfectly reflective silver surface, liquid metal look, futuristic aesthetic.' 
      },
      { 
        id: 'fur', 
        label: 'KÜRK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Thick Fur. Apply realistic hair simulation, fluffy and soft texture, warm animalistic look.' 
      },
      { 
        id: 'rubber', 
        label: 'LASTİK / KAUÇUK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Matte Rubber. Apply a dark, non-reflective, grip-texture surface. Tire or shoe sole aesthetic.' 
      },
      { 
        id: 'latex', 
        label: 'LATEKS', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Shiny Latex. Apply a high-gloss plastic surface, tight reflections, synthetic fetish fashion look.' 
      },
      { 
        id: 'cork', 
        label: 'MANTAR', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Natural Cork. Apply a porous, brown, compressed wood texture. Wine stopper aesthetic.' 
      },
      { 
        id: 'marble', 
        label: 'MERMER', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Polished Marble. Apply natural stone veins, smooth cold surface, and architectural stone aesthetic.' 
      },
      { 
        id: 'mosaic', 
        label: 'MOZAİK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Mosaic Tiles. Apply a pattern of small colored ceramic or glass tiles forming the shape of the subject.' 
      },
      { 
        id: 'nylon', 
        label: 'NAYLON', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Synthetic Nylon. Apply a smooth, slightly shiny, windbreaker jacket texture. Sportswear aesthetic.' 
      },
      { 
        id: 'neon', 
        label: 'NEON IŞIK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject into a structure made of Neon Light Tubes. Glowing bright colors, glass tube texture, emitting light in darkness.' 
      },
      { 
        id: 'obsidian', 
        label: 'OBSİDYEN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Black Obsidian. Apply a dark, glassy, volcanic rock texture with sharp edges and high reflectivity.' 
      },
      { 
        id: 'knitted', 
        label: 'ÖRGÜ / YÜN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Knitted Wool. Apply a cozy sweater texture with visible yarn loops and crochet patterns.' 
      },
      { 
        id: 'cotton', 
        label: 'PAMUK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into High-Quality Cotton. Apply a soft matte fabric finish, smooth textile weave, clean and natural look.' 
      },
      { 
        id: 'rust', 
        label: 'PASLI METAL', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Rusted Iron. Apply a corroded, orange-brown flaky texture, old and weathered industrial look.' 
      },
      { 
        id: 'flannel', 
        label: 'PAZEN (ODUNCU)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Flannel Fabric. Apply a soft brushed texture, usually with a plaid/checkered pattern, cozy feel.' 
      },
      { 
        id: 'plastic', 
        label: 'PLASTİK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Glossy Plastic. Apply a smooth, synthetic toy-like texture with bright highlights. 3D printed object look.' 
      },
      { 
        id: 'porcelain', 
        label: 'PORSELEN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Fine Porcelain. Apply a delicate, white, glossy ceramic texture. Teacup or doll aesthetic.' 
      },
      { 
        id: 'sequins', 
        label: 'PULLU (PAYET)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Shiny Sequins. Apply a texture of overlapping small reflective discs, iridescent and glittering look.' 
      },
      { 
        id: 'satin', 
        label: 'SATEN', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Silk Satin. Apply a smooth, flowing fabric texture with high reflectivity and soft drapery folds.' 
      },
      { 
        id: 'ceramic', 
        label: 'SERAMİK', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Glazed Ceramic. Apply a smooth, fragile pottery texture with a baked finish.' 
      },
      { 
        id: 'water', 
        label: 'SU (SIVI)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject into a form made of Liquid Water. Transparent, rippling surface, droplets, dynamic fluid simulation look.' 
      },
      { 
        id: 'suede', 
        label: 'SÜET', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Soft Suede. Apply a napped leather finish, matte texture, velvety touch look.' 
      },
      { 
        id: 'chiffon', 
        label: 'ŞİFON', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Sheer Chiffon. Apply a semi-transparent, lightweight, airy fabric texture. Elegant dress aesthetic.' 
      },
      { 
        id: 'stone', 
        label: 'TAŞ (GRANİT)', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Rough Stone/Granite. Apply a hard, weathered rock texture, heavy weight appearance, statue aesthetic.' 
      },
      { 
        id: 'brick', 
        label: 'TUĞLA', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Red Brick. Apply a masonry texture with cement mortar lines, architectural construction look.' 
      },
      { 
        id: 'tulle', 
        label: 'TÜL', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Tulle/Netting. Apply a very fine mesh texture, transparent and stiff, ballerina tutu aesthetic.' 
      },
      { 
        id: 'tweed', 
        label: 'TÜVİT', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Tweed Fabric. Apply a rough, unfinished wool texture with mixed color speckles. Classic jacket aesthetic.' 
      },
      { 
        id: 'jade', 
        label: 'YEŞİM TAŞI', 
        promptValue: 'TRANSFORMATION TASK: Transform the subject\'s material into Green Jade. Apply a smooth, semi-translucent green stone texture, polished and valuable look.' 
      }
      ];

export const PATTERN_DESIGNS: OptionItem[] = [
{ 
        id: 'fire_flame', 
        label: 'ALEV / ATEŞ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Hot Rod Flame pattern. Stylized burning fire shapes wrapping around the subject. High contrast orange and yellow on black. Racing aesthetic.' 
      },
      { 
        id: 'gold_leaf', 
        label: 'ALTIN VARAK', 
        promptValue: 'TRANSFORMATION TASK: Apply a Gold Leaf pattern. Texture of flaked, crinkled gold sheets covering the surface. Luxurious and antique aesthetic.' 
      },
      { 
        id: 'argyle', 
        label: 'BAKLAVA (ARGYLE)', 
        promptValue: 'TRANSFORMATION TASK: Apply a classic Argyle pattern to the subject. Interlocking diamond shapes in contrasting colors, traditional knitwear or golf aesthetic.' 
      },
      { 
        id: 'honeycomb', 
        label: 'BAL PETEĞİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Honeycomb (Hexagonal) pattern. Repeating geometric hexagon grid wrapping the form. Beehive or sci-fi armor aesthetic.' 
      },
      { 
        id: 'baroque', 
        label: 'BAROK', 
        promptValue: 'TRANSFORMATION TASK: Apply a luxurious Baroque pattern to the subject. Intricate gold leaf scrolls, floral motifs, and ornate details. Royal and historical aesthetic.' 
      },
      { 
        id: 'tie_dye', 
        label: 'BATİK (TIE-DYE)', 
        promptValue: 'TRANSFORMATION TASK: Apply a vibrant Tie-Dye pattern to the subject. Psychedelic spiral colors, bleeding ink effect, retro 60s hippie aesthetic.' 
      },
      { 
        id: 'paint_splatter', 
        label: 'BOYA SIÇRAMASI', 
        promptValue: 'TRANSFORMATION TASK: Apply a Jackson Pollock style Paint Splatter pattern. Chaotic drips and splashes of colorful paint covering the surface. Artistic and expressive.' 
      },
      { 
        id: 'clouds', 
        label: 'BULUTLAR', 
        promptValue: 'TRANSFORMATION TASK: Apply a realistic Sky and Clouds pattern. Fluffy white clouds on a blue background wrapping around the object. Dreamy and surreal.' 
      },
      { 
        id: 'azulejo', 
        label: 'ÇİNİ (AZULEJO)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Blue and White Ceramic Tile (Azulejo) pattern. Intricate geometric and floral glazed tile motifs. Mediterranean aesthetic.' 
      },
      { 
        id: 'floral', 
        label: 'ÇİÇEKLİ (FLORAL)', 
        promptValue: 'TRANSFORMATION TASK: Apply a dense Floral pattern. Blooming flowers, leaves, and vines covering the surface. Romantic and natural aesthetic.' 
      },
      { 
        id: 'stripes', 
        label: 'ÇİZGİLİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Striped pattern. Parallel lines of varying thickness wrapping around the form. Nautical or modern graphic aesthetic.' 
      },
      { 
        id: 'checkered', 
        label: 'DAMA TAHTASI', 
        promptValue: 'TRANSFORMATION TASK: Apply a classic Checkered pattern. Black and white squares arranged in a grid. Racing flag or ska music aesthetic.' 
      },
      { 
        id: 'damask', 
        label: 'DAMASK', 
        promptValue: 'TRANSFORMATION TASK: Apply a Damask luxury pattern. Reversible figured fabric style with elaborate floral motifs. Wallpaper or upholstery aesthetic.' 
      },
      { 
        id: 'lace', 
        label: 'DANTEL', 
        promptValue: 'TRANSFORMATION TASK: Apply an intricate Lace Fabric pattern. Detailed floral patterns, see-through mesh holes, delicate textile aesthetic.' 
      },
      { 
        id: 'circuit', 
        label: 'DEVRE KARTI (TECH)', 
        promptValue: 'TRANSFORMATION TASK: Apply an Electronic Circuit Board pattern. Gold and green metallic traces, microchip details. Cyberpunk and technology aesthetic.' 
      },
      { 
        id: 'plaid', 
        label: 'EKOSE (PLAID)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Tartan Plaid pattern. Intersecting vertical and horizontal bands of color. Scottish kilt or flannel shirt aesthetic.' 
      },
      { 
        id: 'galaxy', 
        label: 'GALAKSİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Deep Space Galaxy pattern. Stars, nebulae, and cosmic dust covering the object. Sci-fi and mystical aesthetic.' 
      },
      { 
        id: 'newspaper', 
        label: 'GAZETE KAĞIDI', 
        promptValue: 'TRANSFORMATION TASK: Apply a Vintage Newspaper print pattern. Black and white text columns, headlines, and old photos wrapping the subject. Grunge aesthetic.' 
      },
      { 
        id: 'geometric', 
        label: 'GEOMETRİK', 
        promptValue: 'TRANSFORMATION TASK: Apply a Modern Geometric pattern. Triangles, hexagons, and circles arranged in a stylish composition. Memphis design style.' 
      },
      { 
        id: 'glitch', 
        label: 'GLITCH (BOZUK)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Digital Glitch pattern. Pixel sorting, data corruption visual effects, RGB split. Cyberpunk and hacker aesthetic.' 
      },
      { 
        id: 'graffiti', 
        label: 'GRAFFITI', 
        promptValue: 'TRANSFORMATION TASK: Apply an Urban Graffiti pattern. Wildstyle lettering, spray paint texture, street art tags covering the surface. Hip-hop culture aesthetic.' 
      },
      { 
        id: 'gradient', 
        label: 'GRADYAN (GEÇİŞLİ)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Smooth Color Gradient pattern. Seamless transition between two or more vibrant colors (e.g., sunset hues). Modern UI aesthetic.' 
      },
      { 
        id: 'map_topo', 
        label: 'HARİTA / TOPOĞRAFYA', 
        promptValue: 'TRANSFORMATION TASK: Apply a Topographic Map pattern. Contoured lines representing elevation, vintage world map texture. Adventure and travel aesthetic.' 
      },
      { 
        id: 'skeleton', 
        label: 'İSKELET / KEMİK', 
        promptValue: 'TRANSFORMATION TASK: Apply a Skeleton X-Ray pattern. Bone structures visible on the surface, ribcage and joints. Goth or medical aesthetic.' 
      },
      { 
        id: 'camouflage', 
        label: 'KAMUFLAJ (ASKERİ)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Military Camouflage pattern. Classic woodland or desert camo shapes (green, brown, beige) wrapping the subject. Tactical look.' 
      },
      { 
        id: 'carbon_pattern', 
        label: 'KARBON LİFİ DESENİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Carbon Fiber visual pattern. Diagonal woven grid texture in black and grey. High-performance racing aesthetic.' 
      },
      { 
        id: 'houndstooth', 
        label: 'KAZ AYAĞI', 
        promptValue: 'TRANSFORMATION TASK: Apply a classic Houndstooth (Pied-de-Poule) pattern. Broken check abstract shapes in black and white. Elegant fashion aesthetic.' 
      },
      { 
        id: 'kilim', 
        label: 'KİLİM (ETNİK)', 
        promptValue: 'TRANSFORMATION TASK: Apply a traditional Turkish/Anatolian Kilim pattern. Geometric ethnic motifs, woven texture look, rich red and earth tones. Cultural aesthetic.' 
      },
      { 
        id: 'skulls', 
        label: 'KURU KAFA', 
        promptValue: 'TRANSFORMATION TASK: Apply a Skull and Bones pattern. Repeated skull motifs covering the surface. Rock n roll, pirate, or gothic aesthetic.' 
      },
      { 
        id: 'animal_leopard', 
        label: 'LEOPAR DESENİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Leopard Skin pattern. Rosette spots in black and gold wrapping the subject. Wild animal print aesthetic.' 
      },
      { 
        id: 'mandala', 
        label: 'MANDALA', 
        promptValue: 'TRANSFORMATION TASK: Apply a Spiritual Mandala pattern. Circular symmetric diagrams with intricate details. Bohemian and yoga aesthetic.' 
      },
      { 
        id: 'marble_vein', 
        label: 'MERMER DAMARLARI', 
        promptValue: 'TRANSFORMATION TASK: Apply a Marble Vein pattern. Fluid stone textures and cracks covering the surface. Luxury interior design aesthetic.' 
      },
      { 
        id: 'fruit', 
        label: 'MEYVE DESENİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Cute Fruit pattern. Repeating illustrations of strawberries, lemons, or cherries. Fresh and playful summer aesthetic.' 
      },
      { 
        id: 'mosaic', 
        label: 'MOZAİK', 
        promptValue: 'TRANSFORMATION TASK: Apply a Mosaic pattern. Small colored tiles forming a larger image or abstract texture. Ancient roman or byzantine aesthetic.' 
      },
      { 
        id: 'neon', 
        label: 'NEON IŞIKLAR', 
        promptValue: 'TRANSFORMATION TASK: Apply a Neon Light Grid pattern. Glowing lines and geometric shapes emitting light. Synthwave and retro-futuristic aesthetic.' 
      },
      { 
        id: 'polka_dot', 
        label: 'PUANTİYE', 
        promptValue: 'TRANSFORMATION TASK: Apply a Polka Dot pattern. Regular array of filled circles on a contrasting background. Retro 50s fashion aesthetic.' 
      },
      { 
        id: 'glitter', 
        label: 'SİMLİ / PARILTI', 
        promptValue: 'TRANSFORMATION TASK: Apply a Glitter Sparkle pattern. Dense texture of tiny reflective particles, shiny and glamorous. Disco aesthetic.' 
      },
      { 
        id: 'abstract_art', 
        label: 'SOYUT SANAT', 
        promptValue: 'TRANSFORMATION TASK: Apply a colorful Abstract Art pattern to the subject\'s surface. Random brush strokes, splashes, and geometric shapes inspired by Kandinsky. Artistic and modern look.' 
      },
      { 
        id: 'sticker_bomb', 
        label: 'STICKER KAPLAMA', 
        promptValue: 'TRANSFORMATION TASK: Apply a Sticker Bomb pattern. Hundreds of overlapping colorful stickers, logos, and cartoons covering the surface. JDM car culture aesthetic.' 
      },
      { 
        id: 'paisley', 
        label: 'ŞAL DESENİ (PAISLEY)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Paisley pattern. Teardrop-shaped motifs with curved upper ends. Bohemian and bandana aesthetic.' 
      },
      { 
        id: 'lightning', 
        label: 'ŞİMŞEK / YILDIRIM', 
        promptValue: 'TRANSFORMATION TASK: Apply a Lightning Bolt pattern. jagged electric bolts covering the surface. High energy and power aesthetic.' 
      },
      { 
        id: 'terrazzo', 
        label: 'TERRAZZO', 
        promptValue: 'TRANSFORMATION TASK: Apply a Terrazzo pattern. Chips of marble, quartz, and granite scattered in a cement base. Trendy interior design aesthetic.' 
      },
      { 
        id: 'crocodile', 
        label: 'TİMSAH DERİSİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Crocodile Skin pattern. Large rectangular scales texture. Expensive luxury leather aesthetic.' 
      },
      { 
        id: 'tribal', 
        label: 'TRIBAL (KABİLE)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Tribal Tattoo pattern. Bold black curved lines and spikes. Indigenous or 90s tattoo aesthetic.' 
      },
      { 
        id: 'tropical', 
        label: 'TROPİKAL', 
        promptValue: 'TRANSFORMATION TASK: Apply a Tropical Jungle pattern. Large monstera leaves, palm trees, and exotic birds. Summer vacation aesthetic.' 
      },
      { 
        id: 'snake_skin', 
        label: 'YILAN DERİSİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Snake Scale pattern. Interlocking reptile scales texture. Exotic leather aesthetic.' 
      },
      { 
        id: 'zebra', 
        label: 'ZEBRA DESENİ', 
        promptValue: 'TRANSFORMATION TASK: Apply a Zebra Stripe pattern. Black and white irregular stripes wrapping the form. High contrast animal print.' 
      },
      { 
        id: 'chevron', 
        label: 'ZİKZAK (CHEVRON)', 
        promptValue: 'TRANSFORMATION TASK: Apply a Chevron Zigzag pattern. V-shaped repeating lines. Modern home decor aesthetic.' 
      },
      { 
        id: 'chain', 
        label: 'ZİNCİR', 
        promptValue: 'TRANSFORMATION TASK: Apply a Chain Link pattern. Interlocking metal chains wrapping around the subject. Industrial or luxury fashion aesthetic.' 
      }
      ];

// --- UPDATED PATTERN CATEGORIES ---
export const PATTERN_CATEGORIES: Category[] = [
  {
    id: 'selectedMaterial',
    title: 'MATERYAL',
    items: PATTERN_MATERIALS
  },
  {
    id: 'selectedPattern',
    title: 'DESEN',
    items: PATTERN_DESIGNS
  },
  {
    id: 'selectedColor',
    title: 'ANA RENKLER',
    items: PATTERN_COLORS
  },
  {
    id: 'selectedStickerBorder',
    title: 'KENARLIK',
    items: STICKER_BORDERS
  },
  {
    id: 'selectedLogoStyle',
    title: 'LOGO TASARIM',
    items: LOGO_STYLES
  },
  {
    id: 'selectedProductShoot',
    title: 'ÜRÜN ÇEKİMİ',
    items: PRODUCT_SHOOT_STYLES
  }
];

export const VARIANT_THEMES: OptionItem[] = [
    { 
        id: 'match_color', 
        label: 'MATCH ET', 
        promptValue: 'COLOR MATCHING TASK: Transfer the color palette from the second image to the first image.' 
    },
    { 
        id: 'pastel_dream', 
        label: 'PASTEL RÜYASI', 
        promptValue: 'COLORWAY: Macaron aesthetic, soft matte finish. PALETTE: Creamy mint green, powdery baby blue, blush pink, pale lemon, lilac. STYLE: Low saturation, gentle and calming tones, airy atmosphere, spring collection vibe. ACTION: Recolor the pattern with soft, chalky pastel hues while maintaining original texture.' 
    },
    { 
        id: 'neon_cyber', 
        label: 'NEON SİBER', 
        promptValue: 'COLORWAY: High-contrast cyberpunk aesthetic. PALETTE: Electric blue, radioactive lime, hot magenta, ultraviolet on deep obsidian black background. STYLE: Bioluminescent glow, futuristic, digital art style, high energy. ACTION: Apply intense fluorescent colors against dark negative space for maximum visual impact.' 
    },
    { 
        id: 'earth_tones', 
        label: 'TOPRAK TONLARI', 
        promptValue: 'COLORWAY: Organic boho-chic aesthetic. PALETTE: Terracotta, sage green, raw umber, warm beige, ochre, sand. STYLE: Natural botanical dyes, unbleached linen texture, grounded and warm. ACTION: Transform colors into a natural, earthy palette suitable for eco-friendly home textiles.' 
    },
    { 
        id: 'monochrome', 
        label: 'MONOKROM', 
        promptValue: 'COLORWAY: Sophisticated tonal depth. PALETTE: Grayscale spectrum OR single hue (e.g., Indigo) varying from deep darks to washed-out lights. STYLE: Minimalist, architectural, high dynamic range, timeless elegance. ACTION: Remove color complexity, focus on tonal values, light, and shadow play within a single color family.' 
    },
    { 
        id: 'luxury_gold', 
        label: 'LÜKS ALTIN', 
        promptValue: 'COLORWAY: Premium opulence. PALETTE: Metallic gold foil, rich velvet black, charcoal, champagne highlights. STYLE: Art Deco influence, shiny metallic textures, high contrast, expensive look. ACTION: Infuse the pattern with gold accents and deep dark tones to create a luxury brand aesthetic.' 
    },
    { 
        id: 'vivid_pop', 
        label: 'CANLI POP ART', 
        promptValue: 'COLORWAY: Retro 60s Pop Art style. PALETTE: Primary colors (Bold Red, Sunshine Yellow, Royal Blue), clean white, jet black outlines. STYLE: High saturation, CMYK printing aesthetic, color blocking, energetic and playful. ACTION: Use bold, flat, and saturated colors to create a striking graphic impact.' 
    },
    { 
        id: 'cool_ocean', 
        label: 'SERİN OKYANUS', 
        promptValue: 'COLORWAY: Aquatic and refreshing. PALETTE: Teal, turquoise, deep navy, seafoam green, ice white. STYLE: Fluid transitions, Mediterranean vibe, cool color temperature, calming and serene. ACTION: Apply a spectrum of cool blues and greens reflecting water depths and sea glass tones.' 
    },
    { 
        id: 'sunset_warm', 
        label: 'GÜN BATIMI', 
        promptValue: 'COLORWAY: Golden hour atmosphere. PALETTE: Burnt orange, deep violet, warm magenta, golden yellow, crimson. STYLE: Gradient transitions, warm temperature, romantic and emotional vibe. ACTION: Bathe the pattern in the warm, glowing gradients of a dusk sky.' 
    },
];

export const VARIANT_STYLES: OptionItem[] = [
    { id: 'realistic', label: 'GERÇEKÇİ', promptValue: 'Photorealistic, 8K, highly detailed' },
    { id: 'digital', label: 'DİJİTAL SANAT', promptValue: 'Digital Art style, clean rendering' },
    { id: 'painting', label: 'BOYAMA', promptValue: 'Traditional Painting style' },
    { id: 'sketch', label: 'ÇİZİM', promptValue: 'Artistic Sketch style' },
    { id: 'anime', label: 'ANİME', promptValue: 'Anime / Manga style' },
    { id: 'clay', label: 'OYUN HAMURU', promptValue: 'Claymation / Plasticine style' },
];

export const VARIANT_LIGHTING: OptionItem[] = [
    { id: 'natural', label: 'DOĞAL', promptValue: 'Natural daylight' },
    { id: 'studio', label: 'STÜDYO', promptValue: 'Professional studio lighting' },
    { id: 'dramatic', label: 'DRAMATİK', promptValue: 'Dramatic high contrast lighting' },
    { id: 'neon', label: 'NEON', promptValue: 'Colored neon lights' },
    { id: 'golden', label: 'ALTIN SAAT', promptValue: 'Golden hour warm sunlight' },
];

export const VARIANT_THEME_VARIANTS: Record<string, OptionItem[]> = {
    'pastel': [
        { id: 'soft', label: 'YUMUŞAK', promptValue: 'Very soft, dreamy pastel tones' },
        { id: 'candy', label: 'ŞEKER', promptValue: 'Bright candy-colored pastels' }
    ],
    'neon': [
        { id: 'cyber', label: 'SİBER', promptValue: 'Cyberpunk blue and pink neon' },
        { id: 'retrowave', label: 'RETROWAVE', promptValue: '80s Retrowave sunset aesthetic' }
    ],
    'dark': [
        { id: 'gothic', label: 'GOTİK', promptValue: 'Gothic style, deep blacks and reds' },
        { id: 'midnight', label: 'GECE YARISI', promptValue: 'Midnight blue tones, cool darks' }
    ],
    'monochrome': [
        { id: 'bw', label: 'S/B', promptValue: 'Standard Black and White' },
        { id: 'sepia', label: 'SEPYA', promptValue: 'Old photo Sepia tone' },
        { id: 'cyanotype', label: 'MAVİ BASKI', promptValue: 'Blue Cyanotype print style' }
    ]
};

export const VARIANT_STYLE_VARIANTS: Record<string, OptionItem[]> = {
    'realistic': [
        { id: 'raw', label: 'HAM', promptValue: 'Raw camera photo, no filters' },
        { id: 'cinematic', label: 'SİNEMATİK', promptValue: 'Cinematic movie scene look' }
    ],
    'painting': [
        { id: 'oil', label: 'YAĞLI BOYA', promptValue: 'Oil Painting texture' },
        { id: 'watercolor', label: 'SULU BOYA', promptValue: 'Watercolor Painting texture' }
    ],
    'digital': [
        { id: '3d', label: '3D RENDER', promptValue: '3D Octane Render style' },
        { id: 'vector', label: 'VEKTÖR', promptValue: 'Flat Vector Illustration' }
    ],
    'sketch': [
        { id: 'pencil', label: 'KURŞUN KALEM', promptValue: 'Graphite Pencil Sketch' },
        { id: 'charcoal', label: 'KÖMÜR', promptValue: 'Charcoal Drawing' }
    ]
};

export const VARIANT_LIGHTING_VARIANTS: Record<string, OptionItem[]> = {
    'natural': [
        { id: 'sunny', label: 'GÜNEŞLİ', promptValue: 'Bright sunny day' },
        { id: 'overcast', label: 'BULUTLU', promptValue: 'Soft overcast diffused light' }
    ],
    'studio': [
        { id: 'softbox', label: 'SOFTBOX', promptValue: 'Soft diffuse studio light' },
        { id: 'rim', label: 'KONTÜR', promptValue: 'Strong rim lighting' }
    ],
    'dramatic': [
        { id: 'chiaroscuro', label: 'GÖLGELİ', promptValue: 'Chiaroscuro, strong light and shadow' },
        { id: 'silhouette', label: 'SİLÜET', promptValue: 'Backlit silhouette' }
    ]
};

export const OUTFIT_CONCEPTS: OptionItem[] = [
  // --- ÜLKELER VE ŞEHİRLER ---
  { 
    id: 'usa', 
    label: 'ABD (NEW YORK/LA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an iconic American setting. New York Times Square with neon billboards or Los Angeles palm tree lined streets. Urban, energetic, and cinematic aesthetic.' 
  },
  { 
    id: 'germany', 
    label: 'ALMANYA (BERLİN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern German setting. Berlin urban street style, industrial architecture, or historical Brandenburg Gate background. Cool tones, sharp and structured aesthetic.' 
  },
  { 
    id: 'brazil', 
    label: 'BREZİLYA (RIO)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a vibrant Brazilian setting. Rio de Janeiro beach vibe or colorful favela background. Warm, sunny, and energetic tropical aesthetic.' 
  },
  { 
    id: 'china', 
    label: 'ÇİN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Chinese aesthetic setting. Traditional red lantern street or modern Shanghai skyline neon lights. Rich colors and cultural depth.' 
  },
  { 
    id: 'dubai', 
    label: 'DUBAİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a luxury Dubai setting. Burj Khalifa skyline view or high-end desert resort. Golden hour sun, futuristic architecture, and opulence.' 
  },
  { 
    id: 'france', 
    label: 'FRANSA (PARİS)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Parisian setting. Eiffel Tower view in distance or a chic sidewalk cafe. Romantic, elegant, and sophisticated French aesthetic.' 
  },
  { 
    id: 'india', 
    label: 'HİNDİSTAN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a colorful Indian setting. Taj Mahal silhouette or vibrant Jaipur street market. Rich spices color palette, cultural and historical aesthetic.' 
  },
  { 
    id: 'uk', 
    label: 'İNGİLTERE (LONDRA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a London setting. Rainy cobblestone street, red phone booth or bus in background. Classic, moody, and british heritage aesthetic.' 
  },
  { 
    id: 'spain', 
    label: 'İSPANYA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Spanish setting. Barcelona architecture or sunny Mediterranean plaza. Warm earth tones, vibrant and architectural aesthetic.' 
  },
  { 
    id: 'italy', 
    label: 'İTALYA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an Italian setting. Venice canals, Rome historical streets, or Tuscany vineyard. Romantic, warm, and artistic aesthetic.' 
  },
  { 
    id: 'japan', 
    label: 'JAPONYA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Japanese setting. Cherry blossoms (Sakura) park or neon Tokyo cyberpunk street. Anime-inspired or traditional zen aesthetic.' 
  },
  { 
    id: 'russia', 
    label: 'RUSYA (MOSKOVA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Russian setting. Red Square St. Basil\'s Cathedral background or snowy Moscow street. Cold tones, grand and historical aesthetic.' 
  },
  { 
    id: 'turkey', 
    label: 'TÜRKİYE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an authentic Turkish setting. Istanbul Bosphorus view with seagulls, Galata Tower or mosques in background. Warm, historical, and cultural aesthetic.' 
  },

  // --- EV VE YAŞAM ALANLARI ---
  { 
    id: 'home_modern', 
    label: 'EV', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a stylish Modern Home Living Room. Contemporary furniture, soft textures, indoor plants. Cozy, relaxed, and lifestyle aesthetic.' 
  },
  {
    id: 'kitchen',
    label: 'MUTFAK',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a clean minimalist kitchen. White flat cabinets, handle-less design, concrete or quartz counter, single pendant light, no clutter. Pure, calm, Scandinavian aesthetic.'
  },
  {
    id: 'living_room',
    label: 'OTURMA ODASI ',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a cozy living room with a lit fireplace. Plush velvet sofas, warm ambient lighting, wooden beams, books and candles on mantelpiece. Warm, intimate, and inviting residential aesthetic.'
  },
  {
    id: 'balcony',
    label: 'BALKON',
    promptValue: 'ATMOSPHERE TASK: Place the subject on a modern city-view balcony at dusk. Glass railing, comfortable outdoor lounge furniture, string lights, panoramic city skyline with bokeh lights. Elegant, urban, and relaxed evening aesthetic.'
  },
  {
    id: 'reading_nook',
    label: 'OKUMA KÖŞESİ',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a dedicated reading nook. Oversized plush armchair, floor lamp with warm light, tall bookshelves, large window with soft natural light and plants. Calm, intellectual, and serene literary aesthetic.'
  },
  {
    id: 'home_library_study',
    label: 'KÜTÜPHANE & ÇALIŞMA ODASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a sophisticated home library/study. Floor-to-ceiling wooden bookshelves, large executive desk, leather chair, globe, and soft desk lamp. Classic, intellectual, and refined scholarly aesthetic.'
  },
  { 
    id: 'bedroom', 
    label: 'YATAK ODASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Cozy Bedroom. Soft messy sheets, morning sunlight through curtains, pillows. Intimate, relaxed, and homey aesthetic.' 
  },
  {
    id: 'luxury_bathroom',
    label: 'BANYO (LÜKS SPA)',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a luxury spa-style bathroom. Freestanding marble bathtub, rain shower, gold fixtures, candles, plants, and soft towels. Tranquil, pampering, and high-end wellness aesthetic.'
  },
  {
    id: 'elegant_dining_room',
    label: 'YEMEK ODASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in an elegant formal dining room. Long wooden dining table, sophisticated tableware, chandelier lighting, wine glasses, and subtle floral arrangement. Refined, sophisticated, and upscale dining aesthetic.'
  },
  {
    id: 'walk_in_closet',
    label: 'GİYİNME ODASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a spacious luxury walk-in closet. Custom wooden cabinetry, island with jewelry drawers, full-length mirror, soft lighting, organized designer clothing and shoes. Glamorous, organized, and fashion-forward aesthetic.'
  },
  {
    id: 'home_theater',
    label: 'EV SİNEMASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a private home theater. Large screen, comfortable recliner seats, dim ambient lighting, sound system, popcorn machine, dark walls with acoustic panels. Immersive, cinematic, and luxurious entertainment aesthetic.'
  },
  {
    id: 'sunroom_conservatory',
    label: 'KONSERVATUAR / GÜNEŞ ODASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a bright sunroom/conservatory. Glass walls and ceiling, abundant green plants, wicker or rattan furniture, natural sunlight, soft cushions. Fresh, airy, and botanical lifestyle aesthetic.'
  },
  {
    id: 'attic_studio',
    label: 'ÇATI STÜDYOSU',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a stylish attic studio. Exposed wooden beams, large skylights, creative workspace desk, artistic decor, soft natural light filtering through. Creative, intimate, and artistic workspace aesthetic.'
  },
  {
    id: 'home_gym',
    label: 'EV SPOR SALONU',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern home gym. Rubber flooring, large mirrors, dumbbells & equipment, motivational wall art, bright lighting. Energetic, disciplined, fitness-focused aesthetic.'
  },
  {
    id: 'laundry_room',
    label: 'ÇAMAŞIR ODASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a stylish laundry room. Built-in washer-dryer, folding counter, organized baskets, tile floor, fresh linen scent vibe. Clean, functional, quietly luxurious aesthetic.'
  },
  {
    id: 'wine_cellar',
    label: 'ŞARAP MAHZENİ',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a small home wine cellar. Brick or stone walls, wooden racks, mood lighting, tasting table, bottles in soft shadows. Sophisticated, intimate, connoisseur aesthetic.'
  },
  {
    id: 'meditation_room',
    label: 'MEDITASYON / YOGA ODASI',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a serene meditation/yoga room. Cushions & bolsters, low platform, zen sand or plants, diffused light, neutral palette. Peaceful, mindful, spiritual aesthetic.'
  },
  {
    id: 'terrace_garden',
    label: 'TERAS BAHÇESİ',
    promptValue: 'ATMOSPHERE TASK: Place the subject on a lush terrace garden. Potted plants & flowers, outdoor rug, bistro table, fairy lights, city or nature view. Green, refreshing, outdoor-living aesthetic.'
  },
  {
    id: 'vintage_loft',
    label: 'VINTAGE LOFT',
    promptValue: 'ATMOSPHERE TASK: Place the subject in an industrial-vintage loft corner. Exposed brick, steel beams, leather sofa, old factory windows, retro lamps & vinyl records. Raw, nostalgic, cool aesthetic.'
  },

  // --- SOSYAL VE TİCARİ MEKANLAR ---
  { 
    id: 'bar_club', 
    label: 'BAR / GECE KULÜBÜ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a sophisticated Bar or Nightclub. Dim lighting, neon accents, shelves of bottles in background. Moody, social, and nightlife aesthetic.' 
  },
  { 
    id: 'cafe', 
    label: 'KAFE (COFFEE SHOP)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a trendy Coffee Shop. Espresso machine blur, wooden tables, warm tungsten lighting. Hipster, social, and relaxed aesthetic.' 
  },
  { 
    id: 'library', 
    label: 'KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a classic Library. Walls lined with old books, wooden ladders, study lamps. Intellectual, quiet, and academic aesthetic.' 
  },
  { 
    id: 'office', 
    label: 'İŞ YERİ (OFİS)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Professional Office. Glass walls, meeting room background, city view. Corporate, clean, and business-focused aesthetic.' 
  },
  { 
    id: 'museum', 
    label: 'MÜZE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a grand Museum hall. Marble floors, classical statues or dinosaur skeletons in background. Cultural, spacious, and impressive aesthetic.' 
  },
  { 
    id: 'otel', 
    label: 'OTEL LOBİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Luxury Hotel Lobby. Chandeliers, velvet furniture, marble reception. Expensive, welcoming, and high-class aesthetic.' 
  },
  { 
    id: 'gym', 
    label: 'SPOR SALONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern Gym or Fitness Center. Mirrors, weights, gym equipment in background. Energetic, healthy, and active aesthetic.' 
  },

  // --- DOĞA VE DIŞ MEKANLAR ---
  { 
    id: 'mountain_chalet', 
    label: 'DAĞ EVİ (KAYAK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a cozy Mountain Chalet or Ski Resort. Wooden interiors, fireplace glow, or snowy mountain view through window. Winter luxury aesthetic.' 
  },
  { 
    id: 'nature', 
    label: 'DOĞA (ORMAN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a deep Nature setting. Lush green forest, sunlight filtering through trees (god rays), ferns and moss. Organic, peaceful, and fresh aesthetic.' 
  },
  { 
    id: 'beach', 
    label: 'SAHİL / KUMSAL', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a beautiful Beach. White sand, turquoise ocean, blue sky. Summer vacation, relaxing, and tropical aesthetic.' 
  },

  // --- LÜKS VE ULAŞIM ---
  { 
    id: 'car_interior', 
    label: 'ARABA İÇİ (LÜKS)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a luxury car. Leather seats, bokeh view of city lights through the window. Intimate, expensive, and lifestyle aesthetic.' 
  },
  { 
    id: 'private_jet', 
    label: 'ÖZEL JET', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a Private Jet cabin. Cream leather seats, champagne glass, clouds visible through window. Ultra-luxury, exclusive, and billionaire aesthetic.' 
  },
  { 
    id: 'yacht', 
    label: 'YAT / TEKNE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the deck of a Luxury Yacht. Open ocean background, bright sunlight, white fiberglass textures. Nautical, expensive, and summer vibe.' 
  },
  { 
    id: 'travel', 
    label: 'YOLCULUK (HAVALİMANI)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an Airport Terminal or Train Station. Large glass windows with planes, luggage carts. Adventure, transit, and wanderlust aesthetic.' 
  },

  // --- SANAT, MODA VE STÜDYO ---
  {
    id: 'art_studio',
    label: 'SANAT ATÖLYESİ',
    promptValue: 'ATMOSPHERE TASK: Place the subject in a creative art studio. Easel, paint tubes, canvases, large windows with north light, messy yet inspiring workspace. Artistic, vibrant, expressive aesthetic.'
  },
  { 
    id: 'art_gallery', 
    label: 'SANAT GALERİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Minimalist Art Gallery. White walls, abstract paintings, concrete floor. Sophisticated, clean, and modern art aesthetic.' 
  },
  { 
    id: 'runway', 
    label: 'PODYUM (DEFİLE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Fashion Runway. Spotlights beaming, dark audience background, flashing cameras. High-fashion, glamorous, and confident aesthetic.' 
  },
  { 
    id: 'street_fashion', 
    label: 'SOKAK MODASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an Urban Street Fashion setting. Blurred city background, natural daylight, concrete textures. Trendy, candid, and lifestyle aesthetic.' 
  },
  { 
    id: 'studio', 
    label: 'STÜDYO (PROFESYONEL)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Professional Photo Studio. Infinite cyclorama background, softbox lighting, no distractions. Clean, commercial, and editorial look.' 
  },
  {
    id: 'dark_moody', 
    label: 'KARANLIK (CHIAROSCURO)', 
    promptValue: 'Focus on Dramatic Chiaroscuro Photography. Intense focus on the main subject. Ultra-detailed shot highlighting textures, materials, and contours. Atmosphere: Pure Chiaroscuro style — deep black / charcoal background that swallows everything outside the lit area. Single dramatic spotlight from one direction (side or slightly above), intensely illuminating ONLY the subject. Everything else plunges into inky, near-total darkness — deep, velvety shadows. High-contrast lighting carves out every texture, edge and volume, making the subject the only glowing, three-dimensional element in frame. Film noir mood: mysterious, cinematic, intense.' 
  },

];

export const OUTFIT_CONCEPT_VARIANTS: Record<string, OptionItem[]> = {
'studio': [
  { 
    id: 's_high_key', 
    label: 'AYDINLIK (BEYAZ FON)', 
    promptValue: 'ATMOSPHERE TASK: High-key studio photography. Pure white infinite cyclorama background, flat even lighting, soft shadows, bright and clean. Commercial, pristine, and airy aesthetic.' 
  },
  { 
    id: 's_low_key', 
    label: 'KARANLIK (SİYAH FON)', 
    promptValue: 'ATMOSPHERE TASK: Low-key studio photography. Pure black background, dramatic side lighting, deep shadows, high contrast. Moody, mysterious, and elegant aesthetic.' 
  },
  { 
    id: 's_neon_gel', 
    label: 'NEON / RENKLİ JEL', 
    promptValue: 'ATMOSPHERE TASK: Studio lighting with neon color gels. Saturated pink, cyan, and purple light mixing on the subject, dark background. Cyberpunk, vibrant, and edgy aesthetic.' 
  },
  { 
    id: 's_warm_golden', 
    label: 'SICAK (ALTIN IŞIK)', 
    promptValue: 'ATMOSPHERE TASK: Warm studio lighting. Amber and golden hour gel effects, soft directional light simulating afternoon sun in a studio setting. Cozy, inviting, and radiant aesthetic.' 
  },
  { 
    id: 's_grey_seamless', 
    label: 'GRİ SONSUZ FON', 
    promptValue: 'ATMOSPHERE TASK: Classic fashion photography studio. Neutral medium grey seamless paper backdrop, balanced softbox lighting, gentle gradient on the background. Timeless, professional, and subject-focused aesthetic.' 
  },
  { 
    id: 's_editorial_hard_light', 
    label: 'MODA EDİTORYAL (SERT IŞIK)', 
    promptValue: 'ATMOSPHERE TASK: High-fashion editorial studio. Hard direct flash, sharp distinct shadows on a plain background, high contrast, glossy finish. Bold, striking, and magazine-style aesthetic.' 
  },
  { 
    id: 's_beauty_softbox', 
    label: 'BEAUTY (YUMUŞAK IŞIK)', 
    promptValue: 'ATMOSPHERE TASK: Beauty portrait studio setup. Massive octabox lighting, extremely soft and flattering diffused light, minimal shadows, flawless skin tones. Gentle, flawless, and premium aesthetic.' 
  },
  { 
    id: 's_canvas_backdrop', 
    label: 'BOYALI KANVAS FON', 
    promptValue: 'ATMOSPHERE TASK: Fine art studio photography. Hand-painted textured canvas backdrop in muted earth tones, soft painterly Rembrandt lighting. Classic, artistic, and vintage portrait aesthetic.' 
  },
  { 
    id: 's_color_block', 
    label: 'CANLI RENK BLOKLARI', 
    promptValue: 'ATMOSPHERE TASK: Color block studio. Solid, highly saturated vibrant color seamless background (e.g., bright yellow or bold red), punchy lighting. Fun, energetic, and pop-art aesthetic.' 
  },
  { 
    id: 's_cinematic_spotlight', 
    label: 'SİNEMATİK SPOT', 
    promptValue: 'ATMOSPHERE TASK: Theatrical studio lighting. A single tight, hard spotlight hitting the subject from above against a pitch-black background. Dramatic, isolated, and stage-like aesthetic.' 
  },
  { 
    id: 's_gobo_shadows', 
    label: 'GOBO (GÖLGE OYUNLARI)', 
    promptValue: 'ATMOSPHERE TASK: Studio setup with Gobo lighting. Sharp shadows of window blinds or palm leaves projected across the subject and the backdrop. Cinematic, textured, and structural aesthetic.' 
  },
  { 
    id: 's_pastel_tones', 
    label: 'PASTEL TONLAR', 
    promptValue: 'ATMOSPHERE TASK: Soft pastel studio. Pale pink, mint, or baby blue seamless background, low contrast, dreamy soft light, airy atmosphere. Delicate, sweet, and modern aesthetic.' 
  },
  { 
    id: 's_ecommerce_catalog', 
    label: 'E-TİCARET (KATALOG)', 
    promptValue: 'ATMOSPHERE TASK: E-commerce catalog studio. Perfectly even lighting with zero harsh shadows, pure white floor and background, maximum clarity on clothing textures. Objective, clean, and commercial aesthetic.' 
  },
  { 
    id: 's_reflective_plexi', 
    label: 'YANSIMALIK ZEMİN (PLEKSİ)', 
    promptValue: 'ATMOSPHERE TASK: High-end studio with a reflective black or white plexiglass floor. Subject is reflected clearly on the ground, glossy finish, precise lighting. Sleek, premium, and structural aesthetic.' 
  },
  { 
    id: 's_smoke_machine', 
    label: 'SİSLİ STÜDYO', 
    promptValue: 'ATMOSPHERE TASK: Atmospheric studio setup. Dense theatrical smoke/fog filling the room, backlit with a cool tone, diffusing the light softly. Mysterious, cinematic, and textural aesthetic.' 
  },
  { 
    id: 's_direct_flash', 
    label: 'DOĞRUDAN FLAŞ (VİNTAGE)', 
    promptValue: 'ATMOSPHERE TASK: Direct on-camera flash style studio photography. Harsh central light, dark vignette, heavy drop shadow directly behind the subject on a white wall. Retro, paparazzi, and candid aesthetic.' 
  },
  { 
    id: 's_draped_fabric', 
    label: 'DÖKÜMLÜ KUMAŞ FON', 
    promptValue: 'ATMOSPHERE TASK: Romantic studio setting. Heavy velvet or silk fabric draped elegantly in the background, soft romantic lighting, deep rich colors. Luxurious, classical, and tactile aesthetic.' 
  },
  { 
    id: 's_holographic', 
    label: 'HOLOGRAFİK / METALİK FON', 
    promptValue: 'ATMOSPHERE TASK: Futuristic studio setup. Iridescent, holographic, or metallic foil backdrop reflecting a spectrum of colors, bright sharp lighting. Y2K, sci-fi, and synthetic aesthetic.' 
  },
  { 
    id: 's_geometric_plinths', 
    label: 'GEOMETRİK PODYUM', 
    promptValue: 'ATMOSPHERE TASK: Modern set design studio. Subject posing with or on minimalist white geometric plinths/cubes, architectural shadows, clean backdrop. Sculptural, avant-garde, and contemporary aesthetic.' 
  },
  { 
    id: 's_ring_light', 
    label: 'RİNG IŞIK', 
    promptValue: 'ATMOSPHERE TASK: Ring light studio setup. Flat, even frontal lighting eliminating facial shadows, distinct circular catchlights in the eyes, clean backdrop. Social media, influencer, and hyper-clear aesthetic.' 
  },
    ],
    'sokak': [
        { id: 'day', label: 'GÜNDÜZ', promptValue: 'Sunny day street style, natural lighting, busy city background' },
        { id: 'night', label: 'GECE', promptValue: 'Night street photography, bokeh city lights, neon signs, wet asphalt' },
        { id: 'sunset', label: 'GÜN BATIMI', promptValue: 'Golden hour street photography, warm backlight, lens flare' },
        { id: 'rain', label: 'YAĞMURLU', promptValue: 'Rainy street, umbrella, reflections on the ground, moody weather' },
    ],
    'doğa': [
        { id: 'forest', label: 'ORMAN', promptValue: 'Deep green forest, trees, dappled sunlight, nature trail' },
        { id: 'beach', label: 'SAHİL', promptValue: 'Sandy beach, ocean waves, blue sky, bright sunlight' },
        { id: 'mountain', label: 'DAĞ', promptValue: 'Mountain landscape, rocks, panoramic view, crisp air' },
        { id: 'flower', label: 'ÇİÇEK', promptValue: 'Flower field, spring meadow, colorful blooms, soft focus' },
    ],
    'ev': [
        { id: 'modern', label: 'MODERN', promptValue: 'Sleek modern furniture, clean lines, bright interior' },
        { id: 'cozy', label: 'SALAŞ', promptValue: 'Boho cozy style, plants, rugs, warm lighting' }
    ],
    'iş_yeri': [
        { id: 'meeting', label: 'TOPLANTI', promptValue: 'Boardroom table, glass walls, corporate meeting context' },
        { id: 'desk', label: 'MASA BAŞI', promptValue: 'Sitting at a modern desk, computer, focused work vibe' }
    ],
    'otel': [
        { id: 'lobby', label: 'LOBİ', promptValue: 'Grand hotel lobby, marble floors, chandeliers' },
        { id: 'pool', label: 'HAVUZ', promptValue: 'Luxury hotel infinity pool area, lounge chairs' }
    ],
    'sanat_galerisi': [
        { id: 'minimal', label: 'MİNİMAL', promptValue: 'Empty white space, one or two artworks, focus on outfit' },
        { id: 'exhibit', label: 'SERGİ', promptValue: 'Crowded exhibition opening vibe, blurred background people' }
    ],
    'bedroom': [
        { 
    id: 'br_royal_grand_suite', 
    label: 'KRALİYET SUİTİ (ALTIN)', 
    promptValue: 'ATMOSPHERE TASK: A grand royal master bedroom. Massive canopy bed with gold-leaf frame, silk emerald linens, crystal chandeliers, large fireplace, and ornate classical furniture. Opulent, majestic, and prestigious aesthetic.' 
  },
  { 
    id: 'br_modern_minimalist_glass', 
    label: 'MODERN MİNİMALİST (CAM)', 
    promptValue: 'ATMOSPHERE TASK: A sleek ultra-modern bedroom. Low platform bed, floor-to-ceiling glass walls with a panoramic mountain view, polished grey concrete floors, hidden LED strip lighting. Zen, clean, and structural aesthetic.' 
  },
  { 
    id: 'br_boho_dreamy_jungle', 
    label: 'BOHEM RÜYASI (TROPİKAL)', 
    promptValue: 'ATMOSPHERE TASK: A relaxed bohemian bedroom filled with plants. Rattan headboard, layered macramé textiles, hanging ivy, warm string lights, and soft sunlight filtering through linen curtains. Soulful, organic, and cozy aesthetic.' 
  },
  { 
    id: 'br_industrial_loft_brick', 
    label: 'ENDÜSTRİYEL LOFT (TUĞLA)', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial loft bedroom. Exposed red brick walls, high ceilings with metal beams, large factory windows, reclaimed wood bed frame, vintage Edison bulbs. Urban, edgy, and textural aesthetic.' 
  },
  { 
    id: 'br_scandinavian_bright_airy', 
    label: 'İSKANDİNAV HUZURU', 
    promptValue: 'ATMOSPHERE TASK: A bright and airy Scandinavian bedroom. Light ash wood furniture, minimalist white and grey color palette, functional decor, large windows with soft northern daylight. Peaceful, optimistic, and clean aesthetic.' 
  },
  { 
    id: 'br_art_deco_glamour_velvet', 
    label: 'ART DECO İHTİŞAMI', 
    promptValue: 'ATMOSPHERE TASK: A stylized Art Deco bedroom. Deep navy velvet headboard, geometric gold patterns on walls, symmetrical mirror placement, dramatic focused lighting. Glamorous, classic, and high-fashion aesthetic.' 
  },
  { 
    id: 'br_japanese_zen_tatami', 
    label: 'JAPON ZEN (TATAMİ)', 
    promptValue: 'ATMOSPHERE TASK: A traditional Japanese bedroom. Minimalist low futon bed on tatami mat floor, sliding shoji paper screens, a single bonsai tree, soft diffused light. Meditative, pure, and minimal aesthetic.' 
  },
  { 
    id: 'br_tropical_beach_bungalow', 
    label: 'TROPİKAL BUNGALOV', 
    promptValue: 'ATMOSPHERE TASK: An exotic beach house bedroom. Bed with full white gauze mosquito netting, bamboo walls, open view to the turquoise ocean, breezy tropical feeling. Fresh, holiday, and dreamlike aesthetic.' 
  },
  { 
    id: 'br_mountain_lodge_fireplace', 
    label: 'DAĞ EVİ (ŞÖMİNELİ)', 
    promptValue: 'ATMOSPHERE TASK: A cozy bedroom in a luxurious mountain lodge. Massive stone fireplace, fur throws on a heavy timber bed, snow falling outside the window, warm amber glow. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'br_futuristic_neon_cyber', 
    label: 'FÜTÜRİSTİK SİBER ODA', 
    promptValue: 'ATMOSPHERE TASK: A high-tech cyberpunk bedroom. Cyan and magenta neon accents, metallic surfaces, holographic panels, glowing tech displays, view of a futuristic neon city skyline. Advanced, synthetic, and vibrant aesthetic.' 
  },
  { 
    id: 'br_parisian_chic_molding', 
    label: 'PARİS STİLİ ŞIK ODA', 
    promptValue: 'ATMOSPHERE TASK: An elegant Parisian apartment bedroom. Tall white walls with delicate moldings, herringbone wood floors, marble fireplace, vintage chandelier, soft morning light. Romantic, chic, and historic aesthetic.' 
  },
  { 
    id: 'br_coastal_hamptons_breeze', 
    label: 'SAHİL EVİ (HAMPTONS)', 
    promptValue: 'ATMOSPHERE TASK: A classic Hamptons-style coastal bedroom. Crisp white and light blue stripes, bleached oak furniture, nautical decor, bright midday sun, ocean breeze vibe. Radiant, fresh, and upper-class aesthetic.' 
  },
  { 
    id: 'br_dark_academia_library', 
    label: 'DARK ACADEMIA KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A moody scholarly bedroom surrounded by books. Dark wood bookshelves, candlelight, antique globes, heavy velvet curtains, mysterious and intellectual atmosphere. Intense, mysterious, and textural aesthetic.' 
  },
  { 
    id: 'br_vintage_retro_70s', 
    label: 'VİNTAGE RETRO (70\'ler)', 
    promptValue: 'ATMOSPHERE TASK: A 1970s inspired retro bedroom. Sunken conversation pit style, orange and brown geometric wallpaper, iconic globe chair, warm analog film texture. Nostalgic, funky, and stylish aesthetic.' 
  },
  { 
    id: 'br_luxury_penthouse_skyline', 
    label: 'LÜKS PENTHOUSE (GECE)', 
    promptValue: 'ATMOSPHERE TASK: A high-end penthouse bedroom overlooking a glowing city at night. Designer velvet bed, floor-to-ceiling glass, city lights reflecting on polished surfaces, elite urban atmosphere. Successful, urban, and glamorous aesthetic.' 
  },
  { 
    id: 'br_dreamy_pastel_clouds', 
    label: 'RÜYA GİBİ PASTEL BULUTLAR', 
    promptValue: 'ATMOSPHERE TASK: A whimsical surreal bedroom. Soft pastel pink and lavender color palette, cloud-like fluffy textures everywhere, soft diffused ethereal light, dreamlike and poetic atmosphere. Gentle, imaginative, and soft aesthetic.' 
  },
  { 
    id: 'br_mediterranean_stone_villa', 
    label: 'AKDENİZ TAŞ VİLLA', 
    promptValue: 'ATMOSPHERE TASK: A bright bedroom in a Mediterranean stone villa. Exposed stone walls, arched windows, terracotta floors, white linens, bright summer sun and sea breeze. Warm, authentic, and coastal aesthetic.' 
  },
  { 
    id: 'br_shabby_chic_vintage', 
    label: 'SHABBY CHIC (NOSTALJİ)', 
    promptValue: 'ATMOSPHERE TASK: A romantic shabby chic bedroom. Distressed white furniture, floral patterns, lace details, soft morning light, nostalgic and feminine atmosphere. Charming, detailed, and poetic aesthetic.' 
  },
  { 
    id: 'br_brutalist_concrete_raw', 
    label: 'BRÜTALİST BETON (HAM)', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete brutalist bedroom. Bold geometric forms, single spotlight, vast empty spaces, high-contrast shadows, architectural and intense. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'br_pure_white_infinity', 
    label: 'SONSUZ BEYAZLIK (MODA)', 
    promptValue: 'ATMOSPHERE TASK: A pure white, seamless high-fashion bedroom studio. White bed, white floor, white walls, soft shadowless lighting, focus on fashion and subject. Minimalist, clean, and high-fashion aesthetic.' 
  }
],
    'yolculuk': [
        { id: 'airport', label: 'HAVALİMANI', promptValue: 'Airport terminal, glass windows, planes outside, suitcase' },
        { id: 'car', label: 'ARABA', promptValue: 'Luxury car interior, leather seats, city blur through window' }
    ],
'china': [
  { 
    id: 'cn_shanghai_neon_skyline', 
    label: 'ŞANGHAY GECE MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the futuristic Pudong district of Shanghai at night. Glowing skyscrapers, neon light reflections on the water, high-contrast urban energy. Advanced, vibrant, and cinematic aesthetic.' 
  },
  { 
    id: 'cn_forbidden_city_imperial', 
    label: 'YASAK ŞEHİR (KRALİYET)', 
    promptValue: 'ATMOSPHERE TASK: A grand setting in the Forbidden City. Crimson walls, ornate golden-yellow tile roofs, traditional Chinese architecture, majestic and historic atmosphere. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'cn_misty_great_wall', 
    label: 'ÇİN SEDDİ (SİSLİ)', 
    promptValue: 'ATMOSPHERE TASK: A cinematic view of the Great Wall of China winding through misty mountains. Ancient stone textures, expansive horizon, soft atmospheric light. Majestic, historic, and poetic aesthetic.' 
  },
  { 
    id: 'cn_traditional_hutong_lane', 
    label: 'GELENEKSEL HUTONG SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: A narrow traditional Hutong alley in Beijing. Grey brick walls, red lanterns hanging, bicycle in background, authentic and nostalgic atmosphere. Nostalgic, authentic, and textural aesthetic.' 
  },
  { 
    id: 'cn_cyberpunk_chongqing', 
    label: 'SİBERPUNK CHONGQING', 
    promptValue: 'ATMOSPHERE TASK: A multi-layered futuristic city view of Chongqing. Neon signs, vertical urban sprawling, monorail passing through buildings, vibrant and chaotic energy. Advanced, synthetic, and high-energy aesthetic.' 
  },
  { 
    id: 'cn_hangzhou_tea_house', 
    label: 'HANGZHOU ÇAY EVİ (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: A peaceful traditional tea house overlooking the West Lake. Wooden architecture, mist over the water, willow trees, meditative and calm atmosphere. Zen, pure, and meditative aesthetic.' 
  },
  { 
    id: 'cn_bamboo_forest_mist', 
    label: 'BAMBU ORMANI (SİSLİ)', 
    promptValue: 'ATMOSPHERE TASK: A deep green bamboo forest in Sichuan. Tall slender stalks, misty humid air, soft filtered light, quiet and ethereal nature. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'cn_modern_798_art_district', 
    label: '798 SANAT BÖLGESİ (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: An industrial art gallery in Beijing’s 798 district. Exposed pipes, large sculptures, white walls, artistic and creative urban energy. Artistic, structural, and modern aesthetic.' 
  },
  { 
    id: 'cn_lijiang_old_town', 
    label: 'LIJIANG ESKİ ŞEHİR', 
    promptValue: 'ATMOSPHERE TASK: A charming old town with stone bridges and canals. Traditional wooden houses, blooming flowers, soft afternoon sun, historic and romantic vibe. Poetic, charming, and textural aesthetic.' 
  },
  { 
    id: 'cn_yangshuo_rice_terraces', 
    label: 'YANGSHUO PİRİNÇ TERASLARI', 
    promptValue: 'ATMOSPHERE TASK: Lush green rice terraces carved into mountains. Morning mist, organic flowing lines, vibrant green colors, expansive nature view. Radiant, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'cn_luxury_silk_chamber', 
    label: 'LÜKS İPEK ODASI', 
    promptValue: 'ATMOSPHERE TASK: An opulent chamber filled with fine Chinese silk. Soft pink and gold textiles, intricate embroidery, warm diffused light, elite and feminine atmosphere. Opulent, soft, and sophisticated aesthetic.' 
  },
  { 
    id: 'cn_shenzhen_tech_lab', 
    label: 'SHENZHEN TEKNOLOJİ ÜSSÜ', 
    promptValue: 'ATMOSPHERE TASK: A high-tech laboratory or office in Shenzhen. Glass partitions, multiple screens, minimalist design, innovative and fast-paced energy. Advanced, professional, and innovative aesthetic.' 
  },
  { 
    id: 'cn_suzhou_garden_pavilion', 
    label: 'SUZHOU KLASİK BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: A traditional scholar garden in Suzhou. Rounded stone doorways, pavilion over a lotus pond, peaceful reflection, intricate architectural details. Zen, historic, and architectural aesthetic.' 
  },
  { 
    id: 'cn_red_lantern_festival', 
    label: 'KIRMIZI FENER FESTİVALİ', 
    promptValue: 'ATMOSPHERE TASK: A street filled with thousands of glowing red lanterns at night. Warm red glow on the subject, celebratory atmosphere, vibrant cultural energy. Radiant, warm, and vibrant aesthetic.' 
  },
  { 
    id: 'cn_rainy_chengdu_night', 
    label: 'YAĞMURLU CHENGDU GECESİ', 
    promptValue: 'ATMOSPHERE TASK: A wet evening street in Chengdu. Neon signs reflecting on rain-soaked pavement, umbrellas, moody cinematic lighting, urban atmosphere. Cinematic, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'cn_temple_of_heaven_symmetry', 
    label: 'CENNET TAPINAĞI (SİMETRİ)', 
    promptValue: 'ATMOSPHERE TASK: The circular architecture of the Temple of Heaven. Deep blue roofs, intricate geometric patterns, majestic and symmetrical composition. Majestic, spiritual, and structural aesthetic.' 
  },
  { 
    id: 'cn_huangshan_peaks_pine', 
    label: 'HUANGSHAN DAĞLARI', 
    promptValue: 'ATMOSPHERE TASK: The granite peaks of the Yellow Mountains. Ancient twisted pine trees, sea of clouds, traditional ink painting style nature, expansive and epic view. Poetic, ambitious, and ethereal aesthetic.' 
  },
  { 
    id: 'cn_hong_kong_skyline_lounge', 
    label: 'HK LOUNGE (MANZARALI)', 
    promptValue: 'ATMOSPHERE TASK: A luxury penthouse lounge overlooking Victoria Harbour in Hong Kong. City lights at night, designer furniture, polished surfaces, high-society social vibe. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'cn_abstract_ink_space', 
    label: 'SOYUT MÜREKKEP ALANI', 
    promptValue: 'ATMOSPHERE TASK: A stylized minimalist space inspired by Chinese ink wash painting. Bold black strokes, vast white emptiness, poetic light and shadow. Artistic, structural, and modern aesthetic.' 
  },
  { 
    id: 'cn_sunset_pagoda_hill', 
    label: 'GÜNBATIMI PAGODA TEPESİ', 
    promptValue: 'ATMOSPHERE TASK: A pagoda silhouette against a burning orange sunset sky on a hill. Warm golden hour light, peaceful end-of-day vibe, spiritual and serene atmosphere. Radiant, hopeful, and cinematic aesthetic.' 
  }
],

'living_room': [
  { 
    id: 'lr_modern_minimalist', 
    label: 'MODERN MİNİMALİST', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern minimalist living room. Concrete floor, white walls, low-profile sofa, clear surfaces, diffused natural light from large windows. Structural, clean, and functional aesthetic.' 
  },
  { 
    id: 'lr_quiet_luxury', 
    label: 'SESSİZ LÜKS (OLD MONEY)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a high-end residential living room. Matte finishes, linen and cashmere textures, neutral beige and taupe palette, soft ambient lighting. Elegant, understated, and high-quality aesthetic.' 
  },
  { 
    id: 'lr_industrial_loft', 
    label: 'ENDÜSTRİYEL LOFT', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an industrial loft living room. Exposed red brick walls, steel beams, concrete ceiling, distressed leather sofa, directional natural light. Gritty, urban, and raw aesthetic.' 
  },
  { 
    id: 'lr_bohemian', 
    label: 'BOHEM', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a bohemian living room. Layered ethnic rugs, rattan furniture, macrame wall hangings, multiple indoor plants, warm sunlight. Eclectic, textured, and relaxed aesthetic.' 
  },
  { 
    id: 'lr_parisian_chic', 
    label: 'PARİS (HAUSSMANN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Parisian apartment living room. Haussmann architecture, ornate wall mouldings, herringbone parquet floor, tall windows, bright lighting. Classic, architectural, and sophisticated aesthetic.' 
  },
  { 
    id: 'lr_mid_century', 
    label: 'MID-CENTURY MODERN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a mid-century modern living room. Teak wood furniture, geometric patterned rug, mustard yellow and olive green accents, 1960s architecture. Retro, structured, and colorful aesthetic.' 
  },
  { 
    id: 'lr_dark_academia', 
    label: 'DARK ACADEMIA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a dark academia style living room. Dark oak wood panels, floor-to-ceiling bookshelves, tufted leather armchair, low moody lighting. Intellectual, dark, and traditional aesthetic.' 
  },
  { 
    id: 'lr_scandinavian', 
    label: 'İSKANDİNAV', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Scandinavian living room. Light ash wood floor, white walls, functional minimalist furniture, soft textile throws, cool diffused light. Bright, airy, and practical aesthetic.' 
  },
  { 
    id: 'lr_art_deco', 
    label: 'ART DECO', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an Art Deco living room. Symmetrical layout, brass and gold accents, black marble, jewel-toned velvet furniture, structured lighting. Glamorous, geometric, and 1920s aesthetic.' 
  },
  { 
    id: 'lr_coastal', 
    label: 'SAHİL EVİ (COASTAL)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a coastal style living room. White linen curtains, light blue accents, whitewashed wood, woven seagrass textures, bright daylight. Fresh, breezy, and maritime aesthetic.' 
  },
  { 
    id: 'lr_winter_chalet', 
    label: 'KIŞ DAĞ EVİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a rustic mountain chalet living room. Heavy timber beams, natural stone fireplace, faux fur rugs, warm firelight illumination. Winter, insulated, and rustic aesthetic.' 
  },
  { 
    id: 'lr_cyberpunk', 
    label: 'CYBERPUNK LOUNGE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a futuristic cyberpunk living room. Neon blue and magenta lighting, metallic surfaces, dark background, high-contrast technological equipment. Sci-fi, synthetic, and futuristic aesthetic.' 
  },
  { 
    id: 'lr_wabi_sabi', 
    label: 'WABI-SABI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a wabi-sabi living room. Asymmetrical layout, raw plaster walls, untreated wood, neutral earth tones, soft shadowplay. Organic, imperfect, and natural aesthetic.' 
  },
  { 
    id: 'lr_glam_luxury', 
    label: 'GÖSTERİŞLİ LÜKS', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a glamorous luxury living room. Polished marble floors, crystal chandelier, mirrored surfaces, high-key lighting. Ostentatious, reflective, and expensive aesthetic.' 
  },
  { 
    id: 'lr_biophilic', 
    label: 'BİYOFİLİK (DOĞA ENTEGRE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a biophilic living room. Integrated indoor garden, living green wall, natural stone textures, overhead skylight, organic lighting. Botanical, ecological, and green aesthetic.' 
  },
  { 
    id: 'lr_retro_70s', 
    label: 'RETRO 70LER', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a 1970s retro living room. Orange and brown color palette, curved plastic furniture, shag rug, warm tungsten lighting. Vintage, bold, and pop-culture aesthetic.' 
  },
  { 
    id: 'lr_moroccan', 
    label: 'FAS (MOROCCAN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Moroccan style living room. Terracotta tiles, intricate geometric mosaics, low seating cushions, warm ambient lantern light. North African, patterned, and warm aesthetic.' 
  },
  { 
    id: 'lr_maximalist', 
    label: 'MAKSİMALİST', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a maximalist living room. Clashing bold patterns, densely decorated walls, vibrant contrasting colors, saturated lighting. Busy, expressive, and dense aesthetic.' 
  },
  { 
    id: 'lr_gallery_white', 
    label: 'SANAT GALERİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an art gallery style living area. Pure white walls, polished concrete floor, minimalist plinths, sharp gallery spotlighting. Blank, clinical, and high-contrast aesthetic.' 
  },
  { 
    id: 'lr_japandi', 
    label: 'JAPANDI (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Japandi living room. Shoji screen doors, low bamboo furniture, neutral color palette, calm and balanced soft lighting. Meditative, ordered, and hybrid aesthetic.' 
  }
],
'kitchen': [
  { 
    id: 'k_luxury', 
    label: 'LÜKS MUTFAK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a high-end luxury kitchen. Large marble island, gold fixtures, professional-grade appliances, pendant lights, fresh herbs and premium cookware in background. Sleek, gourmet, and sophisticated culinary aesthetic.' 
  },
  { 
    id: 'k_minimalist', 
    label: 'MODERN MİNİMALİST', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a clean minimalist kitchen. White flat cabinets, handle-less design, concrete or quartz counter, single pendant light, no clutter. Pure, calm, Scandinavian aesthetic.' 
  },
  { 
    id: 'k_rustic_farmhouse', 
    label: 'RUSTİK / ÇİFTLİK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a rustic farmhouse kitchen. Distressed wood, open shelving, copper pots hanging, warm natural light, stone textures. Cozy, authentic, and traditional aesthetic.' 
  },
  { 
    id: 'k_industrial', 
    label: 'ENDÜSTRİYEL MUTFAK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an industrial style kitchen. Matte black finishes, exposed brick walls, stainless steel appliances, professional chef vibe. Sharp, urban, and modern aesthetic.' 
  },
  { 
    id: 'k_mediterranean', 
    label: 'AKDENİZ STİLİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Mediterranean kitchen. Blue and white tiles, terracotta floor, bright sunlit windows, herbs and olive oil bottles on counter. Fresh, airy, and warm aesthetic.' 
  },
  { 
    id: 'k_mid_century', 
    label: 'MID-CENTURY MODERN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Mid-Century Modern kitchen. Flat-panel walnut wood cabinets, geometric backsplash tiles, retro-colored appliances, warm natural light. Structural, historical, and balanced aesthetic.' 
  },
  { 
    id: 'k_french_country', 
    label: 'FRANSIZ TAŞRASI (FRENCH COUNTRY)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a French Country kitchen. Cream-colored cabinetry, ornate mouldings, apron-front sink, antique brass hardware, soft diffused lighting. Classic, provincial, and decorative aesthetic.' 
  },
  { 
    id: 'k_dark_moody', 
    label: 'KARANLIK / DRAMATİK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a dark moody kitchen. Charcoal grey walls, dark oak cabinetry, black marble countertops, low directed lighting, heavy shadows. Dramatic, dense, and low-key aesthetic.' 
  },
  { 
    id: 'k_japandi', 
    label: 'JAPANDI (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Japandi style kitchen. Light bamboo wood, smooth grey stone counters, sliding shoji screens, integrated lighting, absolute visual order. Calm, ordered, and hybrid aesthetic.' 
  },
  { 
    id: 'k_coastal', 
    label: 'SAHİL EVİ (COASTAL)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Coastal style kitchen. Pale blue island, white shaker cabinets, woven rattan bar stools, bright daylight filtering through sheer blinds. Maritime, light, and airy aesthetic.' 
  },
  { 
    id: 'k_cyberpunk', 
    label: 'CYBERPUNK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Cyberpunk kitchen. Brushed steel surfaces, holographic displays, neon magenta and cyan accent lighting, dark background. Synthetic, futuristic, and high-contrast aesthetic.' 
  },
  { 
    id: 'k_bohemian', 
    label: 'BOHEM', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Bohemian kitchen. Floating shelves crowded with plants, patterned vintage rugs on the floor, colorful mismatched ceramics, warm sunlight. Eclectic, organic, and densely layered aesthetic.' 
  },
  { 
    id: 'k_commercial_chef', 
    label: 'PROFESYONEL / TİCARİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a commercial restaurant kitchen. Heavy-duty stainless steel prep tables, industrial gas ranges, overhead fluorescent-style daylight panels, pots and pans hanging. Utilitarian, sterile, and professional aesthetic.' 
  },
  { 
    id: 'k_wabi_sabi', 
    label: 'WABI-SABI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Wabi-Sabi kitchen. Uneven clay plaster walls, reclaimed raw wood counters, asymmetrical ceramic bowls, soft muted lighting with deep shadows. Imperfect, organic, and minimalist aesthetic.' 
  },
  { 
    id: 'k_art_deco', 
    label: 'ART DECO', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an Art Deco kitchen. High-gloss black lacquer cabinets, polished brass geometric inlays, emerald green accents, symmetrical lighting fixtures. Reflective, structured, and 1920s aesthetic.' 
  },
  { 
    id: 'k_scandinavian', 
    label: 'İSKANDİNAV', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Scandinavian kitchen. Pale ash wood floor, matte white surfaces, highly functional layout, large bare windows letting in cool northern light. Practical, bright, and clean aesthetic.' 
  },
  { 
    id: 'k_maximalist', 
    label: 'MAKSİMALİST', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Maximalist kitchen. Saturated colorful cabinets, dense floral wallpaper, contrasting terrazzo countertops, bright even lighting. Complex, vibrant, and visually dense aesthetic.' 
  },
  { 
    id: 'k_parisian', 
    label: 'PARİS (HAUSSMANN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Parisian apartment kitchen. Wall mouldings, Calacatta marble backsplash, herringbone wood floors, tall casement windows. Architectural, classic, and European aesthetic.' 
  },
  { 
    id: 'k_smart_futuristic', 
    label: 'FÜTÜRİSTİK (AKILLI EV)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a futuristic smart kitchen. Seamless white glass surfaces, integrated white LED strip lighting, completely handle-less and concealed appliances. Sterile, geometric, and technological aesthetic.' 
  },
  { 
    id: 'k_tiny_apartment', 
    label: 'MİKRO DAİRE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a micro-apartment kitchen. Compact layout, vertical storage solutions, small single-basin sink, view of a dense urban cityscape out of a small window. Confined, efficient, and urban aesthetic.' 
  }
],
'balcony': [
  { 
    id: 'b_city_sunset', 
    label: 'ŞEHİR MANZARASI (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a modern balcony at sunset. Panoramic city skyline with orange and purple hues, bokeh city lights, glass railing, outdoor furniture. Urban and serene aesthetic.' 
  },
  { 
    id: 'b_terrace_garden', 
    label: 'TERAS BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a terrace garden balcony. Potted plants, climbing vines, wooden decking, bistro table, morning sunlight. Botanical aesthetic.' 
  },
  { 
    id: 'b_mediterranean', 
    label: 'AKDENİZ STİLİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Mediterranean style balcony. White stone walls, blue wooden shutters, sea view, bougainvillea flowers, midday sun. Coastal aesthetic.' 
  },
  { 
    id: 'b_rainy_evening', 
    label: 'YAĞMURLU ŞEHİR', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a balcony during a rainy evening. Wet floor tiles, reflections of neon city lights, raindrops on glass railing, mood lighting. Cinematic aesthetic.' 
  },
  { 
    id: 'b_minimalist_white', 
    label: 'MİNİMALİST BEYAZ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a minimalist white balcony. All-white furniture, glass railing, high-key bright daylight, architectural lines. Clinical aesthetic.' 
  },
  { 
    id: 'b_boho_night', 
    label: 'BOHEM GECE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a bohemian style balcony at night. String lights, floor cushions, patterned rugs, plants, warm ambient glow. Eclectic aesthetic.' 
  },
  { 
    id: 'b_paris_haussmann', 
    label: 'PARİS (HAUSSMANN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Parisian balcony. Ornate wrought iron railing, Haussmann buildings in the background, small round table. Historic aesthetic.' 
  },
  { 
    id: 'b_luxury_resort', 
    label: 'LÜKS RESORT', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a luxury resort balcony. Infinity edge pool view, wooden pergola, lounge chairs, palm trees. Exclusive aesthetic.' 
  },
  { 
    id: 'b_winter_snow', 
    label: 'KIŞ / DAĞ EVİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a snowy mountain balcony. Timber railing, snow-capped peaks in the background, thick blankets on wooden chairs, overcast winter lighting. Cold, alpine aesthetic.' 
  },
  { 
    id: 'b_industrial', 
    label: 'ENDÜSTRİYEL LOFT', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on an industrial loft balcony. Black steel mesh railing, exposed brick exterior, view of factory buildings, harsh directional sunlight. Raw, urban aesthetic.' 
  },
  { 
    id: 'b_cyberpunk', 
    label: 'CYBERPUNK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a cyberpunk city balcony. Holographic billboard reflections, neon cyan and magenta lighting, metallic grating, dark rainy background. Synthetic, futuristic aesthetic.' 
  },
  { 
    id: 'b_japanese_zen', 
    label: 'JAPON ZEN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Japanese zen balcony. Bamboo privacy screens, bonsai trees, smooth stone floor, diffused soft light, minimalist wooden bench. Calm, ordered aesthetic.' 
  },
  { 
    id: 'b_tropical_jungle', 
    label: 'TROPİKAL ORMAN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a tropical jungle balcony. Dense green canopy background, humid atmosphere, dark wood decking, dappled sunlight filtering through large leaves. Equatorial, natural aesthetic.' 
  },
  { 
    id: 'b_desert_view', 
    label: 'ÇÖL MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a desert lodge balcony. Terracotta tiles, view of arid sand dunes and canyons, low sun casting long shadows. Dry, earthy aesthetic.' 
  },
  { 
    id: 'b_santorini', 
    label: 'SANTORİNİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Santorini balcony. Whitewashed adobe walls, deep blue dome background, Aegean sea view, harsh direct sunlight. Greek island aesthetic.' 
  },
  { 
    id: 'b_mid_century', 
    label: 'MID-CENTURY MODERN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a mid-century modern balcony. Breeze block walls, retro metal lawn chairs, terrazzo flooring, 1960s architecture. Structured, vintage aesthetic.' 
  },
  { 
    id: 'b_venice_canal', 
    label: 'VENEDİK KANALI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Venetian balcony. Stone balustrade, view of a narrow water canal and gondolas, aged plaster walls, soft warm sunlight. Historical, European aesthetic.' 
  },
  { 
    id: 'b_penthouse_night', 
    label: 'PENTHOUSE (GECE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a high-rise penthouse balcony at night. Frameless glass railing, top-down view of a dense glowing metropolis, dark sky, sharp edge lighting. Corporate, high-altitude aesthetic.' 
  },
  { 
    id: 'b_moroccan_riad', 
    label: 'FAS (RİYAD)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Moroccan riad balcony. Intricate zellige tilework, carved cedar wood panels, brass lanterns casting patterned shadows. Geometric, North African aesthetic.' 
  },
  { 
    id: 'b_scifi_space', 
    label: 'UZAY İSTASYONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a space station balcony. Curved transparent aluminum windows, view of planet Earth from orbit, sterile white lighting, metallic surfaces. Extraterrestrial, high-tech aesthetic.' 
  }
],
'dark_moody': [
  { 
    id: 'dm_classic', 
    label: 'KLASİK CHIAROSCURO', 
    promptValue: 'ATMOSPHERE TASK: Classic Chiaroscuro photography. Extreme side lighting, one side of the subject in deep shadow, high contrast between light and dark. Dramatic, moody, and artistic aesthetic.' 
  },
  { 
    id: 'dm_noir', 
    label: 'NOİR (FİLM TARZI)', 
    promptValue: 'ATMOSPHERE TASK: Film Noir style. Smoky atmosphere, harsh shadows, grainy film texture, mysterious lighting. Cinematic, retro, and intense aesthetic.' 
  },
  { 
    id: 'dm_shadow_patterns', 
    label: 'GÖLGE OYUNLARI', 
    promptValue: 'ATMOSPHERE TASK: Complex shadow patterns across the subject from window blinds or abstract shapes. Soft edges on shadows, moody warm light. Artistic, creative, and textured aesthetic.' 
  },
  { 
    id: 'dm_rim_light', 
    label: 'KENAR AYDINLATMA', 
    promptValue: 'ATMOSPHERE TASK: Minimalist rim lighting. Only the edges and contours of the subject are visible against an inky black background. Mysterious, sleek, and high-contrast aesthetic.' 
  },
  { 
    id: 'dm_gothic', 
    label: 'GOTİK / DRAMATİK', 
    promptValue: 'ATMOSPHERE TASK: Dark Gothic atmosphere. Deep red or velvet accents, low candle-like lighting, heavy shadows, ornate stone or velvet background. Moody, mysterious, and grand aesthetic.' 
  },
  { 
    id: 'dm_foggy_night', 
    label: 'SİSLİ GECE', 
    promptValue: 'ATMOSPHERE TASK: Dark foggy night atmosphere. Diffused blue or cold lighting through dense mist, soft focus on background, high contrast on subject. Ethereal, moody, and lonely aesthetic.' 
  },
  { 
    id: 'dm_neon_noir', 
    label: 'NEON NOİR', 
    promptValue: 'ATMOSPHERE TASK: Neon Noir aesthetic. Pitch black environment punctured by sharp, saturated neon lights. Moody, futuristic, and high-contrast aesthetic.' 
  },
  { 
    id: 'dm_baroque_dark', 
    label: 'KARANLIK BAROK', 
    promptValue: 'ATMOSPHERE TASK: Dark Baroque style. Deep, inky shadows with hints of gold and dark jewel tones. Ornate textures lost in shadow. Heavy and dramatic aesthetic.' 
  },
  { 
    id: 'dm_spotlight', 
    label: 'TEK SPOT IŞIĞI', 
    promptValue: 'ATMOSPHERE TASK: Studio spotlight. Pure black infinite background, single harsh overhead spotlight illuminating only the subject. Isolated, intense, and dramatic aesthetic.' 
  },
  { 
    id: 'dm_firelight', 
    label: 'ATEŞ IŞIĞI / KOR', 
    promptValue: 'ATMOSPHERE TASK: Firelight illumination. Subject engulfed in darkness, lit only by the warm, flickering orange glow of a fire or embers. Intimate, warm, and mysterious aesthetic.' 
  },
  { 
    id: 'dm_moonlight', 
    label: 'SİNEMATİK AY IŞIĞI', 
    promptValue: 'ATMOSPHERE TASK: Cinematic moonlight. Deep blue shadows, a single cool silver light source mimicking a full moon. Ethereal, nocturnal, and quiet aesthetic.' 
  },
  { 
    id: 'dm_color_gel', 
    label: 'RENKLİ JEL', 
    promptValue: 'ATMOSPHERE TASK: Split color gel lighting. Pitch black room, subject illuminated by sharp red and blue studio gels from opposite sides. Modern, edgy, and high-impact aesthetic.' 
  },
  { 
    id: 'dm_dark_forest', 
    label: 'KARANLIK ORMAN', 
    promptValue: 'ATMOSPHERE TASK: Macabre dark forest. Twisted trees barely visible in the background, near pitch-black environment, a single dim light source. Ominous, eerie, and natural aesthetic.' 
  },
  { 
    id: 'dm_industrial_grunge', 
    label: 'ENDÜSTRİYEL GRUNGE', 
    promptValue: 'ATMOSPHERE TASK: Dark industrial environment. Rusted metal and concrete swallowed by deep shadows, cold fluorescent flicker in the distance. Gritty, raw, and urban aesthetic.' 
  },
  { 
    id: 'dm_silhouette', 
    label: 'SİLÜET', 
    promptValue: 'ATMOSPHERE TASK: Pure silhouette. Subject is entirely in black shadow against a faintly illuminated, moody background. Graphic, mysterious, and shape-focused aesthetic.' 
  },
  { 
    id: 'dm_vintage_tintype', 
    label: 'KARANLIK VİNTAGE (TİNTYPE)', 
    promptValue: 'ATMOSPHERE TASK: Dark antique tintype photography. Extreme vignetting, deep blacks, low exposure, silvered highlights. Nostalgic, haunting, and historical aesthetic.' 
  },
  { 
    id: 'dm_abandoned_dusty', 
    label: 'TERK EDİLMİŞ MEKAN', 
    promptValue: 'ATMOSPHERE TASK: Dark abandoned building interior. Pitch black shadows, a single stark beam of light piercing through dust particles. Desolate, atmospheric, and textured aesthetic.' 
  },
  { 
    id: 'dm_deep_underwater', 
    label: 'DERİN SU ALTI', 
    promptValue: 'ATMOSPHERE TASK: Deep underwater darkness. Inky blue-black abyss, faint, distorted light rays penetrating from far above. Weightless, isolating, and aquatic aesthetic.' 
  },
  { 
    id: 'dm_rain_noir', 
    label: 'YAĞMURLU ASFALT', 
    promptValue: 'ATMOSPHERE TASK: Dark wet street at night. Deep shadows, wet reflections on the ground, stark cold light source illuminating the falling rain. Cinematic, melancholic, and textural aesthetic.' 
  },
  { 
    id: 'dm_sci_fi_eclipse', 
    label: 'UZAY / TUTULMA', 
    promptValue: 'ATMOSPHERE TASK: Low-key sci-fi eclipse. Absolute vacuum of space black, a single harsh, sharp rim light mimicking a distant star or eclipse. Stark, minimalist, and cosmic aesthetic.' 
  },
],
'street_fashion': [
  { 
    id: 'st_nyc_times_square', 
    label: 'NEW YORK (TIMES SQUARE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in Times Square, New York. Bright yellow taxis, massive glowing billboards, blurred city crowds, neon lights, high-energy urban atmosphere. Iconic, vibrant, and cinematic aesthetic.' 
  },
  { 
    id: 'st_paris_sidewalk', 
    label: 'PARİS SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a classic Parisian sidewalk. Haussmann-style stone buildings, wrought iron balconies, a small bistro in the background, cobblestone street, soft morning light. Elegant, romantic, and historical aesthetic.' 
  },
  { 
    id: 'st_tokyo_shibuya', 
    label: 'TOKYO (SHIBUYA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in Shibuya, Tokyo. Densely packed neon signs, wet asphalt reflecting bright lights, futuristic skyscrapers, high-tech urban vibe at night. Sharp, synthetic, and cyberpunk aesthetic.' 
  },
  { 
    id: 'st_london_rain', 
    label: 'LONDRA (YAĞMURLU)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a rainy London street. Red double-decker bus in the blurry background, wet pavement with reflections, grey brick architecture, gloomy but atmospheric lighting. Classic, moody, and British aesthetic.' 
  },
  { 
    id: 'st_milan_fashion', 
    label: 'MİLANO MODA HAFTASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject outside a fashion show in Milan. High-end boutiques, elegant Italian architecture, paparazzi-style background blur, bright midday sun. Glamorous, professional, and editorial aesthetic.' 
  },
  { 
    id: 'st_berlin_industrial', 
    label: 'BERLİN (ENDÜSTRİYEL)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an edgy Berlin neighborhood. Graffiti-covered concrete walls, exposed pipes, abandoned industrial buildings, harsh overcast daylight. Gritty, underground, and raw aesthetic.' 
  },
  { 
    id: 'st_los_angeles_palm', 
    label: 'LOS ANGELES (PALMİYELİ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a Los Angeles street lined with tall palm trees. Bright golden hour sunlight, low lens flare, asphalt road, pastel-colored buildings. Sunny, laid-back, and cinematic aesthetic.' 
  },
  { 
    id: 'st_stambul_bosphorus', 
    label: 'İSTANBUL (BOĞAZ MANZARASI)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a street overlooking the Bosphorus in Istanbul. Historic stone walls, view of the bridge and sea, seagulls in the sky, warm evening light. Authentic, cultural, and scenic aesthetic.' 
  },
  { 
    id: 'st_minimalist_alley', 
    label: 'MİNİMALİST ARA SOKAK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a clean, minimalist urban alleyway. Brutalist concrete walls, sharp architectural shadows, zero clutter, single point perspective. Modern, structural, and quiet aesthetic.' 
  },
  { 
    id: 'st_copenhagen_scandi', 
    label: 'KOPENHAG (İSKANDİNAV)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a colorful Copenhagen street (Nyhavn style). Brightly painted old houses, wooden boats in the canal, bicycles parked nearby, soft northern daylight. Friendly, vibrant, and clean aesthetic.' 
  },
  { 
    id: 'st_seoul_hongdae', 
    label: 'SEUL (HONGDAE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the vibrant Hongdae district of Seoul. Colorful shop signs, street art, youthful energy, bright artificial lighting mixed with evening blue hour. K-style, energetic, and modern aesthetic.' 
  },
  { 
    id: 'st_amsterdam_canal', 
    label: 'AMSTERDAM KANALLARI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a bridge over an Amsterdam canal. Tall narrow brick houses, bicycles, light reflecting off the water, soft overcast sky. Picturesque, European, and cozy aesthetic.' 
  },
  { 
    id: 'st_retro_70s', 
    label: 'RETRO 70\'LER SOKAĞI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a 1970s style urban street. Vintage cars, warm faded color palette, film grain texture, retro storefront signs. Nostalgic, groovy, and historical aesthetic.' 
  },
  { 
    id: 'st_skate_park', 
    label: 'SKATE PARK', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at an urban concrete skate park. Graffiti ramps, metal rails, wide open space, bright direct sunlight, youthful vibe. Athletic, rebellious, and raw aesthetic.' 
  },
  { 
    id: 'st_luxury_shopping', 
    label: 'LÜKS ALIŞVERİŞ CADDESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a high-end luxury shopping street (like Rodeo Drive). Perfectly clean pavement, designer window displays, expensive cars, golden hour lighting. Wealthy, polished, and exclusive aesthetic.' 
  },
  { 
    id: 'st_cyberpunk_night', 
    label: 'CYBERPUNK GECE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a futuristic cyberpunk alley. Heavy rain, glowing neon magenta and cyan signs, steam rising from vents, dark and moody background. Synthetic, high-contrast, and technological aesthetic.' 
  },
  { 
    id: 'st_mediterranean_village', 
    label: 'AKDENİZ KASABASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a narrow Mediterranean village street. Whitewashed walls, blue doors, bougainvillea flowers, harsh midday sun, stone paving. Fresh, airy, and coastal aesthetic.' 
  },
  { 
    id: 'st_abandoned_subway', 
    label: 'TERK EDİLMİŞ METRO', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a dark abandoned subway station. Rusted tracks, flickering fluorescent lights, concrete pillars, eerie silence. Cinematic, moody, and gritty aesthetic.' 
  },
  { 
    id: 'st_mumbai_street', 
    label: 'MUMBAİ (RENKLİ KAOS)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a busy Mumbai street. Colorful fabrics, rickshaws, colonial architecture, warm hazy sunlight, dense atmosphere. Exotic, vibrant, and textured aesthetic.' 
  },
  { 
    id: 'st_minimalist_rooftop', 
    label: 'MİNİMALİST ÇATI KATI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a minimalist concrete rooftop. View of a modern city skyline, clean edges, sunset lighting, high-altitude vibe. Architectural, serene, and urban aesthetic.' 
  }
],
'runway': [
  { 
    id: 'rw_paris_classic', 
    label: 'PARİS (KLASİK SARAY)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a grand Paris Fashion Week runway inside an ornate palace. Gold leaf mouldings, chandeliers, red carpet, high-end luxury atmosphere. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'rw_milan_minimal', 
    label: 'MİLANO (MİNİMALİST)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a clean, minimalist Milan Fashion Week runway. Pure white geometric stage, sharp architectural shadows, soft diffused overhead lighting, fashion elite audience. Sleek, professional, and high-fashion aesthetic.' 
  },
  { 
    id: 'rw_futuristic_cyber', 
    label: 'FÜTÜRİSTİK / CYBER', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a futuristic high-tech runway. Glowing LED floor, holographic elements, dark environment with sharp neon accents, metallic structures. Synthetic, sci-fi, and advanced aesthetic.' 
  },
  { 
    id: 'rw_industrial_warehouse', 
    label: 'ENDÜSTRİYEL DEPO', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on an underground fashion runway in an abandoned warehouse. Exposed brick, concrete floor, harsh spotlighting, vertical steel beams. Raw, edgy, and urban aesthetic.' 
  },
  { 
    id: 'rw_outdoor_garden', 
    label: 'DIŞ MEKAN / BAHÇE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on an outdoor garden runway. Surrounded by lush greenery, flowers, natural sunlight, wooden path. Fresh, organic, and ethereal aesthetic.' 
  },
  { 
    id: 'rw_night_city', 
    label: 'GECE ŞEHİR MANZARALI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a rooftop runway at night. Skyscrapers and city lights in the background, sharp spotlight on the subject, dark sky. Cinematic, urban, and glamorous aesthetic.' 
  },
  { 
    id: 'rw_circular_stage', 
    label: 'DAİRESEL PODYUM', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a dramatic circular runway stage. Audience surrounding 360 degrees, overhead ring light, focus intensely on the center. Dynamic, theatrical, and spotlighted aesthetic.' 
  },
  { 
    id: 'rw_beach_sunset', 
    label: 'KUMSALDA DEFİLE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a runway built directly on a beach at sunset. Blue ocean background, golden hour light, soft sand, breeze. Tropical, summer, and breezy aesthetic.' 
  },
  { 
    id: 'rw_vogue_studio', 
    label: 'VOGUE STÜDYO PODYUMU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a classic editorial studio runway. Infinite grey background, hard professional flash lighting, sharp drop shadows. Magazine-style, clean, and iconic fashion aesthetic.' 
  },
  { 
    id: 'rw_backstage_blur', 
    label: 'PUL ARKASI (BACKSTAGE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject just as they are about to enter the runway. Background shows blurred silhouettes of hair/makeup artists and clothing racks, cinematic warm lighting. Candid, professional, and behind-the-scenes aesthetic.' 
  }
],
'art_gallery': [
  { 
    id: 'ag_minimalist_white', 
    label: 'MİNİMALİST BEYAZ KÜP', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a "White Cube" style minimalist gallery. Pure white walls, polished concrete floor, sharp gallery spotlights, vast empty space. Clinical, modern, and high-contrast aesthetic.' 
  },
  { 
    id: 'ag_classical_museum', 
    label: 'KLASİK MÜZE SALONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a grand classical museum hall. Marble columns, ornate ceilings, classical oil paintings in gold frames on dark velvet walls. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'ag_modern_sculpture', 
    label: 'MODERN HEYKEL PARKI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject among large abstract modern sculptures. Brutalist metal or stone art pieces, bright natural light from high skylights, clean architectural lines. Artistic, structural, and bold aesthetic.' 
  },
  { 
    id: 'ag_digital_immersive', 
    label: 'DİJİTAL DENEYİM (IMMERSIVE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an immersive digital art installation. Floor-to-ceiling projections of moving abstract colors and light, dark room, subject illuminated by the glow of the art. Futuristic, vibrant, and psychedelic aesthetic.' 
  },
  { 
    id: 'ag_industrial_loft', 
    label: 'ENDÜSTRİYEL LOFT GALERİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a converted warehouse gallery. Exposed brick, high timber ceilings, large industrial windows, sprawling contemporary canvases. Raw, edgy, and urban aesthetic.' 
  },
  { 
    id: 'ag_contemporary_pop', 
    label: 'POP-ART GALERİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a vibrant Pop-Art exhibition. Bright primary colors, oversized comic-style art, neon signs, playful atmosphere. Graphic, energetic, and bold aesthetic.' 
  },
  { 
    id: 'ag_dark_academia', 
    label: 'DARK ACADEMIA ATÖLYE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a dark, atmospheric art study. Old sketches pinned to dark wood walls, antique statues, low moody lighting, smell of oil paint vibe. Intellectual, mysterious, and traditional aesthetic.' 
  },
  { 
    id: 'ag_monochrome_black', 
    label: 'MONOKROM SİYAH SERGİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a black-themed gallery. Matte black walls, single sharp white spotlights on black-and-white photography, high-key contrast. Sleek, sophisticated, and dramatic aesthetic.' 
  },
  { 
    id: 'ag_underground_vault', 
    label: 'YERALTI MAHZEN GALERİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a vaulted stone basement gallery. Low arched ceilings, flickering candle-like lighting, ancient artifacts behind glass, moody shadows. Secretive, historic, and intense aesthetic.' 
  },
  { 
    id: 'ag_outdoor_pavilion', 
    label: 'DIŞ MEKAN SANAT PAVİLYONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern glass and steel outdoor art pavilion. Surrounded by nature, sculptures visible in a garden, bright sunlight, architectural transparency. Fresh, airy, and organic aesthetic.' 
  },
  { 
    id: 'ag_abstract_expressionism', 
    label: 'SOYUT EKSPRESYONİZM', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in front of a massive, chaotic abstract expressionist painting with thick paint drips. Intense colors, messy artistic vibe, broad daylight. Expressive, vibrant, and creative aesthetic.' 
  },
  { 
    id: 'ag_minimalist_zen', 
    label: 'ZEN MİNİMALİZM', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a Japanese-inspired minimalist gallery. Light wood textures, paper screens, single ink wash painting (Sumi-e), calm balanced lighting. Meditative, ordered, and peaceful aesthetic.' 
  },
  { 
    id: 'ag_cyber_neon', 
    label: 'SİBER / NEON GALERİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a futuristic tech-art gallery. Holographic sculptures, neon blue and magenta strip lighting, dark reflective floors. Synthetic, high-tech, and futuristic aesthetic.' 
  },
  { 
    id: 'ag_surrealist_dream', 
    label: 'SÜRREALİST RÜYA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an unconventional, dream-like gallery space. Floating art pieces, distorted perspectives, soft hazy lighting, strange shadows. Mysterious, ethereal, and imaginative aesthetic.' 
  },
  { 
    id: 'ag_brutalist_concrete', 
    label: 'BRÜTALİST BETON SERGİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a raw concrete brutalist hall. Sharp angles, massive grey walls, small slits of natural light (God rays), minimal decor. Powerful, cold, and structural aesthetic.' 
  },
  { 
    id: 'ag_renaissance_hall', 
    label: 'RÖNESANS SALONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a hall filled with Renaissance masterpieces. Frescoes on the ceiling, large-scale religious and mythological oil paintings, warm golden lighting. Classical, European, and grand aesthetic.' 
  },
  { 
    id: 'ag_kinetic_art', 
    label: 'KİNETİK SANAT (HAREKET)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject among moving kinetic sculptures. Optical illusions on walls, spinning metallic art pieces, directional dramatic lighting. Dynamic, technological, and mesmerizing aesthetic.' 
  },
  { 
    id: 'ag_street_art_indoor', 
    label: 'İÇ MEKAN SOKAK SANATI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a gallery focused on luxury street art. Graffiti pieces on canvas, spray-painted textures, urban decor mixed with clean gallery lighting. Edgy, colorful, and contemporary aesthetic.' 
  },
  { 
    id: 'ag_botanical_art', 
    label: 'BOTANİK SANAT GALERİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a gallery integrated with live plants. Macro photography of flowers, living green walls, plenty of natural sunlight, organic textures. Fresh, calm, and ecological aesthetic.' 
  },
  { 
    id: 'ag_vintage_paparazzi', 
    label: 'VİNTAGE SERGİ AÇILIŞI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject as if at a 1950s gallery opening. Flashing paparazzi cameras, black and white photography on walls, cocktail party atmosphere, cinematic warm lighting. Nostalgic, glamorous, and social aesthetic.' 
  }
],
'art_studio': [
  { 
    id: 'as_oil_painter', 
    label: 'YAĞLI BOYA ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a classical oil painting studio. Large wooden easel, messy palettes with thick paint, canvases leaning against walls, smell of turpentine vibe, warm natural light. Creative, messy, and authentic aesthetic.' 
  },
  { 
    id: 'as_sculptor_loft', 
    label: 'HEYKELTIRAŞ LASTİĞİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a sculptor\'s workspace. Stone blocks, clay models, chisels and hammers, dust particles in the air, industrial windows. Raw, physical, and structural aesthetic.' 
  },
  { 
    id: 'as_minimalist_digital', 
    label: 'MİNİMALİST DİJİTAL STÜDYO', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a clean digital art studio. Dual monitor setup, drawing tablet, organized desk, soft RGB ambient lighting, minimalist decor. Modern, hi-tech, and focused aesthetic.' 
  },
  { 
    id: 'as_watercolor_corner', 
    label: 'SULU BOYA KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a bright, airy watercolor studio. Jars of colored water, soft brushes, paper textures, light pastel colors, morning sunlight. Delicate, peaceful, and fresh aesthetic.' 
  },
  { 
    id: 'as_dark_academic', 
    label: 'DARK ACADEMIA ÇİZİM ODASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a moody, traditional drawing room. Antique anatomy sketches, plaster busts, dark oak furniture, candlelight and low lamps. Intellectual, mysterious, and historical aesthetic.' 
  },
  { 
    id: 'as_pottery_wheel', 
    label: 'SERAMİK / ÇÖMLEK ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a pottery studio. Pottery wheel, shelves of unglazed ceramics, clay-covered surfaces, wet clay texture, warm earthy atmosphere. Organic, tactile, and handcrafted aesthetic.' 
  },
  { 
    id: 'as_fashion_atelier', 
    label: 'MODA TASARIM ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a high-fashion atelier. Sewing machines, dress forms/mannequins, hanging fabrics, rolls of silk and lace, bright professional lighting. Professional, sartorial, and elegant aesthetic.' 
  },
  { 
    id: 'as_graffiti_garage', 
    label: 'GRAFFİTİ / SOKAK SANATI GARAJI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a gritty garage-style art space. Spray paint cans everywhere, vibrant graffiti on walls, concrete floor, harsh directional light. Edgy, urban, and rebellious aesthetic.' 
  },
  { 
    id: 'as_textile_weaving', 
    label: 'TEKSTİL / DOKUMA ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a traditional weaving studio. Large wooden loom, colorful yarn spools, hanging tapestries, soft natural light, warm atmosphere. Textural, cultural, and artisanal aesthetic.' 
  },
  { 
    id: 'as_abstract_splatter', 
    label: 'SOYUT EKSPRESYONİST ALANI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a splatter-paint studio. Massive floor-to-ceiling canvas, paint drips everywhere (Jackson Pollock style), bucket of paint, dynamic and energetic vibe. Bold, vibrant, and messy aesthetic.' 
  },
  { 
    id: 'as_printmaking_press', 
    label: 'BASKI SANATLARI ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a traditional printmaking studio. Large metal printing press, ink rollers, drying racks with fresh prints, industrial atmosphere. Technical, graphic, and artisanal aesthetic.' 
  },
  { 
    id: 'as_glass_blowing', 
    label: 'CAM ÜFLEME ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a glass blowing hot shop. Glowing furnaces, molten glass, metallic tools, intense orange light reflections, dark background. Dramatic, hot, and craftsmanship-focused aesthetic.' 
  },
  { 
    id: 'as_jewelry_workbench', 
    label: 'KUYUMCU / TAKI TEZGAHI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at a detailed jewelry workbench. Tiny tools, gemstones, gold and silver wire, magnifying glass, focused task lighting. Intricate, detailed, and precious aesthetic.' 
  },
  { 
    id: 'as_photography_darkroom', 
    label: 'KARANLIK ODA (FOTOĞRAF)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a photographer\'s darkroom. Red safe-light, development trays, hanging negatives, mysterious atmosphere. Gritty, vintage, and process-focused aesthetic.' 
  },
  { 
    id: 'as_botanical_illustrator', 
    label: 'BOTANİK İLLÜSTRASYON ODASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a greenhouse-style art room. Surrounded by exotic plants, botanical sketches, magnifying glasses, bright natural light. Biological, green, and detailed aesthetic.' 
  },
  { 
    id: 'as_comic_manga_den', 
    label: 'MANGAKA / ÇİZGİ ROMAN ODASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a creative manga artist den. Reference figures on shelves, dip pens and ink bottles, piles of sketchbooks, cozy lamp lighting. Youthful, creative, and pop-culture aesthetic.' 
  },
  { 
    id: 'as_street_mural_scaffold', 
    label: 'DUVAR RESMİ (İSKELE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a scaffolding in front of a giant outdoor mural. City skyline in the background, paint rollers, panoramic view, bright daylight. Grand, urban, and courageous aesthetic.' 
  },
  { 
    id: 'as_renaissance_master', 
    label: 'RÖNESANS USTA ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a 16th-century style Italian master studio. Stone walls, large skylight, apprentices in the background, classical statues, dramatic side lighting. Historic, grand, and academic aesthetic.' 
  },
  { 
    id: 'as_contemporary_neon', 
    label: 'MODERN NEON SANAT ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a futuristic art space. Neon tubes being bent, dark room with glowing colors, sparks from tools, synthetic atmosphere. High-tech, artistic, and vibrant aesthetic.' 
  },
  { 
    id: 'as_pop_art_factory', 
    label: 'POP-ART FABRİKASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a colorful Andy Warhol-style studio. Screen-printing setups, stacks of colorful portraits, bright primary colors, industrial loft feel. Saturated, repetitive, and bold aesthetic.' 
  }
],
'travel': [
  { 
    id: 'tr_private_jet_interior', 
    label: 'ÖZEL JET (İÇ MEKAN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a luxury private jet cabin. Cream leather seats, wood grain tables, champagne glasses, fluffy pillows, view of clouds through small oval windows. Ultra-luxury, exclusive, and billionaire aesthetic.' 
  },
  { 
    id: 'tr_airport_terminal', 
    label: 'HAVALİMANI TERMİNALİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern airport terminal. Large glass walls, view of parked airplanes outside, polished floors, departure screens, luggage trolley, bright natural light. Transit, wanderlust, and busy travel aesthetic.' 
  },
  { 
    id: 'tr_business_lounge', 
    label: 'VIP LOUNGE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an exclusive airport business lounge. Soft velvet armchairs, dim warm lighting, buffet area in the background, sophisticated atmosphere. Quiet, expensive, and professional aesthetic.' 
  },
  { 
    id: 'tr_duty_free', 
    label: 'DUTY FREE MAĞAZASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a luxury duty-free shopping area. Glowing shelves of perfumes and wristwatches, marble floors, bright commercial lighting, blurred travelers. High-end, commercial, and energetic aesthetic.' 
  },
  { 
    id: 'tr_train_station_retro', 
    label: 'NOSTALJİK TREN GARI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a 1940s style historic train station. Iron clock above, steam engine in the background, brick walls, wooden benches, warm hazy sunlight. Vintage, romantic, and historical aesthetic.' 
  },
  { 
    id: 'tr_orient_express', 
    label: 'DOĞU EKSPRESİ (KOMPARTIMAN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a luxury train compartment. Dark mahogany wood panels, velvet curtains, brass details, table lamp, scenic landscape moving fast through window. Elegant, mysterious, and cinematic aesthetic.' 
  },
  { 
    id: 'tr_modern_subway', 
    label: 'MODERN METRO İSTASYONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a sleek, futuristic subway station. Clean metal surfaces, white neon strip lighting, blurred motion of a passing train, concrete textures. Urban, fast-paced, and minimalist aesthetic.' 
  },
  { 
    id: 'tr_luxury_yacht_deck', 
    label: 'LÜKS YAT GÜVERTESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the white fiberglass deck of a luxury yacht. Turquoise ocean horizon, turquoise water, bright direct sunlight, sea breeze effects, nautical ropes. Expensive, summer, and nautical aesthetic.' 
  },
  { 
    id: 'tr_plane_wing_window', 
    label: 'UÇAK PENCERESİ (KANAT)', 
    promptValue: 'ATMOSPHERE TASK: A close-up shot of the subject looking out an airplane window. The wing of the plane visible above a sea of clouds, golden hour sunlight hitting the subject\'s face. Dreamy, introspective, and high-altitude aesthetic.' 
  },
  { 
    id: 'tr_first_class_cabin', 
    label: 'BİRİNCİ SINIF (FIRST CLASS)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a commercial first-class airplane suite. High-tech entertainment screen, lie-flat bed, soft blue ambient cabin lighting, premium textures. Modern, comfortable, and upscale travel aesthetic.' 
  },
  { 
    id: 'tr_classic_convertible', 
    label: 'KLASİK ÜSTÜ AÇIK ARABA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a vintage convertible driving along a scenic coastal road. Wind-blown hair effect, palm trees in the background, sunset glow, analog film texture. Cool, adventurous, and retro aesthetic.' 
  },
  { 
    id: 'tr_paris_metro', 
    label: 'PARİS METRO GİRİŞİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at a classic Art Nouveau Paris Metro entrance. Wrought iron green entrance, cobblestone street, Haussmann buildings in background, soft grey sky. Chic, European, and historic aesthetic.' 
  },
  { 
    id: 'tr_desert_caravan', 
    label: 'ÇÖL SAFARİSİ (JEEP)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an open-top safari jeep in the desert. Rolling sand dunes, harsh direct sun, dust particles in the air, earthy neutral tones. Adventurous, rugged, and exotic aesthetic.' 
  },
  { 
    id: 'tr_venice_gondola', 
    label: 'VENEDİK GONDOLU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a gondola on a Venice canal. Historic buildings on both sides, water reflections, striped poles, warm afternoon light. Romantic, aquatic, and historical aesthetic.' 
  },
  { 
    id: 'tr_luxury_cruise_balcony', 
    label: 'CRUISE GEMİSİ BALKONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a private balcony of a giant cruise ship. Deep blue open ocean background, railing, breakfast table set, bright morning sun. Relaxing, vast, and vacation-focused aesthetic.' 
  },
  { 
    id: 'tr_nyc_taxi_backseat', 
    label: 'NEW YORK TAKSİ (ARKA KOLTUK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the back of a yellow NYC taxi. View of neon Times Square through the window, night lights, city reflections on the glass. Urban, fast, and cinematic aesthetic.' 
  },
  { 
    id: 'tr_snowy_mountain_tunnel', 
    label: 'KARLI DAĞ GEÇİDİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject near a train or car tunnel in the snowy Alps. Pine trees covered in snow, grey mountains, cold misty atmosphere, overcast light. Winter, dramatic, and isolated aesthetic.' 
  },
  { 
    id: 'tr_tokyo_bullet_train', 
    label: 'TOKYO HIZLI TREN (SHINKANSEN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a futuristic Japanese bullet train. Minimalist ergonomic seats, blurred Fuji mountain view through window, sterile white lighting, high-tech vibe. Clean, efficient, and modern travel aesthetic.' 
  },
  { 
    id: 'tr_grand_hotel_entrance', 
    label: 'OTEL KAPISI (VALE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at the entrance of a 5-star grand hotel. Red carpet, doorman in uniform, luxury cars in background, revolving glass door, warm evening lighting. Welcoming, expensive, and high-class aesthetic.' 
  },
  { 
    id: 'tr_vintage_airport_propeller', 
    label: 'PERVANELİ UÇAK (NOSTALJIK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the tarmac next to a small vintage propeller plane. Leather suitcases, sun-drenched airfield, 1950s travel aesthetic, sepia-toned sunlight. Adventurous, nostalgic, and classic aesthetic.' 
  }
],
'yacht': [
  { 
    id: 'y_luxury_deck_sunset', 
    label: 'ANA GÜVERTE (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the teak wood main deck of a massive luxury yacht. Panoramic sunset over the open ocean, golden hour glow, white leather lounge circular seating, glass of champagne. Ultra-luxury, serene, and expensive aesthetic.' 
  },
  { 
    id: 'y_monaco_harbor', 
    label: 'MONACO LİMANI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a yacht docked in Monte Carlo harbor. Background shows the hillside city of Monaco with luxury cars and buildings, bright Mediterranean sun, clear blue water. Glamorous, elite, and European aesthetic.' 
  },
  { 
    id: 'y_speed_boat_action', 
    label: 'SÜRAT TEKNESİ (HAREKETLİ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a high-speed vintage mahogany Riva boat. Water splashing at the sides, blurred ocean background showing speed, wind-blown hair effect, bright direct sunlight. Dynamic, cool, and adventurous aesthetic.' 
  },
  { 
    id: 'y_flybridge_view', 
    label: 'FLYBRIDGE (ÜST KAT)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the flybridge (top floor) of a yacht. High-angle view overlooking the rest of the boat and the sea, steering wheel visible, white fiberglass textures, vast blue sky. Commanding, airy, and nautical aesthetic.' 
  },
  { 
    id: 'y_interior_cabin', 
    label: 'LÜKS KABİN (İÇ MEKAN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a luxury yacht master cabin. High-gloss wood panels, porthole window with sea view, soft cream textiles, elegant ambient lighting. Intimate, expensive, and sophisticated aesthetic.' 
  },
  { 
    id: 'y_sailing_yacht', 
    label: 'YELKENLİ (MACERA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a classic sailing yacht. Large white sails catching the wind in the background, wooden deck, ropes and nautical equipment, deep blue wavy sea. Organic, adventurous, and authentic aesthetic.' 
  },
  { 
    id: 'y_night_party', 
    label: 'YAT PARTİSİ (GECE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a yacht deck at night. Blue underwater LED lights glowing, warm ambient deck lighting, cocktail party vibe, dark starlit sky. Social, glamorous, and nightlife aesthetic.' 
  },
  { 
    id: 'y_amalfi_coast', 
    label: 'AMALFI KIYILARI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a boat near the Amalfi Coast. Background shows colorful Italian cliffside houses (Positano), turquoise water, bright summer sun, lemons in a basket. Romantic, vibrant, and Italian aesthetic.' 
  },
  { 
    id: 'y_minimalist_modern', 
    label: 'MİNİMALİST MODERN YAT', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a futuristic minimalist yacht. Anthracite grey and white color scheme, sharp architectural lines, glass railings, noon sun. Sleek, technological, and high-end aesthetic.' 
  },
  { 
    id: 'y_swimming_platform', 
    label: 'YÜZME PLATFORMU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the aft swimming platform (sea level) of a yacht. Feet near the crystal clear water, snorkel gear nearby, bright tropical sun, ripples on the sea surface. Relaxed, summer, and vacation aesthetic.' 
  },
  { 
    id: 'y_greek_islands', 
    label: 'YUNAN ADALARI (MAVİ YOLCULUK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a traditional wooden Gulet boat. Background shows whitewashed Greek island buildings, blue shutters, intense midday sun, deep indigo sea. Cultural, fresh, and breezy aesthetic.' 
  },
  { 
    id: 'y_captain_bridge', 
    label: 'KAPTAN KÖŞKÜ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at the helm/digital bridge of a modern superyacht. Advanced navigation screens, throttles, large glass window with ocean view. Authoritative, technological, and professional aesthetic.' 
  },
  { 
    id: 'y_breakfast_deck', 
    label: 'GÜVERTEDE KAHVALTI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at a beautifully set breakfast table on a yacht deck. Fresh fruits, pastries, white linen, morning soft sunlight, calm sea background. Peaceful, luxurious, and homey aesthetic.' 
  },
  { 
    id: 'y_wooden_classic', 
    label: 'ANTİKA AHŞAP TEKNE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a meticulously restored 1920s wooden motorboat. Polished mahogany, brass fittings, vintage nautical flags, analog film texture. Nostalgic, classic, and prestigious aesthetic.' 
  },
  { 
    id: 'y_caribbean_catamaran', 
    label: 'KARAYİPLER (KATAMARAN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the trampoline / net of a catamaran. White sand beach and palm trees in the distance, crystal turquoise shallow water, bright white sun. Tropical, casual, and energetic aesthetic.' 
  },
  { 
    id: 'y_rainy_harbor', 
    label: 'YAĞMURLU LİMAN (SİNEMATİK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a moisture-slicked yacht deck in a rainy harbor. Moody grey sky, reflections on the fiberglass, wet textures, city lights blurred in the background. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'y_dubai_marina', 
    label: 'DUBAİ MARİNA', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a yacht cruising through Dubai Marina. Surrounded by futuristic skyscrapers, desert sunset glow, artificial lights starting to twinkle. Opulent, urban, and grand aesthetic.' 
  },
  { 
    id: 'y_diving_boat', 
    label: 'DALGIÇ TEKNESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a rugged diving boat. Scuba tanks, wetsuits, oxygen gauges, deep blue ocean, adventurous atmosphere. Physical, technical, and adventurous aesthetic.' 
  },
  { 
    id: 'y_minimalist_indoor_pool', 
    label: 'YAT İÇİ HAVUZ (SPA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject near the indoor infinity pool area of a superyacht. Glass walls looking out to sea, marble floor, soft spa lighting, steam effects. Tranquil, exclusive, and billionaire aesthetic.' 
  },
  { 
    id: 'y_arctic_explorer', 
    label: 'ARKTİK KEŞİF GEMİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a heavy-duty explorer yacht in the Arctic. Icebergs in the background, cold blue atmosphere, snowflakes in the air, subject in warm luxury clothing. Isolated, dramatic, and extraordinary aesthetic.' 
  }
],
'private_jet': [
  { 
    id: 'pj_interior_main', 
    label: 'KABİN (ANA GÖRÜNÜM)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the main cabin of an ultra-luxury private jet. Spacious leather seats, high-gloss wood accents, large windows showing clouds, soft warm ambient lighting. Billionaire, exclusive, and comfortable aesthetic.' 
  },
  { 
    id: 'pj_cockpit_view', 
    label: 'KOKPİT (PİLOT MAHALLİ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at the edge of the cockpit or behind the pilot seats. Advanced digital flight displays, endless sky through the front windshield, technical and professional atmosphere. High-tech, authoritative, and unique aesthetic.' 
  },
  { 
    id: 'pj_boarding_stairs', 
    label: 'BİNİŞ / MERDİVENLER', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the airstairs of a private jet. Tarmac background, bright sunlight, jet engine visible, luxury luggage nearby. Dynamic, successful, and traveler aesthetic.' 
  },
  { 
    id: 'pj_sleeping_suite', 
    label: 'YATAK ODASI (SUİT)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the private bedroom suite of a long-range jet. Full-size bed, silk linens, soft mood lighting (blue/purple tones), cozy and intimate atmosphere. Ultra-luxury, serene, and private aesthetic.' 
  },
  { 
    id: 'pj_meeting_room', 
    label: 'TOPLANTI ALANI / OFİS', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the conference/dining area of a private jet. Large table with laptops or documents, ergonomic leather chairs, professional business atmosphere. Corporate, powerful, and successful aesthetic.' 
  },
  { 
    id: 'pj_night_flight_neon', 
    label: 'GECE UÇUŞU (NEON)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a private jet cabin at night. Cabin lit by sharp neon cyan and violet LED light strips, dark sky through windows with star reflections. Futuristic, moody, and exclusive aesthetic.' 
  },
  { 
    id: 'pj_dining_experience', 
    label: 'LÜKS YEMEK SERVİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at a beautifully set dining table inside a jet. Fine china, crystal glasses, gourmet food, warm interior lighting. Sophisticated, opulance, and lifestyle aesthetic.' 
  },
  { 
    id: 'pj_golden_hour_wing', 
    label: 'GÜNBATIMI (KANAT MANZARALI)', 
    promptValue: 'ATMOSPHERE TASK: Inside a private jet during golden hour. Intense warm sunlight streaming through windows, jet wing visible over a sea of orange clouds in the background. Radiant, cinematic, and peaceful aesthetic.' 
  },
  { 
    id: 'pj_bathroom_spa', 
    label: 'BANYO / SPA (JET)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the luxury master bathroom of a super-large jet. Marble sink, gold fixtures, large mirror, soft towels, high-end wellness atmosphere. Unexpected, expensive, and premium aesthetic.' 
  },
  { 
    id: 'pj_window_reflection', 
    label: 'PENCERE YANSIMASI', 
    promptValue: 'ATMOSPHERE TASK: A close-up shot focused on the subject near the oval window. Subject reflected in the glass, view of high-altitude clouds above, soft natural light. Introspective, artistic, and dreamy aesthetic.' 
  },
  { 
    id: 'pj_champagne_celebration', 
    label: 'ŞAMPANYA KUTLAMASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject relaxing with a champagne bottle and glasses. Ice bucket, luxury snacks, velvet pillows, party/celebration atmosphere. Social, glamorous, and rich aesthetic.' 
  },
  { 
    id: 'pj_hangar_industrial', 
    label: 'HANGAR (ENDÜSTRİYEL)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a massive, clean aircraft hangar next to the private jet. Concrete floor, high ceilings, industrial floodlights, tools and equipment in background. Raw, powerful, and technical aesthetic.' 
  },
  { 
    id: 'pj_morning_reading', 
    label: 'SABAH OKUMASI (HUZUR)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject relaxing in a leather jet seat with a newspaper or book. Crisp morning sunlight, coffee cup on table, calm clouds outside. Peaceful, intellectual, and wealthy lifestyle aesthetic.' 
  },
  { 
    id: 'pj_tarmac_sunset', 
    label: 'APRON / GÜNBATIMI BAŞLANGIÇ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the airport apron at sunset. Private jet silhouette behind, long shadows, orange sky tones, dramatic lighting. Cinematic, grand, and successful aesthetic.' 
  },
  { 
    id: 'pj_minimalist_futuristic', 
    label: 'MİNİMALİST FÜTÜRİSTİK JET', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a concept private jet with seamless white interiors. All-white surfaces, integrated hidden lighting, no visible buttons, geometric lines. Sci-fi, clean, and advanced aesthetic.' 
  },
  { 
    id: 'pj_classic_vintage_prop', 
    label: 'ANTİKA JET / NOSTALJİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a classic 1970s styled private jet cabin. Velvet upholstery, warm wood panels, analog dials, vintage film photography texture. Nostalgic, retro, and stylish aesthetic.' 
  },
  { 
    id: 'pj_snowy_runway_takeoff', 
    label: 'KARLI PİST (BİNİŞ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject boarding a private jet on a snowy runway. Cold blue atmosphere, snowflakes in air, jet engine heat blur, warm luxury clothes. Isolated, dramatic, and winter adventure aesthetic.' 
  },
  { 
    id: 'pj_dubai_city_view', 
    label: 'SAHRA / ŞEHİR ÜSTÜ', 
    promptValue: 'ATMOSPHERE TASK: Inside a jet cabin looking out. Skyscrapers of Dubai or desert dunes visible far below through the window, bright harsh desert sun. High-altitude, opulent, and panoramic aesthetic.' 
  },
  { 
    id: 'pj_tech_hub_office', 
    label: 'TEKNOLOJİ ÜSSÜ / OFİS', 
    promptValue: 'ATMOSPHERE TASK: Inside a jet converted into a high-tech mobile office. Multiple glowing screens, wires, digital maps, holographic weather displays. Futuristic, professional, and mobile-command aesthetic.' 
  },
  { 
    id: 'pj_rainy_day_transit', 
    label: 'YAĞMURLU GÜN (BİNİŞ)', 
    promptValue: 'ATMOSPHERE TASK: On the boarding stairs of a jet during rain. Wet textures on aircraft skin, umbrella held by staff, reflections of airport lights on the ground, moody lighting. Melancholic, cinematic, and textural aesthetic.' 
  }
],
'car_interior': [
  { 
    id: 'ci_rolls_royce_starlight', 
    label: 'STARS (TAVAN YILDIZLI)', 
    promptValue: 'ATMOSPHERE TASK: Inside a Rolls-Royce rear seat. Iconic Starlight headliner glowing above, deep lambswool carpets, diamond-stitched leather, privacy curtains. Ultra-luxury, magical, and planetary aesthetic.' 
  },
  { 
    id: 'ci_supercar_cockpit', 
    label: 'SÜPER SPOR (KOKPİT)', 
    promptValue: 'ATMOSPHERE TASK: Inside a modern Ferrari or Lamborghini. Carbon fiber dashboard, Alcantara steering wheel, digital racing displays, yellow/red accent stitching, low seating position. High-speed, technical, and aggressive aesthetic.' 
  },
  { 
    id: 'ci_classic_vintage_leather', 
    label: 'KLASİK (ANTİKA DERİ)', 
    promptValue: 'ATMOSPHERE TASK: Inside a 1960s luxury classic car. Large ivory steering wheel, analog chrome dials, worn cognac leather seats, view of a scenic coastal road. Nostalgic, artisanal, and cinematic aesthetic.' 
  },
  { 
    id: 'ci_night_city_neon', 
    label: 'GECE ŞEHİR NEONLARI', 
    promptValue: 'ATMOSPHERE TASK: Inside a luxury car at night. Wet city street lights reflecting on the window, ambient blue/magenta interior LED lighting, cinematic bokeh of neon signs in the background. Moody, urban, and high-contrast aesthetic.' 
  },
  { 
    id: 'ci_rainy_window_mood', 
    label: 'YAĞMURLU CAM (NOİR)', 
    promptValue: 'ATMOSPHERE TASK: Inside a luxury car during heavy rain. Raindrops streaking across the window, grey moody lighting, soft reflections on the leather dashboard, cold atmosphere. Melancholic, intimate, and textural aesthetic.' 
  },
  { 
    id: 'ci_golden_hour_sunset', 
    label: 'GÜNBATIMI SÜRÜŞÜ', 
    promptValue: 'ATMOSPHERE TASK: Inside a car driving during golden hour. Warm intense sunlight flooding the cabin, lens flare effects, soft golden skin tones, blurred landscape moving outside. Radiant, peaceful, and cinematic aesthetic.' 
  },
  { 
    id: 'ci_limousine_party', 
    label: 'LİMUZİN PARTİSİ', 
    promptValue: 'ATMOSPHERE TASK: Inside a long stretch limousine. Bar area with glasses, colorful neon mood lighting, mirrored ceiling, social and celebratory atmosphere. Glamorous, expensive, and social aesthetic.' 
  },
  { 
    id: 'ci_minimalist_electric', 
    label: 'FÜTÜRİSTİK (ELEKTRİKLİ)', 
    promptValue: 'ATMOSPHERE TASK: Inside a modern high-end electric car (Tesla/Lucid style). Massive glass roof showing the sky, minimalist white interior, huge touchscreens, zero buttons, bright even lighting. Clean, tecnológico, and advanced aesthetic.' 
  },
  { 
    id: 'ci_chauffeur_perspective', 
    label: 'MAKAM (ARKA KOLTUK)', 
    promptValue: 'ATMOSPHERE TASK: Perspective from the rear passenger seat of a Mercedes S-Class. Reclined position, footrest, large entertainment screens, view of the chauffeur in the blurred front seat. Executive, powerful, and successful aesthetic.' 
  },
  { 
    id: 'ci_safari_jeep_open', 
    label: 'ÜSTÜ AÇIK SAFARİ (JEEP)', 
    promptValue: 'ATMOSPHERE TASK: Inside an open-top luxury safari Land Rover. Dust particles in the air, beige canvas textures, savanna views in the background, harsh direct sun. Adventurous, rugged, and exotic aesthetic.' 
  },
  { 
    id: 'ci_convertible_coastal', 
    label: 'ÜSTÜ AÇIK (SAHİL YOLU)', 
    promptValue: 'ATMOSPHERE TASK: Inside a convertible car with the top down. Wind-blown hair effect, view of the turquoise sea and palm trees moving past, bright summer sun. Breezy, free, and summery aesthetic.' 
  },
  { 
    id: 'ci_luxury_suv_family', 
    label: 'LÜKS SUV (GENİŞ İÇ)', 
    promptValue: 'ATMOSPHERE TASK: Inside a grand luxury SUV (Range Rover). Spacious captain seats, panoramic view of a mountain landscape, soft natural lighting, high-quality materials. Solid, commanding, and elite aesthetic.' 
  },
  { 
    id: 'ci_monaco_paparazzi', 
    label: 'MONACO (PAPARAZZİ FOTO)', 
    promptValue: 'ATMOSPHERE TASK: Inside a car as if photographed by paparazzi. Camera flash reflection on the window, blurred fans in the background, high-contrast night lighting. Glamorous, famous, and candid aesthetic.' 
  },
  { 
    id: 'ci_brutalist_industrial', 
    label: 'ENDÜSTRİYEL OTOPARK', 
    promptValue: 'ATMOSPHERE TASK: Inside a car parked in a raw concrete parking garage. High-contrast fluorescent lighting, sharp shadows, gritty concrete pillars visible through windows. Urban, edgy, and raw aesthetic.' 
  },
  { 
    id: 'ci_desert_oasis_drive', 
    label: 'ÇÖL YOLCULUĞU', 
    promptValue: 'ATMOSPHERE TASK: Inside a car driving through desert dunes. Sand-toned interior, bright hazy sunlight, heat haze visible outside the window, warm color palette. Dry, adventurous, and warm aesthetic.' 
  },
  { 
    id: 'ci_scifi_cyber_car', 
    label: 'CYBERPUNK SÜRÜŞÜ', 
    promptValue: 'ATMOSPHERE TASK: Inside a futuristic concept car. Holographic HUD displays on the windshield, cyan and magenta interior lights, dark background with high-tech details. Synthetic, futuristic, and high-impact aesthetic.' 
  },
  { 
    id: 'ci_winter_road_trip', 
    label: 'KIŞ YOLCULUĞU', 
    promptValue: 'ATMOSPHERE TASK: Inside a car during a winter trip. Fogged-up windows, snowy forest visible through the glass, soft blue overcast light, subject wearing warm textures. Cozy, cold, and atmospheric aesthetic.' 
  },
  { 
    id: 'ci_maybach_interior', 
    label: 'MAYBACH KONFORU', 
    promptValue: 'ATMOSPHERE TASK: Inside a Maybach cabin. Rose gold accents, silver champagne flutes, ultra-plush pillows, diffused afternoon sun through tinted glass. Wealthy, calm, and prestigious aesthetic.' 
  },
  { 
    id: 'ci_rally_car_interior', 
    label: 'RALLİ ARACI (YARIŞ)', 
    promptValue: 'ATMOSPHERE TASK: Inside a stripped-down rally race car. Roll cage visible, bucket seats, fire extinguisher, maps and dusty windows, harsh direct light. Physical, gritty, and adrenaline-focused aesthetic.' 
  },
  { 
    id: 'ci_concept_minimalist', 
    label: 'BEYAZ KONSEPT ARAÇ', 
    promptValue: 'ATMOSPHERE TASK: Inside an all-white prototype concept car. Pure white seamless surfaces, integrated soft white LED lines, no steering wheel (autonomous), architectural lighting. Sterile, zen, and future-tech aesthetic.' 
  }
],
'beach': [
  { 
    id: 'be_tropical_paradise', 
    label: 'TROPİKAL CENNET', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a pristine tropical beach. Crystal clear turquoise water, leaning palm trees, white powdery sand, bright midday sun. Exotic, vibrant, and vacation aesthetic.' 
  },
  { 
    id: 'be_golden_hour_sunset', 
    label: 'GÜNBATIMI (ALTIN SAAT)', 
    promptValue: 'ATMOSPHERE TASK: A beautiful beach at sunset. Intense golden sunlight, orange and purple sky, sun reflecting on the wet sand and small waves. Radiant, romantic, and cinematic aesthetic.' 
  },
  { 
    id: 'be_luxury_resort_cabana', 
    label: 'LÜKS RESORT (KABANA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a luxury private beach cabana. White flowing curtains, comfortable daybeds, wooden deck, view of the infinity ocean. Elite, relaxed, and expensive aesthetic.' 
  },
  { 
    id: 'be_maldives_villa', 
    label: 'MALDVİLER (SU ÜSTÜ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the deck of an overwater villa. Clear blue water beneath, wooden walkway, endless horizon, bright tropical atmosphere. Ultra-luxury, serene, and iconic aesthetic.' 
  },
  { 
    id: 'be_rocky_cliff_cove', 
    label: 'KAYALIK KOY / MAĞARA', 
    promptValue: 'ATMOSPHERE TASK: A secluded beach cove surrounded by dramatic high cliffs. Deep blue water, hidden cave entrance, direct cinematic sunlight, raw natural textures. Dramatic, isolated, and adventurous aesthetic.' 
  },
  { 
    id: 'be_bali_jungle_beach', 
    label: 'BALİ (ORMAN SAHİLİ)', 
    promptValue: 'ATMOSPHERE TASK: A beach where the dense green jungle meets the dark volcanic sand. Mist in the air, lush tropical foliage, exotic and moody atmosphere. Organic, mysterious, and wild aesthetic.' 
  },
  { 
    id: 'be_mediterranean_coast', 
    label: 'AKDENİZ (EGE KIYISI)', 
    promptValue: 'ATMOSPHERE TASK: A rocky Mediterranean coastline. Whitewashed stones, deep indigo sea, bright harsh sun, bougainvillea flowers nearby. Fresh, breezy, and coastal aesthetic.' 
  },
  { 
    id: 'be_night_bonfire_party', 
    label: 'GECE (SAHİL ATEŞİ)', 
    promptValue: 'ATMOSPHERE TASK: A beach at night. Warm glow from a large bonfire, sparks in the air, dark ocean silhouettes, starlit sky. Moody, social, and atmospheric aesthetic.' 
  },
  { 
    id: 'be_surfers_point', 
    label: 'SÖRF NOKTASI', 
    promptValue: 'ATMOSPHERE TASK: A rugged beach with large rolling waves. Surfboards leaning on a vintage jeep, salt spray in the air, dynamic Atlantic ocean vibe. Energetic, cool, and active aesthetic.' 
  },
  { 
    id: 'be_santorini_view', 
    label: 'SANTORINI MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: On a high terrace overlooking the volcanic caldera and blue sea. White buildings with blue domes in background, brilliant sunlight. Premium, architectural, and breathtaking aesthetic.' 
  },
  { 
    id: 'be_white_sand_dunes', 
    label: 'BEYAZ KUMULLAR', 
    promptValue: 'ATMOSPHERE TASK: Vast minimalist white sand dunes. No vegetation, pure geometric sand shapes, high contrast lighting, bright blue sky. Clean, surreal, and high-fashion aesthetic.' 
  },
  { 
    id: 'be_morning_yoga_zen', 
    label: 'SABAH SESSİZLİĞİ (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: A calm beach at dawn. Soft blue and pink morning light, misty horizon, very smooth water, peaceful and quiet atmosphere. Meditative, serene, and calm aesthetic.' 
  },
  { 
    id: 'be_beach_club_lounge', 
    label: 'BEACH CLUB (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: A trendy modern beach club. Designer sunbeds, professional bar setup, palm trees, upbeat social atmosphere, summer fashion vibe. Hip, social, and vibrant aesthetic.' 
  },
  { 
    id: 'be_shipwreck_mystical', 
    label: 'GEMİ ENKAZI (GİZEMLİ)', 
    promptValue: 'ATMOSPHERE TASK: A foggy beach with an old wooden shipwreck half-buried in the sand. Melancholic atmosphere, muted colors, textural wood and rust. Artistic, mysterious, and cinematic aesthetic.' 
  },
  { 
    id: 'be_monaco_riviera', 
    label: 'FRANSIZ RİVİERASI', 
    promptValue: 'ATMOSPHERE TASK: A luxury beach in Cannes or Monaco. High-end yachts in the distance, striped umbrellas, glamorous crowd, Mediterranean summer sun. Opulence, classic, and high-society aesthetic.' 
  },
  { 
    id: 'be_under_pier_shadows', 
    label: 'İSKELE ALTI (GÖLGELİ)', 
    promptValue: 'ATMOSPHERE TASK: Underneath a large wooden pier on the beach. Symmetrical pillars, rhythmic shadows, light flickering through the planks, wet sand. Textured, architectural, and cool aesthetic.' 
  },
  { 
    id: 'be_iceland_black_sand', 
    label: 'İZLANDA (SİYAH KUM)', 
    promptValue: 'ATMOSPHERE TASK: A black sand beach with basalt columns. Dark moody sky, white crashing waves, cold atmosphere, dramatic volcanic textures. Raw, powerful, and extraordinary aesthetic.' 
  },
  { 
    id: 'be_hammock_palm_shade', 
    label: 'HAMAK (PALMİYE GÖLGESİ)', 
    promptValue: 'ATMOSPHERE TASK: Tying a hammock between two palm trees on the beach. Subject relaxing in the shade, dappled sunlight, turquoise sea view. Peaceful, lazy, and vacation aesthetic.' 
  },
  { 
    id: 'be_windy_coastal_path', 
    label: 'RÜZGARLI KIYI YOLU', 
    promptValue: 'ATMOSPHERE TASK: A sandy path leading to the ocean. Sea grass blowing in the wind, soft overcast light, natural and wild coastal atmosphere. Breezy, organic, and poetic aesthetic.' 
  },
  { 
    id: 'be_shallow_lagoon', 
    label: 'SIĞ LAGÜN / HAVUZ', 
    promptValue: 'ATMOSPHERE TASK: A very shallow turquoise lagoon. Ripples on the water surface reflecting the sun, white sand bottom, bright and airy. Minimalist, refreshing, and pure aesthetic.' 
  }
],
'nature': [
  { 
    id: 'na_deep_pine_forest', 
    label: 'DERİN ÇAM ORMANI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject deep inside a dense pine forest. Tall evergreen trees, needles covering the ground, cool green and brown tones, dappled sunlight filtering through the canopy. Organic, fresh, and secluded aesthetic.' 
  },
  { 
    id: 'na_misty_morning_mountains', 
    label: 'SİSLİ DAĞ MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: A high-altitude mountain setting at dawn. Subject surrounded by thick white mist, layers of blue mountain ridges in the background, cold crisp air. Mysterious, serene, and ethereal aesthetic.' 
  },
  { 
    id: 'na_autumn_vibrant_leaves', 
    label: 'SONBAHAR (RENKLİ YAPRAKLAR)', 
    promptValue: 'ATMOSPHERE TASK: A park or forest during peak autumn. Intense orange, red, and yellow maple leaves everywhere, golden sunlight, warm and nostalgic atmosphere. Radiant, seasonal, and poetic aesthetic.' 
  },
  { 
    id: 'na_tropical_jungle_waterfall', 
    label: 'TROPİKAL ŞELALE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject near a powerful waterfall inside a tropical jungle. Lush exotic plants, mist spray in the air, wet rock textures, vibrant green environment. Wild, refreshing, and adventurous aesthetic.' 
  },
  { 
    id: 'na_enchanted_fairytale_forest', 
    label: 'MASALSI BÜYÜLÜ ORMAN', 
    promptValue: 'ATMOSPHERE TASK: A mystical, enchanted forest at twilight. Glowing mushrooms, floating fireflies, ancient twisted trees with moss, soft purple and blue ambient light. Dreamy, magical, and surreal aesthetic.' 
  },
  { 
    id: 'na_bamboo_grove_zen', 
    label: 'BAMBU ORMANI (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: Inside a tall green bamboo grove. Vertical repetitive lines of bamboo, soft diffused green light, calm and meditative atmosphere. Zen, minimalist, and peaceful aesthetic.' 
  },
  { 
    id: 'na_lavender_field_sunset', 
    label: 'LAVANTA BAHÇESİ (PROVENCE)', 
    promptValue: 'ATMOSPHERE TASK: Endless rows of purple lavender fields during sunset. Soft violet sky, golden sun on the horizon, warm and fragrant atmosphere. Romantic, colorful, and picturesque aesthetic.' 
  },
  { 
    id: 'na_snowy_birch_winter', 
    label: 'KARLI NYET ORMANI', 
    promptValue: 'ATMOSPHERE TASK: A winter scene with white birch trees. Heavy snow on branches, pure white ground, cold blue sky, subject in warm textures. Frozen, clean, and silent aesthetic.' 
  },
  { 
    id: 'na_desert_canyon_rocks', 
    label: 'KAYALIK KANYON', 
    promptValue: 'ATMOSPHERE TASK: Inside a narrow red rock canyon (Antelope Canyon style). Swirling rock formations, sharp light beams from above, warm orange and red tones. Architectural, natural, and dramatic aesthetic.' 
  },
  { 
    id: 'na_wildflower_meadow', 
    label: 'YABAN ÇİÇEĞİ ÇAYIRI', 
    promptValue: 'ATMOSPHERE TASK: A vast open field filled with various colorful wildflowers. Bright blue sky with fluffy white clouds, warm summer sun, breezy and light atmosphere. Natural, cheerful, and free-spirited aesthetic.' 
  },
  { 
    id: 'na_river_bank_serenity', 
    label: 'NEHİR KENARI (HUZUR)', 
    promptValue: 'ATMOSPHERE TASK: On the bank of a clear flowing river. Smooth pebbles, reflection of trees in the water, soft natural light, calm forest sounds. Serene, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'na_mossy_ancient_temple', 
    label: 'YOSUNLU ANTİK TAPINAK', 
    promptValue: 'ATMOSPHERE TASK: Hidden stone ruins deep in a forest. Walls covered in thick green moss and ivy, shafts of light through tree branches, mystical and historical. Timeless, mysterious, and moody aesthetic.' 
  },
  { 
    id: 'na_sunflower_field_gold', 
    label: 'AYÇİÇEĞİ TARLASI', 
    promptValue: 'ATMOSPHERE TASK: Standing in the middle of giant sunflowers. Intense yellow colors, bright summer sun directly overhead, clear sky. Vibrant, happy, and high-impact aesthetic.' 
  },
  { 
    id: 'na_dark_rainy_woods', 
    label: 'YAĞMURLU KARANLIK ORMAN', 
    promptValue: 'ATMOSPHERE TASK: A dense forest during a storm. Dark grey sky, rain visible in the air, wet bark and leaf textures, moody and cold atmosphere. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'na_cherry_blossom_sakura', 
    label: 'KİRAZ ÇİÇEĞİ (SAKURA)', 
    promptValue: 'ATMOSPHERE TASK: Underneath blooming cherry blossom trees. Soft pink petals falling like snow, bright spring light, romantic and delicate atmosphere. Elegant, feminine, and ethereal aesthetic.' 
  },
  { 
    id: 'na_cliff_edge_ocean_view', 
    label: 'UÇURUM KENARI (DENİZ)', 
    promptValue: 'ATMOSPHERE TASK: Standing on a high grassy cliff overlooking the crashing ocean waves below. Strong wind, dramatic clouds, raw power of nature. Heroic, grand, and breathtaking aesthetic.' 
  },
  { 
    id: 'na_pine_cone_pathway', 
    label: 'KOZALAKLI PATİKA', 
    promptValue: 'ATMOSPHERE TASK: A narrow hiking trail through a forest. Perspective following the path, fallen pine cones and dry leaves, natural textures, soft afternoon sun. Organic, earthy, and traveler aesthetic.' 
  },
  { 
    id: 'na_swamp_mystery_bayou', 
    label: 'GİZEMLİ BATAKLIK', 
    promptValue: 'ATMOSPHERE TASK: A cypress swamp with Spanish moss hanging from trees. Still dark water, lily pads, eerie green lighting, mystical atmosphere. Southern gothic, moody, and unique aesthetic.' 
  },
  { 
    id: 'na_golden_wheat_field', 
    label: 'ALTIN BUĞDAY TARLASI', 
    promptValue: 'ATMOSPHERE TASK: A vast field of ripe golden wheat. Tall stalks swaying in the wind, late afternoon sun creating long shadows, warm color palette. Nostalgic, peaceful, and warm aesthetic.' 
  },
  { 
    id: 'na_abstract_nature_elements', 
    label: 'SOYUT DOĞA ELEMENTLERİ', 
    promptValue: 'ATMOSPHERE TASK: A stylized nature setting focusing on macro details. Large oversized leaves, abstract water ripples, floating flower petals, soft bokeh background. Artistic, minimalist, and dreamlike aesthetic.' 
  }
],
'mountain_chalet': [
  { 
    id: 'mc_cozy_fireplace_lounge', 
    label: 'ŞÖMİNE BAŞI (SICAK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in front of a large stone fireplace inside a luxury mountain chalet. Roaring fire, warm orange glow, fur rugs on the floor, soft leather armchairs. Cozy, intimate, and wealthy winter aesthetic.' 
  },
  { 
    id: 'mc_snowy_balcony_view', 
    label: 'KARLI BALKON (MANZARA)', 
    promptValue: 'ATMOSPHERE TASK: On a wooden balcony of a high-altitude chalet. Breathtaking view of snow-capped mountain peaks, heavy snow on the railings, bright crisp winter sun. Grand, peaceful, and adventurous aesthetic.' 
  },
  { 
    id: 'mc_luxury_ski_lodge_lobby', 
    label: 'KAYAK OTELİ LOBİSİ', 
    promptValue: 'ATMOSPHERE TASK: Inside the grand lobby of a 5-star ski resort. High ceilings with wooden beams, massive chandeliers, elite guests in background, large windows showing the slopes. Opulence, social, and prestigious aesthetic.' 
  },
  { 
    id: 'mc_morning_coffee_terrace', 
    label: 'SABAH KAHVESİ (TERAS)', 
    promptValue: 'ATMOSPHERE TASK: Subject relaxing on a sun-drenched wooden terrace. Steaming coffee cup, wearing warm luxury knitwear, mountains reflecting in the glass windows. Serene, healthy, and high-end lifestyle aesthetic.' 
  },
  { 
    id: 'mc_outdoor_jacuzzi_snow', 
    label: 'KARLI JAKUZİ KEYFİ', 
    promptValue: 'ATMOSPHERE TASK: An outdoor heated jacuzzi surrounded by deep snow. Steam rising into the cold air, evergreen trees covered in frost, twilight blue hour sky. Unexpected, luxury, and sensory aesthetic.' 
  },
  { 
    id: 'mc_night_starlit_cabin', 
    label: 'YILDIZLI GECE KABİNİ', 
    promptValue: 'ATMOSPHERE TASK: Outside a small luxury cabin at night. Warm lights glowing from windows, milky way galaxy visible in the dark sky, blue moonlit snow. Magical, isolated, and cinematic aesthetic.' 
  },
  { 
    id: 'mc_rustic_kitchen_breakfast', 
    label: 'RUSTİK MUTFAK (KAHVALTI)', 
    promptValue: 'ATMOSPHERE TASK: A warm wooden chalet kitchen. Fresh bread and jams on a farmhouse table, soft morning light hitting the timber walls, cozy domestic atmosphere. Organic, warm, and authentic aesthetic.' 
  },
  { 
    id: 'mc_reading_nook_window', 
    label: 'PENCERE ÖNÜ (OKUMA)', 
    promptValue: 'ATMOSPHERE TASK: A cozy window seat with thick blankets. Subject reading a book, heavy snowfall visible through the glass pane, soft indoor lighting. Introspective, calm, and textural aesthetic.' 
  },
  { 
    id: 'mc_nordic_minimalist_chalet', 
    label: 'NORDİK MİNAMALİST DAĞ EVİ', 
    promptValue: 'ATMOSPHERE TASK: Inside a modern Scandinavian-style chalet. Large floor-to-ceiling glass walls, minimalist white and light wood furniture, clean lines, cold winter light. Zen, advanced, and architectural aesthetic.' 
  },
  { 
    id: 'mc_candlelit_dinner_alpine', 
    label: 'ALPLER MUM IŞIĞI YEMEĞİ', 
    promptValue: 'ATMOSPHERE TASK: A beautifully set dining table with candles inside a chalet. Fine wine glasses, dim moody lighting, snow falling outside the dark windows. Romantic, sophisticated, and elite aesthetic.' 
  },
  { 
    id: 'mc_bedroom_loft_view', 
    label: 'ÇATI KATI YATAK ODASI', 
    promptValue: 'ATMOSPHERE TASK: A luxury loft bedroom under a sloped wooden roof. Massive duvet, soft pillows, a large triangular window looking directly at the mountain summit. Private, cozy, and dreamy aesthetic.' 
  },
  { 
    id: 'mc_entrance_snowy_porch', 
    label: 'KARLI GİRİŞ (SUNDURMA)', 
    promptValue: 'ATMOSPHERE TASK: Standing at the heavy wooden entrance door of a chalet. Lanterns glowing, subject holding skis or a bag, fresh snow falling. Dynamic, welcoming, and traveler aesthetic.' 
  },
  { 
    id: 'mc_vintage_ski_lodge_vibe', 
    label: 'NOSTALJİK KAYAK KULÜBÜ', 
    promptValue: 'ATMOSPHERE TASK: A classic 1980s styled ski lodge interior. Vintage wooden skis on walls, retro colorful upholstery, warm analog film texture, cozy and crowded vibe. Nostalgic, stylish, and kitsch aesthetic.' 
  },
  { 
    id: 'mc_misty_mountain_morning', 
    label: 'SİSLİ DAĞ SABAHI', 
    promptValue: 'ATMOSPHERE TASK: Looking out from a chalet window into the fog. Pine tree silhouettes appearing through the mist, soft grey-blue lighting, melancholic and silent atmosphere. Poetic, moody, and ethereal aesthetic.' 
  },
  { 
    id: 'mc_steaming_hot_chocolate', 
    label: 'SICAK ÇİKOLATA KEYFİ', 
    promptValue: 'ATMOSPHERE TASK: Close-up of the subject relaxing with a mug of hot chocolate with marshmallows. Wearing a thick cable-knit sweater, soft bokeh of Christmas lights in background. Texture-heavy, cozy, and heartwarming aesthetic.' 
  },
  { 
    id: 'mc_sunset_apres_ski', 
    label: 'SUNSET APRES-SKI', 
    promptValue: 'ATMOSPHERE TASK: Outdoor bar area at a ski resort during sunset. People in stylish winter gear, orange sky reflecting on goggles, festive high-energy atmosphere. Vibrant, social, and glamorous aesthetic.' 
  },
  { 
    id: 'mc_modern_glass_chalet', 
    label: 'MODERN CAM DAĞ EVİ', 
    promptValue: 'ATMOSPHERE TASK: A futuristic glass-enclosed living area in the mountains. 360-degree views of the peaks, high-tech fireplace, floating furniture, blue hour lighting. Sci-fi, premium, and breathtaking aesthetic.' 
  },
  { 
    id: 'mc_attic_hideaway_zen', 
    label: 'GİZLİ TAVAN ARASI', 
    promptValue: 'ATMOSPHERE TASK: A small, low-ceiling wooden attic space. Filled with rugs and books, tiny window with a view of a snowy forest, peaceful hideaway vibe. Intimate, quiet, and organic aesthetic.' 
  },
  { 
    id: 'mc_wine_cellar_tasting', 
    label: 'ŞARAP MAHZENİ (DAĞ)', 
    promptValue: 'ATMOSPHERE TASK: Inside a stone wine cellar beneath a chalet. Rows of bottles, dim warm spotlighting, wooden tasting table, sophisticated and cool atmosphere. Cultured, expensive, and moody aesthetic.' 
  },
  { 
    id: 'mc_fireside_gaming_area', 
    label: 'ŞÖMİNE YANI OYUN ALANI', 
    promptValue: 'ATMOSPHERE TASK: A cozy corner of a chalet with board games or a chess set. Soft light from the fire, wool blankets, relaxing evening activities vibe. Social, intellectual, and comfortable aesthetic.' 
  }
],
'gym': [
  { 
    id: 'gy_modern_bodybuilding_floor', 
    label: 'AĞIRLIK ALANI (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a modern bodybuilding area. Rows of dumbbells, squat racks, rubber flooring, industrial gray and black tones, focused high-intensity lighting. Strong, professional, and dedicated aesthetic.' 
  },
  { 
    id: 'gy_cardio_zone_view', 
    label: 'KARDİO BÖLÜMÜ (MANZARA)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in front of treadmills or ellipticals. Large windows showing a city skyline, bright morning light, energetic atmosphere. Active, healthy, and urban lifestyle aesthetic.' 
  },
  { 
    id: 'gy_industrial_crossfit_box', 
    label: 'CROSSFIT (ENDÜSTRİYEL)', 
    promptValue: 'ATMOSPHERE TASK: Inside a raw CrossFit box. Concrete floors, wooden boxes, hanging ropes, chalk in the air, natural window light mixed with overhead floodlights. Gritty, powerful, and functional aesthetic.' 
  },
  { 
    id: 'gy_boxing_ring_dramatic', 
    label: 'BOKS RİNGİ (DRAMATİK)', 
    promptValue: 'ATMOSPHERE TASK: At the edge of a boxing ring. Hanging heavy bags in the background, low-key dramatic lighting, spotlight on the subject, misty/sweaty atmosphere. Intense, heroic, and gritty aesthetic.' 
  },
  { 
    id: 'gy_yoga_pilates_zen', 
    label: 'YOGA / PİLATES (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: A calm yoga or pilates studio. Wooden floors, large mirrors reflecting soft morning sun, plants in the corner, minimalist and spacious. Peaceful, flexible, and balanced aesthetic.' 
  },
  { 
    id: 'gy_boutique_luxury_fitness', 
    label: 'BUTİK LÜKS SPOR SALONU', 
    promptValue: 'ATMOSPHERE TASK: Inside a 5-star luxury boutique fitness center. Marble accents, designer lighting (warm/gold), premium wooden details, elite and exclusive atmosphere. Expensive, sophisticated, and polished aesthetic.' 
  },
  { 
    id: 'gy_neon_cyber_fitness', 
    label: 'NEON / CYBER FİTNESS', 
    promptValue: 'ATMOSPHERE TASK: A futuristic gym lit by cyan and magenta neon LED strips. Dark environment, glowing digital screens on equipment, high-tech vibe. Synthetic, energetic, and modern aesthetic.' 
  },
  { 
    id: 'gy_outdoor_calisthenics_park', 
    label: 'AÇIK HAVA (KALİSTENİK)', 
    promptValue: 'ATMOSPHERE TASK: An outdoor workout park at sunset. Pull-up bars, blue sky with orange clouds, urban city park background, bright direct golden light. Free, active, and natural aesthetic.' 
  },
  { 
    id: 'gy_locker_room_elegant', 
    label: 'SOYUNMA ODASI (ŞIK)', 
    promptValue: 'ATMOSPHERE TASK: Inside a high-end gym locker room. Dark wood lockers, large well-lit mirrors, soft luxury towels, sophisticated spa-like atmosphere. Private, successful, and clean aesthetic.' 
  },
  { 
    id: 'gy_spinning_studio_vibes', 
    label: 'SPİNNİNG / BİSİKLET', 
    promptValue: 'ATMOSPHERE TASK: Inside a spinning studio with ranks of bikes. Low-key purple and blue club lighting, dynamic energy, blurred motion in background. Rhythmic, intense, and social aesthetic.' 
  },
  { 
    id: 'gy_home_gym_minimalist', 
    label: 'EV SPOR ODASI (MİNİMALİST)', 
    promptValue: 'ATMOSPHERE TASK: A clean minimalist home gym setup. Pelotons, yoga mat, bright natural light from a window, cozy but functional home environment. Disciplined, private, and comfortable aesthetic.' 
  },
  { 
    id: 'gy_basketball_court_retro', 
    label: 'BASKETBOL SAHASI', 
    promptValue: 'ATMOSPHERE TASK: On an indoor polished wooden basketball court. Bright overhead stadium lights, basketball hoop in background, classic athletic atmosphere. Sporty, classic, and energetic aesthetic.' 
  },
  { 
    id: 'gy_swimming_pool_indoor', 
    label: 'KAPALI YÜZME HAVUZU', 
    promptValue: 'ATMOSPHERE TASK: At the edge of a turquoise indoor lap pool. Blue water reflections on the walls, bright airy atmosphere, high-end wellness center vibe. Fresh, athletic, and serene aesthetic.' 
  },
  { 
    id: 'gy_morning_stretching_sunlight', 
    label: 'SABAH ESNEMESİ (GÜNEŞ)', 
    promptValue: 'ATMOSPHERE TASK: Subject stretching near a large gym window. Strong morning sunbeams (volumetric light), dust particles dancing in the light, calm but active start to the day. Radiant, hopeful, and organic aesthetic.' 
  },
  { 
    id: 'gy_gritty_basement_gym', 
    label: 'YERALTI / OLD SCHOOL', 
    promptValue: 'ATMOSPHERE TASK: An old-school basement gym. Rusty iron weights, brick walls, harsh single-bulb lighting, raw and authentic bodybuilding vibe. Tough, vintage, and hardcore aesthetic.' 
  },
  { 
    id: 'gy_sports_rehab_clinic', 
    label: 'REHABİLİTASYON / KLİNİK', 
    promptValue: 'ATMOSPHERE TASK: A clean sports science or physical therapy clinic. Advanced testing equipment, white and light blue colors, medical and professional atmosphere. Technical, safe, and elite athletic aesthetic.' 
  },
  { 
    id: 'gy_climbing_wall_adventure', 
    label: 'TIRMANMA DUVARI', 
    promptValue: 'ATMOSPHERE TASK: In front of a colorful indoor rock climbing wall. Ropes and harnesses, vibrant colors, active adventurous atmosphere. Dynamic, daring, and unique aesthetic.' 
  },
  { 
    id: 'gy_victory_moment_podium', 
    label: 'ZAFER ANI / PODYUM', 
    promptValue: 'ATMOSPHERE TASK: Subject in an athletic setting with a symbolic winner feel. Flashbulbs in the distance, bright celebratory lighting, prideful and successful atmosphere. Heroic, powerful, and iconic aesthetic.' 
  },
  { 
    id: 'gy_supplements_juice_bar', 
    label: 'BAR / PROTEİN KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: At a sleek gym juice bar. Shakers, fresh fruits, modern design, professional social fitness vibe. Social, healthy, and trendy aesthetic.' 
  },
  { 
    id: 'gy_tech_integrated_fitness', 
    label: 'TEKNOLOJİK FİTNESS', 
    promptValue: 'ATMOSPHERE TASK: Using high-tech interactive gym equipment. Large glowing digital displays, smart mirroring, futuristic athletic atmosphere. Advanced, data-driven, and innovative aesthetic.' 
  }
],
'museum': [
  { 
    id: 'mu_classical_art_hall', 
    label: 'KLASİK SANAT SALONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a grand classical museum hall. Marble floors, ornate gold-framed oil paintings on dark velvet walls, classical statues, soft directional gallery lighting. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'mu_ancient_egypt_exhibit', 
    label: 'ANTİK MISIR SERGİSİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject among Egyptian artifacts. Stone sarcophagi, hieroglyphics on walls, dim warm lighting, golden accents, mysterious historical atmosphere. Ancient, scholarly, and intense aesthetic.' 
  },
  { 
    id: 'mu_modern_minimalist_wing', 
    label: 'MODERN MİNİMALİST KANAT', 
    promptValue: 'ATMOSPHERE TASK: A "White Cube" style modern museum wing. Pure white vast walls, polished grey concrete floors, large abstract canvases, sharp minimalist spotlighting. Clinical, sophisticated, and high-fashion aesthetic.' 
  },
  { 
    id: 'mu_natural_history_dino', 
    label: 'DOĞA TARİHİ (DİNOZOR)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in front of a massive dinosaur skeleton (T-Rex). High glass ceilings, Victorian museum architecture, wooden display cases, bright natural light. Grand, adventurous, and scholarly aesthetic.' 
  },
  { 
    id: 'mu_renaissance_sculpture_court', 
    label: 'RÖNESANS HEYKEL AVLUSU', 
    promptValue: 'ATMOSPHERE TASK: An indoor courtyard filled with white marble Renaissance sculptures. Arched walkways, natural sunlight from a skylight, peaceful and academic atmosphere. Timeless, classical, and artistic aesthetic.' 
  },
  { 
    id: 'mu_digital_immersive_space', 
    label: 'DİJİTAL DENEYİM (IMMERSIVE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a dark room with 360-degree digital projections of art (Van Gogh style). Vibrant moving colors, subject lit by the glow of the art, futuristic museum atmosphere. Psychedelic, vibrant, and modern aesthetic.' 
  },
  { 
    id: 'mu_louvre_pyramid_interior', 
    label: 'LOUVRE TARZI (MODERN/ANTİK)', 
    promptValue: 'ATMOSPHERE TASK: Inside a museum that blends modern glass architecture with ancient stone walls. Dramatic shadows, geometric glass patterns, sunlight beams, historic artifacts in background. Iconic, architectural, and prestigious aesthetic.' 
  },
  { 
    id: 'mu_dark_academia_library', 
    label: 'DARK ACADEMIA KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A historic museum library with floor-to-ceiling wooden bookshelves. Rolling ladders, old globes, green shaded lamps, warm moody lighting. Intellectual, mysterious, and cozy aesthetic.' 
  },
  { 
    id: 'mu_contemporary_installation', 
    label: 'ÇAĞDAŞ ENSTALASYON', 
    promptValue: 'ATMOSPHERE TASK: Place the subject inside a large-scale contemporary art installation (e.g., hanging lights or mirrors). Reflective surfaces, unconventional shapes, artistic lighting. Creative, unique, and trend-focused aesthetic.' 
  },
  { 
    id: 'mu_space_science_center', 
    label: 'UZAY / BİLİM MERKEZİ', 
    promptValue: 'ATMOSPHERE TASK: Inside a high-tech science museum. Astronaut suits, hanging satellites, dark blue ambient lighting, interactive digital displays. Tech-focused, futuristic, and adventurous aesthetic.' 
  },
  { 
    id: 'mu_vintage_costume_gallery', 
    label: 'VİNTAGE KOSTÜM GALERİSİ', 
    promptValue: 'ATMOSPHERE TASK: A museum section dedicated to historic fashion. Mannequins in elaborate gowns behind glass, soft focused lighting, velvet ropes, prestigious atmosphere. Sartorial, historical, and elegant aesthetic.' 
  },
  { 
    id: 'mu_underground_vault_artifacts', 
    label: 'YERALTI MAHZENİ / HAZİNE', 
    promptValue: 'ATMOSPHERE TASK: A vaulted stone basement museum. Dim warm spotlights on gold artifacts, moody shadows, ancient atmosphere. Secretive, intense, and historic aesthetic.' 
  },
  { 
    id: 'mu_guggenheim_spiral_ramp', 
    label: 'MODERN SPİRAL MİMARİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a white curving spiral museum ramp. Symmetrical architectural lines, soft top-down lighting, minimalist background. Sculptural, clean, and futuristic aesthetic.' 
  },
  { 
    id: 'mu_oriental_artifact_room', 
    label: 'ORYANTAL ESERLER ODASI', 
    promptValue: 'ATMOSPHERE TASK: A museum hall with Asian art. Intricate wood carvings, silk tapestries, low warm lighting, red and gold accents. Cultural, detailed, and serene aesthetic.' 
  },
  { 
    id: 'mu_monochrome_photography', 
    label: 'MONOKROM FOTOĞRAF SERGİSİ', 
    promptValue: 'ATMOSPHERE TASK: A gallery of black and white photography. Stark white walls, black frames, high-contrast lighting, subject in a sophisticated pose. Sleek, dramatic, and intellectual aesthetic.' 
  },
  { 
    id: 'mu_medieval_armory_hall', 
    label: 'ORTAÇAĞ ZIRH SALONU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject among suits of knights\' armor. Stone walls, banners, dim natural light from narrow slits, heavy and historic atmosphere. Powerful, dramatic, and medieval aesthetic.' 
  },
  { 
    id: 'mu_pop_art_exhibition', 
    label: 'POP-ART SERGİSİ', 
    promptValue: 'ATMOSPHERE TASK: Bright primary colors, oversized bold art, neon signs, playful and energetic museum atmosphere. Graphic, vibrant, and fun aesthetic.' 
  },
  { 
    id: 'mu_oceanographic_aquarium', 
    label: 'OKYANUS / AKVARYUM MÜZESİ', 
    promptValue: 'ATMOSPHERE TASK: Inside a grand maritime museum. Deep blue reflections from large fish tanks, skeletal remains of whales, nautical lighting. Ethereal, aquatic, and calm aesthetic.' 
  },
  { 
    id: 'mu_brutalist_concrete_art', 
    label: 'BRÜTALİST BETON MÜZE', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete museum interior. Massive grey walls, sharp geometric shapes, beams of sunlight (God rays), minimalist decor. Cold, structural, and powerful aesthetic.' 
  },
  { 
    id: 'mu_museum_cafe_elegant', 
    label: 'MÜZE KAFESİ (ŞIK)', 
    promptValue: 'ATMOSPHERE TASK: A high-end cafe inside a museum. Large windows looking out to a sculpture garden, marble tables, sophisticated guests, soft midday sun. Relaxed, expensive, and cultured aesthetic.' 
  }
],
'office': [
  { 
    id: 'of_executive_suite', 
    label: 'YÖNETİCİ OFİSİ (ELİT)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a high-end executive corner office. Large mahogany desk, leather high-back chair, panoramic floor-to-ceiling city views, premium stationery. Powerful, successful, and expensive aesthetic.' 
  },
  { 
    id: 'of_creative_agency_open', 
    label: 'YARATICI AJANS (AÇIK OFİS)', 
    promptValue: 'ATMOSPHERE TASK: A vibrant open-plan creative agency. Colorful furniture, mood boards on walls, industrial lighting, social and collaborative atmosphere. Dynamic, trendy, and artistic aesthetic.' 
  },
  { 
    id: 'of_modern_tech_startup', 
    label: 'TEKNOLOJİ STARTUP', 
    promptValue: 'ATMOSPHERE TASK: A modern silicon valley style tech startup. Standing desks, multiple monitors, high-tech gadgets, casual and innovative atmosphere. Clean, futuristic, and professional aesthetic.' 
  },
  { 
    id: 'of_home_office_minimalist', 
    label: 'EV OFİSİ (MİNİMALİST)', 
    promptValue: 'ATMOSPHERE TASK: A clean minimalist home office. Sleek white desk, a single designer lamp, plant in the corner, soft natural light from a window. Zen, focused, and organized aesthetic.' 
  },
  { 
    id: 'of_corporate_boardroom', 
    label: 'TOPLANTI SALONU (BOARDROOM)', 
    promptValue: 'ATMOSPHERE TASK: A grand corporate boardroom. Massive glass table, ergonomic chairs, presentation screen in background, formal business atmosphere. Authoritative, serious, and corporate aesthetic.' 
  },
  { 
    id: 'of_coworking_industrial', 
    label: 'CO-WORKING (ENDÜSTRİYEL)', 
    promptValue: 'ATMOSPHERE TASK: A trendy co-working space in a converted warehouse. Exposed brick walls, steel beams, communal wooden tables, warm Edison bulb lighting. Hip, urban, and productive aesthetic.' 
  },
  { 
    id: 'of_law_firm_classic', 
    label: 'HUKUK BÜROSU (KLASİK)', 
    promptValue: 'ATMOSPHERE TASK: A traditional prestigious law firm office. Deep wood paneling, walls lined with legal books, brass lamps, heavy desk. Trustworthy, historic, and scholarly aesthetic.' 
  },
  { 
    id: 'of_skyscraper_night_view', 
    label: 'GÖKDELEN (GECE MANZARASI)', 
    promptValue: 'ATMOSPHERE TASK: An office high in a skyscraper at night. Interior reflected in the glass, bokeh city lights of a metropolis outside, moody blue ambient light. Cinematic, successful, and ambitious aesthetic.' 
  },
  { 
    id: 'of_modern_lobby_reception', 
    label: 'MODERN LOBİ / RESEPSİYON', 
    promptValue: 'ATMOSPHERE TASK: A sleek corporate lobby. Marble reception desk, abstract sculpture art, bright even lighting, grand architecture. Welcoming, prestigious, and high-end aesthetic.' 
  },
  { 
    id: 'of_office_garden_outdoor', 
    label: 'TERAS OFİS / BAHÇE', 
    promptValue: 'ATMOSPHERE TASK: An outdoor office terrace with lush green plants. Outdoor seating, sunshine, view of city rooftops, fresh and breezy atmosphere. Healthy, alternative, and creative aesthetic.' 
  },
  { 
    id: 'of_architecture_studio', 
    label: 'MİMARLIK OFİSİ', 
    promptValue: 'ATMOSPHERE TASK: An architecture or design studio. Large drafting tables, physical building models, blueprints spread out, technical rulers, bright natural light. Precise, technical, and creative aesthetic.' 
  },
  { 
    id: 'of_quiet_library_nook', 
    label: 'SESSİZ ÇALIŞMA KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy quiet corner for deep work. Bookstacks nearby, soft lamp light, focused and scholarly atmosphere. Intellectual, calm, and private aesthetic.' 
  },
  { 
    id: 'of_break_room_social', 
    label: 'KAFETERYA / SOSYAL ALAN', 
    promptValue: 'ATMOSPHERE TASK: A modern office break room. Coffee machine, comfortable lounge seating, casual and social vibe. Relaxed, trendy, and friendly aesthetic.' 
  },
  { 
    id: 'of_trading_floor_energy', 
    label: 'BORSA / TİCARET ZEMİNİ', 
    promptValue: 'ATMOSPHERE TASK: A high-energy financial trading floor. Scrolling stock tickers, multiple terminals, fast-paced and intense atmosphere. Aggressive, successful, and data-driven aesthetic.' 
  },
  { 
    id: 'of_video_conference_setup', 
    label: 'VİDEO KONFERANS (WEBINAR)', 
    promptValue: 'ATMOSPHERE TASK: A perfect video call setup. Professional ring light reflection in subject\'s eyes, blurred bookshelf background, high-quality microphone visible. Tech-savvy, modern, and professional aesthetic.' 
  },
  { 
    id: 'of_designer_luxury_office', 
    label: 'MODA / TASARIM OFİSİ', 
    promptValue: 'ATMOSPHERE TASK: A high-fashion designer\'s office. Fabric swatches, luxury fashion magazines, mood boards, mannequin in the background. Glamorous, stylish, and high-impact aesthetic.' 
  },
  { 
    id: 'of_retro_1960s_office', 
    label: 'RETRO OFİS (MAD MEN TARZI)', 
    promptValue: 'ATMOSPHERE TASK: A mid-century modern office from the 1960s. Walnut furniture, vintage typewriter, analog clock, warm film-grain photography texture. Nostalgic, stylish, and historic aesthetic.' 
  },
  { 
    id: 'of_sunny_morning_desk', 
    label: 'GÜNEŞLİ SABAH MASASI', 
    promptValue: 'ATMOSPHERE TASK: A desk right next to a sunny window. Strong sunbeams, shadows of window frames, dust particles in light, coffee cup steaming. Hopeful, organic, and peaceful start-of-day aesthetic.' 
  },
  { 
    id: 'of_sleek_tech_lab', 
    label: 'TEKNOLOJİ LABORATUVARI', 
    promptValue: 'ATMOSPHERE TASK: A futuristic hardware or robotics lab. Wires, circuit boards, blue LED strips, clean technical environment. Sci-fi, advanced, and professional aesthetic.' 
  },
  { 
    id: 'of_evening_overtime_moody', 
    label: 'MESAİ (GECE ÇALIŞMASI)', 
    promptValue: 'ATMOSPHERE TASK: A dimly lit office late at night. Only the desk lamp is on, glowing computer screen reflection on subject, dark silhouettes of office plants. Moody, dedicated, and cinematic aesthetic.' 
  }
],
'library': [
  { 
    id: 'li_classic_vatican', 
    label: 'KLASİK VATİKAN KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a grand historical library with arched ceilings, frescoes, and floor-to-ceiling rows of ancient leather-bound books. Ornate wooden ladders, golden warm lighting, prestigious atmosphere. Opulent, historic, and scholarly aesthetic.' 
  },
  { 
    id: 'li_modern_minimalist_study', 
    label: 'MODERN MİNİMALİST KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern public library. Clean white shelves, bright LED strip lighting, large windows showing a green park, minimalist desk and high-end chairs. Zen, focused, and futuristic aesthetic.' 
  },
  { 
    id: 'li_dark_academia_nook', 
    label: 'DARK ACADEMIA KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy, dimly lit corner of an old university library. Stacks of books on the floor, a single green shaded lamp, dark wood textures, moody shadows, mysterious atmosphere. Intellectual, academic, and cinematic aesthetic.' 
  },
  { 
    id: 'li_futuristic_digital_archive', 
    label: 'FÜTÜRİSTİK DİJİTAL ARŞİV', 
    promptValue: 'ATMOSPHERE TASK: A high-tech library of the future. Holographic book displays, glowing blue light panels, interactive glass screens, dark metallic and glass interior. Tech-focused, advanced, and sci-fi aesthetic.' 
  },
  { 
    id: 'li_oxford_style_hall', 
    label: 'OXFORD TARZI BÜYÜK SALON', 
    promptValue: 'ATMOSPHERE TASK: A traditional long reading hall with green lamps on long wooden tables. Stained glass windows, quiet scholarly energy, rows of dark oak bookshelves. Majestic, traditional, and prestigious aesthetic.' 
  },
  { 
    id: 'li_cozy_home_library', 
    label: 'SAMİMİ EV KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: A warm, lived-in home library. Comfortable armchair with a wool blanket, fireplace in the background, bookshelves filled with colorful spines, soft afternoon sunbeams. Peaceful, cozy, and domestic aesthetic.' 
  },
  { 
    id: 'li_industrial_loft_books', 
    label: 'ENDÜSTRİYEL LOFT OKUMA ALANI', 
    promptValue: 'ATMOSPHERE TASK: A library converted from an old factory. Exposed brick, metal pipes, high ceilings, large Crittall-style windows, sprawling bookshelves. Raw, edgy, and urban aesthetic.' 
  },
  { 
    id: 'li_magical_fantasy_scrolls', 
    label: 'BÜYÜLÜ / FANTASTİK KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A mystical library with floating books and glowing scrolls. Infinite winding staircases, magical stardust in the air, purple and blue ambient lighting. Dreamy, magical, and surreal aesthetic.' 
  },
  { 
    id: 'li_vintage_newspaper_archive', 
    label: 'VİNTAGE GAZETE ARŞİVİ', 
    promptValue: 'ATMOSPHERE TASK: A library hall focused on old newspapers and maps. Large filing cabinets, yellowed paper textures, analog film-grain photography feel, warm sepia lighting. Nostalgic, historic, and investigative aesthetic.' 
  },
  { 
    id: 'li_secret_hidden_passage', 
    label: 'GİZLİ GEÇİTLİ KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A mysterious library where a bookshelf is slightly ajar, revealing a secret room. Low moody lighting, spiderwebs (subtle), candle-like glow. Secretive, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'li_bright_scandinavian_reading', 
    label: 'İSKANDİNAV OKUMA SALONU', 
    promptValue: 'ATMOSPHERE TASK: A very bright library with light wood (birch) and white surfaces. Large plants, colorful modern art, plenty of natural northern daylight. Fresh, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'li_underground_concrete_vault', 
    label: 'YERALTI BETON MAHZENİ', 
    promptValue: 'ATMOSPHERE TASK: A brutalist library built underground into raw concrete. Dim minimalist lighting, cold stone textures, silent and isolated atmosphere. Powerful, structural, and calm aesthetic.' 
  },
  { 
    id: 'li_botanical_greenhouse_library', 
    label: 'BOTANİK KÜTÜPHANE (SERA)', 
    promptValue: 'ATMOSPHERE TASK: A library integrated into a Victorian greenhouse. Plants growing between books, glass walls showing forest exterior, bright tropical light. Organic, fresh, and ethereal aesthetic.' 
  },
  { 
    id: 'li_maritime_ocean_view_library', 
    label: 'DENİZ MANZARALI KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A high-end library overlooking the ocean. Large windows, nautical maps on walls, navy blue and white decor, sunlight reflecting off the water outside. Serene, coastal, and luxury aesthetic.' 
  },
  { 
    id: 'li_children_illustration_world', 
    label: 'ÇOCUK / MASAL KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: A colorful, whimsical library with oversized book props and playful shapes. Soft textures, bright primary colors, imaginative and cheerful atmosphere. Graphic, vibrant, and fun aesthetic.' 
  },
  { 
    id: 'li_royal_manuscript_room', 
    label: 'KRALİYET ELYAZMALARI ODASI', 
    promptValue: 'ATMOSPHERE TASK: A small, high-security library room for rare manuscripts. Velvet display cases, specialized dim UV lighting, dark interior, feeling of immense value. Expensive, scholarly, and elite aesthetic.' 
  },
  { 
    id: 'li_sunny_attic_reading_den', 
    label: 'GÜNEŞLİ TAVAN ARASI', 
    promptValue: 'ATMOSPHERE TASK: A library in an attic with sloped wooden ceilings. Tiny skylights letting in beams of sun, cozy pillows on the floor, quiet and peaceful hideaway vibe. Intimate, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'li_monastery_stone_scriptorium', 
    label: 'MANASTIR YAZI ODASI', 
    promptValue: 'ATMOSPHERE TASK: A medieval monastery library with stone walls and small arched windows. Quills and ink, parchment roles, cold dramatic lighting, spiritual and ancient atmosphere. Historic, raw, and moody aesthetic.' 
  },
  { 
    id: 'li_modern_university_campus', 
    label: 'ÜNİVERSİTE KAMPÜS KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: A busy contemporary university library. Students in soft blur background, rows of computers mixed with books, energetic academic atmosphere, bright lighting. Active, professional, and youthful aesthetic.' 
  },
  { 
    id: 'li_night_overtime_study', 
    label: 'GECE MESAİSİ / ETÜT', 
    promptValue: 'ATMOSPHERE TASK: A library late at night. Most lights are off except for a single desk lamp, moon visible through the window, dark reflections on bookshelves. Moody, dedicated, and cinematic aesthetic.' 
  }
],
'cafe': [
  { 
    id: 'cf_parisienne_sidewalk', 
    label: 'PARİS KALDIRIM KAFESİ', 
    promptValue: 'ATMOSPHERE TASK: Place the subject at a classic Parisian sidewalk cafe. Small round marble tables, rattan chairs, wicker furniture, view of a historic cobblestone street, soft morning light. Romantic, chic, and European aesthetic.' 
  },
  { 
    id: 'cf_industrial_bakery_loft', 
    label: 'ENDÜSTRİYEL FIRIN (LOFT)', 
    promptValue: 'ATMOSPHERE TASK: A trendy industrial-style bakery cafe. Exposed brick walls, high ceilings, large metal windows, scent of fresh bread vibe, warm Edison bulb lighting. Urban, raw, and cozy aesthetic.' 
  },
  { 
    id: 'cf_minimalist_scandi_white', 
    label: 'İSKANDİNAV MİNİMALİST', 
    promptValue: 'ATMOSPHERE TASK: A bright minimalist Scandinavian coffee shop. Light wood (birch) furniture, all-white walls, clean lines, single branch in a vase, natural northern daylight. Zen, clean, and modern aesthetic.' 
  },
  { 
    id: 'cf_vintage_records_coffee', 
    label: 'RETRO PLAK KAFESİ', 
    promptValue: 'ATMOSPHERE TASK: A vintage-style cafe filled with vinyl records. Turntable in background, posters of old jazz legends, warm dimmed lighting, retro 70s furniture. Nostalgic, cool, and musical aesthetic.' 
  },
  { 
    id: 'cf_luxury_hotel_tea_room', 
    label: 'LÜKS OTEL ÇAY SALONU', 
    promptValue: 'ATMOSPHERE TASK: An elegant high-end tea room in a 5-star hotel. Crystal chandeliers, velvet armchairs, tiers of pastries, white linen, sophisticated atmosphere. Opulent, prestigious, and high-society aesthetic.' 
  },
  { 
    id: 'cf_books_and_beans_library', 
    label: 'KİTAP KAFE (SAMİMİ)', 
    promptValue: 'ATMOSPHERE TASK: A cozy cafe integrated with a bookstore. Floor-to-ceiling bookshelves, soft reading lamps, comfortable sofas, quiet and scholarly atmosphere. Intellectual, warm, and domestic aesthetic.' 
  },
  { 
    id: 'cf_tropical_garden_bistro', 
    label: 'TROPİKAL BAHÇE BİSTRO', 
    promptValue: 'ATMOSPHERE TASK: An outdoor cafe surrounded by lush tropical plants and flowers. Wooden tables, sunlight filtering through leaves, exotic and breezy atmosphere. Fresh, organic, and vacation aesthetic.' 
  },
  { 
    id: 'cf_cyberpunk_neon_barista', 
    label: 'CYBERPUNK / NEON KAFE', 
    promptValue: 'ATMOSPHERE TASK: A futuristic coffee bar in a rainy neon city. Magenta and cyan LED accents, dark metallic surfaces, steam rising from coffee machines, moody high-tech environment. Synthetic, vibrant, and sci-fi aesthetic.' 
  },
  { 
    id: 'cf_italian_espresso_bar', 
    label: 'İTALYAN ESPRESSO BARI', 
    promptValue: 'ATMOSPHERE TASK: A fast-paced authentic Italian espresso bar. Stand-up marble counter, shiny chrome espresso machine, blurred baristas in white shirts, morning energetic vibe. Lively, authentic, and fast aesthetic.' 
  },
  { 
    id: 'cf_art_gallery_cafe_modern', 
    label: 'MODERN SANAT KAFESİ', 
    promptValue: 'ATMOSPHERE TASK: A sleek cafe inside a contemporary art gallery. High ceilings, large abstract paintings on walls, architectural lighting, sophisticated creative crowd. Artistic, polished, and cultural aesthetic.' 
  },
  { 
    id: 'cf_rainy_day_cosy_window', 
    label: 'YAĞMURLU CAM KENARI', 
    promptValue: 'ATMOSPHERE TASK: Subject sitting by a rain-streaked window in a cozy cafe. Warm indoor lighting reflecting on the glass, grey moody exterior, soft textures, intimate atmosphere. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'cf_rooftop_city_view', 
    label: 'ÇATI KATI (ŞEHİR MANZARASI)', 
    promptValue: 'ATMOSPHERE TASK: A trendy rooftop cafe overlooking a metropolis skyline. Sunset glow, modern lounge seating, glass railings, high-altitude urban vibe. Successful, expansive, and glamorous aesthetic.' 
  },
  { 
    id: 'cf_botanical_glasshouse', 
    label: 'BOTANİK SERA KAFE', 
    promptValue: 'ATMOSPHERE TASK: A cafe built inside a Victorian greenhouse. Glass walls and ceiling, hanging fern plants, shadows of leaves, bright airy sunshine. Ethereal, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'cf_traditional_turkish_kahve', 
    label: 'GELENEKSEL TÜRK KAHVECİSİ', 
    promptValue: 'ATMOSPHERE TASK: A historic Turkish coffee house. Copper coffee pots (cezve), patterned tile walls, Turkish rugs, low wooden tables, warm nostalgic atmosphere. Cultural, authentic, and detailed aesthetic.' 
  },
  { 
    id: 'cf_modern_beach_shack', 
    label: 'SAHİL KAFESİ (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: A chic open-air cafe on the beach. Turquoise ocean background, white sand, light wood textures, summer breeze effect, bright tropical sun. Relaxed, breezy, and coastal aesthetic.' 
  },
  { 
    id: 'cf_dark_academia_study', 
    label: 'DARK ACADEMIA KAFE', 
    promptValue: 'ATMOSPHERE TASK: A moody cafe with a heavy academic vibe. Antique globes, old sketches, dark oak furniture, candlelight and low lamps, smell of old paper vibe. Intellectual, mysterious, and traditional aesthetic.' 
  },
  { 
    id: 'cf_pink_girly_aesthetic', 
    label: 'PEMBE KONSEPT (POPÜLER)', 
    promptValue: 'ATMOSPHERE TASK: A trendy "Instagrammable" all-pink cafe. Pink velvet stalls, neon quotes on walls, flowers everywhere, bright and playful atmosphere. Graphic, vibrant, and fun aesthetic.' 
  },
  { 
    id: 'cf_underground_jazz_coffee', 
    label: 'YERALTI JAZZ KAFE', 
    promptValue: 'ATMOSPHERE TASK: A basement cafe with a performance stage. Low ceiling, dim red and blue lighting, silhouettes of instruments, smoky and intimate atmosphere. Soulful, moody, and secretive aesthetic.' 
  },
  { 
    id: 'cf_sunny_backyard_patio', 
    label: 'GÜNEŞLİ ARKA BAHÇE', 
    promptValue: 'ATMOSPHERE TASK: A quiet backyard cafe patio. Gravel ground, wooden fence, climbing ivy, dappled afternoon sunlight through a large tree. Peaceful, domestic, and organic aesthetic.' 
  },
  { 
    id: 'cf_minimalist_concrete_lab', 
    label: 'BETON MİNİMALİST LABORATUAR', 
    promptValue: 'ATMOSPHERE TASK: A futuristic coffee lab. Raw concrete surfaces, stainless steel equipment, sharp geometric lines, clinical white lighting. Modern, technical, and structural aesthetic.' 
  }
],
'bar_club': [
  { 
    id: 'bn_exclusive_vip_lounge', 
    label: 'VIP LOUNGE (ELİT)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an exclusive high-end VIP lounge. Deep velvet sofas, gold finishings, soft purple ambient lighting, champagne bottles with sparklers in the background. Elite, expensive, and nightlife aesthetic.' 
  },
  { 
    id: 'bn_cyberpunk_neon_rave', 
    label: 'CYBERPUNK / NEON RAVE', 
    promptValue: 'ATMOSPHERE TASK: A futuristic underground techno club. Sharp neon magenta and cyan laser beams, dark industrial environment, smoke and haze machines, high-tech energy. Synthetic, vibrant, and sci-fi aesthetic.' 
  },
  { 
    id: 'bn_classic_speakeasy_jazz', 
    label: 'NOSTALJİK JAZZ BAR', 
    promptValue: 'ATMOSPHERE TASK: A 1920s style hidden speakeasy. Dim warm lighting, dark wood panels, brass rail bar, a vintage saxophone on a stand, smoky atmosphere. Mysterious, nostalgic, and sophisticated aesthetic.' 
  },
  { 
    id: 'bn_rooftop_cocktail_bar', 
    label: 'ÇATI KATI KOKTEYL BAR', 
    promptValue: 'ATMOSPHERE TASK: A trendy rooftop bar overlooking a glowing city skyline at night. Glass railings, modern outdoor furniture, warm decorative string lights, blue hour sky. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'bn_industrial_techno_warehouse', 
    label: 'ENDÜSTRİYEL TEKNO DEPOSU', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial warehouse club. Exposed brick, concrete pillars, strobe lights, dark and edgy underground atmosphere. Raw, gritty, and high-energy aesthetic.' 
  },
  { 
    id: 'bn_luxury_hotel_lobby_bar', 
    label: 'LÜKS OTEL BARI', 
    promptValue: 'ATMOSPHERE TASK: An elegant bar inside a 5-star grand hotel. High-gloss marble counter, crystal glassware, professional bartenders in suits, warm sophisticated lighting. Opulent, prestigious, and polished aesthetic.' 
  },
  { 
    id: 'bn_disco_retro_70s', 
    label: 'RETRO 70\'LER DİSKOSU', 
    promptValue: 'ATMOSPHERE TASK: A 1970s disco floor. Multi-colored light-up floor, disco ball reflections, warm vintage color palette, energetic party vibe. Nostalgic, funky, and colorful aesthetic.' 
  },
  { 
    id: 'bn_underground_rock_pub', 
    label: 'ROCK / PUNK PUB', 
    promptValue: 'ATMOSPHERE TASK: A gritty underground rock pub. Walls covered in band posters, neon beer signs, dark wooden textures, low-key moody lighting. Edgy, rebellious, and authentic aesthetic.' 
  },
  { 
    id: 'bn_minimalist_mixology_lab', 
    label: 'MİNİMALİST MİKSOLOJİ BARI', 
    promptValue: 'ATMOSPHERE TASK: A high-end laboratory-style cocktail bar. All-white or concrete minimalist design, surgical clean lines, unique glass vessels, soft white ambient light. Modern, technical, and architectural aesthetic.' 
  },
  { 
    id: 'bn_tiki_beach_bar_night', 
    label: 'TROPİKAL SAHİL BARI (GECE)', 
    promptValue: 'ATMOSPHERE TASK: An outdoor tiki bar on a beach at night. Bamboo structures, torches, palm trees silhouettes, moon reflecting on the ocean waves. Relaxed, exotic, and vacation aesthetic.' 
  },
  { 
    id: 'bn_dark_noir_lounge', 
    label: 'KARA FİLM (NOIR) LOUNGE', 
    promptValue: 'ATMOSPHERE TASK: A cinematic dark lounge with high contrast. Single sharp spotlight on the subject, deep shadows, smoke curling in the air, mysterious atmosphere. Dramatic, intense, and textural aesthetic.' 
  },
  { 
    id: 'bn_red_velvet_burlesque', 
    label: 'BURLESQUE / KIRMIZI VELVET', 
    promptValue: 'ATMOSPHERE TASK: A theatrical cabaret or burlesque bar. Deep red velvet curtains, vintage stage lights, dark and seductive atmosphere, gold details. Glamorous, mysterious, and dramatic aesthetic.' 
  },
  { 
    id: 'bn_tokyo_izakaya_night', 
    label: 'TOKYO IZAKAYA (GECE)', 
    promptValue: 'ATMOSPHERE TASK: A narrow vibrant Tokyo-style bar street. Glowing red lanterns, neon signs in Japanese, steam rising into the night air, busy urban energy. Authentic, vibrant, and cyberpunk aesthetic.' 
  },
  { 
    id: 'bn_modern_sports_bar', 
    label: 'MODERN SPOR BARI', 
    promptValue: 'ATMOSPHERE TASK: A high-tech sports bar. Multiple large glowing screens showing matches, neon team logos, social and energetic atmosphere. Active, social, and modern aesthetic.' 
  },
  { 
    id: 'bn_champagne_room_party', 
    label: 'ŞAMPANYA ODASI (PARTİ)', 
    promptValue: 'ATMOSPHERE TASK: A celebratory atmosphere with golden confetti in the air. Multiple champagne glasses, bright flashing lights, high-energy social vibe. Festive, rich, and social aesthetic.' 
  },
  { 
    id: 'bn_ice_bar_frozen', 
    label: 'BUZ BARI (DONMUŞ)', 
    promptValue: 'ATMOSPHERE TASK: A bar made entirely of ice. Blue glowing frozen walls, sculptures carved from ice, cold misty air, unique polar atmosphere. Extraordinary, cold, and sci-fi aesthetic.' 
  },
  { 
    id: 'bn_bohemian_rooftop_garden', 
    label: 'BOHEM TERAS BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: A relaxed rooftop garden bar. Macrame decor, floor pillows, warm string lights (fairy lights), lots of green plants, sunset or blue hour sky. Organic, peaceful, and trendy aesthetic.' 
  },
  { 
    id: 'bn_sleek_penthouse_party', 
    label: 'PENTHOUSE PARTİSİ', 
    promptValue: 'ATMOSPHERE TASK: A private luxury apartment party. City lights through massive windows, designer furniture, modern art, exclusive social vibe. Wealthy, polished, and contemporary aesthetic.' 
  },
  { 
    id: 'bn_vintage_dive_bar', 
    label: 'ESKİ MAHALLE BARI (DIVE)', 
    promptValue: 'ATMOSPHERE TASK: A classic American-style dive bar. Pool table in background, neon Budweiser signs, worn leather stools, gritty but cozy social atmosphere. Authentic, nostalgic, and raw aesthetic.' 
  },
  { 
    id: 'bn_high_fashion_afterparty', 
    label: 'MODA HAFTASI AFTER-PARTY', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a high-fashion event after-party. Flashbulbs from cameras, blurred silhouettes of models and celebrities, sharp directional lighting, high-contrast night scene. Iconic, professional, and glamorous aesthetic.' 
  }
],
'vintage_loft': [
  { 
    id: 'vl_exposed_brick_classic', 
    label: 'KLASİK TUĞLA DUVAR', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a classic industrial loft. Exposed red brick walls, high timber ceilings, large black-framed factory windows, warm Edison bulb lighting. Raw, authentic, and urban aesthetic.' 
  },
  { 
    id: 'vl_artist_studio_messy', 
    label: 'SANATÇI ATÖLYESİ (LOFT)', 
    promptValue: 'ATMOSPHERE TASK: A spacious loft converted into an artist studio. Large canvases leaning against walls, paint splatters on the wooden floor, intense natural light from high windows. Creative, messy, and soulful aesthetic.' 
  },
  { 
    id: 'vl_mid_century_modern', 
    label: 'MID-CENTURY MODERN LOFT', 
    promptValue: 'ATMOSPHERE TASK: A loft filled with 1950s designer furniture. Teak wood sideboards, iconic lounge chairs, geometric patterns, soft warm afternoon sun. Retro, sophisticated, and polished aesthetic.' 
  },
  { 
    id: 'vl_dark_industrial_moody', 
    label: 'KARANLIK ENDÜSTRİYEL (MOODY)', 
    promptValue: 'ATMOSPHERE TASK: A moody, dimly lit loft. Dark grey concrete walls, vintage leather sofa, single spotlight on the subject, mysterious urban atmosphere. Cinematic, intense, and textural aesthetic.' 
  },
  { 
    id: 'vl_bohemian_plants_loft', 
    label: 'BOHEM BİTKİ EVİ', 
    promptValue: 'ATMOSPHERE TASK: A sun-drenched loft filled with oversized tropical plants. Hanging macrame, vintage rugs, white painted brick walls, bright airy atmosphere. Organic, fresh, and peaceful aesthetic.' 
  },
  { 
    id: 'vl_music_record_lounge', 
    label: 'MÜZİK VE PLAK ODASI', 
    promptValue: 'ATMOSPHERE TASK: A loft dedicated to music. Walls lined with vinyl records, vintage speakers, a grand piano in the corner, warm evening lighting. Nostalgic, cool, and intellectual aesthetic.' 
  },
  { 
    id: 'vl_minimalist_concrete_zen', 
    label: 'MİNİMALİST BETON LOFT', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete minimalist loft. Sharp geometric lines, vast empty space, single designer chair, cold high-contrast lighting. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'vl_vintage_fashion_atelier', 
    label: 'VİNTAGE MODA ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: A loft used as a fashion workshop. Old sewing machines, rolls of fabric, dress forms, bright professional studio lighting mixed with natural light. Sartorial, creative, and elegant aesthetic.' 
  },
  { 
    id: 'vl_nyc_soho_view', 
    label: 'NYC SOHO MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: Inside a Soho-style loft. View of iconic cast-iron buildings through the window, fire escapes visible, bright midday sun. Urban, classic, and high-end aesthetic.' 
  },
  { 
    id: 'vl_rustic_wood_cabin_loft', 
    label: 'RUSTİK AHŞAP LOFT', 
    promptValue: 'ATMOSPHERE TASK: A loft with extensive use of reclaimed wood. Heavy beams, farmhouse table, cozy warm lighting, texture-rich environment. Earthy, warm, and authentic aesthetic.' 
  },
  { 
    id: 'vl_night_city_lights_bokeh', 
    label: 'GECE ŞEHİR IŞIKLARI (BOKEH)', 
    promptValue: 'ATMOSPHERE TASK: A dark loft at night. City skyline glowing through massive windows, blurred lights (bokeh) in the background, blue hour ambient light. Glamorous, urban, and cinematic aesthetic.' 
  },
  { 
    id: 'vl_shabby_chic_white', 
    label: 'SHABBY CHIC (BEYAZ)', 
    promptValue: 'ATMOSPHERE TASK: A distressed white-themed loft. Peeling paint textures, vintage lace, antique white furniture, soft hazy morning light. Romantic, delicate, and textural aesthetic.' 
  },
  { 
    id: 'vl_library_book_archive', 
    label: 'KÜTÜPHANE ARŞİV LOFTU', 
    promptValue: 'ATMOSPHERE TASK: A loft with floor-to-ceiling bookshelves. Rolling ladders, stacks of old books, scholarly atmosphere, soft lamp lighting. Intellectual, cozy, and historic aesthetic.' 
  },
  { 
    id: 'vl_industrial_kitchen_chef', 
    label: 'ENDÜSTRİYEL MUTFAK', 
    promptValue: 'ATMOSPHERE TASK: A loft with a professional open kitchen. Stainless steel counters, hanging copper pots, exposed pipes, bright natural light. Professional, clean, and lifestyle-focused aesthetic.' 
  },
  { 
    id: 'vl_gallery_showroom_clean', 
    label: 'GALERİ / SHOWROOM', 
    promptValue: 'ATMOSPHERE TASK: A loft used as a private art gallery. Spotlights on abstract art, polished floors, white walls, sophisticated elite atmosphere. Scholarly, expensive, and modern aesthetic.' 
  },
  { 
    id: 'vl_steampunk_inventor_den', 
    label: 'STEAMPUNK İCAT ODASI', 
    promptValue: 'ATMOSPHERE TASK: A loft filled with brass gears, old blueprints, and mechanical tools. Dark wood, copper pipes, misty atmosphere, warm directional light. Mysterious, technical, and unique aesthetic.' 
  },
  { 
    id: 'vl_sunny_morning_breakfast', 
    label: 'GÜNEŞLİ SABAH KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A quiet corner of a loft during breakfast. Small wooden table, steaming coffee, long shadows from window frames, bright hopeful light. Peaceful, domestic, and warm aesthetic.' 
  },
  { 
    id: 'vl_rainy_day_melancholy', 
    label: 'YAĞMURLU GÜN (NOIR)', 
    promptValue: 'ATMOSPHERE TASK: Inside a loft during a rainstorm. Raindrops on the massive glass, grey moody lighting, soft reflections on the floor, cozy indoor isolation. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'vl_luxury_penthouse_loft', 
    label: 'LÜKS PENTHOUSE LOFT', 
    promptValue: 'ATMOSPHERE TASK: An ultra-high-end modern loft. Designer art pieces, expensive materials (marble/silk), professional interior design, bright airy atmosphere. Opulent, prestigious, and high-fashion aesthetic.' 
  },
  { 
    id: 'vl_vintage_gym_boxing', 
    label: 'VİNTAGE BOKS ANTRENMANI', 
    promptValue: 'ATMOSPHERE TASK: A loft corner converted into a vintage gym. Leather heavy bag, wooden rings, old-school speed bag, harsh directional lighting, gritty textures. Physical, powerful, and authentic aesthetic.' 
  }
],
'terrace_garden': [
  { 
    id: 'rg_sunset_modern_lounge', 
    label: 'GÜNBATIMI MODERN LOUNGE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on a sleek modern rooftop garden during sunset. Minimalist designer furniture, glass railings, warm orange and purple sky, city skyline glowing in the background. Radiant, successful, and cinematic aesthetic.' 
  },
  { 
    id: 'rg_bohemian_fairy_lights', 
    label: 'BOHEM VE PERİ IŞIKLARI', 
    promptValue: 'ATMOSPHERE TASK: A cozy rooftop terrace decorated with hanging fairy lights and lanterns. Macrame cushions, wooden pallets, many potted plants, warm and intimate evening atmosphere. Organic, peaceful, and trendy aesthetic.' 
  },
  { 
    id: 'rg_urban_jungle_greenery', 
    label: 'ŞEHİR ORMANI (BOL YEŞİLLİK)', 
    promptValue: 'ATMOSPHERE TASK: A rooftop completely covered in lush green plants and vertical gardens. Ivy climbing the walls, tropical large leaves, soft natural light, contrast between nature and city concrete. Fresh, vibrant, and calm aesthetic.' 
  },
  { 
    id: 'rg_luxury_penthouse_pool', 
    label: 'LÜKS PENTHOUSE HAVUZU', 
    promptValue: 'ATMOSPHERE TASK: Beside an infinity pool on a luxury skyscraper rooftop. Crystal clear water reflecting the sky, white sunbeds, premium cocktail bar in background, bright midday sun. Opulent, elite, and vacation aesthetic.' 
  },
  { 
    id: 'rg_minimalist_zen_terrace', 
    label: 'MİNİMALİST ZEN TERAS', 
    promptValue: 'ATMOSPHERE TASK: A calm Japanese-inspired rooftop garden. Gravel floor, single bonsai tree, smooth stones, low wooden seating, white walls, soft diffused morning light. Zen, clean, and meditative aesthetic.' 
  },
  { 
    id: 'rg_mediterranean_pergola', 
    label: 'AKDENİZ STİLİ PERGOLA', 
    promptValue: 'ATMOSPHERE TASK: A rooftop with a white wooden pergola covered in bougainvillea flowers. Blue and white decor, terracotta pots, bright Mediterranean summer sun, sea view in the distance. Breezy, floral, and coastal aesthetic.' 
  },
  { 
    id: 'rg_night_city_bokeh', 
    label: 'GECE ŞEHİR MANZARASI (BOKEH)', 
    promptValue: 'ATMOSPHERE TASK: A dark rooftop garden at night. Blurred city lights (bokeh) creating a magical background, subject lit by soft amber accent lights, cool blue atmosphere. Glamorous, urban, and high-impact aesthetic.' 
  },
  { 
    id: 'rg_morning_yoga_sanctuary', 
    label: 'SABAH YOGA ALANI', 
    promptValue: 'ATMOSPHERE TASK: An open-air rooftop at dawn. Soft blue and pink sky, mist over the city, subject in a calm setting with yoga mats and plants. Serene, healthy, and ethereal aesthetic.' 
  },
  { 
    id: 'rg_industrial_steel_glass', 
    label: 'ENDÜSTRİYEL ÇELİK VE CAM', 
    promptValue: 'ATMOSPHERE TASK: A modern industrial rooftop with steel beams and large glass structures. Exposed pipes, weathered wood floors, sharp geometric shadows, bright high-contrast lighting. Creative, structural, and edgy aesthetic.' 
  },
  { 
    id: 'rg_rainy_glass_solarium', 
    label: 'YAĞMURLU CAM SERA', 
    promptValue: 'ATMOSPHERE TASK: Inside a glass-enclosed rooftop sunroom during rain. Raindrops streaking across the glass ceiling, grey moody lighting, cozy interior with plants, soft reflections on surfaces. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'rg_autumn_terrace_cozy', 
    label: 'SONBAHAR TERASI (SICAK)', 
    promptValue: 'ATMOSPHERE TASK: A rooftop garden with orange and red autumn leaves. Warm wool blankets on chairs, a small outdoor fire pit glowing, golden afternoon sun. Seasonal, cozy, and poetic aesthetic.' 
  },
  { 
    id: 'rg_starry_skyscrapers_night', 
    label: 'YILDIZLI ŞEHİR GECESİ', 
    promptValue: 'ATMOSPHERE TASK: Standing on a high terrace under a clear starry sky. Deep blue night, moon silhouette, surrounding skyscrapers with glowing windows. Magical, expansive, and ambitious aesthetic.' 
  },
  { 
    id: 'rg_high_end_champagne_bar', 
    label: 'LÜKS ŞAMPANYA BARI', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated rooftop champagne lounge. Marble tables, golden accents, well-dressed crowd in soft blur background, elegant evening lighting. Successful, wealthy, and prestigious aesthetic.' 
  },
  { 
    id: 'rg_mediterranean_terrace_sea', 
    label: 'DENİZ MANZARALI TERAS', 
    promptValue: 'ATMOSPHERE TASK: A terrace overlooking a coastline. Scent of salt water vibe, olive trees in pots, white stone floor, bright and airy summer atmosphere. Fresh, organic, and breathtaking aesthetic.' 
  },
  { 
    id: 'rg_cosy_outdoor_reading', 
    label: 'DIŞ MEKAN OKUMA KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A quiet nook on a green rooftop. Swing chair, lots of books, soft shade from a parasol, dappled sunlight filtering through plants. Introspective, calm, and private aesthetic.' 
  },
  { 
    id: 'rg_glass_floor_reflection', 
    label: 'CAM ZEMİN VE YANSIMA', 
    promptValue: 'ATMOSPHERE TASK: A futuristic rooftop with reflective glass flooring. Mirror effects of the sky and subject, architectural lighting, minimal decor, high-tech vibe. Surreal, clean, and modern aesthetic.' 
  },
  { 
    id: 'rg_golden_hour_warmth', 
    label: 'GÜNÜN ALTIN SAATİ', 
    promptValue: 'ATMOSPHERE TASK: An open terrace filled with warm golden sunlight. Long shadows, lens flare effects, soft glowing skin tones, peaceful environment. Radiant, hopeful, and cinematic aesthetic.' 
  },
  { 
    id: 'rg_abstract_floral_macro', 
    label: 'SOYUT ÇİÇEKSİ DETAYLAR', 
    promptValue: 'ATMOSPHERE TASK: A rooftop focuses on macro floral details. Oversized petals in frame, soft bokeh background of the city, artistic lighting. Delicate, colorful, and dreamlike aesthetic.' 
  },
  { 
    id: 'rg_architectural_wood_slats', 
    label: 'MİMARİ AHŞAP TASARIM', 
    promptValue: 'ATMOSPHERE TASK: A terrace with rhythmic vertical wood slats. Play of light and shadow, modern architectural lines, minimalist furniture, bright even lighting. Technical, polished, and structural aesthetic.' 
  },
  { 
    id: 'rg_evening_candlelight_glow', 
    label: 'GECE MUM IŞIĞI ETKİSİ', 
    promptValue: 'ATMOSPHERE TASK: A peaceful rooftop garden lit entirely by candles. Warm flickering glow, deep shadows, intimate and romantic luxury atmosphere, starlit background. Intimate, mysterious, and textural aesthetic.' 
  }
],
'meditation_room': [
  { 
    id: 'mr_zen_temple_interior', 
    label: 'ZEN TAPINAĞI (KAPALI)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a traditional Japanese zen temple. Tatami mats, sliding paper doors (shoji), soft diffused natural light, minimalist wood interior. Peaceful, authentic, and spiritual aesthetic.' 
  },
  { 
    id: 'mr_misty_mountain_peak', 
    label: 'DAĞ ZİRVESİ (SİSLİ)', 
    promptValue: 'ATMOSPHERE TASK: On a high mountain cliff overlooking a sea of clouds. Subject sitting in meditation, cold blue and white tones, thin mountain air, ethereal morning light. Ethereal, grand, and silent aesthetic.' 
  },
  { 
    id: 'mr_forest_stream_serenity', 
    label: 'ORMAN KIYISI / NEHİR', 
    promptValue: 'ATMOSPHERE TASK: Beside a small bubbling stream deep in a forest. Dappled sunlight through ancient trees, mossy stones, lush green surroundings, sound of water vibe. Organic, peaceful, and fresh aesthetic.' 
  },
  { 
    id: 'mr_modern_minimalist_studio', 
    label: 'MODERN MİNİMALİST STÜDYO', 
    promptValue: 'ATMOSPHERE TASK: A high-end modern yoga studio. All-white walls, light oak wood floor, large empty space, soft indirect LED lighting, high ceiling. Zen, clean, and advanced aesthetic.' 
  },
  { 
    id: 'mr_sunset_beach_yoga', 
    label: 'GÜNBATIMI SAHİLİ', 
    promptValue: 'ATMOSPHERE TASK: On a quiet white sand beach during sunset. Golden hour sun reflecting on the calm ocean, silhouettes of palm trees, warm orange and purple sky. Radiant, romantic, and mindful aesthetic.' 
  },
  { 
    id: 'mr_bamboo_grove_path', 
    label: 'BAMBU BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: Inside a tall, vertical bamboo forest. Soft green light, repetitive geometric patterns of bamboo stalks, peaceful and secluded atmosphere. Zen, vertical, and organic aesthetic.' 
  },
  { 
    id: 'mr_candlelit_evening_zen', 
    label: 'AKŞAM (MUM IŞIĞI)', 
    promptValue: 'ATMOSPHERE TASK: A dark serene room lit entirely by many different sized candles. Warm flickering glow, deep shadows, incense smoke curling in the air. Intimate, mysterious, and spiritual aesthetic.' 
  },
  { 
    id: 'mr_desert_dunes_silence', 
    label: 'ÇÖL KUMULLARI', 
    promptValue: 'ATMOSPHERE TASK: In the middle of vast minimalist sand dunes at dawn. Soft blue and pink sky, perfect silence, abstract sand shapes, clean light. Surreal, pure, and meditative aesthetic.' 
  },
  { 
    id: 'mr_tibetan_monastery_hall', 
    label: 'TİBET MANASTIRI SALONU', 
    promptValue: 'ATMOSPHERE TASK: A grand hall with red pillars and golden statues. Burning butter lamps, colorful tapestries, ancient wooden interior, spiritual and intense atmosphere. Cultural, historic, and moody aesthetic.' 
  },
  { 
    id: 'mr_lush_botanical_greenhouse', 
    label: 'BOTANİK SERA / BAHÇE', 
    promptValue: 'ATMOSPHERE TASK: Inside a Victorian glass greenhouse filled with exotic tropical plants. Sunlight filtering through glass and leaves, humid and fresh atmosphere, vibrant green colors. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'mr_minimalist_concrete_well', 
    label: 'BETON IŞIK KUYUSU', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete contemplative space. A single opening in the ceiling letting in a sharp beam of light (God ray), minimalist and cold but peaceful. Structural, powerful, and modern aesthetic.' 
  },
  { 
    id: 'mr_salt_cave_healing', 
    label: 'TUZ MAĞARASI (SPA)', 
    promptValue: 'ATMOSPHERE TASK: Inside a natural salt cave. Pink Himalayan salt walls glowing from within, soft warm ambient light, ethereal and healing atmosphere. Unique, textural, and serene aesthetic.' 
  },
  { 
    id: 'mr_cloudy_overlook_peace', 
    label: 'BULUTLARIN ÜSTÜ', 
    promptValue: 'ATMOSPHERE TASK: Standing or sitting above a thick layer of white clouds. Bright blue sky above, sun shining intensely, abstract and heavenly atmosphere. Dreamlike, expansive, and pure aesthetic.' 
  },
  { 
    id: 'mr_japanese_rock_garden', 
    label: 'JAPON TAŞ BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: A traditional Karesansui (dry landscape) garden. Raked white gravel, large artistic stones, minimalist courtyard, peaceful and intellectual atmosphere. Zen, architectural, and clean aesthetic.' 
  },
  { 
    id: 'mr_underwater_aquarium_zen', 
    label: 'SU ALTI / AKVARYUM', 
    promptValue: 'ATMOSPHERE TASK: Behind a massive glass wall of an aquarium. Deep blue water, silhouettes of fish, blue light reflections on the subject, silent and weightless feeling. Ethereal, aquatic, and calm aesthetic.' 
  },
  { 
    id: 'mr_rustic_heritage_cabin', 
    label: 'RUSTİK AHŞAP KULÜBE', 
    promptValue: 'ATMOSPHERE TASK: A simple wooden cabin in the woods. Warm timber walls, sunlight through a small window, organic textures, cozy and humble atmosphere. Earthy, authentic, and peaceful aesthetic.' 
  },
  { 
    id: 'mr_floating_lotus_pond', 
    label: 'LOTUS HAVUZU', 
    promptValue: 'ATMOSPHERE TASK: On a wooden walkway over a pond filled with blooming lotus flowers. Still water reflecting the sky, soft pastel colors, peaceful and delicate. Poetic, feminine, and ethereal aesthetic.' 
  },
  { 
    id: 'mr_spiritual_ashram_courtyard', 
    label: 'AŞRAM AVLUSU (HİNDİSTAN)', 
    promptValue: 'ATMOSPHERE TASK: A sunny open-air courtyard in an Indian ashram. Whitewashed walls, marigold flowers, soft morning chanting vibe, warm and cultural atmosphere. Authentic, colorful, and spiritual aesthetic.' 
  },
  { 
    id: 'mr_minimalist_white_infinity', 
    label: 'SONSUZ BEYAZLIK', 
    promptValue: 'ATMOSPHERE TASK: A pure white, seamless "Infinity Cove" studio. No shadows, soft diffused light from everywhere, focus entirely on the subject\'s peace. Minimalist, clean, and high-fashion zen aesthetic.' 
  },
  { 
    id: 'mr_sacred_temple_ruins', 
    label: 'ANTİK TAPINAK KALINTILARI', 
    promptValue: 'ATMOSPHERE TASK: Ancient stone ruins covered in vines. Sunlight breaking through the old structures, historical and spiritual weight, raw natural textures. Timeless, mysterious, and grand aesthetic.' 
  }
],
'wine_cellar': [
  { 
    id: 'wc_ancient_stone_vault', 
    label: 'ANTİK TAŞ MAHZEN', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in an ancient vaulted stone wine cellar. Thick limestone walls, rounded arches, dim warm candlelight, dust motes in the air. Authentic, historic, and moody aesthetic.' 
  },
  { 
    id: 'wc_luxury_estate_cellar', 
    label: 'LÜKS KÖŞK KAVI', 
    promptValue: 'ATMOSPHERE TASK: Inside a high-end private estate wine cellar. Polished mahogany wood racks, marble floors, premium wine bottles, soft elegant gallery lighting. Opulent, successful, and expensive aesthetic.' 
  },
  { 
    id: 'wc_modern_glass_minimalist', 
    label: 'MODERN CAM TASARIM', 
    promptValue: 'ATMOSPHERE TASK: A futuristic glass-enclosed wine cellar. Minimalist black metal racks, integrated cool white LED strips, clean architectural lines, transparent and advanced. Sleek, high-tech, and modern aesthetic.' 
  },
  { 
    id: 'wc_french_chateau_classic', 
    label: 'FRANSIZ ŞATOSU MAHZENI', 
    promptValue: 'ATMOSPHERE TASK: A traditional French chateau wine cellar. Oak barrels stacked high, damp stone floor, soft natural light from a small street-level window. Traditional, prestigious, and authentic aesthetic.' 
  },
  { 
    id: 'wc_candlelit_tasting_nook', 
    label: 'MUM IŞIĞINDA TADIM', 
    promptValue: 'ATMOSPHERE TASK: A small intimate cellar nook lit entirely by candles. Rough wooden table, wine glasses, deep shadows, romantic and secretive atmosphere. Intimate, mysterious, and textural aesthetic.' 
  },
  { 
    id: 'wc_underground_hidden_vault', 
    label: 'YERALTI GİZLİ BÖLME', 
    promptValue: 'ATMOSPHERE TASK: A secret hidden vault deep underground. Narrow stone corridors, ancient spiderwebs (subtle), dim moody lighting, feeling of hidden treasures. Secretive, intense, and historic aesthetic.' 
  },
  { 
    id: 'wc_giant_oak_barrels', 
    label: 'DEV MEŞE FIÇILAR', 
    promptValue: 'ATMOSPHERE TASK: Standing between massive vertical oak wine aging barrels. Massive scale, wood grain textures, warm amber lighting, aromatic brewery vibe. Organic, powerful, and textural aesthetic.' 
  },
  { 
    id: 'wc_venetian_brick_damp', 
    label: 'VENEDİK TARZI TUĞLA', 
    promptValue: 'ATMOSPHERE TASK: A damp Venetian-style brick cellar. Textured old bricks with salt stains, soft cool lighting reflecting off wet surfaces, historic and moody. Raw, atmospheric, and cinematic aesthetic.' 
  },
  { 
    id: 'wc_skyscraper_wine_lounge', 
    label: 'GÖKDELEN ŞARAP ODASI', 
    promptValue: 'ATMOSPHERE TASK: A luxury wine room high in a skyscraper. Floor-to-ceiling glass walls showing city night lights, designer furniture, successful urban atmosphere. Glamorous, urban, and wealthy aesthetic.' 
  },
  { 
    id: 'wc_tuscany_rustic_farmhouse', 
    label: 'TOSKANA DAĞ EVİ MAHZENİ', 
    promptValue: 'ATMOSPHERE TASK: A rustic Italian farmhouse cellar. Warm terracotta tiles, rough-hewn timber beams, natural sunlight filtering down, welcoming and organic. Earthy, warm, and authentic aesthetic.' 
  },
  { 
    id: 'wc_archival_wine_library', 
    label: 'ŞARAP KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: An archival library of wine. Thousands of bottles arranged on infinite wooden shelves, rolling ladders, scholarly and focused atmosphere. Intellectual, expensive, and overwhelming aesthetic.' 
  },
  { 
    id: 'wc_industrial_brick_steel', 
    label: 'ENDÜSTRİYEL TUĞLA VE ÇELİK', 
    promptValue: 'ATMOSPHERE TASK: A modern loft-style wine cellar. Exposed red brick, black steel racks, industrial lighting, raw and edgy atmosphere. Urban, structural, and cool aesthetic.' 
  },
  { 
    id: 'wc_mossy_cave_cellar', 
    label: 'YOSUNLU MAĞARA MAHZENİ', 
    promptValue: 'ATMOSPHERE TASK: A natural rock cave used as a cellar. Thick green moss on walls, water droplets, cool blue lighting, mystical and organic atmosphere. Extraordinary, fresh, and mysterious aesthetic.' 
  },
  { 
    id: 'wc_hitech_climate_lab', 
    label: 'İKLİM KONTROLLÜ LAB', 
    promptValue: 'ATMOSPHERE TASK: A high-tech laboratory-style wine storage. Stainless steel surfaces, digital climate displays, cyan LED glow, sterile and advanced. Sci-fi, technical, and innovative aesthetic.' 
  },
  { 
    id: 'wc_sommelier_tasting_table', 
    label: 'SOMMELIER TADIM MASASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject behind a professional sommelier tasting table. Decanters, wine tools, bright focused spotlight on the table, blurred cellar background. Professional, elite, and cultured aesthetic.' 
  },
  { 
    id: 'wc_spanish_bodega_warm', 
    label: 'İSPANYOL BODEGA', 
    promptValue: 'ATMOSPHERE TASK: A warm and airy Spanish bodega. High ceilings, yellow ochre walls, massive wooden doors, soft afternoon sun. Cultural, vibrant, and traditional aesthetic.' 
  },
  { 
    id: 'wc_dark_noir_mystery', 
    label: 'KARANLIK VE GİZEMLİ NOIR', 
    promptValue: 'ATMOSPHERE TASK: A high-contrast cinematic cellar scene. Sharp directional lighting, deep shadows, subject silhouetted against glowing bottles. Dramatic, intense, and intellectual aesthetic.' 
  },
  { 
    id: 'wc_rustic_mountain_cellar', 
    label: 'RUSTİK DAĞ MAHZENİ', 
    promptValue: 'ATMOSPHERE TASK: A heavy timber and stone cellar in a mountain chalet. Fur rugs, fireplace nearby (out of focus), warm and cozy atmosphere. Earthy, wealthy, and comfortable aesthetic.' 
  },
  { 
    id: 'wc_aristocratic_dining_pass', 
    label: 'ARİSTOKRAT GEÇİDİ', 
    promptValue: 'ATMOSPHERE TASK: An elegant passage between a formal dining room and a cellar. Crystal chandeliers, gold-leaf details, sophisticated and prestigious atmosphere. Opulent, classic, and high-society aesthetic.' 
  },
  { 
    id: 'wc_underfloor_glass_display', 
    label: 'ZEMİN ALTI CAM BÖLME', 
    promptValue: 'ATMOSPHERE TASK: A cellar seen through a glass floor from above. Indirect lighting from below the subject, architectural and surreal perspective. Unique, modern, and high-impact aesthetic.' 
  }
],
'laundry_room': [
  { 
    id: 'lr_modern_minimalist_white', 
    label: 'MODERN MİNİMALİST (BEYAZ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a sleek, all-white minimalist laundry room. Integrated handle-less cabinets, state-of-the-art machines, bright even LED lighting, clinical clean lines. Zen, clean, and futuristic aesthetic.' 
  },
  { 
    id: 'lr_rustic_farmhouse_charm', 
    label: 'RUSTİK ÇİFTLİK EVİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy farmhouse-style laundry room. Shiplap walls, wicker baskets, wooden folding counter, soft warm lighting, a bouquet of dried lavender. Warm, authentic, and domestic aesthetic.' 
  },
  { 
    id: 'lr_luxury_spa_vibes', 
    label: 'LÜKS SPA HAVASI', 
    promptValue: 'ATMOSPHERE TASK: A laundry room that feels like a high-end spa. Neutral stone tiles, soft white towels stacked perfectly, bamboo accents, diffused warm lighting, airy and fresh atmosphere. Serene, expensive, and calming aesthetic.' 
  },
  { 
    id: 'lr_industrial_loft_utilitarian', 
    label: 'ENDÜSTRİYEL LOFT', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial laundry space. Exposed brick, metal piping, concrete floor, large black-framed windows, utility sink. Edgy, urban, and functional aesthetic.' 
  },
  { 
    id: 'lr_pastel_retro_aesthetic', 
    label: 'PASTEL RETRO KONSEPT', 
    promptValue: 'ATMOSPHERE TASK: A 1950s inspired laundry room in soft pastel mint or pink. Vintage-style appliances, checkered floor, cheerful natural light, nostalgic domesticity. Playful, colorful, and nostalgic aesthetic.' 
  },
  { 
    id: 'lr_high_tech_smart_home', 
    label: 'AKILLI TEKNOLOJİ ODASI', 
    promptValue: 'ATMOSPHERE TASK: A futuristic high-tech laundry room. Glowing digital touchscreens on machines, cyan accent lighting, robotic sorting arms, sleek metallic surfaces. Advanced, sci-fi, and innovative aesthetic.' 
  },
  { 
    id: 'lr_small_apartment_nook', 
    label: 'APARTMAN KÖŞESİ (KÜÇÜK)', 
    promptValue: 'ATMOSPHERE TASK: A clever, space-saving laundry nook inside a stylish apartment closet. Sliding doors, task lighting, organized vertical shelving, cozy urban vibe. Smart, practical, and modern aesthetic.' 
  },
  { 
    id: 'lr_sun_drenched_morning', 
    label: 'GÜNEŞLİ SABAH TAZELİĞİ', 
    promptValue: 'ATMOSPHERE TASK: A laundry room bathed in intense morning sunlight. Dust motes dancing in the beams, fresh white linens hanging, bright and optimistic atmosphere. Radiant, organic, and hopeful aesthetic.' 
  },
  { 
    id: 'lr_dark_moody_indigo', 
    label: 'KARANLIK İNDİGO (MOODY)', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated dark-themed laundry room. Deep indigo walls, brass hardware, moody accent lighting, high-contrast shadows. Cinematic, elegant, and textural aesthetic.' 
  },
  { 
    id: 'lr_mediterranean_coastal', 
    label: 'AKDENİZ KIYISI ESİNTİSİ', 
    promptValue: 'ATMOSPHERE TASK: A breezy coastal laundry room. Blue and white patterned tiles, linen curtains blowing in the wind, open window with a sea view. Fresh, airy, and coastal aesthetic.' 
  },
  { 
    id: 'lr_scandinavian_birch_wood', 
    label: 'İSKANDİNAV HUŞ AĞACI', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian laundry room using light birch wood. White surfaces, functional design, plenty of natural light, minimalistic and warm. Zen, natural, and clean aesthetic.' 
  },
  { 
    id: 'lr_botanical_garden_greenery', 
    label: 'BOTANİK BAHÇELİ ODA', 
    promptValue: 'ATMOSPHERE TASK: A laundry room filled with indoor plants and vines. Greenhouse-style skylight, terracotta pots, organic textures, fresh humid atmosphere. Ethereal, fresh, and dreamlike aesthetic.' 
  },
  { 
    id: 'lr_vintage_collector_style', 
    label: 'VİNTAGE KOLEKSİYONER', 
    promptValue: 'ATMOSPHERE TASK: A laundry room decorated with vintage detergent ads and antique washboards. Old-school aesthetic, warm sepia lighting, lots of character. Historic, authentic, and detailed aesthetic.' 
  },
  { 
    id: 'lr_organized_storage_heaven', 
    label: 'MÜKEMMEL DÜZEN (RAFLAR)', 
    promptValue: 'ATMOSPHERE TASK: A focus on perfect organization. Labeled glass jars, uniform baskets, symmetrical shelving, clean and satisfying visual order. Disciplined, organized, and polished aesthetic.' 
  },
  { 
    id: 'lr_basement_raw_concrete', 
    label: 'YERALTI BETON TASARIM', 
    promptValue: 'ATMOSPHERE TASK: A basement laundry room with raw concrete walls. Modern architectural lighting, high-end machines, cold but stylish underground vibe. Structural, powerful, and modern aesthetic.' 
  },
  { 
    id: 'lr_royal_blue_classic', 
    label: 'KRALİYET MAVİSİ KLASİK', 
    promptValue: 'ATMOSPHERE TASK: A traditional high-end laundry room with deep royal blue cabinets. White marble counters, gold faucets, sophisticated formal energy. Prestigious, classic, and wealthy aesthetic.' 
  },
  { 
    id: 'lr_mudroom_combo_entry', 
    label: 'GİRİŞ VE ÇAMAŞIR ODASI', 
    promptValue: 'ATMOSPHERE TASK: A combined laundry and mudroom entry. Benches for shoes, coat hooks, durable stone floor, bright natural light from the door. Practical, active, and lifestyle-focused aesthetic.' 
  },
  { 
    id: 'lr_sunset_warmth_glow', 
    label: 'GÜNBATIMI SICAKLIĞI', 
    promptValue: 'ATMOSPHERE TASK: A laundry room during the golden hour. Sun hitting the machines at a low angle, long shadows, warm glowing skin tones, peaceful end-of-day vibe. Radiant, nostalgic, and cinematic aesthetic.' 
  },
  { 
    id: 'lr_marble_gold_opulence', 
    label: 'MERMER VE ALTIN LÜKSÜ', 
    promptValue: 'ATMOSPHERE TASK: An ultra-luxury laundry room. Book-matched marble walls, gold leaf accents, designer lighting fixtures, feeling of extreme opulence. Glamorous, expensive, and high-fashion aesthetic.' 
  },
  { 
    id: 'lr_patterned_tiles_artistic', 
    label: 'ARTİSTİK DESENLİ KAROLAR', 
    promptValue: 'ATMOSPHERE TASK: A laundry room featuring bold, artistic patterned tiles on the floor and backsplash. Vibrant colors, creative design, bright and energetic atmosphere. Graphic, unique, and stylish aesthetic.' 
  }
],
'home_gym': [
  { 
    id: 'hg_minimalist_zen_space', 
    label: 'MİNİMALİST ZEN ALANI', 
    promptValue: 'ATMOSPHERE TASK: A clean minimalist home gym setup. Pelotons, yoga mat, bright natural light from a large window, white walls, soft oak wood flooring. Disciplined, private, and comfortable aesthetic.' 
  },
  { 
    id: 'hg_garage_power_rack', 
    label: 'GARAJ (GÜÇ İSTASYONU)', 
    promptValue: 'ATMOSPHERE TASK: A high-end garage conversion gym. Heavy-duty power rack, barbell plates, rubber impact flooring, industrial lighting, tools on walls in background. Raw, powerful, and dedicated aesthetic.' 
  },
  { 
    id: 'hg_luxury_penthouse_view', 
    label: 'LÜKS PENTHOUSE MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: A fitness room in a luxury penthouse. Glass walls overlooking a city skyline, designer dumbbell set, premium textures, sunset lighting. Opulent, successful, and urban aesthetic.' 
  },
  { 
    id: 'hg_basement_iron_cave', 
    label: 'YERALTI "DEMİR" MAĞARASI', 
    promptValue: 'ATMOSPHERE TASK: A dedicated weight room in a basement. Exposed concrete walls, black iron weights, red accent LED lighting, intense and focused atmosphere. Gritty, intense, and hardcore aesthetic.' 
  },
  { 
    id: 'hg_attic_sloped_timber', 
    label: 'TAVAN ARASI (AHŞAP)', 
    promptValue: 'ATMOSPHERE TASK: A gym inside a converted attic with sloped wooden beams. Skylights letting in beams of sun, cozy but functional, high-quality yoga and cardio equipment. Intimate, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'hg_smart_tech_mirror', 
    label: 'AKILLI TEKNOLOJİ (MIRROR)', 
    promptValue: 'ATMOSPHERE TASK: A futuristic home gym featuring smart mirrors and interactive displays. Glowing digital interfaces, sleek white surfaces, blue accent lighting. Advanced, high-tech, and innovative aesthetic.' 
  },
  { 
    id: 'hg_industrial_loft_studio', 
    label: 'ENDÜSTRİYEL LOFT STÜDYO', 
    promptValue: 'ATMOSPHERE TASK: A home gym in an industrial loft. Exposed brick, high ceilings, large factory windows, heavy punching bag, warm sunlight. Urban, raw, and stylish aesthetic.' 
  },
  { 
    id: 'hg_garden_glass_sanctuary', 
    label: 'BAHÇE CAM KULÜBESİ', 
    promptValue: 'ATMOSPHERE TASK: A modern glass outbuilding in a green garden used as a gym. Surrounded by nature, bright airy atmosphere, clean minimalist design. Fresh, serene, and ethereal aesthetic.' 
  },
  { 
    id: 'hg_mid_century_retro_vibes', 
    label: 'RETRO / VİNTAGE STİL', 
    promptValue: 'ATMOSPHERE TASK: A home gym with a 1970s aesthetic. Vintage wooden dumbbells, retro sports posters, warm wood paneling, warm analog film texture. Nostalgic, stylish, and unique aesthetic.' 
  },
  { 
    id: 'hg_neon_gaming_fitness', 
    label: 'NEON OYUN VE FİTNESS', 
    promptValue: 'ATMOSPHERE TASK: A home gym setup with gaming-inspired neon LED lighting. Magenta and cyan accents, dark room, glowing PC screens in background, energetic vibe. Synthetic, vibrant, and modern aesthetic.' 
  },
  { 
    id: 'hg_scandinavian_bright_birch', 
    label: 'İSKANDİNAV TERCİHİ', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian-style fitness room. Light birch wood, functional storage, soft natural light, minimalist and high-end. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'hg_yoga_meditation_retreat', 
    label: 'YOGA VE MEDİTASYON KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A peaceful corner of a home dedicated to yoga. Floor cushions, incense, soft curtains filtering light, indoor plants. Serene, spiritual, and calm aesthetic.' 
  },
  { 
    id: 'hg_professional_cycling_room', 
    label: 'PROFESYONEL BİSİKLET ODASI', 
    promptValue: 'ATMOSPHERE TASK: A high-end cycling training room. Multiple smart trainers (Wahoo/Peloton), large screen showing virtual roads, energetic fans, bright lighting. Disciplined, technical, and active aesthetic.' 
  },
  { 
    id: 'hg_boxing_rugged_corner', 
    label: 'BOKS KÖŞESİ (SERT)', 
    promptValue: 'ATMOSPHERE TASK: A rugged corner of a home gym for boxing. Leather heavy bag, speed bag, wraps on the bench, shadows and highlights, high-contrast lighting. Gritty, powerful, and intense aesthetic.' 
  },
  { 
    id: 'hg_colorful_vibrant_energy', 
    label: 'CANLI RENKLİ ENERJİ', 
    promptValue: 'ATMOSPHERE TASK: A home gym with bold primary colors. Bright red machines, blue walls, high energy lighting, cheerful and motivating atmosphere. Graphic, vibrant, and fun aesthetic.' 
  },
  { 
    id: 'hg_morning_sunbeam_cardio', 
    label: 'SABAH GÜNEŞİ (KARDİO)', 
    promptValue: 'ATMOSPHERE TASK: A treadmill positioned right in front of a window during sunrise. Volumetric light beams, dust particles, hopeful and fresh morning start. Radiant, hopeful, and cinematic aesthetic.' 
  },
  { 
    id: 'hg_dark_noir_executive', 
    label: 'KARANLIK YÖNETİCİ STİLİ', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated dark-themed home gym. Matte black equipment, walnut wood accents, moody directional lighting, elite atmosphere. Expensive, polished, and masculine aesthetic.' 
  },
  { 
    id: 'hg_balcony_open_air_fitness', 
    label: 'BALKON / AÇIK HAVA', 
    promptValue: 'ATMOSPHERE TASK: A small fitness setup on a high-rise balcony. View of the harbor or city parks, breeze blowing, sunset light. Free, active, and breathtaking aesthetic.' 
  },
  { 
    id: 'hg_climbing_bouldering_wall', 
    label: 'TIRMANMA DUVARI (BOULDER)', 
    promptValue: 'ATMOSPHERE TASK: An indoor bouldering wall built into a home living area. Colorful holds, crash pads on floor, adventurous but modern domestic vibe. Unique, dynamic, and creative aesthetic.' 
  },
  { 
    id: 'hg_wellness_recovery_spa', 
    label: 'SAĞLIK VE TOPARLANMA (SPA)', 
    promptValue: 'ATMOSPHERE TASK: A focus on recovery. Infrared sauna, massage table, soft foam rollers, spa-like warm lighting, peaceful atmosphere. Relaxed, expensive, and restorative aesthetic.' 
  }
],
'attic_studio': [
  { 
    id: 'as_modern_architect_studio', 
    label: 'MODERN MİMARLIK STÜDYOSU', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a sleek modern attic architecture studio. Large slanted skylights, drafting tables, building models, minimalist white and wood interior. Creative, professional, and bright aesthetic.' 
  },
  { 
    id: 'as_bohemian_artist_loft', 
    label: 'BOHEM SANATÇI ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy attic filled with canvases, paint splatters, and trailing plants. Sunbeams filtering through old windows, rugs on the floor, creative clutter. Soulful, organic, and artistic aesthetic.' 
  },
  { 
    id: 'as_music_production_den', 
    label: 'MÜZİK PRODÜKSİYON ODASI', 
    promptValue: 'ATMOSPHERE TASK: A high-tech music studio under a sloped wooden roof. Glowing monitors, synthesizers, soundproofing foam panels, moody purple and blue LED lighting. Tech-focused, intense, and modern aesthetic.' 
  },
  { 
    id: 'as_cozy_writers_nook', 
    label: 'YAZARIN GİZLİ KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A small attic library with floor-to-ceiling books. Typewriter on a wooden desk, warm lamp light, a single window showing a rainy city sky. Intellectual, nostalgic, and intimate aesthetic.' 
  },
  { 
    id: 'as_scandinavian_minimalist', 
    label: 'İSKANDİNAV MİNİMALİZMİ', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian attic studio. All-white surfaces, light birch wood, functional design, plenty of natural northern light. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'as_dark_academia_hideaway', 
    label: 'DARK ACADEMIA KAÇIŞI', 
    promptValue: 'ATMOSPHERE TASK: A moody attic filled with globes, antique sketches, and old telescopes. Dark oak beams, candlelight, mysterious and scholarly atmosphere. Cinematic, intense, and historic aesthetic.' 
  },
  { 
    id: 'as_industrial_brick_glass', 
    label: 'ENDÜSTRİYEL TUĞLA VE CAM', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial attic space. Exposed brick walls, steel beams, massive triangular glass windows with a city view, bright high-contrast lighting. Urban, edgy, and structural aesthetic.' 
  },
  { 
    id: 'as_sunny_morning_yoga', 
    label: 'GÜNEŞLİ SABAH YOGASI', 
    promptValue: 'ATMOSPHERE TASK: A peaceful attic sanctuary at dawn. Soft blue and pink morning light, meditation mats, indoor plants, airy and fresh atmosphere. Serene, healthy, and ethereal aesthetic.' 
  },
  { 
    id: 'as_vintage_photography_lab', 
    label: 'VİNTAGE FOTOĞRAF LABORATUVARI', 
    promptValue: 'ATMOSPHERE TASK: An old darkroom style attic studio. Red safety lights, drying photographs hanging on lines, vintage cameras, texture-rich environment. Moody, authentic, and detailed aesthetic.' 
  },
  { 
    id: 'as_futuristic_gaming_loft', 
    label: 'FÜTÜRİSTİK OYUN ODASI', 
    promptValue: 'ATMOSPHERE TASK: An attic converted into a pro-gaming setup. Neon magenta and cyan lighting, futuristic furniture, glowing PC setups, dark and high-energy atmosphere. Synthetic, vibrant, and sci-fi aesthetic.' 
  },
  { 
    id: 'as_fashion_design_atelier', 
    label: 'MODA TASARIM ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: A sun-drenched attic used for fashion design. Mannequins, fabric rolls, sewing machines, mood boards, professional studio lighting. Glamorous, creative, and elegant aesthetic.' 
  },
  { 
    id: 'as_rainy_day_melancholy', 
    label: 'YAĞMURLU GÜN (MELANKOLİ)', 
    promptValue: 'ATMOSPHERE TASK: Inside an attic during a storm. Raindrops visible on the slanted glass ceiling, grey moody lighting, cozy soft textures, introspective atmosphere. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'as_botanical_glass_staircase', 
    label: 'BOTANİK MERDİVEN BAŞI', 
    promptValue: 'ATMOSPHERE TASK: A bright attic space filled with hanging ferns and vines. Perspective follows the roof line, vibrant green colors, fresh and humid air vibe. Organic, fresh, and dreamlike aesthetic.' 
  },
  { 
    id: 'as_starry_night_observatory', 
    label: 'YILDIZLI GECE GÖZLEM EVİ', 
    promptValue: 'ATMOSPHERE TASK: A dark attic with a large professional telescope. Clear view of the Milky Way through the glass roof, blue moonlight, magical atmosphere. Expansive, mysterious, and ambitious aesthetic.' 
  },
  { 
    id: 'as_rustic_heritage_cabin', 
    label: 'RUSTİK AHŞAP KULÜBE', 
    promptValue: 'ATMOSPHERE TASK: An attic with heavy reclaimed wood beams. Warm timber walls, soft golden hour sun filtering through small windows, cozy domestic vibe. Earthy, warm, and authentic aesthetic.' 
  },
  { 
    id: 'as_hitech_vfx_studio', 
    label: 'YÜKSEK TEKNO VFX STÜDYOSU', 
    promptValue: 'ATMOSPHERE TASK: A futuristic visual effects studio. Huge curved screens, high-end workstations, clean metallic surfaces, cold clinical white lighting. Advanced, data-driven, and innovative aesthetic.' 
  },
  { 
    id: 'as_luxury_loft_penthouse', 
    label: 'LÜKS PENTHOUSE LOFTS', 
    promptValue: 'ATMOSPHERE TASK: An ultra-high-end modern attic. Designer art pieces, expensive materials, floor-to-ceiling glass, city skyline in background. Opulent, prestigious, and high-fashion aesthetic.' 
  },
  { 
    id: 'as_vintage_toy_collection', 
    label: 'NOSTALJİK OYUNCAK ODASI', 
    promptValue: 'ATMOSPHERE TASK: A nostalgic attic filled with vintage toys and collectibles. Soft warm lighting, shelves full of memories, whimsical and colorful atmosphere. Fun, detailed, and heartwarming aesthetic.' 
  },
  { 
    id: 'as_meditation_zen_pod', 
    label: 'ZEN MEDİTASYON ALANI', 
    promptValue: 'ATMOSPHERE TASK: A minimalist attic space focused on peace. Single cushion on a wooden floor, soft diffused light, sense of absolute silence. Minimalist, pure, and meditative aesthetic.' 
  },
  { 
    id: 'as_abstract_geometric_lines', 
    label: 'SOYUT GEOMETRİK ÇİZGİLER', 
    promptValue: 'ATMOSPHERE TASK: A stylized attic focusing on the sharp angles of the roof. Dramatic light and shadow play, minimalist color palette, architectural focus. Artistic, structural, and modern aesthetic.' 
  }
],
'home_theater': [
  { 
    id: 'ht_luxury_red_velvet', 
    label: 'LÜKS KIRMIZI KADİFE', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a classic luxury home theater. Deep red velvet reclining seats, gold-trimmed acoustic panels, dim warm ambient lighting, large screen glowing in the distance. Opulent, cinematic, and prestigious aesthetic.' 
  },
  { 
    id: 'ht_modern_minimalist_black', 
    label: 'MODERN MİNİMALİST (SİYAH)', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern home cinema. Matte black walls, hidden LED strip lighting in charcoal grey, low-profile designer seating, ultra-thin large screen. Zen, structural, and advanced aesthetic.' 
  },
  { 
    id: 'ht_starship_bridge_scifi', 
    label: 'BİLİM KURGU / YILDIZ GEMİSİ', 
    promptValue: 'ATMOSPHERE TASK: A home theater designed like a futuristic starship bridge. Cyan and magenta glowing consoles, metallic surfaces, circular seating, high-tech monitors in background. Sci-fi, synthetic, and innovative aesthetic.' 
  },
  { 
    id: 'ht_vintage_hollywood_glam', 
    label: 'VİNTAGE HOLLYWOOD IŞILTISI', 
    promptValue: 'ATMOSPHERE TASK: A 1940s style private screening room. Art Deco patterns, brass details, black and white photographs of stars on walls, soft warm spotlights. Nostalgic, glamorous, and sophisticated aesthetic.' 
  },
  { 
    id: 'ht_outdoor_garden_cinema', 
    label: 'AÇIK HAVA BAHÇE SİNEMASI', 
    promptValue: 'ATMOSPHERE TASK: A cozy backyard movie night. Large projector screen under the stars, floor cushions, fairy lights hanging from trees, soft moonlight. Relaxed, organic, and poetic aesthetic.' 
  },
  { 
    id: 'ht_dark_industrial_concrete', 
    label: 'KARANLIK ENDÜSTRİYEL BETON', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial home theater. Exposed concrete walls, black metal piping, leather seating, single sharp spotlight on the subject. Edgy, urban, and textural aesthetic.' 
  },
  { 
    id: 'ht_midnight_blue_lounge', 
    label: 'GECE MAVİSİ LOUNGE', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated theater in deep midnight blue. Suede walls, soft blue accent lighting, crystal glassware nearby, calm and elite atmosphere. Cinematic, elegant, and expensive aesthetic.' 
  },
  { 
    id: 'ht_hitech_vr_gaming_den', 
    label: 'YÜKSEK TEKNO OYUN ODASI', 
    promptValue: 'ATMOSPHERE TASK: A futuristic media room with VR headsets and multiple screens. RGB lighting effects, high-back gaming chairs, dark and high-energy atmosphere. Advanced, vibrant, and active aesthetic.' 
  },
  { 
    id: 'ht_mid_century_modern_media', 
    label: 'MID-CENTURY MODERN MEDYA BÖLMESİ', 
    promptValue: 'ATMOSPHERE TASK: A media room with 1960s designer influence. Teak wood shelving, retro speakers, geometric patterns, warm analog feel. Retro, stylish, and intellectual aesthetic.' 
  },
  { 
    id: 'ht_starlit_ceiling_sanctuary', 
    label: 'YILDIZLI TAVAN SAVAŞI', 
    promptValue: 'ATMOSPHERE TASK: A dark home theater with a fiber-optic starry night ceiling. Millions of tiny glowing dots above, deep shadows, cozy plush seating, magical atmosphere. Dreamlike, expansive, and peaceful aesthetic.' 
  },
  { 
    id: 'ht_private_imax_experience', 
    label: 'ÖZEL IMAX DENEYİMİ', 
    promptValue: 'ATMOSPHERE TASK: A massive curved screen dominating a large custom room. Tiered seating, professional acoustic treatment, bright screen reflection on the floor. Powerful, grand, and high-fashion aesthetic.' 
  },
  { 
    id: 'ht_rustic_mountain_cabin', 
    label: 'RUSTİK DAĞ EVİ SİNEMASI', 
    promptValue: 'ATMOSPHERE TASK: A home theater in a heavy timber mountain chalet. Stone fireplace in background, fur blankets on wooden recliners, warm glowing fire light. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'ht_japanese_zen_minimalism', 
    label: 'JAPON ZEN MİNİMALİZMİ', 
    promptValue: 'ATMOSPHERE TASK: A calm meditative screening space. Floor mats (tatami), low wooden tables, soft paper lamps, minimalist aesthetic. Zen, clean, and meditative aesthetic.' 
  },
  { 
    id: 'ht_retro_80s_neon_vibes', 
    label: 'RETRO 80\'LER NEON STİLİ', 
    promptValue: 'ATMOSPHERE TASK: A home cinema with a 1980s synthwave vibe. Neon pink and purple lights, grid patterns on walls, vintage movie posters (Goonies, Back into the Future), energetic party vibe. Fun, colorful, and nostalgic aesthetic.' 
  },
  { 
    id: 'ht_sleek_penthouse_ent', 
    label: 'ŞIK PENTHOUSE EĞLENCE ALANI', 
    promptValue: 'ATMOSPHERE TASK: A luxury penthouse living area with a hidden drop-down screen. City lights through massive windows in background, designer furniture, polished marble surfaces. Glamorous, urban, and modern aesthetic.' 
  },
  { 
    id: 'ht_art_deco_theatrical', 
    label: 'ART DECO TİYATRO SALONU', 
    promptValue: 'ATMOSPHERE TASK: A highly stylized Art Deco home theater. Symmetrical geometric wallpaper, gold leaf details, velvet curtains framing the screen. Opulent, classic, and high-society aesthetic.' 
  },
  { 
    id: 'ht_kids_fantasy_world', 
    label: 'ÇOCUK HAYAL DÜNYASI', 
    promptValue: 'ATMOSPHERE TASK: A home theater designed for children. Cloud-shaped seats, colorful murals of space or jungles, bright and whimsical lighting. Playful, colorful, and creative aesthetic.' 
  },
  { 
    id: 'ht_soundproof_film_lab', 
    label: 'SES YALITIMLI FİLM LABORATUVARI', 
    promptValue: 'ATMOSPHERE TASK: A professional-grade film editing and screening room. High-end speakers, mixing board in shot, dark moody lighting, technical atmosphere. Professional, technical, and architectural aesthetic.' 
  },
  { 
    id: 'ht_abstract_light_shadow', 
    label: 'SOYUT IŞIK VE GÖLGE', 
    promptValue: 'ATMOSPHERE TASK: A stylized theater focusing on the play of light from the screen. Dramatic shadows on the subject, high contrast, minimalist furniture, artistic cinema focus. Artistic, intense, and modern aesthetic.' 
  },
  { 
    id: 'ht_golden_hour_rooftop', 
    label: 'GÜNBATIMI TERAS SİNEMASI', 
    promptValue: 'ATMOSPHERE TASK: A screen set up on a high terrace during golden hour. Warm orange sky, silhouettes of the city, subject in soft glowing light. Radiant, ambitious, and cinematic aesthetic.' 
  }
],
'walk_in_closet': [
  { 
    id: 'wc_modern_white_gold', 
    label: 'MODERN LÜKS (BEYAZ & ALTIN)', 
    promptValue: 'ATMOSPHERE TASK: A pristine white luxury walk-in closet with brushed gold accents. High-gloss finishes, crystalline chandelier, plush white carpet, perfectly organized designer items. Glamorous, clean, and affluent aesthetic.' 
  },
  { 
    id: 'wc_dark_oak_classic', 
    label: 'KOYU AHŞAP KLASİK', 
    promptValue: 'ATMOSPHERE TASK: A formal dressing room with rich dark oak cabinetry. Integrated warm lighting in shelves, leather benches, traditional craftsmanship, quiet luxury vibe. Sophisticated, timeless, and expensive aesthetic.' 
  },
  { 
    id: 'wc_jewelry_showcase_island', 
    label: 'MÜCEVHER VİTRİNİ ODAKLI', 
    promptValue: 'ATMOSPHERE TASK: Focus on a central island with glass-top jewelry drawers. Glowing velvet inserts showing watches and gems, subject reflected in mirrored walls, soft focused lighting. Detailed, opulent, and high-fashion aesthetic.' 
  },
  { 
    id: 'wc_sneaker_wall_display', 
    label: 'MODERN AYAKKABI DUVARI', 
    promptValue: 'ATMOSPHERE TASK: A massive backlit wall dedicated to a designer sneaker collection. Glass shelves, cool white LED lighting, urban modern furniture, high-contrast clean look. Trendy, active, and youthful aesthetic.' 
  },
  { 
    id: 'wc_industrial_open_rack', 
    label: 'ENDÜSTRİYEL AÇIK SİSTEM', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial loft closet. Black metal racks, exposed brick background, warm Edison bulb lighting, open concept showing variety of textures. Urban, edgy, and textural aesthetic.' 
  },
  { 
    id: 'wc_parisian_mirrored_chic', 
    label: 'AYNALI PARİS STİLİ', 
    promptValue: 'ATMOSPHERE TASK: An elegant Parisian apartment dressing room. Floor-to-ceiling antique mirrors, ornate moldings, soft grey and cream palette, city view through tall windows. Romantic, chic, and historic aesthetic.' 
  },
  { 
    id: 'wc_minimalist_japanese_zen', 
    label: 'MİNİMALİST JAPON STİLİ', 
    promptValue: 'ATMOSPHERE TASK: A calm minimalist closet with light bamboo wood. Concealed storage, clean lines, natural diffused light, sense of absolute order and peace. Zen, pure, and architectural aesthetic.' 
  },
  { 
    id: 'wc_vintage_boutique_vibe', 
    label: 'VİNTAGE BUTİK ATMOSFERİ', 
    promptValue: 'ATMOSPHERE TASK: A whimsical dressing room resembling a high-end vintage boutique. Patterned wallpaper, velvet curtains, mismatched antique furniture, warm nostalgic lighting. Artistic, charming, and detailed aesthetic.' 
  },
  { 
    id: 'wc_boho_natural_textures', 
    label: 'BOHEM DOĞAL DOKULAR', 
    promptValue: 'ATMOSPHERE TASK: A relaxed closet with rattan baskets, linen fabrics, and macrame details. Abundant indoor plants, warm natural sunlight, organic and airy atmosphere. Soulful, trendy, and peaceful aesthetic.' 
  },
  { 
    id: 'wc_futuristic_led_neon', 
    label: 'FÜTÜRİSTİK LED AYDINLATMA', 
    promptValue: 'ATMOSPHERE TASK: A sci-fi inspired dressing room. Geometric neon lines, brushed silver surfaces, automated glass doors, cold high-tech atmosphere. Synthetic, advanced, and innovative aesthetic.' 
  },
  { 
    id: 'wc_hollywood_star_glam', 
    label: 'HOLLYWOOD YILDIZ ODASI', 
    promptValue: 'ATMOSPHERE TASK: A professional backstage-style dressing room. Vanity mirror with large round bulbs, red carpet accents, glamorous clutter of pearls and silks, dramatic lighting. Cinematic, vibrant, and prestigious aesthetic.' 
  },
  { 
    id: 'wc_mens_gentleman_den', 
    label: 'ERKEK CENTİLMEN ODASI (DARK)', 
    promptValue: 'ATMOSPHERE TASK: A masculine dressing room in charcoal and navy tones. Built-in suit racks, cigar lounge chair, dark marble accents, soft moody spotlights. Powerful, elite, and sophisticated aesthetic.' 
  },
  { 
    id: 'wc_soft_pastel_feminine', 
    label: 'SOFT PASTEL KADIN ODASI', 
    promptValue: 'ATMOSPHERE TASK: A gentle dressing room in blush pink and cream. Soft curves in furniture, floral arrangements, airy and light atmosphere, feminine and delicate look. Poetic, soft, and dreamlike aesthetic.' 
  },
  { 
    id: 'wc_glass_door_luxury', 
    label: 'CAM KAPAKLI TASARIM', 
    promptValue: 'ATMOSPHERE TASK: A floor-to-ceiling closet with tinted glass doors and internal lighting. Subject visible through reflections, high-end designer showroom feel, sleek and modern. Sleek, polished, and expensive aesthetic.' 
  },
  { 
    id: 'wc_sunny_morning_corner', 
    label: 'GÜNIŞIĞI ALAN FERAH KÖŞE', 
    promptValue: 'ATMOSPHERE TASK: A small bright dressing area next to a large window. Dust motes dancing in sunbeams, fresh morning light, clean white furniture, optimistic vibe. Radiant, hopeful, and domestic aesthetic.' 
  },
  { 
    id: 'wc_eclectic_fashion_gallery', 
    label: 'EKLEKTİK RENKLİ MODA ODASI', 
    promptValue: 'ATMOSPHERE TASK: A vibrant closet filled with bold colors and artistic patterns. Pop art on walls, colorful rugs, creative and high-energy fashion focus. Fun, expressive, and vibrant aesthetic.' 
  },
  { 
    id: 'wc_spacious_lounge_island', 
    label: 'ADA ÜNİTELİ GENİŞ LOUNGE', 
    promptValue: 'ATMOSPHERE TASK: A massive dressing room including a seating lounge. Large velvet ottomans, tray of champagne, expansive feel, multiple garment racks in distance. Opulent, grand, and high-fashion aesthetic.' 
  },
  { 
    id: 'wc_scandinavian_wood_metal', 
    label: 'SKANDİNAV AHŞAP & METAL', 
    promptValue: 'ATMOSPHERE TASK: A functional Scandinavian closet. Light birch wood, thin black metal frames, plenty of white space, soft natural northern light. Zen, clean, and modern aesthetic.' 
  },
  { 
    id: 'wc_secret_vault_designs', 
    label: 'GİZLİ TASARIM / KASA ODASI', 
    promptValue: 'ATMOSPHERE TASK: A high-security luxury closet hidden behind a bookshelf. Metallic safes, focused security lighting on rare items, mysterious and exclusive atmosphere. Advanced, mysterious, and ambitious aesthetic.' 
  },
  { 
    id: 'wc_artistic_couture_gallery', 
    label: 'SANATSAL MODA GALERİSİ', 
    promptValue: 'ATMOSPHERE TASK: A minimal dressing room where clothes are displayed like art. Spotlights on individual pieces, vast white space, museum-like silence and quality. Artistic, structural, and modern aesthetic.' 
  }
],
'elegant_dining_room': [
  { 
    id: 'dr_royal_banquet_hall', 
    label: 'RESERVE KRALİYET SALONU', 
    promptValue: 'ATMOSPHERE TASK: A grand royal banquet hall. Massive mahogany table, candelabras, ornate gold-leaf ceilings, high-back velvet chairs, warm majestic lighting. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'dr_modern_minimalist_concrete', 
    label: 'MODERN MİNİMALİST (BETON)', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern dining room. Polished concrete floor, minimalist black oak table, designer sculptural chairs, floor-to-ceiling glass walls with a city view. Zen, structural, and sophisticated aesthetic.' 
  },
  { 
    id: 'dr_rustic_farmhouse_warmth', 
    label: 'RUSTİK ÇİFTLİK EVİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy farmhouse dining area. Long reclaimed wood table, mismatched antique chairs, dried flower centerpieces, soft golden hour sun through lattice windows. Earthy, warm, and authentic aesthetic.' 
  },
  { 
    id: 'dr_parisian_chic_apartment', 
    label: 'PARİS STİLİ ŞIK DAİRE', 
    promptValue: 'ATMOSPHERE TASK: An elegant Parisian dining room. White marble fireplace, crystal chandelier, herringbone wood floors, soft grey walls with delicate moldings. Romantic, chic, and historic aesthetic.' 
  },
  { 
    id: 'dr_scandinavian_bright_airy', 
    label: 'İSKANDİNAV FERAH TASARIM', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian dining space. Light ash wood furniture, functional minimalist decor, plenty of white space, soft natural northern light. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'dr_industrial_loft_brick', 
    label: 'ENDÜSTRİYEL LOFT (TUĞLA)', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial dining area. Exposed red brick walls, steel frame windows, heavy timber table, vintage pendant lights with Edison bulbs. Urban, edgy, and textural aesthetic.' 
  },
  { 
    id: 'dr_mediterranean_alfresco_vibe', 
    label: 'AKDENİZ ESİNTİLİ YEMEK', 
    promptValue: 'ATMOSPHERE TASK: A bright villa dining room with Mediterranean influences. Terracotta tiles, white plastered walls, blue accents, large arched doors open to a garden. Warm, vibrant, and coastal aesthetic.' 
  },
  { 
    id: 'dr_art_deco_glamor_gold', 
    label: 'ART DECO İHTİŞAMI', 
    promptValue: 'ATMOSPHERE TASK: A stylized Art Deco dining room. Deep emerald and gold palette, geometric patterns, velvet upholstery, dramatic focused lighting. Glamorous, classic, and high-society aesthetic.' 
  },
  { 
    id: 'dr_japanese_zen_tatami', 
    label: 'JAPON ZEN YEMEK ALANI', 
    promptValue: 'ATMOSPHERE TASK: A traditional Japanese dining space. Low table, tatami mat floor, sliding paper screens (shoji), minimalist bonsai centerpiece, soft diffused light. Zen, pure, and meditative aesthetic.' 
  },
  { 
    id: 'dr_mid_century_retro_vibes', 
    label: 'MID-CENTURY RETRO STİL', 
    promptValue: 'ATMOSPHERE TASK: A 1960s inspired dining room. Iconic designer walnut table, colorful geometric art, retro sideboard, warm analog photography feel. Retro, stylish, and intellectual aesthetic.' 
  },
  { 
    id: 'dr_mountain_lodge_stone', 
    label: 'DAĞ EVİ (TAŞ VE AHŞAP)', 
    promptValue: 'ATMOSPHERE TASK: A dining room in a luxurious mountain lodge. Stone walls, massive exposed beams, fur throws on chairs, glowing fireplace nearby. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'dr_futuristic_neon_cyber', 
    label: 'FÜTÜRİSTİK SİBER YEMEK', 
    promptValue: 'ATMOSPHERE TASK: A high-tech dining room in a sci-fi setting. Cyan and magenta LED strip lighting, liquid metallic surfaces, transparent furniture, holographic displays. Advanced, synthetic, and innovative aesthetic.' 
  },
  { 
    id: 'dr_tropical_garden_pavilion', 
    label: 'TROPİKAL BAHÇE KAMELYASI', 
    promptValue: 'ATMOSPHERE TASK: A glass-walled dining area surrounded by lush jungle foliage. Rattan furniture, ceiling fans, humid misty air vibe, vibrant green shadows. Exotic, fresh, and dreamlike aesthetic.' 
  },
  { 
    id: 'dr_dark_academia_library', 
    label: 'DARK ACADEMIA KÜTÜPHANELİ', 
    promptValue: 'ATMOSPHERE TASK: A dining table set inside a moody library. Floor-to-ceiling books, candlelight, mysterious and scholarly atmosphere, dark wood textures. Intellectual, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'dr_coastal_beach_house', 
    label: 'SAHİL EVİ HAFİFLİĞİ', 
    promptValue: 'ATMOSPHERE TASK: A breezy coastal dining room. Bleached wood, light blue and white linens, driftwood centerpiece, bright midday sun, ocean view visible. Radiant, fresh, and peaceful aesthetic.' 
  },
  { 
    id: 'dr_boho_eclectic_colorful', 
    label: 'BOHEM EKLEKTİK RENKLER', 
    promptValue: 'ATMOSPHERE TASK: A relaxed boho dining space. Mismatched colorful chairs, layered rugs, hanging plants, warm string lights, artistic clutter. Fun, expressive, and soulful aesthetic.' 
  },
  { 
    id: 'dr_luxury_penthouse_skline', 
    label: 'LÜKS PENTHOUSE MANZARALI', 
    promptValue: 'ATMOSPHERE TASK: An ultra-high-end dining room atop a skyscraper. Designer glass table, city skyline lights background, polished marble, elite atmosphere. Opulent, urban, and high-fashion aesthetic.' 
  },
  { 
    id: 'dr_minimal_white_gallery', 
    label: 'MİNİMAL BEYAZ GALERİ', 
    promptValue: 'ATMOSPHERE TASK: A pure white minimalist dining room. Single sculptural white table, vast empty space, dramatic high-key lighting, museum-like quality. Sleek, polished, and architectural aesthetic.' 
  },
  { 
    id: 'dr_vintage_garden_party', 
    label: 'NOSTALJİK BAHÇE PARTİSİ', 
    promptValue: 'ATMOSPHERE TASK: An indoor sunroom dining area designed like an English garden. Floral wallpaper, weathered teal furniture, dappled sunlight, soft romantic atmosphere. Poetic, charming, and detailed aesthetic.' 
  },
  { 
    id: 'dr_dramatic_monochrome_black', 
    label: 'DRAMATİK MONOKROM SİYAH', 
    promptValue: 'ATMOSPHERE TASK: A bold black-on-black dining room. Different textures of black (matte, velvet, gloss), single candle lighting, high contrast shadows, artistic and intense focus. Artistic, structural, and modern aesthetic.' 
  }
],
'sunroom_conservatory': [
  { 
    id: 'cs_victorian_glass_house', 
    label: 'KLASİK VİKTORYA SERASI', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a grand Victorian conservatory. Ornate white wrought iron structures, arched glass ceilings, tall palm trees, soft diffused sunlight. Elegant, historic, and opulent aesthetic.' 
  },
  { 
    id: 'cs_tropical_jungle_paradise', 
    label: 'TROPİKAL CENNET (SERA)', 
    promptValue: 'ATMOSPHERE TASK: A lush sunroom overflowing with oversized tropical plants, monsteras, and ferns. Humid misty air, intense natural light through glass, vibrant green colors. Exotic, fresh, and vibrant aesthetic.' 
  },
  { 
    id: 'cs_modern_minimalist_glass', 
    label: 'MODERN MİNİMALİST CAM ODA', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern sunroom with floor-to-ceiling glass walls. Minimalist black frames, clean thin lines, polished concrete floor, bright even daylight. Zen, structural, and contemporary aesthetic.' 
  },
  { 
    id: 'cs_english_afternoon_tea', 
    label: 'İNGİLİZ ÇAY SAATİ KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy sunroom set up for afternoon tea. Floral upholstery, vintage porcelain, climbing roses visible outside, warm afternoon sun. Charming, nostalgic, and sophisticated aesthetic.' 
  },
  { 
    id: 'cs_bohemian_sunlight_boho', 
    label: 'BOHEM GÜNEŞ ODASI', 
    promptValue: 'ATMOSPHERE TASK: A relaxed bohemian sunroom. Macrame hangings, floor pillows, rattan furniture, plenty of sunlight, relaxed and airy vibe. Organic, peaceful, and trendy aesthetic.' 
  },
  { 
    id: 'cs_mediterranean_terracotta', 
    label: 'AKDENİZ TERAKOTA KONSEPTİ', 
    promptValue: 'ATMOSPHERE TASK: A bright conservatory with Mediterranean influences. Terracotta tile floor, white plastered walls, citrus trees in pots, intense blue sky visible through glass. Warm, vibrant, and coastal aesthetic.' 
  },
  { 
    id: 'cs_scandinavian_bright_airy', 
    label: 'İSKANDİNAV FERAH STÜDYO', 
    promptValue: 'ATMOSPHERE TASK: A bright airy sunroom with Scandinavian design. Light wood accents, functional furniture, plenty of white space, soft natural morning light. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'cs_luxury_spa_relaxation', 
    label: 'LÜKS SPA VE DİNLENME', 
    promptValue: 'ATMOSPHERE TASK: A high-end sunroom designed for wellness. Plush lounge chairs, soft white towels, a small decorative water feature, soft diffused light, calming serene atmosphere. Opulent, restorative, and expensive aesthetic.' 
  },
  { 
    id: 'cs_artist_garden_atelier', 
    label: 'BAHÇE ATÖLYESİ (CAMDA)', 
    promptValue: 'ATMOSPHERE TASK: A glass-enclosed creative studio. Half-finished oil paintings, rolls of paper, natural light from all angles, surrounding garden visible. Creative, inspiring, and soulful aesthetic.' 
  },
  { 
    id: 'cs_zen_rock_garden_indoor', 
    label: 'İÇ MEKAN ZEN BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: A conservatory featuring a minimalist indoor rock garden. Raked gravel, mossy stones, bamboo elements, peaceful meditative atmosphere. Zen, meditative, and architectural aesthetic.' 
  },
  { 
    id: 'cs_botanical_library_den', 
    label: 'BOTANİK KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A sunroom filled with floor-to-ceiling bookshelves and large botanical specimens. Reading lamps, heavy leather armchairs, scholarly and peaceful atmosphere. Intellectual, cozy, and detailed aesthetic.' 
  },
  { 
    id: 'cs_sun_drenched_breakfast', 
    label: 'GÜNEŞLİ KAHVALTI KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A small bright sunroom during a quiet breakfast. Steaming coffee, fresh fruit, long shadows from glass frames, hopeful morning light. Peaceful, domestic, and warm aesthetic.' 
  },
  { 
    id: 'cs_rainy_day_cosy_retreat', 
    label: 'YAĞMURLU GÜN SIĞINAĞI', 
    promptValue: 'ATMOSPHERE TASK: Inside a glass sunroom during a heavy rainstorm. Raindrops drumming on the ceiling, grey moody lighting, warm blankets and books inside. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'cs_vintage_iron_details', 
    label: 'VİNTAGE DEMİR DETAYLAR', 
    promptValue: 'ATMOSPHERE TASK: A traditional conservatory with dark weathered iron frames. Peeling paint textures, antique garden furniture, dappled sunlight filtering through plants. Historic, authentic, and textural aesthetic.' 
  },
  { 
    id: 'cs_starry_night_solarium', 
    label: 'YILDIZLI GECE SOLARIUMU', 
    promptValue: 'ATMOSPHERE TASK: Standing in a dark glass solarium at night. Clear view of the starlit sky and moon, deep blue night atmosphere, soft interior accent lights. Magical, mysterious, and ambitious aesthetic.' 
  },
  { 
    id: 'cs_industrial_glass_metal', 
    label: 'ENDÜSTRİYEL SERA (METAL)', 
    promptValue: 'ATMOSPHERE TASK: A modern industrial glass house. Exposed metal girders, black steel frames, large scale factorywindows, bright high-contrast lighting. Urban, structural, and edgy aesthetic.' 
  },
  { 
    id: 'cs_rustic_timber_sunroom', 
    label: 'RUSTİK AHŞAP GÜNEŞ ODASI', 
    promptValue: 'ATMOSPHERE TASK: A sunroom built with reclaimed heavy timber. Massive beams, natural wood textures, warm golden hour sun, cozy and earthy atmosphere. Earthy, warm, and authentic aesthetic.' 
  },
  { 
    id: 'cs_romantic_floral_haven', 
    label: 'ROMANTİK ÇİÇEK BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: A conservatory filled with blooming flowers in soft pastel colors. Butterflies, delicate light, peaceful and feminine atmosphere. Poetic, romantic, and dreamlike aesthetic.' 
  },
  { 
    id: 'cs_minimalist_concrete_green', 
    label: 'MİNİMALİST BETON VE YEŞİL', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete conservatory with minimalist plant arrangements. Sharp lines, vast empty space, single designer chair, cool high-contrast lighting. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'cs_sunset_golden_hour_glow', 
    label: 'GÜNBATIMI ALTIN SAAT IŞIĞI', 
    promptValue: 'ATMOSPHERE TASK: A glass sunroom filled with warm golden sunlight during sunset. Long shadows, lens flare, glowing skin tones, peaceful end-of-day vibe. Radiant, hopeful, and cinematic aesthetic.' 
  },
],
'luxury_bathroom': [
  { 
    id: 'lb_marble_palace_white', 
    label: 'MERMER SARAY (BEYAZ KLASİK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in a grand luxury bathroom made of book-matched white Carrara marble. Freestanding soaking tub, gold fixtures, large windows with soft morning light, fresh white lilies. Opulent, clean, and prestigious aesthetic.' 
  },
  { 
    id: 'lb_dark_slate_moody', 
    label: 'KOYU KAYRAK (MOODY)', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated dark-themed bathroom with charcoal slate walls. Integrated warm LED lighting behind mirrors, rain shower head, moody shadows, minimalist design. Cinematic, intense, and textural aesthetic.' 
  },
  { 
    id: 'lb_tropical_outdoor_garden', 
    label: 'TROPİKAL BAHÇE (AÇIK HAVA)', 
    promptValue: 'ATMOSPHERE TASK: An exotic outdoor luxury bathroom surrounded by lush tropical plants. Volcanic stone bathtub, bamboo accents, sunlight filtering through palm leaves, breezy atmosphere. Organic, fresh, and vacation aesthetic.' 
  },
  { 
    id: 'lb_penthouse_skyline_view', 
    label: 'PENTHOUSE (ŞEHİR MANZARALI)', 
    promptValue: 'ATMOSPHERE TASK: A high-end bathroom atop a skyscraper. Floor-to-ceiling glass walls overlooking a glowing city at night, modern designer tub, elite urban atmosphere. Glamorous, successful, and urban aesthetic.' 
  },
  { 
    id: 'lb_gold_onyx_boutique', 
    label: 'ALTIN VE ONİKS (BUTİK OTEL)', 
    promptValue: 'ATMOSPHERE TASK: A glamorous bathroom with backlit onyx stone walls and gold leaf details. Crystal sconces, opulent mirrors, feeling of extreme high-end luxury. Expensive, artistic, and polished aesthetic.' 
  },
  { 
    id: 'lb_zen_minimalist_japanese', 
    label: 'ZEN MİNİMALİST (JAPON TARZI)', 
    promptValue: 'ATMOSPHERE TASK: A calm Japanese-inspired bathroom. Hinoki wood soaking tub, smooth river stones, minimalist white walls, soft diffused natural light. Zen, clean, and meditative aesthetic.' 
  },
  { 
    id: 'lb_romantic_candlelit_victorian', 
    label: 'ROMANTİK MUM IŞIĞI (VİKTORYA)', 
    promptValue: 'ATMOSPHERE TASK: A traditional Victorian bathroom lit entirely by candles. Clawfoot tub, brass details, dim warm flickering glow, rose petals, intimate and nostalgic atmosphere. Romantic, mysterious, and textural aesthetic.' 
  },
  { 
    id: 'lb_mediterranean_coastal_breeze', 
    label: 'AKDENİZ ESİNTİSİ (KIYI STİLİ)', 
    promptValue: 'ATMOSPHERE TASK: A bright airy bathroom with Mediterranean influences. Blue and white tiles, arched windows with a sea view, linen curtains, bright summer sun. Fresh, breezy, and coastal aesthetic.' 
  },
  { 
    id: 'lb_hitech_smart_glass', 
    label: 'YÜKSEK TEKNOLOJİ (AKILLI CAM)', 
    promptValue: 'ATMOSPHERE TASK: A futuristic bathroom with smart glass partitions and touchscreens. Cyan LED accent lighting, sleek metallic surfaces, high-tech sanitary fixtures. Advanced, sci-fi, and innovative aesthetic.' 
  },
  { 
    id: 'lb_rustic_mountain_chalet', 
    label: 'RUSTİK DAĞ EVİ (AHŞAP & TAŞ)', 
    promptValue: 'ATMOSPHERE TASK: A cozy bathroom in a mountain chalet. Heavy timber walls, stacked stone shower, view of snowy peaks through the window, warm amber lighting. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'lb_art_deco_glamour', 
    label: 'ART DECO İHTİŞAMI (LÜKS)', 
    promptValue: 'ATMOSPHERE TASK: A stylized Art Deco bathroom. Symmetrical black and gold patterns, fan-shaped mirrors, velvet stool, dramatic focused lighting. Glamorous, classic, and high-society aesthetic.' 
  },
  { 
    id: 'lb_scandinavian_birch_white', 
    label: 'İSKANDİNAV FERAHLIĞI (HUŞ & BEYAZ)', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian-style bathroom. Light birch wood, functional design, plenty of white space, soft natural northern light. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'lb_royal_palace_baroque', 
    label: 'KRALİYET SARAYI (BAROK)', 
    promptValue: 'ATMOSPHERE TASK: An opulent baroque-style bathroom. Elaborate gold carvings, marble sculptures, crystal chandeliers, high-fashion elite atmosphere. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'lb_understated_luxury_grey', 
    label: 'YALIN LÜKS (SOFT GRİ)', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated modern bathroom in soft grey and cream tones. High-end materials used subtly, architectural lighting, peaceful and elite atmosphere. Poetic, soft, and polished aesthetic.' 
  },
  { 
    id: 'lb_vertical_garden_green', 
    label: 'DİKEY BAHÇE (YEŞİL DUVAR)', 
    promptValue: 'ATMOSPHERE TASK: A bathroom featuring a full wall of living green plants and ferns. Bright skylight, organic textures, fresh and humid atmosphere. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'lb_cinematic_noir_shadows', 
    label: 'SİNEMATİK NOİR (GÖLGELİ)', 
    promptValue: 'ATMOSPHERE TASK: A high-contrast cinematic bathroom scene. Sharp directional lighting, deep shadows, subject silhouetted against glowing water or marble. Dramatic, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'lb_copper_wood_authentic', 
    label: 'BAKIR VE AHŞAP (OTANTİK)', 
    promptValue: 'ATMOSPHERE TASK: A bathroom with a vintage copper bathtub and reclaimed wood walls. Warm metallic reflections, rich textures, cozy and unique atmosphere. Earthy, authentic, and textural aesthetic.' 
  },
  { 
    id: 'lb_sunset_rooftop_highlands', 
    label: 'GÜNBATIMI TERASI (YÜKSEK İRTİFA)', 
    promptValue: 'ATMOSPHERE TASK: A luxury bathroom on a high mountain terrace during sunset. Warm orange sky reflecting in the water, long shadows, breathtaking view. Radiant, ambitious, and cinematic aesthetic.' 
  },
  { 
    id: 'lb_brutalist_concrete_structural', 
    label: 'BRÜTALİST BETON (YAPISAL)', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete minimalist bathroom. Sharp geometric lines, vast empty space, single designer chair, cool high-contrast lighting. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'lb_pure_white_infinity', 
    label: 'SONSUZ BEYAZLIK (YÜKSEK MODA)', 
    promptValue: 'ATMOSPHERE TASK: A pure white, seamless "Infinity Cove" bathroom studio. No shadows, soft diffused light from everywhere, focus entirely on the subject\'s beauty. Minimalist, clean, and high-fashion aesthetic.' 
  }
],
'home_library_study': [
  { 
    id: 'hl_classic_mahogany_grand', 
    label: 'KLASİK MAUN KÜTÜPHANE', 
    promptValue: 'ATMOSPHERE TASK: A grand traditional library with floor-to-ceiling mahogany bookshelves. Rolling wooden ladder, green banker lamp on a leather desk, leather wingback chairs, warm soft lighting. Intellectual, prestigious, and timeless aesthetic.' 
  },
  { 
    id: 'hl_modern_minimalist_white', 
    label: 'MODERN MİNİMALİST (BEYAZ)', 
    promptValue: 'ATMOSPHERE TASK: A sleek ultra-modern study. Floating white shelves, minimalist designer desk, large windows with a garden view, bright indirect natural light, clean lines. Zen, professional, and bright aesthetic.' 
  },
  { 
    id: 'hl_dark_academia_mystery', 
    label: 'DARK ACADEMIA GİZEMİ', 
    promptValue: 'ATMOSPHERE TASK: A moody and intense scholar room. Old globes, scattered scrolls, candlelight, dark oak beams, heavy velvet curtains, mysterious and scholarly atmosphere. Cinematic, intense, and historic aesthetic.' 
  },
  { 
    id: 'hl_industrial_brick_loft', 
    label: 'ENDÜSTRİYEL LOFT ÇALIŞMA', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial loft library. Exposed red brick walls, black steel shelving, large factory windows, concrete floor, vintage drafting table. Urban, edgy, and structural aesthetic.' 
  },
  { 
    id: 'hl_scandinavian_birch_airy', 
    label: 'İSKANDİNAV FERAHLIĞI', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian study. Light birch wood furniture, functional minimalist decor, plenty of white space, soft natural northern light. Peaceful, optimistic, and clean aesthetic.' 
  },
  { 
    id: 'hl_boho_cozy_book_nook', 
    label: 'BOHEM OKUMA KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A relaxed bohemian library filled with plants. Macrame wall hangings, floor pillows, warm string lights, colorful rugs, and a comfortable reading chair. Organic, soulful, and cozy aesthetic.' 
  },
  { 
    id: 'hl_futuristic_hitech_vfx', 
    label: 'FÜTÜRİSTİK TEKNOLOJİ ÜSSÜ', 
    promptValue: 'ATMOSPHERE TASK: A high-tech digital workspace. Holographic displays, multiple curved monitors, cyan and magenta accent lighting, sleek metallic surfaces. Advanced, sci-fi, and innovative aesthetic.' 
  },
  { 
    id: 'hl_victorian_gothic_study', 
    label: 'VİKTORYA GOTİK KAVİ', 
    promptValue: 'ATMOSPHERE TASK: A dark ornate Victorian library. Detailed wood carvings, stained glass windows, antique scientific instruments, heavy atmosphere, dim warm lighting. Gothic, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'hl_luxury_penthouse_skyline', 
    label: 'LÜKS PENTHOUSE MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: A high-end study atop a skyscraper. Designer glass desk, floor-to-ceiling windows showing a glowing city skyline at night, elite urban atmosphere. Successful, urban, and glamorous aesthetic.' 
  },
  { 
    id: 'hl_rustic_mountain_cabin', 
    label: 'RUSTİK DAĞ EVİ KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy library in a timber mountain lodge. Stone fireplace, heavy wood beams, fur rugs, view of a snowy forest through the window. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'hl_zen_minimalist_japanese', 
    label: 'ZEN MİNİMALİST (JAPON)', 
    promptValue: 'ATMOSPHERE TASK: A calm Japanese-inspired study. Low wooden desk, tatami mat elements, sliding paper shoji screens, soft diffused light, a single bonsai. Meditative, pure, and minimal aesthetic.' 
  },
  { 
    id: 'hl_mid_century_retro_modern', 
    label: 'MID-CENTURY RETRO STİL', 
    promptValue: 'ATMOSPHERE TASK: A 1960s inspired study. Teak wood shelving, iconic designer chairs, geometric patterns, warm analog film texture, sunset light. Retro, stylish, and intellectual aesthetic.' 
  },
  { 
    id: 'hl_botanical_jungle_library', 
    label: 'BOTANİK ORMAN KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: A library room overflowing with indoor plants and vines. Greenhouse-style skylight, fresh humid atmosphere, sunlight filtering through leaves. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'hl_secret_hidden_chamber', 
    label: 'GİZLİ BÖLME / MAHZEN', 
    promptValue: 'ATMOSPHERE TASK: A secret library hidden behind a rotating bookshelf. Narrow space, ancient books, focused spotlight, mysterious and exclusive atmosphere. Secretive, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'hl_parisian_chic_atelier', 
    label: 'PARİS STİLİ ŞIK ATÖLYE', 
    promptValue: 'ATMOSPHERE TASK: An elegant Parisian study. White walls with moldings, herringbone floors, marble fireplace, crystal chandelier, soft morning light. Romantic, chic, and sophisticated aesthetic.' 
  },
  { 
    id: 'hl_maritime_coastal_captain', 
    label: 'DENİZCİ KAPTAN ODASI', 
    promptValue: 'ATMOSPHERE TASK: A study with a nautical theme. Brass telescopes, old sea maps, dark wood panels, view of the ocean through a porthole window. Adventurous, historic, and authentic aesthetic.' 
  },
  { 
    id: 'hl_artistic_creative_chaos', 
    label: 'SANATSAL YARATICI ALAN', 
    promptValue: 'ATMOSPHERE TASK: A creative home office filled with sketches, architectural models, and art supplies. Creative clutter, natural light, inspiring and high-energy vibe. Artistic, unique, and vibrant aesthetic.' 
  },
  { 
    id: 'hl_brutalist_concrete_raw', 
    label: 'BRÜTALİST BETON TASARIM', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete minimalist study. Bold geometric forms, single sharp spotlight, minimalist desk, high-contrast shadows. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'hl_golden_hour_serenity', 
    label: 'ALTIN SAAT HUZURU', 
    promptValue: 'ATMOSPHERE TASK: A library room flooded with warm golden light at sunset. Long shadows, lens flare, glowing dust motes, peaceful end-of-day atmosphere. Radiant, hopeful, and cinematic aesthetic.' 
  },
  { 
    id: 'hl_abstract_light_geometric', 
    label: 'SOYUT IŞIK VE GEOMETRİ', 
    promptValue: 'ATMOSPHERE TASK: A stylized study focusing on the patterns of light hitting the books. Deep shadows, architectural lines, monochromatic palette with one accent color. Artistic, structural, and modern aesthetic.' 
  }
],
'reading_nook': [
  { 
    id: 'rn_classic_wingback_library', 
    label: 'KLASİK KÜTÜPHANE KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A classic reading nook with a large leather wingback chair. Floor-to-ceiling bookshelves in the background, a warm brass floor lamp, soft focused light on an open book. Intellectual, cozy, and timeless aesthetic.' 
  },
  { 
    id: 'rn_modern_minimalist_window', 
    label: 'MODERN MİNİMALİST PENCERE', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern window seat reading nook. Clean white lines, thin grey cushions, large glass window with a serene garden view, bright natural light. Zen, clean, and professional aesthetic.' 
  },
  { 
    id: 'rn_boho_pillow_heaven', 
    label: 'BOHEM YASTIK KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy floor-based reading nook. Piles of patterned pillows, a soft knitted throw, warm fairy lights, indoor plants (pothos/ivy), relaxed and inviting atmosphere. Soulful, organic, and cozy aesthetic.' 
  },
  { 
    id: 'rn_fireplace_warm_glow', 
    label: 'ŞÖMİNE BAŞI OKUMA', 
    promptValue: 'ATMOSPHERE TASK: A reading chair positioned next to a glowing stone fireplace. Warm orange firelight, long shadows, rustic wooden beams, feeling of absolute comfort. Earthy, warm, and authentic aesthetic.' 
  },
  { 
    id: 'rn_attic_skylight_stars', 
    label: 'TAVAN ARASI YILDIZ GÖZLEMİ', 
    promptValue: 'ATMOSPHERE TASK: A reading nook directly under a slanted attic skylight. View of the blue night sky or soft rain on the glass, cozy textures, intimate and lonely in a beautiful way. Dreamlike, mysterious, and peaceful aesthetic.' 
  },
  { 
    id: 'rn_industrial_brick_leather', 
    label: 'ENDÜSTRİYEL TUĞLA VE DERİ', 
    promptValue: 'ATMOSPHERE TASK: A reading nook in an industrial loft. Exposed brick wall, black metal bookshelf, vintage leather chair, cool afternoon light from a factory window. Urban, edgy, and textural aesthetic.' 
  },
  { 
    id: 'rn_tropical_greenery_haven', 
    label: 'TROPİKAL YEŞİLLİK SIĞINAĞI', 
    promptValue: 'ATMOSPHERE TASK: A reading nook surrounded by large-leaf tropical plants. Wicker chair, soft misty morning light, fresh humid atmosphere, vibrant greens. Exotic, fresh, and dreamlike aesthetic.' 
  },
  { 
    id: 'rn_dark_academia_study', 
    label: 'DARK ACADEMIA ÇALIŞMA KÖŞESİ', 
    promptValue: 'ATMOSPHERE TASK: A moody corner filled with antique books and maps. Candlelight, dark oak desk, mysterious atmosphere, deep shadows and high-contrast lighting. Cinematic, intense, and historic aesthetic.' 
  },
  { 
    id: 'rn_scandinavian_hygge_white', 
    label: 'İSKANDİNAV HYGGE KONSEPTİ', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian reading room. Light birch wood, sheepskin rug, white minimalist furniture, soft natural daylight, peaceful visual order. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'rn_midcentury_modern_icon', 
    label: 'MID-CENTURY MODERN İKONU', 
    promptValue: 'ATMOSPHERE TASK: A reading nook featuring an iconic Eames-style lounge chair. Walnut wood paneling, retro floor lamp, geometric art on the wall, warm analog film texture. Retro, stylish, and intellectual aesthetic.' 
  },
  { 
    id: 'rn_hanging_egg_chair_fun', 
    label: 'ASILI YUMURTA KOLTUK', 
    promptValue: 'ATMOSPHERE TASK: A whimsical reading nook with a hanging rattan egg chair. Soft white cushions, bright airy sunroom background, playful and relaxed energy. Unique, youthful, and stylish aesthetic.' 
  },
  { 
    id: 'rn_secret_hidden_bookshelf', 
    label: 'GİZLİ KİTAPLIK BÖLMESİ', 
    promptValue: 'ATMOSPHERE TASK: A tiny secret reading space hidden behind a bookshelf. Narrow wooden walls, single small light source, feeling of a private world. Secretive, intimate, and mysterious aesthetic.' 
  },
  { 
    id: 'rn_victorian_velvet_elegance', 
    label: 'VİKTORYA KADİFE ZERAFETİ', 
    promptValue: 'ATMOSPHERE TASK: A grand Victorian reading corner. Ornate moldings, deep purple velvet armchair, crystal lamp, prestigious and historic atmosphere. Opulent, classic, and high-society aesthetic.' 
  },
  { 
    id: 'rn_seaside_coastal_beach', 
    label: 'SAHİL ESİNTİLİ KÖŞE', 
    promptValue: 'ATMOSPHERE TASK: A breezy coastal reading nook. Light blue and white linen, weathered wooden table, open window with a sea view, bright midday sun. Radiant, fresh, and peaceful aesthetic.' 
  },
  { 
    id: 'rn_hitech_digital_library', 
    label: 'DİJİTAL KÜTÜPHANE (TEKNO)', 
    promptValue: 'ATMOSPHERE TASK: A futuristic high-tech reading pod. Glowing blue LED accents, digital e-paper screens on walls, sleek metallic chair, sci-fi atmosphere. Advanced, synthetic, and innovative aesthetic.' 
  },
  { 
    id: 'rn_rainy_day_melancholy', 
    label: 'YAĞMURLU GÜN MELANKOLİSİ', 
    promptValue: 'ATMOSPHERE TASK: A reading nook by a window during a heavy storm. Raindrops on glass, grey moody daylight, warm tea on the side, introspective feeling. Melancholic, cinematic, and textural aesthetic.' 
  },
  { 
    id: 'rn_zen_meditation_mat', 
    label: 'ZEN MEDİTASYON VE OKUMA', 
    promptValue: 'ATMOSPHERE TASK: A minimalist floor-based reading area. Bamboo mat, low wooden table, soft paper lamp, absolute silence and peace. Zen, pure, and meditative aesthetic.' 
  },
  { 
    id: 'rn_kids_fairytale_castle', 
    label: 'MASALSI ÇOCUK KALESİ', 
    promptValue: 'ATMOSPHERE TASK: A whimsical reading nook designed like a small castle or tent. Colorful lights, soft plush textures, playful murals, imaginative atmosphere. Fun, colorful, and creative aesthetic.' 
  },
  { 
    id: 'rn_sunset_golden_hour', 
    label: 'ALTIN SAAT OKUMA KEYFİ', 
    promptValue: 'ATMOSPHERE TASK: A reading chair flooded with warm golden light at sunset. Long shadows, lens flare, glowing dust motes, peaceful end-of-day vibe. Radiant, hopeful, and cinematic aesthetic.' 
  },
  { 
    id: 'rn_abstract_shadow_play', 
    label: 'SOYUT IŞIK VE GÖLGE OKUMASI', 
    promptValue: 'ATMOSPHERE TASK: A stylized reading nook focusing on the sharp shadow of the chair and books. High-contrast monochrome lighting, architectural focus, artistic cinema style. Artistic, structural, and modern aesthetic.' 
  }
],
'home_modern': [
  { 
    id: 'hm_luxury_minimalist_white', 
    label: 'LÜKS MİNİMALİST (BEYAZ)', 
    promptValue: 'ATMOSPHERE TASK: A pristine luxury minimalist living room. All-white designer furniture, high ceilings, large windows with soft morning light, curated art pieces. Opulent, clean, and prestigious aesthetic.' 
  },
  { 
    id: 'hm_industrial_brick_loft', 
    label: 'ENDÜSTRİYEL LOFT (TUĞLA)', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial loft living area. Exposed red brick walls, black steel beams, leather sofa, factory-style windows, and warm ambient lighting. Urban, edgy, and textural aesthetic.' 
  },
  { 
    id: 'hm_scandinavian_hygge', 
    label: 'İSKANDİNAV RAHATLIĞI (HYGGE)', 
    promptValue: 'ATMOSPHERE TASK: A bright Scandinavian living room focusing on comfort. Light birch wood, soft wool blankets, minimalist functional furniture, and soft natural daylight. Peaceful, optimistic, and clean aesthetic.' 
  },
  { 
    id: 'hm_midcentury_modern_retro', 
    label: 'MID-CENTURY RETRO STİL', 
    promptValue: 'ATMOSPHERE TASK: A 1960s inspired modern living room. Iconic walnut furniture, geometric patterns, retro floor lamps, and a warm analog film texture. Retro, stylish, and intellectual aesthetic.' 
  },
  { 
    id: 'hm_boho_chic_jungle', 
    label: 'BOHEM ŞIKLIK (BOHO-CHIC)', 
    promptValue: 'ATMOSPHERE TASK: A relaxed bohemian living space. Macrame wall hangings, many indoor plants, rattan furniture, colorful patterned rugs, and soft sunlight. Organic, soulful, and cozy aesthetic.' 
  },
  { 
    id: 'hm_dark_executive_moody', 
    label: 'KARANLIK YÖNETİCİ SALONU', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated dark-themed living room. Charcoal grey walls, velvet upholstery, moody directional lighting, elite atmosphere with marble accents. Cinematic, intense, and expensive aesthetic.' 
  },
  { 
    id: 'hm_coastal_beach_house', 
    label: 'SAHİL EVİ ESİNTİSİ', 
    promptValue: 'ATMOSPHERE TASK: A breezy coastal living room. Light blue and white palette, bleached wood, open windows with a sea breeze, bright midday sun. Radiant, fresh, and peaceful aesthetic.' 
  },
  { 
    id: 'hm_japanese_zen_minimalism', 
    label: 'JAPON ZEN TARZI', 
    promptValue: 'ATMOSPHERE TASK: A calm Japanese-inspired living area. Low furniture, tatami elements, sliding paper screens, minimalist bonsai, and soft diffused light. Zen, pure, and meditative aesthetic.' 
  },
  { 
    id: 'hm_tropical_indoor_paradise', 
    label: 'TROPİKAL İÇ MEKAN', 
    promptValue: 'ATMOSPHERE TASK: A living room overflowing with large tropical plants and palms. Humid misty atmosphere, sunlight filtering through leaves, vibrant greens. Exotic, fresh, and dreamlike aesthetic.' 
  },
  { 
    id: 'hm_art_deco_glamour', 
    label: 'ART DECO İHTİŞAMI', 
    promptValue: 'ATMOSPHERE TASK: A stylized Art Deco living room. Gold and emerald green palette, geometric patterns, velvet seating, dramatic focused lighting. Glamorous, classic, and high-society aesthetic.' 
  },
  { 
    id: 'hm_rustic_mountain_lodge', 
    label: 'RUSTİK DAĞ EVİ GÜVENİ', 
    promptValue: 'ATMOSPHERE TASK: A cozy living room in a timber mountain lodge. Stone walls, massive wood beams, fur throws, and a glowing fireplace nearby. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'hm_futuristic_cyber_living', 
    label: 'SİBER GELECEK (YÜKSEK TEKNO)', 
    promptValue: 'ATMOSPHERE TASK: A high-tech cyberpunk living room. Cyan and magenta LED accents, sleek metallic surfaces, holographic panels, view of a neon city skyline. Advanced, synthetic, and innovative aesthetic.' 
  },
  { 
    id: 'hm_parisian_chic_molding', 
    label: 'PARİSLİ ŞIK DAİRE', 
    promptValue: 'ATMOSPHERE TASK: An elegant Parisian living room. Tall white walls with moldings, herringbone floors, marble fireplace, and soft morning luxury light. Romantic, chic, and sophisticated aesthetic.' 
  },
  { 
    id: 'hm_cozy_fireplace_nook', 
    label: 'ŞÖMİNE BAŞI HUZURU', 
    promptValue: 'ATMOSPHERE TASK: Focus on a warm fireplace area in a living room. Burning logs, orange glowing firelight, deep shadows, and feeling of total comfort. Warm, domestic, and authentic aesthetic.' 
  },
  { 
    id: 'hm_hitech_smart_home', 
    label: 'AKILLI EV TEKNOLOJİSİ', 
    promptValue: 'ATMOSPHERE TASK: A futuristic minimalist smart home. Touch-voice controlled surfaces, hidden tech, clinical white and silver lighting, advanced atmosphere. Sleek, polished, and innovative aesthetic.' 
  },
  { 
    id: 'hm_pop_art_vibrant', 
    label: 'POP ART RENKLERİ', 
    promptValue: 'ATMOSPHERE TASK: A vibrant living room filled with bold primary colors and pop art. Graphic patterns, colorful furniture, high-energy lighting. Fun, expressive, and vibrant aesthetic.' 
  },
  { 
    id: 'hm_brutalist_concrete_raw', 
    label: 'BRÜTALİST BETON LOFT', 
    promptValue: 'ATMOSPHERE TASK: A raw concrete minimalist living space. Bold geometric lines, vast empty space, high-contrast shadows, architectural focus. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'hm_sunset_golden_hour', 
    label: 'GÜNBATIMI HUZURU', 
    promptValue: 'ATMOSPHERE TASK: A living room flooded with warm golden light at sunset. Long shadows, lens flare, glowing dust motes, peaceful end-of-day vibe. Radiant, hopeful, and cinematic aesthetic.' 
  },
  { 
    id: 'hm_vertical_garden_wall', 
    label: 'DİKEY BAHÇELİ SALON', 
    promptValue: 'ATMOSPHERE TASK: A living room with a full wall of living green plants and ferns. Bright skylight, organic textures, fresh and airy feeling. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'hm_quiet_luxury_beige', 
    label: 'SESSİZ LÜKS (BEJ)', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated living room in cream and beige tones. High-end materials used subtly, architectural lighting, peaceful and elite atmosphere. Poetic, soft, and polished aesthetic.' 
  }
],
'usa': [
  { 
    id: 'usa_times_square_neon', 
    label: 'TIMES SQUARE (NEON GECE)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in the heart of New York Times Square at night. Flashing neon billboards, yellow cabs, vibrant city lights, energetic urban atmosphere. Urban, cinematic, and high-energy aesthetic.' 
  },
  { 
    id: 'usa_central_park_morning', 
    label: 'CENTRAL PARK (SABAH KOŞUSU)', 
    promptValue: 'ATMOSPHERE TASK: A peaceful morning in New York Central Park. Skyscrapers visible over the trees, soft morning light, joggers in background, lush green environment. Fresh, lifestyle, and iconic aesthetic.' 
  },
  { 
    id: 'usa_brooklyn_bridge_sunset', 
    label: 'BROOKLYN KÖPRÜSÜ (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: Standing on the Brooklyn Bridge at sunset. Iconic steel cables, Manhattan skyline in the golden hour light, warm orange sky. Radiant, ambitious, and cinematic aesthetic.' 
  },
  { 
    id: 'usa_la_palm_trees_sunset', 
    label: 'LA PALMİYE DİZİLİ CADDE', 
    promptValue: 'ATMOSPHERE TASK: A classic Los Angeles street lined with tall silhouettes of palm trees against a pink and purple sunset sky. Warm California glow, relaxed West Coast vibe. Radiant, iconic, and lifestyle aesthetic.' 
  },
  { 
    id: 'usa_hollywood_hills_sign', 
    label: 'HOLLYWOOD HILLS MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: Overlooking the Hollywood sign from a scenic viewpoint. Bright California sun, arid hills, glamorous and ambitious atmosphere. Successful, ambitious, and iconic aesthetic.' 
  },
  { 
    id: 'usa_wall_street_executive', 
    label: 'WALL STREET (İŞ DÜNYASI)', 
    promptValue: 'ATMOSPHERE TASK: A busy morning on Wall Street. Classic stone architecture, professional crowd, fast-paced energy, clean high-contrast daylight. Powerful, elite, and professional aesthetic.' 
  },
  { 
    id: 'usa_soho_loft_street', 
    label: 'SOHO LOFT SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: The cast-iron architecture of New York Soho. Rooftop water tanks, artistic boutique storefronts, stylish urban vibe, soft afternoon shadows. Trendy, artistic, and urban aesthetic.' 
  },
  { 
    id: 'usa_santa_monica_pier', 
    label: 'SANTA MONICA İSKELESİ', 
    promptValue: 'ATMOSPHERE TASK: The colorful Santa Monica Pier at dusk. Ferris wheel lights reflecting on the Pacific Ocean, carnival atmosphere, soft ocean breeze. Fun, vibrant, and nostalgic aesthetic.' 
  },
  { 
    id: 'usa_grand_central_station', 
    label: 'GRAND CENTRAL TERMİNALİ', 
    promptValue: 'ATMOSPHERE TASK: Inside the grand hall of New York Grand Central Station. Sunbeams streaming through massive windows, historic architecture, sense of motion and travel. Majestic, historic, and cinematic aesthetic.' 
  },
  { 
    id: 'usa_beverly_hills_luxury', 
    label: 'BEVERLY HILLS LÜKSÜ', 
    promptValue: 'ATMOSPHERE TASK: Rodeo Drive in Beverly Hills. Luxury boutique storefronts, expensive cars, bright polished surfaces, elite high-fashion atmosphere. Opulent, glamorous, and expensive aesthetic.' 
  },
  { 
    id: 'usa_vintage_route_66', 
    label: 'VİNTAGE ROUTE 66 DURAĞI', 
    promptValue: 'ATMOSPHERE TASK: A nostalgic American diner or gas station on Route 66. Neon signs, desert background, vintage cars, authentic Americana feel. Nostalgic, earthy, and textural aesthetic.' 
  },
  { 
    id: 'usa_manhattan_rooftop_party', 
    label: 'MANHATTAN TERAS PARTİSİ', 
    promptValue: 'ATMOSPHERE TASK: A luxury Manhattan rooftop terrace. City lights everywhere, cocktails, modern designer furniture, high-fashion social vibe. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'usa_venice_beach_skate', 
    label: 'VENICE BEACH (SKATE PARK)', 
    promptValue: 'ATMOSPHERE TASK: The vibrant Venice Beach boardwalk. Graffiti art, skate park in background, colorful eclectic crowd, bright Pacific sun. Creative, active, and youthful aesthetic.' 
  },
  { 
    id: 'usa_chicago_l_train', 
    label: 'CHICAGO (METRO HATTI)', 
    promptValue: 'ATMOSPHERE TASK: Under the elevated "L" train tracks in a city. Gritty industrial architecture, dramatic light passing through steel beams, urban high-contrast look. Edgy, structural, and urban aesthetic.' 
  },
  { 
    id: 'usa_sf_golden_gate_fog', 
    label: 'GOLDEN GATE (SİSLİ)', 
    promptValue: 'ATMOSPHERE TASK: A view of the Golden Gate Bridge partially covered in morning fog. Deep orange bridge color against grey mist, mysterious and expansive atmosphere. Poetic, iconic, and atmospheric aesthetic.' 
  },
  { 
    id: 'usa_miami_ocean_drive', 
    label: 'MIAMI OCEAN DRIVE', 
    promptValue: 'ATMOSPHERE TASK: The Art Deco neon lights of Miami Ocean Drive. Pastel colored buildings, vintage convertibles, palm trees, vibrant tropical night energy. Fun, colorful, and glamorous aesthetic.' 
  },
  { 
    id: 'usa_malibu_beach_house', 
    label: 'MALIBU MODERN SAHİL EVİ', 
    promptValue: 'ATMOSPHERE TASK: A minimalist modern beach house in Malibu. Large glass windows open to the ocean, bright white interior, soft sound of waves vibe. Radiant, fresh, and upper-class aesthetic.' 
  },
  { 
    id: 'usa_downtown_la_noir', 
    label: 'DOWNTOWN LA (NEO-NOIR)', 
    promptValue: 'ATMOSPHERE TASK: A cinematic dark alley in Downtown Los Angeles. Wet pavement, distant neon reflections, moody shadows, mysterious urban atmosphere. Cinematic, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'usa_industrial_brooklyn_navy', 
    label: 'ENDÜSTRİYEL BROOKLYN YARD', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial setting in the Brooklyn Navy Yard. Old warehouses, rusted steel, river view, authentic urban grit. Urban, structural, and textural aesthetic.' 
  },
  { 
    id: 'usa_american_dream_suburb', 
    label: 'AMERİKAN RÜYASI (BANLİYE)', 
    promptValue: 'ATMOSPHERE TASK: A perfect suburban street with white picket fences. Manicured lawns, golden hour sun, peaceful domestic atmosphere, large family houses. Optimistic, warm, and domestic aesthetic.' 
  }
],
'germany': [
  { 
    id: 'de_brandenburg_gate_day', 
    label: 'BRANDENBURG KAPISI (GÜNDÜZ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in front of the iconic Brandenburg Gate in Berlin during a clear day. Neoclassical architecture, wide stone plaza, bright neutral sunlight. Historic, majestic, and structured aesthetic.' 
  },
  { 
    id: 'de_berlin_wall_street_art', 
    label: 'BERLİN DUVARI (SOKAK SANATI)', 
    promptValue: 'ATMOSPHERE TASK: A vibrant urban setting at the East Side Gallery. Colorful graffiti murals on the concrete wall, urban street vibe, soft afternoon light. Trendy, artistic, and urban aesthetic.' 
  },
  { 
    id: 'de_potsdamer_platz_modern', 
    label: 'POTSDAMER PLATZ (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern setting in Berlin’s Potsdamer Platz. Glass skyscrapers, reflective surfaces, sharp architectural lines, cool blue tones. Advanced, structural, and professional aesthetic.' 
  },
  { 
    id: 'de_alexanderplatz_tv_tower', 
    label: 'ALEXANDERPLATZ VE TV KULESİ', 
    promptValue: 'ATMOSPHERE TASK: An iconic Berlin view featuring the Berlin TV Tower (Fernsehturm) at dusk. Wide urban square, early evening lights, socialist-modernist architecture details. Urban, iconic, and atmospheric aesthetic.' 
  },
  { 
    id: 'de_kreuzberg_industrial_loft', 
    label: 'KREUZBERG ENDÜSTRİYEL LOFT', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial loft in Berlin Kreuzberg. High ceilings, exposed plumbing, massive windows, minimalist steel furniture. Edgy, urban, and textural aesthetic.' 
  },
  { 
    id: 'de_museum_island_classic', 
    label: 'MÜZE ADASI (KLASİK)', 
    promptValue: 'ATMOSPHERE TASK: The neoclassical grandeur of Berlin’s Museum Island. Massive columns, stone textures, scholarly and historic atmosphere, soft diffused light. Historic, intellectual, and prestigious aesthetic.' 
  },
  { 
    id: 'de_reichstag_modern_dome', 
    label: 'REICHSTAG MODERN KUBBE', 
    promptValue: 'ATMOSPHERE TASK: Inside or near the glass dome of the Reichstag building. Steel and glass architecture, spiral patterns, bright natural light, panoramic view of the city. Transparent, structural, and ambitious aesthetic.' 
  },
  { 
    id: 'de_bauhaus_minimalist_studio', 
    label: 'BAUHAUS MİNİMALİST STÜDYO', 
    promptValue: 'ATMOSPHERE TASK: A clean minimalist space inspired by Bauhaus design. Primary colors hints, functional furniture, sharp geometric shadows, bright clinical light. Zen, structural, and modern aesthetic.' 
  },
  { 
    id: 'de_kurfurstendamm_luxury', 
    label: 'KURFÜRSTENDAMM LÜKSÜ', 
    promptValue: 'ATMOSPHERE TASK: A high-end street view on Berlin’s Kurfürstendamm. Elegant 19th-century buildings, luxury car showrooms, designer boutiques, polished urban atmosphere. Opulent, glamorous, and expensive aesthetic.' 
  },
  { 
    id: 'de_berlin_underground_ubahn', 
    label: 'BERLİN METRO (U-BAHN)', 
    promptValue: 'ATMOSPHERE TASK: A classic Berlin U-Bahn station platform. Yellow train in background, retro tile walls (orange/green), dim underground lighting, sense of urban motion. Nostalgic, urban, and authentic aesthetic.' 
  },
  { 
    id: 'de_neuschwanstein_fairytale', 
    label: 'NEUSCHWANSTEIN ŞATOSU', 
    promptValue: 'ATMOSPHERE TASK: A fairytale forest view of the Neuschwanstein Castle in the Bavarian Alps. Mist-covered mountains, white stone turrets, magical and expansive atmosphere. Poetic, romantic, and historic aesthetic.' 
  },
  { 
    id: 'de_bavarian_alps_summit', 
    label: 'BAVYERA ALPLERİ ZİRVESİ', 
    promptValue: 'ATMOSPHERE TASK: Standing on a snowy peak in the German Alps. Blue sky, jagged rock formations, crisp cold air vibe, expansive horizon. Radiance, ambitious, and ethereal aesthetic.' 
  },
  { 
    id: 'de_berlin_rooftop_night', 
    label: 'BERLİN TERAS (GECE)', 
    promptValue: 'ATMOSPHERE TASK: A luxury rooftop bar in Berlin at night. City lights, TV tower in distance, modern furniture, high-fashion social vibe. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'de_hamburg_speicherstadt', 
    label: 'HAMBURG SPEICHERSTADT', 
    promptValue: 'ATMOSPHERE TASK: The historic warehouse district (Speicherstadt) in Hamburg. Dark red brick architecture, canals, iron bridges, moody evening light. Historic, textural, and structural aesthetic.' 
  },
  { 
    id: 'de_berlin_tech_campus', 
    label: 'BERLİN TEKNOLOJİ KAMPÜSÜ', 
    promptValue: 'ATMOSPHERE TASK: A modern tech office or startup hub in Berlin. Glass walls, open space, minimalist workstations, bright and innovative energy. Advanced, professional, and innovative aesthetic.' 
  },
  { 
    id: 'de_black_forest_mystery', 
    label: 'KARA ORMAN (MYSTIC)', 
    promptValue: 'ATMOSPHERE TASK: A deep misty forest in Germany’s Black Forest. Tall pine trees, moss-covered ground, mysterious foggy atmosphere, soft green light. Poetic, mysterious, and organic aesthetic.' 
  },
  { 
    id: 'de_dark_techno_club_vibe', 
    label: 'BERLİN TEKNO KULÜP STİLİ', 
    promptValue: 'ATMOSPHERE TASK: A dark industrial club setting inspired by Berlin nightlife. Strobe lights, concrete walls, moody shadows, intense and energetic atmosphere. Cinematic, intense, and edgy aesthetic.' 
  },
  { 
    id: 'de_christmas_market_warmth', 
    label: 'ALMAN NOEL PAZARI', 
    promptValue: 'ATMOSPHERE TASK: A traditional German Christmas market at night. Wooden huts, warm yellow fairy lights, snow on rooftops, cozy nostalgic holiday feeling. Radiant, nostalgic, and warm aesthetic.' 
  },
  { 
    id: 'de_modern_berlin_library', 
    label: 'BERLİN MODERN KÜTÜPHANESİ', 
    promptValue: 'ATMOSPHERE TASK: The futuristic interior of a modern Berlin library. Parallel wooden shelves, minimalist geometric architecture, bright indirect light. Intellectual, structural, and modern aesthetic.' 
  },
  { 
    id: 'de_sunset_lake_wannsee', 
    label: 'WANNSEE GÜNBATIMI', 
    promptValue: 'ATMOSPHERE TASK: A peaceful lakeside setting at Berlin’s Wannsee. Sailboats in background, golden hour sun reflecting on water, relaxed summer vibe. Radiant, peaceful, and lifestyle aesthetic.' 
  }
],
'brazil': [
  { 
    id: 'br_copacabana_beach_day', 
    label: 'COPACABANA PLAJI (GÜNDÜZ)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject on the famous Copacabana beach in Rio. Iconic black and white wave pattern sidewalk, bright tropical sun, turquoise ocean, and vibrant beach activity. Energetic, sunny, and iconic aesthetic.' 
  },
  { 
    id: 'br_christ_redeemer_view', 
    label: 'KESİNTİSİZ RIO MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: A breathtaking overlook from Corcovado mountain beside the Christ the Redeemer statue. Panoramic view of Guanabara Bay and Sugarloaf Mountain, soft hazy sunlight, expansive horizon. Majestic, successful, and iconic aesthetic.' 
  },
  { 
    id: 'br_selaron_steps_art', 
    label: 'SELARON BASAMAKLARI (RENKLİ)', 
    promptValue: 'ATMOSPHERE TASK: The colorful Escadaria Selarón in Santa Teresa. Thousands of vibrant yellow, green, and red tiles, artistic urban vibe, warm afternoon light. Artistic, vibrant, and textural aesthetic.' 
  },
  { 
    id: 'br_ipanema_sunset_vibes', 
    label: 'IPANEMA GÜNBATIMI (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: A stylish setting at Ipanema beach during sunset. Golden hour light hitting the "Two Brothers" (Dois Irmãos) peaks, soft warm atmosphere, relaxed luxury beach vibe. Radiant, poetic, and lifestyle aesthetic.' 
  },
  { 
    id: 'br_carnival_night_glam', 
    label: 'FESTİVAL GECESİ (KARNAVAL)', 
    promptValue: 'ATMOSPHERE TASK: A dynamic Rio Carnival atmosphere at night. Bright colorful spotlights, bokeh of feathers and sequins in background, high-energy party vibe, cinematic nighttime street lighting. Vibrant, glamorous, and high-energy aesthetic.' 
  },
  { 
    id: 'br_modern_niemeyer_arch', 
    label: 'MODERNİST RIO MİMARİSİ', 
    promptValue: 'ATMOSPHERE TASK: A sleek modern setting inspired by Oscar Niemeyer’s architecture. White curved concrete structures, minimalist reflective pools, bright high-contrast tropical sun. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'br_santa_teresa_vintage', 
    label: 'SANTA TERESA NOSTALJİSİ', 
    promptValue: 'ATMOSPHERE TASK: A charming street in the historic Santa Teresa neighborhood. Yellow vintage tram (Bondinho), colonial architecture, lush greenery, soft dappled sunlight. Historic, authentic, and textural aesthetic.' 
  },
  { 
    id: 'br_tijuca_rainforest_yoga', 
    label: 'TIJUCA YAĞMUR ORMANI', 
    promptValue: 'ATMOSPHERE TASK: A lush deep green setting inside the Tijuca Rainforest. Massive tropical leaves, misty humid air, sunlight rays filtering through the dense canopy, cascading waterfall in distance. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'br_luxury_penthouse_leblon', 
    label: 'LEBLON LÜKS PENTHOUSE', 
    promptValue: 'ATMOSPHERE TASK: A high-end luxury apartment in Leblon overlooking the ocean. Designer furniture, floor-to-ceiling glass, bright airy atmosphere, elite coastal lifestyle. Opulent, urban, and high-fashion aesthetic.' 
  },
  { 
    id: 'br_botanical_garden_palm', 
    label: 'BOTANİK BAHÇE (PALMİYE)', 
    promptValue: 'ATMOSPHERE TASK: The grand avenue of Imperial Palms in Rio’s Botanical Garden. Symmetric tall palm trees, soft diffused light, elegant and peaceful nature atmosphere. Majestic, serene, and architectural aesthetic.' 
  },
  { 
    id: 'br_favela_colorful_urban', 
    label: 'RENKLİ FAVELA SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: A vibrant urban scene inside a colorful favela. Multicolored stacked houses, street art, kite flying in the sky, intense midday sun, authentic local energy. Fun, textural, and vibrant aesthetic.' 
  },
  { 
    id: 'br_maracana_stadium_lights', 
    label: 'MARACANA STADYUM IŞIKLARI', 
    promptValue: 'ATMOSPHERE TASK: A dramatic setting near the Maracanã stadium. Bright floodlights, modern industrial architectural details, high-energy sports atmosphere. Powerful, active, and structural aesthetic.' 
  },
  { 
    id: 'br_bossa_nova_lounge', 
    label: 'BOSSA NOVA LOUNGE (60s)', 
    promptValue: 'ATMOSPHERE TASK: A sophisticated 1960s Rio lounge interior. Mid-century modern furniture, vinyl records, view of the beach at dusk, warm analog film texture. Retro, stylish, and intellectual aesthetic.' 
  },
  { 
    id: 'br_porto_maravilha_art', 
    label: 'PORTO MARAVILHA (MODERN LİMAN)', 
    promptValue: 'ATMOSPHERE TASK: The renovated Porto Maravilha area. Massive street art murals, futuristic Museum of Tomorrow in background, clean urban lines, bright sun. Advanced, artistic, and modern aesthetic.' 
  },
  { 
    id: 'br_tropical_garden_villa', 
    label: 'TROPİKAL BAHÇELİ VİLLA', 
    promptValue: 'ATMOSPHERE TASK: A colonial-style villa surrounded by a private tropical garden. Hibiscus flowers, rattan furniture, humid afternoon air, soft golden shadows. Earthy, wealthy, and authentic aesthetic.' 
  },
  { 
    id: 'br_ocean_drive_barradatijuca', 
    label: 'BARRA DA TIJUCA (MODERN KIYI)', 
    promptValue: 'ATMOSPHERE TASK: A wide open modern beach road in Barra da Tijuca. Skyscrapers, clean turquoise sea, bright high-energy sun, active lifestyle vibe. Radiant, fresh, and professional aesthetic.' 
  },
  { 
    id: 'br_misty_mountain_sunrise', 
    label: 'SİSLİ DAĞ GÜNDOĞUMU', 
    promptValue: 'ATMOSPHERE TASK: A mysterious sunrise overlooking the peaks of Rio. Rolling white clouds between the mountains, deep blue and orange sky, ethereal morning light. Dreamlike, expansive, and peaceful aesthetic.' 
  },
  { 
    id: 'br_laguna_rodrigo_freitas', 
    label: 'RODRIGO DE FREITAS GÖLÜ', 
    promptValue: 'ATMOSPHERE TASK: A peaceful setting at the Lagoa. Mountains reflecting in the calm water, palm trees, cyclists in background, soft late afternoon light. Zen, clean, and optimistic aesthetic.' 
  },
  { 
    id: 'br_chic_poolside_glam', 
    label: 'ŞIK HAVUZ BAŞI (RIO STİLİ)', 
    promptValue: 'ATMOSPHERE TASK: A luxury hotel rooftop pool overlooking the ocean. Crystal blue water, designer loungers, bright tropical sun, high-fashion social vibe. Glamorous, successful, and urban aesthetic.' 
  },
  { 
    id: 'br_dusk_city_lights_urban', 
    label: 'RIO ŞEHİR IŞIKLARI (ALACAKARANLIK)', 
    promptValue: 'ATMOSPHERE TASK: A high-contrast urban view of Rio at night. Glowing streets snaking between dark mountains, deep blue night sky, cinematic city glow. Cinematic, intense, and mysterious aesthetic.' 
  }
],
'dubai': [
  { 
    id: 'db_burj_khalifa_sunset', 
    label: 'BURJ KHALIFA (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A breathtaking view of the Burj Khalifa at sunset. The skyscraper reflecting golden light, desert haze in the distance, warm orange and purple sky, elite urban atmosphere. Majestic, successful, and iconic aesthetic.' 
  },
  { 
    id: 'db_desert_safari_dunes', 
    label: 'ÇÖL SAFARİSİ (KIZIL KUMLAR)', 
    promptValue: 'ATMOSPHERE TASK: Vast rolling red sand dunes of the Dubai desert at golden hour. Dramatic shadows, endless horizon, warm sunlight, authentic Arabian atmosphere. Earthy, expansive, and adventurous aesthetic.' 
  },
  { 
    id: 'db_palm_jumeirah_beach', 
    label: 'PALM JUMEIRAH (SAHİL)', 
    promptValue: 'ATMOSPHERE TASK: A luxury beach setting on Palm Jumeirah. Turquoise water, white sand, futuristic hotel architecture in the background, bright midday sun, tropical luxury vibe. Radiant, fresh, and upper-class aesthetic.' 
  },
  { 
    id: 'db_marina_night_skyline', 
    label: 'DUBAI MARINA (GECE)', 
    promptValue: 'ATMOSPHERE TASK: The glowing skyline of Dubai Marina at night. Skyscrapers reflected in the water, luxury yachts, vibrant city lights, high-contrast urban energy. Cinematic, glamorous, and high-energy aesthetic.' 
  },
  { 
    id: 'db_burj_al_arab_lounge', 
    label: 'BURJ AL ARAB (LÜKS LOUNGE)', 
    promptValue: 'ATMOSPHERE TASK: An opulent lounge with a view of the Burj Al Arab. Gold leaf details, velvet furniture, crystal chandeliers, feeling of extreme high-end luxury. Opulent, prestigious, and polished aesthetic.' 
  },
  { 
    id: 'db_museum_future_calligraphy', 
    label: 'GELECEĞİN MÜZESİ (MİMARİ)', 
    promptValue: 'ATMOSPHERE TASK: In front of the Museum of the Future in Dubai. Iconic silver torus shape with Arabic calligraphy, sunlight reflecting off the metallic surface, futuristic urban setting. Advanced, structural, and innovative aesthetic.' 
  },
  { 
    id: 'db_old_dubai_souk', 
    label: 'ESKİ DUBAİ (BAHARAT ÇARŞISI)', 
    promptValue: 'ATMOSPHERE TASK: A vibrant traditional spice souk in Old Dubai. Colorful sacks of spices, gold lanterns, rustic wooden textures, warm natural light filtering through the roof. Authentic, textural, and vibrant aesthetic.' 
  },
  { 
    id: 'db_underwater_aquarium_blue', 
    label: 'SU ALTI AKVARYUMU (MAVİ)', 
    promptValue: 'ATMOSPHERE TASK: Inside the Dubai Mall aquarium tunnel. Sharks and rays swimming overhead, deep blue ethereal light, mystical and tranquil atmosphere. Ethereal, mysterious, and unique aesthetic.' 
  },
  { 
    id: 'db_luxury_yacht_cruising', 
    label: 'LÜKS YAT GEZİSİ', 
    promptValue: 'ATMOSPHERE TASK: On the deck of a luxury yacht cruising past the Dubai skyline. Blue ocean, bright sun, polished wood and white leather, elite sea-faring vibe. Successful, fresh, and glamorous aesthetic.' 
  },
  { 
    id: 'db_ain_dubai_ferris_wheel', 
    label: 'AIN DUBAI (DÖNME DOLAP)', 
    promptValue: 'ATMOSPHERE TASK: A scenic view featuring the Ain Dubai (Bluewaters Island) at dusk. Modern coastal architecture, early evening lights, expansive sky and sea. Urban, iconic, and atmospheric aesthetic.' 
  },
  { 
    id: 'db_desert_resort_pool', 
    label: 'ÇÖL VAHASI (LÜKS HAVUZ)', 
    promptValue: 'ATMOSPHERE TASK: An infinity pool at a high-end desert resort. View of sand dunes, palm trees, golden hour reflection in the water, peaceful and expensive atmosphere. Radiant, serene, and opulent aesthetic.' 
  },
  { 
    id: 'db_sheikh_zayed_skyscrapers', 
    label: 'SHEIKH ZAYED YOLU (DİKEY ŞEHİR)', 
    promptValue: 'ATMOSPHERE TASK: Standing amidst the massive skyscrapers of Sheikh Zayed Road. Modern glass and steel towers, fast-paced urban energy, bright high-contrast daylight. Powerful, structural, and urban aesthetic.' 
  },
  { 
    id: 'db_dubai_fountain_show', 
    label: 'DUBAİ FISKİYE GÖSTERİSİ', 
    promptValue: 'ATMOSPHERE TASK: The dramatic Dubai Fountain show at night. High water plumes, bright spotlights, Burj Khalifa in background, celebratory and majestic energy. Majestic, vibrant, and cinematic aesthetic.' 
  },
  { 
    id: 'db_kite_beach_surf_vibe', 
    label: 'KITE BEACH (AKTİF YAŞAM)', 
    promptValue: 'ATMOSPHERE TASK: A relaxed beach setting at Kite Beach. Colorful kites in the sky, Burj Al Arab in distance, soft sand, bright energetic sun. Active, fresh, and youthful aesthetic.' 
  },
  { 
    id: 'db_atlantis_royal_architecture', 
    label: 'ATLANTIS THE ROYAL (İHTİŞAM)', 
    promptValue: 'ATMOSPHERE TASK: The futuristic architecture of Atlantis The Royal. Complex geometric blocks, luxury pools, bright tropical sky, elite high-fashion atmosphere. Advanced, opulent, and architectural aesthetic.' 
  },
  { 
    id: 'db_creek_abra_crossing', 
    label: 'DUBAİ CREEK (ABRA TEKNESİ)', 
    promptValue: 'ATMOSPHERE TASK: Crossing the Dubai Creek on a traditional Abra boat. Historic wind towers in background, busy waterway, soft afternoon light, authentic local vibe. Authentic, historic, and textural aesthetic.' 
  },
  { 
    id: 'db_miracle_garden_floral', 
    label: 'MİRAKÜL BAHÇESİ (ÇİÇEKLER)', 
    promptValue: 'ATMOSPHERE TASK: A whimsical garden filled with millions of flowers and floral sculptures. Bright colors, sunlight, playful and imaginative atmosphere. Fun, colorful, and creative aesthetic.' 
  },
  { 
    id: 'db_penthouse_sky_high_view', 
    label: 'GÖKDELEN TERASI (BULUTLARDA)', 
    promptValue: 'ATMOSPHERE TASK: A luxury penthouse balcony above the clouds. Only the tops of skyscrapers visible, sunrise light, ethereal and successful atmosphere. Ethereal, ambitious, and successful aesthetic.' 
  },
  { 
    id: 'db_aura_skypool_infinity', 
    label: 'AURA SKYPOOL (DÜNYANIN ZİRVESİ)', 
    promptValue: 'ATMOSPHERE TASK: A 360-degree infinity pool high above the city. View of Palm Jumeirah, crystal water, bright sun, high-fashion social vibe. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'db_souk_madinat_jumeirah', 
    label: 'SOUK MADİNAT (KANALLAR)', 
    promptValue: 'ATMOSPHERE TASK: The traditional-style canals and shops of Souk Madinat Jumeirah. Wood architecture, Burj Al Arab tower visible, romantic evening lighting. Historic, charming, and polished aesthetic.' 
  }
],
'france': [
  { 
    id: 'fr_eiffel_tower_sunset', 
    label: 'EYFEL KULESİ (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A romantic view of the Eiffel Tower at sunset. Golden hour light hitting the iron structure, warm orange sky over the Champ de Mars, Parisian city glow. Romantic, majestic, and iconic aesthetic.' 
  },
  { 
    id: 'fr_parisian_sidewalk_cafe', 
    label: 'PARİS SOKAK KAFESİ', 
    promptValue: 'ATMOSPHERE TASK: A chic sidewalk cafe in Saint-Germain-des-Prés. Small round marble tables, rattan chairs, a cup of coffee and a croissant, soft morning light, stylish urban atmosphere. Chic, authentic, and lifestyle aesthetic.' 
  },
  { 
    id: 'fr_louvre_pyramid_night', 
    label: 'LOUVRE PİRAMİDİ (GECE)', 
    promptValue: 'ATMOSPHERE TASK: The glass pyramid of the Louvre at night. Glowing internal lights reflected in surrounding pools, historic stone palace architecture, cinematic and elite atmosphere. Majestic, structural, and cinematic aesthetic.' 
  },
  { 
    id: 'fr_montmartre_artistic_street', 
    label: 'MONTMARTRE SANAT SOKAĞI', 
    promptValue: 'ATMOSPHERE TASK: A charming cobblestone street in Montmartre near Sacré-Cœur. Artists painting in background, colorful ivy-covered buildings, soft afternoon sun. Artistic, poetic, and historic aesthetic.' 
  },
  { 
    id: 'fr_versailles_hall_mirrors', 
    label: 'VERSAILLES AYNALI SALON', 
    promptValue: 'ATMOSPHERE TASK: The grand Hall of Mirrors in the Palace of Versailles. Massive crystal chandeliers, gold leaf ornaments, reflection in tall arched mirrors, royal and prestigious atmosphere. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'fr_french_riviera_cannes', 
    label: 'FRANSIZ RİVİERASI (CANNES)', 
    promptValue: 'ATMOSPHERE TASK: A glamorous setting on the Croisette in Cannes. Turquoise Mediterranean sea, luxury yachts, white architecture, bright summer sun, elite coastal vibe. Glamorous, fresh, and upper-class aesthetic.' 
  },
  { 
    id: 'fr_provence_lavender_field', 
    label: 'PROVENCE LAVANTA TARLASI', 
    promptValue: 'ATMOSPHERE TASK: Endless rows of blooming purple lavender in Provence at sunrise. Soft misty violet light, organic textures, expansive horizon, peaceful nature. Dreamlike, organic, and poetic aesthetic.' 
  },
  { 
    id: 'fr_luxury_haussmann_apartment', 
    label: 'HAUSSMANN TARZI LÜKS DAİRE', 
    promptValue: 'ATMOSPHERE TASK: An elegant Parisian Haussmann-style living room. Tall ceilings with ornate moldings, herringbone floors, marble fireplace, large balcony overlooking the city. Sophisticated, chic, and expensive aesthetic.' 
  },
  { 
    id: 'fr_arc_de_triomphe_urban', 
    label: 'ARC DE TRIOMPHE (ŞEHİR)', 
    promptValue: 'ATMOSPHERE TASK: Standing at the top of the Champs-Élysées with the Arc de Triomphe in background. Fast-paced city traffic, grand boulevard architecture, bright energetic daylight. Powerful, iconic, and urban aesthetic.' 
  },
  { 
    id: 'fr_chateau_loire_valley', 
    label: 'LOIRE VADİSİ ŞATOSU', 
    promptValue: 'ATMOSPHERE TASK: A majestic Renaissance chateau in the Loire Valley. Reflecting in a calm river, formal French gardens, soft morning mist, fairytale atmosphere. Historic, grand, and romantic aesthetic.' 
  },
  { 
    id: 'fr_parisian_rooftop_view', 
    label: 'PARİS TERAS MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: A luxury rooftop terrace overlooking the zinc roofs of Paris. Eiffel Tower visible in the distance, sunset sky, modern furniture, high-fashion social vibe. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'fr_tuileries_garden_autumn', 
    label: 'TUILERIES BAHÇESİ (SONBAHAR)', 
    promptValue: 'ATMOSPHERE TASK: Walking through the Tuileries Garden in autumn. Golden orange leaves, classic green chairs, gravel paths, soft melancholy but beautiful light. Poetic, atmospheric, and nostalgic aesthetic.' 
  },
  { 
    id: 'fr_french_bakery_pastry', 
    label: 'DELUXE FRANSIZ PASTANESİ', 
    promptValue: 'ATMOSPHERE TASK: Inside a high-end Parisian pâtisserie (Boulangerie). Glass cases filled with colorful macarons and delicate cakes, warm soft lighting, sweet and elegant atmosphere. Detailed, soft, and sophisticated aesthetic.' 
  },
  { 
    id: 'fr_modern_la_defense_arch', 
    label: 'LA DEFENSE (MODERN MİMARİ)', 
    promptValue: 'ATMOSPHERE TASK: The futuristic business district of La Défense. Massive cube-shaped Grande Arche, glass skyscrapers, sleek urban lines, cool high-contrast lighting. Advanced, structural, and professional aesthetic.' 
  },
  { 
    id: 'fr_seine_river_cruise', 
    label: 'SEINE NEHRİ GEZİSİ', 
    promptValue: 'ATMOSPHERE TASK: On a boat cruising the Seine at twilight. City bridges illuminated, reflections on the water, Notre Dame in background, romantic night energy. Cinematic, atmospheric, and romantic aesthetic.' 
  },
  { 
    id: 'fr_vintage_cannes_film_vibe', 
    label: 'VİNTAGE CANNES FİLM STİLİ', 
    promptValue: 'ATMOSPHERE TASK: A 1960s inspired French New Wave scene on the coast. Analog film grain, vintage sunglasses, classic convertible car, sunny nostalgic holiday vibe. Retro, stylish, and cinematic aesthetic.' 
  },
  { 
    id: 'fr_luxembourg_palace_park', 
    label: 'LÜKSEMBURG SARAYI BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: The grand basin in front of the Luxembourg Palace. Sailboats on the water, flower beds, children playing, soft afternoon light. Peaceful, optimistic, and historic aesthetic.' 
  },
  { 
    id: 'fr_chamonix_mont_blanc', 
    label: 'CHAMONIX MONT BLANC (KAR)', 
    promptValue: 'ATMOSPHERE TASK: High in the French Alps at Chamonix. Snowy peaks of Mont Blanc, crisp cold air, blue sky, adventurous mountain atmosphere. Radiant, ambitious, and ethereal aesthetic.' 
  },
  { 
    id: 'fr_opera_garnier_opulence', 
    label: 'OPERA GARNIER İHTİŞAMI', 
    promptValue: 'ATMOSPHERE TASK: The grand staircase of the Palais Garnier. Marble statues, velvet curtains, ornate gold sculptures, high-fashion elite atmosphere. Opulent, prestigious, and high-society aesthetic.' 
  },
  { 
    id: 'fr_misty_bretagne_cliffs', 
    label: 'BRİTANYA SİSLİ KAYALIKLAR', 
    promptValue: 'ATMOSPHERE TASK: The rugged cliffs of Brittany overlooking the Atlantic. Crashing waves, misty atmospheric light, wild and lonely nature, deep blue tones. Poetic, intense, and organic aesthetic.' 
  }
],
'india': [
  { 
    id: 'in_taj_mahal_sunset', 
    label: 'TAC MAHAL (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A majestic view of the Taj Mahal at sunset. Iconic white marble reflecting golden light, symmetrical pools, soft hazy orange sky. Majestic, historic, and iconic aesthetic.' 
  },
  { 
    id: 'in_jaipur_pink_market', 
    label: 'JAIPUR PEMBE ŞEHİR ÇARŞISI', 
    promptValue: 'ATMOSPHERE TASK: A vibrant street market in Jaipur. Terracotta-pink buildings, stalls filled with colorful textiles and brassware, warm afternoon sun, bustling energy. Vibrant, authentic, and textural aesthetic.' 
  },
  { 
    id: 'in_varanasi_ganga_candle', 
    label: 'VARANASI (GANJ NEHRİ MUM)', 
    promptValue: 'ATMOSPHERE TASK: The mystical steps (ghats) of Varanasi at night. Thousands of small floating candles on the Ganges river, flickering orange glow, ancient stone architecture, spiritual and intense atmosphere. Spiritual, mysterious, and cinematic aesthetic.' 
  },
  { 
    id: 'in_kerala_backwaters_boat', 
    label: 'KERALA (TEKNE EVİ)', 
    promptValue: 'ATMOSPHERE TASK: A peaceful houseboat on the Kerala backwaters. Surrounded by lush palm trees, calm water reflections, soft humid tropical light, serene nature. Zen, organic, and dreamlike aesthetic.' 
  },
  { 
    id: 'in_goa_beach_sunset', 
    label: 'GOA PLAJI (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A relaxed beach setting in Goa during sunset. Shacks rhythmically lit by fairy lights, palm trees, warm Arabian sea breeze, vibrant beach vibe. Radiant, fresh, and lifestyle aesthetic.' 
  },
  { 
    id: 'in_rajasthan_desert_dunes', 
    label: 'RAJASTHAN ÇÖLÜ (DEVE)', 
    promptValue: 'ATMOSPHERE TASK: The Thar Desert in Rajasthan at golden hour. Massive sand dunes, silhouettes of camels in background, warm orange sky, vast and adventurous atmosphere. Earthy, expansive, and authentic aesthetic.' 
  },
  { 
    id: 'in_lotus_temple_modern', 
    label: 'LOTUS TAPINAĞI (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: The modern architecture of the Lotus Temple in New Delhi. Pristine white petal-shaped structure, blue pools, bright high-contrast daylight, clean architectural lines. Sleek, structural, and peaceful aesthetic.' 
  },
  { 
    id: 'in_mumbai_marine_drive', 
    label: 'MUMBAI (SAHİL ŞERİDİ GECE)', 
    promptValue: 'ATMOSPHERE TASK: The "Queen\'s Necklace" night view of Marine Drive in Mumbai. Glowing city lights along the curved coast, Art Deco buildings, dark sea, high-energy urban vibe. Cinematic, urban, and glamorous aesthetic.' 
  },
  { 
    id: 'in_hampi_ancient_ruins', 
    label: 'HAMPI ANTİK KALINTILAR', 
    promptValue: 'ATMOSPHERE TASK: The boulders and ancient temples of Hampi. Dramatic stone landscapes, carved granite columns, warm dry sunlight, sense of lost history. Historic, textural, and structural aesthetic.' 
  },
  { 
    id: 'in_darjeeling_tea_mist', 
    label: 'DARJEELING ÇAY BAHÇELERİ', 
    promptValue: 'ATMOSPHERE TASK: Lush rolling green tea plantations in Darjeeling. Morning mist covering the hills, soft diffused light, fresh mountain atmosphere. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'in_udaipur_lake_palace', 
    label: 'UDAIPUR (GÖL SARAYI)', 
    promptValue: 'ATMOSPHERE TASK: The floating Lake Palace in Udaipur. White marble walls reflecting in the calm Pichola Lake at dusk, soft romantic lighting, royal atmosphere. Opulent, romantic, and prestigious aesthetic.' 
  },
  { 
    id: 'in_bollywood_glam_set', 
    label: 'BOLLYWOOD FİLM SETİ', 
    promptValue: 'ATMOSPHERE TASK: A high-fashion Bollywood movie set. Dramatic colorful spotlights, vibrant costumes in background, high-energy dance atmosphere, cinematic high-contrast lighting. Vibrant, glamorous, and high-energy aesthetic.' 
  },
  { 
    id: 'in_spice_market_vibrant', 
    label: 'BAHARAT ÇARŞISI RENKLERİ', 
    promptValue: 'ATMOSPHERE TASK: Deep focus on a vibrant spice market. Hills of turmeric (yellow), chili (red), and cardamom (green), warm natural light, intense textural detail. Artistic, vibrant, and textural aesthetic.' 
  },
  { 
    id: 'in_ladakh_mountain_high', 
    label: 'LADAKH (HİMALAYA ZİRVESİ)', 
    promptValue: 'ATMOSPHERE TASK: The high-altitude desert of Ladakh. Jagged snow-capped Himalayan peaks, deep blue sky, prayer flags fluttering, crisp cold air vibe. Radiant, ambitious, and ethereal aesthetic.' 
  },
  { 
    id: 'in_golden_temple_bliss', 
    label: 'ALTIN TAPINAK (RUHANİ)', 
    promptValue: 'ATMOSPHERE TASK: The Harmandir Sahib (Golden Temple) in Amritsar at night. Glowing gold reflecting in the sacred pool, thousands of devotees, peaceful and spiritual energy. Majestic, spiritual, and radiant aesthetic.' 
  },
  { 
    id: 'in_chennai_shore_temple', 
    label: 'MAHABALIPURAM SAHİLİ', 
    promptValue: 'ATMOSPHERE TASK: The ancient Shore Temple at Mahabalipuram. Weathered stone architecture against the crashing waves of the Bay of Bengal, soft morning light. Historic, authentic, and atmospheric aesthetic.' 
  },
  { 
    id: 'in_royal_palace_interior', 
    label: 'SARAY ODASI (İHTİŞAMLI)', 
    promptValue: 'ATMOSPHERE TASK: An opulent interior of an Indian palace (Haveli). Intricate wall paintings, stained glass windows, velvet cushions, warm focused lighting, elite historical vibe. Opulent, detailed, and prestigious aesthetic.' 
  },
  { 
    id: 'in_monsoon_rain_nature', 
    label: 'MUSON YAĞMURLARI (DOĞA)', 
    promptValue: 'ATMOSPHERE TASK: A lush green garden during the Indian monsoon. Rain falling on large tropical leaves, humid misty daylight, deep vibrant greens, refreshing atmosphere. Poetic, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'in_holi_festival_dust', 
    label: 'HOLİ FESTİVALİ (RENK CÜMBÜŞÜ)', 
    promptValue: 'ATMOSPHERE TASK: A joyful Holi festival scene. Clouds of colorful powder (pink, blue, yellow) in the air, high-energy celebratory vibe, bright sunlight, artistic color explosion. Fun, expressive, and vibrant aesthetic.' 
  },
  { 
    id: 'in_bangalore_tech_park', 
    label: 'BANGALORE TEKNOLOJİ ÜSSÜ', 
    promptValue: 'ATMOSPHERE TASK: A modern tech campus in Bangalore. Glass skyscrapers, minimalist gardens, innovative and fast-paced energy, clean urban lines. Advanced, professional, and modern aesthetic.' 
  }
],
'uk': [
  { 
    id: 'uk_big_ben_dusk', 
    label: 'BIG BEN VE PARLAMENTO (ALACAKARANLIK)', 
    promptValue: 'ATMOSPHERE TASK: Place the subject in front of the Big Ben and Palace of Westminster at twilight. Iconic red double-decker bus passing by, glowing street lamps, moody blue and orange sky. Majestic, iconic, and atmospheric aesthetic.' 
  },
  { 
    id: 'uk_rainy_london_street', 
    label: 'YAĞMURLU LONDRA SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: A moody, wet London street with cobblestones reflecting neon signs. Subject holding a black umbrella, red telephone booth in the background, misty atmosphere. Cinematic, intense, and textural aesthetic.' 
  },
  { 
    id: 'uk_london_bridge_skyline', 
    label: 'LONDRA KÖPRÜSÜ MANZARASI', 
    promptValue: 'ATMOSPHERE TASK: A wide view of the London Bridge and The Shard. Modern skyscrapers mixing with historic architecture, soft morning fog over the Thames. Urban, prestigious, and ambitious aesthetic.' 
  },
  { 
    id: 'uk_english_countryside_cottage', 
    label: 'İNGİLİZ KIR EVİ (COTSWOLDS)', 
    promptValue: 'ATMOSPHERE TASK: A charming honey-colored stone cottage in the Cotswolds. Blooming roses, green rolling hills, soft golden hour sunlight, peaceful rural atmosphere. Poetic, charming, and authentic aesthetic.' 
  },
  { 
    id: 'uk_royal_buckingham_palace', 
    label: 'BUCKINGHAM SARAYI (KRALİYET)', 
    promptValue: 'ATMOSPHERE TASK: In front of Buckingham Palace gates. Guard with bearskin hat in background, ornate ironwork, prestigious and historic atmosphere, bright neutral light. Majestic, historic, and high-society aesthetic.' 
  },
  { 
    id: 'uk_classic_london_pub', 
    label: 'KLASİK İNGİLİZ PABI', 
    promptValue: 'ATMOSPHERE TASK: The exterior of a traditional London pub with dark wood and gold lettering. Flower baskets hanging, vintage atmosphere, warm evening street light. Authentic, social, and textural aesthetic.' 
  },
  { 
    id: 'uk_oxford_university_library', 
    label: 'OXFORD ÜNİVERSİTESİ (KÜTÜPHANE)', 
    promptValue: 'ATMOSPHERE TASK: Inside a grand historic library at Oxford. Gothic stone arches, floor-to-ceiling ancient books, soft light through stained glass, scholarly atmosphere. Intellectual, historic, and mysterious aesthetic.' 
  },
  { 
    id: 'uk_piccadilly_circus_neon', 
    label: 'PICCADILLY CIRCUS (NEON ŞEHİR)', 
    promptValue: 'ATMOSPHERE TASK: The high-energy neon billboards of Piccadilly Circus at night. Fast-paced urban motion, light trails from taxis, vibrant city colors. Urban, vibrant, and cinematic aesthetic.' 
  },
  { 
    id: 'uk_mysterious_stonehenge', 
    label: 'STONEHENGE (GİZEMLİ)', 
    promptValue: 'ATMOSPHERE TASK: The prehistoric site of Stonehenge at dawn. Standing stones silhouetted against a misty purple sky, ancient and powerful energy. Spiritual, historic, and atmospheric aesthetic.' 
  },
  { 
    id: 'uk_notting_hill_pastel', 
    label: 'NOTTING HILL (PASTEL SOKAK)', 
    promptValue: 'ATMOSPHERE TASK: A street in Notting Hill with vibrant pastel-colored houses. Fresh flowers, stylish urban vibe, bright optimistic sunlight. Trendy, colorful, and lifestyle aesthetic.' 
  },
  { 
    id: 'uk_london_eye_sunset', 
    label: 'LONDON EYE (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A scenic view of the London Eye at sunset. The Ferris wheel reflecting orange light, Thames river below, expansive city horizon. Radiant, peaceful, and iconic aesthetic.' 
  },
  { 
    id: 'uk_industrial_east_london', 
    label: 'ENDÜSTRİYEL DOĞU LONDRA', 
    promptValue: 'ATMOSPHERE TASK: A raw industrial setting in Shoreditch or Brick Lane. Exposed brick, street art, black metal fire escapes, urban grit. Edgy, urban, and textural aesthetic.' 
  },
  { 
    id: 'uk_luxury_mayfair_hotel', 
    label: 'MAYFAIR LÜKS OTEL GİRİŞİ', 
    promptValue: 'ATMOSPHERE TASK: An elite entrance of a Mayfair luxury hotel. Doorman in uniform, polished brass, expensive cars, high-society lifestyle energy. Opulent, prestigious, and glamorous aesthetic.' 
  },
  { 
    id: 'uk_misty_scottish_highlands', 
    label: 'İSKOÇYALILAR (SİSLİ DAĞLAR)', 
    promptValue: 'ATMOSPHERE TASK: The rugged and misty landscape of the Scottish Highlands. Deep green valleys, jagged peaks, a lonely castle ruin in distance, atmospheric grey sky. Poetic, intense, and organic aesthetic.' 
  },
  { 
    id: 'uk_vintage_london_underground', 
    label: 'VİNTAGE LONDRA METROSU', 
    promptValue: 'ATMOSPHERE TASK: A classic London Underground station platform. "Mind the Gap" signs, retro tiling, dim atmospheric lighting, sense of historic travel. Nostalgic, urban, and authentic aesthetic.' 
  },
  { 
    id: 'uk_royal_albert_hall_night', 
    label: 'ROYAL ALBERT HALL (GECE)', 
    promptValue: 'ATMOSPHERE TASK: The grand circular architecture of the Royal Albert Hall illuminated at night. Elite cultural atmosphere, high-fashion social vibes, warm majestic lighting. Majestic, social, and successful aesthetic.' 
  },
  { 
    id: 'uk_white_cliffs_dover', 
    label: 'DOVER BEYAZ KAYALIKLARI', 
    promptValue: 'ATMOSPHERE TASK: The iconic White Cliffs of Dover overlooking the English Channel. Bright white chalk, blue sea, expansive and windy atmosphere. Radiant, iconic, and fresh aesthetic.' 
  },
  { 
    id: 'uk_dark_academia_study_room', 
    label: 'DARK ACADEMIA ÇALIŞMA ODASI', 
    promptValue: 'ATMOSPHERE TASK: A moody, book-filled room with mahogany furniture. Candlelight, old maps, heavy fabrics, mysterious intellectual atmosphere. Intellectual, intense, and textural aesthetic.' 
  },
  { 
    id: 'uk_camden_market_eclectic', 
    label: 'CAMDEN MARKET (EKLEKTİK)', 
    promptValue: 'ATMOSPHERE TASK: The eclectic and artistic energy of Camden Market. Alternative fashion symbols, canals, vibrant and diverse crowd in background. Fun, artistic, and unique aesthetic.' 
  },
  { 
    id: 'uk_gentleman_tailor_row', 
    label: 'SAVILE ROW TERZİ ODASI', 
    promptValue: 'ATMOSPHERE TASK: A high-end gentleman’s tailor shop on Savile Row. Suit fabrics on display, measuring tapes, classic craft atmosphere, soft warm spotlights. Powerful, elite, and detailed aesthetic.' 
  }
],
'spain': [
  { 
    id: 'es_sagrada_familia_sunset', 
    label: 'SAGRADA FAMILIA (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A breathtaking view of Gaudi’s Sagrada Familia in Barcelona. Intricate stone carvings reflecting golden hour light, cranes in distance, warm orange sky. Majestic, architectural, and iconic aesthetic.' 
  },
  { 
    id: 'es_seville_plaza_spagna', 
    label: 'SEVİLYA (PLAZA DE ESPAÑA)', 
    promptValue: 'ATMOSPHERE TASK: The grand semi-circular Plaza de España. Ornate ceramic tiles, bridges, rowing boats on the canal, warm Mediterranean sun. Historic, vibrant, and architectural aesthetic.' 
  },
  { 
    id: 'es_ibiza_beach_club_glam', 
    label: 'IBIZA PLAJ KULÜBÜ (LÜKS)', 
    promptValue: 'ATMOSPHERE TASK: A glamorous beach club in Ibiza. White loungers, turquoise sea, bright high-energy sun, elite vacation vibe. Radiant, fresh, and upper-class aesthetic.' 
  },
  { 
    id: 'es_madrid_gran_via_urban', 
    label: 'MADRİD GRAN VIA (ŞEHİR)', 
    promptValue: 'ATMOSPHERE TASK: The busy Gran Via in Madrid. Iconic buildings with statues on rooftops, fast-paced urban traffic, bright Spanish sun. Urban, ambitious, and energetic aesthetic.' 
  },
  { 
    id: 'es_alhambra_moorish_palace', 
    label: 'ELHAMRA SARAYI (MAĞRİBİ)', 
    promptValue: 'ATMOSPHERE TASK: The intricate Moorish architecture of Alhambra in Granada. Arched doorways with detailed patterns, reflecting pools, peaceful courtyard atmosphere. Zen, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'es_andalusian_white_village', 
    label: 'ENDÜLÜS BEYAZ KÖYLERİ', 
    promptValue: 'ATMOSPHERE TASK: A narrow street in a white village like Ronda or Mijas. White-washed walls, colorful flower pots, cobblestones, bright midday heat. Authentic, fresh, and textural aesthetic.' 
  },
  { 
    id: 'es_flamenco_night_intense', 
    label: 'FLAMENKO GECESİ (YOĞUN)', 
    promptValue: 'ATMOSPHERE TASK: A dark intimate flamenco bar setting. Red shadows, dramatic focused spotlight, wooden floor textures, passionate and intense atmosphere. Cinematic, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'es_park_guell_gaudi_mosaic', 
    label: 'PARK GÜELL (MOZAİK)', 
    promptValue: 'ATMOSPHERE TASK: Gaudi’s colorful mosaic benches in Park Güell overlooking Barcelona. Vibrant colors, organic shapes, bright sunny day. Artistic, vibrant, and whimsical aesthetic.' 
  },
  { 
    id: 'es_mallorca_coastal_cove', 
    label: 'MALLORCA (DENİZ KOYU)', 
    promptValue: 'ATMOSPHERE TASK: A hidden rocky cove (Cala) in Mallorca. Crystal turquoise water, pine trees, bright summer sun, peaceful Mediterranean nature. Radiant, fresh, and peaceful aesthetic.' 
  },
  { 
    id: 'es_toledo_medieval_streets', 
    label: 'TOLEDO ORTAÇAĞ SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: The ancient medieval city of Toledo. Stone walls, narrow alleys, sense of deep history, soft afternoon golden light. Historic, authentic, and textural aesthetic.' 
  },
  { 
    id: 'es_valencia_science_city', 
    label: 'VALENCİA (BİLİM ŞEHRİ)', 
    promptValue: 'ATMOSPHERE TASK: The futuristic City of Arts and Sciences in Valencia. White skeletal architecture, light blue reflective pools, clean modern lines, bright sun. Advanced, structural, and modern aesthetic.' 
  },
  { 
    id: 'es_barcelona_gothic_quarter', 
    label: 'BARSELONA GOTİK MAHALLESİ', 
    promptValue: 'ATMOSPHERE TASK: Moody narrow streets of the Barrio Gótico. Tall dark stone walls, gargoyles, mysterious shadows, high-contrast light. Cinematic, intense, and historic aesthetic.' 
  },
  { 
    id: 'es_market_la_boqueria', 
    label: 'LA BOQUERIA (ÇARŞI)', 
    promptValue: 'ATMOSPHERE TASK: The vibrant colors of the La Boqueria fruit market in Barcelona. High-energy crowd, colorful fruit piles, natural overhead light through glass roof. Fun, vibrant, and social aesthetic.' 
  },
  { 
    id: 'es_luxury_marbella_marina', 
    label: 'MARBELLA (LÜKS MARİNA)', 
    promptValue: 'ATMOSPHERE TASK: Puerto Banús marina in Marbella. Luxury yachts, high-end cars, designer boutique storefronts, elite social atmosphere. Opulent, glamorous, and expensive aesthetic.' 
  },
  { 
    id: 'es_rioja_vineyard_sunset', 
    label: 'RIOJA BAĞLARI (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: Rolling green vineyards in La Rioja at sunset. Golden hour light hitting the grapes, mountains in background, warm earthy atmosphere. Organic, peaceful, and radiant aesthetic.' 
  },
  { 
    id: 'es_san_sebastian_beach', 
    label: 'SAN SEBASTIÁN (SAHİL)', 
    promptValue: 'ATMOSPHERE TASK: The La Concha beach in San Sebastián. Elegant promenade railings, blue sea, soft northern light, stylish and refined atmosphere. Chic, fresh, and polished aesthetic.' 
  },
  { 
    id: 'es_country_finca_rustic', 
    label: 'RUSTİK İSPANYOL ÇİFTLİĞİ', 
    promptValue: 'ATMOSPHERE TASK: A traditional Spanish finca (farmhouse). Stone walls, terracotta floors, olive trees, warm rustic vibe, authentic rural life. Earthy, authentic, and textural aesthetic.' 
  },
  { 
    id: 'es_madrid_rooftop_sunset', 
    label: 'MADRİD TERAS (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: A stylish rooftop overlooking Madrid’s skyline at night. City lights, red sunset sky, modern furniture, high-fashion energy. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'es_don_quixote_windmills', 
    label: 'DON KİŞOT (YEL DEĞİRMENLERİ)', 
    promptValue: 'ATMOSPHERE TASK: The traditional windmills of La Mancha. White towers, wooden blades, vast arid landscape, bright high-contrast sun. Historic, iconic, and structural aesthetic.' 
  },
  { 
    id: 'es_guggenheim_bilbao_titanium', 
    label: 'GUGGENHEIM BİLBAO (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: The titanium curves of the Guggenheim Museum. Reflective surfaces, modern art focus, sharp architectural lines, soft diffused light. Advanced, structural, and artistic aesthetic.' 
  }
],
'italy': [
  { 
    id: 'it_venice_grand_canal', 
    label: 'VENEDİK BÜYÜK KANAL', 
    promptValue: 'ATMOSPHERE TASK: A romantic gondola ride in Venice. Grand canals, historic brick buildings, reflections on green water, soft morning light. Romantic, poetic, and historic aesthetic.' 
  },
  { 
    id: 'it_rome_colosseum_dusk', 
    label: 'ROMA KOLEZYUM (ALACAKARANLIK)', 
    promptValue: 'ATMOSPHERE TASK: The majestic Colosseum at dusk. Stone ruins illuminated by warm lights, deep blue and orange sky, historic urban atmosphere. Majestic, iconic, and atmospheric aesthetic.' 
  },
  { 
    id: 'it_tuscany_rolling_hills', 
    label: 'TOSKANA (SERVİ AĞAÇLARI)', 
    promptValue: 'ATMOSPHERE TASK: Rolling green hills of Tuscany at golden hour. Cypress trees lining a dirt path, misty background, warm orange sunlight, absolute peace. Poetic, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'it_milan_cathedral_duomo', 
    label: 'MİLANO (DUOMO MEYDANI)', 
    promptValue: 'ATMOSPHERE TASK: The intricate white marble facade of the Duomo in Milan. Grand plaza, pigeons in background, high-fashion social energy, bright neutral light. Majestic, structural, and high-fashion aesthetic.' 
  },
  { 
    id: 'it_amalfi_coast_cliffside', 
    label: 'AMALFI KIYISI (RENKLİ)', 
    promptValue: 'ATMOSPHERE TASK: Colorful houses perched on the cliffs of Positano. Turquoise sea below, blooming bougainvillea, bright summer sun, Italian vacation vibe. Radiant, fresh, and glamorous aesthetic.' 
  },
  { 
    id: 'it_florence_uay_art_gallery', 
    label: 'FLORANSA (SANAT GALERİSİ)', 
    promptValue: 'ATMOSPHERE TASK: Inside a grand Renaissance art gallery in Florence. Marble statues, classical paintings, ornate ceilings, scholarly and elite atmosphere. Intellectual, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'it_lake_como_luxury_villa', 
    label: 'COMO GÖLÜ (LÜKS VİLLA)', 
    promptValue: 'ATMOSPHERE TASK: A luxury villa garden overlooking Lake Como. Italian gardens, misty mountains in background, elite and serene atmosphere, soft diffused light. Opulent, romantic, and peaceful aesthetic.' 
  },
  { 
    id: 'it_milan_galleria_glam', 
    label: 'MİLANO GALLERIA (MODA)', 
    promptValue: 'ATMOSPHERE TASK: Inside the Galleria Vittorio Emanuele II. Glass dome ceiling, luxury boutique storefronts, polished marble floor, high-fashion social energy. Opulent, glamorous, and high-fashion aesthetic.' 
  },
  { 
    id: 'it_cinque_terre_port', 
    label: 'CINQUE TERRE (LİMAN)', 
    promptValue: 'ATMOSPHERE TASK: A small colorful fishing harbor in Riomaggiore. Small boats, vibrant houses, sunset light reflecting on the sea. Fun, vibrant, and authentic aesthetic.' 
  },
  { 
    id: 'it_sicilian_lemon_garden', 
    label: 'SİCİLYA (LİMON BAHÇESİ)', 
    promptValue: 'ATMOSPHERE TASK: A lush Sicilian garden filled with lemon trees. Yellow fruits, terracotta pots, bright Mediterranean sun, fresh and citrus vibe. Organic, fresh, and vibrant aesthetic.' 
  },
  { 
    id: 'it_pisa_leaning_tower', 
    label: 'PİSA KULESİ (GÜNDÜZ)', 
    promptValue: 'ATMOSPHERE TASK: In front of the Leaning Tower of Pisa. White stone architecture, wide green plaza, bright neutral sunlight, iconic historic atmosphere. Historic, iconic, and majestic aesthetic.' 
  },
  { 
    id: 'it_rustic_italian_trattoria', 
    label: 'RUSTİK İTALYAN LOKANTASI', 
    promptValue: 'ATMOSPHERE TASK: A cozy outdoor table at a rustic Italian trattoria. Checkered tablecloth, wine glass, warm string lights, charming cobblestone alley. Authentic, social, and warm aesthetic.' 
  },
  { 
    id: 'it_pompeii_ancient_ruins', 
    label: 'POMPEII (ANTİK ŞEHİR)', 
    promptValue: 'ATMOSPHERE TASK: The ancient ruins of Pompeii with Mount Vesuvius in background. Stone columns, dry dusty sunlight, sense of frozen time. Historic, textural, and mysterious aesthetic.' 
  },
  { 
    id: 'it_dolomites_mountain_lake', 
    label: 'DOLOMİTLER (DAĞ GÖLÜ)', 
    promptValue: 'ATMOSPHERE TASK: A reflection of jagged Dolomite peaks in a crystal clear mountain lake (Lago di Braies). Pine trees, blue water, crisp fresh air vibe. Radiant, ambitious, and ethereal aesthetic.' 
  },
  { 
    id: 'it_naples_street_vibe', 
    label: 'NAPOLİ SOKAKLARI (BOHEM)', 
    promptValue: 'ATMOSPHERE TASK: Busy narrow streets of Naples. Hanging laundry between buildings, scooters passing, vibrant local energy, high-contrast sunlight. Authentic, textural, and energetic aesthetic.' 
  },
  { 
    id: 'it_luxury_yacht_capri', 
    label: 'CAPRI (LÜKS YAT TURU)', 
    promptValue: 'ATMOSPHERE TASK: On a yacht near the Faraglioni rocks in Capri. Deep blue sea, bright sun, polished wood and white leather, elite vacation vibe. Successful, fresh, and glamorous aesthetic.' 
  },
  { 
    id: 'it_vatican_museum_hall', 
    label: 'VATİKAN MÜZESİ (İHTİŞAM)', 
    promptValue: 'ATMOSPHERE TASK: Inside the grand hall of the Vatican Museum. Map gallery, gold ornate ceiling, intense cultural and historic energy. Majestic, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'it_bologna_portico_shadows', 
    label: 'BOLOGNA (REVAKLI YOLLAR)', 
    promptValue: 'ATMOSPHERE TASK: Walking through the endless stone porticos of Bologna. Arches creates repetitive shadows, warm terracotta colors, intellectual atmosphere. Historic, structural, and atmospheric aesthetic.' 
  },
  { 
    id: 'it_sardinia_emerald_beach', 
    label: 'SARDİNYA (ZÜMRÜT SAHİL)', 
    promptValue: 'ATMOSPHERE TASK: Costa Smeralda beach in Sardinia. Emerald green water, white rocks, bright summer sun, luxury beach lifestyle. Radiant, fresh, and upper-class aesthetic.' 
  },
  { 
    id: 'it_abstract_marble_patterns', 
    label: 'SOYUT MERMER DOKUSU', 
    promptValue: 'ATMOSPHERE TASK: A stylized minimalist space focusing on raw Italian marble. Veins of grey on white, architectural lighting, sculptural feel. Artistic, structural, and modern aesthetic.' 
  }
],
'japan': [
  { 
    id: 'jp_tokyo_shibuya_night', 
    label: 'SHIBUYA CROSSING (GECE)', 
    promptValue: 'ATMOSPHERE TASK: The high-energy Shibuya Crossing at night. Massive neon screens, rushing crowd, light trails, vibrant city colors, modern urban vibe. Urban, vibrant, and cinematic aesthetic.' 
  },
  { 
    id: 'jp_kyoto_cherry_blossoms', 
    label: 'KYOTO (SAKURA BAHÇESİ)', 
    promptValue: 'ATMOSPHERE TASK: A peaceful traditional garden in Kyoto during Sakura season. Pink cherry blossom petals falling, wooden bridges, soft morning light, serene atmosphere. Poetic, soft, and zen aesthetic.' 
  },
  { 
    id: 'jp_fuji_lake_reflection', 
    label: 'FUJİ DAĞI (GÖL MANZARASI)', 
    promptValue: 'ATMOSPHERE TASK: Mount Fuji reflecting in Lake Kawaguchi. Snow-capped peak, calm water, soft dawn sky colors, expansive and meditative atmosphere. Majestic, serene, and iconic aesthetic.' 
  },
  { 
    id: 'jp_cyberpunk_akihabara', 
    label: 'AKIHABARA (SİBERPUNK LOKASYON)', 
    promptValue: 'ATMOSPHERE TASK: A futuristic neon-drenched street in Akihabara. Anime banners, LED signs, high-tech shops, synthetic and high-energy energy. Advanced, synthetic, and vibrant aesthetic.' 
  },
  { 
    id: 'jp_traditional_tea_house', 
    label: 'GELENEKSEL ÇAY EVİ (ZEN)', 
    promptValue: 'ATMOSPHERE TASK: Inside a minimalist Japanese tea house. Tatami mats, shoji paper screens, a single bonsai, soft diffused light, quiet and meditative atmosphere. Zen, pure, and meditative aesthetic.' 
  },
  { 
    id: 'jp_osaka_dontonbori_glow', 
    label: 'OSAKA DONTONBORI (IŞILTILI)', 
    promptValue: 'ATMOSPHERE TASK: The vibrant canal area of Dotonbori at night. Giant glowing signs (Glico Man), street food stalls, reflections on water, high-energy social vibe. Fun, vibrant, and urban aesthetic.' 
  },
  { 
    id: 'jp_fushimi_inari_shrine', 
    label: 'FUSHIMI INARI (TORII KAPILARI)', 
    promptValue: 'ATMOSPHERE TASK: Walking through the thousands of orange Torii gates at Fushimi Inari. Repetitive patterns of orange and black, soft filtered light through the forest, spiritual path. Majestic, spiritual, and structural aesthetic.' 
  },
  { 
    id: 'jp_modern_ginza_luxury', 
    label: 'GİNZA (LÜKS ALIŞVERİŞ)', 
    promptValue: 'ATMOSPHERE TASK: A high-end street in Ginza. Luxury flagship stores with modern glass facades, polished city surfaces, elite high-fashion atmosphere. Opulent, glamorous, and expensive aesthetic.' 
  },
  { 
    id: 'jp_bamboo_forest_arashiyama', 
    label: 'ARASHIYAMA BAMBU ORMANI', 
    promptValue: 'ATMOSPHERE TASK: A deep green bamboo forest in Arashiyama. Tall stalks swaying, soft wind sound vibe, filtered green light, ethereal atmosphere. Ethereal, organic, and refreshing aesthetic.' 
  },
  { 
    id: 'jp_shinjuku_alley_noir', 
    label: 'SHINJUKU ARA SOKAKLAR (NOIR)', 
    promptValue: 'ATMOSPHERE TASK: A narrow Omoide Yokocho (Piss Alley) at night. Gritty urban textures, smoke from yakitori grills, moody neon reflections, cinematic urban atmosphere. Cinematic, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'jp_hokkaido_snow_landscape', 
    label: 'HOKKAIDO (BEYAZ KIŞ)', 
    promptValue: 'ATMOSPHERE TASK: A minimalist snowy field in Hokkaido. Single tree silhouette, white horizon, soft blue winter light, feeling of absolute silence. Zen, pure, and atmospheric aesthetic.' 
  },
  { 
    id: 'jp_nara_deer_park', 
    label: 'NARA GEYİK PARKI', 
    promptValue: 'ATMOSPHERE TASK: A peaceful park in Nara with sacred deer in background. Ancient wooden temples, soft afternoon sun, natural and historic atmosphere. Organic, peaceful, and historic aesthetic.' 
  },
  { 
    id: 'jp_futuristic_sky_tree_view', 
    label: 'SKY TREE (BULUTLARIN ÜSTÜNDE)', 
    promptValue: 'ATMOSPHERE TASK: Overlooking Tokyo from the Sky Tree observatory. Sea of buildings, sunset sky, modern architecture, successful urban atmosphere. Advanced, ambitious, and successful aesthetic.' 
  },
  { 
    id: 'jp_shirakawa_village_winter', 
    label: 'SHIRAKAWA-GO (KIŞ KÖYÜ)', 
    promptValue: 'ATMOSPHERE TASK: Historic thatched-roof houses in Shirakawa-go covered in deep snow. Warm yellow lights from windows, magical winter evening, authentic folklore vibe. Poetic, nostalgic, and authentic aesthetic.' 
  },
  { 
    id: 'jp_modern_art_naoshima', 
    label: 'NAOSHİMA (MODER SANAT ADASI)', 
    promptValue: 'ATMOSPHERE TASK: A minimalist seaside art installation on Naoshima. Clean geometric concrete architecture, blue ocean, modern and artistic energy. Artistic, structural, and modern aesthetic.' 
  },
  { 
    id: 'jp_bullet_train_motion', 
    label: 'SHINKANSEN (HIZLI TREN)', 
    promptValue: 'ATMOSPHERE TASK: Inside a sleek Shinkansen train. Motion blur of the countryside through large windows, modern minimalist interior, sense of advanced travel. Advanced, fresh, and professional aesthetic.' 
  },
  { 
    id: 'jp_neon_karaoke_vibe', 
    label: 'KARAOKE ODASI (POP)', 
    promptValue: 'ATMOSPHERE TASK: A colorful neon-lit karaoke room. Pink and blue lights, high-energy pop culture vibe, fun and social energy. Fun, vibrant, and youthful aesthetic.' 
  },
  { 
    id: 'jp_zen_rock_garden', 
    label: 'ZEN TAŞ BAHÇESİ', 
    promptValue: 'ATMOSPHERE TASK: A minimalist Zen rock garden. Raked white sand patterns, single large stones, soft diffused light, sense of total focus and peace. Zen, pure, and structural aesthetic.' 
  },
  { 
    id: 'jp_anime_highschool_rooftop', 
    label: 'ANİME TARZI OKUL TERASI', 
    promptValue: 'ATMOSPHERE TASK: A school rooftop illustrated in an anime-aesthetic. Large blue summer sky with fluffy white clouds, wire fence, soft nostalgic lighting. Dreamlike, nostalgic, and creative aesthetic.' 
  },
  { 
    id: 'jp_abstract_shibori_indigo', 
    label: 'SOYUT İNDİGO DOKUSU', 
    promptValue: 'ATMOSPHERE TASK: A stylized space focusing on traditional indigo-dyed fabrics. Deep blue patterns, textural focus, soft cultural lighting. Artistic, organic, and textural aesthetic.' 
  }
],
'russia': [
  { 
    id: 'ru_red_square_sunset', 
    label: 'KIZIL MEYDAN (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: An iconic view of St. Basil’s Cathedral at sunset. Colorful onion domes reflecting golden light, wide cobblestone plaza, cool evening air. Majestic, historic, and iconic aesthetic.' 
  },
  { 
    id: 'ru_snowy_moscow_street', 
    label: 'KARLI MOSKOVA SOKAKLARI', 
    promptValue: 'ATMOSPHERE TASK: A moody winter evening in Moscow. Heavy snowfall, yellow street lamps, historic architecture, cold blue tones with warm glows. Cinematic, intense, and atmospheric aesthetic.' 
  },
  { 
    id: 'ru_hermitage_palace_interior', 
    label: 'ERMİTAJ SARAYI (İÇ MEKAN)', 
    promptValue: 'ATMOSPHERE TASK: Inside the grand halls of the Hermitage Museum in St. Petersburg. Gold ornate ceilings, marble columns, classical masterpieces, prestigious and royal atmosphere. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'ru_moscow_city_modern', 
    label: 'MOSKOVA CİTY (MODERN)', 
    promptValue: 'ATMOSPHERE TASK: The glass skyscrapers of Moscow City business district. Modern architecture, reflective surfaces, blue tones, ambitious urban energy. Advanced, structural, and professional aesthetic.' 
  },
  { 
    id: 'ru_bolshoi_theatre_elegance', 
    label: 'BOLŞOY TİYATROSU (LÜKS)', 
    promptValue: 'ATMOSPHERE TASK: The grand facade or interior of the Bolshoi Theatre. Red velvet, gold carvings, high-fashion social energy, prestigious cultural atmosphere. Majestic, grand, and high-society aesthetic.' 
  },
  { 
    id: 'ru_metro_palace_underground', 
    label: 'MOSKOVA METRO (SARAY GİBİ)', 
    promptValue: 'ATMOSPHERE TASK: A historic Moscow Metro station like Komsomolskaya. Ornate chandeliers, mosaics, grand arches, underground palace vibe. Majestic, historic, and textural aesthetic.' 
  },
  { 
    id: 'ru_lake_baikal_ice', 
    label: 'BAYKAL GÖLÜ (BUZ TABAKASI)', 
    promptValue: 'ATMOSPHERE TASK: Standing on the deep blue frozen ice of Lake Baikal. Cracks in the ice creating geometric patterns, clear winter sky, expansive and mysterious nature. Ethereal, mysterious, and organic aesthetic.' 
  },
  { 
    id: 'ru_transsiberian_train_window', 
    label: 'TRANSSİBİRYA EXPRESS (YOLCULUK)', 
    promptValue: 'ATMOSPHERE TASK: Inside a cozy traditional train cabin. Birch forests passing by in background, tea in a metal holder, soft nostalgic lighting. Nostalgic, authentic, and textural aesthetic.' 
  },
  { 
    id: 'ru_luxury_gum_mall', 
    label: 'GUM ALIŞVERİŞ MERKEZİ', 
    promptValue: 'ATMOSPHERE TASK: Inside the historic GUM mall at Red Square. Glass roof, ornate bridges, luxury boutiques, bright and sophisticated atmosphere. Opulent, glamorous, and expensive aesthetic.' 
  },
  { 
    id: 'ru_st_petersburg_canals', 
    label: 'SAINT PETERSBURG KANALLARI', 
    promptValue: 'ATMOSPHERE TASK: The romantic bridges and canals of St. Petersburg at white nights. Soft twilight that never ends, historic European-style architecture, calm water. Poetic, historic, and atmospheric aesthetic.' 
  },
  { 
    id: 'ru_orthodox_church_gold', 
    label: 'ORTODOKS KİLİSESİ (ALTIN)', 
    promptValue: 'ATMOSPHERE TASK: Inside an Orthodox church with thousands of candles. Gold icons, flickering light, intense spiritual atmosphere, deep shadows. Spiritual, intense, and mysterious aesthetic.' 
  },
  { 
    id: 'ru_birch_forest_autumn', 
    label: 'HUŞ AĞACI ORMANI (SONBAHAR)', 
    promptValue: 'ATMOSPHERE TASK: A vast forest of white birch trees in autumn. Golden leaves, soft diffused light, organic and peaceful atmosphere. Poetic, organic, and peaceful aesthetic.' 
  },
  { 
    id: 'ru_ballet_studio_classic', 
    label: 'BALE STÜDYOSU (KLASİK)', 
    promptValue: 'ATMOSPHERE TASK: A traditional Russian ballet studio. Tall mirrors, wooden barres, soft morning light, disciplined and elegant atmosphere. Chic, poetic, and refined aesthetic.' 
  },
  { 
    id: 'ru_soviet_modernism_arch', 
    label: 'SOVYET MODERNİZMİ (YAPISAL)', 
    promptValue: 'ATMOSPHERE TASK: A heroic concrete structure of Soviet Modernism. Brutalist details, vast scale, high-contrast shadows, architectural focus. Sleek, structural, and modern aesthetic.' 
  },
  { 
    id: 'ru_luxury_rooftop_ritz', 
    label: 'MOSKOVA TERAS (LÜKS)', 
    promptValue: 'ATMOSPHERE TASK: A luxury rooftop lounge overlooking the Kremlin. City lights, modern furniture, elite social energy, successful atmosphere. Glamorous, urban, and successful aesthetic.' 
  },
  { 
    id: 'ru_winter_palace_square', 
    label: 'KIŞLIK SARAY MEYDANI', 
    promptValue: 'ATMOSPHERE TASK: The massive Palace Square in St. Petersburg. Alexander Column, green and white palace architecture, sunset sky. Majestic, historic, and grand aesthetic.' 
  },
  { 
    id: 'ru_creative_art_factory', 
    label: 'YARATICI SANAT FABRİKASI', 
    promptValue: 'ATMOSPHERE TASK: A modern art hub in a renovated factory like Winzavod. Exposed pipes, colorful murals, artistic and edgy atmosphere. Artistic, urban, and unique aesthetic.' 
  },
  { 
    id: 'ru_golden_ring_village', 
    label: 'ALTIN HALKA KÖYÜ', 
    promptValue: 'ATMOSPHERE TASK: A traditional wooden village in the Golden Ring. Carved window frames (nalichniki), rustic garden, authentic folklore vibe. Authentic, textural, and nostalgic aesthetic.' 
  },
  { 
    id: 'ru_cyber_moscow_neon', 
    label: 'SİBER MOSKOVA (GELECEK)', 
    promptValue: 'ATMOSPHERE TASK: A futuristic reimagining of Moscow. Neon Cyrillic signs, floating tech, high-contrast dark urban setting. Advanced, synthetic, and cinematic aesthetic.' 
  },
  { 
    id: 'ru_abstract_constructivism', 
    label: 'SOYUT KONSTRÜKTİVİZM', 
    promptValue: 'ATMOSPHERE TASK: A stylized space inspired by Russian Constructivism. Bold red, black, and white geometry, sharp lines, propaganda-art lighting. Artistic, structural, and modern aesthetic.' 
  }
],
'turkey': [
  { 
    id: 'tr_bosphorus_bridge_sunrise', 
    label: 'BOĞAZ KÖPRÜSÜ (GÜNDOĞUMU)', 
    promptValue: 'ATMOSPHERE TASK: A majestic view of the Bosphorus Bridge at dawn. Mist over the water, seagulls flying, first gold rays of sun, iconic bridge silhouette. Radiant, iconic, and atmospheric aesthetic.' 
  },
  { 
    id: 'tr_cappadocia_balloons', 
    label: 'KAPADOKYA (SICAK HAVA BALONLARI)', 
    promptValue: 'ATMOSPHERE TASK: Fairy chimneys of Cappadocia at sunrise. Hundreds of colorful hot air balloons in the sky, soft orange light, magical and expansive volcanic landscape. Dreamlike, expansive, and poetic aesthetic.' 
  },
  { 
    id: 'tr_blue_mosque_symmetry', 
    label: 'SULTANAHMET (SİMETRİ)', 
    promptValue: 'ATMOSPHERE TASK: The grand architecture of the Blue Mosque. Domed ceilings, intricate blue Iznik tiles, majestic and symmetrical composition, soft spiritual lighting. Majestic, spiritual, and structural aesthetic.' 
  },
  { 
    id: 'tr_galata_tower_sunset', 
    label: 'GALATA KULESİ (GÜNBATIMI)', 
    promptValue: 'ATMOSPHERE TASK: Looking towards the Galata Tower at sunset. Old city zinc roofs, flock of seagulls, warm orange sky, nostalgic and romantic urban vibe. Poetic, historic, and iconic aesthetic.' 
  },
  { 
    id: 'tr_grand_bazaar_vibrant', 
    label: 'KAPALIÇARŞI (RENKLİ GİZEM)', 
    promptValue: 'ATMOSPHERE TASK: Inside the Grand Bazaar. Thousands of glowing mosaic lamps, jewelry displays, historic stone arches, warm glowing light, bustling cultural energy. Opulent, vibrant, and textural aesthetic.' 
  },
  { 
    id: 'tr_aegean_white_house', 
    label: 'EGE STİLİ BEYAZ EVLER', 
    promptValue: 'ATMOSPHERE TASK: A white-washed stone house in Bodrum or Alaçatı. Purple bougainvillea flowers, blue wooden shutters, bright turquoise sea in background. Fresh, breezy, and coastal aesthetic.' 
  },
  { 
    id: 'tr_modern_istanbul_skyline', 
    label: 'MODERN İSTANBUL (LEVENT)', 
    promptValue: 'ATMOSPHERE TASK: The glass skyscrapers of Levent business district. Modern city architecture, fast-paced urban vibe, bright neutral sunlight. Urban, ambitious, and professional aesthetic.' 
  },
  { 
    id: 'tr_ottoman_palace_interior', 
    label: 'OSMANLI SARAYI (CIRAGAN)', 
    promptValue: 'ATMOSPHERE TASK: Inside a grand Ottoman palace hall. Gold leaf ceilings, crystal chandeliers, large windows overlooking the Bosphorus, elite and prestigious atmosphere. Opulent, historic, and prestigious aesthetic.' 
  },
  { 
    id: 'tr_pamukkale_travertines', 
    label: 'PAMUKKALE (TRAVERTENLER)', 
    promptValue: 'ATMOSPHERE TASK: Pristine white thermal pools of Pamukkale. Turquoise water, mirror-like reflections, soft sunset light, ethereal and pure nature. Ethereal, unique, and radiant aesthetic.' 
  },
  { 
    id: 'tr_maiden_tower_sea', 
    label: 'KIZ KULESİ (DENİZİN ORTASI)', 
    promptValue: 'ATMOSPHERE TASK: An isolated view of the Maiden’s Tower at twilight. Sea waves hitting the rocks, city lights in background, romantic and lonely atmosphere. Poetic, atmospheric, and iconic aesthetic.' 
  },
  { 
    id: 'tr_alacati_cobblestone_chic', 
    label: 'ALAÇATI SOKAKLARI (ŞIK)', 
    promptValue: 'ATMOSPHERE TASK: A charming cobblestone street in Alaçatı. Stone houses with bay windows, stylish outdoor cafes, soft afternoon sun, chic holiday atmosphere. Trendy, charming, and polished aesthetic.' 
  },
  { 
    id: 'tr_historic_hamam_mist', 
    label: 'TARİHİ HAMAM (SİSLİ IŞIK)', 
    promptValue: 'ATMOSPHERE TASK: Inside a historic Turkish bath. Marble interiors, dome with light holes (filgözü), misty humid air, beams of sunlight through steam. Zen, textural, and mysterious aesthetic.' 
  },
  { 
    id: 'tr_mt_nemrut_statues', 
    label: 'NEMRUT DAĞI (ANTİK)', 
    promptValue: 'ATMOSPHERE TASK: Gigantic stone heads of Nemrut at sunrise. Massive statues against a blue mountain horizon, sense of ancient empire, dry golden light. Historic, textural, and majestic aesthetic.' 
  },
  { 
    id: 'tr_black_sea_plateau', 
    label: 'KARADENİZ YAYLALARI', 
    promptValue: 'ATMOSPHERE TASK: Lush green mountains of Rize or Artvin. Rolling clouds below the peak, wooden highland houses, fresh humid oxygen-rich atmosphere. Organic, fresh, and expansive aesthetic.' 
  },
  { 
    id: 'tr_turkish_tea_ferry', 
    label: 'VAPUR VE ÇAY (YAŞAM)', 
    promptValue: 'ATMOSPHERE TASK: On a Bosphorus ferry deck. Subject holding a tulip-shaped tea glass, seagulls chasing the boat, wind in hair, authentic Istanbul lifestyle. Authentic, fresh, and social aesthetic.' 
  },
  { 
    id: 'tr_modern_zorlu_center', 
    label: 'ZORLU CENTER (LÜKS MODA)', 
    promptValue: 'ATMOSPHERE TASK: The modern architecture of Zorlu Center. Luxury boutique storefronts, reflective pools, high-fashion social energy. Opulent, glamorous, and urban aesthetic.' 
  },
  { 
    id: 'tr_antalya_old_town', 
    label: 'ANTALYA KALEİÇİ', 
    promptValue: 'ATMOSPHERE TASK: The historic harbor of Antalya. Hadrian’s Gate, old stone walls, turquoise Mediterranean sea, bright summer sun. Historic, fresh, and coastal aesthetic.' 
  },
  { 
    id: 'tr_luxury_yacht_gocek', 
    label: 'GÖCEK (LÜKS TEKNE TURU)', 
    promptValue: 'ATMOSPHERE TASK: On a high-end yacht in the bays of Göçek. Pine trees meeting the sea, crystal clear water, elite vacation atmosphere. Successful, fresh, and glamorous aesthetic.' 
  },
  { 
    id: 'tr_traditional_rug_atelier', 
    label: 'EL DOKUMA HALI ATÖLYESİ', 
    promptValue: 'ATMOSPHERE TASK: A workshop filled with thousands of traditional Turkish rugs. Rich patterns (kilims), organic dye colors, soft overhead light, intense textural focus. Artistic, textural, and authentic aesthetic.' 
  },
  { 
    id: 'tr_abtract_iznik_tile', 
    label: 'SOYUT İZNİK ÇİNİSİ', 
    promptValue: 'ATMOSPHERE TASK: A stylized minimalist space focusing on Iznik tile patterns. Blue and red floral geometry, architectural lighting, artistic cultural focus. Artistic, structural, and cultural aesthetic.' 
  }
],
    };

export const MODEL_DETAILS: OptionItem[] = [
  { id: 'girl', label: 'KIZ (KADIN)', promptValue: 'Female model.' },
  { id: 'man', label: 'ERKEK', promptValue: 'Male model.' },
{ id: 'no_model', 
   label: 'ÜRÜN ODAKLI', 
   promptValue: 'High-End Product Photography featuring a real human model. CRITICAL: The model\'s face must be completely out of frame, cropped, or turned away—strictly no facial features visible. Focus intensely on the product worn or held by the model. Professional studio lighting, realistic skin texture context without distracting from the item. Cinematic, anonymous, and elegant presentation allowing the product to stand out.' 
 },
 { 
  id: 'ghost_mannequin', 
  label: 'HAYALET MANKEN', 
  promptValue: 'Professional Ghost Mannequin photography. The clothing is floating in mid-air, retaining a perfect 3D volumetric body shape, but the mannequin is 100% invisible. CRITICAL: Do NOT show the plastic mannequin, stand, or base. Hollow neck effect showing the inner back label. No hands, no head, no skin. Pure apparel product shot.' 
},

{ 
  id: 'lingerie_model', 
  label: 'İÇ ÇAMAŞIRI MANKENİ', 
  promptValue: 'Professional fashion model posing for a premium commercial catalog. High-fashion presentation of elegant silk and lace loungewear. CRITICAL: Cinematic studio lighting, sophisticated and modest poses, strictly non-explicit content, purely commercial apparel photography. Focus on fabric texture and high-end aesthetic.' 
},

 ];

const COMMON_ETHNICITY_VARIANTS = [
    { id: 'asian', label: 'ASYALI', promptValue: 'Stunning Asian female model, flawless porcelain skin, elegant almond-shaped eyes, symmetric facial features, K-pop idol beauty aesthetic, photorealistic.' },
    { id: 'black', label: 'SİYAHİ', promptValue: 'Beautiful Black female model, glowing deep melanin complexion, high cheekbones, striking facial structure, elegant and attractive appearance, supermodel vibe.' },
    { id: 'caucasian', label: 'BEYAZ (AVRUPA)', promptValue: 'Attractive Caucasian female model, classic Hollywood beauty, blue or green eyes, symmetric face, charming and charismatic look, natural skin texture.' },
    { id: 'latino', label: 'LATİN', promptValue: 'Gorgeous Latina female model, sun-kissed tan skin, expressive eyes, voluminous hair, charismatic and attractive facial features, exotic beauty.' },
    { id: 'middle_eastern', label: 'ORTADOĞU', promptValue: 'Stunning Middle Eastern female model, olive skin tone, deep mesmerizing eyes, defined eyebrows, elegant Arabian beauty aesthetic, sophisticated look' },
    { id: 'indian', label: 'HİNT', promptValue: 'Beautiful Indian female model, sharp facial features, traditional yet modern Bollywood beauty aesthetic, expressive eyes, rich skin tone.' },
    { id: 'curly_honey', label: 'KIVIRCIK KUMRAL', promptValue: 'Model with voluminous curly honey-blonde hair, soft natural makeup, slightly full lips, photorealistic portrait.' },
    { 
  id: 'blonde', 
  label: 'SARIŞIN (PLATİN)', 
  promptValue: 'Stunning model with platinum blonde hair, bright blue eyes, radiant complexion, glamorous and sophisticated look, movie star vibe.' 
},
{ 
  id: 'braids', 
  label: 'ÖRGÜLÜ SAÇ', 
  promptValue: 'Beautiful model with intricate braided hairstyle (box braids or cornrows), stylish and urban look, highlighting facial symmetry.' 
},
{ 
  id: 'bangs', 
  label: 'KAKÜLLÜ', 
  promptValue: 'Model with a stylish haircut featuring bangs (fringe) framing the eyes, chic and french-girl aesthetic, cute and attractive.' 
}

];

export const MODEL_DETAIL_VARIANTS: Record<string, OptionItem[]> = {
    'man': [
        ...COMMON_ETHNICITY_VARIANTS,
        { id: 'beard', label: 'SAKALLI', promptValue: 'with a groomed beard, masculine look' },
        { id: 'shaved', label: 'TRAŞLI', promptValue: 'clean shaven, sharp jawline' },
    ],
    'girl': [
         ...COMMON_ETHNICITY_VARIANTS,
        { id: 'long_hair', label: 'UZUN SAÇ', promptValue: 'Model with luxurious long flowing hair, silky texture, healthy shine, framing a beautiful face, shampoo commercial aesthetic' },
        { id: 'short_hair', label: 'KISA SAÇ', promptValue: 'Model with a chic modern short haircut (pixie or bob), edgy and sophisticated fashion look, highlighting beautiful facial features and neck.' },
        { id: 'redhead', label: 'KIZIL SAÇLI', promptValue: 'Stunning model with natural vibrant red hair and freckles, green eyes, unique and attractive look, cinematic lighting.' },       
        { id: 'hijab', label: 'TESETTÜRLÜ', promptValue: 'wearing a stylish hijab' },
    ]
};

export const OUTFIT_BODY_TYPES: OptionItem[] = [
    { id: 'slim', label: 'FİT', promptValue: 'Slim fit model body type, athletic toned physique.' },
    { id: 'curvy', label: 'BALIK ETLİ', promptValue: 'Curvy hourglass body type, full figured.' },
    { id: 'plus', label: 'ŞİŞMAN (PLUS)', promptValue: 'Plus size, heavy set, full figured body type.' },
];

export const OUTFIT_BODY_TYPE_VARIANTS: Record<string, OptionItem[]> = {
    'curvy': [
        { id: 'standing', label: 'AYAKTA', promptValue: 'standing pose, confident look' },
        { id: 'sitting', label: 'OTURAN', promptValue: 'sitting on a chair or stool, relaxed pose' },
        { id: 'hands_pocket', label: 'ELLER CEPTE', promptValue: 'standing with hands in pockets, cool vibe' },
        { id: 'walking', label: 'YÜRÜYEN', promptValue: 'walking towards camera, dynamic movement' },
          { id: 'act_reading', label: 'KİTAP OKURKEN', promptValue: 'Subject is focused on reading an open hardcover book, wearing spectacles, academic or home library setting.' },
  { id: 'act_cooking', label: 'YEMEK YAPARKEN', promptValue: 'Subject is standing in a kitchen, wearing a modern apron, chopping vegetables or stirring a pot, steam rising.' },
  { id: 'act_breakfast', label: 'KAHVALTI YAPARKEN', promptValue: 'Subject is sitting at a sun-drenched breakfast table with orange juice and croissants, morning vibe.' },
  { id: 'act_laptop', label: 'LAPTOPLA ÇALIŞIRKEN', promptValue: 'Subject is focused on a laptop screen, typing, modern office or home office environment, professional look.' },
  { id: 'act_walking', label: 'YÜRÜYÜŞ YAPARKEN', promptValue: 'Subject is captured in mid-stride on a city sidewalk, dynamic movement, casual and energetic vibe.' },
  { id: 'act_phone', label: 'TELEFONLA KONUŞURKEN', promptValue: 'Subject is holding a smartphone to their ear, smiling, busy urban background, candid shot.' },
  { id: 'act_selfie', label: 'SELFIE ÇEKERKEN', promptValue: 'Subject is holding a phone up as if taking a selfie, mirror reflection vibe, playful expression.' },
  { id: 'act_listening_music', label: 'MÜZİK DİNLERKEN', promptValue: 'Subject is wearing stylish over-ear headphones, eyes closed, lost in music, soft moody lighting.' },
  { id: 'act_painting', label: 'RESİM YAPARKEN', promptValue: 'Subject is holding a paintbrush in front of a canvas, paint smudges on hands, artistic studio setting.' },
  { id: 'act_photography', label: 'FOTOĞRAF ÇEKERKEN', promptValue: 'Subject is looking through the viewfinder of a high-end DSLR camera, professional photographer vibe.' },
  { id: 'act_waiting_bus', label: 'OTOBÜS BEKLERKEN', promptValue: 'Subject is standing at a bus stop, checking their watch, urban street background with a city bus approaching.' },
  { id: 'act_shopping', label: 'ALIŞVERİŞ YAPARKEN', promptValue: 'Subject is carrying multiple luxury shopping bags, walking outside high-end boutiques, fashionista vibe.' },
  { id: 'act_yoga', label: 'YOGA YAPARKEN', promptValue: 'Subject is in a zen yoga pose (lotus position), calm expression, serene meditation room background.' },
  { id: 'act_gym_training', label: 'SPOR YAPARKEN', promptValue: 'Subject is lifting dumbbells or running on a treadmill, sweat on forehead, intense focus, gym background.' },
  { id: 'act_dog_walking', label: 'KÖPEK GEZDİRİRKEN', promptValue: 'Subject is walking a golden retriever on a leash in a park, sunlight through trees, happy lifestyle vibe.' },
  { id: 'act_cycling', label: 'BİSİKLET SÜRERKEN', promptValue: 'Subject is riding a vintage bicycle, city park path, motion blur background, active summer lifestyle.' },
  { id: 'act_laughing', label: 'GÜLERKEN (CANDID)', promptValue: 'Subject is caught in a genuine, joyful laugh, head tilted back, soft natural afternoon light.' },
  { id: 'act_thinking', label: 'DÜŞÜNCELİ', promptValue: 'Subject has a thoughtful expression, hand on chin, looking out a window, introspective and moody vibe.' },
  { id: 'act_rain_umbrella', label: 'ŞEMSİYE ALTINDA', promptValue: 'Subject is holding a black umbrella in the rain, wet pavement reflections, cinematic lighting.' },
  { id: 'act_makeup', label: 'MAKYAJ YAPARKEN', promptValue: 'Subject is applying lipstick in a vanity mirror, soft glamorous lighting, cosmetics in background.' },
  { id: 'act_wine_tasting', label: 'ŞARAP TADIMI', promptValue: 'Subject is swirling a glass of red wine, sophisticated vineyard or wine cellar background, elegant.' },
  { id: 'act_gardening', label: 'BAHÇE İŞLERİYLE UĞRAŞIRKEN', promptValue: 'Subject is potting plants, wearing garden gloves, green leaves and flowers background, sunlight.' },
  { id: 'act_skating', label: 'KAYKAY SÜRERKEN', promptValue: 'Subject is balanced on a skateboard at a skate park, urban youthful vibe, low angle shot.' },
  { id: 'act_playing_guitar', label: 'GİTAR ÇALARKEN', promptValue: 'Subject is playing an acoustic guitar, sitting on a stool, warm wooden interior, focused and musical.' },
  { id: 'act_dancing', label: 'DANS EDERKEN', promptValue: 'Subject is in a dynamic dance pose, flowing movement, stage lighting or club background, energetic.' },
  { id: 'act_signing_contract', label: 'İMZA ATARKEN', promptValue: 'Subject is sitting at a desk, signing a formal document with a fountain pen, professional executive vibe.' },
  { id: 'act_playing_chess', label: 'SATRANÇ OYNARKEN', promptValue: 'Subject is contemplating a move on a chess board, intellectual focus, dramatic lighting.' },
  { id: 'act_eating_pizza', label: 'PİZZA YERKEN', promptValue: 'Subject is taking a bite of a cheesy pizza slice, casual and fun food photography style.' },
  { id: 'act_adjusting_tie', label: 'KRAVAT DÜZELTİRKEN', promptValue: 'Subject is looking in a mirror and adjusting their tie or collar, sharp suit, getting ready for an event.' },
    ],
    'slim': [
        { id: 'standing', label: 'AYAKTA', promptValue: 'standing pose, fashion model stance' },
        { id: 'sitting', label: 'OTURAN', promptValue: 'sitting pose, high fashion editorial look' },
        { id: 'hands_hip', label: 'EL BELDE', promptValue: 'hands on hips, power pose' },
        { id: 'leaning', label: 'YASLANAN', promptValue: 'leaning against a wall, casual pose' },
         { id: 'act_coffee', label: 'KAHVE İÇERKEN', promptValue: 'Subject is holding a steaming ceramic coffee cup, taking a sip, cozy cafe lighting, relaxed posture.' },
  { id: 'act_reading', label: 'KİTAP OKURKEN', promptValue: 'Subject is focused on reading an open hardcover book, wearing spectacles, academic or home library setting.' },
  { id: 'act_cooking', label: 'YEMEK YAPARKEN', promptValue: 'Subject is standing in a kitchen, wearing a modern apron, chopping vegetables or stirring a pot, steam rising.' },
  { id: 'act_breakfast', label: 'KAHVALTI YAPARKEN', promptValue: 'Subject is sitting at a sun-drenched breakfast table with orange juice and croissants, morning vibe.' },
  { id: 'act_laptop', label: 'LAPTOPLA ÇALIŞIRKEN', promptValue: 'Subject is focused on a laptop screen, typing, modern office or home office environment, professional look.' },
  { id: 'act_walking', label: 'YÜRÜYÜŞ YAPARKEN', promptValue: 'Subject is captured in mid-stride on a city sidewalk, dynamic movement, casual and energetic vibe.' },
  { id: 'act_phone', label: 'TELEFONLA KONUŞURKEN', promptValue: 'Subject is holding a smartphone to their ear, smiling, busy urban background, candid shot.' },
  { id: 'act_selfie', label: 'SELFIE ÇEKERKEN', promptValue: 'Subject is holding a phone up as if taking a selfie, mirror reflection vibe, playful expression.' },
  { id: 'act_listening_music', label: 'MÜZİK DİNLERKEN', promptValue: 'Subject is wearing stylish over-ear headphones, eyes closed, lost in music, soft moody lighting.' },
  { id: 'act_painting', label: 'RESİM YAPARKEN', promptValue: 'Subject is holding a paintbrush in front of a canvas, paint smudges on hands, artistic studio setting.' },
  { id: 'act_photography', label: 'FOTOĞRAF ÇEKERKEN', promptValue: 'Subject is looking through the viewfinder of a high-end DSLR camera, professional photographer vibe.' },
  { id: 'act_waiting_bus', label: 'OTOBÜS BEKLERKEN', promptValue: 'Subject is standing at a bus stop, checking their watch, urban street background with a city bus approaching.' },
  { id: 'act_shopping', label: 'ALIŞVERİŞ YAPARKEN', promptValue: 'Subject is carrying multiple luxury shopping bags, walking outside high-end boutiques, fashionista vibe.' },
  { id: 'act_yoga', label: 'YOGA YAPARKEN', promptValue: 'Subject is in a zen yoga pose (lotus position), calm expression, serene meditation room background.' },
  { id: 'act_gym_training', label: 'SPOR YAPARKEN', promptValue: 'Subject is lifting dumbbells or running on a treadmill, sweat on forehead, intense focus, gym background.' },
  { id: 'act_dog_walking', label: 'KÖPEK GEZDİRİRKEN', promptValue: 'Subject is walking a golden retriever on a leash in a park, sunlight through trees, happy lifestyle vibe.' },
  { id: 'act_cycling', label: 'BİSİKLET SÜRERKEN', promptValue: 'Subject is riding a vintage bicycle, city park path, motion blur background, active summer lifestyle.' },
  { id: 'act_laughing', label: 'GÜLERKEN (CANDID)', promptValue: 'Subject is caught in a genuine, joyful laugh, head tilted back, soft natural afternoon light.' },
  { id: 'act_thinking', label: 'DÜŞÜNCELİ', promptValue: 'Subject has a thoughtful expression, hand on chin, looking out a window, introspective and moody vibe.' },
  { id: 'act_rain_umbrella', label: 'ŞEMSİYE ALTINDA', promptValue: 'Subject is holding a black umbrella in the rain, wet pavement reflections, cinematic lighting.' },
  { id: 'act_makeup', label: 'MAKYAJ YAPARKEN', promptValue: 'Subject is applying lipstick in a vanity mirror, soft glamorous lighting, cosmetics in background.' },
  { id: 'act_wine_tasting', label: 'ŞARAP TADIMI', promptValue: 'Subject is swirling a glass of red wine, sophisticated vineyard or wine cellar background, elegant.' },
  { id: 'act_gardening', label: 'BAHÇE İŞLERİYLE UĞRAŞIRKEN', promptValue: 'Subject is potting plants, wearing garden gloves, green leaves and flowers background, sunlight.' },
  { id: 'act_skating', label: 'KAYKAY SÜRERKEN', promptValue: 'Subject is balanced on a skateboard at a skate park, urban youthful vibe, low angle shot.' },
  { id: 'act_playing_guitar', label: 'GİTAR ÇALARKEN', promptValue: 'Subject is playing an acoustic guitar, sitting on a stool, warm wooden interior, focused and musical.' },
  { id: 'act_dancing', label: 'DANS EDERKEN', promptValue: 'Subject is in a dynamic dance pose, flowing movement, stage lighting or club background, energetic.' },
  { id: 'act_signing_contract', label: 'İMZA ATARKEN', promptValue: 'Subject is sitting at a desk, signing a formal document with a fountain pen, professional executive vibe.' },
  { id: 'act_playing_chess', label: 'SATRANÇ OYNARKEN', promptValue: 'Subject is contemplating a move on a chess board, intellectual focus, dramatic lighting.' },
  { id: 'act_eating_pizza', label: 'PİZZA YERKEN', promptValue: 'Subject is taking a bite of a cheesy pizza slice, casual and fun food photography style.' },
  { id: 'act_adjusting_tie', label: 'KRAVAT DÜZELTİRKEN', promptValue: 'Subject is looking in a mirror and adjusting their tie or collar, sharp suit, getting ready for an event.' },
    ],
    'plus': [
        { id: 'standing', label: 'AYAKTA', promptValue: 'standing pose, fashion model stance' },
        { id: 'sitting', label: 'OTURAN', promptValue: 'sitting pose, high fashion editorial look' },
        { id: 'hands_hip', label: 'EL BELDE', promptValue: 'hands on hips, power pose' },
        { id: 'leaning', label: 'YASLANAN', promptValue: 'leaning against a wall, casual pose' },
         { id: 'act_coffee', label: 'KAHVE İÇERKEN', promptValue: 'Subject is holding a steaming ceramic coffee cup, taking a sip, cozy cafe lighting, relaxed posture.' },
  { id: 'act_reading', label: 'KİTAP OKURKEN', promptValue: 'Subject is focused on reading an open hardcover book, wearing spectacles, academic or home library setting.' },
  { id: 'act_cooking', label: 'YEMEK YAPARKEN', promptValue: 'Subject is standing in a kitchen, wearing a modern apron, chopping vegetables or stirring a pot, steam rising.' },
  { id: 'act_breakfast', label: 'KAHVALTI YAPARKEN', promptValue: 'Subject is sitting at a sun-drenched breakfast table with orange juice and croissants, morning vibe.' },
  { id: 'act_laptop', label: 'LAPTOPLA ÇALIŞIRKEN', promptValue: 'Subject is focused on a laptop screen, typing, modern office or home office environment, professional look.' },
  { id: 'act_walking', label: 'YÜRÜYÜŞ YAPARKEN', promptValue: 'Subject is captured in mid-stride on a city sidewalk, dynamic movement, casual and energetic vibe.' },
  { id: 'act_phone', label: 'TELEFONLA KONUŞURKEN', promptValue: 'Subject is holding a smartphone to their ear, smiling, busy urban background, candid shot.' },
  { id: 'act_selfie', label: 'SELFIE ÇEKERKEN', promptValue: 'Subject is holding a phone up as if taking a selfie, mirror reflection vibe, playful expression.' },
  { id: 'act_listening_music', label: 'MÜZİK DİNLERKEN', promptValue: 'Subject is wearing stylish over-ear headphones, eyes closed, lost in music, soft moody lighting.' },
  { id: 'act_painting', label: 'RESİM YAPARKEN', promptValue: 'Subject is holding a paintbrush in front of a canvas, paint smudges on hands, artistic studio setting.' },
  { id: 'act_photography', label: 'FOTOĞRAF ÇEKERKEN', promptValue: 'Subject is looking through the viewfinder of a high-end DSLR camera, professional photographer vibe.' },
  { id: 'act_waiting_bus', label: 'OTOBÜS BEKLERKEN', promptValue: 'Subject is standing at a bus stop, checking their watch, urban street background with a city bus approaching.' },
  { id: 'act_shopping', label: 'ALIŞVERİŞ YAPARKEN', promptValue: 'Subject is carrying multiple luxury shopping bags, walking outside high-end boutiques, fashionista vibe.' },
  { id: 'act_yoga', label: 'YOGA YAPARKEN', promptValue: 'Subject is in a zen yoga pose (lotus position), calm expression, serene meditation room background.' },
  { id: 'act_gym_training', label: 'SPOR YAPARKEN', promptValue: 'Subject is lifting dumbbells or running on a treadmill, sweat on forehead, intense focus, gym background.' },
  { id: 'act_dog_walking', label: 'KÖPEK GEZDİRİRKEN', promptValue: 'Subject is walking a golden retriever on a leash in a park, sunlight through trees, happy lifestyle vibe.' },
  { id: 'act_cycling', label: 'BİSİKLET SÜRERKEN', promptValue: 'Subject is riding a vintage bicycle, city park path, motion blur background, active summer lifestyle.' },
  { id: 'act_laughing', label: 'GÜLERKEN (CANDID)', promptValue: 'Subject is caught in a genuine, joyful laugh, head tilted back, soft natural afternoon light.' },
  { id: 'act_thinking', label: 'DÜŞÜNCELİ', promptValue: 'Subject has a thoughtful expression, hand on chin, looking out a window, introspective and moody vibe.' },
  { id: 'act_rain_umbrella', label: 'ŞEMSİYE ALTINDA', promptValue: 'Subject is holding a black umbrella in the rain, wet pavement reflections, cinematic lighting.' },
  { id: 'act_makeup', label: 'MAKYAJ YAPARKEN', promptValue: 'Subject is applying lipstick in a vanity mirror, soft glamorous lighting, cosmetics in background.' },
  { id: 'act_wine_tasting', label: 'ŞARAP TADIMI', promptValue: 'Subject is swirling a glass of red wine, sophisticated vineyard or wine cellar background, elegant.' },
  { id: 'act_gardening', label: 'BAHÇE İŞLERİYLE UĞRAŞIRKEN', promptValue: 'Subject is potting plants, wearing garden gloves, green leaves and flowers background, sunlight.' },
  { id: 'act_skating', label: 'KAYKAY SÜRERKEN', promptValue: 'Subject is balanced on a skateboard at a skate park, urban youthful vibe, low angle shot.' },
  { id: 'act_playing_guitar', label: 'GİTAR ÇALARKEN', promptValue: 'Subject is playing an acoustic guitar, sitting on a stool, warm wooden interior, focused and musical.' },
  { id: 'act_dancing', label: 'DANS EDERKEN', promptValue: 'Subject is in a dynamic dance pose, flowing movement, stage lighting or club background, energetic.' },
  { id: 'act_signing_contract', label: 'İMZA ATARKEN', promptValue: 'Subject is sitting at a desk, signing a formal document with a fountain pen, professional executive vibe.' },
  { id: 'act_playing_chess', label: 'SATRANÇ OYNARKEN', promptValue: 'Subject is contemplating a move on a chess board, intellectual focus, dramatic lighting.' },
  { id: 'act_eating_pizza', label: 'PİZZA YERKEN', promptValue: 'Subject is taking a bite of a cheesy pizza slice, casual and fun food photography style.' },
  { id: 'act_adjusting_tie', label: 'KRAVAT DÜZELTİRKEN', promptValue: 'Subject is looking in a mirror and adjusting their tie or collar, sharp suit, getting ready for an event.' },
    ]
};

export const OUTFIT_WEAR_TYPES: OptionItem[] = [
// --- DIŞ GİYİM (OUTERWEAR) ---
  { id: 'blazer_crop', label: 'BLAZER (CROP)', promptValue: 'Focus on Cropped Blazer: short-length tailored jacket ending at waist, sharp structured shoulders, notched lapels, single-breasted button front, fitted silhouette with modern edgy cut.' },

  { id: 'blazer_oversize', label: 'BLAZER (OVERSIZE)', promptValue: 'Focus on Oversized Blazer: loose boxy fit, dropped shoulders, long sleeves, exaggerated masculine silhouette, padded shoulders, notched lapels, single or double-breasted, relaxed tailored look.' },

  { id: 'blazer', label: 'BLAZER CEKET', promptValue: 'Focus on Classic Blazer Jacket: structured tailored fit, defined shoulders with padding, notched or peak lapels, single-breasted or double-breasted front buttons, flap pockets, professional elegant silhouette.' },

  { id: 'bomber_jacket', label: 'BOMBER CEKET', promptValue: 'Focus on Bomber Jacket: ribbed knit collar, cuffs and hem, front zipper closure, slightly puffy quilted or padded body, side pockets, casual relaxed fit with sporty military-inspired silhouette.' },

  { id: 'coat_cashmere', label: 'KAŞMİR KABAN', promptValue: 'Focus on Cashmere Coat: luxurious soft cashmere fabric with smooth texture, long knee or ankle length, tailored fit, notched lapels, single-breasted buttons, elegant minimalist luxury finish.' },

  { id: 'coat', label: 'KABAN', promptValue: 'Focus on Winter Overcoat: heavy wool or blended fabric with warm texture, long length below knee, structured shoulders, notched lapels, double-breasted or single-breasted, insulated warm classic silhouette.' },

  { id: 'denim_jacket_sherpa', label: 'KÜRK YAKALI KOT CEKET', promptValue: 'Focus on Sherpa-Lined Denim Jacket: rugged blue denim exterior, cozy sherpa fur lining and contrast collar, button front, chest flap pockets, adjustable waist tabs, warm casual rugged texture.' },

  { id: 'denim_jacket', label: 'KOT CEKET', promptValue: 'Focus on Classic Denim Jacket: sturdy cotton denim fabric, pointed collar, button front closure, two chest flap pockets, side pockets, metal buttons, slightly fitted casual everyday silhouette.' },

  { id: 'faux_fur', label: 'KÜRK (YAPAY)', promptValue: 'Focus on Faux Fur Coat: plush soft synthetic fur texture, voluminous oversized or fitted silhouette, hook-and-eye closures, long sleeves, luxurious warm glamorous winter look.' },

  { id: 'leather_jacket_biker', label: 'DERİ CEKET (BIKER)', promptValue: 'Focus on Biker Leather Jacket: genuine or faux leather with shiny texture, asymmetrical front zipper, multiple zip pockets, notched lapels with snaps, belted waist, edgy motorcycle aesthetic.' },

  { id: 'leather_jacket', label: 'DERİ CEKET', promptValue: 'Focus on Classic Leather Jacket: smooth supple leather texture, minimal design with front zipper, notched or stand collar, zip pockets, slim or regular fit, timeless cool silhouette.' },

  { id: 'parka', label: 'PARKA', promptValue: 'Focus on Parka Jacket: hooded with faux fur trim, drawstring waist and hem, multiple utility pockets, waterproof outer shell, quilted lining, long length for warmth, practical outdoor silhouette.' },

  { id: 'poncho', label: 'PONÇO', promptValue: 'Focus on Poncho: draped loose fabric over shoulders, no sleeves or arm holes, fringed edges optional, bohemian relaxed fit, layered ethnic-inspired casual silhouette.' },

  { id: 'puffer_vest', label: 'ŞİŞME YELEK', promptValue: 'Focus on Puffer Vest: quilted horizontal or diamond stitching, high neck, front zipper, sleeveless design, lightweight insulated filling, sporty casual layered look.' },

  { id: 'puffer', label: 'ŞİŞME MONT', promptValue: 'Focus on Puffer Jacket: heavily quilted with horizontal or vertical baffles, shiny or matte nylon shell, high collar, front zipper, voluminous warm insulated silhouette, modern winter style.' },

  { id: 'raincoat', label: 'YAĞMURLUK', promptValue: 'Focus on Raincoat: waterproof coated fabric with sleek shiny surface, hooded or collared, button or zip front, belted waist optional, lightweight practical functional silhouette.' },

  { id: 'trench_coat', label: 'TRENÇKOT', promptValue: 'Focus on Trench Coat: double-breasted front, storm flap, epaulettes, belted waist and cuffs, notched lapels, water-resistant cotton gabardine, classic mid-calf length elegant silhouette.' },

  { id: 'varsity_jacket', label: 'KOLEJ CEKETİ', promptValue: 'Focus on Varsity Jacket: wool body with contrast leather or faux leather sleeves, ribbed collar cuffs and hem, snap button front, chenille patches optional, sporty collegiate preppy silhouette.' },

  { id: 'vest_suit', label: 'YELEK (KLASİK)', promptValue: 'Focus on Suit Vest: tailored slim fit, V-neck or scoop neckline, button-up front, adjustable back strap, matching suit fabric, formal layered professional silhouette.' },

  { id: 'windbreaker', label: 'RÜZGARLIK', promptValue: 'Focus on Windbreaker: lightweight nylon or polyester fabric, zip front, elastic cuffs, drawstring hood and hem, mesh lining optional, athletic sporty casual silhouette.' },

  // --- ÜST GİYİM (TOPS) ---
  { id: 'blouse_chiffon', label: 'BLUZ (ŞİFON)', promptValue: 'Focus on Chiffon Blouse: lightweight sheer chiffon fabric with delicate flow, feminine silhouette, long or short sleeves with ruffles or gathers, elegant draped neckline, soft romantic aesthetic.' },

  { id: 'blouse_satin', label: 'BLUZ (SATEN)', promptValue: 'Focus on Satin Blouse: glossy smooth satin fabric with luxurious fluid drape, button-front or tie-neck details, long sleeves with cuffs, relaxed or fitted feminine cut, sophisticated shiny texture.' },

  { id: 'blouse', label: 'BLUZ', promptValue: 'Focus on General Blouse: soft woven fabric, feminine tailored fit, collar and button placket, long or short sleeves, versatile elegant silhouette with subtle gathering or pleats.' },

  { id: 'bodysuit_lace', label: 'BODYSUIT (DANTEL)', promptValue: 'Focus on Lace Bodysuit: intricate floral lace fabric, form-fitting stretch silhouette, sheer panels or full coverage, snap crotch closure, delicate scalloped edges, sexy romantic look.' },

  { id: 'bodysuit', label: 'BODYSUIT', promptValue: 'Focus on Basic Bodysuit: smooth stretch jersey fabric, seamless second-skin fit, crew or scoop neck, long or sleeveless, snap gusset bottom, sleek minimalist everyday silhouette.' },

  { id: 'bustier', label: 'BÜSTİYER', promptValue: 'Focus on Bustier Top: structured boned corset-style bodice, cropped length, sweetheart or straight neckline, lace-up or hook closure, fitted waist-emphasizing silhouette, glamorous feminine design.' },

  { id: 'cardigan_crop', label: 'HIRKA (CROP)', promptValue: 'Focus on Cropped Cardigan: soft knit fabric, short waist-length cut, open front or button closure, long sleeves, ribbed trims, casual layered modern fit.' },

  { id: 'cardigan_long', label: 'HIRKA (UZUN)', promptValue: 'Focus on Long Cardigan: flowing knit or wool blend, knee or midi length, open drape or belted, long sleeves with ribbed cuffs, cozy relaxed bohemian silhouette.' },

  { id: 'corset', label: 'KORSE', promptValue: 'Focus on Corset Top: rigid boning for structure, heavy fabric or lace overlay, front busk closure with back lacing, dramatic waist-cinching hourglass silhouette, vintage-inspired edgy look.' },

  { id: 'crop_top', label: 'CROP TOP', promptValue: 'Focus on Crop Top: short midriff-exposing length, fitted or loose cut, sleeveless or short sleeves, various necklines like crew or halter, youthful modern casual streetwear vibe.' },

  { id: 'hoodie_oversize', label: 'KAPÜŞONLU (OVERSIZE)', promptValue: 'Focus on Oversized Hoodie: soft fleece fabric, drawstring hood, dropped shoulders, kangaroo pocket, relaxed boxy fit, long sleeves with cuffs, casual streetwear comfort.' },

  { id: 'hoodie', label: 'KAPÜŞONLU', promptValue: 'Focus on Standard Hoodie: cotton-poly fleece with cozy texture, adjustable drawstring hood, front kangaroo pocket, ribbed cuffs and hem, regular fit athletic casual silhouette.' },

  { id: 'knit_sweater', label: 'KAZAK (ÖRGÜ)', promptValue: 'Focus on Chunky Knit Sweater: thick cable or ribbed wool yarn, oversized or fitted, crewneck or turtleneck, long sleeves, warm textured cozy winter aesthetic.' },

  { id: 'polo', label: 'POLO YAKA', promptValue: 'Focus on Polo Shirt: breathable pique cotton fabric, collared neck with button placket, short sleeves with ribbed cuffs, tailored sporty-casual fit, classic preppy silhouette.' },

  { id: 'shirt_denim', label: 'GÖMLEK (KOT)', promptValue: 'Focus on Denim Shirt: sturdy cotton denim with faded wash, pointed collar, button front, chest flap pockets, long sleeves with cuffs, casual rugged western-inspired look.' },

  { id: 'shirt_flannel', label: 'GÖMLEK (ODUNCU)', promptValue: 'Focus on Flannel Shirt: soft brushed cotton plaid pattern, button-down collar, long sleeves with cuffs, chest pockets, relaxed lumberjack casual silhouette.' },

  { id: 'shirt_linen', label: 'GÖMLEK (KETEN)', promptValue: 'Focus on Linen Shirt: lightweight breathable linen fabric with natural texture, relaxed fit, button front, collar, long or rolled sleeves, summery effortless elegant vibe.' },

  { id: 'shirt', label: 'GÖMLEK (KLASİK)', promptValue: 'Focus on Classic Button-down Shirt: crisp cotton poplin fabric, pointed collar, full button placket, long sleeves with barrel cuffs, tailored professional silhouette.' },

  { id: 'sweatshirt', label: 'SWEATSHIRT', promptValue: 'Focus on Crewneck Sweatshirt: soft looped fleece interior, ribbed crew neck, cuffs and hem, relaxed fit, no hood or pockets, classic casual comfort silhouette.' },

  { id: 'tshirt_oversize', label: 'T-SHIRT (OVERSIZE)', promptValue: 'Focus on Oversized T-Shirt: soft cotton jersey, boxy loose fit, dropped shoulders, crewneck, short sleeves, relaxed streetwear unisex silhouette.' },

  { id: 'tshirt_vneck', label: 'T-SHIRT (V YAKA)', promptValue: 'Focus on V-Neck T-Shirt: comfortable cotton blend jersey, deep V-neckline, short sleeves, slim or regular fit, casual flattering everyday silhouette.' },

  { id: 'tshirt', label: 'T-SHIRT', promptValue: 'Focus on Classic Crewneck T-Shirt: soft ring-spun cotton jersey, round ribbed crew neck, short sleeves, straight standard fit, timeless basic casual silhouette.' },

  { id: 'tunic', label: 'TUNİK', promptValue: 'Focus on Tunic Top: elongated hip or thigh length, loose comfortable fit, various necklines and sleeves, lightweight fabric, modest layered versatile silhouette.' },

  { id: 'turtleneck', label: 'BOĞAZLI KAZAK', promptValue: 'Focus on Turtleneck Sweater: fine rib-knit fabric, high folded neck covering chin, long sleeves, fitted or slim silhouette, elegant warm minimalist winter look.' },

  // --- ALT GİYİM (BOTTOMS) ---
  { id: 'cargo_pants', label: 'KARGO PANTOLON', promptValue: 'Focus on Cargo Pants: durable cotton twill fabric, relaxed baggy fit, multiple large utility side pockets with flaps, drawstring or zip details, straight or tapered leg, rugged casual military-inspired silhouette.' },

  { id: 'culottes', label: 'CULOTTE PANTOLON', promptValue: 'Focus on Culottes: wide-leg cropped trousers ending mid-calf, high-waisted, flowing structured fabric like wool or cotton blend, elegant tailored silhouette with dramatic volume and clean lines.' },

  { id: 'jeans_mom', label: 'KOT (MOM JEANS)', promptValue: 'Focus on Mom Jeans: high-waisted relaxed fit through hips, tapered slim leg, light vintage wash denim, five-pocket styling, subtle fading, comfortable retro 90s-inspired casual silhouette.' },

  { id: 'jeans_skinny', label: 'KOT (SKINNY)', promptValue: 'Focus on Skinny Jeans: stretch denim fabric for second-skin fit, low to mid-rise, tight from hip to ankle, five-pocket design, sleek modern slim silhouette emphasizing curves.' },

  { id: 'jeans_wide', label: 'KOT (BOL PAÇA)', promptValue: 'Focus on Wide Leg Jeans: relaxed high-waisted fit, full dramatic wide legs from hip to hem, rigid or soft denim, five-pocket classic styling, effortless bohemian or retro casual silhouette.' },

  { id: 'joggers', label: 'JOGGER PANTOLON', promptValue: 'Focus on Jogger Pants: soft cotton fleece or jersey, elastic drawstring waist, ribbed ankle cuffs, side pockets, tapered slim leg, athletic casual comfortable streetwear fit.' },

  { id: 'leggings_leather', label: 'TAYT (DERİ GÖRÜNÜM)', promptValue: 'Focus on Faux Leather Leggings: shiny coated stretch fabric mimicking leather, high-waisted, skin-tight second-skin fit, seamless or minimal seams, edgy sleek modern silhouette.' },

  { id: 'leggings', label: 'TAYT (SPOR)', promptValue: 'Focus on Athletic Leggings: matte moisture-wicking stretch fabric, high or mid-rise waistband, form-fitting compressive silhouette, flatlock seams, sporty performance-oriented design.' },

  { id: 'palazzo_pants', label: 'PALAZZO PANTOLON', promptValue: 'Focus on Palazzo Pants: ultra wide flowing legs from waist to floor, lightweight crepe or silk-like fabric, high-waisted with flat front, elegant dramatic bohemian or formal silhouette.' },

  { id: 'pants_chino', label: 'CHINO PANTOLON', promptValue: 'Focus on Chino Pants: smooth cotton twill fabric, slim or straight leg, mid-rise, slant pockets, clean pressed creases optional, smart-casual tailored professional silhouette.' },

  { id: 'pants_leather', label: 'DERİ PANTOLON', promptValue: 'Focus on Leather Trousers: genuine or faux leather with supple texture, slim or straight fit, mid-rise, minimal pockets, sleek shiny modern edgy silhouette.' },

  { id: 'shorts_bermuda', label: 'ŞORT (BERMUDA)', promptValue: 'Focus on Bermuda Shorts: tailored knee-length cut, cotton or twill fabric, mid-rise waist, belt loops, slant pockets, structured smart-casual preppy silhouette.' },

  { id: 'shorts_denim', label: 'ŞORT (KOT)', promptValue: 'Focus on Denim Shorts: faded or raw denim, mid-thigh or shorter length, frayed or cuffed hem, five-pocket styling, distressed details optional, casual summery relaxed fit.' },

  { id: 'shorts', label: 'ŞORT (SPOR)', promptValue: 'Focus on Athletic Shorts: lightweight breathable mesh or nylon fabric, elastic waist with drawstring, side slits for movement, relaxed loose fit, sporty performance silhouette.' },

  { id: 'skirt_leather', label: 'ETEK (DERİ)', promptValue: 'Focus on Leather Skirt: genuine or faux leather with smooth shine, mini or midi length, fitted A-line or pencil shape, back zip closure, structured edgy modern silhouette.' },

  { id: 'skirt_maxi', label: 'ETEK (MAXI)', promptValue: 'Focus on Maxi Skirt: floor-length flowing fabric like chiffon or cotton, high-waisted elastic or fitted band, A-line or tiered, bohemian elegant modest silhouette.' },

  { id: 'skirt_midi', label: 'ETEK (MIDI)', promptValue: 'Focus on Midi Skirt: calf-length refined cut, A-line or fitted silhouette, woven fabric with structure, high-waisted optional, versatile elegant feminine design.' },

  { id: 'skirt_mini', label: 'ETEK (MİNİ)', promptValue: 'Focus on Mini Skirt: short thigh-length hemline, fitted or flared shape, various fabrics like denim or wool, zip or elastic closure, youthful playful modern silhouette.' },

  { id: 'skirt_pencil', label: 'ETEK (KALEM)', promptValue: 'Focus on Pencil Skirt: high-waisted form-fitting narrow silhouette, knee-length, back slit for movement, smooth woven fabric, professional sleek hourglass-emphasizing design.' },

  { id: 'skirt_pleated', label: 'ETEK (PİLİSELİ)', promptValue: 'Focus on Pleated Skirt: accordion or knife pleats for volume and movement, midi or mini length, lightweight fabric, high-waisted band, feminine fluid elegant silhouette.' },

  { id: 'sweatpants', label: 'EŞOFMAN ALTI', promptValue: 'Focus on Sweatpants: soft brushed fleece cotton blend, elastic drawstring waist, ribbed cuffs optional, relaxed tapered or straight leg, cozy casual loungewear fit.' },

  { id: 'wide_sweatpants', label: 'BOL EŞOFMAN ALTI', promptValue: 'Focus on Wide-Leg Sweatpants: soft fleece cotton fabric, relaxed high-waisted fit, dramatically wide straight legs, elastic drawstring waist, voluminous comfortable modern streetwear silhouette.' },

  { id: 'salwar', label: 'ŞALVAR PANTOLON', promptValue: 'Focus on Şalvar Pants: extremely loose baggy fit, very wide draped legs gathered tightly at ankles with cuffs, lightweight cotton or silk fabric, traditional ethnic modest voluminous silhouette.' },

  // --- ELBİSELER & TULUMLAR (DRESSES & JUMPSUITS) ---
  { id: 'dress_bodycon', label: 'ELBİSE (BODYCON)', promptValue: 'Focus on Bodycon Dress: form-fitting stretch fabric hugging curves, midi or mini length, sleeveless or long sleeves, second-skin silhouette emphasizing hourglass figure, modern sexy clubwear aesthetic.' },

  { id: 'dress_evening', label: 'ABİYE', promptValue: 'Focus on Evening Gown: luxurious floor-length formal dress, rich fabrics like silk satin chiffon or sequined embellishments, elegant draped or fitted silhouette, off-shoulder or strapless neckline, glamorous red-carpet vibe.' },

  { id: 'dress_floral', label: 'ELBİSE (ÇİÇEKLİ)', promptValue: 'Focus on Floral Print Dress: lightweight woven fabric with vibrant all-over floral patterns, midi or maxi length, flowing A-line or fitted waist, short puff sleeves or spaghetti straps, romantic spring-summer feminine aesthetic.' },

  { id: 'dress_knit', label: 'ELBİSE (TRİKO)', promptValue: 'Focus on Knit Dress: soft ribbed or cable knit fabric, body-skimming fitted silhouette, long sleeves, midi length, cozy textured sweater-like appearance, casual winter comfort with elegant stretch.' },

  { id: 'dress_satin', label: 'ELBİSE (SATEN)', promptValue: 'Focus on Satin Slip Dress: glossy smooth satin fabric with fluid drape, minimalist bias-cut silhouette, thin spaghetti straps, cowl or straight neckline, midi length, luxurious lingerie-inspired sensual elegance.' },

  { id: 'dress_shirt', label: 'GÖMLEK ELBİSE', promptValue: 'Focus on Shirt Dress: crisp cotton or poplin fabric, button-down front placket, pointed collar, long sleeves with cuffs, belted waist, knee or midi length, versatile tailored smart-casual silhouette.' },

  { id: 'jumpsuit_denim', label: 'TULUM (KOT)', promptValue: 'Focus on Denim Jumpsuit: sturdy cotton denim fabric, utility-inspired with multiple pockets, relaxed or fitted straight legs, sleeveless or short sleeves, button or zip front, rugged casual workwear aesthetic.' },

  { id: 'jumpsuit', label: 'TULUM', promptValue: 'Focus on Elegant Jumpsuit: tailored one-piece with wide or straight legs, luxurious crepe or silk fabric, deep V-neck or halter, cinched waist, floor-length or cropped, sophisticated modern formal alternative to dresses.' },

  { id: 'kaftan', label: 'KAFTAN', promptValue: 'Focus on Kaftan: loose flowing silhouette in lightweight silk or cotton, intricate embroidered or beaded details on neckline and sleeves, wide kimono-style sleeves, ankle-length, luxurious traditional bohemian resort wear.' },

  { id: 'kimono', label: 'KİMONO', promptValue: 'Focus on Kimono Robe Dress: wide dramatic sleeves, wrapped front with obi-style belt, patterned silk or satin fabric, midi or floor length, elegant layered Japanese-inspired bohemian silhouette.' },

  { id: 'modest_dress', label: 'TESETTÜR ELBİSE', promptValue: 'Focus on Modest Fashion Dress: full-coverage long sleeves and high neckline, flowing A-line or maxi silhouette, elegant woven fabrics like chiffon or crepe, subtle details, sophisticated conservative feminine aesthetic.' },

  { id: 'overalls', label: 'SALOPET', promptValue: 'Focus on Dungarees/Overalls: durable denim or twill fabric, front bib pocket with straps, relaxed straight or tapered legs, side buttons or zip, casual playful utility-inspired silhouette.' },

  { id: 'wedding_dress', label: 'GELİNLİK', promptValue: 'Focus on Bridal Wedding Dress: white or ivory lace tulle or satin, intricate beading embroidery appliques, ball gown or mermaid silhouette, train optional, strapless or illusion neckline, romantic timeless elegant bridal aesthetic.' },
  { id: 'takchita_classic', label: 'KLASİK TAKCHİTA', promptValue: 'Focus on classic Moroccan Takchita: two-layered luxurious long flowing dress, inner layer fitted, outer layer open-front with ornate belt cinching waist, intricate gold sfifa embroidery trim precisely along front edges, collar, cuffs, hem and belt, modest full coverage, elegant traditional silhouette.' },
  { id: 'takchita_belted', label: 'KEMERLİ TAKCHİTA', promptValue: 'Focus on belted Moroccan Takchita: floor-length elegant dress with prominent decorative gold belt at waist, subtle yet refined gold embroidery borders only on sleeve cuffs, hem, front opening edges and collar, plain rich fabric body, modest long sleeves, traditional luxurious vibe.' },
  { id: 'moroccan_kaftan', label: 'FAS KAFTANI', promptValue: 'Focus on traditional Moroccan Kaftan: modest ankle-length loose-flowing one-piece dress, optional hood, long sleeves, front opening with gold embroidered strips along seams, cuffs, hem and central front, simple clean design emphasizing fabric quality and subtle elegance.' },
  { id: 'takchita_minimal', label: 'MİNİMAL TAKCHİTA', promptValue: 'Focus on minimal Moroccan Takchita: plain smooth fabric long floor-length dress, two-layer style with thin ornate belt, very minimal gold embroidery restricted to narrow borders on cuffs, hem, front edges and belt area only, no heavy patterns, clean modest silhouette.' },
  { id: 'djellaba_embroidered', label: 'İŞLEMELİ DJELLABA', promptValue: 'Focus on embroidered Moroccan Djellaba: long hooded loose robe-style dress, full-length flowing, simple gold embroidery trim limited to chest area, sleeve edges, hem and front seams, modest coverage, traditional relaxed fit with clean lines.' },

  // --- İÇ GİYİM & EV GİYİM (LINGERIE & LOUNGEWEAR) ---
  { 
    id: 'babydoll', 
    label: 'BABYDOLL', 
    promptValue: 'Focus on Babydoll style, delicate sheer mesh fabric with intricate floral lace overlay, empire waistline, satin ribbon details, flared hem, soft romantic lighting, high-quality texture rendering.' 
  },
  { 
    id: 'bathrobe', 
    label: 'BORNOZ', 
    promptValue: 'Focus on plush Bathrobe style, high-detail terry cloth or waffle weave texture, thick collar, wrapped fit with waist belt, cozy and absorbent appearance, studio lighting to highlight fabric depth.' 
  },
  { 
    id: 'lingerie_set', 
    label: 'İÇ ÇAMAŞIRI TAKIMI', 
    promptValue: 'Focus on matching Lingerie Set, intricate Chantilly lace details, scalloped edges, structured bra cup with underwire, matching panty design, delicate straps, elegant and seductive aesthetic, hyper-realistic fabric texture.' 
  },
  { 
    id: 'nightgown', 
    label: 'GECELİK', 
    promptValue: 'Focus on elegant Nightgown style, flowing silhouette, soft modal or viscose fabric drape, subtle V-neck or lace trim neckline, relaxed fit for sleeping, comfortable yet chic, high-resolution textile details.' 
  },
  { 
    id: 'pajama_crewneck', 
    label: 'PİJAMA (SWEATSHIRT TARZI)', 
    promptValue: 'Focus on a cozy Sweatshirt-Style Pajama Set. Featuring a classic ribbed crew neck (bisiklet yaka) long-sleeve top and matching jogger-style trousers. Crafted from soft cotton jersey or interlock fabric with a matte finish. Rib-knit detailing on the neckline, cuffs, and ankles for a snug and comfortable fit. Youthful and playful loungewear aesthetic, high-quality textile rendering, emphasizing the soft fabric drape and cozy feel. Professional studio lighting.' 
  },
  { 
    id: 'pajama_satin', 
    label: 'PİJAMA (SATEN)', 
    promptValue: 'Focus on premium Satin Pajama Set, high-gloss silk-like texture, distinct contrast piping, button-down shirt with notch lapel, loose-fitting trousers, luxurious sheen, photorealistic reflections and fabric folds.' 
  },
{ 
    id: 'pajama_set', 
    label: 'PİJAMA TAKIMI', 
    promptValue: 'Focus on a Classic Two-Piece Pajama Set. Featuring a traditional button-down long-sleeve top with a structured notch lapel and elegant contrast piping along the collar and cuffs. Matching straight-leg trousers with an elasticated waistband. Crafted from premium breathable combed cotton with a soft matte finish. Sharp focus on high-end tailoring, clean seam details, and textile weave. Timeless loungewear aesthetic, professional studio presentation.' 
  },
  { 
    id: 'pajama_polar', 
    label: 'PİJAMA (POLAR/KIŞLIK)', 
    promptValue: 'Focus on Winter Polar Fleece Pajama Set, high-loft plush texture, thermal insulating fabric appearance, soft velvety surface, ribbed cuffs and hem, cozy relaxed fit, ultra-warm aesthetic, macro detail on fuzzy fabric fibers, studio lighting to emphasize softness and warmth.' 
  },
  { 
    id: 'robe_silk', 
    label: 'SABAHLIK (İPEK)', 
    promptValue: 'Focus on luxury Silk Robe/Dressing Gown, liquid silk appearance with rich draping, wide kimono-style sleeves, sash waist tie, glossy finish, sophisticated morning wear, cinematic lighting highlighting material smoothness.' 
  },

  // --- PLAJ & SPOR (BEACH & ACTIVE) ---
  { id: 'bikini', label: 'BİKİNİ', promptValue: 'Focus on Bikini: classic two-piece swimsuit, triangle or bandeau top with tie-side or halter straps, low-rise bottom with minimal coverage, stretchy quick-dry swim fabric, vibrant summery beach aesthetic.' },
  { 
  id: 'tesettur_mayo', 
  label: 'TESETTÜR MAYO', 
  promptValue: 'Focus on Tesettür Mayo / Burkini (Modern Style): tam kapalı uzun kollu üst + dar paça veya bol paça pantolon + entegre bone/hood, genellikle 2-3 parça takım, fermuar detaylı yaka veya ön açıklık, bel stoperi/ayarlanabilir bağlama, UV korumalı hızlı kuruyan su itici kumaş, hafif likralı polyester-spandex karışımı, vücuda yapışmayan rahat kesim, modern spor-şık çizgiler, sade renkler veya zarif grafik/desen detayları, hem plaj hem havuz için konforlu ve şık tesettürlü yüzme silueti.' 
},

{ 
  id: 'tesettur_mayo_modern', 
  label: 'MODERN TESETTÜR MAYO', 
  promptValue: 'Focus on Modern Tesettür Mayo: uzun kollu atlet kesim veya tunik tarzı üst + yüksek bel tayt/pantolon + kaymayan tesettür bone, 2-3 parça spor şık takım, fermuarlı yaka veya balıkçı yaka detayı, yan cepli veya stoperli modeller, ultra hafif nefes alabilen hızlı kuruyan kumaş, UV korumalı, vücuda yapışmayan ama formunu koruyan kesim, pastel tonlar + grafik desenler veya monokrom spor şık tarz, genç ve dinamik tesettürlü plaj/havuz görünümü.' 
},
{ 
  id: 'monokini_cutout', 
  label: 'MONOKİNİ (KESİM DETAYLI)', 
  promptValue: 'Focus on Cut-out Monokini: tek parça mayo ama yanlarda/göğüs ve karın bölgesinde cesur kesik detaylar, bağlama ipleri veya zincir aksesuarlar, yüksek bel veya düşük bel seçenekleri, yüksek bacak kesimi, parlak veya mat likralı kumaş, iddialı ve seksi modern plaj görünümü, bronz tenle uyumlu canlı veya metalik tonlar.' 
},

{ 
  id: 'plunge_onepiece', 
  label: 'DERİN YAKA MAYO', 
  promptValue: 'Focus on Deep Plunge One-Piece Swimsuit: tek parça mayo, çok derin V yaka dekolteli, sırtı açık veya çapraz askılı modeller, orta-yüksek bacak kesimi, sıkı toparlayıcı kumaş, göğüs bölgesinde hafif push-up destek, şık ve feminen plaj/havuz silueti, siyah, zümrüt yeşili, bordo gibi derin tonlar veya hayvan deseni.' 
},

{ 
  id: 'ruched_onepiece', 
  label: 'BÜZÜLMELİ MAYO', 
  promptValue: 'Focus on Ruched One-Piece Swimsuit: tek parça mayo, göbek ve yanlarda stratejik büzgü/büzgülü detaylar, vücudu toparlayıcı ve kamufle edici kesim, orta boy bacak kesimi, yumuşak dokulu mat veya hafif parlak kumaş, zarif ve rahat feminen görünüm, pastel renkler, çiçekli desenler veya düz renk.' 
},

{ 
  id: 'high_neck_onepiece', 
  label: 'YÜKSEK YAKA MAYO', 
  promptValue: 'Focus on High Neck One-Piece Swimsuit: yüksek balıkçı yaka veya choke-neck detay, sırtı açık veya racerback, yüksek bacak kesimi veya klasik orta kesim, güçlü toparlama özelliği olan sıkı kumaş, spor-şık ve sofistike plaj görünümü, monokrom renkler veya ince şerit/minimal desenler.' 
},

{ 
  id: 'retro_onepiece', 
  label: 'RETRO MAYO', 
  promptValue: 'Focus on Vintage/Retro One-Piece Swimsuit: 50’ler-60’lar esintili yüksek bel kesim, sweetheart veya kare yaka, düşük bacak kesimi, balenli göğüs desteği, pin-up tarzı siluet, mat pamuksu veya hafif parlak retro kumaş, polka dot, çiçek desenleri, cherry red, turkuaz, limon sarısı gibi canlı klasik renkler.' 
},

{ 
  id: 'sporty_onepiece', 
  label: 'SPOR MAYO', 
  promptValue: 'Focus on Sporty One-Piece Swimsuit: atletik tek parça mayo, yüksek yaka veya yuvarlak yaka, racerback veya geniş omuz askıları, orta-yüksek bacak kesimi, hızlı kuruyan yüksek elastik kumaş, UV korumalı, hareket özgürlüğü sunan kesim, koyu spor renkler + neon aksan veya tamamen monokrom atletik stil.' 
},


  { id: 'burkini', label: 'HAŞEMA', promptValue: 'Focus on Burkini/Modest Swimwear: full-coverage long-sleeve top and pants set with attached hood, loose relaxed fit, lightweight quick-dry sport fabric, modest conservative active swim silhouette.' },

  { id: 'pareo', label: 'PAREO', promptValue: 'Focus on Pareo/Beach Cover-up: sheer lightweight chiffon or sarong fabric, rectangular wrap tied at waist or chest, flowing draped silhouette, tropical vibrant patterns, casual resort beach layer.' },

  { id: 'sports_bra', label: 'SPOR SÜTYENİ', promptValue: 'Focus on Sports Bra: high-impact supportive compression fit, racerback or cross straps, moisture-wicking stretch fabric, medium to high support, athletic seamless design with bold colors.' },

  { id: 'swimsuit', label: 'MAYO', promptValue: 'Focus on One-Piece Swimsuit: sleek form-fitting design, high-cut legs or moderate coverage, scoop or V-neckline, quick-dry nylon-spandex fabric, elegant minimalist swim silhouette.' },

  { id: 'tennis_skirt', label: 'TENİS ETEĞİ', promptValue: 'Focus on Tennis Skirt: short pleated mini skirt with built-in shorts, lightweight performance fabric, flared hem with sharp pleats, elastic waistband, sporty preppy athletic aesthetic.' },

  { id: 'tracksuit', label: 'EŞOFMAN TAKIMI', promptValue: 'Focus on Tracksuit Set: matching zip-up jacket and pants, shiny nylon or soft cotton fleece, ribbed cuffs and hem, side stripes optional, relaxed athletic streetwear silhouette.' },

  { id: 'yoga_set', label: 'YOGA TAKIMI', promptValue: 'Focus on Yoga Set: coordinated high-waisted seamless leggings and cropped sports bra or tank, buttery-soft stretch nylon-spandex, compressive supportive fit, minimalist activewear design.' },
 
   { 
  id: 'sheer_chiffon_bolero', 
  label: 'ŞİFON BOLERO', 
  promptValue: 'Focus on Sheer Chiffon Beach Bolero: kısa kol veya 3/4 kol, önden bağlamalı veya açık ön, bele kadar gelen crop uzunluk, ultra hafif şeffaf şifon kumaş, akıcı ve havadar drape, tropikal çiçek desenleri veya düz pastel tonlar, bikini üstüne zarif katman, feminen ve romantik plaj görünümü, hafif rüzgarda uçuşan siluet.' 
},

{ 
  id: 'crochet_bolero', 
  label: 'DANTEL ÖRGÜ BOLERO', 
  promptValue: 'Focus on Crochet Lace Bolero Shrug: kısa kollu veya kolsuz, açık dantel örgü detayı, pamuklu veya hafif likralı ince iplik, önden açık veya tek düğmeli, crop kesim bele kadar, vintage-romantik hava, beyaz, krem, bej veya pastel renkler, bikini veya mayo üstüne mükemmel yazlık katman, boho-şık plaj stili.' 
},

{ 
  id: 'tie_front_bolero', 
  label: 'ÖNDEN BAĞLAMALI BOLERO', 
  promptValue: 'Focus on Tie-Front Short Bolero: kısa kollu veya puff sleeve, önden uzun bağlama ipleriyle bağlanan asimetrik veya simetrik tasarım, hafif şifon veya mesh kumaş, crop uzunluk, omuzları ve sırtı hafif örten zarif detay, canlı renkler veya monokrom siyah/beyaz, modern ve seksi plaj cover-up, bikiniyle çok şık duran feminen siluet.' 
},

{ 
  id: 'mesh_bolero_modern', 
  label: 'MODERN MESH BOLERO', 
  promptValue: 'Focus on Modern Mesh Bolero Shrug: kısa veya 3/4 kol, ince file/mesh kumaş, minimal dikişli kesim, önden açık veya fermuarlı, crop bel hizası, spor-şık ve genç stil, neon aksanlar veya metalik iplik detayları, siyah, beyaz veya pastel tonlar, mayo/bikini üstüne dinamik ve trendy katman, yaz festivali/plaj vibe.' 
},

{ 
  id: 'knit_bolero', 
  label: 'ÖRGÜ BOLERO', 
  promptValue: 'Focus on Lightweight Knit Bolero: ince yazlık örgü, kısa kollu veya kolsuz, açık dantelvari desenler, pamuk-viscose karışımı yumuşak doku, bele kadar kısa kesim, doğal tonlar (bej, krem, açık mavi), rahat ve bohem plaj görünümü, bikini üstüne serin ve şık bir dokunuş, hafif dalgalı siluet.' 
}, 

  // --- TAKIM FORMALAR (JERSEYS) ---
  { id: 'jersey_basketball', label: 'FORMA (BASKETBOL)', promptValue: 'Focus on Basketball Jersey: sleeveless tank top design, breathable mesh polyester fabric, oversized loose fit, bold team numbers and logos on front and back, ribbed armholes and neckline, athletic sporty streetwear silhouette.' },

  { id: 'jersey_custom', label: 'FORMA (TASARIM)', promptValue: 'Focus on Custom Designed Sport Jersey: modern sublimated patterns and graphics, short sleeves or sleeveless, lightweight moisture-wicking performance fabric, tailored athletic fit, vibrant colors and unique dynamic details, personalized team aesthetic.' },

  { id: 'jersey_football', label: 'FORMA (FUTBOL)', promptValue: 'Focus on Football Soccer Jersey: short-sleeve V-neck or crewneck design, lightweight shiny polyester fabric with ventilation panels, slim athletic fit, club or national team stripes and emblems, breathable performance silhouette.' },

  { id: 'jersey_volleyball', label: 'FORMA (VOLEYBOL)', promptValue: 'Focus on Volleyball Jersey: fitted short-sleeve or sleeveless cut, stretchy spandex-polyester blend fabric for mobility, contrasting side panels, bold numbers and logos, compressive supportive athletic performance silhouette.' },
  
  // --- AKSESUARLAR (GİYSİ TAMAMLAYICI) ---
{ 
    id: 'scarf', 
    label: 'EŞARP/ŞAL', 
    promptValue: 'Focus strictly on the Scarf accessory. Premium Silk Twill or fine Cotton Voile texture, hand-rolled hem edges (roulotté), vibrant and crisp pattern rendering. Displayed with a fluid drape to show material quality, or as a flat lay design. Isolate the item from distracting full-body outfits, macro focus on fabric weave and print clarity.' 
  },
  { 
    id: 'shawl_evening', 
    label: 'ŞAL (ABİYE)', 
    promptValue: 'Focus on Luxury Evening Stole/Wrap. Delicate Sheer Chiffon, Organza, or Pashmina fabric. Details of metallic threads, sequins, or fine embroidery. Translucent and ethereal texture, soft elegant draping suited for formal wear. Cinematic lighting to catch the shimmer of the fabric. Focus on the accessory structure rather than a full fashion model.' 
  },
  ];
export const OUTFIT_WEAR_VARIANTS: Record<string, OptionItem[]> = {
'tshirt': [
    { id: 'tucked_neat', label: 'TAM İÇERİ (DÜZGÜN)', promptValue: 'TRANSFORMATION TASK: Style t-shirt fully tucked into waistband, clean and professional silhouette, no bunching.' },
    { id: 'french_tuck', label: 'YARIM İÇERİ (FRENCH TUCK)', promptValue: 'TRANSFORMATION TASK: Style t-shirt with a "French Tuck" (front tucked in, back loose), effortless casual chic vibe.' },
    { id: 'loose_oversize', label: 'SALAŞ & BOL', promptValue: 'TRANSFORMATION TASK: Style t-shirt as loose fit, untucked, draped over hips, relaxed streetwear aesthetic.' },
    { id: 'knot_front', label: 'ÖNDEN DÜĞÜMLÜ', promptValue: 'TRANSFORMATION TASK: Tie the t-shirt hem in a knot at the front waist, creating a cropped look.' },
    { id: 'sleeves_rolled', label: 'KOLLAR KIVRIK', promptValue: 'TRANSFORMATION TASK: Roll up the t-shirt sleeves to the shoulder, adding a rugged/retro touch.' },
    { id: 'layered_longsleeve', label: 'İÇİNE UZUN KOL', promptValue: 'TRANSFORMATION TASK: Layer a long-sleeve shirt underneath the t-shirt, grunge/skater aesthetic.' },
  ],
  'shirt': [
    { id: 'buttoned_up', label: 'TAM İLİKLİ (RESMİ)', promptValue: 'TRANSFORMATION TASK: Button the shirt all the way to the top collar, sharp and formal look.' },
    { id: 'unbuttoned_deep', label: 'DERİN YAKA AÇIK', promptValue: 'TRANSFORMATION TASK: Leave top 3 buttons open, exposing chest/neck, relaxed summer vibe.' },
    { id: 'sleeves_rolled', label: 'KOLLAR SIVALI', promptValue: 'TRANSFORMATION TASK: Roll sleeves up to the elbows neatly, business casual aesthetic.' },
    { id: 'off_shoulder', label: 'DÜŞÜK OMUZ', promptValue: 'TRANSFORMATION TASK: Pull the shirt collar back to expose shoulders, avant-garde styling.' },
    { id: 'tie_waist', label: 'BEL BAĞLAMALI', promptValue: 'TRANSFORMATION TASK: Unbutton bottom and tie shirt tails at the waist, cropped summer look.' },
  ],
  'sweatshirt': [
    { id: 'hood_up', label: 'KAPÜŞON TAKILI', promptValue: 'TRANSFORMATION TASK: Wear hoodie with hood up over head, mysterious and cozy vibe.' },
    { id: 'shoulder_drape', label: 'OMUZDA AKSESUAR', promptValue: 'TRANSFORMATION TASK: Drape the sweatshirt over the shoulders like a scarf (preppy style), tying sleeves in front.' },
    { id: 'cropped_raw', label: 'KESİK ETEK (CROP)', promptValue: 'TRANSFORMATION TASK: Style as a raw-hem cropped sweatshirt, showing midriff.' },
    { id: 'oversized_baggy', label: 'AŞIRI BOL (BAGGY)', promptValue: 'TRANSFORMATION TASK: Maximize volume, sleeves covering hands, heavy streetwear aesthetic.' },
  ],
  'blouse': [
    { id: 'bow_neck', label: 'YAKA FİYONKLU', promptValue: 'TRANSFORMATION TASK: Tie the neck ribbons into a large, elegant pussy-bow.' },
    { id: 'tucked_skirt', label: 'ETEĞE SOKULU', promptValue: 'TRANSFORMATION TASK: Tuck blouse neatly into a high-waisted skirt, emphasizing waistline.' },
    { id: 'sheer_camisole', label: 'İÇ ASKILI GÖRÜNÜM', promptValue: 'TRANSFORMATION TASK: Render blouse as semi-sheer with a visible camisole underneath.' },
  ],
  'knitwear': [ // Kazak/Triko
    { id: 'off_one_shoulder', label: 'TEK OMUZ DÜŞÜK', promptValue: 'TRANSFORMATION TASK: Pull sweater off one shoulder, asymmetric slouchy look.' },
    { id: 'turtleneck_folded', label: 'BOĞAZ KATLANMIŞ', promptValue: 'TRANSFORMATION TASK: Fold the turtleneck collar neatly downwards.' },
    { id: 'turtleneck_scrunched', label: 'BOĞAZ BÜZÜŞMÜŞ', promptValue: 'TRANSFORMATION TASK: Let the turtleneck bunch up naturally without folding, cozy look.' },
  ],

  // --- DIŞ GİYİM STİLLERİ ---
  'blazer': [
    { id: 'shoulders_cape', label: 'OMUZDA (PELERİN GİBİ)', promptValue: 'TRANSFORMATION TASK: Drape the blazer over the shoulders without putting arms in sleeves (cape style), chic fashion editor look.' },
    { id: 'belted_waist', label: 'KEMERLE SIKILMIŞ', promptValue: 'TRANSFORMATION TASK: Cinch the blazer at the waist with a thick leather belt, creating an hourglass shape.' },
    { id: 'sleeves_pushed', label: 'KOLLAR YUKARI İTİLMİŞ', promptValue: 'TRANSFORMATION TASK: Push blazer sleeves up to elbows, creating distinct fabric folds, dynamic business look.' },
  ],
  'coat': [ // Kaban/Trençkot
    { id: 'collar_popped', label: 'YAKA KALIK', promptValue: 'TRANSFORMATION TASK: Pop the coat collar up, protecting neck, cool detective/mysterious vibe.' },
    { id: 'belt_tied', label: 'KUŞAK BAĞLI', promptValue: 'TRANSFORMATION TASK: Tie the coat belt tightly at the waist, closed silhouette.' },
    { id: 'open_flowing', label: 'ÖNÜ AÇIK & UÇUŞAN', promptValue: 'TRANSFORMATION TASK: Leave coat completely open, fabric flowing backwards as if walking, dynamic motion.' },
  ],
  'jacket': [ // Deri/Kot Ceket
    { id: 'half_zipped', label: 'YARIM FERMUAR', promptValue: 'TRANSFORMATION TASK: Zip jacket halfway up, showing inner layer.' },
    { id: 'shoulder_slung', label: 'TEK OMUZDA ASILI', promptValue: 'TRANSFORMATION TASK: Hold jacket slung over one shoulder via one finger/hook.' },
  ],

  // --- ALT GİYİM STİLLERİ ---
  'jeans': [
    { id: 'cuffed_hem', label: 'PAÇA KIVRIK', promptValue: 'TRANSFORMATION TASK: Roll up the jean hems twice, showing ankles/socks.' },
    { id: 'ripped_knees', label: 'DİZ YIRTIKLARI', promptValue: 'TRANSFORMATION TASK: Add distress/rips specifically at the knees.' },
    { id: 'paint_splatter', label: 'BOYA LEKELİ', promptValue: 'TRANSFORMATION TASK: Add artistic paint splatters to the denim texture, atelier artist look.' },
    { id: 'belt_statement', label: 'BÜYÜK TOKALI KEMER', promptValue: 'TRANSFORMATION TASK: Accessorize with a large buckle western/designer belt.' },
  ],
  'pants': [ // Kumaş Pantolon
    { id: 'pleated_front', label: 'PİLELİ BEL', promptValue: 'TRANSFORMATION TASK: Emphasize front pleats tailoring at the waistband.' },
    { id: 'chain_accessory', label: 'ZİNCİR AKSESUAR', promptValue: 'TRANSFORMATION TASK: Add a wallet chain hanging from the belt loop, edgy detail.' },
    { id: 'ankle_length', label: 'BİLEK BOYU', promptValue: 'TRANSFORMATION TASK: Tailor pants to ankle length (cropped trousers), showing shoes clearly.' },
  ],
  'skirt': [
    { id: 'slit_thigh', label: 'DERİN YIRTMAÇ', promptValue: 'TRANSFORMATION TASK: Add a high thigh slit to the skirt, elegant leg reveal.' },
    { id: 'stockings_sheer', label: 'İNCE ÇORAPLI', promptValue: 'TRANSFORMATION TASK: Style with sheer black pantyhose underneath.' },
    { id: 'fishnet', label: 'FİLE ÇORAPLI', promptValue: 'TRANSFORMATION TASK: Style with fishnet tights underneath, grunge/edgy look.' },
  ],

  // --- ELBİSE & TULUM STİLLERİ ---
  'dress': [
    { id: 'backless', label: 'SIRT DEKOLTESİ', promptValue: 'TRANSFORMATION TASK: Focus on a low back cut/backless design.' },
    { id: 'jacket_layered', label: 'CEKETLİ KOMBİN', promptValue: 'TRANSFORMATION TASK: Layer a leather or denim jacket over the dress.' },
    { id: 'sneaker_combo', label: 'SPOR AYAKKABI İLE', promptValue: 'TRANSFORMATION TASK: Style the dress with chunky sneakers instead of heels, modern casual mix.' },
  ],
  'wedding_dress': [
    { id: 'veil_long', label: 'UZUN DUVAK', promptValue: 'TRANSFORMATION TASK: Add a cathedral length sheer veil trailing behind.' },
    { id: 'tiara', label: 'TAÇLI', promptValue: 'TRANSFORMATION TASK: Accessorize with a sparkling crystal tiara/crown.' },
    { id: 'gloves', label: 'OPERA ELDİVENİ', promptValue: 'TRANSFORMATION TASK: Add long satin gloves reaching past the elbows.' },
  ],

  // --- TESETTÜR & MUHAFAZAKAR GİYİM ---
  'shawl': [
    { id: 'hijab_tight', label: 'SIKI BAĞLAMA (BONE)', promptValue: 'TRANSFORMATION TASK: Apply a neat, tight hijab wrap with visible underscarf (bone), sportive/practical look.' },
    { id: 'hijab_drapey', label: 'SALAŞ & DÖKÜMLÜ', promptValue: 'TRANSFORMATION TASK: Apply a loose, voluminous wrap with folds draping over the chest, soft aesthetic.' },
    { id: 'turban_style', label: 'TURBAN MODELİ', promptValue: 'TRANSFORMATION TASK: Wrap as a turban, exposing the neck and earrings, modern chic.' },
    { id: 'neck_bow', label: 'BOYUNDA FİYONK', promptValue: 'TRANSFORMATION TASK: Wrap scarf around head and tie ends in a bow at the side of the neck.' },
  ],
  'ferace': [
    { id: 'batwing', label: 'YARASA KOL', promptValue: 'TRANSFORMATION TASK: Style ferace with wide batwing sleeves, very loose silhouette.' },
    { id: 'belted', label: 'KUŞAKLI', promptValue: 'TRANSFORMATION TASK: Add a matching fabric belt to cinch the ferace slightly.' },
    { id: 'open_front', label: 'ÖNÜ AÇIK (İÇ GÖSTER)', promptValue: 'TRANSFORMATION TASK: Leave ferace unzipped/open, revealing the outfit underneath.' },
  ],

  // --- SPOR & FORMA ---
  'jersey_football': [
    { id: 'tucked_shorts', label: 'ŞORTA SOKULU', promptValue: 'TRANSFORMATION TASK: Tuck the jersey neatly into sports shorts, professional athlete look.' },
    { id: 'undershirt', label: 'İÇLİKLİ', promptValue: 'TRANSFORMATION TASK: Wear a tight long-sleeve compression shirt underneath the jersey.' },
    { id: 'captain_band', label: 'KAPTAN BANDI', promptValue: 'TRANSFORMATION TASK: Add a captain armband to the left arm.' },
  ],
  'tracksuit': [
    { id: 'zip_ankle', label: 'PAÇA FERMUARI AÇIK', promptValue: 'TRANSFORMATION TASK: Unzip the ankle zippers of the track pants, loose fit over shoes.' },
    { id: 'socks_over', label: 'ÇORAP ÜSTTE', promptValue: 'TRANSFORMATION TASK: Tuck track pants into high sport socks, distinct street style.' },
  ],
};
export const OUTFIT_VIEWS: OptionItem[] = [
{ 
      id: 'full', 
      label: 'TAM BOY', 
      promptValue: 'Full body shot, framing from head to toe, showcasing the complete outfit and footwear.' 
    },
    { 
      id: 'knees', 
      label: 'AMERİKAN (DİZ ÜSTÜ)', 
      promptValue: 'American shot (Medium Long Shot), framing from the knees up, focusing on the outfit pairing.' 
    },
    { 
      id: 'waist', 
      label: 'BEL PLANI', 
      promptValue: 'Medium shot, framing from the waist up, focusing on the top garment and accessories.' 
    },
    { 
      id: 'portrait', 
      label: 'PORTRE', 
      promptValue: 'Portrait shot, framing the face and shoulders, high emphasis on facial features and neckline.' 
    },
    { 
      id: 'close_up', 
      label: 'DETAY (MAKRO)', 
      promptValue: 'Extreme close-up macro shot, focusing purely on texture, fabric details, jewelry, or makeup.' 
    },
    { 
      id: 'cinematic', 
      label: 'SİNEMATİK / SANATSAL', 
      promptValue: 'Cinematic composition, dynamic lighting, artistic camera angle, movie scene aesthetic.' 
    },
    { 
      id: 'back', 
      label: 'ARKADAN GÖRÜNÜM', 
      promptValue: 'Rear view shot, camera positioned behind the subject, showcasing back details of the clothing.' 
    },
    { 
      id: 'selfie', 
      label: 'SELFIE / POV', 
      promptValue: 'Selfie angle shot from phone camera perspective, casual social media aesthetic.' 
    },
    { 
  id: 'lower_half', 
  label: 'ALT YARIM', 
  promptValue: 'Lower half shot, framing from the waist down, focusing on pants, leggings, skirt, or lower body outfit and footwear.' 
}
];

// --- GÖRÜNÜM VARYASYONLARI (POSES & COMPOSITION) ---
export const OUTFIT_VIEW_VARIANTS: Record<string, OptionItem[]> = {
    'full': [
        { id: 'standing_studio', label: 'STÜDYO DURUŞU', promptValue: 'studio photography pose, standing straight, neutral background interaction, catalog look' },
        { id: 'walking_towards', label: 'KAMERAYA YÜRÜYÜŞ', promptValue: 'dynamic full body shot walking towards the camera, hair flowing, street style photography' },
        { id: 'low_angle_hero', label: 'ALT AÇI (HERO)', promptValue: 'low angle shot from ground looking up, imposing silhouette, legs look longer, heroic perspective' },
        { id: 'leaning_wall', label: 'DUVARA YASLANMA', promptValue: 'leaning casually against a wall, one leg bent, relaxed full body pose' },
        { id: 'sitting_floor', label: 'YERDE OTURMA', promptValue: 'sitting on the ground/floor, legs crossed or extended, high fashion editorial pose' },
        { id: 'wide_step', label: 'GENİŞ ADIM', promptValue: 'caught in motion taking a wide step, side view full body, dynamic fabric movement' },
    ],
    
    'knees': [ // American Shot
        { id: 'hands_pockets', label: 'ELLER CEPTE', promptValue: 'medium shot with hands in pockets, cool and casual attitude' },
        { id: 'crossed_arms', label: 'KOLLAR BAĞLI', promptValue: 'arms crossed over chest, confident and professional stance' },
        { id: 'holding_bag', label: 'ÇANTA TUTUŞU', promptValue: 'posing while holding a handbag/tote, showcasing the accessory' },
        { id: 'coffee_cup', label: 'KAHVE İLE', promptValue: 'holding a takeaway coffee cup, urban lifestyle vibe' },
        { id: 'side_glance', label: 'YAN BAKIŞ', promptValue: 'body facing front but looking to the side, candid style' },
    ],

    'waist': [ // Bel Planı
        { id: 'hand_on_hip', label: 'EL BELDE', promptValue: 'one hand resting on the hip, accentuating the waistline' },
        { id: 'fixing_hair', label: 'SAÇ DÜZELTME', promptValue: 'candid shot with hands touching hair, natural movement' },
        { id: 'mirror_reflection', label: 'AYNA YANSIMASI', promptValue: 'shot captured through a mirror reflection, creating depth' },
    ],

    'portrait': [
        { id: 'straight_on', label: 'DÜZ BAKIŞ', promptValue: 'looking directly into the lens, intense eye contact, ID photo framing but artistic' },
        { id: 'profile_side', label: 'YAN PROFİL', promptValue: 'perfect side profile view, highlighting jawline and ear accessories' },
        { id: 'looking_down', label: 'AŞAĞI BAKIŞ', promptValue: 'looking down slightly, showing eyeshadow and eyelashes, moody atmosphere' },
        { id: 'over_shoulder', label: 'OMUZ ÜSTÜ', promptValue: 'looking back over the shoulder at the camera, alluring pose' },
        { id: 'windy_hair', label: 'RÜZGARLI SAÇ', promptValue: 'hair blowing in the wind across the face, dynamic portrait' },
    ],

    'cinematic': [
        { id: 'dutch_angle', label: 'EĞİK AÇI (DUTCH)', promptValue: 'Dutch angle (tilted horizon), creating tension and dynamic energy' },
        { id: 'fish_eye', label: 'BALIK GÖZÜ (0.5x)', promptValue: 'wide angle fisheye lens distortion, 90s music video aesthetic, central bulge' },
        { id: 'overhead_drone', label: 'TEPEDEN (DRONE)', promptValue: 'high angle overhead shot looking vertically down (bird’s-eye view)' },
        { id: 'motion_blur', label: 'HAREKET BULANIKLIĞI', promptValue: 'slight motion blur in the background, subject in sharp focus, rushing city vibe' },
        { id: 'silhouette', label: 'SİLÜET (GÖLGE)', promptValue: 'backlit silhouette shot, dark subject against bright background, mystery focus' },
    ],

    'close_up': [
        { id: 'fabric_texture', label: 'KUMAŞ DOKUSU', promptValue: 'macro focus on fabric weave, stitching, and material quality' },
        { id: 'jewelry_focus', label: 'TAKI ODAĞI', promptValue: 'focus on necklace, earrings, or rings, blurred background' },
        { id: 'shoes_feet', label: 'AYAKKABI', promptValue: 'close up shot at ground level focusing solely on shoes/sneakers' },
        { id: 'makeup_eye', label: 'GÖZ MAKYAJI', promptValue: 'extreme close up on eyes and makeup details' },
    ],

    'back': [
        { id: 'walking_away', label: 'UZAKLAŞMA', promptValue: 'subject walking away from camera, showing movement of the back of the outfit' },
        { id: 'looking_back', label: 'GERİYE BAKIŞ', promptValue: 'standing with back to camera but turning head to look at the lens' },
        { id: 'hands_up', label: 'ELLER YUKARI', promptValue: 'back view with arms raised or adjusting hair, relaxed pose' },
    ],

    'selfie': [ // Yeni Kategori
        { id: 'mirror_full', label: 'BOY AYNASI', promptValue: 'full body mirror selfie holding a smartphone, showing the phone in the shot' },
        { id: 'high_angle_pov', label: 'ÜSTTEN (GEN Z)', promptValue: 'high angle 0.5x selfie shot, big head small body distortion, trendy aesthetic' },
        { id: 'car_selfie', label: 'ARABA İÇİ', promptValue: 'selfie taken inside a car with sun visor lighting' },
    ],
    'lower_half': [
  { id: 'standing_front', label: 'DÜZ DURUŞ', promptValue: 'lower half shot standing straight front view, focusing on pants/leggings fit and footwear' },
  { id: 'wide_stance', label: 'GENİŞ DURUŞ', promptValue: 'wide stance pose with legs apart, emphasizing garment silhouette and fabric flow' },
  { id: 'one_leg_up', label: 'TEK BACAK YUKARI', promptValue: 'one foot resting on a step or ledge, dynamic lower body pose highlighting length' },
  { id: 'walking_motion', label: 'YÜRÜYÜŞ HAREKETİ', promptValue: 'captured mid-stride walking, showing movement in pants/skirt and shoes' },
  { id: 'side_view', label: 'YAN GÖRÜNÜM', promptValue: 'side profile lower half shot, showcasing garment cut and proportions' },
  { id: 'squatting', label: 'ÇÖMELME', promptValue: 'squatting pose focusing on fabric stretch and lower body fit' },
  { id: 'hands_on_thighs', label: 'ELLER UYUKTA', promptValue: 'hands resting on thighs, casual relaxed lower half stance' },
],
};

// --- ANA YAŞ GRUPLARI (AGE GROUPS) ---
export const OUTFIT_AGES: OptionItem[] = [
     { 
        id: 'teen10', 
        label: '10 Yaş', 
        promptValue: 'a young child, around 10 years old.' 
    },
    { 
        id: 'teen', 
        label: 'GENÇ / TEEN (13-19)', 
        promptValue: 'Teenager model, Gen Z aesthetic, fresh youthful skin with natural texture, approximately 15-18 years old.' 
    },
    { 
        id: 'age20', 
        label: '20\'LER (GENÇ YETİŞKİN)', 
        promptValue: 'Young adult model in their 20s, peak collagen, vibrant and energetic look.' 
    },
    { 
        id: 'age30', 
        label: '30\'LAR (YETİŞKİN)', 
        promptValue: 'Adult model in their 30s, defined facial features, confident and settled look.' 
    },
    { 
        id: 'age40', 
        label: '40\'LAR (OLGUN)', 
        promptValue: 'Mature model in their 40s, sophisticated appearance, skin showing first signs of dignified character lines.' 
    },
    { 
        id: 'age50', 
        label: '50\'LER (ORTA YAŞ)', 
        promptValue: 'Middle-aged model in their 50s, experienced look, distinctive features, possibly greying hair.' 
    },
    { 
        id: 'age60', 
        label: '60\'LAR (KIDEMLİ)', 
        promptValue: 'Senior model in their 60s, elegant aging, visible wrinkles and texture, silver/grey hair potential.' 
    },
    { 
        id: 'age70plus', 
        label: '70+ (BİLGE/İKON)', 
        promptValue: 'Elderly model 70+ years old, deep character lines, frail but stylish, "Advanced Style" aesthetic.' 
    },
];

// --- YAŞ VARYASYONLARI (AGE STYLING & VIBE) ---
export const OUTFIT_AGE_VARIANTS: Record<string, OptionItem[]> = {
    'teen': [
        { id: 'high_school', label: 'KOLEJLİ', promptValue: 'High school student vibe, backpack, sneakers, fresh-faced, minimal makeup.' },
        { id: 'edgy_genz', label: 'ASİ (GEN Z)', promptValue: 'Edgy Gen Z style, colored hair strands, bold attitude, trendy streetwear makeup.' },
        { id: 'dreamy', label: 'MASUM', promptValue: 'Soft, dreamy aesthetic, glowing skin, natural innocence, soft lighting.' },
    ],
    
    'age20': [
        { id: 'early_uni', label: '20 BAŞI (ÜNİVERSİTE)', promptValue: 'Early 20s (20-23), university student look, casual, experimental style, very youthful.' },
        { id: 'late_pro', label: '20 SONU (PROFESYONEL)', promptValue: 'Late 20s (27-29), young professional, sharper styling, business casual vibe.' },
        { id: 'influencer', label: 'INFLUENCER', promptValue: 'Social media influencer aesthetic, heavy glamorous makeup, ring light effect, trendy pose.' },
        { id: 'natural_beauty', label: 'DOĞAL GÜZELLİK', promptValue: 'No-makeup makeup look, freckles visible, raw and authentic 20s texture.' },
    ],

    'age30': [
        { id: 'millennial_minimal', label: 'MİNİMALİST (30\'lar)', promptValue: '30s minimalist aesthetic, clean lines, neutral colors, "Clean Girl/Guy" sophisticated look.' },
        { id: 'fitness', label: 'FİT & ATLETİK', promptValue: 'Athletic 30s body type, healthy glow, toned physique, activewear context.' },
        { id: 'parent_chic', label: 'EBEVEYN ŞIKLIĞI', promptValue: 'Cozy yet stylish parent vibe, comfortable fabrics, warm and approachable expression.' },
        { id: 'corporate', label: 'KURUMSAL', promptValue: 'High-powered corporate look, sharp suit/attire, groomed perfection.' },
    ],

    'age40': [
        { id: 'fine_wine', label: 'YILLANMIŞ ŞARAP', promptValue: 'Aging like fine wine, extremely attractive 40s, charismatic, confident gaze, grooming focus.' },
        { id: 'retouched', label: 'PÜRÜZSÜZ (BOTOX)', promptValue: '40s with cosmetic enhancement aesthetic, very smooth skin, high cheeks, flawless maintenance.' },
        { id: 'rugged', label: 'KARAKTERLİ (DOĞAL)', promptValue: 'Rugged and natural 40s, embracing laugh lines and crows feet, authentic texture.' },
    ],

    'age50': [
        { id: 'silver_fox', label: 'SILVER FOX (GÜMÜŞ)', promptValue: 'Distinguished 50s look with salt-and-pepper or silver hair, stylish and groomed.' },
        { id: 'fashion_editor', label: 'MODA EDİTÖRÜ', promptValue: 'Avant-garde 50s style, bold glasses, eccentric jewelry, authoritative fashion presence.' },
        { id: 'active_aging', label: 'DİNAMİK', promptValue: 'Energetic 50s, outdoorsy, vitality, sun-kissed skin texture.' },
    ],

    'age60': [
        { id: 'classic_grand', label: 'KLASİK', promptValue: 'Classic grandparent look, soft cardigans, pearls/watches, warm and gentle aesthetic.' },
        { id: 'rockstar', label: 'ESKİ TOPRAK (ROCK)', promptValue: 'Aging rockstar vibe, leather, denim, long grey hair, rebellious spirit remaining.' },
        { id: 'sophisticated', label: 'SOFİSTİKE', promptValue: 'Wealthy retired aesthetic, cashmere textures, expensive grooming, timeless elegance.' },
    ],

    'age70plus': [
        { id: 'icon', label: 'MODA İKONU', promptValue: 'Iris Apfel style eccentric fashion icon, oversized accessories, bold colors, celebrating age.' },
        { id: 'frail_artistic', label: 'SANATSAL PORTRE', promptValue: 'Deeply textured artistic portrait, focus on every wrinkle and story in the face, dramatic lighting.' },
    ]
};

export const EXTRA_TOOLS_LIST = [
    { id: 'eraser', label: 'SİLGİ' },
    { id: 'background', label: 'ARKA PLAN' },
    { id: 'sketch', label: 'ESKİZ' },
    { id: 'face', label: 'YÜZ' },
    { id: 'expand', label: 'GENİŞLET' },
];

// --- NEW DATA SETS ---
export const OUTFIT_COLORS: OptionItem[] = [
      { id: 'white', label: 'BEYAZ', promptValue: 'Change color tone to Pure White.' },
      { id: 'black', label: 'SİYAH', promptValue: 'Change color tone to Pure Black.' },
      { id: 'red', label: 'KIRMIZI', promptValue: 'Change color tone to Red.' },
      { id: 'blue', label: 'MAVİ', promptValue: 'Change color tone to Blue.' },
      { id: 'green', label: 'YEŞİL', promptValue: 'Change color tone to Green.' },
      { id: 'yellow', label: 'SARI', promptValue: 'Change color tone to Yellow.' },
      { id: 'orange', label: 'TURUNCU', promptValue: 'Change color tone to Orange.' },
      { id: 'purple', label: 'MOR', promptValue: 'Change color tone to Purple.' },
      { id: 'pink', label: 'PEMBE', promptValue: 'Change color tone to Pink.' },
      { id: 'gray', label: 'GRİ', promptValue: 'Change color tone to Gray.' },

      // --- GENİŞLETİLMİŞ LİSTE (ALFABETİK A-Z) ---
      { id: 'light_blue', label: 'AÇIK MAVİ', promptValue: 'Change color tone to Light Blue.' },
      { id: 'gold', label: 'ALTIN', promptValue: 'Change color tone to Gold.' },
      { id: 'amber', label: 'AMBER', promptValue: 'Change color tone to Amber.' },
      { id: 'anthracite', label: 'ANTRASİT', promptValue: 'Change color tone to Anthracite Grey.' },
      { id: 'army_green', label: 'ASKER YEŞİLİ', promptValue: 'Change color tone to Army Green.' },
      { id: 'azure', label: 'AZUR', promptValue: 'Change color tone to Azure.' },
      { id: 'copper', label: 'BAKIR', promptValue: 'Change color tone to Copper.' },
      { id: 'honey', label: 'BAL RENGİ', promptValue: 'Change color tone to Honey Yellow.' },
      { id: 'baby_blue', label: 'BEBEK MAVİSİ', promptValue: 'Change color tone to Baby Blue.' },
      { id: 'beige', label: 'BEJ', promptValue: 'Change color tone to Beige.' },
      { id: 'burgundy', label: 'BORDO', promptValue: 'Change color tone to Burgundy.' },
      { id: 'bronze', label: 'BRONZ', promptValue: 'Change color tone to Bronze.' },
      { id: 'teal', label: 'CAM GÖBEĞİ', promptValue: 'Change color tone to Teal.' },
      { id: 'pine_green', label: 'ÇAM YEŞİLİ', promptValue: 'Change color tone to Pine Green.' },
      { id: 'chocolate', label: 'ÇİKOLATA', promptValue: 'Change color tone to Chocolate Brown.' },
      { id: 'ecru', label: 'EKRU', promptValue: 'Change color tone to Ecru.' },
      { id: 'electric_blue', label: 'ELEKTRİK MAVİSİ', promptValue: 'Change color tone to Electric Blue.' },
      { id: 'ivory', label: 'FİLDİŞİ', promptValue: 'Change color tone to Ivory.' },
      { id: 'fuchsia', label: 'FUŞYA', promptValue: 'Change color tone to Fuchsia.' },
      { id: 'midnight_blue', label: 'GECE MAVİSİ', promptValue: 'Change color tone to Midnight Blue.' },
      { id: 'rose_gold', label: 'GÜL ALTIN (ROSE)', promptValue: 'Change color tone to Rose Gold.' },
      { id: 'dusty_rose', label: 'GÜL KURUSU', promptValue: 'Change color tone to Dusty Rose.' },
      { id: 'silver', label: 'GÜMÜŞ', promptValue: 'Change color tone to Silver.' },
      { id: 'khaki', label: 'HAKİ', promptValue: 'Change color tone to Khaki.' },
      { id: 'mustard', label: 'HARDAL', promptValue: 'Change color tone to Mustard Yellow.' },
      { id: 'indigo', label: 'İNDİGO', promptValue: 'Change color tone to Indigo.' },
      { id: 'pearl', label: 'İNCİ BEYAZI', promptValue: 'Change color tone to Pearl White.' },
      { id: 'brown', label: 'KAHVERENGİ', promptValue: 'Change color tone to Brown.' },
      { id: 'bone', label: 'KEMİK RENGİ', promptValue: 'Change color tone to Bone White.' },
      { id: 'rust', label: 'KİREMİT', promptValue: 'Change color tone to Rust.' },
      { id: 'charcoal', label: 'KÖMÜR GRİSİ', promptValue: 'Change color tone to Charcoal.' },
      { id: 'cream', label: 'KREM', promptValue: 'Change color tone to Cream.' },
      { id: 'navy', label: 'LACİVERT', promptValue: 'Change color tone to Navy Blue.' },
      { id: 'lavender', label: 'LAVANTA', promptValue: 'Change color tone to Lavender.' },
      { id: 'lilac', label: 'LİLA', promptValue: 'Change color tone to Lilac.' },
      { id: 'lime', label: 'LİMON YEŞİLİ', promptValue: 'Change color tone to Lime Green.' },
      { id: 'magenta', label: 'MACENTA', promptValue: 'Change color tone to Magenta.' },
      { id: 'violet', label: 'MENEKŞE', promptValue: 'Change color tone to Violet.' },
      { id: 'coral', label: 'MERCAN', promptValue: 'Change color tone to Coral.' },
      { id: 'mint', label: 'MİNT YEŞİLİ', promptValue: 'Change color tone to Mint Green.' },
      { id: 'plum', label: 'MÜRDÜM', promptValue: 'Change color tone to Plum.' },
      { id: 'neon_yellow', label: 'NEON SARI', promptValue: 'Change color tone to Neon Yellow.' },
      { id: 'neon_green', label: 'NEON YEŞİL', promptValue: 'Change color tone to Neon Green.' },
      { id: 'pastel_pink', label: 'PASTEL PEMBE', promptValue: 'Change color tone to Pastel Pink.' },
      { id: 'petrol', label: 'PETROL MAVİSİ', promptValue: 'Change color tone to Petrol Blue.' },
      { id: 'platinum', label: 'PLATİN', promptValue: 'Change color tone to Platinum.' },
      { id: 'saffron', label: 'SAFRAN', promptValue: 'Change color tone to Saffron.' },
      { id: 'royal_blue', label: 'SAKS MAVİSİ', promptValue: 'Change color tone to Royal Blue.' },
      { id: 'champagne', label: 'ŞAMPANYA', promptValue: 'Change color tone to Champagne.' },
      { id: 'peach', label: 'ŞEFTALİ', promptValue: 'Change color tone to Peach.' },
      { id: 'hot_pink', label: 'ŞEKER PEMBE', promptValue: 'Change color tone to Hot Pink.' },
      { id: 'cyan', label: 'SİYAN', promptValue: 'Change color tone to Cyan.' },
      { id: 'salmon', label: 'SOMON', promptValue: 'Change color tone to Salmon.' },
      { id: 'seafoam', label: 'SU YEŞİLİ', promptValue: 'Change color tone to Seafoam Green.' },
      { id: 'tan', label: 'TABA', promptValue: 'Change color tone to Tan.' },
      { id: 'taupe', label: 'TAŞ RENGİ', promptValue: 'Change color tone to Taupe.' },
      { id: 'nude', label: 'TEN RENGİ (NUDE)', promptValue: 'Change color tone to Nude.' },
      { id: 'earth', label: 'TOPRAK RENGİ', promptValue: 'Change color tone to Earth Tone.' },
      { id: 'turquoise', label: 'TURKUAZ', promptValue: 'Change color tone to Turquoise.' },
      { id: 'maroon', label: 'VİŞNE ÇÜRÜĞÜ', promptValue: 'Change color tone to Maroon.' },
      { id: 'ruby', label: 'YAKUT KIRMIZISI', promptValue: 'Change color tone to Ruby Red.' },
      { id: 'olive', label: 'ZEYTİN YEŞİLİ', promptValue: 'Change color tone to Olive.' },
      { id: 'emerald', label: 'ZÜMRÜT', promptValue: 'Change color tone to Emerald Green.' }    
];

// --- ANA KARAKTER LİSTESİ (Genişletilmiş) ---
export const ENT_CHARACTERS: OptionItem[] = [
    { id: 'woman', label: 'KADIN (PARTNER)', promptValue: 'A breathtakingly beautiful woman standing next to the subject.' },
    { id: 'man', label: 'ERKEK (PARTNER)', promptValue: 'A handsome, charismatic man standing next to the subject.' },
    { id: 'cat', label: 'KEDİ', promptValue: 'A highly detailed, fluffy cat.' },
    { id: 'dog', label: 'KÖPEK', promptValue: 'A loyal, photorealistic dog.' },
    { id: 'wolf', label: 'KURT', promptValue: 'A majestic wild wolf.' },
    { id: 'lion', label: 'ASLAN', promptValue: 'A massive male lion with a dark mane.' },
    { id: 'zombie', label: 'ZOMBİ', promptValue: 'A terrifying undead zombie.' },
    { id: 'vampire', label: 'VAMPİR', promptValue: 'A seductive and dangerous vampire.' },
    { id: 'superhero', label: 'SÜPER KAHRAMAN', promptValue: 'A superhero in a high-quality costume.' },
    { id: 'pirate', label: 'KORSAN', promptValue: 'A rugged pirate captain.' },
    { id: 'ninja', label: 'NİNJA', promptValue: 'A deadly ninja assassin.' },
    { id: 'elf', label: 'ELF', promptValue: 'A mystical elf with pointed ears.' },
    { id: 'cyborg', label: 'CYBORG', promptValue: 'A futuristic human-machine hybrid.' },
    { id: 'demon', label: 'İBLİS/ŞEYTAN', promptValue: 'A human-like demon with horns and aura.' },
    { id: 'angel', label: 'MELEK', promptValue: 'A divine angel with large feathered wings.' },
    { id: 'alien', label: 'UZAYLI', promptValue: 'A humanoid alien visitor.' },
    { id: 'clown', label: 'PALYAÇO', promptValue: 'A cinematic clown character.' },
];

// --- DETAYLI VARYASYONLAR (Çekici & Stilize) ---
export const ENT_VARIANTS: Record<string, OptionItem[]> = {
    'woman': [
        // --- ETNİK GÜZELLİK (GLAMOUR) ---
        { id: 'latina_glam', label: 'LATİN (ATEŞLİ)', promptValue: 'A gorgeous Latina woman, curvy silhouette, sun-kissed skin, voluminous wavy hair, confident and alluring gaze, wearing a stylish form-fitting outfit.' },
        { id: 'asian_idol', label: 'ASYALI (IDOL)', promptValue: 'A stunning Asian woman, K-Pop idol aesthetic, flawless porcelain skin, trendy fashion, soft pink makeup, cute yet attractive vibe.' },
        { id: 'russian_model', label: 'RUS MODEL', promptValue: 'A striking Russian model, blonde hair, piercing blue eyes, high cheekbones, tall and elegant, wearing high-fashion luxury clothing.' },
        { id: 'black_goddess', label: 'SİYAHİ (TANRIÇA)', promptValue: 'A beautiful Black woman, glowing dark skin, regal posture, gold jewelry, wearing a vibrant and elegant dress.' },
        { id: 'middle_eastern', label: 'ORTADOĞU (GİZEMLİ)', promptValue: 'A captivating Middle Eastern woman, deep expressive eyes with eyeliner, dark flowing hair, mysterious and sophisticated beauty.' },
        
        // --- STİL & ARKETİPLER (SEXY & CHIC) ---
        { id: 'femme_fatale', label: 'FEMME FATALE', promptValue: 'A "Femme Fatale" character, wearing a black satin slip dress, red lipstick, smoky eyes, dangerous and seductive noir atmosphere.' },
        { id: 'office_siren', label: 'OFİS ŞIKLIĞI', promptValue: 'Office Siren aesthetic, wearing a tight pencil skirt, white blouse unbuttoned at the top, librarian glasses, sharp and sexy professional look.' },
        { id: 'beach_babe', label: 'PLAJ GÜZELİ', promptValue: 'Beach aesthetic, wearing a stylish bikini or swimwear, wet hair look, golden hour lighting, fit and toned body.' },
        { id: 'gym_fit', label: 'SPORCU (FIT)', promptValue: 'Fitness model aesthetic, wearing premium activewear/leggings, showing toned abs, sweaty glow, high energy ponytail.' },
        { id: 'evening_gown', label: 'KIRMIZI HALI', promptValue: 'Red Carpet glamour, wearing a sparkling floor-length evening gown with a high slit, diamond jewelry, paparazzi flash lighting.' },
    ],

    'man': [
        // --- ETNİK & KARİZMA ---
        { id: 'italian_suit', label: 'İTALYAN (TAKIM)', promptValue: 'A handsome Italian man, wearing a tailored bespoke suit, unbuttoned shirt, tanned skin, charisma and confidence.' },
        { id: 'korean_oppa', label: 'KORE (DRAMA STAR)', promptValue: 'A handsome Korean man, clean-shaven, trendy hairstyle, stylish coat and turtleneck, romantic K-Drama lead actor vibe.' },
        { id: 'viking_rugged', label: 'İSKANDİNAV (RUGGED)', promptValue: 'A rugged Scandinavian man, muscular build, groomed beard, long hair tied back, wearing a flannel shirt or leather, masculine energy.' },
        { id: 'black_gentleman', label: 'SİYAHİ (CENTİLMEN)', promptValue: 'A charismatic Black man, well-groomed, wearing a tuxedo or velvet jacket, charming smile, sophisticated swagger.' },

        // --- STİL ARKETİPLERİ ---
        { id: 'bad_boy', label: 'BAD BOY', promptValue: 'Bad Boy aesthetic, leather motorcycle jacket, white t-shirt, tattoos visible, rebellious attitude, intense gaze.' },
        { id: 'surfer', label: 'SÖRFÇÜ', promptValue: 'Surfer dude aesthetic, messy sun-bleached hair, shirtless or unbuttoned linen shirt, muscular physique, beach vibe.' },
        { id: 'ceo_billionaire', label: 'MİLYARDER CEO', promptValue: 'Billionaire aesthetic, expensive minimalistic clothing (old money), expensive watch, aura of power and success.' },
    ],

    'vampire': [
        { id: 'gothic_queen', label: 'GOTİK KRALİÇE (SEXY)', promptValue: 'A seductive Vampire Queen, pale skin, corset dress, dark red lips, blood-red eyes, gothic victorian elegance, alluring and dangerous.' },
        { id: 'modern_bad', label: 'MODERN ASİ', promptValue: 'A modern punk vampire, leather jacket, sunglasses at night, fangs slightly visible, neon city lights background.' },
        { id: 'count_dracula', label: 'KONT DRACULA', promptValue: 'Classic Count Dracula, high collar cape, slicked back hair, aristocratic and terrifying.' },
    ],

    'elf': [
        { id: 'high_elf', label: 'YÜCE ELF (ASİL)', promptValue: 'A High Elf royal, ethereal beauty, long silver hair, glowing skin, wearing intricate golden armor and silk robes.' },
        { id: 'dark_elf', label: 'KARA ELF (SAVAŞÇI)', promptValue: 'A Drow/Dark Elf sorceress, obsidian skin, white hair, purple eyes, wearing revealing leather armor, exotic and deadly.' },
    ],

    'demon': [
        { id: 'succubus', label: 'SUCCUBUS (KADIN)', promptValue: 'A alluring Succubus demon, small horns, bat-like wings, tail, wearing provocative fantasy attire, red glowing aura.' },
        { id: 'incubus', label: 'INCUBUS (ERKEK)', promptValue: 'A handsome Incubus demon, muscular chest exposed, dark horns, hypnotic eyes, seductive and powerful.' },
    ],

    'superhero': [
        { id: 'wonder_style', label: 'SAVAŞÇI PRENSES', promptValue: 'Amazonian warrior princess style, golden armor, tiara, sword, muscular but feminine physique, heroic pose.' },
        { id: 'cat_thief', label: 'KEDİ KADIN', promptValue: 'Stealthy cat-burglar anti-heroine, shiny black latex bodysuit, mask, whip, agile and sleek.' },
        { id: 'iron_tech', label: 'DEMİR ZIRHLI', promptValue: 'Full body high-tech powered armor suit, glowing arc reactor, futuristic metallic texture.' },
    ],

    'ninja': [
        { id: 'kunoichi', label: 'KADIN NİNJA', promptValue: 'A Kunoichi (female ninja), wearing a stylish modernized ninja outfit with mesh details, mask revealing fierce eyes, holding katana.' },
        { id: 'cyberpunk', label: 'CYBERPUNK', promptValue: 'Futuristic Cyber-Ninja, neon katana, tactical tech-wear, glowing visor, rain-soaked city background.' },
    ],

    'pirate': [
        { id: 'pirate_queen', label: 'KORSAN KRALİÇE', promptValue: 'A Pirate Queen, tricorn hat, corset, cutlass at hip, confident stance on a ship deck, rugged yet beautiful.' },
        { id: 'jack_style', label: 'KAPTAN', promptValue: 'Eccentric Pirate Captain, dreadlocks, eyeliner, rugged clothes, holding a bottle of rum, charismatic adventurer.' },
    ],

    'zombie': [
        { id: 'nurse', label: 'HEMŞİRE', promptValue: 'A Silent Hill style zombie nurse, dirty uniform, creepy movements, horror aesthetic.' },
        { id: 'bride', label: 'ÖLÜ GELİN', promptValue: 'Corpse Bride aesthetic, torn wedding dress, pale blue skin, holding a dead bouquet, tragic beauty.' },
    ],
    
    'cat': [
        { id: 'fluffy_white', label: 'BEYAZ (PRENSES)', promptValue: 'A pristine white Persian cat, jewel-encrusted collar, sitting on a velvet cushion.' },
        { id: 'sphynx', label: 'SİYAM/TÜYSÜZ', promptValue: 'A mystical Sphynx or Siamese cat, piercing blue eyes, elegant and slender.' },
    ],
    
    'dog': [
        { id: 'doberman', label: 'DOBERMAN', promptValue: 'A sleek black Doberman, muscular and alert, studded collar, tough guardian vibe.' },
        { id: 'golden', label: 'GOLDEN', promptValue: 'A happy Golden Retriever, fluffy fur, tongue out, friendly and adorable.' },
    ],
};

// --- ANA AKSİYONLAR (ENT_ACTIONS) ---
export const ENT_ACTIONS: OptionItem[] = [
    // --- ROMANTİK & ATEŞLİ (HOT & ROMANTIC) ---
    { id: 'romance_intense', label: 'TUTKULU AŞK', promptValue: 'Intense romantic chemistry between the subject and the character.' },
    { id: 'wall_pin', label: 'DUVARA YASLAMA (KABEDON)', promptValue: 'The character is pinning the subject against a wall (Kabedon style), intense eye contact.' },
    { id: 'lap_human', label: 'KUCAKTA (PARTNER)', promptValue: 'The subject is sitting on the character\'s lap (or vice versa), intimate pose.' },
    { id: 'almost_kiss', label: 'ÖPÜCÜK ANI', promptValue: 'Faces extremely close, about to kiss, eyes closed or gazing at lips, high romantic tension.' },
    { id: 'neck_nuzzle', label: 'BOYUN SOKULMA', promptValue: 'The character is nuzzling or burying their face in the subject\'s neck from behind.' },

    // --- SİNEMATİK & HAVALI (COOL & CINEMATIC) ---
    { id: 'motorcycle', label: 'MOTOSİKLET', promptValue: 'Riding a motorcycle together, holding on tight, wind in hair, action movie vibe.' },
    { id: 'back_to_back', label: 'SIRT SIRTA (EKİP)', promptValue: 'Standing back-to-back defending against enemies, badass duo aesthetic.' },
    { id: 'rain_umbrella', label: 'YAĞMUR & ŞEMSİYE', promptValue: 'Standing close together under a single umbrella in the rain, K-Drama romantic vibe.' },
    { id: 'red_carpet', label: 'KIRMIZI HALI', promptValue: 'Walking the red carpet together, paparazzi flashes, wearing formal evening wear, power couple.' },

    // --- EĞLENCELİ & GÜNLÜK (FUN & CASUAL) ---
    { id: 'piggyback', label: 'SIRTA BİNME', promptValue: 'Giving a playful piggyback ride, laughing, dynamic movement.' },
    { id: 'selfie_cheek', label: 'YANAK YANAĞA SELFIE', promptValue: 'Taking a selfie with cheeks touching, big smiles, cute filter aesthetic.' },
    { id: 'food_feed', label: 'YEMEK YEDİRME', promptValue: 'Playfully feeding each other (strawberries, pizza, etc.), picnic date atmosphere.' },
    
    // --- HAYVAN / MİNYATÜR ÖZEL ---
    { id: 'shoulder_perch', label: 'OMUZDA DURMA', promptValue: 'The character is perched comfortably on the subject\'s shoulder.' },
    { id: 'head_rest', label: 'KAFA KOYMA', promptValue: 'The character is resting their chin/head on the subject\'s lap or shoulder affectionately.' },
];

// --- AKSİYON VARYASYONLARI (DETAYLAR & MODLAR) ---
export const ENT_ACTION_VARIANTS: Record<string, OptionItem[]> = {
    // --- TUTKULU AŞK DETAYLARI ---
    'romance_intense': [
        { id: 'dip_kiss', label: 'GERİYE YATIRMA', promptValue: 'Action: A dramatic dip kiss pose, holding the partner by the waist, leaning them back.' },
        { id: 'waist_hold', label: 'BELDEN SARILMA', promptValue: 'Action: Hands wrapped firmly around the waist, bodies pressed together, looking deep into eyes.' },
        { id: 'hand_on_cheek', label: 'EL YANAKTA', promptValue: 'Action: Gently cupping the partner\'s face/cheek with one hand, gazing lovingly.' },
    ],

    // --- DUVARA YASLAMA (KABEDON) ---
    'wall_pin': [
        { id: 'aggressive', label: 'SERT & OTORİTER', promptValue: 'Mood: Dominant pose, one arm leaning on wall, intense and demanding stare.' },
        { id: 'soft', label: 'YUMUŞAK & FLÖRT', promptValue: 'Mood: Flirty and playful pinning, smiling slightly, whispering in ear.' },
    ],

    // --- KUCAKTA (İNSAN) ---
    'lap_human': [
        { id: 'facing', label: 'YÜZ YÜZE', promptValue: 'Position: Sitting straddle style facing the partner, arms around neck, very intimate.' },
        { id: 'side', label: 'YAN OTURMA', promptValue: 'Position: Sitting sideways on the lap, legs crossed elegantly, arm over shoulder.' },
    ],

    // --- ÖPÜCÜK ANI ---
    'almost_kiss': [
        { id: 'chin_lift', label: 'ÇENEDEN TUTMA', promptValue: 'Action: Lifting the partner\'s chin with fingers to bring faces closer.' },
        { id: 'forehead_touch', label: 'ALIN ALINA', promptValue: 'Action: Foreheads touching gently, eyes closed, savoring the moment.' },
    ],

    // --- MOTOSİKLET ---
    'motorcycle': [
        { id: 'driving', label: 'SÜRÜCÜ ARKASI', promptValue: 'Role: Sitting behind the character, arms wrapped tight around their torso, head on back.' },
        { id: 'sunset', label: 'GÜNBATIMI SÜRÜŞÜ', promptValue: 'Setting: Riding into a golden sunset, silhouette view, romantic freedom.' },
    ],

    // --- YAĞMUR ---
    'rain_umbrella': [
        { id: 'holding_close', label: 'SARILARAK ISINMA', promptValue: 'Action: Huddled very close to stay dry, sharing body heat, cold rain background.' },
        { id: 'jacket_cover', label: 'CEKETLE KORUMA', promptValue: 'Action: Holding a jacket over both heads instead of an umbrella, running through rain.' },
    ],

    // --- KIRMIZI HALI ---
    'red_carpet': [
        { id: 'arm_in_arm', label: 'KOL KOLA', promptValue: 'Pose: Walking arm in arm, waving to crowd, elegant and composed.' },
        { id: 'whisper', label: 'KULAĞA FISILTI', promptValue: 'Pose: Leaning in to whisper a secret while cameras flash, mysterious connection.' },
    ],

    // --- EVCİL HAYVAN ETKİLEŞİMLERİ ---
    'head_rest': [
        { id: 'sleeping', label: 'UYUKLAMA', promptValue: 'Action: The animal is sleeping peacefully with its head on the subject.' },
        { id: 'puppy_eyes', label: 'MASUM BAKIŞ', promptValue: 'Action: Looking up with big adorable "puppy eyes" begging for attention.' },
    ],
};

export const ENT_MOODS: OptionItem[] = [
    // --- SİNEMATİK & DRAMATİK ---
    { id: 'cinematic_epic', label: 'SİNEMATİK (EPİK)', promptValue: 'Atmosphere: Epic movie scene, dramatic composition, anamorphic lens flares, high contrast, blockbuster aesthetic.' },
    { id: 'noir_detective', label: 'NOIR (SİYAH BEYAZ)', promptValue: 'Atmosphere: Film Noir style, high contrast black and white, dramatic shadows, mysterious detective vibe, smoke and rain.' },
    { id: 'wes_anderson', label: 'SİMETRİK (ARTY)', promptValue: 'Atmosphere: Wes Anderson style, pastel color palette, perfect symmetry, quirky and stylized art direction.' },

    // --- FANTASTİK & BİLİM KURGU ---
    { id: 'cyberpunk_neon', label: 'CYBERPUNK', promptValue: 'Atmosphere: Futuristic Cyberpunk city, heavy rain, neon lights (pink/blue), reflections, high-tech dystopian vibe.' },
    { id: 'fantasy_magical', label: 'BÜYÜLÜ (FANTASY)', promptValue: 'Atmosphere: High Fantasy magical forest, bioluminescent plants, floating particles, ethereal glow, dreamlike.' },
    { id: 'steampunk', label: 'STEAMPUNK', promptValue: 'Atmosphere: Victorian Steampunk, brass gears, steam fog, vintage leather textures, retro-futuristic machinery.' },
    { id: 'space_sci_fi', label: 'UZAY (SCI-FI)', promptValue: 'Atmosphere: Deep space Sci-Fi, stars and nebula background, cold blue lighting, futuristic spaceship interior.' },

    // --- KORKU & GİZEM ---
    { id: 'horror_spooky', label: 'KORKU (HORROR)', promptValue: 'Atmosphere: Horror movie aesthetic, dark and gritty, volumetric fog, unsettling shadows, cold color temperature.' },
    { id: 'gothic_vampire', label: 'GOTİK (GOTHIC)', promptValue: 'Atmosphere: Gothic Victorian aesthetic, dark velvet, candlelight, ancient castle setting, romantic but dark.' },
    { id: 'apocalypse', label: 'KIYAMET SONRASI', promptValue: 'Atmosphere: Post-Apocalyptic wasteland, ruined buildings, dust storms, desaturated colors, survival vibe.' },

    // --- DOĞA & MEVSİMLER ---
    { id: 'golden_hour', label: 'ALTIN SAAT', promptValue: 'Atmosphere: Golden Hour photography, warm soft sunlight, lens flare, romantic and peaceful nature vibe.' },
    { id: 'underwater', label: 'SU ALTI', promptValue: 'Atmosphere: Underwater scene, refracted light rays, bubbles, deep blue ocean tones, weightless floating feeling.' },
    { id: 'winter_snow', label: 'KAR & KIŞ', promptValue: 'Atmosphere: Snowy Winter wonderland, falling snowflakes, frost textures, cold white and blue palette, cozy or freezing.' },

    // --- RETRO & SANATSAL ---
    { id: 'vintage_80s', label: '80\'LER (RETRO)', promptValue: 'Atmosphere: 1980s Retro aesthetic, film grain, synthwave colors, vintage camera filter.' },
    { id: 'oil_painting', label: 'YAĞLI BOYA', promptValue: 'Style: Classical Oil Painting style, visible brush strokes, rich colors, museum art masterpiece.' },
    { id: 'anime_style', label: 'ANIME (JAPON)', promptValue: 'Style: High quality Japanese Anime art style, cel shading, vibrant colors, expressive lines.' },
];

export const ENT_SETTINGS: OptionItem[] = [
    { id: 'none', label: 'MEVCUT', promptValue: 'Keep the original background.' },
    { id: 'forest', label: 'ORMAN', promptValue: 'Setting: A dense, magical forest.' },
    { id: 'city', label: 'ŞEHİR', promptValue: 'Setting: A busy city street.' },
    { id: 'beach', label: 'SAHİL', promptValue: 'Setting: A sunny tropical beach.' },
    { id: 'space', label: 'UZAY', promptValue: 'Setting: Inside a spaceship or space station.' },
    { id: 'castle', label: 'ŞATO', promptValue: 'Setting: An ancient medieval castle.' },
    { id: 'bar', label: 'BAR/KAFE', promptValue: 'Setting: A cozy bar or cafe.' },
    { id: 'stadium', label: 'STADYUM', promptValue: 'Setting: A crowded sports stadium.' },
    { id: 'desert', label: 'ÇÖL', promptValue: 'Setting: A vast desert landscape.' },
    { id: 'underwater', label: 'OKYANUS', promptValue: 'Setting: Deep underwater ocean floor.' },
];

export const INT_STYLES: OptionItem[] = [
    { id: 'modern', label: 'MODERN', promptValue: 'Modern Interior Design, clean lines, neutral colors, minimalist furniture' },
    { id: 'scandi', label: 'İSKANDİNAV', promptValue: 'Scandinavian Style, bright, wood textures, cozy, hygge atmosphere, white walls' },
    { id: 'industrial', label: 'ENDÜSTRİYEL', promptValue: 'Industrial Style, exposed brick, metal accents, raw concrete, loft aesthetic' },
    { id: 'boho', label: 'BOHEM', promptValue: 'Bohemian Style, eclectic patterns, plants, rattan furniture, warm colors, relaxed vibe' },
    { id: 'luxury', label: 'LÜKS', promptValue: 'Luxury Classic Style, gold accents, velvet furniture, crystal chandeliers, expensive look' },
    { id: 'minimal', label: 'MİNİMAL', promptValue: 'Ultra Minimalist, empty spaces, white dominant, clutter-free, zen atmosphere' },
    { id: 'japandi', label: 'JAPANDI', promptValue: 'Japandi Style, blend of Japanese rustic minimalism and Scandinavian functionality, natural materials' },
    { id: 'artdeco', label: 'ART DECO', promptValue: 'Art Deco Style, geometric shapes, rich colors, gold and brass details, glamourous 1920s vibe' },
    { id: 'rustic', label: 'RUSTİK', promptValue: 'Rustic Style, natural wood beams, stone walls, cozy farmhouse aesthetic, warm earth tones' },
    { id: 'bauhaus', label: 'BAUHAUS', promptValue: 'Bauhaus Style, functional design, geometric shapes, primary colors, tubular steel furniture' },
];

export const INT_ROOMS: OptionItem[] = [
    { id: 'living', label: 'SALON', promptValue: 'Living Room context' },
    { id: 'bedroom', label: 'YATAK ODASI', promptValue: 'Bedroom context' },
    { id: 'kitchen', label: 'MUTFAK', promptValue: 'Kitchen context' },
    { id: 'office', label: 'OFİS', promptValue: 'Home Office context' },
    { id: 'cafe', label: 'KAFE', promptValue: 'Coffee Shop context' },
    { id: 'bathroom', label: 'BANYO', promptValue: 'Bathroom context, spa-like atmosphere' },
    { id: 'hallway', label: 'KORİDOR', promptValue: 'Hallway / Entryway context' },
    { id: 'balcony', label: 'BALKON', promptValue: 'Balcony / Terrace context' },
    { id: 'closet', label: 'GİYİM ODASI', promptValue: 'Walk-in Closet context' },
];

export const INT_MATERIALS: OptionItem[] = [
    { id: 'wood', label: 'AHŞAP', promptValue: 'Dominant Material: Natural Wood textures (Oak, Walnut)' },
    { id: 'marble', label: 'MERMER', promptValue: 'Dominant Material: White and Black Marble textures' },
    { id: 'concrete', label: 'BETON', promptValue: 'Dominant Material: Raw Concrete / Microcement surfaces' },
    { id: 'velvet', label: 'KADİFE', promptValue: 'Dominant Material: Plush Velvet fabrics' },
    { id: 'leather', label: 'DERİ', promptValue: 'Dominant Material: High quality Leather' },
    { id: 'glass', label: 'CAM/AYNA', promptValue: 'Dominant Material: Glass and Mirrors' },
    { id: 'brick', label: 'TUĞLA', promptValue: 'Dominant Material: Exposed Red or White Brick walls' },
];

export const INT_COLORS: OptionItem[] = [
    { id: 'warm', label: 'SICAK', promptValue: 'Color Palette: Warm tones (Beige, Brown, Terracotta, Cream)' },
    { id: 'cool', label: 'SOĞUK', promptValue: 'Color Palette: Cool tones (Blue, Grey, White, Silver)' },
    { id: 'dark', label: 'KOYU (MOODY)', promptValue: 'Color Palette: Dark Moody tones (Black, Charcoal, Navy, Dark Green)' },
    { id: 'pastel', label: 'PASTEL', promptValue: 'Color Palette: Soft Pastel tones (Mint, Blush, Lavender)' },
    { id: 'colorful', label: 'RENKLİ', promptValue: 'Color Palette: Vibrant and Energetic mixed colors' },
    { id: 'monochrome', label: 'SİYAH BEYAZ', promptValue: 'Color Palette: Monochromatic Black and White' },
    { id: 'earth', label: 'TOPRAK', promptValue: 'Color Palette: Earthy Nature tones (Green, Brown, Stone)' },
];

export const TATTOO_STYLES: OptionItem[] = [
    { id: 'sketch', label: 'ESKİZ (SKETCH)', promptValue: 'Sketch Tattoo style, rough loose pencil lines, visible graphite texture and smudges, artistic unfinished hand-drawn aesthetic, imperfect shading' },
    { id: 'blackwork', label: 'BLACKWORK', promptValue: 'Blackwork Tattoo style, pure solid black ink, heavy bold blocks and patterns, high contrast, no color, intricate negative space designs' },
    { id: 'neo_trad', label: 'NEO-TRAD', promptValue: 'Neo-Traditional Tattoo style, thick bold black outlines, vibrant saturated colors, sophisticated shading, art nouveau curves, detailed illustrative elements' },
    { id: 'oldschool', label: 'OLD SCHOOL', promptValue: 'Traditional Old School American Tattoo style, thick bold black outlines, limited classic palette (red, green, yellow, blue, black), iconic sailor motifs, strong flash design' },
    { id: 'realism', label: 'REALİZM', promptValue: 'Hyper-Realistic Tattoo style, photorealistic detail, precise shading gradients, lifelike textures, 3D depth and volume, portrait or object quality' },
    { id: 'trash_polka', label: 'TRASH POLKA', promptValue: 'Trash Polka Tattoo style, chaotic collage composition, only red and black ink, realistic portraits mixed with large abstract brush strokes, smears, typography fragments' },
    { id: 'cyber_sigil', label: 'CYBER SIGIL', promptValue: 'Cyber Sigilism Tattoo style, sharp aggressive angular lines, bio-organic spikes and circuits, futuristic chrome metallic sheen, Y2K digital occult aesthetic' },
    { id: 'irezumi', label: 'JAPON (IREZUMI)', promptValue: 'Traditional Japanese Irezumi Tattoo style, full body suit elements, bold waves, dragons, koi, cherry blossoms, peonies, extensive cloud and wind bar background shading' },
    { id: 'biomech', label: 'BİYOMEKANİK', promptValue: 'Biomechanical Tattoo style, skin torn revealing complex mechanical parts, gears, pistons, cables, metallic textures blended with organic alien flesh, Giger-inspired' },
    { id: 'fine_line', label: 'FINE LINE', promptValue: 'Fine Line Tattoo style, ultra-thin delicate single needle lines, minimal shading, elegant minimalist design, subtle details, clean and precise' },
    { id: 'chicano', label: 'CHICANO', promptValue: 'Chicano Tattoo style, smooth black and grey shading, fine script lettering, religious icons, lowrider culture, payasa clown girls, realistic portraits' },
    { id: 'ornamental', label: 'SÜSLEME', promptValue: 'Ornamental Tattoo style, intricate decorative patterns, jewelry-like filigree, lace and dotwork details, symmetrical mandala elements, elegant blackwork' },
    { id: 'lettering', label: 'KALİGRAFİ', promptValue: 'Custom Calligraphy Lettering Tattoo style, flowing script or bold gothic fonts, ornate flourishes, stylized typography, perfect spacing and composition' },
    { id: 'surreal', label: 'SÜRREALİZM', promptValue: 'Surrealism Tattoo style, dreamlike impossible scenes, melting objects, floating elements, Dali and Escher influences, bizarre imaginative juxtapositions' },
    { id: 'ignorant', label: 'IGNORANT', promptValue: 'Ignorant Style Tattoo, crude naive hand-drawn look, intentionally imperfect lines, simple bold doodles, prison-style raw unpolished aesthetic' },
    { id: 'patchwork', label: 'PATCHWORK', promptValue: 'Patchwork Tattoo style, collection of small disconnected tattoos like embroidered patches, varied mini designs, random placement, sticker-like appearance' },
    { id: 'dotwork', label: 'NOKTA İŞİ', promptValue: 'Dotwork Tattoo style, shading and texture created entirely by thousands of tiny dots, sacred geometry, mandalas, precise stippling technique' },
    { id: 'engraving', label: 'GRAVÜR', promptValue: 'Engraving/Woodcut Tattoo style, fine parallel hatching and cross-hatching lines, vintage illustration look, high detail black ink only' },
    { id: 'watercolor', label: 'SULU BOYA', promptValue: 'Watercolor Tattoo style, soft bleeding color splashes, no hard outlines, painterly brush strokes, artistic abstract color flow' },
    { id: 'glitch', label: 'GLITCH', promptValue: 'Glitch Art Tattoo style, digital corruption effects, RGB channel shifts, pixel sorting, scan lines, distorted data aesthetic' },
    { id: 'tribal_modern', label: 'TRIBAL', promptValue: 'Modern Tribal Tattoo style, bold thick black abstract shapes, sharp curves and spikes, Polynesian and Maori influences, symmetrical patterns' },
    { id: 'geometric', label: 'GEOMETRİK', promptValue: 'Geometric Tattoo style, precise mathematical shapes, perfect symmetry, sacred geometry, mandalas, clean crisp lines and patterns' },
    { id: 'abstract', label: 'SOYUT', promptValue: 'Abstract Tattoo style, non-representational forms, expressive brush strokes, undefined shapes, emotional avant-garde composition' },
    { id: 'minimal', label: 'MİNİMAL', promptValue: 'Minimalist Tattoo style, very few clean lines, simple symbolic shapes, negative space emphasis, ultra-simple elegant design' },
    { id: 'new_school', label: 'NEW SCHOOL', promptValue: 'New School Tattoo style, exaggerated cartoonish features, bright vibrant colors, thick outlines, graffiti influence, playful and bold' },
    { id: 'blackout', label: 'BLACKOUT', promptValue: 'Blackout Tattoo style, large areas completely filled with solid black ink, negative space designs emerging from black, bold coverage' },
    { id: 'handpoke', label: 'HANDPOKE', promptValue: 'Hand-Poked Tattoo style, visible dot pattern from manual poking, rustic imperfect lines, traditional no-machine technique, raw texture' },
    { id: 'uv_blacklight', label: 'UV (BLACKLIGHT)', promptValue: 'UV Reactive Blacklight Tattoo style, invisible or subtle in normal light, glowing neon under blacklight, fluorescent colors' },
    { id: 'illustrative', label: 'İLLÜSTRATİF', promptValue: 'Illustrative Tattoo style, storybook illustration look, detailed linework with whimsical shading, fantasy and narrative elements' },
    { id: 'polynesian', label: 'POLİNEZYEN', promptValue: 'Traditional Polynesian Tattoo style, intricate geometric patterns, symbols with cultural meaning, bold black tribal motifs' },
    { id: 'haida', label: 'HAIDA (YERLİ)', promptValue: 'Haida Native American Tattoo style, bold formline designs, animals in stylized shapes, black and red palette, indigenous northwest coast art' },
    { id: 'scarification', label: 'YARA İZİ', promptValue: 'Scarification-inspired Tattoo style, raised scar texture simulation, keloid effects, bold 3D relief lines, tribal scarring aesthetic' },
    { id: 'anime', label: 'ANİME', promptValue: 'Anime/Manga Tattoo style, large expressive eyes, dynamic poses, cel shading, vibrant colors, Japanese animation aesthetic' },
    { id: 'gothic', label: 'GOTİK', promptValue: 'Gothic Tattoo style, dark Victorian elements, skulls, roses, crosses, ornate filigree, black and grey dramatic shading' },
    { id: 'steampunk', label: 'STEAMPUNK', promptValue: 'Steampunk Tattoo style, Victorian machinery, gears, clocks, airships, sepia tones, intricate mechanical details' },
    { id: 'dark_art', label: 'DARK ART', promptValue: 'Dark Art Tattoo style, macabre horror themes, skulls, demons, occult symbols, heavy black shading, eerie atmosphere' },
];
export const TATTOO_STYLE_VARIANTS: Record<string, OptionItem[]> = {
'sketch': [
    { id: 'messy', label: 'DAĞINIK', promptValue: 'Messy rough sketch lines, visible cross-hatching and smudges, unfinished artistic feel' },
    { id: 'clean', label: 'TEMİZ', promptValue: 'Clean precise sketch lines, architectural draft style, minimal shading' },
    { id: 'colored', label: 'RENKLİ', promptValue: 'Colored pencil sketch effect with light watercolor touches' }
  ],
  'blackwork': [
    { id: 'bold', label: 'KALIN BLOK', promptValue: 'Heavy solid black blocks, bold geometric patterns' },
    { id: 'ornamental', label: 'SÜSLEMELİ', promptValue: 'Intricate ornamental blackwork with negative space details' },
    { id: 'brush', label: 'FIRÇA', promptValue: 'Brush stroke blackwork, textured bold sweeps' }
  ],
  'neo_trad': [
    { id: 'flower', label: 'ÇİÇEK', promptValue: 'Neo-traditional flowers with jewel tones and thick outlines' },
    { id: 'animal', label: 'HAYVAN', promptValue: 'Neo-traditional animals, vibrant colors and illustrative shading' },
    { id: 'ladyhead', label: 'KADIN BAŞI', promptValue: 'Classic lady head with art nouveau elements' }
  ],
  'oldschool': [
    { id: 'nautical', label: 'DENİZCİ', promptValue: 'Nautical theme: anchors, ships, swallows, bold classic colors' },
    { id: 'rose_dagger', label: 'GÜL/HANÇER', promptValue: 'Traditional rose and dagger, heart banners' },
    { id: 'animal', label: 'HAYVAN', promptValue: 'Panther, eagle, snake in classic old school style' }
  ],
  'realism': [
    { id: 'portrait', label: 'PORTRE', promptValue: 'Hyper-realistic portrait with lifelike skin texture and shading' },
    { id: 'nature', label: 'DOĞA', promptValue: 'Realistic nature: animals, landscapes, detailed fur/feathers' },
    { id: 'dark', label: 'KARANLIK', promptValue: 'Dark horror realism: skulls, demons, eerie atmosphere' }
  ],
  'trash_polka': [
    { id: 'classic', label: 'KLASİK', promptValue: 'Classic red/black trash polka with realistic elements and brush strokes' },
    { id: 'typography', label: 'YAZILI', promptValue: 'Heavy typography integration with smears and portraits' },
    { id: 'abstract', label: 'SOYUT', promptValue: 'More abstract chaotic composition, less realistic' }
  ],
  'cyber_sigil': [
    { id: 'sharp', label: 'KESKİN', promptValue: 'Sharp angular sigils with chrome spikes' },
    { id: 'organic', label: 'ORGANİK', promptValue: 'Bio-organic cyber lines blending flesh and circuit' },
    { id: 'glow', label: 'PARLAK', promptValue: 'Neon glow effects on sigil lines' }
  ],
  'irezumi': [
    { id: 'dragon', label: 'EJDERHA', promptValue: 'Traditional dragon with clouds and waves' },
    { id: 'koi', label: 'KOİ BALIĞI', promptValue: 'Koi fish swimming upstream with water elements' },
    { id: 'full_back', label: 'SIRT PARÇASI', promptValue: 'Large back piece composition with background' }
  ],
  'biomech': [
    { id: 'giger', label: 'GİGER', promptValue: 'H.R. Giger inspired alien biomechanical' },
    { id: 'mech', label: 'MAKİNE', promptValue: 'Pure mechanical gears and pistons under skin' },
    { id: 'hybrid', label: 'HİBRİT', promptValue: 'Organic-mechanical hybrid with tentacles' }
  ],
  'fine_line': [
    { id: 'minimal', label: 'MİNİMAL', promptValue: 'Ultra minimal fine line symbols or quotes' },
    { id: 'botanical', label: 'BOTANİK', promptValue: 'Delicate fine line flowers and leaves' },
    { id: 'geometric', label: 'GEOMETRİK', promptValue: 'Fine line sacred geometry patterns' }
  ],
  'chicano': [
    { id: 'script', label: 'YAZI', promptValue: 'Elegant Chicano script lettering' },
    { id: 'religious', label: 'DİNİ', promptValue: 'Religious icons with smooth grey shading' },
    { id: 'payasa', label: 'PAYASA', promptValue: 'Classic payasa clown girl portrait' }
  ],
  'ornamental': [
    { id: 'mandala', label: 'MANDALA', promptValue: 'Symmetrical ornamental mandala' },
    { id: 'jewelry', label: 'MÜCEVHER', promptValue: 'Jewelry-like filigree and lace patterns' },
    { id: 'dot', label: 'NOKTALI', promptValue: 'Ornamental with heavy dotwork accents' }
  ],
  'lettering': [
    { id: 'gothic', label: 'GOTİK', promptValue: 'Bold gothic blackletter script' },
    { id: 'script', label: 'EL YAZISI', promptValue: 'Flowing cursive calligraphy script' },
    { id: 'chicano_script', label: 'CHICANO', promptValue: 'Fine Chicano style lettering' }
  ],
  'surreal': [
    { id: 'dali', label: 'DALİ', promptValue: 'Melting clocks and surreal elements' },
    { id: 'escher', label: 'ESCHER', promptValue: 'Impossible geometry and optical illusions' },
    { id: 'dream', label: 'RÜYA', promptValue: 'Dreamlike floating objects and scenes' }
  ],
  'ignorant': [
    { id: 'crude', label: 'KABA', promptValue: 'Crude naive doodle style' },
    { id: 'text', label: 'METİN', promptValue: 'Bold ignorant style text with imperfections' },
    { id: 'simple', label: 'BASİT', promptValue: 'Simple stick figure ignorant designs' }
  ],
  'patchwork': [
    { id: 'random', label: 'RASTGELE', promptValue: 'Random scattered small tattoos' },
    { id: 'themed', label: 'TEMALI', promptValue: 'Themed patchwork collection' },
    { id: 'mixed', label: 'KARIŞIK', promptValue: 'Mixed styles in patchwork layout' }
  ],
  'dotwork': [
    { id: 'mandala', label: 'MANDALA', promptValue: 'Full dotwork sacred geometry mandala' },
    { id: 'shading', label: 'GÖLGE', promptValue: 'Realistic dotwork shading on subject' },
    { id: 'pattern', label: 'DESEN', promptValue: 'Abstract dotwork patterns' }
  ],
  'engraving': [
    { id: 'vintage', label: 'VINTAGE', promptValue: 'Classic woodcut engraving style' },
    { id: 'hatching', label: 'ÇAPRAZ ÇİZGi', promptValue: 'Heavy cross-hatching for depth' },
    { id: 'illustrative', label: 'İLLÜSTRATİF', promptValue: 'Book illustration engraving look' }
  ],
  'watercolor': [
    { id: 'soft', label: 'YUMUŞAK', promptValue: 'Soft bleeding watercolor splashes' },
    { id: 'bold', label: 'CANLI', promptValue: 'Bold vibrant watercolor strokes' },
    { id: 'abstract', label: 'SOYUT', promptValue: 'Pure abstract watercolor flow' }
  ],
  'glitch': [
    { id: 'rgb', label: 'RGB KAYMA', promptValue: 'Strong RGB channel shift glitch' },
    { id: 'pixel', label: 'PİKSEL', promptValue: 'Pixel sorting and distortion' },
    { id: 'scanline', label: 'TARAYICI', promptValue: 'Scan lines and data corruption' }
  ],
  'tribal_modern': [
    { id: 'polynesian', label: 'POLİNEZYEN', promptValue: 'Modern Polynesian inspired tribal' },
    { id: 'sharp', label: 'KESKİN', promptValue: 'Sharp angular modern tribal' },
    { id: 'negative', label: 'NEGATİF', promptValue: 'Negative space tribal patterns' }
  ],
  'geometric': [
    { id: 'sacred', label: 'KUTSAL', promptValue: 'Sacred geometry precise patterns' },
    { id: 'minimal', label: 'MİNİMAL', promptValue: 'Simple geometric shapes' },
    { id: '3d', label: '3D', promptValue: 'Optical illusion 3D geometric' }
  ],
  'abstract': [
    { id: 'expressionist', label: 'EKSPRESYONİST', promptValue: 'Bold expressionist brush strokes' },
    { id: 'fluid', label: 'AKIŞKAN', promptValue: 'Fluid abstract forms and colors' },
    { id: 'chaotic', label: 'KAOTİK', promptValue: 'Chaotic layered abstract elements' }
  ],
  'minimal': [
    { id: 'line', label: 'ÇİZGİ', promptValue: 'Single continuous line design' },
    { id: 'symbol', label: 'SEMBOl', promptValue: 'Simple symbolic icon' },
    { id: 'tiny', label: 'MİNİK', promptValue: 'Tiny micro minimalist tattoo' }
  ],
  'new_school': [
    { id: 'cartoon', label: 'KARİKATÜR', promptValue: 'Exaggerated cartoon characters' },
    { id: 'graffiti', label: 'GRAFFİTİ', promptValue: 'Graffiti influenced bold colors' },
    { id: 'pop', label: 'POP', promptValue: 'Pop culture new school style' }
  ],
  'blackout': [
    { id: 'full', label: 'TAM DOLU', promptValue: 'Complete solid black coverage' },
    { id: 'negative', label: 'NEGATİF', promptValue: 'Negative space design in blackout' },
    { id: 'pattern', label: 'DESENLİ', promptValue: 'Subtle patterns in blacked area' }
  ],
  'handpoke': [
    { id: 'traditional', label: 'GELENEKSEL', promptValue: 'Classic handpoke dot pattern' },
    { id: 'ornamental', label: 'SÜSLEMELİ', promptValue: 'Handpoke ornamental designs' },
    { id: 'simple', label: 'BASİT', promptValue: 'Simple handpoke symbols' }
  ],
  'uv_blacklight': [
    { id: 'glow', label: 'PARLAMA', promptValue: 'Strong neon glow under blacklight' },
    { id: 'subtle', label: 'HAFİF', promptValue: 'Subtle UV that appears only under light' },
    { id: 'pattern', label: 'DESEN', promptValue: 'UV geometric patterns' }
  ],
  'illustrative': [
    { id: 'storybook', label: 'MASAL KİTABI', promptValue: 'Whimsical storybook illustration' },
    { id: 'fantasy', label: 'FANTEZİ', promptValue: 'Fantasy creatures and scenes' },
    { id: 'dark_fairy', label: 'KARANLIK MASAL', promptValue: 'Dark fairytale illustrative style' }
  ],
  'polynesian': [
    { id: 'samoan', label: 'SAMOAN', promptValue: 'Traditional Samoan pe\'a patterns' },
    { id: 'maori', label: 'MAORİ', promptValue: 'Maori ta moko inspired designs' },
    { id: 'tribal', label: 'KABİLE', promptValue: 'General Polynesian tribal motifs' }
  ],
  'haida': [
    { id: 'formline', label: 'FORMLİNE', promptValue: 'Classic Haida formline animals' },
    { id: 'raven', label: 'KUZGUN', promptValue: 'Raven or bear in Haida style' },
    { id: 'totem', label: 'TOTEM', promptValue: 'Totem pole inspired elements' }
  ],
  'scarification': [
    { id: 'raised', label: 'KABARIK', promptValue: 'Simulated raised scar texture' },
    { id: 'pattern', label: 'DESEN', promptValue: 'Tribal scarification patterns' },
    { id: 'hybrid', label: 'HİBRİT', promptValue: 'Scarification mixed with ink' }
  ],
  'anime': [
    { id: 'character', label: 'KARAKTER', promptValue: 'Favorite anime character portrait' },
    { id: 'scene', label: 'SAHNE', promptValue: 'Iconic anime scene recreation' },
    { id: 'chibi', label: 'CHİBİ', promptValue: 'Cute chibi style anime' }
  ],
  'gothic': [
    { id: 'victorian', label: 'VİKTORYEN', promptValue: 'Victorian gothic elements' },
    { id: 'occult', label: 'OKÜLT', promptValue: 'Occult symbols and roses' },
    { id: 'cathedral', label: 'KATEDRAL', promptValue: 'Gothic architecture inspired' }
  ],
  'steampunk': [
    { id: 'gear', label: 'DİŞLİ', promptValue: 'Intricate gears and clockwork' },
    { id: 'airship', label: 'HAVA GEMİSİ', promptValue: 'Airship and Victorian machinery' },
    { id: 'sepia', label: 'SEPIA', promptValue: 'Sepia toned steampunk design' }
  ],
  'dark_art': [
    { id: 'horror', label: 'KORKU', promptValue: 'Macabre horror creatures' },
    { id: 'occult', label: 'OKÜLT', promptValue: 'Dark occult and demonic symbols' },
    { id: 'skull', label: 'KAFATASI', promptValue: 'Elaborate skull compositions' }
  ]
  };
// --- NEW: TATTOO MODELS (FİGÜRLER) ---
export const TATTOO_MODELS: OptionItem[] = [
    { id: 'animal', label: 'HAYVANLAR', promptValue: 'Animal subject' },
    { id: 'automotive', label: 'ARAÇLAR', promptValue: 'Vehicle subject' },
    { id: 'destruction', label: 'YIRTMA / EFEKT', promptValue: 'Destructive effect' },
    { id: 'nature', label: 'DOĞA / ÇİÇEK', promptValue: 'Nature element' },
    { id: 'mythology', label: 'MİTOLOJİ', promptValue: 'Mythological creature' },
    { id: 'symbols', label: 'SEMBOL / NESNE', promptValue: 'Symbolic object' },
    { id: 'portrait', label: 'PORTRE / İNSAN', promptValue: 'Portrait, human face, realistic face' },
    { id: 'geometric', label: 'GEOMETRİK / MANDALA', promptValue: 'Geometric pattern, sacred geometry, mandala' },
    { id: 'lettering', label: 'YAZI / TİPOGRAFİ', promptValue: 'Typography, calligraphy, lettering, quote' },
    { id: 'celestial', label: 'UZAY / GÖKYÜZÜ', promptValue: 'Celestial bodies, space, stars, planets, zodiac' },
    { id: 'skull', label: 'KURUKAFA / DARK', promptValue: 'Skull, skeleton, dark art, reaper' },
    { id: 'anime', label: 'ANİME / KARAKTER', promptValue: 'Anime character, manga style, cartoon figure' },
    { id: 'religious', label: 'DİNİ / RUHANİ', promptValue: 'Religious symbol, angel, cross, buddha' },
    { id: 'biomechanical', label: 'BİYOMEKANİK', promptValue: 'Biomechanical, cyborg parts, robotic under skin' },
    { id: 'tribal', label: 'TRİBAL / MAORİ', promptValue: 'Tribal pattern, Polynesian, Maori style' },
    { id: 'marine', label: 'DENİZCİLİK', promptValue: 'Nautical, anchor, ship, lighthouse' },
    { id: 'minimalist', label: 'MİNİMAL / ÇİZGİSEL', promptValue: 'Minimalist, fine line art, simple outline' },
    { id: 'architectural', label: 'MİMARİ / BİNA', promptValue: 'Architecture, building, monument, cityscape' },
];

export const TATTOO_MODEL_VARIANTS: Record<string, OptionItem[]> = {
'animal': [
        // --- MEVCUT OLANLARIN DETAYLANDIRILMIŞ HALİ ---
        { 
            id: 'wolf', 
            label: 'KURT', 
            promptValue: 'A highly detailed wolf head, intense staring eyes, realistic fur texture, moonlight lighting, sharp contrast, wild nature atmosphere' 
        },
        { 
            id: 'tiger', 
            label: 'KAPLAN', 
            promptValue: 'A fierce tiger face, roaring expression showing teeth, dynamic black stripes, predatory gaze, realistic shading, jungle essence' 
        },
        { 
            id: 'lion', 
            label: 'ASLAN', 
            promptValue: 'A regal lion portrait with a majestic flowing mane, wisdom in eyes, hyper-realistic style, crown symbol potential, king of the jungle' 
        },
        { 
            id: 'cat', 
            label: 'KEDİ', 
            promptValue: 'A mystical black cat silhouette, elegant curves, glowing eyes, minimalist but detailed, perhaps with moon and star elements' 
        },
        { 
            id: 'dragon', 
            label: 'EJDERHA', 
            promptValue: 'A detailed Japanese style dragon, coiled body, intricate scales, smoke clouds background, fierce mythical creature, irezumi style' 
        },
        { 
            id: 'snake', 
            label: 'YILAN', 
            promptValue: 'A coiled cobra or viper ready to strike, detailed scales, wrapped around a dagger or flowers, menacing but aesthetic look' 
        },
        { 
            id: 'eagle', 
            label: 'KARTAL', 
            promptValue: 'A powerful bald eagle with spread wings, soaring pose, high detail on feathers, sharp talons, symbol of freedom and strength' 
        },
        { 
            id: 'butterfly', 
            label: 'KELEBEK', 
            promptValue: 'A symmetrical monarch butterfly, intricate wing patterns, fine line work, dotted shading, surrounded by small floral elements' 
        },
        { 
            id: 'phoenix', 
            label: 'ANKA KUŞU', 
            promptValue: 'A rising phoenix rising from ashes, wings made of stylized fire and smoke, dynamic flow, symbol of rebirth and immortality' 
        },

        // --- YENİ EKLENEN HAYVANLAR ---
        { 
            id: 'bear', 
            label: 'AYI', 
            promptValue: 'A strong grizzly bear face, raw power, heavy fur texture, nature background with pine trees, sketch style or realism' 
        },
        { 
            id: 'owl', 
            label: 'BAYKUŞ', 
            promptValue: 'A wise barn owl perched on a branch, large detailed eyes, geometric feather patterns, night theme, symbol of wisdom' 
        },
        { 
            id: 'deer', 
            label: 'GEYİK', 
            promptValue: 'A noble stag with large branching antlers, forest scenery integration, double exposure effect, serene and majestic' 
        },
        { 
            id: 'elephant', 
            label: 'FİL', 
            promptValue: 'A majestic elephant head, wrinkled skin texture, decorated with mandala ornaments, Indian style, wisdom and memory symbol' 
        },
        { 
            id: 'fox', 
            label: 'TİLKİ', 
            promptValue: 'A cunning fox portrait, geometric shapes mixed with realism, bright eyes, bushy tail, autumn leaves elements' 
        },
        { 
            id: 'koi', 
            label: 'KOİ BALIĞI', 
            promptValue: 'Traditional Japanese Koi fish swimming upstream, water splashes, lotus flowers, movement lines, symbol of luck and perseverance' 
        },
        { 
            id: 'raven', 
            label: 'KUZGUN', 
            promptValue: 'A dark mystery raven, black feathers with blue sheen, open wings, gothic atmosphere, perhaps sitting on a skull' 
        },
        { 
            id: 'octopus', 
            label: 'AHTAPOT', 
            promptValue: 'A giant octopus with twisting tentacles, suckers detail, fluid motion, deep sea theme, intelligence and adaptability' 
        },
        { 
            id: 'horse', 
            label: 'AT', 
            promptValue: 'A wild stallion running, wind in the mane, muscle definition, dynamic motion, symbol of freedom and speed' 
        },
        { 
            id: 'scorpion', 
            label: 'AKREP', 
            promptValue: 'A detailed scorpion, sharp tail stinger, armor-like shell texture, zodiac sign scorpio theme, danger and protection' 
        },
        { 
            id: 'spider', 
            label: 'ÖRÜMCEK', 
            promptValue: 'A realistic black widow or tarantula, intricate spider web background, dark shading, gothic aesthetic' 
        },
        { 
            id: 'jellyfish', 
            label: 'DENİZ ANASI', 
            promptValue: 'A floating jellyfish, long flowing tentacles, ethereal and transparent look, dotwork shading, marine life' 
        }
    ],
'automotive': [
        // --- MEVCUT OLANLARIN DETAYLANDIRILMIŞ HALİ ---
        { 
            id: 'classic_car', 
            label: 'KLASİK ARABA', 
            promptValue: 'A realistic 1960s vintage muscle car, chrome bumpers reflecting light, dynamic angle, smoke from tires, nostalgia vibe, American old school' 
        },
        { 
            id: 'sport_car', 
            label: 'SPOR ARABA', 
            promptValue: 'A modern aerodynamic sleek supercar, low profile, aggressive headlights, motion blur background, street racing atmosphere, neon reflections' 
        },
        { 
            id: 'motorcycle', 
            label: 'CHOPPER MOTOR', 
            promptValue: 'A rugged custom chopper motorcycle, high handlebars, chrome engine details, leather texture, eagle or flame decal integration, freedom road theme' 
        },
        { 
            id: 'engine', 
            label: 'MOTOR / V8', 
            promptValue: 'A detailed V8 engine block, exposed pistons and gears, technical blueprint style overlay, metallic texture, mechanical heart concept' 
        },

        // --- YENİ EKLENEN ARAÇ VE PARÇALAR ---
        { 
            id: 'racer_bike', 
            label: 'YARIŞ MOTORU', 
            promptValue: 'A high-speed sportbike (superbike), knee dragging cornering pose, sleek fairings, racing helmet, adrenaline and speed lines' 
        },
        { 
            id: 'f1_car', 
            label: 'FORMULA 1', 
            promptValue: 'A formula 1 race car, open cockpit, wide tires, aerodynamic wings, checkered flag background, circuit racing theme' 
        },
        { 
            id: 'cafe_racer', 
            label: 'CAFE RACER', 
            promptValue: 'A vintage cafe racer motorcycle, brat style, retro leather seat, clip-on handlebars, minimalist mechanical look, hipster aesthetic' 
        },
        { 
            id: 'offroad', 
            label: 'OFF-ROAD / JEEP', 
            promptValue: 'A modified 4x4 off-road jeep, big tires, muddy texture, mountain terrain background, adventure and exploration theme' 
        },
        { 
            id: 'speedometer', 
            label: 'HIZ GÖSTERGESİ', 
            promptValue: 'A vintage speedometer or tachometer, needle hitting the red line (redline), cracked glass effect, time and speed symbolism' 
        },
        { 
            id: 'piston', 
            label: 'PİSTON / MEKANİK', 
            promptValue: 'A mechanical piston and connecting rod, biomechanical style, grunge oil stains, shading resembling metal and steel' 
        },
        { 
            id: 'turbo', 
            label: 'TURBO', 
            promptValue: 'A detailed turbocharger unit, turbine blades visible, snail shell shape, boost gauge element, street performance symbol' 
        },
        { 
            id: 'spark_plug', 
            label: 'BUJİ', 
            promptValue: 'A realistic spark plug emitting an electric spark, energetic look, symbol of ignition and power, traditional tattoo style' 
        },
        { 
            id: 'gear_shift', 
            label: 'VİTES TOPUZU', 
            promptValue: 'A manual gear stick pattern (H-pattern), hand gripping the shifter, driving passion, detailed leather boot texture' 
        },
        { 
            id: 'shock_absorber', 
            label: 'AMORTİSÖR', 
            promptValue: 'A coilover suspension spring, mechanical engineering detail, shiny chrome metal, technical drawing style' 
        },
        { 
            id: 'scooter', 
            label: 'VESPA / SCOOTER', 
            promptValue: 'A classic Italian style scooter, pastel colors, retro vibe, coastal road background, minimalist and cute design' 
        }
        ],
'destruction': [
        // --- MEVCUT OLANLARIN DETAYLANDIRILMIŞ HALİ ---
        { 
            id: 'torn_skin', 
            label: 'YIRTILMIŞ DERİ (BIOMECH)', 
            promptValue: 'Realistic torn skin effect 3D, ripped flesh revealing robotic gears and biomechanical parts underneath, bloody edges, metallic depth illusion' 
        },
        { 
            id: 'cracked', 
            label: 'ÇATLAK / TAŞLAŞMA', 
            promptValue: 'Cracked stone texture on skin, statue effect, shattered porcelain face, spiderweb fracture lines, crumbling rock aesthetic, ancient ruin vibe' 
        },
        { 
            id: 'melting', 
            label: 'ERİYEN / SÜRREAL', 
            promptValue: 'Surreal melting effect, Salvador Dali style, dripping liquid texture, distorted reality, dissolving clock or face, viscous flow' 
        },
        { 
            id: 'glitch', 
            label: 'GLITCH / DİJİTAL HATA', 
            promptValue: 'Cyberpunk glitch art style, digital distortion, pixel sorting, chromatic aberration, VHS static noise effect, modern tech aesthetic' 
        },

        // --- YENİ EKLENEN EFEKTLER VE TARZLAR ---
        { 
            id: 'trash_polka', 
            label: 'TRASH POLKA', 
            promptValue: 'Trash Polka style, chaotic composition, realistic elements mixed with abstract red and black brush strokes, typography, paint splatters, collage look' 
        },
        { 
            id: 'watercolor_splash', 
            label: 'SULU BOYA / SPLASH', 
            promptValue: 'Watercolor splash effect, colorful paint drips, artistic chaotic stains, fluid abstract background, soft edges, vibrancy without outlines' 
        },
        { 
            id: 'brush_stroke', 
            label: 'FIRÇA DARBESİ', 
            promptValue: 'Heavy black brush stroke, sumi-e ink style, raw texture, dry brush effect, calligraphy motion, enso circle or aggressive strike' 
        },
        { 
            id: 'double_exposure', 
            label: 'ÇİFT POZLAMA', 
            promptValue: 'Double exposure technique, silhouette of a main subject filled with a forest landscape or galaxy scene, seamless blending, surreal composite' 
        },
        { 
            id: 'xray', 
            label: 'X-RAY EFEKTİ', 
            promptValue: 'X-Ray flower or animal effect, transparent layering, seeing the skeleton or structure inside, ghostly blue and white glow, negative space' 
        },
        { 
            id: 'sketch_lines', 
            label: 'KARALAMA / TASLAK', 
            promptValue: 'Sketch style tattoo, rough pencil lines, construction lines visible, messy scribble art, unfinished aesthetic, artistic draft look' 
        },
        { 
            id: 'dispersion', 
            label: 'DAĞILMA / TOZ', 
            promptValue: 'Dispersion effect, subject disintegrating into small particles or birds, fading into dust, motion blur, fragmenting away' 
        },
        { 
            id: 'claw_marks', 
            label: 'PENÇE İZİ', 
            promptValue: 'Deep claw marks ripping through skin, three distinct slashes, realistic wound effect, primal energy, wild animal attack simulation' 
        },
        { 
            id: 'burnt', 
            label: 'YANIK / KAĞIT', 
            promptValue: 'Burnt paper edges effect, charcoal texture, ash particles, old map or manuscript look, vintage decay aesthetic' 
        },
        { 
            id: 'pixel', 
            label: 'PİKSEL / 8-BIT', 
            promptValue: 'Pixel art style, retro 8-bit gaming aesthetic, mosaic squares, low resolution blocky design' 
        }
    ],
'nature': [
        // --- MEVCUT OLANLARIN DETAYLANDIRILMIŞ HALİ ---
        { 
            id: 'rose', 
            label: 'GÜL', 
            promptValue: 'A highly detailed blooming rose, velvety petal texture, sharp thorns on the stem, water droplets, romantic realism or traditional style, deep shading' 
        },
        { 
            id: 'forest', 
            label: 'ORMAN / AĞAÇLAR', 
            promptValue: 'A dense pine tree forest silhouette encircling the arm, misty fog atmosphere, birds flying above, nature immersion, serenity and mystery' 
        },
        { 
            id: 'mountain', 
            label: 'DAĞ MANZARASI', 
            promptValue: 'Majestic mountain peaks with snow caps, rocky texture, adventure theme, geometric framing or realistic landscape, compass element' 
        },
        { 
            id: 'waves', 
            label: 'DALGALAR (JAPON)', 
            promptValue: 'The Great Wave off Kanagawa style, crashing ocean water, sea foam, fluid motion, traditional Japanese Irezumi artistic style' 
        },
        { 
            id: 'moon', 
            label: 'AY & YILDIZ', 
            promptValue: 'A realistic crescent moon surface, craters visible, surrounded by twinkling stars and cosmic dust, celestial magic, dreamlike atmosphere' 
        },

        // --- YENİ EKLENEN DOĞA VE BİTKİ ÖĞELERİ ---
        { 
            id: 'lotus', 
            label: 'LOTUS ÇİÇEĞİ', 
            promptValue: 'A sacred lotus flower blooming in water, unalome symbol integration, mandala pattern petals, spiritual enlightenment, purity, dotwork style' 
        },
        { 
            id: 'tree_of_life', 
            label: 'HAYAT AĞACI', 
            promptValue: 'Tree of life (Yggdrasil), deep roots connecting to spreading branches, circular composition, Celtic knot details, ancient wisdom symbol' 
        },
        { 
            id: 'peony', 
            label: 'ŞAKAYIK (JAPON)', 
            promptValue: 'Traditional Japanese Peony (Botan), large lush petals, wind bars background, flowery and elegant, symbol of wealth and bravery' 
        },
        { 
            id: 'sunflower', 
            label: 'AYÇİÇEĞİ', 
            promptValue: 'A bright sunflower, detailed seed center, organic stem, positive energy, sketch style or van gogh artistic influence' 
        },
        { 
            id: 'cherry_blossom', 
            label: 'SAKURA / KİRAZ ÇİÇEĞİ', 
            promptValue: 'Cherry blossom branch (Sakura), falling petals in the wind, soft pink hues, delicate and fragile beauty, spring season vibe' 
        },
        { 
            id: 'fern', 
            label: 'EĞRELTİ OTU / YAPRAK', 
            promptValue: 'A botanical fern leaf, intricate green leaves, symmetrical organic shape, minimalist nature lover aesthetic, fine line work' 
        },
        { 
            id: 'lily', 
            label: 'ZAMBAK', 
            promptValue: 'An elegant lily flower, long stamens, smooth petals, birth flower concept, feminine and graceful design' 
        },
        { 
            id: 'palm_tree', 
            label: 'PALMİYE', 
            promptValue: 'A single palm tree silhouette, tropical sunset gradient background, beach vibes, minimalist summer symbol' 
        },
        { 
            id: 'lightning', 
            label: 'ŞİMŞEK / FIRTINA', 
            promptValue: 'A forked lightning bolt striking, storm clouds, electric energy, power of nature, zeus theme, sharp white ink highlights' 
        },
        { 
            id: 'landscape_circle', 
            label: 'KAMP / MANZARA', 
            promptValue: 'A circular frame tattoo containing a camping tent, bonfire and night sky, wanderlust theme, detailed miniature landscape' 
        },
        { 
            id: 'sun', 
            label: 'GÜNEŞ', 
            promptValue: 'A stylized sun with rays, Aztec or tribal sun pattern, or minimalist rising sun, symbol of life and energy' 
        },
        { 
            id: 'galaxy', 
            label: 'GALAKSİ / UZAY', 
            promptValue: 'Colorful nebula clouds, spiral galaxy, deep space colors (purple, blue, magenta), stars and planets, infinite universe' 
        }
    ],
'mythology': [
        // --- MEVCUT OLANLARIN DETAYLANDIRILMIŞ HALİ ---
        { 
            id: 'medusa', 
            label: 'MEDUSA', 
            promptValue: 'Medusa portrait with stone texture skin, writhing snakes for hair, mesmerizing glowing white eyes, ancient Greek statue aesthetic, turning to stone effect' 
        },
        { 
            id: 'anubis', 
            label: 'ANUBİS', 
            promptValue: 'The jackal-headed Egyptian God Anubis, holding a staff, ancient hieroglyphs background, gold and black color palette, guardian of the underworld' 
        },
        { 
            id: 'valkyrie', 
            label: 'VALKYRIE', 
            promptValue: 'A fierce Norse Valkyrie warrior woman, winged helmet, intricate armor, holding a spear, dramatic clouds, choosing the slain' 
        },
        { 
            id: 'thor_hammer', 
            label: 'MJOLNIR (THOR)', 
            promptValue: 'Mjolnir (Thor\'s Hammer) resting on cracked ground, electric lightning arcs surrounding it, celtic knot engravings, heavy metal texture' 
        },

        // --- YENİ EKLENEN MİTOLOJİK FİGÜRLER ---
        { 
            id: 'zeus', 
            label: 'ZEUS', 
            promptValue: 'The God Zeus, powerful bearded face, white marble statue style, holding a lightning bolt, stormy sky background, mount olympus atmosphere' 
        },
        { 
            id: 'poseidon', 
            label: 'POSEİDON', 
            promptValue: 'Poseidon rising from the sea, holding a trident, water splashing, flowing beard, powerful ocean god, ruler of the seas' 
        },
        { 
            id: 'odin', 
            label: 'ODIN', 
            promptValue: 'The Allfather Odin, one eye missing (eye patch), flanked by two ravens (Huginn and Muninn), bearded wise warrior, nordic runes' 
        },
        { 
            id: 'atlas', 
            label: 'ATLAS', 
            promptValue: 'Titan Atlas bearing the weight of the celestial sphere (globe) on his shoulders, muscles straining, symbol of endurance and strength' 
        },
        { 
            id: 'archangel', 
            label: 'BAŞMELEK MİKAİL', 
            promptValue: 'Saint Michael the Archangel defeating the devil, dynamic wings, holding a sword, renaissance art style, divine light rays' 
        },
        { 
            id: 'oni_mask', 
            label: 'ONİ MASKESİ (JAPON)', 
            promptValue: 'Traditional Japanese Oni demon mask, sharp fangs, horns, fierce expression, rope details, protection against evil spirits' 
        },
        { 
            id: 'spartan', 
            label: 'SPARTALI / MİĞFER', 
            promptValue: 'A battle-worn Spartan helmet, red plume (crest), shield and spear, ancient warrior spirit, molon labe theme' 
        },
        { 
            id: 'eye_of_horus', 
            label: 'HORUS\'UN GÖZÜ', // DÜZELTİLDİ
            promptValue: 'The Eye of Horus, ancient Egyptian symbol of protection, precise geometric lines, mysterious and mystical feel, sun disk elements' 
        },
        { 
            id: 'hades', 
            label: 'HADES / KURUKAFA', 
            promptValue: 'Hades god of the underworld, dark atmosphere, surrounded by skulls or cerberus (three-headed dog), black smoke, ominous ruler' 
        },
        { 
            id: 'vegvisir', 
            label: 'VİKİNG PUSULASI', 
            promptValue: 'Vegvisir (Viking Compass), ancient runic staves, weathered stone texture, guidance and protection symbol, nordic heritage' 
        },
        { 
            id: 'cupid', 
            label: 'EROS / MELEK', 
            promptValue: 'Cherub or Cupid angel holding a bow and arrow, renaissance painting style, soft clouds, symbol of love' 
        },
        { 
            id: 'mermaid', 
            label: 'DENİZ KIZI', 
            promptValue: 'A mystical mermaid sitting on a rock, long flowing hair, scales on tail, ocean waves, siren song theme' 
        }
    ],
    'symbols': [
        // --- MEVCUT OLANLARIN DETAYLANDIRILMIŞ HALİ ---
        { 
            id: 'clock', 
            label: 'SAAT / KÖSTEKLİ', 
            promptValue: 'A realistic vintage pocket watch, Roman numerals, internal gears visible, cracked glass effect, time passing concept, memento mori theme' 
        },
        { 
            id: 'compass', 
            label: 'PUSULA', 
            promptValue: 'A nautical antique compass rose, map background, north star pointer, travel and guidance symbol, intricate brass details' 
        },
        { 
            id: 'anchor', 
            label: 'ÇAPA', 
            promptValue: 'A heavy iron ship anchor, rusty texture, wrapped with thick rope, seabed background, symbol of stability and hope, old school or realism' 
        },
        { 
            id: 'skull', 
            label: 'KURUKAFA', 
            promptValue: 'A highly detailed human skull, dark hollow eyes, gothic shading, perhaps with a rose or candle, symbol of mortality, black and grey style' 
        },
        { 
            id: 'dagger', 
            label: 'HANÇER / KILIÇ', 
            promptValue: 'A sharp ornamental dagger, jeweled hilt, metallic blade reflection, piercing through a rose or snake, neo-traditional style' 
        },

        // --- YENİ EKLENEN SEMBOL VE NESNELER ---
        { 
            id: 'hourglass', 
            label: 'KUM SAATİ', 
            promptValue: 'An hourglass with sand running out, wooden frame, symbol of time and patience, life and death cycle, intricate carving details' 
        },
        { 
            id: 'crown', 
            label: 'TAÇ', 
            promptValue: 'A royal gold crown, encrusted with jewels and diamonds, velvet texture, symbol of power and authority, king or queen theme' 
        },
        { 
            id: 'key_lock', 
            label: 'ANAHTAR & KİLİT', 
            promptValue: 'An antique skeleton key and a heart-shaped padlock, victorian style, mystery and secrets, intricate metalwork' 
        },
        { 
            id: 'cards', 
            label: 'İSKAMBİL / ŞANS', 
            promptValue: 'Playing cards showing a Royal Flush or Ace of Spades, casino chips, rolling dice, gambling theme, lady luck symbol' 
        },
        { 
            id: 'dreamcatcher', 
            label: 'DÜŞ KAPANI', 
            promptValue: 'A native american dreamcatcher, woven web pattern, hanging feathers blowing in wind, beads, spiritual protection amulet' 
        },
        { 
            id: 'sacred_heart', 
            label: 'KUTSAL KALP', 
            promptValue: 'Sacred Heart symbol, anatomical heart with flames on top, wrapped in thorns, religious icon, radiating light rays' 
        },
        { 
            id: 'feather', 
            label: 'TÜY', 
            promptValue: 'A single realistic bird feather, soft texture, floating in air, birds flying out of it, symbol of freedom and lightness' 
        },
        { 
            id: 'lantern', 
            label: 'FENER / GAZ LAMBASI', 
            promptValue: 'A vintage camping lantern or kerosene lamp, glowing light in darkness, moth flying around, guidance and hope theme' 
        },
        { 
            id: 'arrow', 
            label: 'OK', 
            promptValue: 'A geometric arrow or crossed arrows, native style, feathers at the end, straight lines, symbol of direction and friendship' 
        },
        { 
            id: 'musical', 
            label: 'MÜZİK / NOTA', 
            promptValue: 'Treble clef symbol, musical notes flowing on a staff, guitar or violin silhouette, passion for music, artistic sketch' 
        },
        { 
            id: 'all_seeing_eye', 
            label: 'HER ŞEYİ GÖREN GÖZ', 
            promptValue: 'The Eye of Providence, an eye inside a triangle, rays of light (glory), illuminati or mystic symbol, dotwork or etching style' 
        },
        { 
            id: 'diamond', 
            label: 'ELMAS', 
            promptValue: 'A faceted diamond gemstone, sparkling light reflections, geometric shape, symbol of durability and value, clean lines' 
        }
    ],
    
        'portrait': [
        { id: 'realistic_face', label: 'GERÇEKÇİ YÜZ', promptValue: 'Hyper-realistic human portrait, detailed skin texture, expressive eyes, cinematic lighting' },
        { id: 'statue_bust', label: 'HEYKEL / BÜST', promptValue: 'Classical Greek or Roman marble statue head, stone texture, cracked marble effect, museum lighting' },
        { id: 'silhouette', label: 'SİLUET', promptValue: 'Mysterious human silhouette, dark figure, backlight effect, minimalist profile' },
        { id: 'warrior_face', label: 'SAVAŞÇI', promptValue: 'Warrior face with war paint, fierce expression, historical armor details, grit and texture' },
        { id: 'clown_face', label: 'PALYAÇO / CHICANO', promptValue: 'Chicano style clown girl (Payasa), fine line shading, urban aesthetic, dramatic makeup' }
    ],

    // --- GEOMETRİK / MANDALA ---
    'geometric': [
        { id: 'mandala', label: 'MANDALA', promptValue: 'Intricate floral mandala, perfectly symmetrical, dotwork shading, sacred geometry patterns' },
        { id: 'sacred_geometry', label: 'KUTSAL GEOMETRİ', promptValue: 'Metatron’s Cube, Flower of Life, complex overlapping circles and lines, mathematical precision' },
        { id: 'metatron', label: 'METATRON KÜPÜ', promptValue: 'Metatron cube tattoo, 3D geometric depth, sacred lines, cosmic alignment' },
        { id: 'pattern_sleeve', label: 'GEOMETRİK DOKU', promptValue: 'Repeating geometric patterns, honeycomb or tessellation, optical illusion effect' }
    ],

    // --- YAZI / TİPOGRAFİ ---
    'lettering': [
        { id: 'calligraphy', label: 'KALİGRAFİ', promptValue: 'Elegant fluid calligraphy script, decorative flourishes, handwritten style, artistic ink flow' },
        { id: 'chicano_font', label: 'CHICANO YAZI', promptValue: 'Bold Chicano lettering style, street art graffiti influence, ornate capital letters' },
        { id: 'gothic_font', label: 'GOTİK / BLACKLETTER', promptValue: 'Old English blackletter font, sharp edges, dark gothic typography, medieval style' },
        { id: 'minimal_font', label: 'MİNİMAL YAZI', promptValue: 'Simple typewriter font, clean sans-serif text, fine line lettering, subtle look' }
    ],

    // --- UZAY / GÖKYÜZÜ ---
    'celestial': [
        { id: 'solar_system', label: 'GÜNEŞ SİSTEMİ', promptValue: 'Planets in alignment, detailed Saturn rings, sun and moon, celestial orbits, astronomical map' },
        { id: 'zodiac', label: 'ZODYAK / BURÇ', promptValue: 'Zodiac constellation, star map, astrological symbol, cosmic background' },
        { id: 'galaxy_nebula', label: 'GALAKSİ / NEBULA', promptValue: 'Deep space nebula clouds, vibrant cosmic colors, distant stars and stardust, infinite universe' },
        { id: 'moon_phases', label: 'AYIN EVRELERİ', promptValue: 'Full cycle of moon phases from crescent to full, linear composition, astronomical detail' }
    ],

    // --- KURUKAFA / DARK ---
    'skull': [
        { id: 'realistic_skull', label: 'GERÇEKÇİ KURUKAFA', promptValue: 'Anatomically correct human skull, deep shadows, bone texture, dark realism, dramatic lighting' },
        { id: 'grim_reaper', label: 'AZRAİL', promptValue: 'Grim reaper figure with scythe, hooded cloak, skeletal hands, dark soul atmosphere' },
        { id: 'sugar_skull', label: 'MEKSİKA KURUKAFASI', promptValue: 'Mexican Calavera (Sugar Skull), decorative floral patterns, vibrant or blackwork, Dia de los Muertos style' },
        { id: 'animal_skull', label: 'HAYVAN KURUKAFASI', promptValue: 'Ram or bull skull with horns, desert vibe, weathered bone, tribal or occult symbols' }
    ],

    // --- ANİME / KARAKTER ---
    'anime': [
        { id: 'anime_portrait', label: 'KARAKTER PORTRESİ', promptValue: 'Detailed anime character face, expressive eyes, cel-shaded, iconic manga protagonist' },
        { id: 'manga_panel', label: 'MANGA PANELİ', promptValue: 'Manga page layout with action lines, black and white ink style, screentone textures' },
        { id: 'ghibli_style', label: 'GHIBLI TARZI', promptValue: 'Whimsical Studio Ghibli inspired art, soft colors, nature and magic, nostalgic anime vibe' },
        { id: 'cyberpunk_anime', label: 'CYBERPUNK ANİME', promptValue: 'Mecha or futuristic anime character, neon lights, robotic enhancements, Akira or Ghost in the Shell style' }
    ],

    // --- DİNİ / RUHANİ ---
    'religious': [
        { id: 'angel_wings', label: 'MELEK KANATLARI', promptValue: 'Large detailed feathered wings, divine light, symbolic of protection and purity' },
        { id: 'cross', label: 'HAÇ', promptValue: 'Ornate ornamental cross, stone or wood texture, gothic or minimalist style' },
        { id: 'buddha', label: 'BUDA', promptValue: 'Zen Buddha statue in meditation, serene expression, lotus flower background, spiritual peace' },
        { id: 'praying_hands', label: 'DUA EDEN ELLER', promptValue: 'Realistic praying hands, rosary beads, fine shading, classic spiritual tattoo' }
    ],

    // --- BİYOMEKANİK ---
    'biomechanical': [
        { id: 'cyborg_parts', label: 'SİBORG PARÇALARI', promptValue: 'Exposed hydraulic pistons, wires and cables under skin, metallic joints, sci-fi mechanical realism' },
        { id: 'alien_biomech', label: 'HR GIGER STYLE', promptValue: 'Bio-organic alien machinery, dark surrealism, interlocking tubes and bone-like metal structures' }
    ],

    // --- TRİBAL / MAORİ ---
    'tribal': [
        { id: 'polynesian', label: 'POLİNEZYA / MAORİ', promptValue: 'Traditional Polynesian patterns, Marquesas symbols, shark teeth and spearhead motifs, bold blackwork' },
        { id: 'viking_runes', label: 'VİKİNG / NORSE', promptValue: 'Viking knotwork, runic stones, Aegishjalmur (Helm of Awe), woven dragon patterns' },
        { id: 'celtic_knot', label: 'KELT DÜĞÜMÜ', promptValue: 'Infinite Celtic knots, interwoven lines, Irish heritage symbols, symmetrical trinity' }
    ],

    // --- DENİZCİLİK ---
    'marine': [
        { id: 'ship_sailing', label: 'YELKENLİ GEMİ', promptValue: 'Vintage tall ship on rough seas, detailed rigging and sails, maritime adventure, traditional style' },
        { id: 'lighthouse', label: 'FENER', promptValue: 'Coastal lighthouse guiding through waves, night beam of light, rocky shore, nautical theme' },
        { id: 'diver', label: 'DALGIÇ', promptValue: 'Vintage deep sea diver helmet, bubbles, underwater atmosphere, steampunk marine vibe' },
        { id: 'kraken', label: 'KRAKEN', promptValue: 'Giant octopus or kraken attacking a ship, tentacles wrapping, epic sea monster battle' }
    ],

    // --- MİNİMAL / ÇİZGİSEL ---
    'minimalist': [
        { id: 'single_line', label: 'TEK ÇİZGİ', promptValue: 'One-line drawing, continuous line art, minimalist figure or object, elegant simplicity' },
        { id: 'micro_realism', label: 'MİKRO REALİZM', promptValue: 'Tiny hyper-realistic object, extreme detail in small scale, fine needle work' },
        { id: 'dotwork_small', label: 'NOKTALAMA', promptValue: 'Minimalist dotwork (stippling) design, small geometric or nature element' }
    ],

    // --- MİMARİ / BİNA ---
    'architectural': [
        { id: 'cathedral', label: 'KATEDRAL / GOTİK', promptValue: 'Gothic cathedral architecture, stained glass windows, arches and spires, intricate stone carving' },
        { id: 'cityscape', label: 'ŞEHİR SİLUETİ', promptValue: 'Modern city skyline, skyscrapers, urban landscape, New York or Tokyo vibe' },
        { id: 'castle', label: 'KALE', promptValue: 'Medieval fortress or castle on a hill, fantasy architecture, stone walls and towers' }
    ]
};

export const TATTOO_AREAS: OptionItem[] = [
    { 
        id: 'arm', 
        label: 'KOL', 
        promptValue: 'context: Professional tattoo inked on a woman’s arm (bicep or forearm area). The design follows the slender, cylindrical curvature of the arm. Realistic skin texture, fine pores, and soft natural lighting highlighting the ink contrast against the skin.' 
    },
    { 
        id: 'hand', 
        label: 'EL / PARMAK', 
        promptValue: 'context: Small, delicate tattoo placed on the back of a woman’s hand or fingers. Macro photography, extreme detail showing fine skin lines, elegant knuckles, and smooth texture. The ink appears distinctly, settled naturally into the skin.' 
    },
    { 
        id: 'back', 
        label: 'SIRT', 
        promptValue: 'context: Large scale tattoo artwork placed on a woman’s upper back or spine. The surface shows the graceful contours of the shoulder blades and trapezius muscles. Studio lighting, high resolution skin details, focusing on the symmetrical placement.' 
    },
    { 
        id: 'chest', 
        label: 'GÖĞÜS (Köprücük Kemiği)', 
        promptValue: 'context: Aesthetic tattoo placed just below a woman’s collarbone (clavicle) or along the shoulder line. The design respects the delicate bone structure. Soft, artistic lighting emphasizing elegance and high contrast ink.' 
    },
    { 
        id: 'sternum', 
        label: 'GÖĞÜS ARASI (Underboob)', 
        promptValue: 'context: Intricate artistic tattoo placed on the sternum (center of chest) or curving gracefully around the underboob area. The design perfectly follows the natural contours of the bust. High-detail skin texture with soft, dramatic shadows.' 
    },
    { 
        id: 'ribs', 
        label: 'KABURGA / YAN GÖĞÜS', 
        promptValue: 'context: Long, vertical tattoo placed on a woman’s side/rib cage. The placement emphasizes the feminine curve of the torso. Realistic skin texture, focusing on the area where the skin stretches slightly over the ribs.' 
    },
    { 
        id: 'lower_belly', 
        label: 'GÖBEK ALTI / PELVİK', 
        promptValue: 'context: Aesthetic tattoo placed on the lower abdomen, just below the navel, extending to the pelvic area (hip dips). The design sits on the soft but relatively flat surface. Realistic skin details showing soft tissue interaction and waistline shadows.' 
    },
    { 
        id: 'stomach', 
        label: 'KARIN', 
        promptValue: 'context: Fineline tattoo placed on a woman’s stomach/abdomen area. Shows soft tissue texture and natural torso contours. The ink interacts realistically with the skin elasticity and subtle definition.' 
    },
    { 
        id: 'leg', 
        label: 'BACAK (Uyluk/Baldir)', 
        promptValue: 'context: Large format tattoo inked on a woman’s leg (thigh or calf). The image captures the elegant, vertical curvature of the leg muscles. Photorealistic rendering with natural shadows and gentle skin highlights.' 
    },
    { 
        id: 'inner_thigh', 
        label: 'İÇ BACAK', 
        promptValue: 'context: Delicate tattoo placed on the sensitive inner thigh area of a woman. Shows smooth skin texture and the natural curve of the adductor muscle. Soft, intimate lighting setup focusing on the area between the legs.' 
    },
    { 
        id: 'foot', 
        label: 'AYAK / BİLEK', 
        promptValue: 'context: Tattoo placed on the top of a woman’s foot or ankle area. Shows the subtle bone structure of the foot and thin skin texture. Realistic perspective from a top-down or slight angle view.' 
    },
    { 
        id: 'hip', 
        label: 'KALÇA ÜSTÜ (Hip Bone)', 
        promptValue: 'context: Elegant tattoo placed just above the hip bone (iliac crest) on a woman. The design flows perfectly with the waistline curve and clothing line. Soft lighting, emphasizing an artistic and sensual placement.' 
    },
    { 
        id: 'glute', 
        label: 'KALÇA (Glute)', 
        promptValue: 'context: Detailed tattoo inked on a woman’s glute/buttock area. The design highlights the round curvature and soft tissue volume. Natural skin texture with smooth, artistic lighting emphasizing the form of the muscle.' 
    },
    { 
        id: 'neck', 
        label: 'BOYUN / ENSE', 
        promptValue: 'context: Minimalist tattoo placed on the back of a woman’s neck (nape) or trailing down the spine. Close-up, focusing on the transition between the ink and the hairline. Realistic skin texture showing the neck’s graceful lines.' 
    },
    { 
        id: 'ear', 
        label: 'KULAK ARKASI', 
        promptValue: 'context: Tiny, delicate tattoo placed behind a woman’s ear or following the edge of the earlobe. Macro shot, high detail, showing fine hair roots and skin pores. Subtle and elegant ink application.' 
    },
    { 
        id: 'flat', 
        label: 'DÜZ CİLT ALANI (Close-up)', 
        promptValue: 'context: Photorealistic tattoo close-up on a smooth patch of a woman’s skin. Focus purely on the highly detailed interaction between ink and skin texture (dermal layer). Neutral background, extreme macro detail.' 
    },
    { 
        id: 'face', 
        label: 'YÜZ', 
        promptValue: 'context: Minimalist face tattoo placed on a woman’s cheekbone or temple. High fashion photography style. The ink blends subtly with facial contours and flawless skin complexion.' 
    },
    { 
        id: 'stencil', 
        label: 'KAĞIT (TASLAK)', 
        promptValue: 'context: A clean, 2D vector-style tattoo flash design on plain white paper. High contrast black ink, sharp lines, no shading, no body parts. Perfect for a stencil print.' 
    },
];

export const TATTOO_AREA_VARIANTS: Record<string, OptionItem[]> = {
    // TATTOO_AREAS listesindeki 'face' bölgesinin alt varyantları
    'face': [
        { 
            id: 'eyebrow', 
            label: 'KAŞ ÜSTÜ', 
            promptValue: 'context: Micro-tattoo placement on a woman’s face, resting on the supraorbital ridge above the eyebrow line. The delicate design follows the natural curvature of the brow bone. High-detail macro shot focusing on individual brow hairs and soft forehead skin texture.' 
        },
        { 
            id: 'cheek', 
            label: 'YANAK / ELMACIK', 
            promptValue: 'context: Minimalist tattoo placement on a woman’s cheekbone (zygomatic arch). The artwork contours gently with the natural volume and symmetry of the face. High-fashion portrait style, capturing the interaction between the ink and natural skin complexion/blush.' 
        },
        { 
            id: 'lip_above', 
            label: 'DUDAK ÜSTÜ', 
            promptValue: 'context: Placement on a woman’s philtrum area (space between the nose and upper lip). Extreme close-up focus showing the defined cupid\'s bow and fine skin pores. Delicate, symmetrical or offset alignment, realistic skin stretching.' 
        },
        { 
            id: 'lip_below', 
            label: 'DUDAK ALTI', 
            promptValue: 'context: Placement in the labret area on a woman’s face, just below the lower lip. The design sits in the natural indentation of the chin/face transition. Sharp macro focus on the lip texture and subtle lower facial anatomy.' 
        },
        { 
            id: 'temple', 
            label: 'ŞAKAK', 
            promptValue: 'context: Fine-line tattoo placement on a woman’s temple region, between the eye and the hairline. The design respects the flatness of the temporal bone and thin skin. Soft profile lighting, visible hairline details and soft shadows.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'arm' bölgesinin alt varyantları
    'arm': [
        { 
            id: 'shoulder', 
            label: 'OMUZ', 
            promptValue: 'context: Elegant tattoo placement on a woman’s shoulder cap. The design wraps seamlessly over the graceful, spherical curvature of the deltoid muscle, creating a fluid 3D effect. Soft studio lighting captures highlights on the smooth skin texture.' 
        },
        { 
            id: 'bicep', 
            label: 'PAZU (İÇ)', 
            promptValue: 'context: Placement on a woman’s inner bicep, a softer tissue area. The arm is slightly turned to elegantly reveal the placement. The tattoo design stretches naturally with the muscle’s relaxed state, showing subtle definition and skin pores.' 
        },
        { 
            id: 'forearm_inner', 
            label: 'ÖN KOL (İÇ)', 
            promptValue: 'context: Delicate tattoo placement on the inner forearm of a woman, a relatively flat and highly visible surface. The image captures the length of the arm from wrist to elbow crease. High-detail view with subtle veins beneath the thin skin and fine arm hairs.' 
        },
        { 
            id: 'forearm_outer', 
            label: 'ÖN KOL (DIŞ)', 
            promptValue: 'context: Placement on the outer side of a woman’s forearm. Direct, natural lighting emphasizes the gentle muscle contours and realistic shadows. The ink appears bold and clear, showing realistic interaction with skin texture and fine hairs.' 
        },
        { 
            id: 'wrist', 
            label: 'BİLEK', 
            promptValue: 'context: Placement wrapping around a woman’s wrist like a cuff or bracelet. The design follows the elegant contours of the underlying wrist bones and tendons. Close-up shot showing the delicate transition to the hand and natural skin creases.' 
        },
        { 
            id: 'elbow', 
            label: 'DİRSEK', 
            promptValue: 'context: Placement centered around the elbow joint of a woman. The design is shown on a slightly bent arm to demonstrate how it adapts to the folded and uniquely textured skin of the joint. Focus on the realistic stretching and texture around the bone.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'hand' bölgesinin alt varyantları
    'hand': [
        { 
            id: 'hand_back', 
            label: 'EL ÜSTÜ', 
            promptValue: 'context: Elegant tattoo placement on the dorsal side (back) of a woman’s hand. The design contours gently over the visible metacarpal bones and slender tendons. Realistic skin texture, distinct pores, and soft lighting emphasizing the hand\'s graceful anatomy.' 
        },
        { 
            id: 'palm', 
            label: 'AVUÇ İÇİ', 
            promptValue: 'context: Rare tattoo placement directly on the palm of a woman’s hand. The ink interacts with the unique friction ridges and deep palmar creases (lifelines). The texture is distinct (matte, thick skin), captured with high contrast lighting.' 
        },
        { 
            id: 'fingers', 
            label: 'PARMAKLAR', 
            promptValue: 'context: Micro-tattoo placement on a woman’s fingers (phalanges) or knuckles. The design wraps slightly around the slender, cylindrical curvature. Macro photography style, capturing the soft wrinkled texture of the finger joints and high-definition ink details.' 
        },
        { 
            id: 'thumb', 
            label: 'BAŞPARMAK', 
            promptValue: 'context: Placement on the fleshy base of a woman’s thumb (thenar eminence) or along the side. The design flows with the soft muscular curve. Detailed transition area between the thicker palm skin and thinner dorsal skin.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'leg' bölgesinin alt varyantları
    'leg': [
        { 
            id: 'thigh', 
            label: 'ÜST BACAK (Ön)', 
            promptValue: 'context: Large format tattoo placement on a woman’s upper thigh (quadriceps). The design follows the broad, smooth cylindrical curvature of the muscle group. Soft, cinematic lighting emphasizes the volume of the leg and flawless skin texture.' 
        },
        { 
            id: 'calf', 
            label: 'BALDIR', 
            promptValue: 'context: Placement on the back of a woman’s lower leg, specifically the calf muscle (gastrocnemius). The artwork contours to the distinct, rounded shape of the muscle belly. High contrast lighting highlights graceful muscle definition and depth.' 
        },
        { 
            id: 'shin_front', 
            label: 'KAVAL (ÖN)', 
            promptValue: 'context: Placement on the front shin (tibia) of a woman. The skin is thin here, sitting directly over the hard bone surface. The design appears sharp and distinct, contouring slightly to the vertical ridge of the shin bone.' 
        },
        { 
            id: 'inner_thigh', 
            label: 'İÇ BACAK (Hassas Bölge)', 
            promptValue: 'context: Intimate tattoo placement on a woman’s sensitive inner thigh area. Shows extremely delicate, smooth skin texture and the natural curve of the adductor muscle. Soft, artistic lighting setup focusing on this secluded area.' 
        },
        { 
            id: 'knee', 
            label: 'DİZ', 
            promptValue: 'context: Placement directly on a woman’s kneecap (patella). The skin is distinct, slightly wrinkled due to joint movement. The design adapts to the complex structure of the knee, appearing naturally distorted by the bone. High-detail macro texture.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'foot' bölgesinin alt varyantları
    'foot': [
        { 
            id: 'ankle', 
            label: 'AYAK BİLEĞİ', 
            promptValue: 'context: Elegant tattoo placement wrapping around a woman’s ankle joint, focusing on the protruding ankle bone (malleolus). The design creates a delicate jewelry-like effect. Smooth, delicate skin texture with natural shadowing around the bone.' 
        },
        { 
            id: 'foot_top', 
            label: 'AYAK ÜSTÜ', 
            promptValue: 'context: Placement on the dorsum (top) of a woman’s foot. The design lays over the visible metatarsal bones and slender tendons. The skin is thin and translucent, revealing subtle vein details. Perspective emphasizes the graceful slope of the foot.' 
        },
        { 
            id: 'sole', 
            label: 'TABAN', 
            promptValue: 'context: Extremely rare tattoo placement on the plantar surface (sole) of a woman’s foot. The skin texture is distinctly thick, matte, and hairless with deep natural creases and ridges. The design follows the curve of the foot arch. High contrast lighting emphasizes the unique texture of the sole.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'chest' ve 'sternum' bölgelerinin alt varyantları
    'chest': [
        { 
            id: 'collarbone', // Clavicle güncellendi
            label: 'KÖPRÜCÜK KEMİĞİ', 
            promptValue: 'context: Delicate tattoo placement flowing along a woman’s clavicle (collarbone) ridge. The design interacts elegantly with the protruding bone structure and the hollow of the sub-clavicular fossa. Fine-line aesthetic suitable for thin skin over bone.' 
        },
        { 
            id: 'sternum', 
            label: 'GÖĞÜS ORTASI (STERNUM)', 
            promptValue: 'context: Intricate central tattoo placement on a woman’s sternum (breastbone). The area is flat and bony with tight skin. Perfect symmetry, high contrast. Shadows emphasize the depth of the central valley of the chest/bust.' 
        },
        { 
            id: 'underboob', // Yeni eklendi/güncellendi
            label: 'MEME ALTI (UNDERBOOB)', 
            promptValue: 'context: Ornate tattoo placement curving gracefully beneath a woman’s breast (inframammary fold/underboob). The design follows the smooth, rounded volume of the bust. Soft, intimate lighting and high-detail skin texture that respects the form.' 
        },
        { 
            id: 'ribs', 
            label: 'KABURGA / YAN GÖVDE', 
            promptValue: 'context: Placement on a woman’s lateral ribcage (side body). The design wraps elegantly around the curvature of the torso, emphasizing the hourglass figure. The texture reveals the underlying rhythmic ridges of the individual ribs. Realistic skin stretching.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'stomach' bölgesinin alt varyantları
    'stomach': [
        { 
            id: 'navel', 
            label: 'GÖBEK ÇEVRESİ', 
            promptValue: 'context: Central tattoo placement on a woman’s abdomen, centered around the navel (umbilicus). The design incorporates or frames the belly button indentation. The ink adapts to the softer skin texture and natural subtle folds of the midsection. Soft, diffused lighting.' 
        },
        { 
            id: 'lower_belly', 
            label: 'ALT KARIN', 
            promptValue: 'context: Aesthetic tattoo placement on a woman’s lower abdomen (hypogastrium), spanning the area just above the pelvic bone. The surface is gently curved and soft. The design follows the natural horizontal flow of the lower torso. Realistic skin shading.' 
        },
        { 
            id: 'solar_plexus', 
            label: 'MİDE BOŞLUĞU', 
            promptValue: 'context: Placement on a woman’s solar plexus (epigastric region), nestled in the inverted "V" space between the ribcage arches. The skin is tauter here. The design aligns perfectly with the central axis of the torso (linea alba).' 
        },
    ],
    // TATTOO_AREAS listesindeki 'back' bölgesinin alt varyantları
    'back': [
        { 
            id: 'upper_back', 
            label: 'ÜST SIRT', 
            promptValue: 'context: Large-scale tattoo placement across a woman’s upper back, spanning the trapezius and scapula (shoulder blade) area. The design flows elegantly over the bony prominence of the shoulder blades and muscle relief. Studio lighting highlights the breadth of the shoulders and realistic skin pores.' 
        },
        { 
            id: 'lower_back', 
            label: 'BEL / ALT SIRT (Tramp Stamp)', 
            promptValue: 'context: Classic lower back tattoo placement (lumbar region), settling just above the hips. The surface gently curves inwards towards the spine. The design follows the horizontal symmetry of the waistline. Soft shadows emphasize the transition to the gluteal area.' 
        },
        { 
            id: 'spine', 
            label: 'OMURGA', 
            promptValue: 'context: Vertical, elegant tattoo placement running directly along a woman’s spinal column. The ink sits tightly over the protruding vertebrae bones, creating a textured interaction with the skeletal structure. Sharp focus on the central axis symmetry, high contrast.' 
        },
        { 
            id: 'full_back', 
            label: 'TAM SIRT (Backpiece)', 
            promptValue: 'context: A monumental full backpiece covering a woman’s entire back, from shoulders to waist. The artwork integrates seamlessly with the complex topography of the latissimus dorsi, spine, and shoulder blades. Grand scale composition, natural warping with the body’s main muscle groups.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'neck' bölgesinin alt varyantları
    'neck': [
        { 
            id: 'side', 
            label: 'YAN', 
            promptValue: 'context: Bold tattoo placement on the lateral side of a woman’s neck. The design flows along the vertical path of the Sternocleidomastoid muscle (SCM). Natural shadows cast by the jawline add depth. The ink curves around the graceful cylindrical neck form.' 
        },
        { 
            id: 'nape', 
            label: 'ENSE', 
            promptValue: 'context: Discreet tattoo placement on the posterior neck (nape) of a woman, centered just below the hairline. Focus on the texture transition from fine baby hairs to smooth skin and the subtle bump of the C7 vertebra. The area is relatively flat.' 
        },
        { 
            id: 'throat', 
            label: 'BOĞAZ (Ön)', 
            promptValue: 'context: High-impact tattoo placement on the anterior neck (throat/trachea). The design contours heavily over the hollow of the throat and the subtle bone structure. Bold placement where the image warps around the distinct vertical curve of the windpipe.' 
        },
    ],
    // TATTOO_AREAS listesindeki 'ear' bölgesinin alt varyantları
    'ear': [
        { 
            id: 'behind_ear', 
            label: 'KULAK ARKASI', 
            promptValue: 'context: Minimalist tattoo placement in the post-auricular region of a woman, specifically on the mastoid bone area. The design follows the curve of the hairline. Macro details showing fine baby hairs, skin texture, and the natural shadow cast by the ear itself.' 
        },
        { 
            id: 'lobe', 
            label: 'KULAK MEMESİ', 
            promptValue: 'context: Micro-tattoo placement on a woman’s ear lobule (soft fleshy lower part). The ink sits on the smooth tissue, distinct from the cartilage above. High-definition macro shot capturing the pore texture and the soft, rounded volume of the lobe.' 
        }
    ],
    // TATTOO_AREAS listesindeki 'hip' ve 'glute' bölgelerinin alt varyantları
    'hip': [
        { 
            id: 'side_hip', 
            label: 'YAN KALÇA', 
            promptValue: 'context: Elegant tattoo placement on the lateral hip area of a woman. The design emphasizes the natural hourglass curvature and soft volume of the hip. Soft, flattering lighting accentuates the smooth skin gradation and roundness of the form.' 
        },
        { 
            id: 'lower_waist', 
            label: 'BEL YANI (İliak Kemik Üstü)', 
            promptValue: 'context: Aesthetic tattoo placement specifically along a woman’s Iliac Crest (hip bone). The design flows diagonally or horizontally, sitting tightly on the protruding bony ridge. Taut skin texture, high-fashion aesthetic highlighting the bone structure.' 
        },
        { 
            id: 'glute', 
            label: 'KALÇA (Gluteal)', 
            promptValue: 'context: Artistic tattoo placement inked on a woman’s glute/buttock area. The design highlights the round curvature and soft tissue volume. Natural skin texture with smooth, artistic lighting emphasizing the flawless form of the muscle.' 
        },
    ]
};

export const TATTOO_COLORS: OptionItem[] = [
    { 
        id: 'blackwork', 
        label: 'SİYAH (SOLID/BOLD)', 
        promptValue: 'style: Solid Carbon Black ink. High contrast, distinct bold lines, deep saturation. No shading gradients, just pure black and negative space.' 
    },
    { 
        id: 'greywash', 
        label: 'SİYAH & GRİ (REALISTIC)', 
        promptValue: 'style: Black and Grey Realism (Greywash). Smooth shading gradients created by diluted ink. Uses the natural skin tone as the highlight layer. Soft transitions, photographic depth.' 
    },
    { 
        id: 'color', 
        label: 'CANLI RENKLİ (NEO-TRAD)', 
        promptValue: 'style: Vibrant Full Color. High pigment density, Neo-Traditional palette. Rich saturation, smooth color blending, and distinct chromatic contrast against the skin.' 
    },
    { 
        id: 'watercolor', 
        label: 'SULU BOYA (WATERCOLOR)', 
        promptValue: 'style: Abstract Watercolor. Fluid ink effects, paint splashes, drips, and soft bleeding edges. Translucent colors without heavy black outlines. Artistic and painterly look.' 
    },
    { 
        id: 'red_black', 
        label: 'KIRMIZI & SİYAH (TRASH POLKA)', 
        promptValue: 'style: Trash Polka aesthetic. High contrast combination of deep black and vivid blood red ink. Aggressive, chaotic yet structured look with graphic elements.' 
    },
    { 
        id: 'pastel', 
        label: 'PASTEL / SOFT', 
        promptValue: 'style: Soft Pastel aesthetic. Muted, low-saturation colors (lavender, mint, baby pink). Delicate application, airy and light appearance, resembling a healed tattoo.' 
    },
    { 
        id: 'blue_ink', 
        label: 'MAVİ (FINE LINE)', 
        promptValue: 'style: Monochromatic Blue Ink (like classic ballpoint or porcelain patterns). Fine line work, consistent blue tone throughout. Vintage or minimalist aesthetic.' 
    },
    { 
        id: 'white', 
        label: 'BEYAZ MÜREKKEP', 
        promptValue: 'style: White Ink only. Very subtle, low contrast visibility. Looks like a delicate scarification or lace on the skin. Slightly raised texture, absorbing the skin undertone.' 
    },
];

export const OUTFIT_SHOE_TYPES: OptionItem[] = [
    { 
        id: 'sneakers', 
        label: 'SPOR AYAKKABI', 
        promptValue: 'High-end designer sneakers, premium leather and technical mesh mix, modern streetwear aesthetic, detailed stitching, clean volumetric lighting, 8k resolution, photorealistic fashion product shot.' 
    },
    { 
        id: 'boots', 
        label: 'BOT/ÇİZME', 
        promptValue: 'Luxury leather boots, sophisticated silhouette, high-quality texture (smooth leather or rich suede), durable sole, polished finish, studio lighting, fashion editorial style, sharp details.' 
    },
    { 
        id: 'heels', 
        label: 'TOPUKLU', 
        promptValue: 'Elegant high heels, luxury stilettos, glossy patent leather or satin finish, sharp silhouette, glamorous and feminine, vogue magazine aesthetic, cinematic lighting, high fashion.' 
    },
    { 
        id: 'classic', 
        label: 'KLASİK', 
        promptValue: 'Classic formal shoes, handcrafted oxford or loafer style, polished full-grain leather, timeless elegance, business professional, sartorial detail, rich texture, gentleman style.' 
    },
    { 
        id: 'sandals', 
        label: 'SANDALET', 
        promptValue: 'Chic designer sandals, minimalist straps, high-quality material, summer elegance, open-toe design, refined and airy look, soft natural lighting, detailed texture.' 
    },
    { 
        id: 'slippers', 
        label: 'TERLİK', 
        promptValue: 'Luxury comfort slippers or slides, soft premium texture, ergonomic design, relaxed but stylish, cozy aesthetic, high-detail textile texture, modern home fashion.' 
    },
    { 
        id: 'socks', 
        label: 'ÇORAP', 
        promptValue: 'Premium quality socks, detailed fabric weave, soft cotton or wool blend, perfect fit, complementary fashion accessory, high-resolution textile detail, macro photography style.' 
    },
];

export const OUTFIT_SHOE_VARIANTS: Record<string, OptionItem[]> = {
    'sneakers': [
       { 
            id: 'jordan', 
            label: 'JORDAN 1 HIGH', 
            promptValue: 'Iconic Air Jordan 1 High silhouette, premium full-grain leather construction, classic high-top basketball sneaker, perforated toe box, ankle strap detail, bold color blocking, street culture staple, 8k detailed texture.' 
        },
        { 
            id: 'dunk', 
            label: 'DUNK LOW', 
            promptValue: 'Nike Dunk Low style skate sneaker, two-tone colorway, smooth leather upper, low-profile silhouette, padded tongue, durable rubber outsole, urban streetwear aesthetic, clean studio shot.' 
        },
        { 
            id: 'yeezy', 
            label: 'YEEZY 350', 
            promptValue: 'Adidas Yeezy Boost 350 V2 style, Primeknit woven upper texture, distinct side stripe, translucent ribbed midsole, futuristic organic shape, sock-like fit, modern minimalist fashion.' 
        },
        
        // --- RETRO & TERRACE (TREND) ---
        { 
            id: 'samba', 
            label: 'SAMBA / GAZELLE', 
            promptValue: 'Classic retro football trainer (Samba/Gazelle style), low profile silhouette, premium suede T-toe overlay, gum rubber sole, leather three-stripes, vintage terrace fashion aesthetic, textured detail.' 
        },
        { 
            id: 'nb', 
            label: 'RETRO RUNNER (NB)', 
            promptValue: 'New Balance 9060/2002R style retro runner, complex layered upper with premium suede and breathable mesh, chunky dad-shoe aesthetic, technical midsole detailing, neutral tones, comfortable look.' 
        },
        { 
            id: 'converse', 
            label: 'CANVAS HIGH', 
            promptValue: 'Converse Chuck 70 High Top style, heavy-grade canvas texture, glossy off-white rubber toe cap and midsole, vintage stitching details, classic casual silhouette, timeless design.' 
        },

        // --- SKATE & SOKAK ---
        {
            id: 'vans',
            label: 'OLD SKOOL',
            promptValue: 'Classic skate shoe (Old Skool style), canvas and suede combination, iconic side stripe, white rubber waffle sole, durable construction, laid-back California aesthetic.'
        },

        // --- LÜKS & AVANT-GARDE ---
        { 
            id: 'white', 
            label: 'LÜKS BEYAZ', 
            promptValue: 'High-end minimalist white sneakers (Common Projects style), pristine Italian leather, sleek low-top profile, gold foil serial number detail, ultra-clean look, luxury essential.' 
        },
        { 
            id: 'chunky', 
            label: 'CHUNKY / TRIPLE S', 
            promptValue: 'Balenciaga Triple S style exaggerated chunky sneakers, triple-stacked sole unit, distressed mesh and leather layers, heavy oversized silhouette, high-fashion streetwear, complex detailing.' 
        },
        {
            id: 'rick',
            label: 'AVANT-GARDE (RICK)',
            promptValue: 'Rick Owens Ramones or Geobasket style, exaggerated high-top, thick shark-tooth sole or bumper sole, dark gothic fashion, premium leather or heavy canvas, brutalist design, monochromatic.'
        },

        // --- TEKNİK & OUTDOOR (GORPCORE) ---
        { 
            id: 'salomon', 
            label: 'TEKNİK / OUTDOOR', 
            promptValue: 'Salomon XT-6 style technical sneaker, gorpcore aesthetic, quick-lace system, advanced mesh and TPU film overlay, aggressive tread, outdoor performance look, futuristic utilitarian design.' 
        },
    ],
    'boots': [
 { 
            id: 'martens', 
            label: 'COMBAT (MARTENS)', 
            promptValue: 'Dr. Martens Jadon style platform combat boots, polished smooth leather, iconic yellow stitching, thick air-cushioned Quad sole, 8-eye lace-up, punk-grunge aesthetic, sturdy and rebellious look.' 
        },
        { 
            id: 'prada', 
            label: 'MONOLITH / UTILITY', 
            promptValue: 'Prada Monolith style chunky combat boots, attached nylon ankle pouch detail, brushed rois leather, exaggerated rugged lug sole, military-inspired high fashion, utilitarian luxury.' 
        },

        // --- KLASİK & ŞIK ---
        { 
            id: 'chelsea', 
            label: 'CHELSEA', 
            promptValue: 'Classic Chelsea boots, sleek silhouette, premium smooth calfskin leather or suede, elastic side panels, pull tabs, refined almond toe, versatile urban elegance, Bottega Veneta or Saint Laurent aesthetic.' 
        },
        { 
            id: 'high_knee', 
            label: 'DİZ ÜSTÜ / ÇORAP', 
            promptValue: 'Over-the-knee boots (Stuart Weitzman style), stretch suede or soft leather material, form-fitting thigh-high silhouette, block heel or flat, elegant and seductive, high-end fall fashion.' 
        },
        { 
            id: 'heeled_ankle', 
            label: 'TOPUKLU BOT', 
            promptValue: 'Chic ankle boots with block heel, pointed or square toe, minimalist leather design, zipper closure, modern city fashion, sharp silhouette, office-ready elegance.' 
        },

        // --- TREND & SOKAK MODASI ---
        { 
            id: 'biker', 
            label: 'BIKER / MOTO', 
            promptValue: 'Distressed leather biker boots (Miu Miu style), heavy silver buckle details, harness straps, square toe, rugged vintage effect, oily leather texture, trendy grunge-chic aesthetic.' 
        },
        { 
            id: 'timberland', 
            label: 'TIMBERLAND', 
            promptValue: 'Classic 6-inch work boots, premium wheat nubuck leather, padded black collar, rugged rubber lug outsole, waterproof construction, iconic streetwear and workwear staple.' 
        },
        { 
            id: 'cowboy', 
            label: 'WESTERN / KOVBOY', 
            promptValue: 'Authentic Western cowboy boots, angled Cuban heel, pointed toe, intricate decorative stitching on shaft, distressed or polished leather, Americana boho-chic style.' 
        },

        // --- AVANT-GARDE & STATEMENT ---
        { 
            id: 'tabi', 
            label: 'TABI (MARGIELA)', 
            promptValue: 'Maison Margiela Tabi boots style, iconic split-toe design, cylindrical block heel, soft vintage leather, avant-garde fashion, artistic and unconventional silhouette.' 
        },
        { 
            id: 'puddle', 
            label: 'YAĞMUR (PUDDLE)', 
            promptValue: 'Bottega Veneta Puddle boot style, biodegradable rubber material, chunky rounded toe, wavy outsole, glossy or matte finish, waterproof, modern minimalist rain boot.' 
        },

        // --- KIŞ & KONFOR ---
        { 
            id: 'ugg', 
            label: 'UGG / SHEEPSKIN', 
            promptValue: 'UGG Ultra Mini style sheepskin boots, soft twin-face sheepskin texture, plush wool lining visible, rounded toe, flexible EVA sole, cozy casual winter aesthetic, matte chestnut finish.' 
        },
        { 
            id: 'moon', 
            label: 'MOON BOOT', 
            promptValue: 'Moon Boot style snow boots, oversized puffy nylon silhouette, criss-cross lacing, thick rubber sole, retro-futuristic winter ski aesthetic, voluminous and bold.' 
        },    ],
    'heels': [
{ 
            id: 'louboutin', 
            label: 'SO KATE (LOUBOUTIN)', 
            promptValue: 'Christian Louboutin So Kate style stilettos, high-gloss patent leather, iconic red lacquered sole visible, razor-sharp 120mm heel, pointed toe, deep vamp, seductive silhouette, studio photography.' 
        },
        { 
            id: 'ysl', 
            label: 'OPYUM (YSL)', 
            promptValue: 'Saint Laurent Opyum sandals, structural metal YSL monogram heel in gold or black, patent leather straps, square toe, architectural footwear design, luxury evening wear, sharp contrast.' 
        },
        { 
            id: 'valentino', 
            label: 'ROCKSTUD', 
            promptValue: 'Valentino Garavani Rockstud pumps, caged strap design with signature pyramid studs, grainy leather or patent finish, pointed toe, edgy yet elegant, Italian luxury aesthetic.' 
        },

        // --- PARTİ & IŞILTI (STATEMENT) ---
        { 
            id: 'mach', 
            label: 'KRİSTAL FİYONK', 
            promptValue: 'Mach & Mach style double bow pumps, satin finish with heavy crystal embellishment, sparkling jewelry-like details, wrap-around ankle straps, pointed toe, glamorous party aesthetic, magical lighting.' 
        },
        { 
            id: 'platform', 
            label: 'PLATFORM (VERSACE)', 
            promptValue: 'Versace Medusa Aevitas style platform pumps, satin fabric, double platform sole, thick block heel, ankle strap with rhinestone charm, bold maximalist statement, vibrant fashion.' 
        },
        { 
            id: 'amina', 
            label: 'KADEH TOPUK', 
            promptValue: 'Amina Muaddi style pumps, signature flared "martini glass" heel, transparent PVC or satin upper, crystal brooch detail on toe, modern architectural design, trendy celebrity style.' 
        },

        // --- ZARİF & MODERN KLASİK ---
        { 
            id: 'slingback', 
            label: 'SLINGBACK (CHANEL)', 
            promptValue: 'Classic two-tone slingback pumps (Chanel style), beige leather body with contrasting black cap toe, modest block heel, timeless lady-like elegance, old money aesthetic, refined texture.' 
        },
        { 
            id: 'transparent', 
            label: 'ŞEFFAF / PVC', 
            promptValue: 'Cinderella style clear PVC heels, holographic or metallic reflections, glass-slipper effect, invisible straps, floating silhouette, magical and ethereal look, soft lighting.' 
        },
        { 
            id: 'mule', 
            label: 'MULE / TERLİK', 
            promptValue: 'High-heeled designer mules (Bottega Veneta style), woven leather (intrecciato) or padded quilt texture, square toe, open back, slip-on elegant design, sophisticated summer luxury.' 
        },

        // --- RAFLINE & MİNİMAL ---
        { 
            id: 'kitten', 
            label: 'KITTEN HEEL', 
            promptValue: 'Minimalist kitten heel pumps, sharp pointed toe, low thin heel, smooth leather or satin, 90s fashion revival, understated chic, comfortable yet stylish.' 
        },
        { 
            id: 'strappy', 
            label: 'İPLİ / BAĞLAMALI', 
            promptValue: 'Minimalist strappy gladiator heels, thin leather laces tied up the ankle or calf, stiletto heel, bare look, summer evening elegance, refined and sexy.' 
        },    ],
'classic': [
        // --- RESMİ & İŞ (FORMAL) ---
        { 
            id: 'oxford', 
            label: 'OXFORD (CAP-TOE)', 
            promptValue: 'Classic Cap-Toe Oxford shoes, closed lacing system, high-shine polished black calfskin leather, sleek silhouette, formal business attire, tuxedo essential, timeless elegance, sharp reflection.' 
        },
        { 
            id: 'derby', 
            label: 'DERBY / BROGUE', 
            promptValue: 'Wingtip Brogue Derby shoes, intricate perforated detailing (brogueing) on toe and sides, open lacing, rich tan or oxblood leather with burnished patina effect, vintage gentleman aesthetic.' 
        },
        { 
            id: 'monk', 
            label: 'MONK STRAP', 
            promptValue: 'Double Monk Strap shoes, polished leather, two metallic buckles (silver or brass) on the side, cap toe design, sartorial Italian style, sophisticated and sharp look.' 
        },

        // --- GÜNLÜK ŞIKLIK (SMART CASUAL) ---
        { 
            id: 'loafer', 
            label: 'LOAFER (HORSEBIT)', 
            promptValue: 'Gucci style Horsebit loafers, smooth black or brown leather, signature gold metal hardware across the vamp, moccasin construction, almond toe, old money aesthetic, luxury casual.' 
        },
        { 
            id: 'penny', 
            label: 'PENNY LOAFER', 
            promptValue: 'Classic Penny Loafers, burgundy or cordovan leather, leather strap with cutout across the vamp, beefroll stitching details, preppy ivy league style, versatile classic.' 
        },
        { 
            id: 'driving', 
            label: 'SÜRÜCÜ (DRIVING)', 
            promptValue: 'Tod\'s Gommino style driving shoes, soft premium suede texture, signature rubber pebble outsole extending to heel, bow detail, relaxed luxury, comfortable Italian summer style.' 
        },

        // --- YAZ & DENİZCİ (SUMMER CLASSIC) ---
        { 
            id: 'boat', 
            label: 'TEKNE (BOAT SHOE)', 
            promptValue: 'Sperry style classic boat shoes, oil-tanned leather, leather lacing system wrapping around the heel, white non-marking rubber sole, hand-sewn moccasin toe, nautical aesthetic.' 
        },
        { 
            id: 'espadrille', 
            label: 'ESPADRİL', 
            promptValue: 'Luxury canvas or suede espadrilles, braided jute rope sole, slip-on design, relaxed Mediterranean summer style, natural textures, soft lighting.' 
        },

        // --- AKŞAM & DAVET (EVENING) ---
        { 
            id: 'velvet', 
            label: 'KADİFE SLIPPER', 
            promptValue: 'Velvet smoking slippers, deep black or burgundy plush velvet texture, embroidered gold crest or plain vamp, quilted satin lining, aristocratic evening wear, black tie home style.' 
        },
        { 
            id: 'wallabee', 
            label: 'WALLABEE', 
            promptValue: 'Clarks Wallabee style moccasins, textured hairy suede upper, thick crepe rubber sole, square toe box, distinct structural seam, cult classic, architectural footwear.' 
        },
    ],
'sandals': [
        // --- LÜKS & İKONİK (RESORT) ---
        { 
            id: 'hermes', 
            label: 'H-SLIDE (HERMES)', 
            promptValue: 'Hermes Oran style flat slides, iconic H-cutout leather strap, contrast white stitching details, premium smooth calfskin, minimalist luxury resort wear, elegant and timeless.' 
        },
        { 
            id: 'dior', 
            label: 'NAKIŞLI SLIDE', 
            promptValue: 'Christian Dior Dway style slides, embroidered cotton strap with logo text, woven tapestry pattern, flat leather sole, chic summer elegance, detailed textile texture.' 
        },
        
        // --- KONFOR & TREND (UGLY-CHIC) ---
        { 
            id: 'birkenstock', 
            label: 'MANTAR TABAN (BIRKEN)', 
            promptValue: 'Birkenstock Arizona style sandals, double wide straps with adjustable metal buckles, soft suede or oiled leather texture, anatomical cork-latex footbed, textured EVA outsole, cozy casual look.' 
        },
        { 
            id: 'dad', 
            label: 'DAD / SPOR (CHANEL)', 
            promptValue: 'Chanel style chunky "dad" sandals, quilted leather or denim straps, velcro closures, thick comfortable rubber sole, luxury streetwear aesthetic, sporty but chic.' 
        },
        { 
            id: 'crocs', 
            label: 'CLOG / POLLEX', 
            promptValue: 'Salehe Bembury x Crocs Pollex Clog style, fingerprint-inspired wavy grooved design, molded foam construction, futuristic organic shape, porous and breathable, beige or earth tone.' 
        },

        // --- MİNİMALİST & MODERN ---
        { 
            id: 'fisherman', 
            label: 'BALIKÇI (FISHERMAN)', 
            promptValue: 'The Row style fisherman sandals, caged woven leather strips design, enclosed toe with gaps, buckle ankle strap, chunky rubber or leather sole, artisanal sophisticated look.' 
        },
        { 
            id: 'chunky_flipflop', 
            label: 'PLATFORM PARMAK ARASI', 
            promptValue: 'The Row Ginza style platform flip-flops, thick padded leather thong straps, minimalist block platform sole, Japanese modern aesthetic, sleek and architectural.' 
        },

        // --- BOHEM & YAZ ---
        { 
            id: 'gladiator', 
            label: 'GLADYATÖR', 
            promptValue: 'Valentino style tall gladiator sandals, intricate leather laces wrapping up to the knee, stud details, flat sole, bohemian luxury, summer festival fashion, Roman inspired.' 
        },
        { 
            id: 'rope', 
            label: 'HALAT / İP', 
            promptValue: 'Nomadic rope sandals, twisted nautical rope straps, caramel or beige tones, sustainable eco-fashion look, organic texture, relaxed beach aesthetic.' 
        },
        
        // --- TOPUKLU SANDALET ALTERNATİFİ ---
        { 
            id: 'wedge', 
            label: 'DOLGU TOPUK (WEDGE)', 
            promptValue: 'Castaner style wedge espadrilles, canvas fabric toe, ribbon ankle ties, woven jute rope heel texture, Mediterranean summer romance, feminine and classic.' 
        },
    ],

'slippers': [
        // --- KÖPÜK & FUTURİSTİK (STREETWEAR) ---
        { 
            id: 'yeezy_slide', 
            label: 'YEEZY SLIDE', 
            promptValue: 'Adidas Yeezy Slide style, single-piece injected EVA foam construction, distinctive sawtooth outsole, minimalist shark-tooth sole, matte monochromatic finish (bone or earth tone), futuristic comfort aesthetic.' 
        },
        { 
            id: 'foam_runner', 
            label: 'FOAM RUNNER', 
            promptValue: 'Yeezy Foam Runner style, organic porous structure with flowing holes, algae-based foam texture, aerodynamic bio-design, avant-garde streetwear, sculpted alien-like silhouette.' 
        },
        { 
            id: 'crocs', 
            label: 'CLASSIC CROCS', 
            promptValue: 'Classic Crocs Clog style, perforated Croslite foam material, pivoting heel strap, chunky rounded silhouette, customizable charms (Jibbitz) detail, vibrant and comfortable, studio product shot.' 
        },

        // --- TREND & ŞEHİR (CLOGS) ---
        { 
            id: 'boston', 
            label: 'BOSTON (SÜET CLOG)', 
            promptValue: 'Birkenstock Boston style clogs, closed-toe mule design, premium soft taupe suede upper, adjustable antique metal buckle strap, cork-latex footbed visible, trendy cozy aesthetic, soft lighting.' 
        },
        { 
            id: 'mule_leather', 
            label: 'DERİ MULE', 
            promptValue: 'Gucci Princetown style leather slippers, backless loafer design, smooth black polished leather, horsebit gold detail, fur-lined interior option, luxury home office style.' 
        },

        // --- KIŞ & KOZA (COZY) ---
        { 
            id: 'fluffy', 
            label: 'PELUŞ / KÜRK', 
            promptValue: 'High-end faux fur cross-band slippers, thick plush fluffy texture, soft pastel or cream colors, open toe, spa-like luxury aesthetic, comfortable and warm, detailed macro fabric shot.' 
        },
        { 
            id: 'puffer', 
            label: 'PUFFER / KAMP', 
            promptValue: 'The North Face Thermoball style puffer slippers, quilted nylon fabric (sleeping bag texture), insulated warmth, drawstring toggle detail, durable traction sole, outdoor cozy aesthetic.' 
        },
        { 
            id: 'scuff', 
            label: 'SHEEPSKIN (UGG)', 
            promptValue: 'UGG Scuff or Coquette style slippers, rich suede exterior, thick natural wool/sheepskin collar overflowing, open back slip-on, warm chestnut color, ultimate winter comfort.' 
        },

        // --- GELENEKSEL & ETNİK ---
        { 
            id: 'babouche', 
            label: 'BABOUCHE (FAS)', 
            promptValue: 'Moroccan Babouche style leather slippers, pointed toe, collapsible heel, soft organic leather texture, earthy tones, artisan handcrafted look, bohemian minimalist.' 
        },
    ],

'socks': [
        // --- SPOR & SOKAK (STREETWEAR) ---
        { 
            id: 'nike_crew', 
            label: 'SPOR (CREW)', 
            promptValue: 'Classic white athletic crew socks (Nike style), ribbed cotton texture, iconic black swoosh logo on the cuff, retro 90s sport aesthetic, clean and crisp look, perfect fit with sneakers.' 
        },
        { 
            id: 'slouch', 
            label: 'SLOUCHY / BÜZGÜLÜ', 
            promptValue: 'Heavy knit slouch socks, thick cotton fabric, pushed down and gathered around the ankles, 80s aerobics or cozy lounge aesthetic, voluminous texture, relaxed look.' 
        },
        { 
            id: 'tube', 
            label: 'ÇİZGİLİ (TUBE)', 
            promptValue: 'Old school skater tube socks, white with retro colored stripes (red/blue) at the top, high-calf length, thick terry cloth texture, vintage American sport style.' 
        },

        // --- FEMİNEN & ROMANTİK (COQUETTE) ---
        { 
            id: 'lace', 
            label: 'DANTEL / FIRFIR', 
            promptValue: 'Delicate ruffled lace ankle socks, vintage Victorian aesthetic, sheer floral pattern, scalloped edges, soft pastel or white color, coquette fashion style, ethereal and cute.' 
        },
        { 
            id: 'tulle', 
            label: 'TÜL / ŞEFFAF', 
            promptValue: 'Sheer tulle socks, ultra-transparent fabric, loose slouchy fit, possibly with glitter or polka dots, fairycore aesthetic, light and airy, worn with heels or sandals.' 
        },

        // --- PREPPY & OKUL (ACADEMIA) ---
        { 
            id: 'knee_high', 
            label: 'DİZ ALTI (KOLEJ)', 
            promptValue: 'Solid color knee-high socks (white, black or navy), opaque cotton texture, smooth finish, preppy Dark Academia aesthetic, school uniform style, structured fit.' 
        },
        { 
            id: 'argyle', 
            label: 'BAKLAVA (ARGYLE)', 
            promptValue: 'Traditional Argyle pattern socks, diamond knit design in contrasting colors, wool blend texture, classic British preppy style, sophisticated vintage look.' 
        },

        // --- EDGY & GECE (HIGH FASHION) ---
        { 
            id: 'fishnet', 
            label: 'FİLE ÇORAP', 
            promptValue: 'Black industrial fishnet tights or socks, diamond grid pattern, grunge aesthetic, high contrast against skin, edgy fashion editorial style, punk-rock vibe.' 
        },
        { 
            id: 'sheer_tights', 
            label: 'İNCE KÜLOTLU', 
            promptValue: 'Premium ultra-sheer black pantyhose (15-20 denier), silky smooth finish, faint transparency revealing skin tone, elegant evening wear, flawless leg aesthetic.' 
        },
        { 
            id: 'patterned_tights', 
            label: 'DESENLİ (LOGO)', 
            promptValue: 'Fashion patterned tights (Gucci/Fendi style), repeating geometric monogram or lace pattern, semi-sheer texture, luxury fashion accessory, statement legwear.' 
        },

        // --- KIŞ & KONFOR (COZY) ---
        { 
            id: 'wool', 
            label: 'YÜN / ÖRGÜ', 
            promptValue: 'Chunky cable-knit wool socks, thick warm texture, oatmeal or grey marl color, cozy winter cabin aesthetic, soft and fuzzy surface detail.' 
        },
    ],    
};
export const MOCKUP_PRODUCTS: OptionItem[] = [

    { 
        id: 'evening_gown', 
        label: 'ABİYE ELBİSE', 
        promptValue: 'Professional Evening Gown Mockup. Elegant floor-length dress on a mannequin or model. Satin or silk fabric texture, realistic drapes and folds, studio lighting.' 
      },
      { 
        id: 'jersey_american', 
        label: 'AMERİKAN FUTBOLU FORMASI', 
        promptValue: 'American Football Jersey Mockup. Heavy-duty mesh fabric texture, broad shoulders, realistic stitching details, isolated on plain background.' 
      },
      { 
        id: 'keychain', 
        label: 'ANAHTARLIK', 
        promptValue: 'Enamel or Plastic Keychain Mockup. Small object with metal ring. Glossy finish, sharp edges, isolated on white background.' 
      },
      { 
        id: 'car_wrap', 
        label: 'ARAÇ KAPLAMA', 
        promptValue: 'Vehicle Wrap Mockup on a modern sedan car. The pattern covers the entire side and hood of the car. Glossy vinyl texture, outdoor lighting, automotive advertising style.' 
      },
      { 
        id: 'scarf_winter', 
        label: 'ATKI (KIŞLIK)', 
        promptValue: 'Knitted Winter Scarf Mockup. Wool texture, fringed ends, folded or draped. Cozy and warm aesthetic, detailed yarn structure.' 
      },
      { 
        id: 'sneakers', 
        label: 'AYAKKABI (SPOR)', 
        promptValue: 'Professional Sneaker Shoe Mockup. Side view of a modern athletic shoe. Realistic leather and mesh textures, rubber sole details, studio lighting.' 
      },
      { 
        id: 'mug_ceramic', 
        label: 'BARDAK (KUPA)', 
        promptValue: 'Ceramic Coffee Mug Mockup. Classic cylindrical shape with handle. Glossy ceramic texture, studio lighting, front view.' 
      },
      { 
        id: 'jersey_basketball', 
        label: 'BASKETBOL FORMASI', 
        promptValue: 'Basketball Jersey Mockup. Sleeveless sports tank top with breathable mesh fabric texture. Athletic cut, realistic folds, high-quality render.' 
      },
      { 
        id: 'baby_onesie', 
        label: 'BEBEK TULUMU (ZIBIN)', 
        promptValue: 'Baby Onesie Bodysuit Mockup. Soft cotton fabric texture, snap button details. Flat lay or hanging view, cute and clean aesthetic.' 
      },
      { 
        id: 'beanie', 
        label: 'BERE', 
        promptValue: 'Knitted Beanie Hat Mockup. Wool or acrylic yarn texture, cuffed rim. Winter fashion accessory style, isolated view.' 
      },
      { 
        id: 'jersey_baseball', 
        label: 'BEYZBOL FORMASI', 
        promptValue: 'Baseball Jersey Mockup. Button-down sports shirt with distinct piping details. Polyester fabric texture, realistic studio lighting.' 
      },
      { 
        id: 'tote_bag', 
        label: 'BEZ ÇANTA (TOTE)', 
        promptValue: 'Canvas Tote Bag Mockup. Natural cotton fabric texture, hanging or standing flat. Realistic wrinkles and handle details, eco-friendly aesthetic.' 
      },
      { 
        id: 'laptop_skin', 
        label: 'BİLGİSAYAR (LAPTOP KAPLAMA)', 
        promptValue: 'Laptop Skin Mockup. Top view of a closed modern laptop. The pattern covers the back of the screen. Matte vinyl texture, tech product photography.' 
      },
      { 
        id: 'jersey_cycling', 
        label: 'BİSİKLET FORMASI', 
        promptValue: 'Cycling Jersey Mockup. Tight-fitting aerodynamic lycra/spandex fabric. Zipper detail, form-fitting look, professional sportswear render.' 
      },
      { 
        id: 'bathrobe', 
        label: 'BORNOZ', 
        promptValue: 'Terry Cloth Bathrobe Mockup. Thick, fluffy towel texture, belted waist. Spa and wellness product aesthetic, hanging or worn.' 
      },
      { 
        id: 'backpack', 
        label: 'ÇANTA (SIRT)', 
        promptValue: 'School or Hiking Backpack Mockup. Durable nylon or canvas fabric texture, zippers and straps visible. Front view, product photography.' 
      },
      { 
        id: 'socks', 
        label: 'ÇORAP', 
        promptValue: 'Pair of Crew Socks Mockup. Knitted cotton texture, ribbed cuff. Standing or flat lay, apparel accessory style.' 
      },
      { 
        id: 'notebook', 
        label: 'DEFTER', 
        promptValue: 'Hardcover Notebook Mockup. Closed or slightly open book. Matte leather or paper cover texture, elastic band detail. Stationery design style.' 
      },
      { 
        id: 'magazine', 
        label: 'DERGİ KAPAĞI', 
        promptValue: 'Glossy Magazine Cover Mockup. A4 size, high-shine paper finish. Professional editorial layout context, studio lighting.' 
      },
      { 
        id: 'wallpaper', 
        label: 'DUVAR KAĞIDI', 
        promptValue: 'Interior Wallpaper Mockup. A modern living room wall covered in the pattern. Realistic room lighting, furniture in foreground, interior design context.' 
      },
      { 
        id: 'dress_casual', 
        label: 'ELBİSE (GÜNLÜK)', 
        promptValue: 'Casual Summer Dress Mockup. Light cotton or linen fabric, natural flow and drape. Realistic clothing photography style.' 
      },
      { 
        id: 'jersey_esports', 
        label: 'E-SPOR FORMASI', 
        promptValue: 'E-Sports Gaming Jersey Mockup. Modern polyester fit, sublimation print texture look. Gamer aesthetic, sharp studio lighting.' 
      },
      { 
        id: 'scarf_silk', 
        label: 'EŞARP (İPEK)', 
        promptValue: 'Silk Scarf Mockup. Square silk scarf folded or draped elegantly. High gloss, smooth texture, luxurious sheen, fashion accessory photography.' 
      },
      { 
        id: 'tracksuit', 
        label: 'EŞOFMAN TAKIMI', 
        promptValue: 'Full Tracksuit Mockup. Matching jacket and pants. Sporty synthetic fabric texture, zipper details, elastic cuffs, athletic apparel look.' 
      },
      { 
        id: 'label_tag', 
        label: 'ETİKET (GİYİM)', 
        promptValue: 'Clothing Hang Tag Mockup. Cardboard or thick paper texture, hanging from a string. Close-up macro shot, retail branding style.' 
      },
      { 
        id: 'slippers', 
        label: 'EV TERLİĞİ', 
        promptValue: 'Plush Home Slippers Mockup. Soft fuzzy texture, comfortable look. Isolated on white, cozy home product photography.' 
      },
      { 
        id: 'coffee_cup_ceramic', 
        label: 'FİNCAN (TÜRK KAHVESİ)', 
        promptValue: 'Small Ceramic Coffee Cup and Saucer Mockup. Porcelain texture, delicate shape. Traditional Turkish coffee presentation style.' 
      },
      { 
        id: 'flag', 
        label: 'FLAMA / BAYRAK', 
        promptValue: 'Waving Flag Mockup. Fabric texture rippling in the wind, attached to a pole. Outdoor lighting, dynamic movement.' 
      },
      { 
        id: 'jersey_soccer', 
        label: 'FUTBOL FORMASI', 
        promptValue: 'Professional Soccer Jersey Mockup. Athletic fit, moisture-wicking fabric texture. Realistic folds and shadow depth, front view.' 
      },
      { 
        id: 'nightgown', 
        label: 'GECELİK', 
        promptValue: 'Satin or Silk Nightgown Mockup. Soft, flowing fabric, lace details. Elegant and intimate apparel photography.' 
      },
      { 
        id: 'shirt_button', 
        label: 'GÖMLEK', 
        promptValue: 'Button-down Dress Shirt Mockup. Crisp cotton fabric, collar detail, long sleeves. Formal and professional look, studio lighting.' 
      },
      { 
        id: 'rug_carpet', 
        label: 'HALI', 
        promptValue: 'Rectangular Area Rug Mockup. Top-down view of a carpet on a wooden floor. Detailed pile texture, fringes on edges, interior design aesthetic.' 
      },
      { 
        id: 'towel', 
        label: 'HAVLU', 
        promptValue: 'Folded Bath Towel Mockup. Soft terry cloth texture, fluffy loops visible. Spa and bathroom product photography style.' 
      },
      { 
        id: 'hoodie', 
        label: 'HOODIE (KAPÜŞONLU)', 
        promptValue: 'Heavyweight Hoodie Mockup. Thick cotton fleece fabric, kangaroo pocket, drawstring details. Streetwear fashion aesthetic.' 
      },
      { 
        id: 'coffee_cup_paper', 
        label: 'KAHVE BARDAĞI (KARTON)', 
        promptValue: 'Paper Coffee Cup Mockup. Takeaway cup with plastic lid. Matte paper texture, coffee shop branding style.' 
      },
      { 
        id: 'kartela', 
        label: 'KARTELA (NUMUNE)', 
        promptValue: 'Wide-format Professional Textile Fabric Swatch Sample Mockup. The fabric sample is broad and displays the full width of the reference image pattern without cropping. Hanging from a wide premium cardboard header card. Detailed fabric texture, zig-zag cut edges (pinking shears), realistic studio lighting, 8k resolution.' 
      },
      { 
        id: 'bag_paper', 
        label: 'KARTON ÇANTA', 
        promptValue: 'Shopping Paper Bag Mockup. Stiff paper texture with rope handles. Standing upright, sharp creases, retail packaging look.' 
      },
      { 
        id: 'box_cardboard', 
        label: 'KARTON KUTU', 
        promptValue: 'Cardboard Packaging Box Mockup. Cube or rectangular box, matte finish. Clean edges, realistic shadows, product packaging style.' 
      },
      { 
        id: 'business_card', 
        label: 'KARTVİZİT', 
        promptValue: 'Business Card Mockup. Stack of cards or single card on a textured surface. Premium paper texture, sharp edges, corporate branding look.' 
      },
      { 
        id: 'pillow', 
        label: 'KIRLENT / YASTIK', 
        promptValue: 'Square Throw Pillow Mockup. Plump and soft cushion on a sofa background. Fabric texture visible, cozy interior design look.' 
      },
      { 
        id: 'book_cover', 
        label: 'KİTAP KAPAĞI', 
        promptValue: 'Hardcover Book Mockup. Standing book with spine visible. Matte or glossy cover finish, literary product photography.' 
      },
      { 
        id: 'can_soda', 
        label: 'KONSERVE KUTUSU (İÇECEK)', 
        promptValue: 'Aluminum Soda Can Mockup. Cylindrical metal can with condensation droplets. Cold and refreshing beverage advertisement style.' 
      },
      { 
        id: 'tie', 
        label: 'KRAVAT', 
        promptValue: 'Silk Necktie Mockup. Tied in a knot or laid flat. Smooth silk texture, diagonal weave visible. Men\'s fashion accessory.' 
      },
      { 
        id: 'tablecloth', 
        label: 'MASA ÖRTÜSÜ', 
        promptValue: 'Dining Tablecloth Mockup. Fabric draped over a round or rectangular table. Natural folds, restaurant or home dining context.' 
      },
      { 
        id: 'bottle_water', 
        label: 'MATARA / SU ŞİŞESİ', 
        promptValue: 'Reusable Water Bottle Mockup. Metal or plastic texture. Sporty and eco-friendly hydration product style.' 
      },
      { 
        id: 'swimsuit', 
        label: 'MAYO', 
        promptValue: 'One-piece Swimsuit Mockup. Stretchy lycra fabric texture. Summer beachwear aesthetic, front view.' 
      },
      { 
        id: 'candle', 
        label: 'MUM (KAVANOZ)', 
        promptValue: 'Glass Jar Candle Mockup. Label area covering the glass. Warm candlelight glow, cozy home decor atmosphere.' 
      },
      { 
        id: 'bedding', 
        label: 'NEVRESİM TAKIMI', 
        promptValue: 'Bedding Set Mockup. Duvet cover and pillowcases on a made bed. Soft fabric wrinkles, bedroom interior context, cozy atmosphere.' 
      },
      { 
        id: 'bed_top_down', 
        label: 'YATAK (KUŞ BAKIŞI)', 
        promptValue: 'Birds-eye View Bed Mockup. A neatly made bed viewed directly from above. Soft cotton duvet and pillows with realistic fabric texture and gentle folds. Clean and modern bedroom aesthetic, professional interior photography style, studio lighting.' 
      },
      { 
        id: 'apron', 
        label: 'ÖNLÜK (MUTFAK)', 
        promptValue: 'Kitchen Apron Mockup. Cotton or canvas fabric texture, neck strap and waist ties. Chef or barista clothing style.' 
      },
      { 
        id: 'pants_jeans', 
        label: 'PANTOLON (KOT)', 
        promptValue: 'Denim Jeans Mockup. Folded or hanging. Visible denim weave, stitching details, leather patch. Casual apparel style.' 
      },
      { 
        id: 'curtains', 
        label: 'PERDE', 
        promptValue: 'Window Curtains Mockup. Long flowing fabric drapes hanging from a rod. Natural light filtering through, interior decoration style.' 
      },
      { 
        id: 'towel_beach', 
        label: 'PLAJ HAVLUSU', 
        promptValue: 'Large Beach Towel Mockup. Laying flat on sand or a sunbed. Velour texture, bright sunlight, summer vacation vibe.' 
      },
      { 
        id: 'polo', 
        label: 'POLO YAKA T-SHIRT', 
        promptValue: 'Polo Shirt Mockup. Pique cotton fabric texture, collar and button placket details. Smart casual fashion look.' 
      },
      { 
        id: 'bag_plastic', 
        label: 'POŞET (MAĞAZA)', 
        promptValue: 'Plastic Shopping Bag Mockup. Glossy or matte plastic texture, die-cut handle. Realistic crinkles and reflections.' 
      },
      { 
        id: 'poster', 
        label: 'POSTER / AFİŞ', 
        promptValue: 'Framed Poster Mockup. Hanging on a modern wall. Glass reflection, paper texture. Interior art decoration style.' 
      },
      { 
        id: 'jersey_rugby', 
        label: 'RUGBY FORMASI', 
        promptValue: 'Rugby Jersey Mockup. Durable thick fabric, reinforced stitching, collar detail. Tough athletic look.' 
      },
      { 
        id: 'watch_smart', 
        label: 'SAAT (AKILLI)', 
        promptValue: 'Smartwatch Screen Mockup. Modern digital watch on a wristband. Screen displaying the pattern/image. Tech accessory style.' 
      },
      { 
        id: 'sweatshirt', 
        label: 'SWEATSHIRT', 
        promptValue: 'Crewneck Sweatshirt Mockup. Soft fleece fabric, ribbed cuffs and hem. Casual comfort wear aesthetic.' 
      },
      { 
        id: 'shawl', 
        label: 'ŞAL', 
        promptValue: 'Fashion Shawl Mockup. Large fabric wrap draped over shoulders or mannequin. Soft wool or cashmere texture, elegant fall.' 
      },
      { 
        id: 'hat_cap', 
        label: 'ŞAPKA (KEP)', 
        promptValue: 'Baseball Cap / Trucker Hat Mockup. Curved brim, fabric texture, stitching details. Front or side view, streetwear style.' 
      },
      { 
        id: 'hat_bucket', 
        label: 'ŞAPKA (KOVA/BALIKÇI)', 
        promptValue: 'Bucket Hat Mockup. Cotton canvas texture, wide downward brim. Trendy streetwear or outdoor accessory look.' 
      },
      { 
        id: 'umbrella', 
        label: 'ŞEMSİYE', 
        promptValue: 'Open Umbrella Mockup. Waterproof nylon fabric texture stretched over ribs. Rain protection product photography.' 
      },
      { 
        id: 'bottle_glass', 
        label: 'ŞİŞE (CAM)', 
        promptValue: 'Glass Beverage Bottle Mockup. Transparent or frosted glass. Label area wrapping the bottle. Premium drink packaging.' 
      },
      { 
        id: 'bottle_plastic', 
        label: 'ŞİŞE (PLASTİK)', 
        promptValue: 'Plastic Shampoo/Lotion Bottle Mockup. Matte or glossy HDPE texture. Pump or cap detail. Cosmetic packaging style.' 
      },
      { 
        id: 'tablet', 
        label: 'TABLET EKRANI', 
        promptValue: 'Tablet Device Mockup. Front view of a modern tablet screen. Glass reflection, sleek bezel. Digital presentation style.' 
      },
      { 
        id: 'leggings', 
        label: 'TAYT', 
        promptValue: 'Leggings Mockup. Stretchy spandex/yoga pants fabric. Form-fitting on legs. Activewear and fitness apparel style.' 
      },
      { 
        id: 'phone_case', 
        label: 'TELEFON KILIFI', 
        promptValue: 'Smartphone Case Mockup. Back view of a modern phone case. Hard plastic or silicone texture. Tech accessory branding.' 
      },
      { 
        id: 'tshirt', 
        label: 'T-SHIRT', 
        promptValue: 'Classic Cotton T-Shirt Mockup. Crew neck, short sleeves. High-quality fabric texture, realistic fit and folds.' 
      },
      { 
        id: 'jersey_volleyball', 
        label: 'VOLEYBOL FORMASI', 
        promptValue: 'Volleyball Jersey Mockup. Sleeveless or short sleeve athletic fit. Stretch fabric texture, dynamic sports look.' 
      },
      { 
        id: 'raincoat', 
        label: 'YAĞMURLUK', 
        promptValue: 'Waterproof Raincoat Mockup. Shiny or matte synthetic fabric, hood detail. Outdoor apparel photography.' 
      },
      { 
        id: 'yoga_mat', 
        label: 'YOGA MATI', 
        promptValue: 'Rolled or Flat Yoga Mat Mockup. Textured foam rubber surface. Fitness and wellness equipment style.' 
      },

];

export const MOCKUP_PRODUCT_VARIANTS: Record<string, OptionItem[]> = {
      'kartela': [
        { 
    id: 'hanging_rack', 
    label: 'ASKI STANDI (STÜDYO)', 
    promptValue: 'The fabric swatch is hanging on a chrome metal display rack in a bright studio. The fabric drapes naturally with soft vertical folds, showing its weight and quality. The cardboard header is clean and minimalist. Soft grey background.' 
  },
  { 
    id: 'flat_lay_architect', 
    label: 'MİMAR MASASI (DÜZ)', 
    promptValue: 'Flat lay top-down view on a wooden designer desk. The fabric swatch is laid out perfectly flat to show the full pattern details. Surrounded by subtle tailoring tools like a measuring tape and scissors. Professional presentation.' 
  },
  { 
    id: 'hand_held_detail', 
    label: 'ELDE SUNUM', 
    promptValue: 'A realistic hand holding the cardboard header of the fabric swatch against a blurred showroom background. The fabric falls naturally from the hand, highlighting the texture and softness. Shallow depth of field (bokeh).' 
  },
  { 
    id: 'waterfall_stack', 
    label: 'ŞELALE KATLAMA', 
    promptValue: 'Waterfall style fabric hanger. The fabric is arranged in layered steps (waterfall) to show depth. High-angle shot, dramatic lighting highlighting the weave and the zig-zag edges.' 
  },
  { 
    id: 'moodboard_pin', 
    label: 'MOODBOARD (İĞNELİ)', 
    promptValue: 'The fabric swatch is pinned onto a cork moodboard or foam core wall. Surrounded by color chips and sketches. Creative fashion studio atmosphere, soft daylight.' 
  },
  { 
    id: 'floating_minimal', 
    label: 'HAVADA (MİNİMAL)', 
    promptValue: 'Levitating fabric swatch. The card and fabric are floating in mid-air against a solid pastel background. Dynamic motion in the fabric (wind effect), artistic and modern e-commerce look.' 
  }
    ],
    'jersey_soccer': [{ id: 'short', label: 'KISA KOL', promptValue: 'short sleeve' }, { id: 'long', label: 'UZUN KOL', promptValue: 'long sleeve' }],
    'tshirt': [{ id: 'crew', label: 'BİSİKLET YAKA', promptValue: 'crew neck' }, { id: 'vneck', label: 'V YAKA', promptValue: 'v-neck' }, { id: 'oversize', label: 'OVERSIZE', promptValue: 'oversized fit' }],
    'hoodie': [{ id: 'zip', label: 'FERMUARLI', promptValue: 'zip-up hoodie' }, { id: 'pullover', label: 'KAPŞONLU', promptValue: 'pullover hoodie' }],
};

export const MOCKUP_VIEWS: OptionItem[] = [
    { id: 'front_flat', label: 'ÖN (DÜZ)', promptValue: 'Front view, flat lay' },
    { id: 'back_flat', label: 'ARKA (DÜZ)', promptValue: 'Back view, flat lay' },
    { id: 'hanger', label: 'ASKI', promptValue: 'Hanging on a hanger' },
    { id: 'mannequin', label: 'MANKEN', promptValue: 'Worn by a ghost mannequin' },
    { id: 'model_studio', label: 'MODEL (STÜDYO)', promptValue: 'Worn by a model in studio' },
    { id: 'model_street', label: 'MODEL (SOKAK)', promptValue: 'Worn by a model in street' },
    { id: 'stadium', label: 'STADYUM', promptValue: 'Placed on grass in a stadium' },
    { id: 'locker', label: 'SOYUNMA ODASI', promptValue: 'Hanging in a locker room' },
    { id: 'folded', label: 'KATLI', promptValue: 'Folded neatly' },
    { id: 'detail', label: 'DETAY', promptValue: 'Close up detail shot of fabric' },
];

export const MOCKUP_VIEW_VARIANTS: Record<string, OptionItem[]> = {
    'model_studio': [{ id: 'pose1', label: 'POZ 1', promptValue: 'standing confident' }, { id: 'pose2', label: 'POZ 2', promptValue: 'arms crossed' }],
};

export const MOCKUP_TEAMS: OptionItem[] = [
    // TR
    { id: 'galatasaray', label: 'GALATASARAY', promptValue: 'Galatasaray SK, yellow and red' },
    { id: 'fenerbahce', label: 'FENERBAHÇE', promptValue: 'Fenerbahçe SK, yellow and navy blue' },
    { id: 'besiktas', label: 'BEŞİKTAŞ', promptValue: 'Beşiktaş JK, black and white' },
    { id: 'trabzon', label: 'TRABZONSPOR', promptValue: 'Trabzonspor, claret and blue' },
    { id: 'bursa', label: 'BURSASPOR', promptValue: 'Bursaspor, green and white' },
    { id: 'sakarya', label: 'SAKARYASPOR', promptValue: 'Sakaryaspor, green and black' },
    { id: 'göztepe', label: 'GÖZTEPE', promptValue: 'Göztepe SK, yellow and red' },
    { id: 'karsiyaka', label: 'KARŞIYAKA', promptValue: 'Karşıyaka SK, green and red' },
    { id: 'eskisehir', label: 'ESKİŞEHİR', promptValue: 'Eskişehirspor, red and black' },
    { id: 'samsun', label: 'SAMSUNSPOR', promptValue: 'Samsunspor, red and white' },
    { id: 'adana', label: 'ADANA DEMİR', promptValue: 'Adana Demirspor, blue and navy' },
    { id: 'kocaeli', label: 'KOCAELİSPOR', promptValue: 'Kocaelispor, green and black' },
    // EU
    { id: 'real_madrid', label: 'REAL MADRID', promptValue: 'Real Madrid, white' },
    { id: 'barcelona', label: 'BARCELONA', promptValue: 'FC Barcelona, blue and red stripes' },
    { id: 'man_utd', label: 'MAN UTD', promptValue: 'Manchester United, red' },
    { id: 'man_city', label: 'MAN CITY', promptValue: 'Manchester City, sky blue' },
    { id: 'liverpool', label: 'LIVERPOOL', promptValue: 'Liverpool FC, red' },
    { id: 'arsenal', label: 'ARSENAL', promptValue: 'Arsenal, red and white' },
    { id: 'chelsea', label: 'CHELSEA', promptValue: 'Chelsea FC, blue' },
    { id: 'bayern', label: 'BAYERN', promptValue: 'Bayern Munich, red' },
    { id: 'dortmund', label: 'DORTMUND', promptValue: 'Borussia Dortmund, yellow and black' },
    { id: 'juventus', label: 'JUVENTUS', promptValue: 'Juventus, black and white stripes' },
    { id: 'milan', label: 'AC MILAN', promptValue: 'AC Milan, red and black stripes' },
    { id: 'inter', label: 'INTER', promptValue: 'Inter Milan, blue and black stripes' },
    { id: 'psg', label: 'PSG', promptValue: 'Paris Saint-Germain, navy and red' },
    { id: 'ajax', label: 'AJAX', promptValue: 'Ajax, red and white' },
    // NATIONAL
    { id: 'turkey', label: 'TÜRKİYE', promptValue: 'Turkey National Team, red and white' },
    { id: 'brazil', label: 'BREZİLYA', promptValue: 'Brazil National Team, yellow and green' },
    { id: 'argentina', label: 'ARJANTİN', promptValue: 'Argentina National Team, blue and white stripes' },
    { id: 'germany', label: 'ALMANYA', promptValue: 'Germany National Team, white and black' },
    { id: 'france', label: 'FRANSA', promptValue: 'France National Team, blue' },
];

export const MOCKUP_NUMBERS: OptionItem[] = [
    { id: '0', label: '0', promptValue: 'Number 0' },
    { id: '1', label: '1', promptValue: 'Number 1' },
    { id: '2', label: '2', promptValue: 'Number 2' },
    { id: '3', label: '3', promptValue: 'Number 3' },
    { id: '4', label: '4', promptValue: 'Number 4' },
    { id: '5', label: '5', promptValue: 'Number 5' },
    { id: '6', label: '6', promptValue: 'Number 6' },
    { id: '7', label: '7', promptValue: 'Number 7' },
    { id: '8', label: '8', promptValue: 'Number 8' },
    { id: '9', label: '9', promptValue: 'Number 9' },
    { id: '10', label: '10', promptValue: 'Number 10' },
    { id: '11', label: '11', promptValue: 'Number 11' },
    { id: '12', label: '12', promptValue: 'Number 12' },
    { id: '13', label: '13', promptValue: 'Number 13' },
    { id: '14', label: '14', promptValue: 'Number 14' },
    { id: '15', label: '15', promptValue: 'Number 15' },
    { id: '16', label: '16', promptValue: 'Number 16' },
    { id: '17', label: '17', promptValue: 'Number 17' },
    { id: '18', label: '18', promptValue: 'Number 18' },
    { id: '19', label: '19', promptValue: 'Number 19' },
    { id: '20', label: '20', promptValue: 'Number 20' },
    { id: '21', label: '21', promptValue: 'Number 21' },
    { id: '22', label: '22', promptValue: 'Number 22' },
    { id: '23', label: '23', promptValue: 'Number 23' },
    { id: '24', label: '24', promptValue: 'Number 24' },
    { id: '25', label: '25', promptValue: 'Number 25' },
    { id: '26', label: '26', promptValue: 'Number 26' },
    { id: '27', label: '27', promptValue: 'Number 27' },
    { id: '28', label: '28', promptValue: 'Number 28' },
    { id: '29', label: '29', promptValue: 'Number 29' },
    { id: '30', label: '30', promptValue: 'Number 30' },
    { id: '31', label: '31', promptValue: 'Number 31' },
    { id: '32', label: '32', promptValue: 'Number 32' },
    { id: '33', label: '33', promptValue: 'Number 33' },
    { id: '34', label: '34', promptValue: 'Number 34' },
    { id: '35', label: '35', promptValue: 'Number 35' },
    { id: '36', label: '36', promptValue: 'Number 36' },
    { id: '37', label: '37', promptValue: 'Number 37' },
    { id: '38', label: '38', promptValue: 'Number 38' },
    { id: '39', label: '39', promptValue: 'Number 39' },
    { id: '40', label: '40', promptValue: 'Number 40' },
    { id: '41', label: '41', promptValue: 'Number 41' },
    { id: '42', label: '42', promptValue: 'Number 42' },
    { id: '43', label: '43', promptValue: 'Number 43' },
    { id: '44', label: '44', promptValue: 'Number 44' },
    { id: '45', label: '45', promptValue: 'Number 45' },
    { id: '46', label: '46', promptValue: 'Number 46' },
    { id: '47', label: '47', promptValue: 'Number 47' },
    { id: '48', label: '48', promptValue: 'Number 48' },
    { id: '49', label: '49', promptValue: 'Number 49' },
    { id: '50', label: '50', promptValue: 'Number 50' },
    { id: '51', label: '51', promptValue: 'Number 51' },
    { id: '52', label: '52', promptValue: 'Number 52' },
    { id: '53', label: '53', promptValue: 'Number 53' },
    { id: '54', label: '54', promptValue: 'Number 54' },
    { id: '55', label: '55', promptValue: 'Number 55' },
    { id: '56', label: '56', promptValue: 'Number 56' },
    { id: '57', label: '57', promptValue: 'Number 57' },
    { id: '58', label: '58', promptValue: 'Number 58' },
    { id: '59', label: '59', promptValue: 'Number 59' },
    { id: '60', label: '60', promptValue: 'Number 60' },
    { id: '61', label: '61', promptValue: 'Number 61' },
    { id: '62', label: '62', promptValue: 'Number 62' },
    { id: '63', label: '63', promptValue: 'Number 63' },
    { id: '64', label: '64', promptValue: 'Number 64' },
    { id: '65', label: '65', promptValue: 'Number 65' },
    { id: '66', label: '66', promptValue: 'Number 66' },
    { id: '67', label: '67', promptValue: 'Number 67' },
    { id: '68', label: '68', promptValue: 'Number 68' },
    { id: '69', label: '69', promptValue: 'Number 69' },
    { id: '70', label: '70', promptValue: 'Number 70' },
    { id: '71', label: '71', promptValue: 'Number 71' },
    { id: '72', label: '72', promptValue: 'Number 72' },
    { id: '73', label: '73', promptValue: 'Number 73' },
    { id: '74', label: '74', promptValue: 'Number 74' },
    { id: '75', label: '75', promptValue: 'Number 75' },
    { id: '76', label: '76', promptValue: 'Number 76' },
    { id: '77', label: '77', promptValue: 'Number 77' },
    { id: '78', label: '78', promptValue: 'Number 78' },
    { id: '79', label: '79', promptValue: 'Number 79' },
    { id: '80', label: '80', promptValue: 'Number 80' },
    { id: '81', label: '81', promptValue: 'Number 81' },
    { id: '82', label: '82', promptValue: 'Number 82' },
    { id: '83', label: '83', promptValue: 'Number 83' },
    { id: '84', label: '84', promptValue: 'Number 84' },
    { id: '85', label: '85', promptValue: 'Number 85' },
    { id: '86', label: '86', promptValue: 'Number 86' },
    { id: '87', label: '87', promptValue: 'Number 87' },
    { id: '88', label: '88', promptValue: 'Number 88' },
    { id: '89', label: '89', promptValue: 'Number 89' },
    { id: '90', label: '90', promptValue: 'Number 90' },
    { id: '91', label: '91', promptValue: 'Number 91' },
    { id: '92', label: '92', promptValue: 'Number 92' },
    { id: '93', label: '93', promptValue: 'Number 93' },
    { id: '94', label: '94', promptValue: 'Number 94' },
    { id: '95', label: '95', promptValue: 'Number 95' },
    { id: '96', label: '96', promptValue: 'Number 96' },
    { id: '97', label: '97', promptValue: 'Number 97' },
    { id: '98', label: '98', promptValue: 'Number 98' },
    { id: '99', label: '99', promptValue: 'Number 99' },
];

export const MOCKUP_LOGOS: OptionItem[] = [
    { 
        id: 'mascot_aggressive', 
        label: 'AGRESİF MASKOT (NBA)', 
        promptValue: 'DESIGN TASK: Place an Aggressive Mascot Logo. Bold vector lines, angry animal or character face, intense expression. NBA or E-Sports team aesthetic.' 
    },
    { 
        id: 'gold_crest', 
        label: 'ALTIN ARMA (LÜKS)', 
        promptValue: 'DESIGN TASK: Place a Luxury Gold Crest. Metallic gold foil texture, intricate royal details. Premium brand or anniversary edition badge.' 
    },
    { 
        id: 'crest_heraldic', 
        label: 'ARMA (KRALİYET)', 
        promptValue: 'DESIGN TASK: Place a Traditional Heraldic Crest. Coat of arms style, shield supported by lions or unicorns, ornate filigree. Royal aesthetic.' 
    },
    { 
        id: 'flag_patch', 
        label: 'BAYRAK YAMASI', 
        promptValue: 'DESIGN TASK: Place a National Flag Patch. Rectangular or shield shape featuring country colors. Woven fabric texture border. National team kit style.' 
    },
    { 
        id: 'script_baseball', 
        label: 'EL YAZISI (BASEBALL)', 
        promptValue: 'DESIGN TASK: Place a Script Typography Logo. Slanted cursive lettering with a tail underline (swoosh). Classic American Baseball jersey aesthetic.' 
    },
    { 
        id: 'diamond_retro', 
        label: 'EŞKENAR (UMBRO TARZI)', 
        promptValue: 'DESIGN TASK: Place a Diamond Shaped Badge. Rhombus geometry, often used in retro 90s sportswear. Clean edges.' 
    },
    { 
        id: 'hexagon_tech', 
        label: 'ALTIGEN (MODERN)', 
        promptValue: 'DESIGN TASK: Place a Hexagon Shaped Badge. Sharp six-sided polygon. Modern, tech-inspired, or futuristic football club aesthetic.' 
    },
    { 
        id: 'animal_realistic', 
        label: 'HAYVAN (REALİSTİK)', 
        promptValue: 'DESIGN TASK: Place a Realistic Animal Emblem. Detailed illustration of a wolf, eagle, or lion head. Wildlife conservation or outdoor brand style.' 
    },
    { 
        id: 'holographic', 
        label: 'HOLOGRAFİK', 
        promptValue: 'DESIGN TASK: Place a Holographic / Iridescent Badge. Shiny material changing colors like a rainbow. Trendy modern fashion aesthetic.' 
    },
    { 
        id: 'shield_classic', 
        label: 'KALKAN (KLASİK)', 
        promptValue: 'DESIGN TASK: Place a Classic Shield Badge. Standard football club crest shape (Escutcheon). Embroidered border texture. Timeless look.' 
    },
    { 
        id: 'shield_modern', 
        label: 'KALKAN (MODERN)', 
        promptValue: 'DESIGN TASK: Place a Modern Minimalist Shield. Simplified curves, flat vector colors, matte silicone texture. New era rebranding style.' 
    },
    { 
        id: 'wings_aviation', 
        label: 'KANATLI (HAVACILIK)', 
        promptValue: 'DESIGN TASK: Place a Winged Logo. Central circle or shield flanked by spread eagle/pilot wings. Aviation or Air Force aesthetic.' 
    },
    { 
        id: 'laurel_wreath', 
        label: 'MEŞE YAPRAĞI (ÇELENK)', 
        promptValue: 'DESIGN TASK: Place a Laurel Wreath Logo. Fred Perry style wreath surrounding a letter or symbol. Victory and heritage aesthetic.' 
    },
    { 
        id: 'minimal_icon', 
        label: 'MODERN İKON', 
        promptValue: 'DESIGN TASK: Place a Modern Minimalist Icon. Abstract geometric symbol (like a swoosh or triangle). Tech company or modern sportswear brand.' 
    },
    { 
        id: 'monogram_interlock', 
        label: 'MONOGRAM (HARF)', 
        promptValue: 'DESIGN TASK: Place an Interlocking Monogram. Two or three initials intertwined (e.g., NY, LA style). Embroidered 3D texture.' 
    },
    { 
        id: 'patch_embroidery', 
        label: 'NAKIŞ YAMA (PATCH)', 
        promptValue: 'DESIGN TASK: Place a Round Embroidered Patch. Visible thread stitches, merit badge or scout patch aesthetic. Vintage feel.' 
    },
    { 
        id: 'star_badge', 
        label: 'YILDIZ (ŞERİF)', 
        promptValue: 'DESIGN TASK: Place a Star Shaped Badge. 5-point star design. Sheriff badge or national symbol aesthetic.' 
    },
    { 
        id: 'retro_badge', 
        label: 'RETRO (VINTAGE)', 
        promptValue: 'DESIGN TASK: Place a Vintage Retro Badge. Distressed texture, muted colors, ribbon banners with text. Old school 1950s aesthetic.' 
    },
    { 
        id: 'silicone_3d', 
        label: 'SİLİKON (3D BASKI)', 
        promptValue: 'DESIGN TASK: Place a 3D Heat-Pressed Silicone Badge. Matte finish, raised plastic texture, no visible stitching. High-tech modern kit detail.' 
    },
    { 
        id: 'triangle_warning', 
        label: 'ÜÇGEN (UYARI)', 
        promptValue: 'DESIGN TASK: Place a Triangle Shaped Badge. Inverted or upright triangle. Hazard sign or edgy streetwear aesthetic.' 
    },
    { 
        id: 'circle_classic', 
        label: 'YUVARLAK (KLASİK)', 
        promptValue: 'DESIGN TASK: Place a Circular Logo Badge (Roundel). Text running around the outer ring, symbol in the center. Traditional football club style.' 
    },
    { 
        id: 'circle_seal', 
        label: 'YUVARLAK (MÜHÜR)', 
        promptValue: 'DESIGN TASK: Place a Stamp/Seal Style Logo. Gritty ink texture, official university or government seal aesthetic.' 
    },
];

export const MOCKUP_MATERIALS: OptionItem[] = [
    { 
        id: 'mesh_air', 
        label: 'AİR FİLE (MESH)', 
        promptValue: 'MATERIAL TASK: Render as Air-Mesh fabric. Large visible perforation holes for maximum breathability. Athletic jersey texture.' 
    },
    { 
        id: 'bamboo', 
        label: 'BAMBU LİFİ', 
        promptValue: 'MATERIAL TASK: Render as Bamboo Fiber fabric. Silky soft texture, slight natural sheen, breathable and eco-friendly organic look.' 
    },
    { 
        id: 'denim_raw', 
        label: 'DENIM (HAM KOT)', 
        promptValue: 'MATERIAL TASK: Render as Raw Denim fabric. Heavy indigo cotton twill weave, stiff texture, visible diagonal stitching lines.' 
    },
    { 
        id: 'leather_smooth', 
        label: 'DERİ (DÜZ)', 
        promptValue: 'MATERIAL TASK: Render as Genuine Smooth Leather. Natural grain texture, slight satin sheen, premium jacket or accessory material.' 
    },
    { 
        id: 'leather_suede', 
        label: 'DERİ (SÜET)', 
        promptValue: 'MATERIAL TASK: Render as Suede Leather. Soft napped finish, matte texture with no reflection, velvet-like touch.' 
    },
    { 
        id: 'spandex_lycra', 
        label: 'ELASTAN (LYCRA/TAYT)', 
        promptValue: 'MATERIAL TASK: Render as Spandex/Lycra blend. Tight stretchy fabric, matte finish, hugging the form. Activewear/Gym material.' 
    },
    { 
        id: 'flannel', 
        label: 'FLANEL (ODUNCU)', 
        promptValue: 'MATERIAL TASK: Render as Flannel fabric. Soft brushed wool/cotton blend, fuzzy texture, warm and cozy appearance.' 
    },
    { 
        id: 'fleece', 
        label: 'FLEECE (POLAR)', 
        promptValue: 'MATERIAL TASK: Render as Polar Fleece. Synthetic woolly texture, soft pile, insulating and warm hoodie material.' 
    },
    { 
        id: 'goretex', 
        label: 'GORE-TEX (SU GEÇİRMEZ)', 
        promptValue: 'MATERIAL TASK: Render as Gore-Tex technical fabric. Waterproof stiff surface, matte finish, water droplets beading on top.' 
    },
    { 
        id: 'silk_chiffon', 
        label: 'İPEK ŞİFON', 
        promptValue: 'MATERIAL TASK: Render as Silk Chiffon. Sheer, semi-transparent, lightweight, ethereal and flowy drape.' 
    },
    { 
        id: 'silk_satin', 
        label: 'İPEK SATEN', 
        promptValue: 'MATERIAL TASK: Render as Silk Satin. High-gloss reflective surface, smooth and slippery texture, fluid drape. Luxury aesthetic.' 
    },
    { 
        id: 'corduroy', 
        label: 'KADİFE (FİTİLLİ)', 
        promptValue: 'MATERIAL TASK: Render as Corduroy. Distinct vertical ridges (wales), soft velvet texture between lines. Vintage aesthetic.' 
    },
    { 
        id: 'velvet', 
        label: 'KADİFE (PLUSH)', 
        promptValue: 'MATERIAL TASK: Render as Plush Velvet. Deep pile, rich color saturation, soft light absorption. Royal and elegant.' 
    },
    { 
        id: 'canvas', 
        label: 'KANVAS (KABA)', 
        promptValue: 'MATERIAL TASK: Render as Heavy Canvas. Thick woven cotton duck fabric, rough texture. Tote bag or workwear durability.' 
    },
    { 
        id: 'cashmere', 
        label: 'KAŞMİR (YÜN)', 
        promptValue: 'MATERIAL TASK: Render as Cashmere Wool. Extremely soft, fine texture, expensive and luxurious fuzzy halo effect.' 
    },
    { 
        id: 'linen', 
        label: 'KETEN', 
        promptValue: 'MATERIAL TASK: Render as Natural Linen. Visible weave, natural irregularities (slubs), prone to slight elegant wrinkling. Summer fabric.' 
    },
    { 
        id: 'latex', 
        label: 'LATEKS / PVC', 
        promptValue: 'MATERIAL TASK: Render as Latex / PVC. Extremely shiny, plastic-like surface, high reflection, tight and artificial look.' 
    },
    { 
        id: 'metallic_foil', 
        label: 'METALİK (FOLYO)', 
        promptValue: 'MATERIAL TASK: Render as Metallic Lame/Foil fabric. Sparkling, reflective metal-like surface. Futuristic or disco aesthetic.' 
    },
    { 
        id: 'nylon_ripstop', 
        label: 'NAYLON (PARAŞÜT)', 
        promptValue: 'MATERIAL TASK: Render as Ripstop Nylon. Lightweight synthetic windbreaker fabric, visible tiny grid reinforcement pattern.' 
    },
    { 
        id: 'neoprene', 
        label: 'NEOPREN (DALGIÇ)', 
        promptValue: 'MATERIAL TASK: Render as Neoprene (Scuba). Smooth, thick, spongy rubber-like fabric. Holds structure well, minimal wrinkles.' 
    },
    { 
        id: 'cotton_heavy', 
        label: 'PAMUK (AĞIR/TOK)', 
        promptValue: 'MATERIAL TASK: Render as Heavyweight Cotton (GSM 300+). Thick, premium t-shirt material, structured drape, high quality.' 
    },
    { 
        id: 'cotton_ringspun', 
        label: 'PAMUK (YUMUŞAK)', 
        promptValue: 'MATERIAL TASK: Render as Ringspun Cotton. Soft, standard t-shirt fabric, matte finish, comfortable look.' 
    },
    { 
        id: 'cotton_pique', 
        label: 'PAMUK (PİKE/POLO)', 
        promptValue: 'MATERIAL TASK: Render as Cotton Pique. Waffle-like micro texture, distinct honeycomb weave. Classic Polo shirt material.' 
    },
    { 
        id: 'polyester_sport', 
        label: 'POLYESTER (SPOR)', 
        promptValue: 'MATERIAL TASK: Render as Performance Polyester. Smooth, moisture-wicking synthetic fabric. Slight sheen, athletic kit standard.' 
    },
    { 
        id: 'sequin', 
        label: 'PUL / PAYET', 
        promptValue: 'MATERIAL TASK: Render as Sequin fabric. Surface covered in small shiny discs, glittering and reflecting light in all directions.' 
    },
    { 
        id: 'wool_knit', 
        label: 'YÜN (ÖRGÜ/TRİKO)', 
        promptValue: 'MATERIAL TASK: Render as Chunky Knit Wool. Visible interlocking yarn loops, cozy texture, sweater material.' 
    },
];

export const MOCKUP_DESIGN_STYLES: OptionItem[] = [
    { 
        id: 'wood_grain', 
        label: 'AHŞAP DOKUSU', 
        promptValue: 'DESIGN TASK: Apply a Wood Grain texture to the fabric. Realistic timber lines and knots, creating a surreal organic fashion piece. Nature-inspired avant-garde aesthetic.' 
    },
    { 
        id: 'flames_hot_rod', 
        label: 'ALEV / ATEŞ (HOT ROD)', 
        promptValue: 'DESIGN TASK: Apply a Realistic Fire/Flames print. Gradient transitions from yellow to red rising from the hem. Racing jersey or streetwear "Hot Rod" aesthetic.' 
    },
    { 
        id: 'gold_foil', 
        label: 'ALTIN VARAK (GOLD)', 
        promptValue: 'DESIGN TASK: Apply a Gold Foil Stamping texture. Highly reflective metallic gold patterns on matte fabric. Luxury fashion brand aesthetic. Shiny and premium.' 
    },
    { 
        id: 'ankara_wax', 
        label: 'ANKARA (AFRİKA MUMU)', 
        promptValue: 'DESIGN TASK: Apply an African Wax Print (Ankara). Bold, vibrant colors (yellow, green, red), tribal geometric motifs, complex repeating batik designs. Cultural fashion.' 
    },
    { 
        id: 'honeycomb_tech', 
        label: 'ARI PETEĞİ (TECH)', 
        promptValue: 'DESIGN TASK: Apply a Honeycomb Hexagon pattern. Interlocking hexagonal grid overlay. Futuristic sports tech-wear aesthetic, suggesting high-performance material.' 
    },
    { 
        id: 'argyle_knit', 
        label: 'BAKLAVA (ARGYLE)', 
        promptValue: 'DESIGN TASK: Apply an Argyle Knit pattern. Interlocking diamond shapes with thin crossing lines. Traditional golf sweater or preppy school uniform aesthetic.' 
    },
    { 
        id: 'herringbone_tweed', 
        label: 'BALIKSIRTI (TWEED)', 
        promptValue: 'DESIGN TASK: Apply a Herringbone Tweed texture. V-shaped weaving pattern using wool threads. Classic British heritage fashion, sophisticated suit material.' 
    },
    { 
        id: 'baroque_versace', 
        label: 'BAROK (LÜKS)', 
        promptValue: 'DESIGN TASK: Apply a Baroque Ornament pattern. Gold filigree details, intricate floral scrolls on black or silk background. Versace-style luxury opulent aesthetic.' 
    },
    { 
        id: 'tie_dye_spiral', 
        label: 'BATİK (TIE-DYE)', 
        promptValue: 'DESIGN TASK: Apply a Tie-Dye / Shibori pattern. Colorful spiral or crumpled bleach wash effects. 70s Hippie or modern festival streetwear vibe.' 
    },
    { 
        id: 'concrete_industrial', 
        label: 'BETON (ENDÜSTRİYEL)', 
        promptValue: 'DESIGN TASK: Apply a Raw Concrete texture. Grey industrial cement look with cracks and porous details. Brutalist architecture inspired fashion.' 
    },
    { 
        id: 'sequin_glitter', 
        label: 'BONCUK / PUL (PAYET)', 
        promptValue: 'DESIGN TASK: Apply a Sequin / Paillette texture. Thousands of small shiny discs reflecting light. Glamorous disco or evening gown material.' 
    },
    { 
        id: 'ice_frost', 
        label: 'BUZ / KIRAĞI', 
        promptValue: 'DESIGN TASK: Apply an Ice Crystal / Frost texture. Sharp frozen fractal patterns spreading across the fabric. Cold winter fashion aesthetic.' 
    },
    { 
        id: 'stripes_vertical', 
        label: 'ÇUBUKLU (DİKEY)', 
        promptValue: 'DESIGN TASK: Apply Classic Vertical Stripes. Evenly spaced bold lines (football kit style). Clean boundaries, breathable sport fabric texture.' 
    },
    { 
        id: 'azulejo_tile', 
        label: 'ÇİNİ DESENİ (AZULEJO)', 
        promptValue: 'DESIGN TASK: Apply an Azulejo Ceramic Tile pattern. Intricate blue and white geometric and floral motifs. Mediterranean historical art aesthetic.' 
    },
    { 
        id: 'floral_vintage', 
        label: 'ÇİÇEKLİ (VINTAGE)', 
        promptValue: 'DESIGN TASK: Apply a Vintage Floral print. Small, detailed roses or wildflowers on a pastel background. Cottagecore or retro dress aesthetic.' 
    },
    { 
        id: 'checkerboard_ska', 
        label: 'DAMALI (YARIŞ)', 
        promptValue: 'DESIGN TASK: Apply a Checkerboard pattern. Sharp black and white alternating squares. Formula 1 racing flag or Ska music fashion aesthetic.' 
    },
    { 
        id: 'lace_embroidery', 
        label: 'DANTEL (GÜPÜR)', 
        promptValue: 'DESIGN TASK: Apply a Lace / Guipure texture. Intricate semi-transparent floral embroidery. Romantic, feminine, bridal or lingerie aesthetic.' 
    },
    { 
        id: 'denim_indigo', 
        label: 'DENIM (KOT)', 
        promptValue: 'DESIGN TASK: Apply a Realistic Denim Jeans texture. Indigo blue twill weave, visible stitching (topstitching), washed-out fade areas. Casual rugged look.' 
    },
    { 
        id: 'leather_smooth', 
        label: 'DERİ (SİYAH)', 
        promptValue: 'DESIGN TASK: Apply a Smooth Black Leather texture. Light reflection on animal hide grain. Edgy, biker, or luxury handbag material aesthetic.' 
    },
    { 
        id: 'circuit_cyber', 
        label: 'DEVRE KARTI (CYBER)', 
        promptValue: 'DESIGN TASK: Apply an Electronic Circuit Board pattern. Gold or copper traces on a dark background. High-tech computer hardware aesthetic.' 
    },
    { 
        id: 'glitch_pixel', 
        label: 'DİJİTAL HATA (GLITCH)', 
        promptValue: 'DESIGN TASK: Apply a Digital Glitch Art texture. Pixel sorting, chromatic aberration (RGB split), data corruption visual effects. Cyberpunk aesthetic.' 
    },
    { 
        id: 'tartan_plaid', 
        label: 'EKOSE (İSKOÇ)', 
        promptValue: 'DESIGN TASK: Apply a Scottish Tartan Plaid pattern. Intersecting horizontal and vertical bands of color (flannel). Classic punk or preppy fashion.' 
    },
    { 
        id: 'tribal_aztec', 
        label: 'ETNİK (AZTEK)', 
        promptValue: 'DESIGN TASK: Apply a Tribal / Aztec pattern. Geometric stair-step motifs, bold triangles, earthy colors. Indigenous cultural fashion.' 
    },
    { 
        id: 'mesh_sport', 
        label: 'FİLE (SPOR MESH)', 
        promptValue: 'DESIGN TASK: Apply a Sports Mesh texture. Perforated breathable fabric holes (aertex). Realistic activewear jersey material.' 
    },
    { 
        id: 'galaxy_space', 
        label: 'GALAKSİ / UZAY', 
        promptValue: 'DESIGN TASK: Apply a Galaxy Nebula print. Deep space background, bright stars, purple and blue cosmic dust clouds. Infinite universe aesthetic.' 
    },
    { 
        id: 'geo_poly', 
        label: 'GEOMETRİK (POLY)', 
        promptValue: 'DESIGN TASK: Apply a Low Poly Geometric pattern. Faceted triangular shapes creating a 3D crystal effect on the fabric. Modern design.' 
    },
    { 
        id: 'graffiti_street', 
        label: 'GRAFFITI (SOKAK)', 
        promptValue: 'DESIGN TASK: Apply a Street Art Graffiti print. Spray paint drips, wildstyle typography, tag elements. Urban hip-hop fashion aesthetic.' 
    },
    { 
        id: 'gradient_ombre', 
        label: 'GRADYAN (OMBRE)', 
        promptValue: 'DESIGN TASK: Apply a Smooth Color Gradient (Ombre). Seamless fade from one vibrant color to another. Modern sublimation sport print.' 
    },
    { 
        id: 'grunge_distressed', 
        label: 'GRUNGE (ESKİTME)', 
        promptValue: 'DESIGN TASK: Apply a Grunge Distressed texture. Scratches, dirt overlays, worn-out faded spots. 90s rock or vintage thrift aesthetic.' 
    },
    { 
        id: 'halftone_pop', 
        label: 'HALFTONE (NOKTA)', 
        promptValue: 'DESIGN TASK: Apply a Halftone Dot pattern. Gradient created by varying sizes of dots. Pop-art or comic book printing style.' 
    },
    { 
        id: 'holographic_foil', 
        label: 'HOLOGRAFİK', 
        promptValue: 'DESIGN TASK: Apply a Holographic / Iridescent texture. Shifting rainbow spectrum colors, shiny foil surface. Future-fashion aesthetic.' 
    },
    { 
        id: 'silk_texture', 
        label: 'İPEK (SATEN)', 
        promptValue: 'DESIGN TASK: Apply a Silk / Satin texture. Highly glossy, smooth surface with fluid drape and soft light reflections. Luxurious evening wear.' 
    },
    { 
        id: 'embroidery_floral', 
        label: 'İŞLEME (NAKIŞ)', 
        promptValue: 'DESIGN TASK: Apply a Realistic Embroidery texture. Raised threads creating a floral design directly on the fabric. Hand-stitched artisanal look.' 
    },
    { 
        id: 'velvet_plush', 
        label: 'KADİFE (PLUSH)', 
        promptValue: 'DESIGN TASK: Apply a Velvet texture. Deep, rich fabric pile with soft light absorption. Royal, elegant, and warm material.' 
    },
    { 
        id: 'camo_military', 
        label: 'KAMUFLAJ (ASKERİ)', 
        promptValue: 'DESIGN TASK: Apply a Military Camouflage pattern. Organic irregular shapes in earth tones (green/brown). Tactical army aesthetic.' 
    },
    { 
        id: 'tiger_stripes', 
        label: 'KAPLAN DESENİ', 
        promptValue: 'DESIGN TASK: Apply a Tiger Stripe pattern. Bold orange and black animal fur stripes. Wild, aggressive, and exotic fashion.' 
    },
    { 
        id: 'carbon_fiber', 
        label: 'KARBON FİBER', 
        promptValue: 'DESIGN TASK: Apply a Carbon Fiber texture. Woven black and grey distinct pattern. High-performance automotive racing aesthetic.' 
    },
    { 
        id: 'houndstooth', 
        label: 'KAZAYAĞI (HOUNDSTOOTH)', 
        promptValue: 'DESIGN TASK: Apply a Houndstooth pattern. Broken check abstract geometric pattern (Pied-de-poule). Black and white classic Chanel-style textile.' 
    },
    { 
        id: 'kilim_anatolia', 
        label: 'KİLİM (ANADOLU)', 
        promptValue: 'DESIGN TASK: Apply a Traditional Anatolian Kilim pattern. Geometric woven motifs, diamond shapes, rich red and earth colors. Carpet texture.' 
    },
    { 
        id: 'liquid_chrome', 
        label: 'LİKİT KROM (METAL)', 
        promptValue: 'DESIGN TASK: Apply a Liquid Chrome / Molten Metal texture. Shiny reflective silver surface, melting shapes. Y2K futurism aesthetic.' 
    },
    { 
        id: 'leopard_print', 
        label: 'LEOPAR DESENİ', 
        promptValue: 'DESIGN TASK: Apply a Leopard Skin print. Rosette spots, realistic fur texture details. Bold fashion-forward aesthetic.' 
    },
    { 
        id: 'manga_panel', 
        label: 'MANGA / ANIME', 
        promptValue: 'DESIGN TASK: Apply a Manga Comic Panel collage. Black and white Japanese comic scenes, speed lines, action effects. Otaku streetwear aesthetic.' 
    },
    { 
        id: 'marble_carrara', 
        label: 'MERMER (KLASİK)', 
        promptValue: 'DESIGN TASK: Apply a White Carrara Marble texture. Grey stone veins on white background. Clean, sculptural, and luxury aesthetic.' 
    },
    { 
        id: 'marble_liquid', 
        label: 'MERMER (SIVI/EBRU)', 
        promptValue: 'DESIGN TASK: Apply a Liquid Marble / Ebru Art texture. Swirling fluid paint colors, oil on water effect. Psychedelic and artistic.' 
    },
    { 
        id: 'minimal_solid', 
        label: 'MİNİMAL (DÜZ)', 
        promptValue: 'DESIGN TASK: Keep the design Ultra-Minimalist. Solid block color, high-quality fabric texture focus, tiny subtle logo details only. Clean and modern.' 
    },
    { 
        id: 'mosaic_art', 
        label: 'MOZAİK (SANAT)', 
        promptValue: 'DESIGN TASK: Apply a Mosaic Art pattern. Composed of many small, colorful geometric tiles fitting together. Byzantine historical aesthetic.' 
    },
    { 
        id: 'neon_cyber', 
        label: 'NEON (CYBERPUNK)', 
        promptValue: 'DESIGN TASK: Apply a Neon Light pattern. Glowing bright lines (cyan/magenta) against a dark background. Futuristic night city aesthetic.' 
    },
    { 
        id: 'polka_dot', 
        label: 'PUANTİYE (NOKTA)', 
        promptValue: 'DESIGN TASK: Apply a Polka Dot pattern. Regular array of filled circles. Retro 1950s pin-up or playful fashion aesthetic.' 
    },
    { 
        id: 'retro_90s_kit', 
        label: 'RETRO 90\'LAR (FORMA)', 
        promptValue: 'DESIGN TASK: Apply a 90s Football Kit aesthetic. Bold jagged geometric patterns, oversized shapes, nostalgic vibrant color palette. Vintage sport.' 
    },
    { 
        id: 'paint_splash', 
        label: 'SIÇRATMA BOYA (SPLASH)', 
        promptValue: 'DESIGN TASK: Apply an Abstract Paint Splash pattern. Jackson Pollock style chaotic drips and splashes of multi-colored paint. Expressive art.' 
    },
    { 
        id: 'water_drops', 
        label: 'SU DAMLASI (ISLAK)', 
        promptValue: 'DESIGN TASK: Apply a Wet Surface / Water Drops texture. Realistic rain droplets sitting on top of the fabric (hydrophobic). Fresh aesthetic.' 
    },
    { 
        id: 'paisley_shawl', 
        label: 'ŞAL DESEN (PAISLEY)', 
        promptValue: 'DESIGN TASK: Apply a Paisley pattern. Intricate teardrop-shaped motifs (buta). Boho-chic, bandana or traditional textile aesthetic.' 
    },
    { 
        id: 'lightning_bolt', 
        label: 'ŞİMŞEK (YILDIRIM)', 
        promptValue: 'DESIGN TASK: Apply a Lightning Bolt pattern. Electric energy cracks, storm aesthetic. Dynamic, high voltage, energetic look.' 
    },
    { 
        id: 'croc_skin', 
        label: 'TİMSAH DERİSİ', 
        promptValue: 'DESIGN TASK: Apply a Crocodile / Alligator Skin texture. Distinctive rectangular scales, glossy leather finish. Luxury accessory aesthetic.' 
    },
    { 
        id: 'knit_cable', 
        label: 'TRİKO (ÖRGÜ)', 
        promptValue: 'DESIGN TASK: Apply a Cable Knit Sweater texture. Thick wool yarn woven patterns, cozy and warm texture. Winter fashion aesthetic.' 
    },
    { 
        id: 'floral_tropical', 
        label: 'TROPİKAL (HAWAII)', 
        promptValue: 'DESIGN TASK: Apply a Tropical Floral pattern. Large palm leaves, hibiscus flowers, vibrant jungle colors. Summer vacation shirt aesthetic.' 
    },
    { 
        id: 'chevron_v', 
        label: 'V ŞEKLİ (CHEVRON)', 
        promptValue: 'DESIGN TASK: Apply a Chevron pattern. Repeated V-shapes pointing down across the chest. Dynamic and aggressive sport kit look.' 
    },
    { 
        id: 'patchwork', 
        label: 'YAMA (PATCHWORK)', 
        promptValue: 'DESIGN TASK: Apply a Patchwork pattern. Different fabrics (denim, plaid, floral) stitched together in a chaotic but stylish grid. DIY aesthetic.' 
    },
    { 
        id: 'snake_skin', 
        label: 'YILAN DERİSİ', 
        promptValue: 'DESIGN TASK: Apply a Snake Skin texture. Realistic reptilian scales pattern. Exotic leather, dangerous and luxury fashion aesthetic.' 
    },
    { 
        id: 'star_print', 
        label: 'YILDIZ DESENİ', 
        promptValue: 'DESIGN TASK: Apply a Star pattern. Scattering of stars across the fabric. Celestial or rock-star fashion aesthetic.' 
    },
    { 
        id: 'zebra_print', 
        label: 'ZEBRA DESENİ', 
        promptValue: 'DESIGN TASK: Apply a Zebra Stripe pattern. High contrast black and white irregular stripes. Wild animal print aesthetic.' 
    },
    { 
        id: 'chain_gold', 
        label: 'ZİNCİR (ALTIN)', 
        promptValue: 'DESIGN TASK: Apply a Gold Chain print. Interlocking metal chains or jewelry motifs printed on fabric. 80s luxury streetwear aesthetic.' 
    },
];