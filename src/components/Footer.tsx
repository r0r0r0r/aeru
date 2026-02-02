"use client";

import React from "react";
import Link from "next/link";
import { AeruLogo } from "./AeruLogo";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="w-full bg-[var(--c-foreground)] text-[var(--c-background)] relative overflow-hidden">

            {/* Top Marquee Separator */}
            <div className="bg-[var(--c-brand-yellow)] text-black py-3 border-y-[3px] border-black overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="font-[Arial_Black] font-black italic text-xl mx-8">
                            NO SUGAR • PURE CHAOS • TOTAL VIBE •
                        </span>
                    ))}
                </div>
            </div>

            <div className="pt-24 pb-12 px-6">
                <div className="layout-grid">

                    {/* Giant Brand Name */}
                    <div className="col-span-12 mb-12 relative group cursor-default">
                        <AeruLogo className="w-full h-auto max-w-[90vw] text-[var(--c-brand-orange)] transition-transform duration-300 group-hover:scale-[1.01]" />
                    </div>

                    {/* Links Column 1 */}
                    <div className="col-span-6 md:col-span-3">
                        <h4 className="type-detail text-[var(--c-brand-mint)] mb-6 text-sm tracking-widest border-b border-[rgba(255,255,255,0.2)] pb-2 inline-block">DRINKS</h4>
                        <ul className="space-y-4 type-body font-bold text-xl">
                            {[
                                { name: "Citrus Veil", link: "/products/citrus-veil", color: "hover:text-[var(--c-brand-yellow)]" },
                                { name: "Stone Bloom", link: "/products/stone-bloom", color: "hover:text-[var(--c-brand-pink)]" },
                                { name: "Night Tonic", link: "/products/night-tonic", color: "hover:text-[var(--c-brand-violet)]" },
                            ].map((item) => (
                                <li key={item.name} className={`${item.color} transition-colors flex items-center group`}>
                                    <Link href={item.link} className="flex items-center w-full">
                                        <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2">➜</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="text-gray-600 cursor-not-allowed flex items-center gap-2">
                                <span className="opacity-0 mr-2">➜</span>
                                Mystery Drop <span className="text-[10px] border border-gray-600 px-1 rounded">LOCKED</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="col-span-6 md:col-span-3">
                        <h4 className="type-detail text-[var(--c-brand-mint)] mb-6 text-sm tracking-widest border-b border-[rgba(255,255,255,0.2)] pb-2 inline-block">WORLD</h4>
                        <ul className="space-y-4 type-body font-bold text-xl">
                            {[
                                { name: "Manifesto", link: "/manifesto", color: "hover:text-[var(--c-brand-yellow)]" },
                                { name: "Stockists", link: "/stockists", color: "hover:text-[var(--c-brand-pink)]" },
                                { name: "Radio", link: "/radio", color: "hover:text-[var(--c-brand-violet)]" },
                                { name: "Careers", link: "/careers", color: "hover:text-white" },
                            ].map((item) => (
                                <li key={item.name} className={`${item.color} transition-colors flex items-center group`}>
                                    <Link href={item.link} className="flex items-center w-full">
                                        <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2">➜</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Track Order */}
                    <div className="col-span-12 md:col-span-6 mt-16 md:mt-0 relative">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--c-brand-violet)] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                        {/* JOIN THE CULT */}
                        <div className="mb-12">
                            <h4 className="font-[Arial_Black] text-4xl uppercase mb-6 leading-none">
                                JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--c-brand-mint)] to-[var(--c-brand-yellow)]">CULT</span>
                            </h4>
                            <p className="mb-6 opacity-60 max-w-sm">
                                Get early access to drops, secret playlists, and chaos in your inbox. No spam, only energy.
                            </p>

                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="YOUR@EMAIL.COM"
                                    className="w-full p-4 bg-transparent border-[3px] border-[var(--c-background)] text-[var(--c-background)] font-bold text-xl placeholder:opacity-30 placeholder:text-[var(--c-background)] focus:outline-none focus:bg-[var(--c-background)] focus:text-black focus:border-[var(--c-brand-yellow)] transition-all"
                                />
                                <button className="bg-[var(--c-brand-yellow)] text-black px-6 font-black text-xl border-[3px] border-transparent hover:bg-white transition-all">
                                    ➜
                                </button>
                            </div>
                        </div>

                        {/* TRACK ORDER */}
                        <div>
                            <h4 className="font-[Arial_Black] text-2xl uppercase mb-4 leading-none text-[var(--c-brand-mint)]">
                                TRACK YOUR CRATE
                            </h4>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="ORDER NUMBER (e.g. #1234)"
                                    className="w-full p-4 bg-transparent border-2 border-[var(--c-background)] text-[var(--c-background)] font-bold placeholder:opacity-30 placeholder:text-[var(--c-background)] focus:outline-none focus:bg-[var(--c-background)] focus:text-black focus:border-[var(--c-brand-mint)] transition-all"
                                />
                                <button className="bg-[var(--c-brand-mint)] text-black px-6 font-black border-2 border-transparent hover:bg-white transition-all uppercase">
                                    ➜
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="col-span-12 mt-32 pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-40 uppercase tracking-widest">
                        <span>© 2026 AERU BEVERAGE CORP. // ALL RIGHTS RESERVED.</span>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                            <span className="hover:text-white cursor-pointer transition-colors">TikTok</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
