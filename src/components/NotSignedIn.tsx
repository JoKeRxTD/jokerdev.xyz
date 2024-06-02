'use client'
import { Card, CardHeader, CardBody, CardFooter, Code, ScrollShadow, Link } from "@nextui-org/react";
import { error } from "console";
import { motion } from "framer-motion";
import {Button} from "@/src/components/ui/button";

export default function NotSignedIn() {
    const error = new Error("You must be signed in to view this page.");
    return (
        <ScrollShadow hideScrollBar className="w-full h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: "easeOut", duration: 0.15 }}
            >
                <Card className="sm:w-[60vh] lg:w-[65vh] sm:h-[45vh] lg:h-[40vh] text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                    <CardHeader className="flex flex-col text-center justify-center items-center text-2xl text-primary-300 font-bold">
                    <div className="text-center p-4">
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-blue-500 dark:text-blue-800">Login Required</p>
                    </div>
                    <Code size="lg" color="danger" className="text-center font-bold text-zinc-800 dark:text-pink-600">403 Forbidden</Code>
                    </CardHeader>
                    <CardBody className="flex flex-wrap items-center text-center space-y-2 p-2 justify-between">
                        <div className="text-center p-4">
                            <p className="text-center p-4">
                                <Code color="danger" size="sm" className="text-center font-bold text-zinc-800 dark:text-pink-600">{error.message}</Code>
                            </p>
                            If you think this is a mistake, please contact me at <Code size="sm" className="text-zinc-800 dark:text-blue-600 font-bold cursor-pointer" color="primary" onClick={() => window.open("mailto:contact@jokerdev.xyz", "_blank")} >contact@jokerdev.xyz</Code>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-row items-center text-center justify-center gap-2">
                        <Link href="/login">
                            <Button
                                color="blue"
                                size="default"
                                rounded="md"
                                
                                
                            >
                                Sign In
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </ScrollShadow>
    );
}

// href="mailto:contact@jokerdev.xyz"