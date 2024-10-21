"use client";

import React, { useEffect, useState } from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import { gsap } from "gsap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { cn } from "../utils";
import Link from "next/link";

export const NavbarItem = ({
    children,
    active = false,
    className = "",
    id = "",
}: {
    children: React.ReactNode;
    active?: boolean;
    className?: string;
    id?: string;
}) => (
    <p
        className={cn(
            `cursor-pointer ${clsx(active && "font-medium text-white")} transition-all duration-500 ease-in-out hover:text-red-200`,
            className,
        )}
        id={id}
    >
        {children}
    </p>
);

export const DropdownItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => (
    <Link href={href} className="group relative flex">
        <Image
            src={src}
            alt={title}
            width={140}
            height={70}
            className="h-80 w-[16rem] rounded-lg object-cover mix-blend-multiply grayscale filter transition-all duration-300 group-hover:grayscale-0 group-hover:filter"
        />
        <div className="absolute h-full w-full rounded-lg bg-gradient-to-t from-black/60 from-30% to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
            <h4 className="mb-1 text-2xl font-medium text-white">{title}</h4>
            <p className="max-w-[10rem] text-neutral-400">{description}</p>
        </div>
    </Link>
);

export default function Navbar({ className = "" }: { className?: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");

    const [dropdown, setDropdown] = useState(false);

    const isActive = (path: string, section?: string) => {
        if (section) return activeSection === section;
        return pathname === path;
    };

    const inBlog = () => {
        return pathname.includes("/blog");
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

        return () => {
            tl.kill();
        };
    }, []);

    useEffect(() => {
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
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [pathname]);

    const closeAnimation = () => {
        const tl = gsap.timeline();

        tl.to("#dropdown", {
            opacity: 0,
            scale: 0.85,
            y: -20,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => setDropdown(false),
        });

        return () => {
            tl.kill();
        };
    };

    useEffect(() => {
        if (!dropdown) return;

        const tl = gsap.timeline();

        tl.set("#dropdown", {
            opacity: 0,
            scale: 0.85,
            y: -20,
        });

        tl.to("#dropdown", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        });

        return () => {
            tl.kill();
        };
    }, [dropdown]);

    return (
        <nav
            className={cn(
                `backdrop-blur-[2px], fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-neutral-950/90 opacity-0`,
                className,
            )}
            id="navbar"
            onMouseLeave={() => closeAnimation()}
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
                    <div
                        className="relative"
                        onMouseEnter={() => setDropdown(true)}
                    >
                        <NavbarItem>Solutions</NavbarItem>
                        {dropdown && (
                            <div
                                className="absolute -left-8 pt-4"
                                id="dropdown"
                            >
                                <div className="rounded-lg border border-neutral-800 bg-neutral-900/20 shadow-lg backdrop-blur-md transition-all duration-300">
                                    <div className="flex h-full w-max gap-4 p-4">
                                        <DropdownItem
                                            title="Development"
                                            description="Build your web3 protocol from scratch"
                                            href="/development"
                                            src="/assets/services/development.png"
                                        />
                                        <DropdownItem
                                            title="Security Reviews"
                                            description="Ensure your smart contracts are secure"
                                            href="/security"
                                            src="/assets/services/security.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onClick={() => router.push("/blog")}>
                        <NavbarItem
                            active={inBlog()}
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
                    <div
                        onClick={() =>
                            router.push(
                                "https://github.com/RezolvSolutions/Audits",
                            )
                        }
                    >
                        <NavbarItem className="flex items-center gap-2 hover:fill-red-200">
                            Portfolio
                            <Arrow className="mb-1 h-3 w-3 -rotate-45 fill-white opacity-80" />
                        </NavbarItem>
                    </div>
                    <div onClick={() => router.push("/#aboutus")}>
                        <NavbarItem>About us</NavbarItem>
                    </div>
                    <div onClick={() => router.push("/#faq")}>
                        <NavbarItem active={isActive("/", "faq")}>
                            FAQs
                        </NavbarItem>
                    </div>
                </div>

                <button
                    onClick={() => router.push("https://t.me/maslarovk")}
                    className="cursor-pointer rounded-lg bg-white px-6 py-1.5 text-black hover:bg-neutral-200"
                >
                    Contact us
                </button>
            </div>
        </nav>
    );
}
