"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { flavors } from "@/lib/flavors";
import { useCart } from "@/context/CartContext";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    const menuVariants = {
        closed: {
            y: "-100%",
            transition: { type: "tween", duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        },
        open: {
            y: "0%",
            transition: { type: "tween", duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    };

    return (
        <>
            {/* Top Fixed Bar - Logo & Cart & Menu */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-normal pointer-events-none">

                {/* Logo Sticker */}
                <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative pointer-events-auto cursor-pointer bg-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-shadow z-50"
                >
                    <Link href="/" onClick={() => setIsOpen(false)} className="type-heading font-black tracking-tighter text-4xl text-black leading-none block">
                        AERU®
                    </Link>
                </motion.div>

                <div className="flex gap-4 items-start">
                    {/* MENU Sticker */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative pointer-events-auto cursor-pointer border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all z-50 ${isOpen ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        <span className="type-heading font-black text-xl leading-none block">
                            {isOpen ? "CLOSE" : "MENU"}
                        </span>
                    </motion.div>

                    {/* Cart Sticker */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        onClick={toggleCart}
                        className="relative pointer-events-auto bg-[var(--c-brand-yellow)] border-[3px] border-black p-1 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-shadow z-50 cursor-pointer"
                    >
                        <button className="type-detail nav-link flex items-center gap-2 px-3 py-1 font-black text-black">
                            <span>CART</span>
                            <span className="bg-black text-white px-2 py-0.5 text-xs font-bold border border-black rounded-full">{cartCount}</span>
                        </button>
                    </motion.div>
                </div>
            </nav>

            {/* MEGA MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants as any}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#FFF8E7] z-40 flex flex-col pt-52 px-6 pb-12 overflow-y-auto"
                    >
                        <div className="layout-grid h-full">

                            {/* PRODUCTS COLUMN */}
                            <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                                <h4 className="type-detail text-sm font-black text-gray-400 tracking-widest uppercase mb-2 border-b-2 border-black inline-block w-full pb-2">Selected Works</h4>

                                {flavors.map((flavor, i) => (
                                    <Link key={flavor.id} href={`/products/${flavor.id}`} onClick={() => setIsOpen(false)}>
                                        <motion.div
                                            whileHover={{ x: 20 }}
                                            className="font-[Arial_Black] font-black text-4xl md:text-6xl text-black hover:text-[var(--c-brand-orange)] transition-colors cursor-pointer uppercase leading-[0.9]"
                                        >
                                            {flavor.name}
                                        </motion.div>
                                    </Link>
                                ))}
                                <div className="font-[Arial_Black] font-black text-4xl md:text-6xl text-gray-300 uppercase leading-[0.9] opacity-50">
                                    COMING SOON
                                </div>
                            </div>

                            {/* INTEL COLUMN */}
                            <div className="col-span-12 md:col-span-4 md:col-start-8 flex flex-col gap-3 mt-12 md:mt-0">
                                <h4 className="type-detail text-sm font-black text-gray-400 tracking-widest uppercase mb-2 border-b-2 border-black inline-block w-full pb-2">Intel</h4>

                                {['Manifesto', 'Ingredients', 'Stockists', 'FAQ', 'Careers'].map((item, i) => (
                                    <Link key={i} href="#" onClick={() => setIsOpen(false)}>
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="font-[Arial_Black] font-black text-2xl md:text-3xl text-black hover:text-[var(--c-brand-pink)] transition-colors cursor-pointer uppercase"
                                        >
                                            {item}
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>

                            {/* FOOTER IN MENU */}
                            <div className="col-span-12 mt-auto pt-12 flex justify-between items-end border-t-[3px] border-black">
                                <span className="type-heading text-xl">AERU BEVERAGE CORP.</span>
                                <div className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-black"></span>
                                    <span className="w-8 h-8 rounded-full bg-black"></span>
                                    <span className="w-8 h-8 rounded-full bg-black"></span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Anchors - Context Only */}
            <div className="fixed bottom-0 left-0 w-full z-30 px-6 py-6 flex justify-between items-end pointer-events-none mix-blend-normal">
                <div>{/* Empty Left */}</div>

                {/* Context Tag - Always Visible */}
                <div className="hidden md:block pointer-events-auto bg-black text-white px-4 py-2 border-[3px] border-transparent shadow-[4px_4px_0px_rgba(0,0,0,0.2)] rotate-[-2deg]">
                    <span className="type-detail font-bold text-xs tracking-widest">EST. 2026 // POP CULTURE™</span>
                </div>
            </div>
        </>
    );
};
