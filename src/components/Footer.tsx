'use client';
import { Link } from "@nextui-org/link";
import { DiscordIcon, SearchIcon, GithubIcon, HeartFilledIcon, ZapHostingIcon } from "@/src/components/Icons";
import { Tooltip, Button } from "@nextui-org/react";
// import  PageAds  from "@/components/pageAds" 

export default function Footer() {
    return (
        <footer className="flex flex-col w-[100%] flex-wrap justify-center items-center gap-1 p-1 z-50 bg-zinc-900/25 dark:bg-zinc-900/25 text-zinc-800 dark:text-zinc-800">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://discord.gg/Q6ZSW63Fpw"
                title="my personal discord server"
            >
                <span className="text-default-600">Copyright © • 2022 Created By </span>
                <span className="text-primary">JoKeR</span>
            </Link>
            <div className="flex flex-row flex-wrap justify-center items-center gap-1 p-1 text-zinc-200 dark:text-zinc-800/30">
					<Button
						variant="flat"
						color="primary"
						isIconOnly
						onClick={() => window.location.href = "https://discord.gg/HgasfQEJUr"}
					>
						<DiscordIcon />
					</Button>
					<Button
						variant="flat"
						color="default"
						isIconOnly
						onClick={() => window.location.href = "https://github.com/jokerxtd"}
					>
						<GithubIcon />
					</Button>
					<Button
						variant="flat"
						color="danger"
						isIconOnly
						onClick={() => window.location.href = "https://www.paypal.com/paypalme/VisionG?country.x=GB&locale.x=en_GB"}
					>
						<HeartFilledIcon />
					</Button>
					<Button
						variant="flat"
						color="success"
						isIconOnly
						onClick={() => window.location.href = "https://zap-hosting.com/joker"}
					>
						<ZapHostingIcon />
					</Button>
				</div> 
        </footer>
    )
}