import React from "react";

export default function Blur() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 450"
            opacity="1"
        >
            <defs>
                <filter
                    id="bbblurry-filter"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur
                        stdDeviation="95"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                    ></feGaussianBlur>
                </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
                <ellipse
                    rx="120.5"
                    ry="122.5"
                    cx="628.8997149129552"
                    cy="754.0923111082063"
                    fill="hsla(0, 0%, 26%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="120.5"
                    ry="122.5"
                    cx="584.1727405894887"
                    cy="9.336123379794074"
                    fill="hsla(0, 0%, 24%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="120.5"
                    ry="122.5"
                    cx="190.9327621459961"
                    cy="441.79465276544744"
                    fill="hsla(0, 75%, 62%, 1.00)"
                ></ellipse>
            </g>
        </svg>
    );
}
