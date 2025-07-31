import React from "react";
import { posts as allPosts } from "#site/content";
import { formatDate } from "@/app/utils";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx/MdxComponents";
import Image from "next/image";
import { compareDesc } from "date-fns";
import PostCard from "../PostCard";
import { Metadata } from "next";
import { APP_URL } from "@/app/consts";
// generate metadata for this page

interface PageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params) {
    const post = allPosts.find(
        (post) => post.permalink === decodeURIComponent(params.slug.join("/")),
    );

    if (!post) {
        return null;
    }

    return post;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    if (!post) {
        return {};
    }

    const url = APP_URL;

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description || post.excerpt,
            url: `${url}/blog/${post.slug}`,
            type: "article",
            images: [
                {
                    url: `${url}/api/og?slug=${post.slug}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Rezolv Solutions",
            description: "Expert web3 development & security",
            images: [`${url}/api/og?slug=${post.slug}`],
        },
    };
}

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
                    {/* <div className="max-w-[50%]">
                        <Image
                            src={post.cover}
                            alt={post.title}
                            className="mt-10 rounded-lg object-cover object-top"
                            priority
                        />
                    </div> */}

                    <h1 className="max-w-[90%] pb-2 text-4xl font-light text-white sm:text-4xl md:pb-6 md:text-6xl">
                        {post.title}
                    </h1>
                    {post.description && (
                        <p className="max-w-[80%] pb-4 text-neutral-500">
                            {post.description}
                        </p>
                    )}
                    <div className="hover: flex items-center gap-2 rounded p-2 align-middle">
                        {post.author && post.author_avatar && (
                            <>
                                <p className="pr-2 text-lg text-white">
                                    Author:
                                </p>
                                <Image
                                    src={post.author_avatar}
                                    alt={post.author}
                                    className="h-10 w-10 rounded-full"
                                />
                                <a
                                    className="cursor-pointer text-neutral-400 hover:underline"
                                    href="https://x.com/0xBozho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {post.author}
                                </a>
                            </>
                        )}
                        <p className="text-lg text-white">Date:</p>

                        <p className="bg-neutral-400 bg-clip-text text-sm text-transparent md:text-base">
                            {formatDate(post.date)}
                        </p>
                    </div>
                </div>
                <div className="mx-auto w-full p-2 text-start lg:w-1/2">
                    <Mdx code={post.content} />
                </div>
            </div>
            {/* more */}
            <div className="flex w-full flex-col border-t border-red-900 p-2 pb-10 pt-4 backdrop-blur-md md:p-10">
                <div className="container mx-auto space-y-8">
                    <div className="flex w-full justify-between">
                        <h2 className="text-2xl md:text-4xl">
                            Discover more articles
                        </h2>
                        <button className="hidden cursor-pointer rounded-lg bg-white px-6 py-1.5 text-sm text-black hover:bg-neutral-200 md:block md:text-base">
                            View All
                        </button>
                    </div>
                    <div className="mx-auto grid gap-6 px-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {otherPosts.map((post, index) => (
                            <PostCard
                                key={post.slug}
                                post={post}
                                index={index}
                            />
                        ))}
                    </div>
                    <button className="block w-full cursor-pointer rounded-lg bg-white px-6 py-1.5 text-sm text-black hover:bg-neutral-200 md:hidden md:text-base">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
}
