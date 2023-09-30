'use client'
import Header from "@/components/Header"
import {Divider} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import Skills from "@/components/Skills"
// import TimeStatus from "@/components/CurrentTime"
import ProjectsCard from "@/components/ProjectsCard";
import AboutCard from "@/components/AboutCard";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeOut", duration: 0.15 }}
				className="w-full h-full"
			>
				<div className="text-center items-center justify-center py-1 space-y-2 md:space-y-2 ">
					<Header />
					{/* <h3 className="text-center p-1">
					<Divider/>
						<Code color="primary">About Me</Code>
					</h3>
					<AboutCard />
					<Divider/>
					<h2 className="text-center p-1">
						<Code color="primary">Skills</Code>
					</h2>
					<p className="text-center p-1">
						Here are some of my skills that I have learned.
					</p>
					<Skills />
					<Divider/> */}
				</div>
		</motion.div>
		</ScrollShadow>
	);
}

export default Home;
