"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
    const questions = [
        {
            q: "IS THIS ENERGY DRINK?",
            a: "NO. IT IS A MOOD ALTERATION SYSTEM. BUT YES, IT HAS CAFFEINE."
        },
        {
            q: "RELATIONSHIP TO WATER?",
            a: "COMPLICATED. WE ARE 99% WATER, BUT THE 1% IS PURE CHAOS."
        },
        {
            q: "SHIPPING LOCATIONS?",
            a: "PLANET EARTH (MOSTLY). MARS COLONY 1 PENDING REGULATORY APPROVAL."
        },
        {
            q: "SUGAR CONTENT?",
            a: "ZERO. WE SWEETEN WITH VIBES AND A PROPRIETARY BLEND OF NON-NUTRITIVE SWEETENERS."
        },
        {
            q: "CAN I MIX IT?",
            a: "LEGAL SAYS WE CANNOT ADVISE YOU. YOUR SOUL SAYS YES."
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--c-background)]">
            <Navigation />
            
            <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <h1 className="font-[Arial_Black] text-6xl md:text-9xl uppercase tracking-tighter mb-12 text-center">
                    FAQ_<span className="text-[var(--c-brand-orange)]">WTF</span>
                </h1>

                <div className="flex flex-col gap-4">
                    {questions.map((item, i) => (
                        <FAQItem key={i} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
            
            <Footer />
        </main>
    );
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_var(--c-brand-mint)] transition-all">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left"
            >
                <span className="font-[Arial_Black] text-xl md:text-3xl uppercase">{question}</span>
                <span className="font-[Arial_Black] text-2xl transform transition-transform duration-300" style={{ rotate: isOpen ? '45deg' : '0deg' }}>+</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 font-bold font-mono text-lg md:text-xl text-gray-600">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
