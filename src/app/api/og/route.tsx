/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { posts as allPosts } from "#site/content";

import { promises as fs } from "fs"; // Import Node's file system module
import path from "path";

export async function GET(request) {
    const url = new URL(request.url);
    const slug = url.searchParams.get("slug");

    if (!slug) {
        return new Response("Missing slug", { status: 400 });
    }

    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        return new Response("Post not found", { status: 404 });
    }

    try {
        const fontPath = path.join(
            process.cwd(),
            "src",
            "app",
            "fonts",
            "Switzer-Regular.otf",
        );
        const fontData = await fs.readFile(fontPath);

        const bgImagePath = path.join(
            process.cwd(),
            "public",
            "assets",
            "metadata_bg_blog.png",
        );
        const bgImageData = await fs.readFile(bgImagePath);
        const baseFontSize = 60;
        const maxTitleLength = 60;
        const titleLength = post.title.length;
        const fontSize =
            titleLength > maxTitleLength
                ? baseFontSize - (titleLength - maxTitleLength) * 0.2
                : baseFontSize;

        return new ImageResponse(
            (
                <div
                    style={{
                        color: "white",
                        background: "#191919",
                        width: "1200px",
                        height: "630px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        fontFamily: "'Switzer', sans-serif",
                    }}
                >
                    <img
                        src={`data:image/png;base64,${bgImageData.toString("base64")}`}
                        style={{
                            position: "absolute",
                            left: "0",
                            width: "1200px",
                            height: "630px",
                            objectFit: "contain",
                        }}
                        alt=""
                    />
                    <p
                        style={{
                            margin: 0,
                            padding: "10px 40px",
                            fontSize: "24px",
                            textAlign: "right",
                            color: "#7f1d1d",
                        }}
                    >
                        Blog post
                    </p>
                    <h1
                        style={{
                            margin: 0,
                            padding: "10px 60px 40px 40px",
                            fontSize: fontSize,
                        }}
                    >
                        {post.title}
                    </h1>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Switzer",
                        data: fontData,
                        style: "normal",
                    },
                ],
            },
        );
    } catch (error) {
        console.error("Error generating image:", error);
        return new Response("Error generating image", { status: 500 });
    }
}
