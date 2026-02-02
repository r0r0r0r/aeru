"use client";

import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ text }: { text: string }) => (
    <span className="type-heading text-4xl md:text-6xl mx-8 text-black opacity-30 whitespace-nowrap">
        {text}
    </span>
);

export const Marquee = () => {
    return (
        <div className="w-full bg-[var(--c-brand-yellow)] border-y-[3px] border-black py-4 overflow-hidden flex relative z-0 opacity-20 hover:opacity-100 transition-opacity duration-300">
            <motion.div
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        <MarqueeItem text="NO SUGAR" />
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <MarqueeItem text="PURE CHAOS" />
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <MarqueeItem text="100% VIBE" />
                        <span className="w-4 h-4 bg-black rounded-full" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
