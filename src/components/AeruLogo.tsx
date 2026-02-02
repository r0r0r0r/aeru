import React from "react";

export const AeruLogo = ({ className = "w-32 h-auto" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Icon: The Abstract "Pulse/Spark" */}
            <path
                d="M25 5L35 30H10L40 55"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="square"
                fill="none"
            />

            {/* Text: Custom Geometric Typeface */}
            <path d="M55 50L70 10H80L95 50" stroke="currentColor" strokeWidth="6" strokeLinecap="butt" />
            <path d="M63 35H87" stroke="currentColor" strokeWidth="6" />

            <path d="M105 50V10H135" stroke="currentColor" strokeWidth="6" />
            <path d="M105 30H130" stroke="currentColor" strokeWidth="6" />
            <path d="M105 50H135" stroke="currentColor" strokeWidth="6" />

            <path d="M145 50V10H170C180 10 185 15 185 22C185 28 178 30 170 30H145" stroke="currentColor" strokeWidth="6" />
            <path d="M165 30L185 50" stroke="currentColor" strokeWidth="6" />

            <path d="M195 10V40C195 48 200 50 205 50C210 50 215 48 215 40V10" stroke="currentColor" strokeWidth="6" />
        </svg>
    );
};
