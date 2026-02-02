"use client";

import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function ManifestoPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} className="bg-[var(--c-background)] relative">
            <Navigation />

            {/* SECTION 1: THE HOOK */}
            <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden border-b-[3px] border-black bg-[var(--c-brand-orange)]">
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="font-[Arial_Black] text-[15vw] leading-[0.85] text-black uppercase tracking-tighter">
                        WE ARE<br />NOT<br />WATER
                    </h1>
                </motion.div>
                {/* Background Noise */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
            </section>

            {/* SECTION 2: THE PROBLEM */}
            <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden border-b-[3px] border-black bg-white">
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0.2, 0.4], [1, 0]),
                        scale: useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1])
                    }}
                    className="relative z-10 text-center px-4"
                >
                    <h2 className="font-[Arial_Black] text-[8vw] leading-none text-gray-300 uppercase tracking-tighter line-through decoration-[10px] decoration-red-600">
                        HYDRATION IS BORING
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-[Arial_Black] text-[10vw] leading-none text-black uppercase tracking-tighter mt-[-4vw] rotate-2"
                    >
                        WAKE UP
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTION 3: THE SOLUTION */}
            <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden border-b-[3px] border-black bg-[var(--c-brand-violet)] text-white">
                <motion.div
                    style={{
                        x: useTransform(scrollYProgress, [0.3, 0.6], ["100%", "-100%"])
                    }}
                    className="whitespace-nowrap"
                >
                    <h2 className="font-[Arial_Black] text-[30vw] leading-none uppercase tracking-tighter opacity-50">
                        CHAOS CHAOS CHAOS
                    </h2>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="font-[Arial_Black] text-[12vw] leading-none uppercase tracking-tighter text-center mix-blend-overlay">
                        IN A CAN
                    </h2>
                </div>
            </section>

            {/* SECTION 4: THE PROMISE */}
            <section className="min-h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden bg-black text-white py-24">
                <div className="layout-grid">
                    <div className="col-span-12 text-center mb-24">
                        <h2 className="font-[Arial_Black] text-[10vw] leading-[0.8] uppercase tracking-tighter text-[var(--c-brand-yellow)] mb-8">
                            ZERO SUGAR.<br />100% RIOT.
                        </h2>
                        <p className="font-[Courier_New] text-xl md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed">
                            We engineered AERU for the glitch generation. For the late nights, the early mornings, and the static in between. This isn't a beverage. It's a system update.
                        </p>
                    </div>

                    <div className="col-span-12 flex justify-center">
                        <Link href="/#product-details">
                            <button className="bg-white text-black font-[Arial_Black] text-4xl uppercase px-16 py-8 border-[5px] border-transparent hover:bg-[var(--c-brand-pink)] hover:border-white transition-all hover:scale-105 shadow-[10px_10px_0px_#fff]">
                                JOIN THE RIOT
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="relative z-20">
                <Footer />
            </div>
        </main>
    );
}
