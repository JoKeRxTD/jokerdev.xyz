'use client'
import Header from "@/src/components/Header";
import { Divider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import Skills from "@/src/components/Skills";
import { motion } from "framer-motion";
import Github from "@/src/components/Github";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";

function SectionAnimation() {
	const [skillsRef, skillsInView] = useInView({ threshold: 0 });
	const [githubRef, githubInView] = useInView({ threshold: 0 });
	const [inView, setInView] = useState(false);
	
	// Add condition to setInView based on screen size
	useEffect(() => {
		const isMobile = window.innerWidth <= 640;
		setInView(isMobile ? skillsInView && githubInView : skillsInView || githubInView);
	}, [skillsInView, githubInView]);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ ease: "easeIn", duration: 0.15 }}
			className="w-full h-full"
		>
			<div className="text-center items-center justify-center py-1 space-y-1 md:space-y-1 lg:space-y-16 lg:gap-4">
				<Header />
				<Divider />
					<Skills />
				<Divider />
					<Github />
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
