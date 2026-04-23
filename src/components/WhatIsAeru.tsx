"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * WHAT IS AERU?
 * Redesign — Editorial Manifesto Style.
 * Dark section for visual contrast against the vibrant hero.
 * Bold centered editorial layout, magazine-feature aesthetic.
 */
export const WhatIsAeru = () => {
    return (
        <section id="about" className="relative w-full bg-[#111111] text-white overflow-hidden">

            {/* Subtle grain */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />

            {/* ── TOP LABEL STRIP ── */}
            <div className="relative z-20 flex items-center justify-between px-8 md:px-16 py-5 border-b border-white/10">
                <div className="flex items-center gap-4">
                    <span className="h-[2px] w-8 inline-block" style={{ backgroundColor: 'var(--c-brand-orange)' }} />
                    <span className="font-[Courier_New] text-[10px] tracking-[0.4em] text-white/40 uppercase">02 // THE SYSTEM</span>
                </div>
                <span className="font-[Courier_New] text-[10px] tracking-[0.4em] text-white/30 uppercase hidden md:block">EST. 2026 // POP CULTURE</span>
            </div>

            {/* ── DESKTOP ── */}
            <div className="hidden md:flex relative z-20 flex-col">

                {/* Giant left headline */}
                <div className="px-8 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="font-[Arial_Black] font-black leading-[0.82] uppercase tracking-tighter text-[clamp(3.5rem,9vw,13rem)]">
                            WHAT IS<br />
                            <span style={{ color: 'var(--c-brand-orange)' }}>AERU?</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Horizontal rule */}
                <div className="mx-8 md:mx-12 lg:mx-16 h-[1px] bg-white/10" />

                {/* Content row — collapses to 2-col on tablet */}
                <div className="grid grid-cols-12 px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 gap-6 md:gap-8 items-center">

                    {/* Col 1: Manifesto copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-span-12 lg:col-span-4 flex flex-col gap-6 md:gap-8"
                    >
                        <p className="font-[Arial_Black] text-2xl uppercase tracking-tighter leading-tight text-white">
                            NOT A DRINK.<br />
                            <span style={{ color: 'var(--c-brand-orange)' }}>A SYSTEM.</span>
                        </p>
                        <p className="font-[Courier_New] text-sm text-white/50 uppercase tracking-[0.15em] leading-relaxed">
                            AERU is a cultural delivery mechanism bred in the fringes of digital chaos. We redefine consumption through molecular disruption.
                        </p>
                        {/* Stats */}
                        <div className="flex gap-8 pt-6 border-t border-white/10">
                            {[{ v: '85%', l: 'Acidity' }, { v: '40%', l: 'Chaos' }, { v: '100%', l: 'Signal' }].map((s) => (
                                <div key={s.l} className="flex flex-col gap-1">
                                    <span className="font-[Arial_Black] text-2xl" style={{ color: 'var(--c-brand-orange)' }}>{s.v}</span>
                                    <span className="font-[Courier_New] text-[9px] text-white/40 uppercase tracking-[0.3em]">{s.l}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Col 2: Product can */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-12 lg:col-span-4 flex items-center justify-center relative py-8"
                    >
                        {/* Subtle glow */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,110,30,0.18) 0%, transparent 70%)' }}
                        />
                        {/* Ring */}
                        <div className="absolute w-[38vh] h-[38vh] rounded-full border border-white/10" />
                        <div className="relative w-[18vh] h-[28vh] md:w-[20vh] md:h-[30vh] lg:w-[25vh] lg:h-[36vh]">
                            <Image
                                src="/images/citrusveil-background less.png"
                                alt="AERU Citrus Veil"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Col 3: Big bold statement */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-6 lg:text-right"
                    >
                        <h3 className="font-[Arial_Black] font-black text-[clamp(3rem,5vw,7rem)] leading-[0.85] uppercase tracking-tighter text-white">
                            PURE<br />
                            <span className="text-white bg-white/0 px-0" style={{ WebkitTextStroke: '2px var(--c-brand-orange)', color: 'transparent' }}>CHAOS</span>
                        </h3>
                        <div className="flex flex-col gap-2 items-end">
                            <span className="font-[Courier_New] text-[10px] text-white/30 uppercase tracking-[0.4em]">Protocol V2</span>
                            <span className="font-[Courier_New] text-[10px] text-white/50 uppercase tracking-[0.4em]">Defining the Void</span>
                        </div>
                        <motion.a
                            href="#product-details"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-[Arial_Black] text-sm uppercase tracking-widest text-black"
                            style={{ backgroundColor: 'var(--c-brand-orange)' }}
                        >
                            GRAB A CASE <span>→</span>
                        </motion.a>
                    </motion.div>

                </div>

                {/* Bottom border */}
                <div className="mx-8 md:mx-12 lg:mx-16 h-[1px] bg-white/10 mb-6 md:mb-8" />

            </div>

            {/* ── MOBILE ── */}
            <div className="md:hidden relative z-20 flex flex-col">

                {/* Big headline */}
                <div className="px-6 pt-10 pb-8">
                    <h2 className="font-[Arial_Black] font-black text-[clamp(4.5rem,17vw,6.5rem)] leading-[0.82] uppercase tracking-tighter">
                        WHAT IS<br />
                        <span style={{ color: 'var(--c-brand-orange)' }}>AERU?</span>
                    </h2>
                </div>

                {/* Can visual */}
                <div className="relative h-[55vw] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,110,30,0.2) 0%, transparent 70%)' }}
                    />
                    <div className="absolute w-[40vw] h-[40vw] rounded-full border border-white/10" />
                    <div className="relative w-[30vw] h-[44vw]">
                        <Image
                            src="/images/citrusveil-background less.png"
                            alt="AERU Can"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Copy */}
                <div className="px-6 py-8 flex flex-col gap-5 border-t border-white/10">
                    <p className="font-[Arial_Black] text-2xl uppercase tracking-tighter leading-tight">
                        NOT A DRINK. <span style={{ color: 'var(--c-brand-orange)' }}>A SYSTEM.</span>
                    </p>
                    <p className="font-[Courier_New] text-xs text-white/50 uppercase tracking-[0.12em] leading-relaxed">
                        AERU is a cultural delivery mechanism bred in the fringes of digital chaos.
                    </p>
                    <div className="flex gap-8 pt-4 border-t border-white/10">
                        {[{ v: '85%', l: 'Acidity' }, { v: '40%', l: 'Chaos' }].map((s) => (
                            <div key={s.l} className="flex flex-col gap-1">
                                <span className="font-[Arial_Black] text-2xl" style={{ color: 'var(--c-brand-orange)' }}>{s.v}</span>
                                <span className="font-[Courier_New] text-[9px] text-white/40 uppercase tracking-[0.3em]">{s.l}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-12">
                    <a
                        href="#product-details"
                        className="inline-flex items-center gap-3 px-8 py-4 font-[Arial_Black] text-sm uppercase tracking-widest text-black w-full justify-center"
                        style={{ backgroundColor: 'var(--c-brand-orange)' }}
                    >
                        GRAB A CASE →
                    </a>
                </div>

            </div>

        </section>
    );
};
