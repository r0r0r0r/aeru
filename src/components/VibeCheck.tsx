"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const VibeCheck = () => {
    return (
        <section className="relative w-full py-24 bg-[var(--c-brand-mint)] overflow-hidden border-y-[3px] border-black">

            <div className="layout-grid items-center">

                {/* Left: Random Text Chaos */}
                <div className="col-span-12 md:col-span-6 z-10">
                    <motion.div
                        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                        className="bg-white p-6 border-[3px] border-black shadow-[8px_8px_0px_#000] rotate-2"
                    >
                        <h2 className="type-heading text-5xl mb-4">REAL <br /> FEELS</h2>
                        <p className="type-body font-bold">
                            We don&apos;t do renders. We do real life.
                            Sunburns, rooftop parties, and ice-cold cans.
                            If it&apos;s perfect, it&apos;s fake.
                        </p>
                    </motion.div>
                </div>

                {/* Right: The Lifestyle Shot */}
                <div className="col-span-12 md:col-span-6 relative flex justify-center mt-12 md:mt-0">

                    {/* Tape Element */}
                    <div className="absolute -top-6 left-1/2 w-32 h-12 bg-[#FFFFE0] opacity-90 rotate-[-5deg] z-20 shadow-sm"></div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-[12px] border-white shadow-[10px_10px_0px_rgba(0,0,0,0.2)] rotate-[-3deg] overflow-hidden"
                    >
                        <Image
                            src="/images/lifestyle.png"
                            alt="Hand holding AERU can"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Sticker */}
                    <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-[var(--c-brand-pink)] rounded-full flex items-center justify-center font-black animate-bounce border-[3px] border-black text-white">
                        POV
                    </div>
                </div>

            </div>

        </section>
    );
};
