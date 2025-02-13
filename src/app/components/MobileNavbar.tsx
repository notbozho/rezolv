"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../utils";
import Menu from "./ui/Menu";
import { NavbarItem } from "./Navbar";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import X from "./ui/X";
import { gsap } from "gsap";
import clsx from "clsx";
import Link from "next/link";

export default function MobileNavbar({
    className = "",
}: {
    className?: string;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const isActive = (path: string, section?: string) => {
        if (section) return activeSection === section;
        return pathname === path;
    };

    const inBlog = () => {
        return pathname.includes("/blog");
    };

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

        closeAnimation();

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [pathname]);

    const handleMenu = () => {
        const open = isOpen;
        if (!open) {
            setIsOpen(true);
            openAnimation();
        } else {
            closeAnimation();
        }
    };

    const openAnimation = () => {
        const tl = gsap.timeline();

        tl.fromTo(
            "#mobile_nav_bg",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "expo.inOut",
            },
        ).fromTo(
            "#mobile_nav_logo",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "expo.inOut",
            },
            "<0.3",
        );

        gsap.utils
            .toArray<HTMLElement>("#mobile_nav_item")
            .forEach((item, index) => {
                const direction = index % 2 === 0 ? -80 : 80;

                tl.fromTo(
                    item,
                    {
                        opacity: 0,
                        x: direction,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        ease: "expo.inOut",
                    },
                    "<0.1",
                );
            });

        tl.fromTo(
            "#mobile_nav_exit",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "expo.inOut",
            },
            "<0.1",
        );
    };

    const closeAnimation = () => {
        const tl = gsap.timeline();

        tl.fromTo(
            "#mobile_nav_bg",
            {
                y: 0,
                opacity: 1,
            },
            {
                opacity: 0,
                y: -300,
                duration: 1,
                ease: "expo.inOut",
            },
            "<",
        ).to("#mobile_nav_bg", {
            y: 0,
            duration: 0.1,
            ease: "expo.inOut",
            onComplete: () => {
                setIsOpen(false);
            },
        });
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
            openAnimation();
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    return (
        <div
            className={cn(
                "backdrop-blur-[1px], fixed left-0 right-0 top-0 z-30 bg-gradient-to-b from-neutral-950/80",
                className,
            )}
        >
            <div className="container mx-auto flex items-center p-6">
                <div
                    className={`absolute inset-0 flex h-screen w-screen flex-col items-center justify-between gap-8 bg-neutral-900/90 text-3xl backdrop-blur-lg ${clsx(isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible")}`}
                    id="mobile_nav_bg"
                >
                    <div
                        className="flex cursor-pointer items-center pt-10"
                        onClick={() => {
                            router.push("/");
                            closeAnimation();
                        }}
                        id="mobile_nav_logo"
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="Rezolv logo"
                            width={100}
                            height={100}
                            className="h-20 w-20"
                        />
                        <a className="cursor-pointer pr-6 text-2xl text-white">
                            Rezolv
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-6 text-white">
                        <Link
                            onClick={() => closeAnimation()}
                            href="/#solutions"
                        >
                            <NavbarItem
                                active={isActive("/", "solutions")}
                                id="mobile_nav_item"
                            >
                                Solutions
                            </NavbarItem>
                        </Link>
                        <Link onClick={() => closeAnimation()} href="/blog">
                            <NavbarItem
                                active={inBlog()}
                                className="flex items-center gap-2 hover:fill-red-200"
                                id="mobile_nav_item"
                            >
                                Blog
                            </NavbarItem>
                        </Link>

                        <Link
                            onClick={() => closeAnimation()}
                            href="/#testimonials"
                        >
                            <NavbarItem
                                active={isActive("/", "testimonials")}
                                id="mobile_nav_item"
                            >
                                Testimonials
                            </NavbarItem>
                        </Link>

                        <Link href="https://github.com/RezolvSolutions/Audits">
                            <NavbarItem
                                id="mobile_nav_item"
                                className="flex items-center gap-2 hover:fill-red-200"
                            >
                                Portfolio
                                <Arrow className="mb-2 h-4 w-4 -rotate-45 fill-white opacity-80" />
                            </NavbarItem>
                        </Link>
                        <Link href="/#aboutus">
                            <NavbarItem
                                active={isActive("/", "aboutus")}
                                id="mobile_nav_item"
                            >
                                About us
                            </NavbarItem>
                        </Link>
                        <Link href="/#faq">
                            <NavbarItem
                                id="mobile_nav_item"
                                active={isActive("/", "faq")}
                            >
                                FAQs
                            </NavbarItem>
                        </Link>
                    </div>
                    <div
                        className="mb-24 rounded-full border border-red-500 p-4"
                        onClick={handleMenu}
                        id="mobile_nav_exit"
                    >
                        <X className="h-8 w-8 text-white" />
                    </div>
                </div>
                <div className="flex w-full items-center justify-between text-base text-neutral-300">
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
                    </div>
                    <div className="flex flex-shrink-0 gap-4">
                        <button className="h-10 w-fit cursor-pointer rounded-lg bg-white px-4 py-1.5 text-sm text-black hover:bg-neutral-200">
                            Contact
                        </button>
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-lg border p-1"
                            onClick={handleMenu}
                        >
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
