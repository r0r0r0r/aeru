"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * HUD Component 01: Molecule Breakdown
 * A kinetic, disintegrated 3D molecule view with technical labels.
 */
export const MoleculeBreakdown = () => {
    const nodes = useMemo(() => [
        { id: "CP-01", label: "CARBONATION", x: 40, y: 30 },
        { id: "AG-06", label: "CANE SUGAR", x: 70, y: 50 },
        { id: "AX-02", label: "ACIDITY_REG", x: 30, y: 70 },
        { id: "NX-09", label: "NATURAL_FLAVOR", x: 60, y: 20 },
        { id: "HY-04", label: "H2O_FILTERED", x: 20, y: 40 },
    ], []);

    return (
        <div className="relative w-full aspect-square border border-white/5 bg-black/20 flex items-center justify-center overflow-hidden group">
            <svg viewBox="0 0 100 100" className="w-full h-full p-8 overflow-visible">
                {/* Connecting Lines */}
                {nodes.map((node, i) => (
                    nodes.slice(i + 1).map((target, j) => (
                        <motion.line
                            key={`line-${i}-${j}`}
                            x1={node.x} y1={node.y}
                            x2={target.x} y2={target.y}
                            stroke="#BFFF00"
                            strokeWidth="0.1"
                            strokeOpacity="0.2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                        />
                    ))
                ))}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g
                        key={node.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                    >
                        <circle cx={node.x} cy={node.y} r="1.5" fill="#BFFF00" fillOpacity="0.8" className="animate-pulse" />
                        <text
                            x={node.x + 3}
                            y={node.y + 0.5}
                            fill="white"
                            fontSize="2"
                            className="font-mono uppercase tracking-tighter opacity-40 select-none"
                        >
                            {node.id}: {node.label}
                        </text>
                    </motion.g>
                ))}
            </svg>

            {/* HUD Wayfinding */}
            <div className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.3em] text-[var(--c-brand-acid-green)] opacity-60">
                [ ANALYSIS_CORE: MOLECULE_MAPPING ]
            </div>
            <div className="absolute bottom-4 right-4 flex gap-4">
                <div className="w-8 h-[1px] bg-white/20 animate-pulse" />
                <span className="font-mono text-[8px] text-white/20">DETAILED_SCAN: 100%</span>
            </div>
        </div>
    );
};

/**
 * HUD Component 02: Flavor Radar Chart
 * An irregular, jagged radar chart with heavy fills and monospace data points.
 */
export const FlavorRadarChart = () => {
    // Arbitrary jagged path for the radar fill
    const points = "50,10 90,40 70,90 20,80 10,40";

    return (
        <div className="relative w-full aspect-square border border-white/5 bg-black/20 flex items-center justify-center overflow-hidden group">
            <svg viewBox="0 0 100 100" className="w-full h-full p-8 overflow-visible">
                {/* Grid Rings */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((r, i) => (
                    <circle key={i} cx="50" cy="50" r={40 * r} fill="none" stroke="white" strokeWidth="0.05" strokeOpacity="0.1" />
                ))}

                {/* Axes */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                    <line
                        key={i}
                        x1="50" y1="50"
                        x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
                        y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
                        stroke="white"
                        strokeWidth="0.05"
                        strokeOpacity="0.1"
                    />
                ))}

                {/* Radar Fill */}
                <motion.polygon
                    points={points}
                    fill="#BFFF00"
                    fillOpacity="0.2"
                    stroke="#BFFF00"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Labels */}
                {["ACIDITY", "CHAOS", "DENSITY", "CARBON", "VIBE"].map((label, i) => {
                    const angle = (i * 72 * Math.PI) / 180;
                    const x = 50 + 48 * Math.cos(angle);
                    const y = 50 + 48 * Math.sin(angle);
                    return (
                        <text
                            key={label}
                            x={x}
                            y={y}
                            fill="white"
                            fontSize="3"
                            textAnchor="middle"
                            className="font-mono uppercase tracking-widest opacity-60 select-none"
                        >
                            {label}
                        </text>
                    );
                })}
            </svg>

            <div className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.3em] text-[var(--c-brand-acid-green)] opacity-60">
                [ SPECTRO_SCAN: V2.04 ]
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[6px] text-white/20 whitespace-pre">
                ANOMALY DETECTED // 0xFF92
                RECALIBRATING...
            </div>
        </div>
    );
};

/**
 * HUD Component 03: System Flow Diagram
 * A vertical pipeline showing the delivery mechanism.
 */
export const SystemFlowDiagram = () => {
    const steps = [
        { id: "PH-01", label: "LAB_SYNTHESIS", x: 50, y: 15 },
        { id: "PH-02", label: "PRESSURE_VALVE", x: 50, y: 40 },
        { id: "PH-03", label: "BOTTLING_GRID", x: 50, y: 65 },
        { id: "PH-04", label: "CHAOS_DELIVERY", x: 50, y: 90 },
    ];

    return (
        <div className="relative w-full aspect-square border border-white/5 bg-black/20 flex items-center justify-center overflow-hidden group">
            <svg viewBox="0 0 100 100" className="w-full h-full p-4 overflow-visible">
                {/* Main Vertical Pipeline */}
                <motion.line
                    x1="50" y1="5"
                    x2="50" y2="95"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeOpacity="0.1"
                />

                {/* Flow Animation */}
                <motion.circle
                    r="1"
                    fill="#BFFF00"
                    animate={{ cy: [5, 95] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    cx="50"
                />

                {/* Steps */}
                {steps.map((step, i) => (
                    <motion.g
                        key={step.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <rect x={step.x - 20} y={step.y - 4} width="40" height="8" fill="black" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />
                        <text
                            x={step.x}
                            y={step.y + 1}
                            fill="#BFFF00"
                            fontSize="2.5"
                            textAnchor="middle"
                            className="font-mono uppercase tracking-widest select-none"
                        >
                            {step.label}
                        </text>
                        <text
                            x={step.x - 18}
                            y={step.y - 6}
                            fill="white"
                            fontSize="2"
                            className="font-mono opacity-20 select-none"
                        >
                            SEQ: {step.id}
                        </text>
                    </motion.g>
                ))}
            </svg>

            <div className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.3em] text-[var(--c-brand-acid-green)] opacity-60">
                [ FLOW_CONTROL: ACTIVE ]
            </div>
            <div className="absolute bottom-4 right-4 h-12 w-1 bg-white/5 overflow-hidden">
                <motion.div
                    className="w-full bg-[var(--c-brand-acid-green)] h-full"
                    animate={{ y: ["100%", "0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </div>
    );
};
