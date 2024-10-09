"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import "./styles.css";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </>
    );
}
