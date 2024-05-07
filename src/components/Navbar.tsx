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
import { FiGithub } from "react-icons/fi";
import { SiDiscord, SiEgghead } from "react-icons/si";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { link as linkStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, User, Skeleton, Divider, Link, Tooltip, Code } from "@nextui-org/react";
import { ProfileIcon, AnalyticsIcon, LinesIcon } from "@/src/components/Icons";



// list of items to place in drop down with label & link
const navDropdown = [
	{ label: "Profile", href: "/user-profile" },
	{ label: "Analytics", href: "/analytics" },
];

export default function Navbar() {

	const icons = {
		profile: <ProfileIcon className="text-primary" fill="currentColor" size={18} />,
		analytics: <AnalyticsIcon className="text-warning" fill="currentColor" size={18} />,
		dropdown: <LinesIcon className="text-primary" fill="currentColor" size={16} />
	};
	return (
		<NextUINavbar maxWidth="lg" position="sticky" className="top-0 w-[100%] z-50 bg-white dark:bg-black/90 border-b border-gray-200 dark:border-gray-800">
			<NavbarContent className="basis-1/5" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link className="flex justify-start items-center gap-1" href="/">
						<p className="text-2xl font-bold text-primary-300">JoKeR</p>
					</Link>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium data-[active=true]:border-white data-[active=true]:border-b-2"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</Link>

						</NavbarItem>
					))}
					<Dropdown
						type="listbox"
						className="hidden lg:flex gap-4 justify-start ml-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
						<NavbarItem>
							<DropdownTrigger>
								<Button
									key="dropdown"
									disableRipple
									className="p-0 bg-transparent data-[hover=true]:bg-transparent"
									endContent={icons.dropdown}
									radius="sm"
									variant="light"
								>
									Other
								</Button>
							</DropdownTrigger>
						</NavbarItem>
						<DropdownMenu
							aria-label="Other Options"
							className="w-[300px]"
							itemClasses={{
								base: "gap-2",
							}}>
							<DropdownItem
								key="profile"
								description="View and manage your data freely"
								startContent={icons.profile}
								// href="/user-profile"
								onPress={() => {
									window.location.href = "/user-profile";
								}}>
								Profile
							</DropdownItem>
							<DropdownItem
								key="analytics"
								description="Real-time Analytics for your app."
								startContent={icons.analytics}
								// href="/analytics"
								onPress={() => {
									window.location.href = "/analytics";
								}}>
								Analytics
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<SiDiscord className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<FiGithub className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<Skeleton className="hidden sm:flex" isLoaded={false} />
				<OrganizationSwitcher />
				<UserButton />
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<FiGithub className="text-default-500" />
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
				<Divider />
				<NavbarMenuItem className="text-center justify-center">
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
						}>
						<p className="sm:w-1vh sm:items-center sm:text-center sm:justify-center p-2 text-md lg:text-lg text-blue-600 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200">
							<SiEgghead />
						</p>
					</Tooltip>
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar>
	);
}
