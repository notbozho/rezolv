import dynamic from "next/dynamic";
import Hero from "@/app/sections/Hero";
import Services from "@/app/sections/Services";

const Partners = dynamic(() => import("@/app/sections/Partners"));
const Testimonials = dynamic(() => import("@/app/sections/Testimonials"));
const FAQ = dynamic(() => import("@/app/sections/FAQ"));
const AboutUs = dynamic(() => import("@/app/sections/AboutUs"));
const QuoteSection = dynamic(() => import("@/app/sections/Quote"));

export default function HomePage() {
    return (
        <>
            <Hero />
            <Partners />
            <Services />
            <Testimonials />
            <FAQ />
            <AboutUs />
            <QuoteSection
                title="Can you afford a $25M exploit? Our team will ensure you never have to find out"
                description="Don’t wait until it’s too late—get our expert security audit that has already protected millions in DeFi protocols. Book a free consultation now."
                gradientDirection="br"
                gradientColors={
                    "from-neutral-900 via-black via-40% to-neutral-950"
                }
            />
        </>
    );
}
