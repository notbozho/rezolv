import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            cursor: {
                white: "url('/assets/cursor.png'), auto",
                pointer: "url('/assets/pointer.png'), auto",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                noise: "url('/assets/bg/noise.webp')",
            },
            boxShadow: {
                glow: "0 0 42px 2px rgba(255, 0, 0, 0.1)",
                "glow-sm": "0 0 20px 1px rgba(255, 0, 0, 0.1)",
                button: "10px -5px 40px 2px rgba(255, 0, 0, 0.1)",
            },
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
        },
    },
    plugins: [],
    safelist: [
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
        "sm:text-2xl",
        "sm:text-3xl",
        "sm:text-4xl",
        "sm:text-5xl",
        "sm:text-6xl",
        "md:text-2xl",
        "md:text-3xl",
        "md:text-4xl",
        "md:text-5xl",
        "md:text-6xl",
        "lg:text-2xl",
        "lg:text-3xl",
        "lg:text-4xl",
        "lg:text-5xl",
        "lg:text-6xl",
    ],
};
export default config;
