'use client';
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/src/utils/primitives";
import { DiscordIcon, SearchIcon } from "@/src/components/Icons";
import { Image } from "@nextui-org/image";

export default function MyButtons() {
    return (
        <div className="flex gap-3">
                <Link
                    isExternal
                    as={NextLink}
                    href={siteConfig.links.docs}
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                >
                    <SearchIcon size={20} />
                    Contact 2
                </Link>
                <Link
                    isExternal
                    as={NextLink}
                    href={siteConfig.links.github}
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                >
                    <DiscordIcon size={20} />
                    Discord 2
                </Link>
            </div>
    )
}