import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const switzer = localFont({
    src: "./fonts/Switzer.woff2",
    variable: "--font-switzer",
});

export const metadata: Metadata = {
    title: "Rezolv",
    description: "Smart Contract Development & Security Company",
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
