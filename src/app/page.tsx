import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import "./styles/styles.css";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <FAQ />
        </>
    );
}
