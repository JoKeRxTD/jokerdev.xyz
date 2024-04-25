'use client';
import { Link } from "@nextui-org/link";
import { DiscordIcon, SearchIcon, GithubIcon, HeartFilledIcon } from "@/components/Icons";
import { Tooltip, Button } from "@nextui-org/react";
// import  PageAds  from "@/components/pageAds" 

export default function Footer() {
    return (
        <footer className="flex flex-col flex-wrap justify-center items-center gap-1 p-1 text-[#fafafa] dark:text-[#fafafa]">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://discord.gg/Q6ZSW63Fpw"
                title="my personal discord server"
            >
                <span className="text-default-600">Copyright © • 2022 Created By </span>
                <p className="text-primary">JoKeR</p>
            </Link>
            <div className="flex flex-row flex-wrap justify-center items-center gap-1 p-1 text-[#fafafa] dark:text-[#fafafa]">
					<Button
						href="#"
						variant="flat"
						color="primary"
						isIconOnly
					>
						<DiscordIcon />
					</Button>
					<Button
						href="#"
						variant="flat"
						color="default"
						isIconOnly
					>
						<GithubIcon />
					</Button>
					<Button
						href="#"
						variant="flat"
						color="danger"
						isIconOnly
					>
						<HeartFilledIcon />
					</Button>
				</div>
        </footer>
    )
}