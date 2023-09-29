
'use client'
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { ScrollShadow } from "@nextui-org/react";
import ProjectsCard from "@/components/ProjectsCard";
import { motion } from "framer-motion";


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
                    <Code color="primary" size="lg">Projects</Code>
                </h1>
                <p className="text-center p-4">
                    Here are some of my projects that I have worked on.
                </p>
                <ProjectsCard />
            </motion.div>
        </ScrollShadow>
    );
}