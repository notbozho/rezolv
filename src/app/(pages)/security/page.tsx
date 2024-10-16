"use client";

import React from "react";
import Lock from "@/app/assets/icons/lock.svg";
import Process from "@/app/sections/Process";
import QuoteSection from "@/app/sections/Quote";

export default function SecurityPage() {
    return (
        <>
            <section className="relative flex h-[80vh] w-full flex-col justify-evenly">
                <div
                    className="absolute -z-30 h-full w-full bg-gradient-to-tr from-neutral-900 via-black via-40% to-neutral-900"
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
                        Keep your blockchain project safe with our expert smart
                        contract auditing.
                    </p>
                    <button
                        className="cursor-pointer rounded-lg bg-white px-14 py-2 text-lg text-black"
                        id="btn"
                    >
                        kur do koleno
                    </button>
                    <div className="absolute -bottom-40 left-2 text-white opacity-30 mix-blend-overlay blur-xl">
                        <Lock className="h-96 w-96" />
                    </div>{" "}
                    <div className="absolute bottom-20 right-2 text-white opacity-30 mix-blend-overlay blur-xl">
                        <Lock className="h-96 w-96" />
                    </div>
                </div>
            </section>
            <Process />
            <QuoteSection
                gradientDirection="tr"
                gradientColors={"from-neutral-950 via-black to-neutral-950"}
            />
        </>
    );
}
