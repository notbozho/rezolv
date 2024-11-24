"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedNumber({
    endValue,
    prefix,
    suffix,
    className,
    delay = 2,
}: {
    endValue: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    delay?: number;
}) {
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(numberRef.current, {
            innerHTML: endValue,
            delay: delay,
            duration: 2, // duration in seconds
            ease: "power1.out",
            snap: { innerHTML: 1 }, // ensure whole numbers
            onUpdate: () => {
                if (!numberRef.current) return;
                numberRef.current.innerHTML =
                    (prefix || "") +
                    numberRef.current.innerHTML +
                    (suffix || "");
            },
        });
    }, [endValue]);

    return (
        <div className={className} ref={numberRef}>
            0
        </div>
    );
}
