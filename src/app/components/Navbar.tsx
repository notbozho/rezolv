import React from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";

function Item({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <a
            className={`relative hover:cursor-pointer hover:opacity-80 ${className}`}
        >
            {children}
        </a>
    );
}

export default function Navbar() {
    return (
        <div className="container flex py-6 mx-auto justify-between items-center">
            <div className="flex items-center space-x-8 text-base text-neutral-300">
                <a
                    href="/"
                    className="text-2xl text-white font-semibold pr-6  -mt-1"
                >
                    Rezolv
                </a>
                <Item>Solutions</Item>
                <Item className="flex gap-2 items-center">
                    Blog
                    <Arrow className="fill-white w-3 h-3 mb-1 -rotate-45 opacity-80" />
                </Item>
                <Item> Testimonials</Item>
                <Item> Portfolio</Item>
                <Item> About us</Item>
                <Item> FAQs</Item>
            </div>

            <button className="bg-white text-black px-6 py-1.5 rounded-lg text-base">
                Contact us
            </button>
        </div>
    );
}
