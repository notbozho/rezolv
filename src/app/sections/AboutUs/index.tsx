"use client";

import React from "react";

export default function AboutUs() {
    return (
        <section className="relative w-full" id="aboutus">
            <div className="absolute inset-0 -z-50 w-full bg-gradient-to-tr from-neutral-900 via-black via-40% to-neutral-950"></div>

            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden pb-48 pt-24">
                {/* header start */}
                <div className="flex flex-col items-center text-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Our team
                    </p>
                    <h2 className="pb-4 text-5xl text-white">Who we are</h2>
                    <p className="pb-10 text-neutral-400 lg:max-w-md">
                        Great things in business are never done by one person
                    </p>
                </div>
                {/* header end */}
                <div className="flex h-full w-full flex-col items-center justify-between gap-8 px-8 lg:h-56 lg:flex-row"></div>
            </div>
        </section>
    );
}
