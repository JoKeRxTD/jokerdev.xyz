'use client'
import Header from "@/src/components/Header";
import { Divider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import Skills from "@/src/components/Skills";
import { motion } from "framer-motion";
import Github from "@/src/components/Github";
import { useEffect } from "react";
import { useState } from "react";
import { RocketIcon } from "@radix-ui/react-icons"
import {ArrowRightIcon} from "@radix-ui/react-icons";
import { Badge } from "@/src/components/ui/badge";
import { Link } from "@nextui-org/react";
import { GithubIcon } from "@/src/components/Icons";
import Diswidget from "@/src/components/Diswidget";

function SectionAnimation() {

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ ease: "easeIn", duration: 0.15 }}
			className="w-full h-full"
		>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div className="hidden md:flex flex-col items-center justify-center gap-5 p-5 text-center">
					<div className="flex flex-row items-center justify-center gap-5 p-2 text-xs rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25">
						<Badge variant="Discord" className="flex flex-row items-center">
							Open Source
						</Badge>
						<h5>This website is open source and available on </h5>
						<Link href="https://github.com/JoKeRxTD/jokerdev.xyz" target="_blank" className="flex flex-row items-center">
							<GithubIcon className="w-5 h-5 justify-center items-center" />
						</Link>
					</div>
				</div>
				<Header />
				<Divider />
				<Skills />
				<Divider />
				{/* <Github />
				<Divider /> */}
				<Diswidget />
				<Divider />
			</div>
		</motion.div>
	);
}

const Home = () => {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
			<SectionAnimation />
		</ScrollShadow>
	);
};

export default Home;
