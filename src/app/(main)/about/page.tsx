"use client";
import { title } from "@/src/utils/primitives";
import react from "react";
import Image from "next/image";
import { Code, Tooltip } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Skeleton } from "@nextui-org/react";
import LanyardCard from "@/src/components/Lanyard";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/src/components/ui/card";

import {
	SiTypescript,
	SiNextdotjs,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
	SiLua,
	SiDiscord,
	SiD3Dotjs,
} from "react-icons/si";

interface TagProps {
	label: string;
	color: string;
	icon?: JSX.Element;
}

const Tags: TagProps[] = [
	{
		label: "NextJS",
		color: "default",
		icon: <SiNextdotjs className="text-zinc-800 dark:text-zinc-400" />,
	},
	{
		label: "TailwindCSS",
		color: "default",
		icon: <SiTailwindcss className="text-blue-400 dark:text-blue-800" />,
	},
	{
		label: "NodeJS",
		color: "default",
		icon: <SiNodedotjs className="text-yellow-400 dark:text-yellow-800" />,
	},
	{
		label: "React",
		color: "default",
		icon: <SiReact className="text-blue-400 dark:text-blue-800" />,
	},
	{
		label: "LUA",
		color: "default",
		icon: <SiLua className="text-yellow-700 dark:text-yellow-800" />,
	},
	{
		label: "DiscordJS",
		color: "default",
		icon: <SiD3Dotjs className="text-blue-400 dark:text-blue-800" />,
	},
	{
		label: "HTML",
		color: "default",
		icon: <SiHtml5 className="text-orange-700 dark:text-orange-800" />,
	},
	{
		label: "CSS",
		color: "default",
		icon: <SiCss3 className="text-blue-700 dark:text-blue-700" />,
	},
	{
		label: "JavaScript",
		color: "default",
		icon: <SiJavascript className="dark:yellow-blue-800 text-yellow-400" />,
	},
	{
		label: "TypeScript",
		color: "default",
		icon: <SiTypescript className="text-blue-400 dark:text-blue-800" />,
	},
];

export default function AboutPage() {
	return (
		<ScrollShadow hideScrollBar className="h-full w-full">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeOut", duration: 0.15 }}
				className="h-full w-full"
			>
				<Card className="flex m-4 flex-col items-center justify-center bg-zinc-900/25 text-center text-zinc-800 ring-1 ring-inset ring-zinc-400/25 hover:text-zinc-400 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 dark:hover:text-zinc-400 sm:w-auto">
					<CardHeader className="flex flex-col items-center justify-center text-center text-2xl font-bold text-primary-300">
						<CardTitle className="items-center justify-center text-center text-4xl font-extrabold text-primary-300">
							About Me
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-wrap items-center justify-between gap-4 space-y-2 pb-1 text-center">
						<div className="items-center justify-center gap-4 text-center">
							<div className="mb-4 flex flex-col items-center justify-center">
								<Image
									src="/me.jpg"
									alt={"my logo is supposed to be here"}
									width={125}
									height={125}
									className="rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
								/>
							</div>
							<CardDescription className="mb-4 items-center justify-center text-center">
								<div className="rounded-md p-2 text-center font-bold">
									<span className="p-2 text-center text-sm text-zinc-800 dark:text-zinc-400">
										I am 32y/o, Self taught{" "}
										<span className="font-bold underline decoration-sky-800 decoration-wavy decoration-2">
											Full Stack Developer
										</span>{" "}
										from the{" "}
										<span className="font-bold underline decoration-sky-800 decoration-wavy decoration-2">
											United Kingdom
										</span>
										, I started coding in 2015 my first project was a Discord
										Bot Built with{" "}
										<span className="font-bold underline decoration-sky-800 decoration-wavy decoration-2">
											Discord.JS
										</span>
										. I am a very friendly person and I love to help people out
										with their coding problems. I am a very active person and I
										love to play video games and watch movies in my spare time.
									</span>
								</div>
							</CardDescription>
							<div className="flex flex-col items-center justify-center">
								<CardTitle className="items-center justify-center text-center text-3xl font-extrabold text-primary-300">
									Skills & Technology
								</CardTitle>
								<div className="m-2 flex animate-appearance-in flex-wrap items-center justify-center rounded-md p-2 text-center">
									{Tags.map((tag, index) => (
										<Badge
											key={index}
											color={tag.color}
											className="m-2 text-lg"
										>
											{tag.icon ? tag.icon : tag.label}
										</Badge>
									))}
								</div>
								<CardDescription className="mb-4 items-center justify-center gap-6 text-center">
									<div className="flex flex-row items-center justify-center mb-4">
										<div className="rounded-md bg-blue-900/75 p-1 text-sm text-blue-400 ring-1 ring-inset ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">
											Fullstack Web Developer
										</div>
										&nbsp;&&nbsp;
										<div className="rounded-md bg-blue-900/75 p-1 text-sm text-blue-400 ring-1 ring-inset ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">
											Discord App Developer
										</div>
									</div>
									<div className="flex flex-row items-center justify-center">
										I am currently learning
										<span className="rounded-md bg-blue-900/75 p-1 text-sm text-blue-400 ring-1 ring-inset ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">
											Typescript
										</span>
										and
										<span className="rounded-md bg-emerald-700/25 p-1 text-sm text-emerald-700 ring-1 ring-inset ring-emerald-700/25 dark:bg-emerald-700/25 dark:text-emerald-700 dark:ring-emerald-700/25">
											NextJS v14
										</span>
										.
									</div>
								</CardDescription>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col items-center justify-center text-center">
						<Button
							variant="JokerBlueButton"
							size="default"
							rounded="md"
							className="text-center"
						>
							Contact Me
						</Button>
					</CardFooter>
				</Card>
			</motion.div>
			<LanyardCard />
		</ScrollShadow>
	);
}
