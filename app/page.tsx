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
// import  PageAds  from "@/components/pageAds" 

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
					{/* <PageAds/> */}
				</div>
			</motion.div>
		</ScrollShadow>
	);
}

export default Home;
