"use client";

import React, { useEffect } from "react";
import Code from "@/app/assets/icons/code.svg";
import Process from "@/app/sections/Process";
import QuoteSection from "@/app/sections/Quote";
import gsap from "gsap";
import Link from "next/link";

export default function DevelopmentPage() {
    const content = [
        {
            title: "Project Scope and Planning",
            description:
                "We begin by defining the project's scope, requirements, and deliverables. This includes setting a clear timeline and pricing for the development process.",
        },
        {
            title: "Architecture and Design",
            description:
                "Our team drafts the architecture and design of the smart contracts, ensuring they meet the project's functional and security needs.",
        },
        {
            title: "Smart Contract Development",
            description:
                "We write and implement the smart contracts, following best practices in security and optimization for blockchain environments.",
        },
        {
            title: "Testing and Validation",
            description:
                "Comprehensive testing is conducted to validate the contract's functionality, performance, and security under various conditions.",
        },
        {
            title: "Deployment and Documentation",
            description:
                "Once finalized, we deploy the smart contracts to the agreed blockchain network and provide detailed documentation for future maintenance and integration.",
        },
        {
            title: "Post-Deployment Support",
            description:
                "We offer a period of post-deployment support to ensure smooth operation and assist with any necessary updates or fixes.",
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
                        Smart contract development
                    </h1>
                    <p className="max-w-[90%] pb-10 text-center text-base text-neutral-400 sm:text-lg lg:max-w-screen-lg">
                        We offer end-to-end blockchain solutions, from selecting
                        the ideal infrastructure, to building your product and
                        providing ongoing support, ensuring a seamless
                        integration with your business or project.
                    </p>
                    <Link href="https://t.me/maslarovk">
                        <button
                            className="cursor-pointer rounded-lg bg-white px-14 py-2 text-lg text-black"
                            id="btn"
                        >
                            Get in touch
                        </button>
                    </Link>
                    <div
                        id="bg_icon"
                        className="absolute -bottom-40 left-2 hidden text-white opacity-0 mix-blend-overlay blur-xl md:block"
                    >
                        <Code className="h-96 w-96" />
                    </div>{" "}
                    <div
                        id="bg_icon"
                        className="absolute bottom-20 right-2 hidden text-white opacity-0 mix-blend-overlay blur-xl md:block"
                    >
                        <Code className="h-96 w-96" />
                    </div>
                </div>
            </section>
            <Process
                content={content}
                title="Building Your Vision"
                description="Our structured process delivers scalable and decentralized solutions aligned with your vision."
            />
            <QuoteSection
                gradientDirection="tr"
                gradientColors={"from-neutral-950 via-black to-neutral-950"}
            />
        </>
    );
}
