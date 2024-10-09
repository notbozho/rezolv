import React from "react";

export default function Squares() {
    return (
        <svg
            width="568"
            height="568"
            viewBox="0 0 568 568"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
        >
            <defs>
                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="80%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        style={{ stopColor: "#404040", stopOpacity: 0.5 }}
                    />
                    <stop
                        offset="80%"
                        style={{ stopColor: "#171717", stopOpacity: 0 }}
                    />
                </linearGradient>
            </defs>
            <path
                d="M568 90.191L1 90.191M568 1L1.00001 0.999975M568 179.382L1 179.382M568 268.573L0.999996 268.573M568 357.764L0.999992 357.764M568 446.955L0.999988 446.955M568 536.146L0.999984 536.146"
                stroke="url(#gradient)"
                strokeWidth="2"
            />
            <path
                d="M446.955 568L446.955 0.999878M536.146 568L536.146 0.999886M357.764 568L357.764 0.99987M268.573 568L268.573 0.999862M179.382 568L179.382 0.999855M90.191 568L90.1911 0.999847M0.999997 568L1.00005 0.999839"
                stroke="url(#gradient)"
                strokeWidth="2"
            />
        </svg>
    );
}
