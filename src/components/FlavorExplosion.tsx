"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SanityDocument } from "next-sanity";

interface FlavorExplosionProps {
    flavors: any[];
}

export const FlavorExplosion = ({ flavors }: FlavorExplosionProps) => {
    const [visibleCount, setVisibleCount] = React.useState(6);

    const showMore = () => {
        setVisibleCount(flavors.length);
    };

    return (
        <section className="relative w-full py-24 bg-[#FFF8E7] overflow-hidden border-b-[3px] border-black flex flex-col items-center">

            {/* UNIFIED CONTAINER: Flexbox centered with explicit constraints */}
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="font-[Arial_Black] font-black text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.8] mb-4 text-black uppercase tracking-tighter break-words">
                        FLAVOR RIOT
                    </h2>
                    <p className="font-[Courier_New] text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase border-y-2 border-black inline-block py-2">Select Your Poison</p>
                </div>

                {/* Flavor Cards */}
                <div className="grid grid-cols-12 gap-8 w-full">
                    {flavors.slice(0, visibleCount).map((flavor, index) => (
                        <div
                            key={flavor.id}
                            className="col-span-12 md:col-span-6 lg:col-span-4 relative group cursor-pointer"
                        >
                            <Link href={`/products/${flavor.id}`}>
                                <motion.div
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="min-h-[500px] flex flex-col justify-between p-0 relative overflow-hidden bg-white border-[3px] border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] transition-all transform hover:scale-[1.02]"
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
                                        <span className="bg-white text-black px-3 py-2 font-black text-xl border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-3 group-hover:rotate-12 transition-transform">
                                            ${flavor.price}
                                        </span>
                                    </div>

                                    {/* Image - Antigravity Physics */}
                                    <motion.div
                                        className="relative z-10 w-full flex-grow flex items-center justify-center py-8 mt-12"
                                        whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <Image
                                            src={flavor.image}
                                            alt={flavor.name}
                                            width={500}
                                            height={800}
                                            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] max-h-[55vh]"
                                        />
                                    </motion.div>

                                    {/* Poster Footer */}
                                    <div className="relative z-20 p-6 md:p-8 pt-0 mt-auto">
                                        <h3
                                            className="font-[Arial_Black] font-black text-4xl md:text-5xl lg:text-6xl mb-2 text-black group-hover:text-white transition-colors leading-[0.85] uppercase tracking-tighter break-words hyphens-auto"
                                            style={{ WebkitTextStroke: '1.5px black' }}
                                        >
                                            <span className="group-hover:text-white group-hover:tracking-normal transition-all duration-300 block break-words" style={{ WebkitTextStroke: '0px' }}>
                                                {flavor.name}
                                            </span>
                                        </h3>

                                        <div className="flex justify-between items-end border-t-[3px] border-black group-hover:border-white pt-6 mt-4 transition-colors">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-xs uppercase group-hover:text-white/80">Flavor Profile</span>
                                                <span className="font-black text-lg md:text-xl uppercase group-hover:text-white">INTENSE / CHAOS</span>
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
                </div>

                {/* LOAD MORE BUTTON */}
                {visibleCount < flavors.length && (
                    <div className="flex justify-center mt-12 w-full">
                        <button
                            onClick={showMore}
                            className="bg-black text-white font-[Arial_Black] text-3xl uppercase px-12 py-6 border-[3px] border-transparent hover:bg-[var(--c-brand-yellow)] hover:text-black hover:border-black hover:shadow-[8px_8px_0px_#000] rotate-[-2deg] hover:rotate-0 transition-all active:scale-95"
                        >
                            MORE DRINKS ↓
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
