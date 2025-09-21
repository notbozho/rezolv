"use client";

import React, { useEffect } from "react";
import Lock from "@/app/assets/icons/lock.svg";
import Process from "@/app/sections/Process";
import QuoteSection from "@/app/sections/Quote";
import gsap from "gsap";
import Link from "next/link";
import Portfolio from "./Portfolio";

export default function SecurityPage() {
    const content = [
        {
            title: "Project Scope and Timeline",
            description:
                "We start by outlining the project's scope and setting a clear timeline and pricing for the audit.",
        },
        {
            title: "Repository Management",
            description:
                "We create a fork of the repository to ensure efficient issue tracking and facilitate discussions throughout the audit process.",
        },
        {
            title: "In-Depth Security Assessment",
            description:
                "A thorough and careful evaluation of all relevant elements of the smart contract, resulting in a detailed audit report that provides a clear and actionable plan for enhancing security measures.",
        },
        {
            title: "Risk Mitigation",
            description:
                "A specific period is set aside to review and verify all fixes, ensuring they meet our quality standards.",
        },
        {
            title: "Report Delivery",
            description:
                "Once the audit is complete, a detailed report is carefully prepared and delivered to you.",
        },
    ];
    useEffect(() => {
        const tlBG = gsap.timeline();

        tlBG.set("#bg", {
            opacity: 0,
            y: 60,
        })

            .to("#bg_gradient", {
                opacity: 1,
                duration: 0.5,
            })
            .to("#bg_icon", {
                opacity: 0.3,
                duration: 0.5,
                stagger: 0.5,
            });
    }, []);
    return (
        <>
            <section className="relative flex h-[80vh] w-full flex-col justify-evenly">
                <div
                    className="absolute -z-30 h-full w-full bg-gradient-to-tr from-neutral-900 via-black via-40% to-neutral-900 opacity-0"
                    id="bg_gradient"
                ></div>
                <div className="container relative mx-auto flex flex-col items-center justify-start gap-2">
                    {/* <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Deploy with confidence
                    </p> */}
                    <h1 className="pb-4 text-center text-4xl font-light text-white md:text-6xl">
                        Security reviews
                    </h1>
                    <p className="max-w-[90%] pb-10 text-center text-base text-neutral-400 sm:text-lg lg:max-w-screen-lg">
                        Ensure your application&apos;s security and readiness
                        for deployment on any blockchain with our reliable smart
                        contract audit services.
                    </p>
                    <Link href="https://t.me/radev_eth">
                        <button
                            className="cursor-pointer rounded-lg bg-white px-14 py-2 text-lg text-black"
                            id="btn"
                        >
                            Get in touch
                        </button>
                    </Link>
                    <div
                        id="bg_icon"
                        className="absolute -bottom-40 left-2 hidden text-white opacity-30 mix-blend-overlay blur-xl md:block"
                    >
                        <Lock className="h-96 w-96" />
                    </div>{" "}
                    <div
                        id="bg_icon"
                        className="absolute bottom-20 right-2 hidden text-white opacity-30 mix-blend-overlay blur-xl md:block"
                    >
                        <Lock className="h-96 w-96" />
                    </div>
                </div>
            </section>
            <Portfolio />
            <Process
                content={content}
                title="Securing your project"
                description="A streamlined process designed to secure
                        your blockchain project"
                gradientDirection="tr"
                gradientColors={"from-neutral-950 via-black to-neutral-950"}
            />
            <QuoteSection
                title="Ensure your code's safety with a professional audit"
                description="Get peace of mind with a security audit. Contact us for a quote."
                gradientDirection="br"
                gradientColors={"from-neutral-950 via-black to-neutral-950"}
            />
        </>
    );
}
