"use client";

import React from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import clsx from "clsx";

const faqs = [
    {
        question: "What is a smart contract audit?",
        answer: "A smart contract audit is a security review of the codebase of a smart contract. The goal is to identify potential vulnerabilities and bugs that could be exploited by malicious actors.",
    },
    {
        question: "Why do I need a smart contract audit?",
        answer: "Smart contracts are immutable and self-executing. Once deployed, they cannot be changed. This means that any bugs or vulnerabilities in the code will persist indefinitely. A smart contract audit helps to identify and fix these issues before deployment.",
    },
    {
        question:
            "What is the difference between a security audit and a code review?",
        answer: "A code review is a general review of the codebase to ensure that it is well-structured, readable, and maintainable. A security audit, on the other hand, focuses specifically on identifying security vulnerabilities and bugs that could be exploited by malicious actors.",
    },
    {
        question: "How long does a smart contract audit take?",
        answer: "The duration of a smart contract audit depends on the complexity of the codebase and the thoroughness of the audit. On average, a smart contract audit can take anywhere from a few days to a few weeks.",
    },
    {
        question: "How much does a smart contract audit cost?",
        answer: "The cost of a smart contract audit depends on the complexity of the codebase and the thoroughness of the audit. On average, a smart contract audit can cost anywhere from a few thousand dollars to tens of thousands of dollars.",
    },
];

export default function FAQ() {
    const [open, setOpen] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        if (open === index) {
            setOpen(null);

            return;
        }

        if (open !== index) {
            setOpen(index);
        }
    };

    return (
        <section className="relative w-full py-36" id="faq">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-900 via-black to-neutral-950 opacity-0"
                id="bg"
            ></div>
            <div className="container mx-auto flex flex-col items-start justify-start space-y-8 overflow-hidden lg:flex-row">
                {/* questions start */}
                <div className="flex w-1/2 flex-col gap-5 rounded-lg">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer"
                            onClick={() => handleClick(index)}
                        >
                            {/* p-[1rem_0_1.5rem_0.5rem] */}
                            <div className="flex w-full justify-between rounded-lg pb-5">
                                <div className="flex max-w-[85%] flex-col text-lg">
                                    <p
                                        className={`pb-4 ${clsx(open == index && "font-semibold", open !== index && "font-medium")} select-none`}
                                    >
                                        {faq.question}
                                    </p>
                                    <div
                                        className={`${clsx(open == null || open != index ? "h-0" : "h-fit")} overflow-hidden font-light text-neutral-300`}
                                    >
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                                <Arrow
                                    className={`my-auto h-6 w-6 transform ${clsx(
                                        open === null &&
                                            "rotate-90 text-neutral-300",
                                        open === index && "-rotate-90",
                                        open !== null &&
                                            open !== index &&
                                            "rotate-90 text-neutral-500",
                                    )}`}
                                />
                            </div>
                            {index != faqs.length - 1 && (
                                <hr className="border-neutral-800" />
                            )}
                        </div>
                    ))}
                </div>
                {/* questions end */}
                {/* header start */}
                <div className="flex max-w-[75%] flex-col text-center lg:w-1/2 lg:text-end">
                    <p className="bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Frequently asked questions
                    </p>
                    <h2 className="pb-4 text-4xl text-white md:text-5xl">
                        Your Questions, Answered
                    </h2>
                    <p className="self-end pb-10 text-neutral-500 md:max-w-md">
                        Everything you need to know, in one place
                    </p>
                </div>
                {/* header end */}
            </div>
        </section>
    );
}
