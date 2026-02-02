export const flavors = [
    {
        id: "citrus-veil",
        name: "CITRUS VEIL",
        price: 45,
        tagline: "ELECTRIC ZEST",
        color: "var(--c-brand-orange)",
        bg: "#FF4D00",
        accent: "var(--c-brand-yellow)",
        image: "/images/citrus-veil-chaos.png",
        description: "Yuzu shockwave. Bergamot blast. No subtle notes here. A high-voltage citrus hit that wakes up the nervous system.",
        notes: ["YUZU", "BERGAMOT", "MINERAL"],
        stats: {
            acidity: 90,
            sweetness: 20,
            chaos: 100
        },
        nutrition: {
            calories: 15,
            sugar: "0g",
            carbs: "2g",
            ingredients: "Carbonated Water, Yuzu Juice, Bergamot Extract, Citric Acid, Sea Salt."
        }
    },
    {
        id: "stone-bloom",
        name: "STONE BLOOM",
        price: 45,
        tagline: "NEON PEACH",
        color: "var(--c-brand-pink)",
        bg: "#FF0080",
        accent: "var(--c-brand-mint)",
        image: "/images/stone-bloom-chaos.png",
        description: "Hibiscus punch. White peach adrenaline. Sweet chaos. Like drinking a synthesizer solo.",
        notes: ["WHITE PEACH", "HIBISCUS", "FROST"],
        stats: {
            acidity: 40,
            sweetness: 80,
            chaos: 75
        },
        nutrition: {
            calories: 20,
            sugar: "2g",
            carbs: "4g",
            ingredients: "Carbonated Water, White Peach Puree, Hibiscus Tea, Monk Fruit, Vitamin C."
        }
    },
    {
        id: "night-tonic",
        name: "NIGHT TONIC",
        price: 45,
        tagline: "DARK MATTER",
        color: "var(--c-brand-violet)",
        bg: "#4A00E0",
        accent: "#FF2E63",
        image: "/images/night-tonic-chaos.png",
        description: "Bitter roots. Blood orange voltage. The midnight fuel. A complex, dark, confident sip for the after-hours.",
        notes: ["BLOOD ORANGE", "GENTIAN", "SPICE"],
        stats: {
            acidity: 60,
            sweetness: 30,
            chaos: 95
        },
        nutrition: {
            calories: 10,
            sugar: "0g",
            carbs: "1g",
            ingredients: "Carbonated Water, Gentian Root, Blood Orange Oil, Ginger Extract, L-Theanine."
        }
    },
    // --- REMIX EDITIONS ---
    {
        id: "citrus-smash",
        name: "CITRUS SMASH",
        price: 50,
        tagline: "ACID RAIN",
        color: "var(--c-brand-yellow)",
        bg: "#FFD600",
        accent: "#000",
        image: "/images/citrus-smash.png",
        description: "The remix. Higher acidity, rougher bubbles. A chaotic smash of lemon zest and electric yuzu.",
        notes: ["LEMON ZEST", "STATIC", "ACID"],
        stats: { acidity: 100, sweetness: 10, chaos: 110 },
        nutrition: { calories: 5, sugar: "0g", carbs: "1g", ingredients: "Carbonated Water, Lemon Oil, Tartaric Acid." }
    },
    {
        id: "stone-vibe",
        name: "STONE VIBE",
        price: 50,
        tagline: "LO-FI PEACH",
        color: "var(--c-brand-pink)",
        bg: "#FF0080",
        accent: "#FFF",
        image: "/images/stone-bloom-vib.png",
        description: "Slowed and reverb. A hazy, unfiltered peach nectar drift. Softer edges, longer finish.",
        notes: ["NECTAR", "HAZE", "VANILLA"],
        stats: { acidity: 20, sweetness: 90, chaos: 40 },
        nutrition: { calories: 35, sugar: "6g", carbs: "8g", ingredients: "Carbonated Water, Peach Nectar, Vanilla Bean." }
    },
    {
        id: "night-drive",
        name: "NIGHT DRIVE",
        price: 50,
        tagline: "MIDNIGHT OIL",
        color: "var(--c-brand-violet)",
        bg: "#4A00E0",
        accent: "#00FFFF",
        image: "/images/night-tonic-vib.png",
        description: "For the late ride. Deep violet tonic with a hit of caffeine and neon ginger.",
        notes: ["GINGER", "CAFFEINE", "NEON"],
        stats: { acidity: 70, sweetness: 40, chaos: 100 },
        nutrition: { calories: 15, sugar: "2g", carbs: "3g", ingredients: "Carbonated Water, Ginger, Green Tea Extract." }
    },

    // --- PURE EDITIONS ---
    {
        id: "citrus-clean",
        name: "CITRUS ZERO",
        price: 40,
        tagline: "PURE VOLTAGE",
        color: "#FFFFFF",
        bg: "#FF4D00",
        accent: "#000",
        image: "/images/citrus-zero-chaos.png",
        description: "Stripped back. Just the water and the wave. Zero noise, maximum clarity.",
        notes: ["WATER", "AIR", "SODA"],
        stats: { acidity: 50, sweetness: 0, chaos: 0 },
        nutrition: { calories: 0, sugar: "0g", carbs: "0g", ingredients: "Sparkling Water, Essence of Lemon." }
    },
    {
        id: "stone-clean",
        name: "STONE ZERO",
        price: 40,
        tagline: "NAKED BLOOM",
        color: "#FFFFFF",
        bg: "#FF0080",
        accent: "#000",
        image: "/images/stone-zero-chaos.png",
        description: "The ghost of a peach. Barely there fruit notes on a crisp mineral backbone.",
        notes: ["MINERAL", "WHISPER", "CRISP"],
        stats: { acidity: 30, sweetness: 0, chaos: 10 },
        nutrition: { calories: 0, sugar: "0g", carbs: "0g", ingredients: "Sparkling Water, Essence of Peach." }
    },
    {
        id: "night-clean",
        name: "NIGHT ZERO",
        price: 40,
        tagline: "VOID WATER",
        color: "#4A00E0",
        bg: "#4A00E0",
        accent: "#000",
        image: "/images/night-zero-chaos.png",
        description: "Black water. Activated charcoal and silence. The ultimate reset button.",
        notes: ["CHARCOAL", "SILENCE", "VOID"],
        stats: { acidity: 50, sweetness: 0, chaos: 0 },
        nutrition: { calories: 0, sugar: "0g", carbs: "0g", ingredients: "Sparkling Water, Activated Charcoal." }
    },
    // --- MERCH & PRINTS ---
    {
        id: "merch-hoodie",
        name: "WAREHOUSE HOODIE",
        price: 120,
        tagline: "HEAVY DUTY",
        color: "var(--c-brand-yellow)",
        bg: "#000000",
        accent: "#FFFFFF",
        image: "/images/hoodie.png",
        description: "Oversized, heavyweight 450GSM cotton. Drop shoulder fit. Puff print AERU logo on back. Built for the warehouse rave.",
        notes: ["COTTON", "OVERSIZED", "BLACK"],
        stats: {
            warmth: 100,
            comfort: 100,
            chaos: 20
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "100% Heavyweight Cotton, Screen Print Ink."
        }
    },
    {
        id: "merch-tote",
        name: "DAILY TOTE",
        price: 45,
        tagline: "UTILITY",
        color: "var(--c-brand-pink)",
        bg: "#FF0080", // Pink instead of White
        accent: "#000000",
        image: "/images/tote.png",
        description: "Reinforced canvas. Internal laptop pocket. Wide straps. Fits a 12-pack of AERU and your entire life.",
        notes: ["CANVAS", "STRUCTURED", "DURABLE"],
        stats: {
            capacity: 80,
            durability: 90,
            chaos: 10
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "100% Recycled Cotton Canvas."
        }
    },
    {
        id: "poster-night",
        name: "NIGHT REALITY",
        price: 30,
        tagline: "A1 POSTER",
        color: "var(--c-brand-violet)",
        bg: "#121212",
        accent: "#FF2E63",
        image: "/images/poster-night-real.png",
        description: "High-gloss A1 print of the Night Tonic campaign. Deep blacks, vibrant violets. The void on your wall.",
        notes: ["A1", "GLOSS", "VIOLET"],
        stats: {
            impact: 90,
            gloss: 100,
            chaos: 80
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "200GSM Gloss Paper, Archival Ink."
        }
    },
    {
        id: "poster-stone",
        name: "STONE VIBE",
        price: 30,
        tagline: "A1 POSTER",
        color: "var(--c-brand-pink)",
        bg: "#FF0080",
        accent: "#00FFF0",
        image: "/images/poster-stone.png",
        description: "Matte A1 print of the Stone Bloom campaign. Soft noise, neon pinks. Vaporwave for the real world.",
        notes: ["A1", "MATTE", "PINK"],
        stats: {
            vibes: 100,
            matte: 100,
            chaos: 40
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "180GSM Matte Maple Paper."
        }
    },
    {
        id: "print-squad",
        name: "SQUAD",
        price: 25,
        tagline: "LIMITED ED.",
        color: "var(--c-brand-orange)",
        bg: "#FF4D00", // Orange instead of White
        accent: "#000000",
        image: "/images/shot-group.png",
        description: "The full lineup. A2 satin finish print capturing the complete AERU flavor profile.",
        notes: ["A2", "SATIN", "GROUP"],
        stats: {
            breadth: 100,
            satin: 50,
            chaos: 60
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "Satin Finish Photo Paper."
        }
    },
    {
        id: "print-pov",
        name: "POV",
        price: 25,
        tagline: "LIMITED ED.",
        color: "#000000",
        bg: "#121212", // Dark instead of White
        accent: "#000000",
        image: "/images/shot-pov.png",
        description: "First person perspective. A2 satin finish. The moment before the seal breaks.",
        notes: ["A2", "SATIN", "POV"],
        stats: {
            immersion: 100,
            satin: 50,
            chaos: 50
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "Satin Finish Photo Paper."
        }
    },
    {
        id: "print-origins",
        name: "ORIGINS",
        price: 40,
        tagline: "ARCHIVAL",
        color: "#FF0000",
        bg: "#000000",
        accent: "#FFFFFF",
        image: "/images/hero.png",
        description: "The original concept art. Archival quality giclée print on cotton rag paper. Signed limited run.",
        notes: ["GICLEE", "ARCHIVAL", "HERO"],
        stats: {
            quality: 100,
            history: 100,
            chaos: 10
        },
        nutrition: {
            calories: 0,
            sugar: "0g",
            carbs: "0g",
            ingredients: "310GSM Cotton Rag Paper, Giclée Ink."
        }
    }
];
