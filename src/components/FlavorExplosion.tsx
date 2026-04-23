"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FlavorExplosionProps {
    flavors: any[];
}

export const FlavorExplosion = ({ flavors }: FlavorExplosionProps) => {
    const [visibleCount, setVisibleCount] = React.useState(6);

    const showMore = () => {
        setVisibleCount(flavors.length);
    };

    return (
        <section id="product-details" className="relative w-full py-24 bg-[#FFF8E7] overflow-hidden border-b-[3px] border-black flex flex-col items-center">

            {/* UNIFIED CONTAINER: Site-wide fluid grid alignment */}
            <div className="layout-grid relative z-10 w-full">

                {/* Section Header */}
                <div className="col-span-12 mb-12 text-center">
                    <h2 className="font-[Arial_Black] font-black text-[clamp(3rem,10vw,12rem)] leading-[0.8] mb-4 text-black uppercase tracking-tighter break-words">
                        FLAVOR RIOT
                    </h2>
                    <p className="font-[Courier_New] text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase border-y-2 border-black inline-block py-2">Select Your Poison</p>
                </div>

                {/* Flavor Cards */}
                {flavors.slice(0, visibleCount).map((flavor, index) => (
                    <div
                        key={flavor.id}
                        className="col-span-12 md:col-span-4 relative group cursor-pointer"
                    >
                        <Link href={`/products/${flavor.id}`}>
                            <motion.div
                                initial={{ y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-0 relative overflow-hidden bg-white border-[3px] border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] transition-all transform hover:scale-[1.01]"
                            >
                                {/* Background Splash on Hover */}
                                <div
                                    className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full z-0 block"
                                    style={{ backgroundColor: flavor.bg }}
                                />

                                {/* Header Elements */}
                                <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start">
                                    <span className="bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest border-[2px] border-transparent hover:border-white transition-colors">
                                        {flavor.tagline}
                                    </span>
                                    {/* Sticker Price */}
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="bg-white text-black px-3 py-2 font-black text-xl border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-3 group-hover:rotate-12 transition-transform">
                                            ${flavor.price} / CASE
                                        </span>
                                        <span className="bg-black text-white px-2 py-1 font-bold text-[10px] uppercase tracking-widest border border-black -rotate-2">
                                            CASE OF 24
                                        </span>
                                    </div>
                                </div>

                                {/* Image - Antigravity Physics with Glowing Effect */}
                                <motion.div
                                    className="relative z-10 w-full flex-grow flex items-center justify-center py-8 mt-12"
                                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 5 : -5 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    {/* Pulsing Background Glow */}
                                    <motion.div
                                        className="absolute w-48 h-48 rounded-full blur-[60px] opacity-20 pointer-events-none"
                                        style={{ backgroundColor: flavor.bg || 'white' }}
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.1, 0.3, 0.1]
                                        }}
                                        transition={{
                                            duration: 3 + (index % 3),
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    <div className="relative w-[70%] max-w-[300px] md:max-w-none md:w-full h-auto">
                                        <Image
                                            src={flavor.image}
                                            alt={flavor.name}
                                            width={500}
                                            height={800}
                                            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] max-h-[40vh] md:max-h-[55vh] w-full h-auto"
                                        />
                                    </div>
                                </motion.div>

                                {/* Poster Footer */}
                                <div className="relative z-20 p-4 md:p-8 pt-0 mt-auto">
                                    {/* Flavor Description */}
                                    <div className="mb-4">
                                        <p className="font-[Courier_New] text-xs md:text-sm leading-relaxed opacity-80 group-hover:text-white/90">
                                            {flavor.description || "Bold, chaotic flavor experience."}
                                        </p>
                                    </div>

                                    <h3
                                        className="font-[Arial_Black] font-black text-2xl md:text-3xl mb-2 text-black group-hover:text-white transition-colors leading-[0.9] uppercase tracking-tighter break-words hyphens-auto"
                                        style={{ WebkitTextStroke: '1.5px black' }}
                                    >
                                        <span className="group-hover:text-white group-hover:tracking-normal transition-all duration-300 block break-words" style={{ WebkitTextStroke: '0px' }}>
                                            {flavor.name}
                                        </span>
                                    </h3>

                                    <div className="flex justify-between items-end border-t-[3px] border-black group-hover:border-white pt-6 mt-4 transition-colors">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[10px] md:text-xs uppercase group-hover:text-white/80 tracking-widest leading-none mb-1">
                                                {flavor.category || "PREMIUM SPARKLING SODA"}
                                            </span>
                                            <span className="font-black text-lg md:text-xl uppercase group-hover:text-white leading-none">INTENSE / CHAOS</span>
                                        </div>
                                        <div className="bg-black text-white rounded-full p-3 md:p-4 group-hover:bg-white group-hover:text-black transition-colors rotate-[-45deg] group-hover:rotate-0 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                                <path strokeLinecap="square" strokeLinejoin="miter" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                ))}

                {/* LOAD MORE BUTTON */}
                {visibleCount < flavors.length && (
                    <div className="col-span-12 flex justify-center mt-12 w-full">
                        <button
                            type="button"
                            aria-label="Load more products"
                            onClick={showMore}
                            className="bg-black text-white font-[Arial_Black] text-3xl uppercase px-12 py-6 border-[3px] border-transparent hover:bg-[var(--c-brand-yellow)] hover:text-black hover:border-black hover:shadow-[8px_8px_0px_#000] rotate-[-2deg] hover:rotate-0 transition-all active:scale-95"
                        >
                            MORE DRINKS ↓
                        </button>
                    </div>
                )}
            </div>
        </section >
    );
};
