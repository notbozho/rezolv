"use client";

import React, { FC, useEffect, useState } from "react";
import Arrow from "@/app/assets/icons/arrow-right.svg";
import Link from "next/link";

function readableTitle(title: string): string {
    return title
        .replace(".pdf", "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

interface FileData {
    name: string;
    html_url: string;
}

const Portfolio: FC = () => {
    const [files, setFiles] = useState<FileData[]>([]);
    const [slicedFiles, setSlicedFiles] = useState<FileData[]>([]);
    const repoUrl =
        "https://api.github.com/repos/RezolvSolutions/Audits/contents/reports/pdf-format";

    useEffect(() => {
        // set the state with 8  empty objects
        setFiles(new Array(8).fill({}));
        const windowWidth = window.innerWidth;
        const sliceCount = windowWidth < 1024 ? 5 : 8;

        const fetchFiles = async () => {
            try {
                const response = await fetch(repoUrl);
                const data = await response.json();
                setSlicedFiles(data.slice(0, sliceCount));
                setFiles(data);
            } catch (error) {
                console.error("Error fetching files:", error);
            }
        };

        fetchFiles();
    }, []);

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const sliceCount = windowWidth < 1024 ? 5 : 8;
        setSlicedFiles(files.slice(0, sliceCount));
    }, [window.innerWidth]);

    return (
        <section className="relative w-full" id="process_section">
            <div
                className="absolute inset-0 -z-50 w-full bg-gradient-to-br from-neutral-900 via-black via-40% to-neutral-950 opacity-0"
                id="bg_gradient"
            ></div>

            <div className="container relative mx-auto flex w-[90%] flex-col items-center justify-start space-y-20 overflow-hidden md:w-full">
                {/* header start */}
                <div className="flex flex-col items-center text-center">
                    <p className="relative bg-gradient-to-r from-red-800 to-red-900 bg-clip-text pb-2 font-semibold tracking-wider text-transparent">
                        Portfolio
                    </p>
                    <h2 className="pb-4 text-4xl text-white md:text-5xl">
                        Explore our detailed audit reports.
                    </h2>
                    <p className="text-neutral-400 lg:max-w-lg">
                        See our commitment to securing decentralized
                        applications
                    </p>
                </div>
                {/* header end */}
                <div className="mx-auto max-w-[90vw] pb-36 md:pb-48 lg:max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                        {slicedFiles.length > 0 &&
                            slicedFiles.map((file, index) => (
                                <Link
                                    href={file.html_url ? file.html_url : ""}
                                    key={index}
                                >
                                    <div className="flex h-28 cursor-pointer select-none flex-col justify-end rounded-lg border border-neutral-800 bg-neutral-900/60 p-2 backdrop-blur-md transition-all duration-300 hover:border-red-900 hover:bg-neutral-900/80">
                                        <p className="text-sm font-light text-neutral-400">
                                            Project
                                        </p>
                                        {!file.name ? (
                                            <div className="mt-2 h-4 w-1/2 rounded-md bg-neutral-600"></div>
                                        ) : (
                                            <h3 className="text-sm md:text-lg">
                                                {file.name &&
                                                    readableTitle(file.name)}
                                            </h3>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        <Link href="https://github.com/RezolvSolutions/Audits/tree/main/reports/pdf-format">
                            <div className="right-0 col-start-3 row-start-3 flex h-28 cursor-pointer select-none flex-col items-end justify-center rounded-lg border border-red-900 bg-neutral-900/70 pr-6 hover:bg-neutral-900/90">
                                <p className="text-sm font-light text-neutral-400">
                                    Browse
                                </p>
                                <div className="flex">
                                    <p className="text-2xl font-medium">
                                        View all
                                    </p>
                                    <Arrow className="h-6 w-6 pl-2 pt-2" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        // <div>
        //     <h1>Portfolio</h1>
        //     <div className="file-cards">
        //         {files.map((file) => (
        //             <div key={file.name} className="file-card">
        //                 <h2>{file.name}</h2>
        //                 <a
        //                     href={file.download_url}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     Download
        //                 </a>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Portfolio;
