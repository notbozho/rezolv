import React, { useEffect } from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import { gsap } from "gsap";
import Image from "next/image";

const NavbarItem = ({
    children,
    className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) => (
    <a className={`relative cursor-pointer hover:text-red-200 ${className}`}>
        {children}
    </a>
);

export default function Navbar() {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from("#navbar", {
            opacity: 0,
            duration: 0.4,
            y: -100,
            ease: "expo.inOut",
        }).to("#navbar", {
            opacity: 1,
            duration: 1.5,
            y: 0,
            ease: "expo.inOut",
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            className="backdrop-blur-[1px], fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-neutral-950/80 opacity-0"
            id="navbar"
        >
            <div className="container mx-auto flex items-center justify-between py-6">
                <div className="flex items-center space-x-8 text-base text-neutral-300">
                    <div className="flex cursor-pointer items-center">
                        <Image
                            src="/assets/logo.png"
                            alt="Rezolv logo"
                            width={100}
                            height={100}
                            className="h-16 w-16"
                        />
                        <a
                            href="/"
                            className="cursor-pointer pr-6 text-xl text-white"
                        >
                            Rezolv
                        </a>
                    </div>
                    <NavbarItem>Solutions</NavbarItem>
                    <NavbarItem className="flex items-center gap-2 hover:fill-red-200">
                        Blog
                        <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80" />
                    </NavbarItem>
                    <NavbarItem>Testimonials</NavbarItem>
                    <NavbarItem className="flex items-center gap-2 hover:fill-red-200">
                        Portfolio
                        <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80" />
                    </NavbarItem>
                    <NavbarItem>About us</NavbarItem>
                    <NavbarItem>FAQs</NavbarItem>
                </div>

                <button className="cursor-pointer rounded-lg bg-white px-6 py-1.5 text-black hover:bg-neutral-200">
                    Contact us
                </button>
            </div>
        </div>
    );
}
