"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/app/components/Timeline";

export default function Process() {
    const content = [
        {
            title: "Initial Consultation",
            content: (
                <div>
                    <h3 className="text-2xl font-semibold text-white">
                        Opravqme pupeshite
                    </h3>
                    <p className="text-neutral-400">
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
                    <Image
                        src="/assets/services/security.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
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
    return (
        <section className="relative w-full" id="process_section">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-900 via-black via-40% to-neutral-950"
                id="bg"
            ></div>

            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden">
                {/* header start */}
                <div className="flex flex-col items-center text-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Our process
                    </p>
                    <h2 className="pb-4 text-5xl text-white">
                        Securing your project
                    </h2>
                    <p className="text-neutral-400 lg:max-w-md">
                        A streamlined process designed to secure your blockchain
                        project
                    </p>
                </div>
                {/* header end */}
            </div>
            <Timeline data={content} />
        </section>
    );
}
