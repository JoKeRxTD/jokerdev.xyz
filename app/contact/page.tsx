'use client'
import MessageForm from "@/components/MessageForm";
import ContactLink from "@/components/ContactButtons";
import { FiMail, FiGithub, FiTwitter, FiDollarSign, FiYoutube, FiTwitch } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";
import TimeStatus from "@/components/TimeStatus";
import { Code } from "@nextui-org/react";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ ease: "easeOut", duration: 0.15 }}
			className="w-full"
		>
			<h1 className="text-center">
                    <Code color="primary" size="lg">Contact</Code>
                </h1>
			<TimeStatus/>
			<div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 mb-18">
				<MessageForm />
				<div className="row-start-1 md:row-auto">
					<ContactLink
						name="jokerxtd"
						icon={<SiDiscord className="w-5 h-5 text-[#5865F2]" />}
						link="https://discord.gg/HgasfQEJUr"
						borderColor="hover:border-[#5865F2]/50"
					/>

					<ContactLink
						name="@JoKeRxHD"
						icon={<FiTwitter className="w-5 h-5 text-[#1DA1F2]" />}
						link="https://twitter.com/JoKeRxHD"
						borderColor="hover:border-[#1DA1F2]/50"
					/>

					<ContactLink
						name="contact@jokerdev.xyz"
						icon={<FiMail className="w-5 h-5 text-secondary-400" />}
						link="mailto:contact@jokerdev.xyz"
						borderColor="hover:border-secondary-400/50"
					/>

					<ContactLink
						name="Github"
						icon={<FiGithub className="w-5 h-5 text-gray-400" />}
						link="https://github.com/jokerxtd"
						borderColor="hover:border-gray-400/50"
					/>

					<ContactLink
						name="Support"
						icon={<FiDollarSign className="w-5 h-5 text-yellow-400" />}
						link="https://github.com/jokerxtd"
						borderColor="hover:border-yellow-400/50"
					/>

					<ContactLink
						name="Youtube"
						icon={<FiYoutube className="w-5 h-5 text-red-800" />}
						link="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube-dark.svg"
						borderColor="hover:border-red-800/50"
					/>

					<ContactLink
						name="Twitch"
						icon={<FiTwitch className="w-5 h-5 text-[#6441a5]" />}
						link="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube-dark.svg"
						borderColor="hover:border-[#6441a5]/50"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
