"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function IngredientsPage() {
    return (
        <main className="min-h-screen bg-[var(--c-brand-mint)]">
            <Navigation />

            <div className="pt-32 pb-24 px-6 md:px-12">
                <h1 className="font-[Arial_Black] text-6xl md:text-[10rem] leading-[0.85] uppercase tracking-tighter mb-16 text-center md:text-left mix-blend-overlay text-white">
                    NO<br />NASTIES
                </h1>

                <div className="grid grid-cols-12 gap-8">
                    {/* Main List */}
                    <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                        {['Carbonated Water', 'Natural Flavors', 'Citric Acid', 'Caffeine (120mg)', 'L-Theanine', 'Ginseng Root Extract'].map((ing, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border-[3px] border-black p-6 shadow-[8px_8px_0px_#000] rotate-1 hover:-rotate-1 transition-transform"
                            >
                                <h3 className="font-[Arial_Black] text-2xl md:text-4xl uppercase">{ing}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Side Note */}
                    <div className="col-span-12 md:col-span-5 relative mt-12 md:mt-0">
                        <div className="sticky top-32 bg-black text-white p-8 border-[3px] border-transparent shadow-[12px_12px_0px_var(--c-brand-pink)] -rotate-1">
                            <h4 className="font-[Arial_Black] text-3xl mb-4 text-[var(--c-brand-pink)]">THE "NOT" LIST</h4>
                            <ul className="font-mono font-bold space-y-2 text-lg">
                                <li>❌ NO High Fructose Corn Syrup</li>
                                <li>❌ NO Aspartame</li>
                                <li>❌ NO Synthetic Dyes</li>
                                <li>❌ NO Bad Vibes</li>
                                <li>❌ NO Weak Sauce</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
