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
                gradientDirection="br"
                gradientColors={
                    "from-neutral-900 via-black via-40% to-neutral-950"
                }
            />
        </>
    );
}
