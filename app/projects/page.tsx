
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


export default function ProjectPage() {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
            <section className="flex flex-row flex-wrap justify-center items-center p-2 gap-2 text-[#fafafa] dark:text-[#fafafa]">
                <div className="text-center items-center justify-center py-1 space-y-2 md:space-y-2 ">
                    <h1 className="text-center p-4">
                        <Code color="default">Projects</Code>
                    </h1>
                    <p className="text-center p-4">
                        Here are some of my projects that I have worked on.
                    </p>
                    <ProjectsCard />
                </div>
            </section>
         </ScrollShadow>
    );
}