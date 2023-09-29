'use client'
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import CurrentTime from "@/components/CurrentTime";
import { DiscordIcon, GithubIcon, HeartFilledIcon } from "@/components/icons";
import { ScrollShadow } from "@nextui-org/react";


export default function ProjectPage() {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full space-y-6">
			<h1 className="text-center p-4">
			<Code color="primary" size="lg">Contact</Code>
			</h1>
			<div className="p-4 space-y-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
			<CurrentTime />
			<p className="text-center p-2">
				Have an inquiry? Feel free to leave a message below.
			</p>
			<Input
				label="Name"
				placeholder="Your Name"
				type="text"
				className="text-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
			/>
			<Input
				label="Email"
				placeholder="Your Email"
				type="email"
				className="text-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
			/>
			<Input
				label="Message"
				placeholder="Your Message"
				type="text-area"
				className="text-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
			/>
			<Button
				radius="sm"
				className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
			>
				Send
			</Button>

			<div className="flex flex-col flex-wrap justify-center items-center gap-1 p-1">
				<p className="text-center p-4">
					Or you can join my Discord Server.
				</p>
				<div className="flex flex-row flex-wrap justify-center items-center gap-1 p-1 text-[#fafafa] dark:text-[#fafafa]">
					<Button
						href="#"
						variant="flat"
						color="primary"
					>
						<DiscordIcon />
						jokerxtd
					</Button>
					<Button
						href="#"
						variant="flat"
						color="default"
						className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
					>
						<GithubIcon />
						jokertd
					</Button>
					<Button
						href="https://discord.gg/HWNzKnZvfH"
						color="danger"
						variant="flat"
					>
						<HeartFilledIcon />
                         Support
					</Button>
				</div>
			</div>
			</div>

		</ScrollShadow>
	);
}
