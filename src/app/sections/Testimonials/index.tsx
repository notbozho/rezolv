"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Quote from "@/app/assets/icons/quote.svg";
import Image from "next/image";

const testimonials = [
    {
        quote: "Rezolv conducted a thorough audit of our high-value smart contracts. They were responsive and addressed our concerns in a timely manner. Despite the tasks complexity, they worked efficiently and delivered within a reasonable timeframe. I recommend Rezolv for their professionalism, development and auditing expertise.",
        name: "JakeTheSlug",
        title: "Astrolab DAO",
        logo: "/assets/testimonials/astrolab.png",
    },
    {
        quote: "Everything was smooth and you guys are fast and reliable. Issues have been really easy to fix thanks to your recommendations. And you have also been checking that all fixes were correctly implemented. For sure we will be contacting you again when we have other smart contracts to audit",
        name: "Reiko DotEth",
        title: "Goat Protocol",
        logo: "/assets/testimonials/goat.jpeg",
    },
    {
        quote: "We had the pleasure of working with Rezolv. Their work was well-structured, communication was prompt, and their audit report was clear and thorough. Additionally, they reviewed our subsequent changes to ensure no new issues were introduced. We had an excellent experience with Rezolv and will definitely work with them again.",
        name: "Josh",
        title: "TheStandard",
        logo: "/assets/testimonials/standard.jpeg",
    },
    {
        quote: "Rezolv was very reactive and efficient during our audit, will work together again.",
        name: "Gaspard Peduzzi",
        title: "Spectra",
        logo: "/assets/testimonials/spectra.jpeg",
    },
    {
        quote: "We worked with Rezolv in multiple private audits of our smart contracts. The collaboration was always a breeze. For us, their outstanding quality was their unique ability to find issues that other leading auditors missed. The astounding lack of double findings let us conclude that Rezolv has a different approach and experience when it comes to smart contract security. In our opinion their service is a perfect addition to a serious, multi-step security review process.",
        name: "0xpossum",
        title: "Possum Labs",
        logo: "/assets/testimonials/possum.svg",
    },
];

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [Autoplay({ delay: 2000, stopOnInteraction: false })],
    );

    useEffect(() => {
        if (emblaApi) {
            const autoplay = emblaApi?.plugins()?.autoplay;

            if (!autoplay) return;

            ScrollTrigger.create({
                trigger: "#testimonials",
                start: "top bottom",
                onEnter: () => autoplay.play(),
                onLeave: () => autoplay.stop(),
                onEnterBack: () => autoplay.play(),
                onLeaveBack: () => autoplay.stop(),
            });

            return () => {
                emblaApi.destroy();
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        }
    }, [emblaApi]);

    return (
        <section className="relative w-full py-36" id="testimonials">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-tr from-neutral-900 via-black to-neutral-950 opacity-0"
                id="bg"
            ></div>
            <div className="container mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden lg:flex-row lg:items-start">
                {/* header start */}
                <div className="flex max-w-[75%] flex-col text-center lg:w-1/2 lg:text-start">
                    <p className="bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Testimonials
                    </p>
                    <h2 className="pb-4 text-4xl text-white md:text-5xl">
                        Our work through their words
                    </h2>
                    <p className="pb-10 text-neutral-400 lg:max-w-md">
                        Find out why we are trusted by so many
                    </p>
                </div>
                {/* header end */}

                <div className="w-full pb-24 lg:w-[60%]">
                    <div
                        className="embla overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                        ref={emblaRef}
                    >
                        <div
                            className="embla__container flex items-center rounded-lg align-middle shadow-lg"
                            style={{ touchAction: "pan-y pinch-zoom" }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="embla__slide pl-4">
                                    <div className="embla__slide__number flex min-h-[30rem] w-[20rem] min-w-0 select-none flex-col items-start justify-between space-y-6 rounded-lg bg-neutral-900/50 p-4 backdrop-blur-md lg:w-[32rem]">
                                        <div className="flex h-6 w-6 items-center justify-center self-start">
                                            <Quote className="text-red-700/80" />
                                        </div>
                                        <p className="text-base text-neutral-300 lg:pl-4 lg:text-lg">
                                            {testimonial.quote}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <Image
                                                src={testimonial.logo}
                                                alt="Testimonial Logo"
                                                width={100}
                                                height={100}
                                                className="h-12 w-12 rounded-full shadow-sm shadow-red-500"
                                            />
                                            <div className="flex flex-col font-medium">
                                                <p className="text-white">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-neutral-500">
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
