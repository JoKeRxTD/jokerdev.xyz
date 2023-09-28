'use client';
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/image"

export default function Header() {
    return (
        <section className="flex flex-col items-center justify-center py-1 space-y-2 md:space-y-2 ">
            <div>
                <div className="text-gray-800 dark:text-gray-100">
                    <Code color="default">Hello, I&rsquo;m</Code>
                </div>
                <p className="text-5xl font-bold text-warning-300">JoKeR</p>
            </div>
            <Image
                isBlurred
                shadow="md"
                src="/joker_new.png"
                alt={"my logo is supposed to be here"}
                width={150}
                className="p-1 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
            />
            <div className="text-gray-800 dark:text-gray-100 space-y-2">
            <br />
                <p>
                    I am a passionate <Code color="default">Fullstack Developer</Code> and <Code color="default">Discord Bot Developer</Code> from <Code color="default">EU/UK</Code>.
                </p>
                <p>
                    I am currently learning <Code color="warning">Typescript</Code>, <Code color="warning">NextJS</Code>
                </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
                <Snippet hideSymbol hideCopyButton variant="flat">
                    <span>
                        Avaliable for hire, <Code color="warning">Contact me</Code> for more info.
                    </span>
                </Snippet>
            </div>
        </section>
    )
}