"use client";

import React from "react";
import Image from "next/image";
import Read from "../components/ui/Read";
import { formatDate } from "../utils";
import Calendar from "../components/ui/Calendar";
import { useRouter } from "next/navigation";
import { Post } from "#site/content";

export default function PostCard({
    post,
    index,
}: {
    post: Post;
    index: number;
}) {
    const router = useRouter();

    return (
        <article
            className="flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50 backdrop-blur-[2px] transition-all duration-200 ease-in hover:bg-neutral-900"
            onClick={() => router.push(`/blog/${post.slug}`)}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute h-full w-full bg-gradient-to-t from-black/80 to-transparent to-40%"></div>
                <Image
                    src={post.cover}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    priority={index <= 1}
                />
            </div>
            {/* icons start */}
            <div className="flex w-full items-center space-x-4 px-4 pt-4">
                <div className="flex items-center space-x-2">
                    <Read className="h-5 w-5" />
                    <p className="font-light">
                        ~{post.metadata.readingTime} minute
                        {post.metadata.readingTime > 1 && "s"}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <p className="font-light">{formatDate(post.date)}</p>
                </div>
            </div>
            {/* icons end */}
            <div className="relative flex w-full flex-col space-y-2 px-4 pb-8 pt-4">
                <h2 className="text-2xl font-medium">{post.title}</h2>
                <p className="text-neutral-500">
                    {post.description
                        ? post.description
                        : post.excerpt + "... Read more"}
                </p>
            </div>
        </article>
    );
}
