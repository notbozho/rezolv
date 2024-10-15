"use client";

import React from "react";
import Code from "@/app/assets/icons/code.svg";
import Lock from "@/app/assets/icons/lock.svg";
import Monitor from "@/app/assets/icons/monitor.svg";
import Item from "./Item";
import Blur from "@/app/components/ui/Blur";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    // useEffect(() => {
    //     const tlBG = gsap.timeline();

    //     tlBG.from("#bg", {
    //         opacity: 0,
    //         y: 80,
    //         ease: "circ.inOut",
    //     }).to("#bg", {
    //         opacity: 1,
    //         duration: 1,
    //         y: 0,
    //         ease: "circ.inOut",
    //     });

    //     // const tl = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         trigger: "#header",
    //     //         start: "bottom bottom",
    //     //         end: "top 30%",
    //     //     },
    //     // });

    //     // tl.from("#header", {
    //     //     opacity: 0,
    //     //     duration: 0.7,
    //     //     y: 20,
    //     //     ease: "expo.inOut",
    //     // })
    //     //     .to("#header", {
    //     //         opacity: 1,
    //     //         duration: 1.7,
    //     //         y: 0,
    //     //         ease: "expo.inOut",
    //     //     })
    //     //     .to(
    //     //         "#bg-circle",
    //     //         {
    //     //             opacity: 1,
    //     //             delay: 0.5,
    //     //             duration: 1.5,
    //     //             ease: "circ.inOut",
    //     //         },
    //     //         "<",
    //     //     );

    //     return () => {
    //         tlBG.kill();
    //         // tl.kill();
    //     };
    // }, []);

    return (
        <section className="relative w-full" id="service_section">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-800 via-black via-40% to-neutral-950 opacity-0"
                id="bg"
            ></div>

            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden pb-48 pt-24">
                {/* header start */}
                <div className="flex flex-col items-center text-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Solutions
                    </p>
                    <h2 className="pb-4 text-5xl text-white">
                        Your partner in the web3 world
                    </h2>
                    <p className="pb-10 text-neutral-400 lg:max-w-md">
                        We offer everything you need from start to finish for
                        your blockchain product
                    </p>
                </div>
                {/* header end */}
                <div className="flex h-full w-full flex-col items-center justify-between gap-8 px-8 lg:h-56 lg:flex-row">
                    <Item
                        header="Development"
                        description="prodavame pupeshi prodavame pupeshi prodavame pupeshi prodavame pupeshi"
                        Icon={Code}
                    />{" "}
                    <Item
                        header="Security Review"
                        description="prodavame pupeshi prodavame pupeshi prodavame pupeshi"
                        Icon={Lock}
                    />{" "}
                    <Item
                        header="Protocol Monitoring"
                        description="prodavame pupeshi prodavame pupeshi"
                        Icon={Monitor}
                    />
                </div>
                <div
                    className="absolute -z-30 mx-auto h-80 w-80 rounded-full bg-white/10 blur-[100px]"
                    id="bg-circle"
                ></div>
                <div className="absolute">
                    <Blur />
                </div>
            </div>
        </section>
    );
}
