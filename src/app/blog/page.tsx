"use client";

import React, from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/ui/Grid";

import { compareDesc } from "date-fns";
import { useRouter } from "next/navigation";
import { posts as allPosts } from "#site/content";
import Image from "next/image";

export default function BlogPage() {
    const router = useRouter();

    const posts = allPosts
        .filter((post) => post.published)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date));
        });

    return (
        <>
            <Navbar />
            <section className="relative flex h-screen w-full flex-col justify-evenly">
                <div
                    className="absolute -z-30 h-full w-full bg-gradient-to-tr from-neutral-800 via-black via-40% to-neutral-900 opacity-0"
                    id="bg"
                ></div>
                <div className="absolute -left-1 -top-1 right-0" id="bg">
                    <Grid />
                </div>
                <div className="container relative mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden">
                    <h1
                        className="p-6 text-center text-2xl font-light text-white sm:text-3xl md:text-6xl"
                        id="header"
                    >
                        Our Blogs
                    </h1>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="rounded-lg bg-neutral-900/50 backdrop-blur-sm"
                                onClick={() =>
                                    router.push(`/blog/${post.slug}`)
                                }
                            >
                                <Image
                                    src={post.cover}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className=""
                                    priority={index <= 1}
                                />
                                <h2 className="text-4xl">{post.title}</h2>
                                {post.description && <p>{post.description}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
