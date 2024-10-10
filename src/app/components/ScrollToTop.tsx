"use client";

import React, { useEffect } from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function ScrollToTop() {
    const handleScrollToTop = () => {
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power2.inOut",
        });
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#service_section",
                start: "top 90%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
            },
        });

        tl.to("#scrollToTop", {
            opacity: 1,
            duration: 1.0,
            pointerEvents: "auto",
            ease: "power2.out",
        });

        return () => {
            tl.kill();
        };
    }, []);
    return (
        <div className="p-1">
            <div
                id="scrollToTop"
                onClick={handleScrollToTop}
                className="pointer-events-none invisible fixed bottom-10 right-10 z-50 cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900/60 p-4 opacity-0 backdrop-blur-sm md:visible"
            >
                <Arrow className="h-6 w-6 -rotate-90 text-white" />
            </div>
        </div>
    );
}
