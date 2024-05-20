'use client'
import Header from "@/src/components/Header";
import { Divider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import Skills from "@/src/components/Skills";
import { motion } from "framer-motion";
import Github from "@/src/components/Github";
import { useInView } from "react-intersection-observer";

const Home = () => {
	const [skillsRef, skillsInView] = useInView({ threshold: 0 });
	const [githubRef, githubInView] = useInView({ threshold: 0 });

	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeIn", duration: 0.15 }}
				className="w-full h-full"
			>
				<div className="text-center items-center justify-center py-1 space-y-1 md:space-y-1 lg:space-y-16">
					<Header />
					<Divider />
					<motion.div
						ref={skillsRef}
						initial={{ x: 1000 }}
						animate={{ x: skillsInView ? 0 : 1000 }}
						transition={{ duration: 0.7 }}
					>
						<Skills />
					</motion.div>
					<Divider />
					<motion.div
						ref={githubRef}
						initial={{ x: -1000 }}
						animate={{ x: githubInView ? 0 : -1000 }}
						transition={{ duration: 0.7 }}
					>
						<Github />
					</motion.div>
				</div>
			</motion.div>
		</ScrollShadow>
	);
};

export default Home;
