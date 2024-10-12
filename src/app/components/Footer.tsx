import React from "react";
import Image from "next/image";
import Arrow from "@/app/assets/icons/arrow-right.svg";

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto border-t border-neutral-800 bg-gradient-to-b from-black to-neutral-950">
                <div className="container mx-auto flex flex-row items-center justify-between py-10 align-middle">
                    <div className="z-20 flex flex-col">
                        <Image
                            src="/assets/logo.png"
                            alt="Rezolv logo"
                            width={100}
                            height={100}
                            className="-ml-4"
                        />
                        <h1 className="text-3xl font-medium text-white">
                            Rezolv
                        </h1>
                        <p className="font-light text-neutral-400">
                            prodavame pupeshi dini, i smart contracti
                        </p>
                    </div>
                    <div className="flex space-x-20">
                        <div className="space-y-5">
                            <p className="text-xl text-white"> Socials</p>
                            <ul className="flex flex-col text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="relative flex cursor-pointer gap-2 py-0.5 underline-offset-4 hover:underline"
                                    >
                                        X (Twitter)
                                        <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80 hover:fill-red-200" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative flex cursor-pointer gap-2 py-0.5 underline-offset-4 hover:underline"
                                    >
                                        Telegram
                                        <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80 hover:fill-red-200" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative flex cursor-pointer gap-2 py-0.5 underline-offset-4 hover:underline"
                                    >
                                        GitHub
                                        <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80 hover:fill-red-200" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <p className="text-xl text-white">Home</p>
                            <nav className="flex flex-col text-gray-400">
                                <a
                                    href="#"
                                    className="relative flex cursor-pointer py-0.5 underline-offset-4 hover:underline"
                                >
                                    Process
                                </a>
                                <a
                                    href="#"
                                    className="relative flex cursor-pointer py-0.5 underline-offset-4 hover:underline"
                                >
                                    Services
                                </a>
                                <a
                                    href="#"
                                    className="relative flex cursor-pointer py-0.5 underline-offset-4 hover:underline"
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="#"
                                    className="relative flex cursor-pointer py-0.5 underline-offset-4 hover:underline"
                                >
                                    FAQ
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center border-t border-neutral-900 py-6">
                    <span className="text-gray-500">
                        © 2024 Rezolv Solutions All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}
