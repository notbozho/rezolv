import React from "react";
import Code from "@/app/assets/icons/code.svg";
import Lock from "@/app/assets/icons/lock.svg";
import Monitor from "@/app/assets/icons/monitor.svg";
import Item from "./Item";
import Blur from "@/app/components/ui/Blur";

export default function index() {
    return (
        <section className="relative w-full">
            <div className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-800 via-black to-neutral-900"></div>
            <div className="absolute inset-0 top-0 w-full bg-noise opacity-[0.07]"></div>

            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden pb-48 pt-24">
                {/* header start */}
                <div className="flex flex-col items-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 text-center font-semibold tracking-wider text-transparent">
                        Solutions
                    </p>
                    <h2 className="pb-4 text-center text-5xl">
                        Your partner in the web3 world
                    </h2>
                    <p className="max-w-md pb-10 text-center text-neutral-500">
                        We offer everything you need from start to finish for
                        your blockchain product
                    </p>
                </div>
                {/* header end */}
                <div className="flex h-56 w-full items-center justify-between gap-8 px-8">
                    <Item
                        header="Development"
                        description="prodavame pupeshi"
                        Icon={Code}
                    />{" "}
                    <Item
                        header="Security Review"
                        description="prodavame pupeshi"
                        Icon={Lock}
                        iconPadding="p-3"
                    />{" "}
                    <Item
                        header="Protocol Monitoring"
                        description="prodavame pupeshi"
                        Icon={Monitor}
                    />
                </div>
                <div className="absolute -z-30 mx-auto h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute">
                    <Blur />
                </div>
            </div>
        </section>
    );
}
