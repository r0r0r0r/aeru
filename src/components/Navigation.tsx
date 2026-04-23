"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { flavors } from "@/lib/flavors";
import { useCart } from "@/context/CartContext";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine if we are on a light-background page (e.g., product details, info pages)
    const isLandingPage = pathname === '/';
    const isLightPage = pathname?.startsWith('/products') ||
        pathname === '/ingredients' ||
        pathname === '/faq' ||
        pathname === '/stockists';

    const useBlackTheme = isOpen || isLightPage || (isLandingPage && isScrolled);


    const menuVariants: Variants = {
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
            {/* Skip to Main Content - Accessibility */}
            <a href="#main-content" className="skip-to-main">
                Skip to Main Content
            </a>

            {/* Top Fixed Bar - Logo & Links & Menu */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-8 md:py-10 flex justify-between items-center pointer-events-none">

                {/* 1. LEFT: Logo */}
                <div className="flex-1 flex justify-start items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative pointer-events-auto cursor-pointer"
                    >
                        <Link href="/" onClick={() => setIsOpen(false)} className={`font-[Arial_Black] font-black tracking-tighter text-3xl md:text-5xl ${useBlackTheme ? 'text-black' : '!text-white'} leading-none block`}>
                            AERU®
                        </Link>
                    </motion.div>
                </div>

                {/* 2. CENTER: Clean Nav Links (Desktop) */}
                <div className="hidden md:flex flex-1 justify-center items-center pointer-events-auto gap-20">
                    {['CONTACT', 'SHOP', 'ABOUT'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'SHOP' ? '/#product-details' : item === 'ABOUT' ? '/#about' : item === 'CONTACT' ? '/#contact' : `/${item.toLowerCase()}`}
                            className={`font-[Courier_New] font-bold text-[16px] tracking-[0.15em] ${useBlackTheme ? 'text-black' : '!text-white'} hover:opacity-50 transition-opacity whitespace-nowrap`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* 3. RIGHT: Actions (Cart & Menu) */}
                <div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
                    {/* Cart Trigger */}
                    <button
                        type="button"
                        onClick={toggleCart}
                        className="flex items-center gap-3 group"
                    >
                        <div className={`relative p-2 ${useBlackTheme ? 'bg-black text-white' : 'bg-white text-black'} rounded-full group-hover:bg-[var(--c-brand-yellow)] group-hover:text-black transition-colors`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                            <span className={`absolute -top-1 -right-1 ${useBlackTheme ? 'bg-white text-black border-black' : 'bg-black text-white border-white'} text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border group-hover:bg-white group-hover:text-black`}>
                                {cartCount}
                            </span>
                        </div>
                        <span className={`hidden md:block font-[Courier_New] font-bold text-xs tracking-[0.1em] ${useBlackTheme ? 'text-black' : '!text-white'}`}>
                            ${cartCount * 45}
                        </span>
                    </button>

                    {/* Menu Trigger */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 border-2 border-transparent hover:border-${useBlackTheme ? 'black' : 'white'} transition-all`}
                    >
                        <div className="flex flex-col gap-1.5 w-6">
                            <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7.5 : 0 }} className={`h-[2px] w-full ${useBlackTheme ? 'bg-black' : 'bg-white'}`}></motion.div>
                            <motion.div animate={{ opacity: isOpen ? 0 : 1 }} className={`h-[2px] w-full ${useBlackTheme ? 'bg-black' : 'bg-white'}`}></motion.div>
                            <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7.5 : 0 }} className={`h-[2px] w-full ${useBlackTheme ? 'bg-black' : 'bg-white'}`}></motion.div>
                        </div>
                    </button>
                </div>
            </nav>

            {/* MEGA MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#FFF8E7] z-40 flex flex-col pt-24 md:pt-52 px-6 pb-12 overflow-y-auto"
                    >
                        <div className="layout-grid h-full min-h-[500px]">

                            {/* PRODUCTS COLUMN */}
                            <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                                <h4 className="type-detail text-sm font-black text-gray-400 tracking-widest uppercase mb-2 border-b-2 border-black inline-block w-full pb-2">Selected Works</h4>

                                {flavors.map((flavor) => (
                                    <Link key={flavor.id} href={`/products/${flavor.id}`} onClick={() => setIsOpen(false)}>
                                        <motion.div
                                            whileHover={{ x: 20 }}
                                            className="font-[Arial_Black] font-black text-3xl md:text-6xl text-black hover:text-[var(--c-brand-orange)] transition-colors cursor-pointer uppercase leading-[0.9]"
                                        >
                                            {flavor.name}
                                        </motion.div>
                                    </Link>
                                ))}
                                <div className="font-[Arial_Black] font-black text-3xl md:text-6xl text-gray-300 uppercase leading-[0.9] opacity-50">
                                    COMING SOON
                                </div>
                            </div>

                            {/* INTEL COLUMN */}
                            <div className="col-span-12 md:col-span-4 md:col-start-8 flex flex-col gap-3 mt-8 md:mt-0">
                                <h4 className="type-detail text-sm font-black text-gray-400 tracking-widest uppercase mb-2 border-b-2 border-black inline-block w-full pb-2">Intel</h4>

                                {['Manifesto', 'Ingredients', 'Stockists', 'FAQ', 'Careers'].map((item, i) => (
                                    <Link key={i} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="font-[Arial_Black] font-black text-xl md:text-3xl text-black hover:text-[var(--c-brand-pink)] transition-colors cursor-pointer uppercase"
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
                <div className="hidden md:block pointer-events-auto bg-white text-black px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_rgba(255,255,255,0.2)] rotate-[-2deg]">
                    <span className="type-detail font-bold text-[13px] tracking-widest">EST. 2026 // POP CULTURE™</span>
                </div>
            </div>
        </>
    );
};
