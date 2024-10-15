"use client";

import React from "react";
import Grid from "../../components/ui/Grid";

import { compareDesc } from "date-fns";
import { posts as allPosts } from "#site/content";
import PostCard from "./PostCard";

export default function BlogPage() {
    const posts = allPosts
        .filter((post) => post.published)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date));
        });

    return (
        <>
            <section className="relative z-20 flex min-h-screen w-full flex-col justify-center">
                <div
                    className="absolute -z-30 h-full w-full bg-gradient-to-tr from-neutral-800 via-black via-40% to-neutral-900 opacity-0"
                    id="bg"
                ></div>
                <div className="absolute -left-1 -top-1 right-0 -z-10" id="bg">
                    <Grid />
                </div>
                <div className="top-0 mx-auto flex h-[35vh] min-h-[35vh] flex-col items-center justify-end space-y-8 pb-12 pt-12">
                    <div className="flex flex-col items-center pb-10 text-center">
                        <p className="bg-gradient-to-r from-red-800 to-red-900 bg-clip-text text-sm font-semibold tracking-wider text-transparent md:pb-2 md:text-base">
                            Expert Insights
                        </p>
                        <h1
                            className="pb-2 text-4xl font-light text-white sm:text-4xl md:pb-6 md:text-6xl"
                            id="header"
                        >
                            Latest blog posts
                        </h1>
                        <p className="max-w-lg text-neutral-500" id="subheader">
                            Exploring topics we think are cool and worth a read
                        </p>
                    </div>
                </div>
                <div className="container mx-auto grid gap-6 px-2 pb-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <PostCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            </section>
        </>
    );
}
