import React from "react";
import Telegram from "@/app/assets/icons/telegram.svg";
import Link from "next/link";

export default function QuoteSection({
    title,
    description,
    gradientDirection,
    gradientColors,
}: {
    title: string;
    description: string;
    gradientDirection: string;
    gradientColors: string;
}) {
    return (
        <section className="relative w-full py-36" id="quote">
            <div
                className={`absolute inset-0 -z-50 w-full opacity-0 bg-gradient-to-${gradientDirection} ${gradientColors}`}
                id="bg_gradient"
            ></div>
            <div className="container mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden lg:flex-row lg:items-start">
                {/* header start */}
                <div className="flex max-w-[75%] flex-col text-center lg:w-1/2 lg:text-start">
                    <p className="bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Contact us
                    </p>
                    <h2 className="pb-4 text-4xl text-white md:text-5xl">
                        {title}
                    </h2>
                    <p className="pb-10 text-neutral-400 lg:max-w-md">
                        {description}
                    </p>
                </div>
                {/* header end */}

                <div className="relative flex w-full items-center justify-center lg:h-[8rem] lg:w-[60%] lg:justify-end lg:pr-10">
                    <Link href="https://t.me/maslarovk">
                        <button className="group relative flex cursor-pointer overflow-hidden rounded-lg bg-white px-14 py-2 text-lg text-black">
                            <span className="transition duration-500 group-hover:translate-x-40">
                                Get a quote
                            </span>
                            <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover:translate-x-0">
                                <Telegram className="h-6 w-6 text-black" />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
