import React, { useEffect } from "react";
import Grid from "@/app/components/ui/Grid";
import { gsap } from "gsap";

export default function Hero() {
    useEffect(() => {
        const tlBG = gsap.timeline();

        tlBG.from("#bg", {
            opacity: 0,
            y: 80,
            ease: "circ.inOut",
        }).to("#bg", {
            opacity: 1,
            duration: 1,
            y: 0,
            ease: "circ.inOut",
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
                id="bg"
            ></div>
            <div className="absolute -left-1 -top-1 right-0 opacity-0" id="bg">
                <Grid />
            </div>
            <div className="container relative mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden">
                <h1
                    className="pt-32 text-center text-6xl font-light text-white opacity-0"
                    id="header"
                >
                    Elevate your smart contracts <br />
                    with expert development and security reviews
                </h1>
                <p
                    className="max-w-screen-lg pb-10 text-center text-neutral-500 opacity-0"
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
            <div
                className="mx-auto flex items-center justify-center gap-24 self-end opacity-0"
                id="stats"
            >
                <div className="flex flex-col items-center space-y-2">
                    <p
                        className="text-5xl font-medium text-white"
                        id="stat-value"
                    >
                        7
                    </p>
                    <p className="font-light text-neutral-500">Audits</p>
                </div>
                <hr className="h-24 border-r border-neutral-800" />
                <div className="flex flex-col items-center space-y-2">
                    <p
                        className="text-5xl font-medium text-white"
                        id="stat-value"
                    >
                        12k
                    </p>
                    <p className="font-light text-neutral-500">nSLOC audited</p>
                </div>
                <hr className="h-24 border-r border-neutral-800" />
                <div className="flex flex-col items-center space-y-2">
                    <p
                        className="text-5xl font-medium text-white"
                        id="stat-value"
                    >
                        6
                    </p>
                    <p className="font-light text-neutral-500">
                        Criticals Found
                    </p>
                </div>
                <hr className="h-24 border-r border-neutral-800" />
                <div className="flex flex-col items-center space-y-2">
                    <p
                        className="text-5xl font-medium text-white"
                        id="stat-value"
                    >
                        34
                    </p>
                    <p className="font-light text-neutral-500">
                        Highs/Mediums Found
                    </p>
                </div>
            </div>
        </section>
    );
}
