
'use client'
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { ScrollShadow } from "@nextui-org/react";
import PartnerCard from "@/components/PartnerCards";


export default function ProjectPage() {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full">
                <h1 className="text-center p-4">
                    <Code color="primary" size="lg">Partners</Code>
                </h1>
                <p className="text-center p-4">
                    Here you can find our Partners.
                </p>
                <PartnerCard />
         </ScrollShadow>
    );
}