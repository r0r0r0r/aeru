"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-[var(--c-brand-yellow)]">
            <Navigation />

            {/* Hero Statement */}
            <section className="pt-48 pb-24 px-6 md:px-12 border-b-[3px] border-black">
                <h1 className="type-display text-8xl md:text-[14rem] leading-[0.8] mb-12">
                    NOT <br /> HEALTHY.
                </h1>
                <div className="max-w-4xl ml-auto">
                    <p className="type-heading text-4xl md:text-6xl uppercase border-l-[6px] border-black pl-8">
                        We are not here to fix you. <br />
                        We are here to refresh you.
                    </p>
                </div>
            </section>

            {/* The Grid Manifesto */}
            <section className="layout-grid py-24 bg-white">

                <div className="col-span-12 md:col-span-6 p-12 border-[3px] border-black bg-[var(--c-background)] shadow-[12px_12px_0px_#000] rotate-1">
                    <h2 className="type-heading text-4xl mb-4 text-[var(--c-brand-orange)]">THE PROBLEM</h2>
                    <p className="type-body text-xl font-bold">
                        Everything is &quot;Optimized&quot;. Drinks promise focus, energy, eternal youth, and perfectly balanced chakras.
                        It&apos;s exhausting.
                        <br /><br />
                        We got tired of drinking &quot;Functions&quot;. We wanted to drink &quot;Flavor&quot;.
                    </p>
                </div>

                <div className="col-span-12 md:col-span-6 p-12 border-[3px] border-black bg-black text-white shadow-[12px_12px_0px_var(--c-brand-mint)] -rotate-1 mt-12 md:mt-0">
                    <h2 className="type-heading text-4xl mb-4 text-[var(--c-brand-mint)]">THE FIX</h2>
                    <p className="type-body text-xl font-bold">
                        AERU is a cold drink. That&apos;s it.
                        <br /><br />
                        It tastes incredible. It looks cold. It feels like a slap in the face from a wet palm frond.
                        <br /><br />
                        0% Promise. 100% Vibe.
                    </p>
                </div>

            </section>

            {/* Kinetic Text Scroll */}
            <section className="py-0 overflow-hidden bg-black text-white border-y-[3px] border-black">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className={`whitespace-nowrap ${i % 2 === 0 ? 'text-[var(--c-brand-pink)]' : 'text-white'}`}>
                        <motion.h3
                            initial={{ x: i % 2 === 0 ? "0%" : "-50%" }}
                            animate={{ x: i % 2 === 0 ? "-50%" : "0%" }}
                            transition={{ repeat: Infinity, duration: 15 + i * 2, ease: "linear" }}
                            className="type-display text-[10vw]"
                        >
                            NO GURUS — JUST SODA — NO GURUS — JUST SODA — NO GURUS — JUST SODA —
                        </motion.h3>
                    </div>
                ))}
            </section>

            <div className="h-[50vh] flex items-center justify-center bg-[var(--c-background)]">
                <h2 className="type-heading text-center">
                    DRINK RESPONSIBLY.<br /> OR DON&apos;T.
                </h2>
            </div>

            <Footer />
        </main>
    );
}
