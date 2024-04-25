'use client';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import {
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
} from "@/components/icons";
import clsx from "clsx";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button, Tooltip } from "@nextui-org/react";
import { Code } from "@nextui-org/code"; 

export default function Navbar() {
	return (
		<div>

		<NextUINavbar maxWidth="sm" position="sticky" className="top-0 z-50 border-b w-[400px] md:w-[600px] items-center text-center justify-center">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="text-2xl font-bold text-primary-300">JoKeR&nbsp;</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<span>
                    <Tooltip className="flex flex-col items-center text-center p-2 space-y-2 justify-center"
                        content={
                            <div className="flex flex-col items-center text-center p-2 space-y-2 justify-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                                <p className="text-sm font-bold text-success-300">Zap-Hosting</p>
                                <p className="text-sm font-normal text-default-600">You found an easter egg!</p>
								<p className="text-sm font-normal text-default-600">Use code&nbsp;
								<Link isExternal href="https://zap-hosting.com/joker">
								<Code color="success">eqsource-10</Code>
								</Link>
								&nbsp;for 20% off!</p>
                            </div>
                        }
                    >
                        <p
                            className="p-2 text-danger-600 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                        >
                            <HeartFilledIcon />
                        </p>
                    </Tooltip>
                </span>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
					<code className="text-center p-4 font-bold text-primary-200">Main Menu</code>
				<Divider />
				<div className="mx-6 mt-4 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`} className="text-center justify-center">
							<Link
								color="foreground"
								href={item.href}
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
		</div>
	);
}
