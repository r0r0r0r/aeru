"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { flavors } from "@/lib/flavors";
import { useCart } from "@/context/CartContext";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

// Define the shape of a flavor object (inferred from flavors.ts usage)
interface Flavor {
    id: string;
    name: string;
    price: number;
    tagline: string;
    color: string;
    bg: string;
    accent: string;
    image: string;
    description: string;
    notes: string[];
    stats: {
        acidity: number;
        sweetness: number;
        chaos: number;
        [key: string]: number;
    };
    nutrition: {
        calories: number;
        sugar: string;
        carbs: string;
        ingredients: string;
    };
}

export const ProductDetails = ({ flavor }: { flavor: Flavor }) => {
    const { addToCart, setCheckoutOpen } = useCart();
    if (!flavor) return notFound();

    const handleAdd = () => {
        addToCart({
            id: flavor.id,
            name: flavor.name,
            price: flavor.price,
            image: flavor.image,
            quantity: 1,
            tagline: flavor.tagline
        });
    };

    const handleBuy = () => {
        handleAdd();
        setCheckoutOpen(true);
    };

    return (
        <main className="min-h-screen bg-[var(--c-background)]">
            <Navigation />

            {/* Product Header / Hero Split */}
            <div className="layout-grid !pt-28 md:!pt-32 pb-12 md:pb-24 min-h-screen items-start md:items-center">

                {/* Left: The Artifact */}
                <div className="col-span-12 md:col-span-6 relative h-[40vh] md:h-[80vh] flex items-center justify-center border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] mb-8 md:mb-0">
                    {/* Background Color Flood */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundColor: flavor.bg }} />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-full h-[80%] z-10"
                    >
                        <Image
                            src={flavor.image}
                            alt={flavor.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-[var(--c-brand-yellow)] border-[3px] border-black px-3 py-1 md:px-4 md:py-2 font-black rotate-3 text-xs md:text-base">
                        {flavor.tagline}
                    </div>
                </div>

                {/* Data / Buy Box */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6 md:pl-12">

                    {/* Header */}
                    <div className="border-b-[3px] border-black pb-6">
                        <div className="flex justify-between items-start mb-2">
                            <span className="type-detail text-[10px] md:text-sm font-bold opacity-50 tracking-widest">ID: {flavor.id.toUpperCase()}</span>
                            <span className="bg-black text-white px-2 py-1 md:px-3 font-black text-[10px] md:text-xs uppercase">{flavor.tagline}</span>
                        </div>
                        <h1 className="font-[Arial_Black] font-black text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] md:leading-[0.85] text-black mb-4 md:mb-6 break-words">
                            {flavor.name}
                        </h1>
                        <p className="type-body text-base md:text-xl font-medium leading-relaxed max-w-lg">
                            {flavor.description}
                        </p>
                    </div>

                    {/* Price & Cart */}
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex items-center gap-4">
                            <span className="font-[Arial_Black] font-black text-4xl md:text-6xl tracking-tighter self-center">${flavor.price}</span>
                            <div className="flex-1 flex gap-2 w-full">
                                <button onClick={handleAdd} className="flex-1 bg-white text-black text-sm md:text-lg font-black py-3 md:py-4 px-2 border-[3px] border-black shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all whitespace-nowrap">
                                    ADD TO CART
                                </button>
                                <button onClick={handleBuy} className="flex-1 bg-[var(--c-brand-orange)] text-white text-sm md:text-lg font-black py-3 md:py-4 px-2 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:bg-[var(--c-brand-yellow)] hover:text-black active:translate-y-[2px] active:shadow-none transition-all whitespace-nowrap">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients & Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-[3px] border-black pt-8">

                        {/* Nutrition */}
                        <div>
                            <h4 className="text-lg md:text-2xl font-black mb-4 uppercase border-b-2 border-black inline-block">Nutrition Facts</h4>
                            <ul className="space-y-2 type-detail font-bold text-xs md:text-sm">
                                <li className="flex justify-between border-b border-gray-200 pb-1">
                                    <span>Calories</span> <span>{flavor.nutrition?.calories}</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-1">
                                    <span>Sugar</span> <span>{flavor.nutrition?.sugar}</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-1">
                                    <span>Carbs</span> <span>{flavor.nutrition?.carbs}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Profile Graph */}
                        <div>
                            <h4 className="text-2xl font-black mb-4 uppercase border-b-2 border-black inline-block">Profile</h4>
                            <div className="space-y-3">
                                {Object.entries(flavor.stats).map(([key, value]) => (
                                    <div key={key}>
                                        <div className="flex justify-between text-xs font-bold uppercase mb-1">
                                            <span>{key}</span>
                                            <span>{value}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 w-full relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${value}%` }}
                                                className="h-full absolute left-0 top-0"
                                                style={{ backgroundColor: flavor.bg }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Ingredients Text */}
                    <div className="mt-4 bg-white p-4 border-[3px] border-black">
                        <span className="type-detail text-xs font-black uppercase text-gray-500 block mb-1">INGREDIENTS</span>
                        <p className="type-detail text-sm font-medium leading-relaxed opacity-80">
                            {flavor.nutrition?.ingredients}
                        </p>
                    </div>
                </div>
            </div>

            {/* SUGGESTED PRODUCTS - "RATION PACK" */}
            <section className="py-24 border-t-[3px] border-black bg-white">
                <div className="layout-grid">
                    <div className="col-span-12 mb-12 text-center">
                        <h2 className="font-[Arial_Black] font-black text-4xl md:text-6xl uppercase tracking-tighter">
                            KEEP THE VIBE GOING
                        </h2>
                    </div>

                    {flavors
                        .filter(f => f.id !== flavor.id) // Exclude current
                        // Simple shuffle
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 3) // Take 3
                        .map((f, i) => (
                            <Link key={f.id} href={`/products/${f.id}`} className="col-span-12 md:col-span-4 group">
                                <div className="border-[3px] border-black bg-[var(--c-background)] p-8 relative h-full transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]">
                                    {/* Image */}
                                    <div className="relative aspect-[3/4] mb-6">
                                        <Image
                                            src={f.image}
                                            alt={f.name}
                                            fill
                                            className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <div className="bg-black text-white text-xs font-bold inline-block px-2 py-1 mb-6 rotate-1 group-hover:rotate-2 transition-transform">{f.tagline}</div>
                                        <h3 className="font-[Arial_Black] font-black text-2xl uppercase leading-none mb-6 text-black group-hover:text-black">{f.name}</h3>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToCart({ id: f.id, name: f.name, price: f.price, image: f.image, quantity: 1, tagline: f.tagline });
                                            }}
                                            className="w-full bg-white border-[3px] border-black py-6 font-[Arial_Black] font-black text-3xl uppercase text-black group-hover:bg-[var(--c-brand-yellow)] group-hover:text-black transition-colors hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-[12px_12px_0px_#000]"
                                        >
                                            COP IT ${f.price}
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>

            <Marquee />
            <Footer />
        </main>
    );
};
