"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const socialImages = [
    { src: "/images/squad.png", alt: "The Squad", span: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]", rotate: "-2deg", sticker: "HYPE" },
    { src: "/images/toast.png", alt: "Cheers", span: "col-span-6 md:col-span-4", aspect: "aspect-[3/4]", rotate: "1deg", sticker: "FRESH" },
    { src: "/images/lifestyle.png", alt: "POV", span: "col-span-6 md:col-span-4", aspect: "aspect-[3/4]", rotate: "2deg", sticker: "VIBE" },
    { src: "/images/billboard.png", alt: "In The Wild", span: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]", rotate: "-1deg", sticker: "SEEN" },
    // New Stack
    { src: "/images/shot-party.png", alt: "Night Moves", span: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]", rotate: "1.5deg", sticker: "WILD" },
    { src: "/images/shot-backstage.png", alt: "Access", span: "col-span-6 md:col-span-4", aspect: "aspect-[3/4]", rotate: "-2deg", sticker: "VIP" },
    { src: "/images/shot-vending.png", alt: "Supply", span: "col-span-6 md:col-span-4", aspect: "aspect-[3/4]", rotate: "-1.5deg", sticker: "DROP" },
    { src: "/images/shot-street.png", alt: "Urban", span: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]", rotate: "2deg", sticker: "RAW" },
];

export const SocialGrid = () => {
    return (
        <section className="py-32 bg-black text-white border-b-[3px] border-white overflow-hidden relative flex flex-col items-center">

            {/* Background Texture (optional noise) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* UNIFIED CONTAINER: Matches FlavorExplosion for perfect alignment */}
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">

                {/* Header */}
                <div className="mb-24 text-center">
                    <div className="col-span-12">
                        <h2 className="font-[Arial_Black] font-black text-6xl md:text-9xl text-transparent tracking-tighter uppercase mb-[-2rem] md:mb-[-4rem] opacity-50" style={{ WebkitTextStroke: '2px white' }}>
                            SEEN ON
                        </h2>
                        <h2 className="font-[Arial_Black] font-black text-6xl md:text-9xl text-white tracking-tighter uppercase relative z-10">
                            THE STREETS
                        </h2>
                    </div>
                </div>

                {/* Wheatpaste Grid */}
                <div className="grid grid-cols-12 gap-8 items-center">
                    {socialImages.map((img, i) => (
                        <motion.div
                            key={i}
                            className={`${img.span} ${img.aspect} relative group cursor-pointer`}
                            whileHover={{ scale: 1.02, rotate: 0, zIndex: 20 }}
                            initial={{ rotate: img.rotate }}
                        >
                            {/* The "Paper" Border */}
                            <div className="absolute inset-0 bg-white transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>

                            {/* The Image Container */}
                            <div className="relative h-full w-full border-[3px] border-black overflow-hidden bg-gray-900">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />


                            </div>

                            {/* Sticker Badge */}
                            <div className="absolute -top-6 -right-6 bg-[var(--c-brand-yellow)] text-black font-black text-xl px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_white] rotate-12 group-hover:rotate-[20deg] transition-transform z-30">
                                {img.sticker}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Marquee Footer */}
            <div className="mt-24 border-t-[3px] border-white bg-[var(--c-brand-yellow)] py-4 overflow-hidden relative z-10 rotation-1">
                <motion.div
                    className="whitespace-nowrap flex gap-12"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="font-[Arial_Black] text-4xl text-black uppercase tracking-tighter">
                                TAG US @AERU.DRINK
                            </span>
                            <span className="w-4 h-4 bg-black rounded-full"></span>
                            <span className="font-[Arial_Black] text-4xl text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '2px black' }}>
                                GET FEATURED
                            </span>
                            <span className="w-4 h-4 bg-black rounded-full"></span>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};
