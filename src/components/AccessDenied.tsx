'use client'
import { CardFooter, Code } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function AccessDenied() {
    return (
        <ScrollShadow hideScrollBar className="w-full h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: "easeOut", duration: 0.15 }}
            >
                <Card className="w-[65vh] h-[50vh] text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                    <h1 className="text-center p-4">
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Access Denied</p>
                    </h1>
                    <div className="p-4 space-y-2 rounded-xl lg:rounded-xl ">
                        <Code color="danger" size="lg" className='mb-4'>403 Forbidden</Code>
                        <p className="text-center p-4">
                            You do not have permission to view this page.
                        </p>
                    </div>
                    <CardFooter className="flex flex-row justify-center gap-2 ">
                        <Button
                            color="default"
                            className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </CardFooter>
                </Card>

            </motion.div>
        </ScrollShadow>
    );
}

