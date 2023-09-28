'use client';
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, SearchIcon, GithubIcon, HeartFilledIcon } from "@/components/icons";
import { Image } from "@nextui-org/image"
import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";

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

// Compare this snippet from components/CurrentTime.tsx: