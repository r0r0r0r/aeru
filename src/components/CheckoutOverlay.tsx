"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export const CheckoutOverlay = () => {
    const { isCheckoutOpen, setCheckoutOpen, items, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState<"details" | "payment" | "success">("details");
    const [loading, setLoading] = useState(false);

    // Mock Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: ""
    });

    const handleNext = () => setStep("payment");

    const handlePay = () => {
        setLoading(true);
        // Fake processing delay
        setTimeout(() => {
            setLoading(false);
            setStep("success");
            clearCart();
        }, 2000);
    };

    const handleClose = () => {
        setCheckoutOpen(false);
        setStep("details"); // Reset
    };

    if (!isCheckoutOpen) return null;

    return (
        <div className="fixed inset-0 z-[80] bg-[#FFF8E7] overflow-y-auto">

            <div className="min-h-screen layout-grid p-6 relative">

                {/* Close Button */}
                <button onClick={handleClose} className="absolute top-6 right-6 font-[Arial_Black] uppercase text-xl hover:text-red-600 z-50">
                    CLOSE [X]
                </button>

                <div className="col-span-12 md:col-start-4 md:col-span-6 py-12">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="font-[Arial_Black] font-black text-5xl md:text-7xl uppercase tracking-tighter mb-2">
                            {step === "details" && "THE DROP."}
                            {step === "payment" && "THE DAMAGE."}
                            {step === "success" && "SECURED."}
                        </h2>
                        <div className="flex justify-center gap-2">
                            <div className={`h-2 w-12 ${step === "details" ? "bg-black" : "bg-gray-300"}`}></div>
                            <div className={`h-2 w-12 ${step === "payment" ? "bg-black" : "bg-gray-300"}`}></div>
                            <div className={`h-2 w-12 ${step === "success" ? "bg-black" : "bg-gray-300"}`}></div>
                        </div>
                    </div>

                    {/* Content Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={step}
                        className="bg-white border-[3px] border-black p-8 shadow-[12px_12px_0px_#000]"
                    >

                        {/* STEP 1: DETAILS */}
                        {step === "details" && (
                            <div className="flex flex-col gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase mb-1">Full Name</label>
                                        <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold outline-none focus:bg-yellow-50" placeholder="JOHNNY SILVER" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase mb-1">Email</label>
                                        <input type="email" className="w-full bg-gray-50 border-2 border-black p-4 font-bold outline-none focus:bg-yellow-50" placeholder="JOHNNY@NET.COM" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <label className="block text-xs font-bold uppercase mb-1">Address</label>
                                            <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold outline-none focus:bg-yellow-50" placeholder="123 STREET" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase mb-1">City</label>
                                            <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold outline-none focus:bg-yellow-50" placeholder="NIGHT CITY" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase mb-1">ZIP</label>
                                            <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold outline-none focus:bg-yellow-50" placeholder="00000" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleNext} className="w-full bg-black text-white py-4 font-[Arial_Black] text-xl uppercase hover:bg-[var(--c-brand-yellow)] hover:text-black hover:shadow-[6px_6px_0px_#000] transition-all">
                                    CONTINUE TO PAYMENT
                                </button>
                            </div>
                        )}

                        {/* STEP 2: PAYMENT */}
                        {step === "payment" && (
                            <div className="flex flex-col gap-6">
                                <div className="bg-gray-100 p-4 border-2 border-dashed border-gray-400 mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-sm uppercase">Total to Pay</span>
                                        <span className="font-[Arial_Black] text-2xl">${cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>ITEMS: {items.length}</span>
                                        <span>SHIPPING: FREE (PROMO)</span>
                                    </div>
                                </div>

                                <div className="space-y-4 opacity-50 pointer-events-none">
                                    {/* Fake CC Form */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase mb-1">Card Number</label>
                                        <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold" value="•••• •••• •••• 4242" readOnly />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase mb-1">Expiry</label>
                                            <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold" value="12/28" readOnly />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase mb-1">CVC</label>
                                            <input type="text" className="w-full bg-gray-50 border-2 border-black p-4 font-bold" value="•••" readOnly />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-100 p-2 text-xs font-bold text-center border border-yellow-400">
                                    ⚠️ DEMO MODE: NO CARD REQUIRED
                                </div>

                                <button
                                    onClick={handlePay}
                                    className="w-full bg-[var(--c-brand-orange)] text-white py-4 font-[Arial_Black] text-xl uppercase hover:bg-[var(--c-brand-yellow)] hover:text-black shadow-[6px_6px_0px_#000] transition-all flex justify-center items-center"
                                >
                                    {loading ? (
                                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        `PAY $${cartTotal}`
                                    )}
                                </button>
                            </div>
                        )}

                        {/* STEP 3: SUCCESS */}
                        {step === "success" && (
                            <div className="text-center py-8">
                                <div className="text-6xl mb-6">🎉</div>
                                <h3 className="font-[Arial_Black] text-3xl mb-4">ORDER CONFIRMED</h3>
                                <p className="font-medium text-gray-600 mb-8 max-w-xs mx-auto">
                                    Your crate is secure. Tracking number sent to your email. Expect arrival in 2-3 standard days.
                                </p>
                                <div className="bg-black text-white p-4 font-mono text-xl tracking-widest mb-8">
                                    ORD-#{Math.floor(Math.random() * 90000) + 10000}
                                </div>
                                <button onClick={handleClose} className="w-full border-[3px] border-black py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors">
                                    RETURN TO BASE
                                </button>
                            </div>
                        )}

                    </motion.div>

                </div>
            </div>
        </div>
    );
};
