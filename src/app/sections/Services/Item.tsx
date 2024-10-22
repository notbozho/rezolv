/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { MouseEvent, useRef } from "react";
import { gsap } from "gsap";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import { useRouter } from "next/navigation";

export default function Item({
    header,
    description,
    Icon,
    href,
}: Readonly<{
    header: string;
    description: string;
    Icon: any;
    href?: string;
}>) {
    const itemRef = useRef<HTMLDivElement | null>(null);
    const gradientRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const arrowId = `#arrow_${header.split(" ").join("_")}`;

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

        const tl = gsap.timeline();
        tl.set(arrowId, {
            x: -10,
        });
        tl.to(arrowId, {
            opacity: 1,
            x: 0,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => {
                tl.kill();
            },
        });
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

        const tl = gsap.timeline();

        tl.set(arrowId, {
            x: 0,
        });
        tl.to(arrowId, {
            x: -10,
            duration: 0.2,
            ease: "power2.out",
        }).to(
            arrowId,
            {
                opacity: 0,
                duration: 0.2,
                ease: "power2.out",
                onComplete: () => {
                    tl.kill();
                },
            },
            "<0.2",
        );
    };

    return (
        <div
            ref={itemRef}
            className="group relative flex h-full w-full cursor-pointer flex-row justify-start overflow-hidden rounded-lg border border-neutral-800 bg-gradient-to-t from-black/20 to-neutral-800/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 lg:flex-col lg:justify-between"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => href && router.push(href)}
            id="service_item"
        >
            <div
                className={`flex h-12 w-12 items-center justify-center self-start rounded-lg bg-neutral-900/50 p-2 shadow-md shadow-neutral-900`}
            >
                <Icon className="text-white" />
            </div>
            <div className="flex flex-col pl-4 lg:pl-0">
                <p className="text-2xl font-medium text-white lg:text-3xl">
                    {header}
                </p>
                <p className="font-light text-neutral-400">{description}</p>
            </div>
            {href && (
                <Arrow
                    id={arrowId.replace("#", "")}
                    className="absolute bottom-4 right-4 h-6 w-6 text-white opacity-0 transition-all duration-300"
                />
            )}

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
