'use client';
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code"
import { Image } from "@nextui-org/image"
import React from "react";
import { useState } from "react";
import SupportCard from "@/src/components/SupportCard";
import { BackgroundBeams } from "@/src/components/Header-BG";
import Spotify from "@/src/components/Spotify";
import LanyardCard from "@/src/components/Lanyard";

export default function Header() {
    const [index, setIndex] = useState<number>(0);

    return (
        <section className={`relative flex flex-col gap-12 items-center justify-center sm:h-[300px] lg:h-[750px] w-full overflow-hidden mb-4`}
            style={{ transition: "opacity 0.5s ease-in-out" }}>
            {/* <BackgroundBeams /> */}
            <div>
                <div className="text-gray-800 dark:text-gray-100 sm:text-base lg:text-2xl">
                    Hi, I&apos;m
                </div>
                <span className="text-6xl font-bold text-primary-200">Tom</span>
            </div>
            <Image
                isBlurred
                shadow="md"
                src="/me.jpg"
                alt={"my logo is supposed to be here"}
                height={250}
                width={250}
                className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
            />
            <div className="text-gray-800 dark:text-gray-100 mt-2 sm:gap-2 lg:gap-1 sm:text-base lg:text-2xl">
                I am a passionate self taught <Code color="primary" size="lg" className="text-center font-bold">Fullstack Web Developer</Code> & <Code color="primary" size="lg" className="text-center font-bold">Discord App Developer</Code> from <Code color="primary" size="lg" className="text-center font-bold">EU/UK</Code>
            </div>
            <div className="sm:mt-2 lg:mt-3 flex flex-col gap-2">
                <div className="flex flex-col items-center justify-center gap-4 sm:text-base lg:text-3xl">
                    <span className="text-center text-gray-800 lg:mt-4 dark:text-gray-100 sm:gap-2 lg:gap-1 sm:text-base lg:text-2xl">
                        You can read a little about me <Link href="/about"><p className="underline decoration-wavy font-bold decoration-2 decoration-purple-800 text-gray-800 lg:mt-4 dark:text-gray-100 sm:text-base lg:text-3xl">here</p></Link>
                    </span>
                    <span className="text-gray-800 dark:text-gray-100 sm:text-base lg:text-2xl">
                        I am <a className="underline decoration-wavy font-bold decoration-2 decoration-yellow-800 sm:text-base lg:text-3xl">available</a> for hire,&nbsp;
                            <Link className="underline decoration-wavy font-bold decoration-2 decoration-blue-800 text-gray-800 lg:mt-4 dark:text-gray-100 sm:text-base lg:text-3xl" href="/contact">
                                Contact
                            </Link>
                            &nbsp;me for more info.
                    </span>
                </div>
                <LanyardCard />
                <Spotify />
            </div>
        </section>
    )
}