"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import "./styles.css";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}
