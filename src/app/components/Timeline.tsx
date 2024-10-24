"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
    title: string;
    // content: ReactNode;
    description: string;
    icon?: ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setHeight(rect.height);
        }

        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                { height: 0, opacity: 0 },
                {
                    height: "100%",
                    opacity: 1,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 10%",
                        end: "bottom 50%",
                        scrub: true,
                    },
                },
            );
        }

        // Animate timeline entries
        const entries = document.querySelectorAll(".timeline-entry");
        entries.forEach((entry) => {
            gsap.fromTo(
                entry,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: entry,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        });
    }, []);

    return (
        <div className="w-[50%] font-sans md:px-10" ref={containerRef}>
            <div className="relative mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="timeline-entry flex justify-start pt-10 md:gap-10 md:pt-40"
                    >
                        <div className="sticky top-40 z-40 flex flex-col items-start md:w-full">
                            <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 md:left-3">
                                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
                            </div>
                            <h3 className="hidden pb-1 text-start text-lg md:block md:pl-20 md:text-3xl">
                                {item.title}
                            </h3>
                            <p className="text-left text-neutral-400 md:pl-20">
                                {item.description}
                            </p>
                        </div>
                        <div className="relative block w-full bg-red-500 pl-20 pr-4 md:hidden">
                            <h3 className="mb-4 text-left text-lg text-neutral-400">
                                {item.title}
                            </h3>
                            <p className="text-left text-neutral-400">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
                <div
                    ref={lineRef}
                    className="absolute left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-red-500 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
                    style={{ height: height + "px" }}
                >
                    <div className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent" />
                </div>
            </div>
        </div>
    );
};
