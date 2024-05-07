
'use client'
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { ScrollShadow } from "@nextui-org/react";
import PartnerCard from "@/src/components/PartnerCards";
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
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Partnerships & Sponsors</p>
                    </h1>
                <p className="text-center p-4">
                    Here you can find our Partners.
                </p>
                <PartnerCard />
            </motion.div>
         </ScrollShadow>
    );
}