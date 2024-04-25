'use client'
import { Code } from "@nextui-org/react";
import CurrentTime from "@/components/TimeStatus";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import MessageForm from "@/components/MessageForm";
// import ContactLink from "@/components/ContactButtons";

export default function ContactComp() {
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
                    <p className="text-2xl text-bold text-center items-center justify-center text-primary-300">Contact</p>
                </h1>
                <div className="p-4 space-y-2 rounded-xl lg:rounded-xl ">
                    <p className="text-center p-4">
                        Contact me about any inquiries you may have,<br></br> I aim to response within <Code color="primary" size="sm">7 Days</Code>
                    </p>
                    <CurrentTime />
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20">
                        <MessageForm />
                        <div className="row-start-1 md:row-auto">
                        </div>
                    </div>
                </div>
            </motion.div>
        </ScrollShadow>
    );
}

