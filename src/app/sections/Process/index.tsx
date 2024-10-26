"use client";

import React from "react";
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

            <div className="container relative mx-auto flex w-full flex-col items-center justify-center space-y-8 px-6 md:flex-row-reverse md:items-start">
                {/* header start */}
                <div className="relative flex w-[90vw] flex-col items-center pr-2 pt-20 text-center md:sticky md:top-40 md:w-1/2 md:items-end md:text-end">
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
