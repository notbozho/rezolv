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
    },
    plugins: [],
};
export default config;
