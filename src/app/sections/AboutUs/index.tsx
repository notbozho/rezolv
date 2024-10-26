"use client";

import Image from "next/image";
import React from "react";
import gsap from "gsap";
import Telegram from "@/app/assets/icons/telegram.svg";
import GitHub from "@/app/assets/icons/github.svg";
import X from "@/app/assets/icons/x.svg";
import Link from "next/link";

const TeamCard = ({
    name,
    role,
    img,
    twitter,
    telegram,
    github,
}: {
    name: string;
    role: string;
    img: string;
    twitter: string;
    telegram: string;
    github: string;
}) => {
    const onMouseEnter = (e) => {
        if (window.innerWidth < 1024) return;

        const tl = gsap.timeline();

        tl.to(e.currentTarget, {
            scale: 1.05,
            borderColor: "#991b1b",
            duration: 0.5,
            ease: "power2.out",
        }).to(
            `#${name}>#wrapper`,
            {
                padding: 0,
            },
            "<",
        );
    };

    const onMouseLeave = (e) => {
        if (window.innerWidth < 1024) return;

        const tl = gsap.timeline();

        tl.to(e.currentTarget, {
            scale: 1,
            borderColor: "#171717",
            duration: 0.5,
            ease: "power2.out",
        }).to(
            `#${name}>#wrapper`,
            {
                padding: "0.5rem",
                paddingBottom: "0.5rem",
            },
            "<",
        );
    };

    return (
        <div
            id={name}
            className="relative rounded-lg border border-neutral-800 shadow-md"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Image
                src={`/assets/aboutus/${img}`}
                alt="team"
                width={350}
                height={350}
                className="h-64 w-64 rounded-lg md:h-[20rem] md:w-[20rem] lg:h-[24rem] lg:w-[24rem]"
            />
            <div
                id="wrapper"
                className="absolute bottom-0 mx-auto w-full text-center lg:p-2"
            >
                <div
                    id="content"
                    className="w-full overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950 p-2"
                >
                    <h3 className="text-lg font-medium text-white">{name}</h3>
                    <p className="text-sm text-neutral-400">{role}</p>
                    <div
                        id="socials"
                        className="flex w-full justify-center gap-6 py-2"
                    >
                        <Link href={telegram}>
                            <Telegram className="h-7 w-6 cursor-pointer text-white hover:text-red-400" />
                        </Link>
                        <Link href={github}>
                            <GitHub className="h-6 w-6 cursor-pointer text-white hover:text-red-400" />
                        </Link>
                        <Link href={twitter}>
                            <X className="h-6 w-6 cursor-pointer text-white hover:text-red-400" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AboutUs() {
    return (
        <section className="relative w-full" id="aboutus">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-tr from-neutral-900 via-black via-40% to-neutral-950 opacity-0"
                id="bg_gradient"
            ></div>

            <div className="container relative mx-auto flex min-h-[70vh] flex-col items-center justify-evenly overflow-hidden">
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
                <div className="flex h-full w-full flex-col items-center justify-evenly gap-8 px-8 md:flex-row md:gap-0">
                    <TeamCard
                        img="maslarovk.jpeg"
                        name="MaslarovK"
                        role="Co-Founder"
                        twitter="https://x.com/MaslarovK"
                        telegram="https://t.me/maslarovk"
                        github="https://github.com/kristiyanmaslarov"
                    />
                    <TeamCard
                        img="radev.jpeg"
                        name="radev_dev"
                        role="Co-Founder"
                        twitter="https://x.com/radev_eth"
                        telegram="https://t.me/radev_eth"
                        github="https://github.com/radeveth"
                    />
                </div>
            </div>
        </section>
    );
}
