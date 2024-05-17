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
import { ProfileIcon, AnalyticsIcon, LinesIcon, PartnerIcon, DiscordIcon, GithubIcon, BookIcon } from "@/src/components/Icons";
import DiscordWidget from "@/src/components/DiscordWidget";


// list of items to place in drop down with label & link
const navDropdown = [
	{ label: "Profile", href: "/user-profile" },
	{ label: "Analytics", href: "/analytics" },
];

export default function Navbar() {

	const icons = {
		profile: <ProfileIcon className="text-primary" fill="currentColor" size={24} />,
		analytics: <AnalyticsIcon className="text-warning" fill="currentColor" size={24} />,
		dropdown: <LinesIcon className="text-primary" fill="currentColor" size={24} />,
		github: <GithubIcon className="text-slate-800 dark:text-white" fill="currentColor" size={24} />,
		discord: <DiscordIcon className="text-[#7289da]" fill="currentColor" size={24} />,
		egghead: <SiEgghead className="text-primary" fill="currentColor" size={24} />,
		partner: <PartnerIcon className="text-primary text-bold" fill="currentColor" size={24} />,
		guestbook: <BookIcon className="text-primary text-bold" fill="currentColor" size={12} />,
	};

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="top-0 w-[100%] z-50 border border-zinc-500 dark:border-zinc-800">
			<NavbarContent className="basis-1/5 sm:basis-full ml-2 gap-2 justify-center items-center text-bold text-base">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link className="flex justify-start items-center gap-1" href="/">
						<h1 className="text-2xl font-bold text-primary-300">JoKeR</h1>
					</Link>
				</NavbarBrand>
				<div className="hidden lg:flex gap-4 justify-start ml-2 text-bold text-xl">
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
				</div>
				<Dropdown className="sm:hidden lg:flex gap-4 justify-start ml-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
					<NavbarItem className="hidden lg:flex">
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
						className="w-[300px] text-bold text-base"
						itemClasses={{
							base: "gap-2",
						}}>
						<DropdownItem
							key="profile"
							description='Tom "JoKeR" area to manage the site'
							startContent={icons.profile}
							onClick={() => {
								window.location.href = "/user-profile";
							}}>
							Dashboard
						</DropdownItem>
						<DropdownItem
							key="analytics"
							description="View the analytics of the site."
							startContent={icons.analytics}
							onClick={() => {
								window.location.href = "/analytics";
							}}>
							Analytics
						</DropdownItem>
						<DropdownItem
							key="partners"
							description="My partners and sponsors."
							startContent={icons.partner}
							onClick={() => {
								window.location.href = "/partners";
							}}>
							Partners
						</DropdownItem>
						{/* <DropdownItem
							key="guestbook"
							description="Sign my guestbook."
							startContent={icons.guestbook}
							onClick={() => {
								window.location.href = "/guestbook";
							}}>
							Guestbook
						</DropdownItem> */}
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Skeleton className="hidden sm:flex" isLoaded={false} />
					<DiscordWidget />
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						{icons.github}
					</Link>
					<ThemeSwitch />
					<UserButton />
					<OrganizationSwitcher/>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
					{icons.discord}
				</Link>
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					{icons.github}
				</Link>
				<ThemeSwitch />
				<OrganizationSwitcher/>
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
	);
}
