"use client";

import React, { useEffect } from "react";
import Code from "@/app/assets/icons/code.svg";
import Lock from "@/app/assets/icons/lock.svg";
import Monitor from "@/app/assets/icons/monitor.svg";
import Item from "./Item";
import Blur from "@/app/components/ui/Blur";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    useEffect(() => {
        const element = document.querySelector("#solutions");
        const q = gsap.utils.selector(element);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#solutions",
                start: "top 80%",
                end: "bottom 20%",
                // toggleActions: "play ",
            },
        });

        tl.fromTo(
            q("#header>h2"),
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            },
        )
            .fromTo(
                q("#header>p"),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                },
                "<0.3",
            )
            .fromTo(
                q("#service_item"),
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.2,
                },
                "<-0.8",
            );

        tl.to("#bg-circle", {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        });
    }, []);

    return (
        <section className="relative w-full" id="solutions">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-800 via-black via-40% to-neutral-950 opacity-0"
                id="bg_gradient"
            ></div>

            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden pb-48 pt-24">
                {/* header start */}
                <div
                    className="flex flex-col items-center text-center"
                    id="header"
                >
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Solutions
                    </p>
                    <h2 className="pb-4 text-5xl text-white">
                        Your trusted partner in the web3 world
                    </h2>
                    <p className="pb-10 text-neutral-400 lg:max-w-md">
                        We offer everything you need from start to finish for
                        your blockchain product
                    </p>
                </div>
                {/* header end */}
                <div className="flex h-full w-full flex-col items-center justify-between gap-8 px-8 lg:h-64 lg:flex-row">
                    <Item
                        header="Development"
                        description="We provide complete blockchain solutions, from infrastructure selection to product development and ongoing support, ensuring seamless business integration."
                        Icon={Code}
                        href="/development"
                    />{" "}
                    <Item
                        header="Audits"
                        description="Make sure your application is secure and deployment-ready on any blockchain with our fast and reliable smart contract security audit services."
                        Icon={Lock}
                        href="/security"
                    />{" "}
                    <Item
                        header="Protocol Monitoring"
                        description="Wnsure the continuous security and performance of your blockchain protocols with our real-time monitoring services."
                        Icon={Monitor}
                    />
                </div>
                <div
                    className="absolute -z-30 mx-auto h-80 w-80 rounded-full bg-white/10 opacity-0 blur-[100px]"
                    id="bg-circle"
                ></div>
                <div className="absolute">
                    <Blur />
                </div>
            </div>
        </section>
    );
}
