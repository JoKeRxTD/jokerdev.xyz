"use client";
import { title } from "@/utils/primitives";
import react from "react";
import Image from "next/image";
import { Code } from "@nextui-org/react";
import Skills from "@/src/components/Skills";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Skeleton } from "@nextui-org/react";
export default function AboutPage() {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeOut", duration: 0.15 }}
				className="w-full h-full"
			>
				<div>
					<h1 className="text-center p-4">
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">About Me</p>
                    </h1>
						<Skeleton className="rounded-lg" isLoaded={false}/>
					<div className="flex flex-col items-center justify-center p-6 gap-2 rounded-xl border border-gray-300  backdrop-blur-2xl dark:border-neutral-800  lg:rounded-xl lg:border bg-transparent">
						{/* Skeleton while Image is loading */}
							<Image
								src="/me.jpg"
								alt={"my logo is supposed to be here"}
								width={200}
								height={200}
								className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
							/>
						<p className="text-center text-gray-500 dark:text-gray-400">
							I am 32 years old, Inspired <a className="underline font-bold decoration-2 decoration-sky-800">Full Stack Developer</a> from the <a className="underline font-bold decoration-2 decoration-red-800">United
							Kingdom</a>, I started coding in 2015 my first project was a Discord
							Bot Built with <a className="underline font-bold decoration-2 decoration-sky-800">Discord.JS</a>. I am a very friendly person and I love
							to help people out with their coding problems. I am a very active
							person and I love to play video games and watch movies in my spare
							time.
						</p>

						<Skills />
					</div>
				</div>
			</motion.div>
		</ScrollShadow>
	);
}
