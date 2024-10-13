import React, { useEffect, useState } from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import { gsap } from "gsap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const NavbarItem = ({
    children,
    active = false,
    className = "",
}: Readonly<{
    children: React.ReactNode;
    active?: boolean;
    className?: string;
}>) => (
    <a
        className={`relative cursor-pointer ${clsx(active && "font-medium text-white")} transition-all duration-500 ease-in-out hover:text-red-200 ${className}`}
    >
        {children}
    </a>
);

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");

    const isActive = (path: string, section?: string) => {
        if (section) return activeSection === section;
        return pathname === path;
    };

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

        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            tl.kill();
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div
            className="backdrop-blur-[1px], fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-neutral-950/80 opacity-0"
            id="navbar"
        >
            <div className="container mx-auto flex items-center justify-between py-6">
                <div className="flex items-center space-x-8 text-base text-neutral-300">
                    <div
                        className="flex cursor-pointer items-center"
                        onClick={() => router.push("/")}
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="Rezolv logo"
                            width={100}
                            height={100}
                            className="h-16 w-16"
                        />
                        <a className="cursor-pointer pr-6 text-xl text-white">
                            Rezolv
                        </a>
                    </div>
                    <NavbarItem>Solutions</NavbarItem>
                    <div onClick={() => router.push("/blog")}>
                        <NavbarItem
                            active={isActive("/blog", "")}
                            className="flex items-center gap-2 hover:fill-red-200"
                        >
                            Blog
                            {/* <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80" /> */}
                        </NavbarItem>
                    </div>
                    <div onClick={() => router.push("/#testimonials")}>
                        <NavbarItem active={isActive("/", "testimonials")}>
                            Testimonials
                        </NavbarItem>
                    </div>
                    <NavbarItem className="flex items-center gap-2 hover:fill-red-200">
                        Portfolio
                        <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80" />
                    </NavbarItem>
                    <NavbarItem>About us</NavbarItem>
                    <div onClick={() => router.push("/#faq")}>
                        <NavbarItem active={isActive("/", "faq")}>
                            FAQs
                        </NavbarItem>
                    </div>
                </div>

                <button className="cursor-pointer rounded-lg bg-white px-6 py-1.5 text-black hover:bg-neutral-200">
                    Contact us
                </button>
            </div>
        </div>
    );
}
