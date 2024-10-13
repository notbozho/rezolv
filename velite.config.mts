import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
    root: "content",
    collections: {
        posts: {
            name: "Post", // collection type name
            pattern: "posts/**/*.mdx", // content files glob pattern
            schema: s
                .object({
                    title: s.string().max(99), // Zod primitive type
                    slug: s.path(), // validate format, unique in posts collection
                    description: s.string().max(200).optional(),
                    published: s.boolean().default(true),
                    date: s.isodate(), // input Date-like string, output ISO Date string.
                    cover: s.image(), // input image relative path, output image object with blurImage.
                    metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
                    content: s.mdx(),
                })
                .transform((data) => ({
                    ...data,
                    permalink: `/blog/${data.slug}`,
                })),
        },
    },
    mdx: {
        rehypePlugins: [rehypePrettyCode],
    },
});
