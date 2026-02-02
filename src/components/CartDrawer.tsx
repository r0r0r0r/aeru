"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export const CartDrawer = () => {
    const { isCartOpen, toggleCart, items, updateQuantity, removeFromCart, cartTotal, setCheckoutOpen } = useCart();

    const drawerVariants = {
        closed: { x: "100%", transition: { type: "tween", duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        open: { x: "0%", transition: { type: "tween", duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
    };

    const handleCheckout = () => {
        toggleCart(); // Close drawer
        setCheckoutOpen(true); // Open checkout overlay
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        variants={drawerVariants as any}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-[70] border-l-[3px] border-black flex flex-col shadow-[-10px_0px_30px_rgba(0,0,0,0.2)]"
                    >
                        {/* Header */}
                        <div className="p-6 border-b-[3px] border-black flex justify-between items-center bg-[var(--c-brand-yellow)]">
                            <h2 className="font-[Arial_Black] font-black text-3xl uppercase tracking-tighter">YOUR STASH</h2>
                            <button onClick={toggleCart} className="font-bold underline hover:no-underline text-sm uppercase">CLOSE</button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                                    <span className="font-[Arial_Black] text-6xl text-gray-300">EMPTY</span>
                                    <p className="font-bold">YOUR CRATE IS LIGHT.</p>
                                </div>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="flex gap-4 items-center group">
                                        <div className="relative w-20 h-24 border-2 border-black bg-gray-100 flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-[Arial_Black] font-black uppercase leading-none text-xl">{item.name}</h3>
                                                <span className="font-bold">${item.price * item.quantity}</span>
                                            </div>
                                            <div className="text-xs font-bold bg-black text-white px-2 inline-block rotate-1 mb-2">{item.tagline}</div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex border-2 border-black bg-white">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-gray-200 font-bold">-</button>
                                                    <span className="px-2 py-1 font-bold min-w-[30px] text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-gray-200 font-bold">+</button>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-xs underline text-gray-500 hover:text-red-600">REMOVE</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t-[3px] border-black bg-white">
                            <div className="flex justify-between items-end mb-4">
                                <span className="font-bold text-sm uppercase text-gray-500">Subtotal</span>
                                <span className="font-[Arial_Black] font-black text-4xl tracking-tighter">${cartTotal}</span>
                            </div>
                            <p className="text-xs text-center text-gray-400 mb-4">Shipping & Taxes calculated at checkout.</p>
                            <button
                                onClick={handleCheckout}
                                disabled={items.length === 0}
                                className="w-full bg-black text-white font-[Arial_Black] text-2xl py-4 uppercase border-[3px] border-transparent hover:bg-[var(--c-brand-orange)] hover:border-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_#000]"
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
