"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/app/components/Timeline";

export default function Process({
    title,
    description,
    content,
    gradientDirection = "br",
    gradientColors = "from-neutral-900 via-black via-40% to-neutral-950",
}) {
    return (
        <section className="relative w-full" id="process_section">
            <div
                className={`absolute inset-0 -z-50 w-full opacity-0 bg-gradient-to-${gradientDirection} ${gradientColors}`}
                id="bg_gradient"
            ></div>

            <div className="container relative mx-auto flex w-full flex-row-reverse items-start justify-center space-y-8">
                {/* header start */}
                <div className="sticky top-40 flex w-1/2 flex-col items-center pt-20 text-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Our process
                    </p>
                    <h2 className="pb-4 text-4xl text-white md:text-5xl">
                        {title}
                    </h2>
                    <p className="text-neutral-400 lg:max-w-lg">
                        {description}
                    </p>
                </div>
                {/* header end */}
                <Timeline data={content} />
            </div>
        </section>
    );
}
