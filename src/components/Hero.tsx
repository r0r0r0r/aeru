"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const FLAVORS = [
    {
        id: 'citrus',
        name: 'CITRUS VEIL',
        image: '/images/citrus-new.png',
        bg: 'var(--c-brand-orange)',
        accent: 'var(--c-brand-yellow)',
        tagline: 'VIBRANT AIR'
    },
    {
        id: 'stone',
        name: 'STONE BLOOM',
        image: '/images/stone-new.png',
        bg: 'var(--c-brand-pink)',
        accent: 'var(--c-brand-mint)',
        tagline: 'SWEET CHAOS'
    },
    {
        id: 'night',
        name: 'NIGHT TONIC',
        image: '/images/night-new.png',
        bg: 'var(--c-brand-violet)',
        accent: 'var(--c-brand-orange)',
        tagline: 'DEEP PULSE'
    }
];

export const Hero = () => {
    const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]);
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    return (
        <section
            className="hero-section relative w-full h-screen overflow-hidden flex flex-col items-center justify-center p-4 transition-colors duration-700 ease-in-out"
            style={{ backgroundColor: activeFlavor.bg }}
        >

            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--c-brand-yellow)_0%,_transparent_70%)] opacity-50">
                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>

            {/* HUGE TYPOGRAPHY BEHIND */}
            <div className="absolute inset-0 flex items-center justify-center -z-1 overflow-hidden pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={activeFlavor.tagline}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 0.2, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        style={{ scale }}
                        className="type-display text-[22vw] whitespace-nowrap text-white mix-blend-overlay"
                    >
                        {activeFlavor.tagline}
                    </motion.h1>
                </AnimatePresence>
            </div>

            <div className="layout-grid relative z-10 w-full h-full items-center">

                {/* Left: Flavor Switcher (Replaces Text) */}
                <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-start z-20 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="type-detail font-black text-sm tracking-widest uppercase opacity-50 mb-2">SELECT YOUR VIBE:</h3>
                        {FLAVORS.map((flavor, i) => (
                            <motion.div
                                key={flavor.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    scale: activeFlavor.id === flavor.id ? 1.05 : 1
                                }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setActiveFlavor(flavor)}
                                className={`
                                    relative border-[3px] border-black px-6 py-3 shadow-[4px_4px_0px_#000] 
                                    cursor-pointer transition-all duration-300
                                    ${activeFlavor.id === flavor.id
                                        ? 'bg-black text-white rotate-0 z-10'
                                        : 'bg-white text-black rotate-[-2deg] hover:rotate-0 hover:bg-gray-100 hover:z-10'
                                    }
                                `}
                            >
                                <span className="font-[Arial_Black] font-black text-2xl md:text-4xl tracking-tighter uppercase leading-none">{flavor.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <button
                        onClick={() => document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-8 bg-[var(--c-brand-mint)] text-black px-8 py-4 font-black text-xl uppercase border-[3px] border-transparent hover:border-black shadow-[4px_4px_0px_#000] hover:bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[0px_0px_0px_#000] transition-all"
                    >
                        GRAB A CASE
                    </button>
                </div>

                {/* Center: The Artifact (High Energy) */}
                <div className="col-span-12 md:col-span-4 relative h-[60vh] md:h-[70vh] flex items-center justify-center z-30">
                    {/* Sticker Badge */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="sticker-badge top-10 right-0 md:top-20 md:-right-10"
                        style={{ backgroundColor: activeFlavor.accent }}
                    >
                        NEW!<br />VIBE
                    </motion.div>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFlavor.id}
                                initial={{ y: 200, opacity: 0, rotate: -15, scale: 0.8 }}
                                animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ y: -200, opacity: 0, rotate: 15 }}
                                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeFlavor.image}
                                    alt={`AERU ${activeFlavor.name}`}
                                    fill
                                    className="object-contain drop-shadow-[25px_35px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: Decorative Elements */}
                <div className="hidden md:flex col-span-4 flex-col justify-end items-end h-full pb-32 gap-12 z-20 pointer-events-none">

                    {/* Top: Rotating "Certified Fresh" Badge */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="relative w-32 h-32 flex items-center justify-center mr-24 mt-12"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 animate-spin-slow">
                            <path
                                id="curve"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="transparent"
                            />
                            <text className="text-[10px] font-bold uppercase tracking-widest text-black" fill="currentColor">
                                <textPath href="#curve">
                                    Certified Fresh • No Artificial Calm • Pure Chaos •
                                </textPath>
                            </text>
                        </svg>
                        <div className="w-16 h-16 bg-black rounded-full text-white flex items-center justify-center font-black text-xl rotate-[-15deg] shadow-lg">
                            100%
                        </div>
                    </motion.div>

                    {/* Bottom: Vertical Typography */}
                    <div className="flex flex-col items-end gap-2 text-right">
                        <h4 className="font-[Arial_Black] text-5xl text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '1px black', writingMode: 'vertical-rl' }}>
                            HYPER
                        </h4>
                        <h4 className="font-[Arial_Black] text-5xl text-black uppercase tracking-tighter" style={{ writingMode: 'vertical-rl' }}>
                            REAL
                        </h4>
                    </div>
                </div>

            </div>
        </section>
    );
};
