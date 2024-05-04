'use client'
import Header from "@/src/components/Header"
import {Divider} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import Skills from "@/src/components/Skills"
// import DiscordWidget from "@/src/components/DiscordWidget"
import { motion } from "framer-motion";

const Home = () => {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeOut", duration: 0.15 }}
				className="w-full h-full">
				<div className="text-center items-center justify-center py-1 space-y-1 md:space-y-1">
					<Header />
					<Divider/>
					<Skills />
					<Divider/>
					{/* <DiscordWidget/> */}
				</div>
			</motion.div>
		</ScrollShadow>
	);
}

export default Home;
