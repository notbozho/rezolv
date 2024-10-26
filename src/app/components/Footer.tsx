"use client";

import React from "react";
import Image from "next/image";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import Telegram from "@/app/assets/icons/telegram.svg";
import GitHub from "@/app/assets/icons/github.svg";
import X from "@/app/assets/icons/x.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="z-30 w-full">
            <div className="mx-auto border-t border-neutral-800 bg-gradient-to-b from-black to-neutral-950">
                <div className="container mx-auto flex flex-col items-center justify-center py-10 text-center align-middle">
                    <div className="z-20 flex items-center pb-4">
                        <Image
                            src="/assets/logo.png"
                            alt="Rezolv logo"
                            width={80}
                            height={80}
                            // className="md:-ml-4"
                        />
                        <h1 className="text-3xl font-medium text-white">
                            Rezolv
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center text-center text-white lg:flex-nowrap lg:space-x-8">
                        <Link
                            href="/#solutions"
                            className="basis-1/2 cursor-pointer transition-all duration-500 ease-in-out hover:text-red-200 lg:basis-0"
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/blog"
                            className="basis-1/2 cursor-pointer transition-all duration-500 ease-in-out hover:text-red-200 lg:basis-0"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/#testimonials"
                            className="basis-1/2 cursor-pointer transition-all duration-500 ease-in-out hover:text-red-200 lg:basis-0"
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="https://github.com/RezolvSolutions/Audits"
                            className="flex basis-1/2 cursor-pointer items-center justify-center gap-2 transition-all duration-500 ease-in-out hover:text-red-200 lg:basis-0"
                        >
                            Portfolio
                            <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80" />
                        </Link>
                        <Link
                            href="/#aboutus"
                            className="basis-1/2 cursor-pointer text-nowrap transition-all duration-500 ease-in-out hover:text-red-200 lg:basis-0"
                        >
                            About us
                        </Link>
                        <Link
                            href="/#faq"
                            className="basis-1/2 cursor-pointer transition-all duration-500 ease-in-out hover:text-red-200 lg:basis-0"
                        >
                            FAQs
                        </Link>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 border-t border-neutral-900 py-6 lg:flex-row lg:gap-0">
                    <span className="text-gray-500">
                        © 2024 Rezolv Solutions All Rights Reserved
                    </span>
                    <div className="flex gap-6">
                        <Link href="https://t.me/maslarovk">
                            <Telegram className="h-7 w-6 cursor-pointer text-white hover:text-red-400" />
                        </Link>
                        <Link href="https://github.com/RezolvSolutions/Audits">
                            <GitHub className="h-6 w-6 cursor-pointer text-white hover:text-red-400" />
                        </Link>
                        <Link href="https://twitter.com/rezolv_sol">
                            <X className="h-6 w-6 cursor-pointer text-white hover:text-red-400" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
