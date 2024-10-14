import React from "react";
import { posts as allPosts } from "#site/content";
import { formatDate } from "@/app/utils";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx/MdxComponents";
import Image from "next/image";
import { compareDesc } from "date-fns";
import PostCard from "../PostCard";

// generate metadata for this page

export default function Post({ params }: { params: { slug: string[] } }) {
    const post = allPosts.find(
        (post) => post.permalink === decodeURIComponent(params.slug.join("/")),
    );
    if (!post) {
        notFound();
    }

    const otherPosts = allPosts
        .filter((post) => post.published)
        .filter((p) => p.slug !== post.slug)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date));
        })
        .slice(0, 3);

    return (
        <section className="relative min-h-screen w-full">
            <div className="mx-auto flex min-h-screen flex-col items-center justify-center pb-10">
                <div className="flex min-h-[45vh] flex-col items-center justify-end pb-10 text-center md:min-h-[60vh]">
                    <div className="max-w-[50%]">
                        <Image
                            src={post.cover}
                            alt={post.title}
                            className="h-32 rounded-lg object-cover object-top md:h-64"
                            priority
                        />
                    </div>
                    <p className="bg-neutral-700 bg-clip-text text-sm font-semibold tracking-wider text-transparent md:px-2 md:text-base">
                        {formatDate(post.date)}
                    </p>
                    <h1 className="max-w-[90%] pb-2 text-4xl font-light text-white sm:text-4xl md:pb-6 md:text-6xl">
                        {post.title}
                    </h1>
                    {post.description && (
                        <p className="max-w-[80%] text-neutral-500">
                            {post.description}
                        </p>
                    )}
                </div>
                <div className="mx-auto w-full p-2 text-start lg:w-1/2">
                    <Mdx code={post.content} />
                </div>
            </div>
            {/* more */}
            <div className="flex w-full flex-col border-t border-red-900 p-10">
                <div className="container mx-auto space-y-8">
                    <div className="flex w-full justify-between">
                        <h2 className="text-4xl">Discover more articles</h2>
                        <button className="cursor-pointer rounded-lg bg-white px-6 py-1.5 text-black hover:bg-neutral-200">
                            View All
                        </button>
                    </div>
                    <div className="mx-auto grid gap-6 px-2 pb-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {otherPosts.map((post, index) => (
                            <PostCard
                                key={post.slug}
                                post={post}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
