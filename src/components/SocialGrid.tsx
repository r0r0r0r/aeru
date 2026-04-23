"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Brand color palette matching the site
const BRAND = {
    orange: 'var(--c-brand-orange)',
    yellow: 'var(--c-brand-yellow)',
    mint: 'var(--c-brand-mint)',
    pink: 'var(--c-brand-pink)',
    violet: 'var(--c-brand-violet)',
};

// Bento tiles — smaller, denser, more complex
const bentoItems = [
    // Row 1: 8 + 4
    {
        id: 1, type: "image",
        src: "/images/shot-group.png", alt: "The Crew",
        span: "col-span-12 md:col-span-8 row-span-1 md:row-span-2",
        pos: "object-center"
    },
    {
        id: 2, type: "colour", label: "#AERULIFESTYLE", emoji: "🔥",
        bg: BRAND.orange,
        span: "col-span-6 md:col-span-4 row-span-1",
        textColor: "black"
    },
    {
        id: 3, type: "colour", label: "FLAVOR RIOT", emoji: "⚡",
        bg: BRAND.yellow,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "black"
    },
    {
        id: 4, type: "colour", label: "STONE BLOOM", emoji: "🌸",
        bg: BRAND.mint,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "black"
    },
    // Row 2: 4 + 4 + 4
    {
        id: 5, type: "image",
        src: "/images/shot-street.png", alt: "Urban Vibe",
        span: "col-span-12 md:col-span-4 row-span-1 md:row-span-2",
        pos: "object-top"
    },
    {
        id: 6, type: "manifesto",
        span: "col-span-12 md:col-span-4 row-span-1",
        bg: "white", textColor: "black"
    },
    {
        id: 7, type: "colour", label: "NIGHT TONIC", emoji: "🌙",
        bg: BRAND.violet,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "white"
    },
    {
        id: 8, type: "colour", label: "#JOINTHERIOT", emoji: "✊",
        bg: BRAND.pink,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "black"
    },
    // Row 3
    {
        id: 9, type: "image",
        src: "/images/shot-backstage.png", alt: "Backstage",
        span: "col-span-12 md:col-span-4 row-span-1",
        pos: "object-center"
    },
    {
        id: 10, type: "stat",
        span: "col-span-6 md:col-span-4 row-span-1",
        bg: BRAND.orange, textColor: "black"
    },
    {
        id: 11, type: "colour", label: "CITRUS VEIL", emoji: "🍊",
        bg: BRAND.yellow,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "black"
    },
    {
        id: 12, type: "colour", label: "EST. 2026", emoji: "🖤",
        bg: "#111111",
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "white"
    },
    // Row 4: big party shot + pov
    {
        id: 13, type: "image",
        src: "/images/shot-party.png", alt: "Party",
        span: "col-span-12 md:col-span-8 row-span-1 md:row-span-2",
        pos: "object-center"
    },
    {
        id: 14, type: "image",
        src: "/images/shot-pov.png", alt: "POV",
        span: "col-span-12 md:col-span-4 row-span-1 md:row-span-2",
        pos: "object-top"
    },
    // Row 5: small colour tiles + new images
    {
        id: 15, type: "image",
        src: "/images/shot-pour.png", alt: "The Pour",
        span: "col-span-6 md:col-span-3 row-span-1",
        pos: "object-center"
    },
    {
        id: 16, type: "image",
        src: "/images/shot-vending.png", alt: "Vending",
        span: "col-span-6 md:col-span-3 row-span-1",
        pos: "object-center"
    },
    {
        id: 17, type: "colour", label: "PURE CHAOS", emoji: "💥",
        bg: BRAND.orange,
        span: "col-span-4 md:col-span-2 row-span-1",
        textColor: "black"
    },
    {
        id: 18, type: "colour", label: "AERU®", emoji: "⚗️",
        bg: BRAND.violet,
        span: "col-span-4 md:col-span-2 row-span-1",
        textColor: "white"
    },
    {
        id: 19, type: "colour", label: "100% SIGNAL", emoji: "📡",
        bg: BRAND.mint,
        span: "col-span-4 md:col-span-2 row-span-1",
        textColor: "black"
    },
    // Row 6: squad, toast, billboard
    {
        id: 20, type: "image",
        src: "/images/squad.png", alt: "Squad",
        span: "col-span-12 md:col-span-4 row-span-1",
        pos: "object-center"
    },
    {
        id: 21, type: "image",
        src: "/images/toast.png", alt: "Toast",
        span: "col-span-12 md:col-span-4 row-span-1",
        pos: "object-center"
    },
    {
        id: 22, type: "colour", label: "#JOINTHERIOT", emoji: "🎉",
        bg: BRAND.pink,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "black"
    },
    {
        id: 23, type: "colour", label: "EST. 2026", emoji: "🚀",
        bg: "#111111",
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "white"
    },
    // Row 7: Full-width lifestyle + billboard
    {
        id: 24, type: "image",
        src: "/images/billboard.png", alt: "Billboard",
        span: "col-span-12 md:col-span-8 row-span-1",
        pos: "object-center"
    },
    {
        id: 25, type: "image",
        src: "/images/lifestyle.png", alt: "Lifestyle",
        span: "col-span-12 md:col-span-4 row-span-1",
        pos: "object-center"
    },
    // Row 8: Posters + accent
    {
        id: 26, type: "image",
        src: "/images/poster-citrus-real.png", alt: "Citrus Poster",
        span: "col-span-6 md:col-span-3 row-span-1 md:row-span-2",
        pos: "object-top"
    },
    {
        id: 27, type: "image",
        src: "/images/poster-stone-real.png", alt: "Stone Poster",
        span: "col-span-6 md:col-span-3 row-span-1 md:row-span-2",
        pos: "object-top"
    },
    {
        id: 28, type: "image",
        src: "/images/poster-citrus.png", alt: "Citrus Art",
        span: "col-span-12 md:col-span-4 row-span-1",
        pos: "object-center"
    },
    {
        id: 29, type: "colour", label: "MERCH DROP", emoji: "👕",
        bg: BRAND.yellow,
        span: "col-span-6 md:col-span-2 row-span-1",
        textColor: "black"
    },
    // Row 9: Hero full-width + hoodie
    {
        id: 30, type: "image",
        src: "/images/hero.png", alt: "AERU Hero",
        span: "col-span-12 md:col-span-8 row-span-1",
        pos: "object-center"
    },
    {
        id: 31, type: "image",
        src: "/images/hoodie.png", alt: "Hoodie",
        span: "col-span-12 md:col-span-4 row-span-1",
        pos: "object-center"
    },
];

// Only image tiles go into the lightbox sequence
const lightboxImages = bentoItems.filter(i => i.type === "image" && i.src);

export const SocialGrid = () => {
    const [lightbox, setLightbox] = React.useState<{ open: boolean; index: number }>({ open: false, index: 0 });

    const openLightbox = (src: string) => {
        const idx = lightboxImages.findIndex(i => i.src === src);
        if (idx !== -1) setLightbox({ open: true, index: idx });
    };

    const closeLightbox = () => setLightbox(prev => ({ ...prev, open: false }));
    const goPrev = () => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + lightboxImages.length) % lightboxImages.length }));
    const goNext = () => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % lightboxImages.length }));

    React.useEffect(() => {
        if (!lightbox.open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightbox.open, lightbox.index]);

    const current = lightboxImages[lightbox.index];

    return (
        <section id="community" className="py-16 md:py-24 bg-black text-white overflow-hidden relative border-t border-white/5">

            {/* ── LIGHTBOX OVERLAY ── */}
            {lightbox.open && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeLightbox}
                >
                    {/* Image */}
                    <motion.div
                        key={lightbox.index}
                        className="relative w-[90vw] h-[85vh] max-w-5xl"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <Image
                            src={current?.src || ""}
                            alt={current?.alt || ""}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </motion.div>

                    {/* Caption */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
                        <span className="font-[Courier_New] text-[10px] text-white/50 uppercase tracking-[0.4em]">
                            {current?.alt} — {lightbox.index + 1} / {lightboxImages.length}
                        </span>
                    </div>

                    {/* Prev button */}
                    <button
                        onClick={e => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm font-[Arial_Black] text-lg"
                    >
                        ←
                    </button>

                    {/* Next button */}
                    <button
                        onClick={e => { e.stopPropagation(); goNext(); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm font-[Arial_Black] text-lg"
                    >
                        →
                    </button>

                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm text-sm"
                    >
                        ✕
                    </button>
                </motion.div>
            )}

            <div className="w-full mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="mb-10 md:mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-10">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-8 inline-block" style={{ backgroundColor: BRAND.orange }} />
                            <span className="font-[Courier_New] text-[10px] uppercase tracking-[0.4em] text-white/40">Community // Feed</span>
                        </div>
                        <h2 className="font-[Arial_Black] font-black text-[clamp(3.5rem,10vw,9rem)] text-white tracking-tighter uppercase leading-[0.78]">
                            THE<br />STREETS
                        </h2>
                    </div>
                    <div className="max-w-xs space-y-3 text-right">
                        <p className="font-[Courier_New] text-sm text-white/40 uppercase tracking-[0.15em] leading-relaxed">
                            Captured in the concrete jungle.<br />Authentic energy.
                        </p>
                        <div className="flex justify-end gap-4">
                            <span className="font-[Courier_New] text-xs italic" style={{ color: BRAND.orange }}>#AERULIFESTYLE</span>
                            <span className="font-[Courier_New] text-xs italic" style={{ color: BRAND.pink }}>#JOINTHERIOT</span>
                        </div>
                    </div>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-12 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[180px]">
                    {bentoItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`${item.span} overflow-hidden rounded-xl md:rounded-2xl group relative flex flex-col justify-between border border-white/5 ${item.type === "image" ? "cursor-pointer" : ""}`}
                            style={item.type !== "image" ? { backgroundColor: item.bg as string } : {}}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            onClick={() => item.type === "image" && item.src ? openLightbox(item.src) : undefined}
                        >
                            {/* IMAGE TILE */}
                            {item.type === "image" && item.src && (
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.src}
                                        alt={item.alt || ""}
                                        fill
                                        className={`object-cover ${item.pos || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white text-black px-3 py-1 font-[Courier_New] text-[9px] uppercase tracking-widest rounded-full">
                                            {item.alt} {"//"} VIEW
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* SOLID COLOUR TILE */}
                            {item.type === "colour" && (
                                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5" style={{ color: item.textColor }}>
                                    {item.emoji && (
                                        <span className="text-2xl md:text-3xl leading-none group-hover:scale-110 transition-transform duration-300 inline-block">{item.emoji}</span>
                                    )}
                                    {!item.emoji && <span className="font-[Courier_New] text-[9px] uppercase tracking-[0.35em] opacity-60">AERU®</span>}
                                    <p className="font-[Arial_Black] text-sm md:text-base uppercase tracking-tighter leading-tight">
                                        {item.label}
                                    </p>
                                </div>
                            )}

                            {/* MANIFESTO TILE */}
                            {item.type === "manifesto" && (
                                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 bg-white" style={{ color: "black" }}>
                                    <div className="flex items-center gap-2">
                                        <span className="h-[2px] w-5 bg-black inline-block" />
                                        <span className="font-[Courier_New] text-[9px] uppercase tracking-[0.35em] opacity-50">AERU Manifesto</span>
                                    </div>
                                    <p className="font-[Arial_Black] text-xl md:text-2xl uppercase tracking-tighter leading-tight">
                                        NOT A DRINK.<br />
                                        <span style={{ color: BRAND.orange }}>A SYSTEM.</span>
                                    </p>
                                </div>
                            )}

                            {/* STAT TILE */}
                            {item.type === "stat" && (
                                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5" style={{ color: item.textColor }}>
                                    <span className="font-[Courier_New] text-[9px] uppercase tracking-[0.35em] opacity-70">Chaos Metric</span>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <span className="font-[Arial_Black] text-sm uppercase">Acidity</span>
                                            <span className="font-[Arial_Black] text-sm">85%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '85%' }}
                                                transition={{ duration: 1.5, ease: "circOut" }}
                                                className="h-full bg-black rounded-full"
                                            />
                                        </div>
                                        <div className="flex justify-between mt-1">
                                            <span className="font-[Arial_Black] text-sm uppercase">Chaos</span>
                                            <span className="font-[Arial_Black] text-sm">98%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '98%' }}
                                                transition={{ duration: 1.8, ease: "circOut", delay: 0.2 }}
                                                className="h-full bg-black rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
