"use client";

import React from "react";
import Code from "@/app/assets/icons/code.svg";
import Lock from "@/app/assets/icons/lock.svg";
import Monitor from "@/app/assets/icons/monitor.svg";
import Item from "./Item";
import Blur from "@/app/components/ui/Blur";

export default function Services() {
    return (
        <section className="relative w-full" id="solutions">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-800 via-black via-40% to-neutral-950 opacity-0"
                id="bg"
            ></div>

            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden pb-48 pt-24">
                {/* header start */}
                <div className="flex flex-col items-center text-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Solutions
                    </p>
                    <h2 className="pb-4 text-5xl text-white">
                        Your partner in the web3 world
                    </h2>
                    <p className="pb-10 text-neutral-400 lg:max-w-md">
                        We offer everything you need from start to finish for
                        your blockchain product
                    </p>
                </div>
                {/* header end */}
                <div className="flex h-full w-full flex-col items-center justify-between gap-8 px-8 lg:h-56 lg:flex-row">
                    <Item
                        header="Development"
                        description="prodavame pupeshi prodavame pupeshi prodavame pupeshi prodavame pupeshi"
                        Icon={Code}
                    />{" "}
                    <Item
                        header="Security Review"
                        description="prodavame pupeshi prodavame pupeshi prodavame pupeshi"
                        Icon={Lock}
                    />{" "}
                    <Item
                        header="Protocol Monitoring"
                        description="prodavame pupeshi prodavame pupeshi"
                        Icon={Monitor}
                    />
                </div>
                <div
                    className="absolute -z-30 mx-auto h-80 w-80 rounded-full bg-white/10 blur-[100px]"
                    id="bg-circle"
                ></div>
                <div className="absolute">
                    <Blur />
                </div>
            </div>
        </section>
    );
}
