"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const partners = [
    {
        title: "Astrolab DAO",
        logo: "/assets/testimonials/astrolab.png",
    },
    {
        title: "Goat Protocol",
        logo: "/assets/testimonials/goat.jpeg",
    },
    {
        title: "TheStandard",
        logo: "/assets/testimonials/standard.jpeg",
    },
    {
        title: "Spectra",
        logo: "/assets/testimonials/spectra.jpeg",
    },
    {
        title: "Possum Labs",
        logo: "/assets/testimonials/possum.svg",
    },
    {
        title: "Kayen",
        logo: "/assets/testimonials/kayen.png",
    },
    {
        title: "Astrolab DAO",
        logo: "/assets/testimonials/astrolab.png",
    },
    {
        title: "Goat Protocol",
        logo: "/assets/testimonials/goat.jpeg",
    },
    {
        title: "TheStandard",
        logo: "/assets/testimonials/standard.jpeg",
    },
    {
        title: "Spectra",
        logo: "/assets/testimonials/spectra.jpeg",
    },
    {
        title: "Possum Labs",
        logo: "/assets/testimonials/possum.svg",
    },
    {
        title: "Kayen",
        logo: "/assets/testimonials/kayen.png",
    },
];

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
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
        <section
            className="md:py-26 relative w-full border-y border-red-950 py-8"
            id="testimonials"
        >
            <div
                className="absolute inset-0 -z-50 w-full bg-neutral-950 opacity-0"
                id="bg_gradient"
            ></div>
            <div className="container relative mx-auto flex flex-col items-center justify-start space-y-8 overflow-hidden">
                {/* header start */}
                {/* <div
                    className="flex flex-col items-center text-center"
                    id="header"
                >
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Partners
                    </p>
                    <h2 className="pb-4 text-4xl text-white">
                        Worked with the best
                    </h2>
                </div> */}
                {/* header end */}

                <div className="w-full lg:w-[85%]">
                    <div
                        className="embla overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                        ref={emblaRef}
                    >
                        <div
                            className="embla__container flex items-center rounded-lg align-middle shadow-lg"
                            style={{ touchAction: "pan-y pinch-zoom" }}
                        >
                            {partners.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="embla__slide px-6 lg:px-16"
                                >
                                    <div className="embla__slide__number flex min-h-16 min-w-0 select-none flex-col items-start p-1">
                                        <Image
                                            src={testimonial.logo}
                                            alt={testimonial.title}
                                            width={100}
                                            height={100}
                                            loading="lazy"
                                            className="min-h-20 min-w-20 rounded-md lg:min-h-24 lg:min-w-24"
                                        />
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
