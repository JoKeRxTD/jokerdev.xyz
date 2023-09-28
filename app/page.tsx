'use client'
import Header from "@/components/Header"
import {Divider} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import Skills from "@/components/Skills"
// import TimeStatus from "@/components/CurrentTime"
import ProjectsCard from "@/components/ProjectsCard";

const Home = () => {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
				<div className="text-center items-center justify-center py-1 space-y-2 md:space-y-2 ">
					<Header />
					<Divider/>
					<h2 className="text-center p-1">
						<Code color="warning">Skills</Code>
					</h2>
					<p className="text-center p-1">
						Here are some of my skills that I have learned.
					</p>
					<Skills />
					{/* <TimeStatus /> */}
					<Divider/>
					<h3 className="text-center p-1">
						<Code color="warning">My Work</Code>
					</h3>
					<p className="text-center p-1">
						Here are some of my projects that I have worked on.
					</p>
					<ProjectsCard />
					<Divider/>
				</div>
		</ScrollShadow>
	);
}

export default Home;
