"use client";

import React, { useEffect } from "react";
import Code from "@/app/assets/icons/code.svg";
import Process from "@/app/sections/Process";
import QuoteSection from "@/app/sections/Quote";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function DevelopmentPage() {
    const content = [
        {
            title: "Initial Consultation",
            content: (
                <div>
                    <Image
                        src="/assets/services/security.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <p className="text-neutral-400">
                        We start by outlining the project&apos;s scope and
                        setting a clear timeline and pricing for the audit.
                    </p>
                </div>
            ),
        },
        {
            title: "Pre-audit Review",
            content: (
                <div>
                    <h3 className="text-2xl font-semibold text-white">
                        Opravqme pupeshite
                    </h3>
                    <p className="text-lgtext-neutral-400">
                        We start by understanding your project requirements and
                        goals
                    </p>
                    <Image
                        src="/assets/services/security.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            ),
        },
        {
            title: "In-Depth Security Assessment",
            content: (
                <div>
                    <h3 className="text-2xl font-semibold text-white">
                        Opravqme pupeshite
                    </h3>
                    <p className="text-lg text-neutral-400">
                        We start by understanding your project requirements and
                        goals
                    </p>
                    <Image
                        src="/assets/services/security.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            ),
        },
        {
            title: "Risk Mitigation Review",
            content: (
                <div>
                    <h3 className="text-2xl font-semibold text-white">
                        Opravqme pupeshite
                    </h3>
                    <p className="text-lg text-neutral-400">
                        We start by understanding your project requirements and
                        goals
                    </p>
                    <Image
                        src="/assets/services/security.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            ),
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
