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
            );

        return () => {
            tlBG.kill();
            tlHeader.kill();
        };
    }, []);

    return (
        <section className="relative h-full w-full">
            <div
                className="absolute h-full w-full bg-gradient-to-tr from-neutral-800 via-black to-neutral-900 opacity-0"
                id="bg"
            ></div>
            <div className="absolute top-0 h-full w-full bg-noise opacity-[0.07]"></div>
            <div className="absolute -left-1 -top-1 right-0 opacity-0" id="bg">
                <Grid />
            </div>
            <div className="container relative mx-auto flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden">
                <h1
                    className="text-center text-6xl font-light opacity-0"
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
        </section>
    );
}
