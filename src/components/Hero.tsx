"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";

interface Flavor {
    id: string;
    name: string;
    category: string;
    image: string;
    bg: string;
    accent: string;
    glowColor: string;
    tagline: string;
    visualScale?: number;
    stats?: {
        acidity: string;
        chaos: string;
    };
}

const FLAVORS: Flavor[] = [
    {
        id: 'citrus',
        name: 'CITRUS VEIL',
        category: 'PREMIUM SPARKLING SODA',
        image: '/images/citrusveil-background less.png',
        bg: 'var(--c-brand-orange)',
        accent: 'var(--c-brand-yellow)',
        glowColor: 'rgba(255, 210, 80, 0.8)',
        tagline: 'VIBRANT AIR',
        visualScale: 1.3,
        stats: { acidity: '85%', chaos: '40%' }
    },
    {
        id: 'stone',
        name: 'STONE BLOOM',
        category: 'PREMIUM SPARKLING SODA',
        image: '/images/stone-bloom-background less.png',
        bg: 'var(--c-brand-pink)',
        accent: 'var(--c-brand-mint)',
        glowColor: 'rgba(0, 255, 255, 0.95)',
        tagline: 'SWEET CHAOS',
        visualScale: 1.25,
        stats: { acidity: '20%', chaos: '90%' }
    },
    {
        id: 'night',
        name: 'NIGHT TONIC',
        category: 'PREMIUM SPARKLING SODA',
        image: '/images/night-tonic-backgroundless.png',
        bg: 'var(--c-brand-violet)',
        accent: 'var(--c-brand-orange)',
        glowColor: 'rgba(255, 100, 40, 0.35)',
        tagline: 'DEEP PULSE',
        visualScale: 1.3,
        stats: { acidity: '60%', chaos: '25%' }
    }
];

export const Hero = () => {
    const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]);


    return (
        <section
            className="hero-section relative w-full min-h-screen flex flex-col items-center justify-start transition-colors duration-1000 pb-24"
            style={{ backgroundColor: activeFlavor.bg }}
        >
            {/* 0. FIXED SPACER FOR NAVIGATION CLEARANCE */}
            <div className="h-40 md:h-48 w-full shrink-0" />
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* 1. CENTRAL ANCHOR: The Circle Background (Glow) */}
            <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none pt-20 md:pt-32">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFlavor.id}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-[100vh] h-[100vh] rounded-full blur-[150px] -translate-y-12 md:-translate-y-20 opacity-30"
                        style={{ backgroundColor: activeFlavor.accent }}
                    />
                </AnimatePresence>
            </div>

            <div className="layout-grid relative z-10 w-full h-auto md:h-full items-start md:items-center content-start md:content-center">

                {/* LEFT COLUMN: Product Name & Price */}
                <div className="col-span-12 md:col-span-4 order-2 md:order-1 flex flex-col justify-center items-center md:items-start gap-8 z-30 text-center md:text-left pt-12 md:pt-0">
                    <motion.div
                        key={`title-${activeFlavor.id}`}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-white" />
                            <span className="font-[Courier_New] font-black text-xs md:text-sm text-white tracking-[0.4em] uppercase">
                                {activeFlavor.category}
                            </span>
                        </div>

                        <h1 className="font-[Arial_Black] font-black text-[clamp(4rem,9vw,7.5rem)] md:text-[clamp(4.5rem,8vw,8rem)] text-white leading-[0.85] uppercase tracking-tighter">
                            {activeFlavor.name.split(' ')[0]}<br />
                            {activeFlavor.name.split(' ')[1]}
                        </h1>

                        <div className="flex items-center gap-6 pt-10 md:pt-4">
                            <span className="font-[Arial_Black] text-[clamp(4rem,8vw,6.5rem)] text-white uppercase tracking-tighter leading-none">
                                $45
                            </span>
                            <div className="h-16 w-[3px] bg-white opacity-40" />
                            <div className="flex flex-col">
                                <span className="font-[Arial_Black] font-black text-lg md:text-xl text-white tracking-widest uppercase leading-tight">
                                    FULL CASE
                                </span>
                                <span className="font-[Courier_New] font-bold text-[10px] text-white/70 tracking-[0.2em] uppercase leading-tight">
                                    SHIPPING INCLUDED
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-4 mt-12 md:mt-8 w-full md:w-auto">
                        <button
                            onClick={() => document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-12 py-6 font-[Arial_Black] text-xl uppercase hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-4 group"
                        >
                            GRAB CASE
                            <span className="group-hover:translate-x-2 transition-transform duration-300">➜</span>
                        </button>
                    </div>

                    {/* Minimalist Multi-Product Switcher */}
                    <div className="flex flex-col items-start gap-4 mt-12 md:mt-16">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Select your poison</span>
                        <div className="flex items-center gap-4">
                            {FLAVORS.map((flavor) => (
                                <button
                                    key={flavor.id}
                                    onClick={() => setActiveFlavor(flavor)}
                                    className="group py-2 flex flex-col items-center gap-2"
                                >
                                    <div className={`h-[5px] transition-all duration-500 rounded-full ${activeFlavor.id === flavor.id ? 'w-12 bg-white' : 'w-6 bg-white/20 group-hover:bg-white/50'}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CENTER COLUMN: The Product */}
                <div className="col-span-12 md:col-span-4 order-1 md:order-2 relative h-[50vh] md:h-full flex items-center justify-center z-40 mb-12 md:mb-0 mt-8 md:mt-0">
                    {/* Visual Circle ring - centered specifically with product */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-16 md:-translate-y-20 opacity-40">
                        <div className="absolute w-[65vh] h-[65vh] md:w-[60vh] md:h-[60vh] rounded-full border border-white/40" />
                    </div>

                    {/* Soft radial glow - oversized so it bleeds naturally without hard edges */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            width: '120vh',
                            height: '120vh',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -70%)',
                            background: `radial-gradient(circle, ${activeFlavor.glowColor} 0%, transparent 70%)`,
                            zIndex: 0,
                        }}
                    />

                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait" initial={false} custom={activeFlavor.id}>
                            <motion.div
                                key={activeFlavor.id}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset }) => {
                                    const swipeThreshold = 50;
                                    if (offset.x > swipeThreshold) {
                                        const currentIndex = FLAVORS.findIndex(f => f.id === activeFlavor.id);
                                        const nextIndex = (currentIndex - 1 + FLAVORS.length) % FLAVORS.length;
                                        setActiveFlavor(FLAVORS[nextIndex]);
                                    } else if (offset.x < -swipeThreshold) {
                                        const currentIndex = FLAVORS.findIndex(f => f.id === activeFlavor.id);
                                        const nextIndex = (currentIndex + 1) % FLAVORS.length;
                                        setActiveFlavor(FLAVORS[nextIndex]);
                                    }
                                }}
                                initial={{ x: 100, opacity: 0, scale: 0.9 * (activeFlavor.visualScale || 1) }}
                                animate={{ x: 0, opacity: 1, scale: 1 * (activeFlavor.visualScale || 1) }}
                                exit={{ x: -100, opacity: 0, scale: 1.1 * (activeFlavor.visualScale || 1) }}
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing -translate-y-12 md:-translate-y-16"
                            >
                                <div className="relative w-[85%] h-[85%] md:w-[80%] md:h-[80%] pointer-events-none">
                                    <Image
                                        src={activeFlavor.image}
                                        alt={`AERU ${activeFlavor.name}`}
                                        fill
                                        className="object-contain drop-shadow-[20px_40px_60px_rgba(0,0,0,0.2)]"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* RIGHT COLUMN: Metadata & Stats */}
                <div className="hidden md:flex col-span-12 md:col-span-4 order-3 flex-col justify-center items-end text-right gap-12 z-30 pt-16 md:pt-0">
                    <motion.div
                        key={`meta-${activeFlavor.id}`}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="mb-8">
                            <span className="font-[Courier_New] font-bold text-[16px] uppercase tracking-[0.3em] text-white/50 block mb-4">Formula</span>
                            <span className="font-[Courier_New] font-black text-2xl uppercase tracking-widest text-white">
                                {activeFlavor.tagline}
                            </span>
                        </div>

                        <div>
                            <span className="font-mono font-bold text-[12px] uppercase tracking-[0.4em] text-white/60 block mb-4">Vibe Check</span>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-end gap-3">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Acidity</span>
                                    <span className="font-[Arial_Black] text-2xl uppercase text-white leading-none">{activeFlavor.stats?.acidity || '85%'}</span>
                                </div>
                                <div className="flex items-center justify-end gap-3">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Chaos</span>
                                    <span className="font-[Arial_Black] text-2xl uppercase text-white leading-none">{activeFlavor.stats?.chaos || '100%'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll indicator - vertical alignment like HUGS */}
            <div className="absolute bottom-8 right-8 md:right-16 vertical-rl flex items-center gap-4 text-white/20 hover:text-white transition-colors cursor-pointer pointer-events-auto" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <span className="font-[Courier_New] font-bold text-[10px] tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll Down</span>
                <div className="w-[1px] h-12 bg-current" />
            </div>
        </section>
    );
};
