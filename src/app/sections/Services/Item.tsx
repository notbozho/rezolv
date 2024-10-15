/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { MouseEvent, useRef } from "react";
import { gsap } from "gsap";

export default function Item({
    header,
    description,
    Icon,
    iconPadding = "p-2",
}: Readonly<{
    header: string;
    description: string;
    Icon: any;
    iconPadding?: string;
}>) {
    const itemRef = useRef<HTMLDivElement | null>(null);
    const gradientRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = itemRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (gradientRef.current) {
                gsap.to(gradientRef.current, {
                    x: x - 90,
                    y: y - 90,
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
        }
    };

    const handleMouseEnter = () => {
        if (gradientRef.current) {
            gsap.killTweensOf(gradientRef.current);
            gsap.set(gradientRef.current, {
                opacity: 1,
                scale: 0.2,
                animationDelay: 0.4,
            });
            gsap.to(gradientRef.current, {
                scale: 1,
                duration: 0.4,
                ease: "circ.out",
            });
        }
    };

    const handleMouseLeave = () => {
        if (gradientRef.current) {
            gsap.to(gradientRef.current, {
                opacity: 0,
                scale: 0,
                duration: 0.2,
                ease: "power2.out",
            });
        }
    };

    return (
        <div
            ref={itemRef}
            className="relative flex h-full w-full cursor-pointer flex-row justify-start overflow-hidden rounded-lg border border-neutral-800 bg-gradient-to-t from-black/20 to-neutral-800/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 lg:flex-col lg:justify-between"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`flex h-12 w-12 items-center justify-center self-start rounded-lg bg-neutral-900/50 shadow-md shadow-neutral-900 ${iconPadding}`}
            >
                <Icon className="text-white" />
            </div>
            <div className="flex flex-col pl-4 lg:pl-0">
                <p className="text-2xl font-medium text-white lg:text-3xl">
                    {header}
                </p>
                <p className="font-light text-neutral-400">{description}</p>
            </div>

            {/* <div
                className={`absolute w-64 h-64 -right-32 ${iconPadding} flex justify-center z-10 items-center `}
            >
                <Icon className="invert" style={{ mixBlendMode: "screen" }} />
            </div> */}
            {/* Gradient circle  */}
            <div
                ref={gradientRef}
                className="absolute -z-10 rounded-full bg-red-500/50 blur-3xl"
                style={{
                    width: "150px",
                    height: "150px",
                    opacity: 0,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
