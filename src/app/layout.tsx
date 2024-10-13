import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const switzer = localFont({
    src: "./fonts/Switzer.woff2",
    variable: "--font-switzer",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://rezolvsolutions.com"),
    title: "Rezolv",
    description: "Expert web3 development & security",
    openGraph: {
        title: "Rezolv",
        description: "Expert web3 development & security",
        type: "website",
        locale: "en_US",
        url: "https://rezolvsolutions.com",
        siteName: "Rezolv",
        images: [
            {
                url: "assets/metadata.jpg",
                width: 1200,
                height: 675,
                alt: "Rezolv Metadata Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rezolv Solutions",
        description: "Expert web3 development & security",
        images: ["assets/metadata.jpg"],
    },
    keywords: [
        "web3",
        "development",
        "security",
        "blockchain",
        "ethereum",
        "security",
        "audit",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${switzer.variable} cursor-white antialiased`}>
                <div className="fixed inset-0 -z-10 w-full bg-noise opacity-[0.07]"></div>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
