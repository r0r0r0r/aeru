"use client";

import React from "react";
import Link from "next/link";
import { AeruLogo } from "./AeruLogo";


export const Footer = () => {
    return (
        <footer id="contact" className="w-full bg-[var(--c-foreground)] text-[var(--c-background)] relative overflow-hidden border-t-[3px] border-white/20">

            {/* Top Marquee Separator */}
            <div className="bg-[var(--c-brand-yellow)] text-black py-4 border-b-[3px] border-black overflow-hidden whitespace-nowrap z-20 relative">
                <div className="animate-marquee inline-block">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="font-[Arial_Black] font-black italic text-2xl mx-12">
                            NO SUGAR • PURE CHAOS • TOTAL VIBE •
                        </span>
                    ))}
                </div>
            </div>

            <div className="pt-32 pb-16 px-6 relative z-10">
                <div className="layout-grid">

                    {/* Giant Brand Name - Refined Scale and Spacing */}
                    <div className="col-span-12 mb-24 relative group cursor-default">
                        <AeruLogo className="w-full h-auto max-w-[85vw] mx-auto text-[var(--c-brand-orange)] transition-all duration-500 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_30px_rgba(255,77,0,0.3)]" />
                    </div>

                    {/* Links Section Wrapper */}
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-8 mb-16 lg:mb-0">
                        {/* Links Column 1 */}
                        <div>
                            <h4 className="type-detail text-[var(--c-brand-yellow)] mb-8 text-sm tracking-[0.3em] border-b-[2px] border-[var(--c-brand-yellow)] pb-2 inline-block">DRINKS</h4>
                            <ul className="space-y-6 type-body font-black text-2xl md:text-3xl uppercase tracking-tighter">
                                {[
                                    { name: "Citrus Veil", link: "/products/citrus-veil", color: "hover:text-[var(--c-brand-yellow)]" },
                                    { name: "Stone Bloom", link: "/products/stone-bloom", color: "hover:text-[var(--c-brand-pink)]" },
                                    { name: "Night Tonic", link: "/products/night-tonic", color: "hover:text-[var(--c-brand-violet)]" },
                                ].map((item) => (
                                    <li key={item.name} className={`${item.color} transition-all duration-300 flex items-center group/link`}>
                                        <Link href={item.link} className="flex items-center w-full">
                                            <span className="opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 mr-4 font-mono text-lg">➜</span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className="text-white/20 cursor-not-allowed flex items-center gap-4 text-xl">
                                    <span className="opacity-0 mr-4">➜</span>
                                    Mystery Drop <span className="text-[10px] border border-white/20 px-2 py-1 rounded-sm">SECURE_LOCKED</span>
                                </li>
                            </ul>
                        </div>

                        {/* Links Column 2 */}
                        <div>
                            <h4 className="type-detail text-[var(--c-brand-yellow)] mb-8 text-sm tracking-[0.3em] border-b-[2px] border-[var(--c-brand-yellow)] pb-2 inline-block">WORLD</h4>
                            <ul className="space-y-6 type-body font-black text-2xl md:text-3xl uppercase tracking-tighter">
                                {[
                                    { name: "Manifesto", link: "/manifesto", color: "hover:text-[var(--c-brand-yellow)]" },
                                    { name: "Stockists", link: "/stockists", color: "hover:text-[var(--c-brand-pink)]" },
                                    { name: "Radio", link: "/radio", color: "hover:text-[var(--c-brand-violet)]" },
                                    { name: "Careers", link: "/careers", color: "hover:text-white" },
                                ].map((item) => (
                                    <li key={item.name} className={`${item.color} transition-all duration-300 flex items-center group/link`}>
                                        <Link href={item.link} className="flex items-center w-full">
                                            <span className="opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 mr-4 font-mono text-lg">➜</span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter & Track Order - Unified Heavy Aesthetic */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-16">

                        {/* JOIN THE CULT */}
                        <div className="relative">
                            <h4 className="font-[Arial_Black] text-5xl md:text-6xl uppercase mb-6 leading-none tracking-tighter">
                                JOIN THE <span className="text-[var(--c-brand-yellow)]">CULT</span>
                            </h4>
                            <p className="mb-8 opacity-40 font-[Courier_New] text-sm md:text-base max-w-sm uppercase leading-relaxed">
                                Get early access to drops, secret playlists, and chaos in your inbox. No spam, only energy.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="YOUR@EMAIL.COM"
                                    className="w-full p-6 bg-transparent border-[3px] border-white/20 text-white font-black text-xl placeholder:opacity-20 placeholder:text-white focus:outline-none focus:border-[var(--c-brand-yellow)] transition-all"
                                    suppressHydrationWarning
                                />
                                <button suppressHydrationWarning className="bg-[var(--c-brand-yellow)] text-black px-12 py-6 font-black text-2xl border-[3px] border-transparent hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center">
                                    ➜
                                </button>
                            </div>
                        </div>

                        {/* TRACK ORDER - Unified border and color */}
                        <div className="pt-12 border-t-[1px] border-white/10">
                            <h4 className="font-[Arial_Black] text-2xl uppercase mb-6 leading-none text-white/40 tracking-widest">
                                TRACK YOUR CRATE
                            </h4>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="ENTRY_ID (e.g. #1234)"
                                    className="w-full p-4 bg-transparent border-[3px] border-white/20 text-white font-bold placeholder:opacity-20 placeholder:text-white focus:outline-none focus:border-white transition-all uppercase"
                                    suppressHydrationWarning
                                />
                                <button suppressHydrationWarning className="bg-white text-black px-8 py-4 font-black border-[3px] border-transparent hover:bg-[var(--c-brand-yellow)] hover:scale-[1.02] transition-all uppercase flex items-center justify-center">
                                    VERIFY
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="col-span-12 mt-32 pt-12 border-t-[3px] border-white flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-20 uppercase tracking-[0.4em] gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[var(--c-brand-yellow)] rounded-full animate-pulse" />
                            <span>© 2026 AERU BEVERAGE CORP. // UNIFIED_ACCESS_GRANTED</span>
                        </div>
                        <div className="flex gap-8">
                            {['Instagram', 'TikTok', 'Twitter'].map((social) => (
                                <span key={social} className="hover:text-white cursor-crosshair transition-colors border-b border-transparent hover:border-white pb-1">
                                    {social}
                                </span>
                            ))}
                        </div>
                        <div className="text-[8px] opacity-50">
                            COORD: 40.7128 N, 74.0060 W
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </footer>
    );
};
