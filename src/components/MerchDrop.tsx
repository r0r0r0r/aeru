"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { medusaClient, medusaBaseUrl } from "@/lib/medusa";

type ProductListResponse = Awaited<ReturnType<typeof medusaClient.products.list>>;
type Product = ProductListResponse["products"][number];

type MerchItem = {
    id: string;
    name: string;
    price: string;
    priceVal: number;
    image: string;
    status: string;
    stickerColor: string;
    desc: string;
};

const STICKER_COLORS = [
    "bg-[var(--c-brand-yellow)]",
    "bg-[var(--c-brand-pink)]",
    "bg-[var(--c-brand-violet)]",
    "bg-[var(--c-brand-mint)]",
    "bg-[var(--c-brand-orange)]",
    "bg-white",
    "bg-red-500 text-white",
];

function resolveThumbnail(thumbnail: string | null | undefined): string {
    if (!thumbnail) return "/images/hero.webp";
    if (thumbnail.startsWith("http")) return thumbnail;
    const base = medusaBaseUrl.replace(/\/$/, "");
    return `${base}${thumbnail.startsWith("/") ? thumbnail : `/${thumbnail}`}`;
}

function formatPrice(amount: number): { price: string; priceVal: number } {
    const priceVal = amount / 100;
    const display = Number.isInteger(priceVal) ? priceVal.toString() : priceVal.toFixed(2);
    return { price: `$${display}`, priceVal };
}

function mapProductToMerchItem(product: Product, index: number): MerchItem | null {
    const variant = product.variants?.[0];
    const priceEntry = variant?.prices?.[0];
    if (!priceEntry) return null;

    const { price, priceVal } = formatPrice(priceEntry.amount);
    const inventory = variant.inventory_quantity ?? 0;
    const status =
        inventory <= 0
            ? "PRE-ORDER"
            : inventory <= 5
              ? "LOW STOCK"
              : "IN STOCK";

    return {
        id: product.handle ?? product.id ?? "",
        name: product.title ?? "UNNAMED",
        price,
        priceVal,
        image: resolveThumbnail(product.thumbnail),
        status,
        stickerColor: STICKER_COLORS[index % STICKER_COLORS.length],
        desc: product.description?.trim() || product.subtitle?.trim() || "LIMITED DROP",
    };
}

const SKELETON_COUNT = 6;

export const MerchDrop = () => {
    const { addToCart } = useCart();
    const [items, setItems] = useState<MerchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadProducts() {
            setLoading(true);
            setError(null);

            try {
                const { products } = await medusaClient.products.list();
                if (cancelled) return;

                const mapped = (products ?? [])
                    .map((product, index) => mapProductToMerchItem(product, index))
                    .filter((item): item is MerchItem => item !== null);

                setItems(mapped);
            } catch (err) {
                if (cancelled) return;
                console.error("Failed to fetch Medusa products:", err);
                setError("Could not load inventory. Try again shortly.");
                setItems([]);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadProducts();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section className="py-20 bg-black text-white border-y-[3px] border-white relative overflow-hidden">

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

                {loading &&
                    Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                        <div key={`skeleton-${i}`} className="col-span-12 md:col-span-4 animate-pulse">
                            <div className="relative aspect-square border-[3px] border-white/30 bg-[#1a1a1a]" />
                            <div className="mt-6 space-y-3 border-b-2 border-white/10 pb-6">
                                <div className="h-8 bg-white/10 w-2/3" />
                                <div className="h-4 bg-white/5 w-1/2" />
                                <div className="h-14 bg-white/10 w-full" />
                            </div>
                        </div>
                    ))}

                {!loading && error && (
                    <p className="col-span-12 text-center font-[Courier_New] text-sm text-[var(--c-brand-yellow)] uppercase tracking-widest">
                        {error}
                    </p>
                )}

                {!loading &&
                    items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="col-span-12 md:col-span-4 relative group"
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
                                        unoptimized={item.image.startsWith("http")}
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
                                            <h3 className="font-[Arial_Black] text-2xl md:text-3xl uppercase leading-none mb-1 group-hover:text-[var(--c-brand-yellow)] transition-colors cursor-pointer">{item.name}</h3>
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
