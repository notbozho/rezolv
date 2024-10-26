import AboutUs from "@/app/sections/AboutUs";
import FAQ from "@/app/sections/FAQ";
import Hero from "@/app/sections/Hero";
import QuoteSection from "@/app/sections/Quote";
import Services from "@/app/sections/Services";
import Testimonials from "@/app/sections/Testimonials";
import "@/app/styles/styles.css";

export default function HomePage() {
    return (
        <>
            <Hero />
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
