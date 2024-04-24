'use client'
import { title } from "@/components/primitives";
import Image from 'next/image';
import { Code } from "@nextui-org/react";
import Skills from "@/components/Skills";

export default function AboutPage() {
	return (
		<div>
			
			<h1 className="text-center p-4">
					<Code color="primary" size="lg">About Me</Code>
				</h1>
			<div className="flex flex-col items-center justify-center m-6 gap-2">
				<Image
					src="/me.jpg"
					alt="Coming Soon"
					className="rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
					width={200}
					height={100}
				/>
				<p className="text-center text-gray-500 dark:text-gray-400">
				I am 32 years old, Inspired Full Stack Developer from the United Kingdom,
                                I started coding in 2015 my first project was a Discord Bot Built with Discord.JS
                                I am a very friendly person and I love to help people out with their coding problems.
                                I am a very active person and I love to play video games and watch movies in my spare time.
                    <Skills/>
				</p>

			</div>
		</div>
	);
}
