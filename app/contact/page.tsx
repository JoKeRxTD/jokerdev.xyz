'use client'
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import CurrentTime from "@/components/CurrentTime";
import { DiscordIcon, SearchIcon, GithubIcon, HeartFilledIcon } from "@/components/icons";
import { ScrollShadow } from "@nextui-org/react";


export default function ProjectPage() {
	return (
		<div className="p-4 text-center items-center justify-center py-1 space-y-4 md:space-y-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
			<h1 className="text-center p-4">
				<Code color="default">Contact</Code>
			</h1>
			<p className="text-center p-2">
				Have an inquiry, or want to connect? Feel free to leave a message below, or get in touch via Discord, Twitter, or email.
			</p>
			<CurrentTime />
			<Input
				label="Name"
				placeholder="Your Name"
				type="text"
				// color="warning"
				className="text-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
			/>
			<Input
				label="Email"
				placeholder="Your Email"
				type="email"
				// color="warning"
				className="text-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
			/>
			<Input
				label="Message"
				placeholder="Your Message"
				type="text-area"
				// color="warning"
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
						// isIconOnly
					>
						<DiscordIcon />
						jokerxtd
							{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z">
								</path>
								<path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z">
								</path>
							</svg> */}
					</Button>
					<Button
						href="#"
						variant="flat"
						color="default"
						// isIconOnly
					>
						<GithubIcon />
						jokertd
							{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z">
								</path>
								<path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z">
								</path>
							</svg> */}
					</Button>
					<Button
						href="#"
						variant="flat"
						color="danger"
						// isIconOnly
					>
						<HeartFilledIcon />
						Support
							{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z">
								</path>
								<path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z">
								</path>
							</svg> */}
					</Button>
				</div>
			</div>
		</div>
	);
}
