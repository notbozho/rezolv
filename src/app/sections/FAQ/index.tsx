import React from "react";

export default function FAQ() {
    return (
        <section className="relative w-full py-36" id="testimonials">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-900 via-black to-neutral-950 opacity-0"
                id="bg"
            ></div>
            <div className="container mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden lg:flex-row lg:items-end">
                <div className="w-full pb-24 lg:w-[60%]">
                    <div className="w-full rounded-lg bg-neutral-900">asd</div>
                </div>
                {/* header start */}
                <div className="flex max-w-[75%] flex-col text-center lg:w-1/2 lg:text-end">
                    <p className="bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Frequently asked questions
                    </p>
                    <h2
                        className="pb-4 text-4xl text-white md:text-5xl"
                        id="header"
                    >
                        Your Questions, Answered
                    </h2>
                    <p
                        className="self-end pb-10 text-neutral-500 md:max-w-md"
                        id="subheader"
                    >
                        Everything you need to know, in one place
                    </p>
                </div>
                {/* header end */}
            </div>
        </section>
    );
}
