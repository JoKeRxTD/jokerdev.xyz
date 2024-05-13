'use client';
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code"
import { Image } from "@nextui-org/image"
import React from "react";
import { useState } from "react";
import SupportCard from "@/src/components/SupportCard";
import {BackgroundBeams} from "@/src/components/Header-BG";
import Spotify from "@/src/components/Spotify";
import LanyardCard from "@/src/components/Lanyard";

export default function Header() {
    const [index, setIndex] = useState<number>(0);

    return (
        <section className={`relative flex flex-col items-center justify-center h-[400px] w-full overflow-hidden`}
            style={{ transition: "opacity 0.5s ease-in-out" }}>
                <BackgroundBeams />
                <div>
                    <div className="text-gray-800 dark:text-gray-100">
                        Hi, I&apos;m
                    </div>
                    <p className="text-6xl font-bold text-primary-200">Tom</p>
                </div>
                <Image
                    isBlurred
                    shadow="md"
                    src="/me.jpg"
                    alt={"my logo is supposed to be here"}
                    width={150}
                    className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                    />
                <div className="text-gray-800 dark:text-gray-100 p-4 gap-1">
                        I am a passionate self taught <Code color="primary" size="sm" className="text-center font-bold">Fullstack Web Developer</Code> & <Code color="primary" size="sm" className="text-center font-bold">Discord Bot Developer</Code> from <Code color="primary" size="sm" className="text-center font-bold">EU/UK</Code>.
                </div>
                <div className="mt-7 flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-center space-x-1">
                        <p className="p-1 text-gray-800 dark:text-gray-100">
                            I am <a className="underline decoration-wavy font-bold decoration-2 decoration-yellow-800">available</a> for hire,&nbsp;
                            <Link href="/contact">
                                <Code color="primary">Contact Me</Code>
                            </Link>
                            &nbsp;for more info.
                        </p>
                    </div>
                    <LanyardCard/>
                    <Spotify/>
                </div>
            </section>
    )
}