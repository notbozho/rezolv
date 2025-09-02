"use client";

import React from "react";
import dynamic from "next/dynamic";
// import { gsap } from "gsap";
import AnimatedNumber from "@/app/components/AnimatedNumber";

const Grid = dynamic(() => import("@/app/components/ui/Grid"), {
    ssr: false,
});

export default function Hero() {
    // useEffect(() => {
    //     const tlBG = gsap.timeline();

    //     tlBG.set("#bg", {
    //         opacity: 0,
    //         y: 60,
    //     })
    //         .to("#bg", {
    //             opacity: 1,
    //             duration: 0.2,
    //             y: 0,
    //         })
    //         .to(
    //             "#bg_gradient",
    //             {
    //                 opacity: 1,
    //                 duration: 0.3,
    //             },
    //             "<0.1",
    //         );

    //     const tlHeader = gsap.timeline();

    //     const element = document.querySelector("#hero");
    //     const q = gsap.utils.selector(element);

    //     tlHeader
    //         .from(q("#header"), {
    //             opacity: 0,
    //             duration: 0.2,
    //             y: 20,
    //             ease: "expo.inOut",
    //         })
    //         .from(
    //             q("#btn"),
    //             {
    //                 opacity: 0,
    //                 scale: 0.8,
    //                 duration: 0.3,
    //                 ease: "expo.inOut",
    //             },
    //             "<",
    //         )
    //         .to(
    //             q("#header"),
    //             {
    //                 opacity: 1,
    //                 duration: 0.5,
    //                 y: 0,
    //                 ease: "expo.inOut",
    //             },
    //             "<0.1",
    //         )
    //         .to(
    //             q("#subheader"),
    //             {
    //                 opacity: 1,
    //                 duration: 0.2,
    //                 y: 0,
    //                 ease: "expo.inOut",
    //             },
    //             "<0.2",
    //         )
    //         .to(
    //             q("#btn"),
    //             {
    //                 opacity: 1,
    //                 duration: 0.8,
    //                 scale: 1,
    //                 y: 0,
    //                 ease: "expo.inOut",
    //             },
    //             "<0.2",
    //         )
    //         .to(
    //             q("#stats"),
    //             {
    //                 opacity: 1,
    //                 duration: 0.9,
    //                 y: 0,
    //                 ease: "expo.inOut",
    //             },
    //             "<0.2",
    //         );

    //     return () => {
    //         tlBG.kill();
    //         tlHeader.kill();
    //     };
    // }, []);

    return (
        <section
            className="relative flex min-h-screen w-full flex-col items-center justify-evenly"
            id="hero"
        >
            <div
                className="absolute -z-30 h-full w-full bg-gradient-to-tr from-neutral-800 via-black via-40% to-neutral-900"
                id="bg_gradient"
            ></div>
            <div className="absolute -left-1 -top-1 right-0" id="bg">
                <Grid />
            </div>
            <div className="container relative mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden">
                <h1
                    className="px-2 pt-32 text-center text-3xl font-light text-white md:px-0 md:text-6xl"
                    id="header"
                >
                    Elevate your smart contracts <br />
                    with expert development and security reviews
                </h1>
                <p
                    className="max-w-[90%] text-center text-neutral-400 sm:text-base lg:max-w-screen-lg lg:pb-10"
                    id="subheader"
                >
                    Delivering reliable smart contract solutions that drive
                    blockchain innovation.
                </p>
                <button
                    className="cursor-pointer rounded-lg bg-white px-14 py-2 text-lg text-black"
                    id="btn"
                >
                    Contact us
                </button>
            </div>
            <div
                className="lg:max-w-[6 0%] grid max-w-[80%] grid-cols-1 gap-4 text-center text-white md:grid-cols-4"
                id="stats"
            >
                <div>
                    {/* <p
                        className="text-3xl font-medium text-white lg:text-5xl"
                        id="stat-value"
                    >
                        7
                    </p> */}
                    <AnimatedNumber
                        endValue={40}
                        prefix=">"
                        delay={2}
                        className="text-3xl font-medium text-white lg:text-5xl"
                    />
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        Audits
                    </p>
                </div>
                <div>
                    <AnimatedNumber
                        endValue={100}
                        prefix=">"
                        delay={2}
                        suffix="K"
                        className="text-3xl font-medium text-white lg:text-5xl"
                    />
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        nSLOC audited
                    </p>
                </div>
                <div>
                    <AnimatedNumber
                        prefix=">$"
                        endValue={850}
                        suffix="M"
                        delay={2}
                        className="text-3xl font-medium text-white lg:text-5xl"
                    />
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        in TVL held by audited contracts
                    </p>
                </div>
                <div>
                    <AnimatedNumber
                        endValue={300}
                        delay={2}
                        suffix="+"
                        className="text-3xl font-medium text-white lg:text-5xl"
                    />
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        Critical, Highs & Mediums Found
                    </p>
                </div>
            </div>
        </section>
    );
}
