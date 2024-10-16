"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedNumber({
    endValue,
    suffix,
    className,
    delay = 2,
}: {
    endValue: number;
    suffix?: string;
    className?: string;
    delay?: number;
}) {
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(numberRef.current, {
            innerHTML: endValue + (suffix || ""),
            delay: delay,
            duration: 2, // duration in seconds
            ease: "power1.out",
            snap: { innerHTML: 1 }, // ensure whole numbers
        });
    }, [endValue]);

    return (
        <div className={className} ref={numberRef}>
            0
        </div>
    );
}
