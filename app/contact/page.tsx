'use client'
import { Code } from "@nextui-org/react";
import CurrentTime from "@/components/CurrentTime";
import { DiscordIcon, GithubIcon, HeartFilledIcon } from "@/components/icons";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import MessageComponent from "@/components/MessageForm";
import ContactLink from "@/components/ContactForm";


export default function Contact() {
	return (
		<ScrollShadow hideScrollBar className="w-full h-full space-y-6">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeOut", duration: 0.15 }}
				className="w-full h-full"
			>
				<h1 className="text-center p-4">
					<Code color="primary" size="lg">Contact</Code>
				</h1>
				<div className="p-4 space-y-2 border rounded-xl border-gray-300 dark:border-neutral-800 lg:rounded-xl lg:border">
					<p className="text-center p-4">
						Contact me about any inquiries you may have,<br></br> I aim to response within <Code color="primary" size="sm">7 Days</Code>
					</p>
					<CurrentTime />
					<div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20">
						<MessageComponent />
						<div className="row-start-1 md:row-auto">
						<ContactLink
							name="jokerxtd"
							icon={<DiscordIcon className="w-6 h-6 text-[#5865F2]" />}
							link="https://discord.com/users/116730818822537225"
							borderColor="hover:border-[#5865F2]/50"
						/>
						<ContactLink
							name="@JoKeRxHD"
							icon={<GithubIcon className="w-6 h-6 dark:text-[#fafafa] text-[#1d1d1d]" />}
							link="https://github.com/JoKeRxHD"
							borderColor="hover:border-[#fafafa]/50"
						/>
						<ContactLink
							name="contact@jokerdev.xyz"
							icon={<HeartFilledIcon className="w-6 h-6 text-[#d64444]" />}
							link="mailto:contact@jokerdev.xyz"
							borderColor="hover:border-[#d64444]/50"
						/>
						</div>
					</div>
				</div>
			</motion.div>
		</ScrollShadow>
	);
}
