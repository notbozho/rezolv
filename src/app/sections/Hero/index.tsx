"use client";

import React, { useEffect } from "react";
import Grid from "@/app/components/ui/Grid";
import { gsap } from "gsap";

export default function Hero() {
    useEffect(() => {
        const tlBG = gsap.timeline();

        tlBG.set("#bg", {
            opacity: 0,
            y: 60,
        })
            .to("#bg", {
                opacity: 1,
                duration: 0.5,
                y: 0,
            })
            .to("#bg_gradient", {
                opacity: 1,
                duration: 0.5,
            });

        const tlHeader = gsap.timeline();

        tlHeader
            .from("#header", {
                opacity: 0,
                duration: 0.7,
                y: 20,
                ease: "expo.inOut",
            })
            .from(
                "#btn",
                {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.5,
                    ease: "expo.inOut",
                },
                "<",
            )
            .to("#header", {
                opacity: 1,
                duration: 1.7,
                y: 0,
                ease: "expo.inOut",
            })
            .to(
                "#subheader",
                {
                    opacity: 1,
                    duration: 1.5,
                    y: 0,
                    ease: "expo.inOut",
                },
                "<0.3",
            )
            .to(
                "#btn",
                {
                    opacity: 1,
                    duration: 1.5,
                    scale: 1,
                    y: 0,
                    ease: "expo.inOut",
                },
                "<0.3",
            )
            .to(
                "#stats",
                {
                    opacity: 1,
                    duration: 1.5,
                    y: 0,
                    ease: "expo.inOut",
                },
                "<0.3",
            );

        return () => {
            tlBG.kill();
            tlHeader.kill();
        };
    }, []);

    return (
        <section className="relative flex h-screen w-full flex-col justify-evenly">
            <div
                className="absolute -z-30 h-full w-full bg-gradient-to-tr from-neutral-800 via-black via-40% to-neutral-900 opacity-0"
                id="bg_gradient"
            ></div>
            <div className="absolute -left-1 -top-1 right-0 opacity-0" id="bg">
                <Grid />
            </div>
            <div className="container relative mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden">
                <h1
                    className="pt-32 text-center text-2xl font-light text-white opacity-0 sm:text-3xl md:text-6xl"
                    id="header"
                >
                    Elevate your smart contracts <br />
                    with expert development and security reviews
                </h1>
                <p
                    className="max-w-[400px] pb-10 text-center text-xs text-neutral-500 opacity-0 sm:text-base lg:max-w-screen-lg"
                    id="subheader"
                >
                    Ipos sum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem{" "}
                    <br />
                    ipsum r adipiscing elit. Lorem ip
                </p>
                <button
                    className="cursor-pointer rounded-lg bg-white px-14 py-2 text-lg text-black opacity-0"
                    id="btn"
                >
                    kur do koleno
                </button>
            </div>
            <div className="flex" id="stats">
                <div className="">
                    <p
                        className="text-3xl font-medium text-white lg:text-5xl"
                        id="stat-value"
                    >
                        7
                    </p>
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        Audits
                    </p>
                </div>
                <div className="">
                    <p
                        className="text-3xl font-medium text-white lg:text-5xl"
                        id="stat-value"
                    >
                        12k
                    </p>
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        nSLOC audited
                    </p>
                </div>
                <div className="">
                    <p
                        className="text-3xl font-medium text-white lg:text-5xl"
                        id="stat-value"
                    >
                        6
                    </p>
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        Criticals Found
                    </p>
                </div>
                <div className="">
                    <p
                        className="text-3xl font-medium text-white lg:text-5xl"
                        id="stat-value"
                    >
                        34
                    </p>
                    <p className="text-sm font-light text-neutral-500 lg:text-base">
                        Highs/Mediums Found
                    </p>
                </div>
            </div>
        </section>
    );
}
