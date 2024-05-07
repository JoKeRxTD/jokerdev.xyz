
'use client'
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { ScrollShadow } from "@nextui-org/react";
import ProjectsCard from "@/src/components/ProjectsCard";
import { motion } from "framer-motion";
import Github  from "@/src/components/Github";


export default function ProjectPage() {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
            <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ ease: "easeOut", duration: 0.15 }}
                    className="w-full h-full"
                >
                <h1 className="text-center p-4">
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Projects</p>
                    </h1>
                <p className="text-center p-4">
                    Here are some of my projects that I have worked on.
                </p>
                <p className="text-center p-4">
                Check out my <a href="https://github.com/JoKeRxTD" className="underline font-bold decoration-2 decoration-green-800 text-blue-500 dark:text-blue-800 font-bold">Github</a> for more projects.
                </p>
                <ProjectsCard />
                <Divider/>
                <Github/>
                <Divider/>
            </motion.div>
        </ScrollShadow>
    );
}