"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useCart } from "@/context/CartContext";

const items = [
    {
        id: "merch-hoodie",
        name: "WAREHOUSE HOODIE",
        price: "$120",
        priceVal: 120,
        image: "/images/hoodie.png",
        status: "LOW STOCK",
        stickerColor: "bg-[var(--c-brand-yellow)]",
        desc: "HEAVYWEIGHT COTTON // 450GSM"
    },
    {
        id: "merch-tote",
        name: "DAILY TOTE",
        price: "$45",
        priceVal: 45,
        image: "/images/tote.png",
        status: "IN STOCK",
        stickerColor: "bg-[var(--c-brand-pink)]",
        desc: "CANVAS // REINFORCED"
    },
    {
        id: "poster-night",
        name: "NIGHT REALITY",
        price: "$30",
        priceVal: 30,
        image: "/images/poster-night-real.png",
        status: "PRE-ORDER",
        stickerColor: "bg-[var(--c-brand-violet)]",
        desc: "A1 GLOSS // 200GSM"
    },
    {
        id: "poster-stone",
        name: "STONE VIBE",
        price: "$30",
        priceVal: 30,
        image: "/images/poster-stone.png",
        status: "IN STOCK",
        stickerColor: "bg-[var(--c-brand-mint)]",
        desc: "A1 MAPLE // MATTE"
    },
    {
        id: "print-squad",
        name: "SQUAD",
        price: "$25",
        priceVal: 25,
        image: "/images/shot-group.png",
        status: "LIMITED",
        stickerColor: "bg-[var(--c-brand-orange)]",
        desc: "A2 SATIN FINISH"
    },
    {
        id: "print-pov",
        name: "POV",
        price: "$25",
        priceVal: 25,
        image: "/images/shot-pov.png",
        status: "LIMITED",
        stickerColor: "bg-white",
        desc: "A2 SATIN FINISH"
    },
    {
        id: "print-origins",
        name: "ORIGINS",
        price: "$40",
        priceVal: 40,
        image: "/images/hero.png",
        status: "RARE",
        stickerColor: "bg-red-500 text-white",
        desc: "ARCHIVAL QUALITY"
    }
];

export const MerchDrop = () => {
    const { addToCart } = useCart();

    return (
        <section className="py-32 bg-black text-white border-y-[3px] border-white relative overflow-hidden">

            {/* Background Marquee */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 pointer-events-none select-none overflow-hidden">
                <motion.div
                    className="whitespace-nowrap font-[Arial_Black] text-[20vw] leading-none text-transparent uppercase"
                    style={{ WebkitTextStroke: '4px white' }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    LIMITED DROP • LIMITED DROP • LIMITED DROP • LIMITED DROP •
                </motion.div>
            </div>

            <div className="layout-grid relative z-10">

                <div className="col-span-12 mb-12 md:mb-24 text-center">
                    <div className="inline-block relative">
                        <h2 className="font-[Arial_Black] text-[12vw] md:text-8xl text-white uppercase tracking-tighter relative z-10 leading-none">
                            LIMITED <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>DROP</span>
                        </h2>
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-12 bg-[var(--c-brand-orange)] text-black font-black text-[10px] md:text-sm px-2 py-1 md:px-3 rotate-12 uppercase border-2 border-white shadow-[4px_4px_0px_white]">
                            FW26 Collection
                        </div>
                    </div>
                </div>

                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className="col-span-12 md:col-span-6 relative group"
                        whileHover={{ y: -10 }}
                    >
                        <Link href={`/products/${item.id}`}>
                            <div className="relative aspect-square border-[3px] border-white bg-[#1a1a1a] overflow-hidden cursor-pointer">

                                {/* Grid Texture */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Sticker */}
                                <div className={`absolute top-6 left-6 ${item.stickerColor} text-black font-black text-sm md:text-xl px-4 py-2 border-[3px] border-black shadow-[6px_6px_0px_rgba(255,255,255,0.5)] -rotate-2 group-hover:rotate-0 transition-transform`}>
                                    {item.status}
                                </div>
                            </div>
                        </Link>

                        <div className="flex flex-col justify-between items-start mt-6 border-b-2 border-white/20 pb-6 gap-4">
                            <div className="w-full flex justify-between items-end">
                                <div>
                                    <Link href={`/products/${item.id}`}>
                                        <h3 className="font-[Arial_Black] text-3xl md:text-5xl uppercase leading-none mb-1 group-hover:text-[var(--c-brand-yellow)] transition-colors cursor-pointer">{item.name}</h3>
                                    </Link>
                                    <span className="font-mono text-xs text-gray-400">{item.desc}</span>
                                </div>
                                <span className="font-[Arial_Black] text-3xl md:text-4xl text-[var(--c-brand-orange)]">{item.price}</span>
                            </div>

                            <button
                                onClick={() => addToCart({
                                    id: item.id,
                                    name: item.name,
                                    price: item.priceVal,
                                    image: item.image,
                                    quantity: 1,
                                    tagline: "LIMITED DROP"
                                })}
                                className="w-full bg-white text-black font-[Courier_New] font-bold text-xl py-4 border-[3px] border-transparent hover:bg-[var(--c-brand-yellow)] hover:border-white transition-all uppercase tracking-widest shadow-[4px_4px_0px_#fff] active:translate-y-1 active:shadow-none"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};
