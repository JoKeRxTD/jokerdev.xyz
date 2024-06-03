/* eslint-disable @next/next/no-img-element */
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
import { SiDiscord, SiEgghead } from "react-icons/si";
import clsx from "clsx";
import { siteConfig } from "@../../../config/site";
import { link as linkStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { User, Skeleton, Divider, Link, Tooltip, Code, Image } from "@nextui-org/react";
import { ProfileIcon, AnalyticsIcon, LinesIcon, PartnerIcon, DiscordIcon, GithubIcon, BookIcon } from "@/src/components/Icons";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "@/src/components/SignInOut";
import { Button } from "@/src/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
} from "@/src/components/ui/dropdown-menu"


export default function Navbar() {
	const {data: session} = useSession()

	const userData = session?.user;
	
	const navDropdown = [
		{ label: "Profile", href: `/user/${userData?.discordId}` },
		{ label: "Analytics", href: "/analytics" },
		{ label: "Partners", href: "/partners" },
		{ label: "Guestbook", href: "/guestbook" },
	];

	const userDropdown = [
		{ label: "Profile", href: `/user/${userData?.discordId}` },
		{ label: "Settings", href: "/settings" },
	];



	const icons = {
		profile: <ProfileIcon className="text-primary" fill="currentColor" size={24} />,
		analytics: <AnalyticsIcon className="text-warning" fill="currentColor" size={24} />,
		dropdown: <LinesIcon className="text-primary" fill="currentColor" size={24} />,
		github: <GithubIcon className="text-slate-800 dark:text-white" fill="currentColor" size={24} />,
		discord: <DiscordIcon className="text-[#7289da]" fill="currentColor" size={24} />,
		egghead: <SiEgghead className="text-primary" fill="currentColor" size={24} />,
		partner: <PartnerIcon className="text-primary text-bold" fill="currentColor" size={24} />,
		guestbook: <BookIcon className="text-orange-800 dark:text-orange-400 text-bold" fill="currentColor" size={24} />,
	};
	

	const UserBar = () => {
		if (session) {
			return (
				<div className="flex gap-2 items-center justify-center">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Avatar>
								<AvatarImage src={`https://cdn.discordapp.com/avatars/${userData?.discordId}/${userData?.avatar}.png`} />
								<AvatarFallback>{userData?.username}</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							aria-label="User Options"
							className="text-bold text-base"
						>
							<DropdownMenuSeparator />
							{userDropdown.map((item, index) => (
								<DropdownMenuItem
									key={`${item.label}-${index}`}
									onClick={() => {
										window.location.href = item.href;
									}
									}>
									{item.label}
								</DropdownMenuItem>
							))}
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<SignOut />
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		}
		return <SignIn />;
	}
	



	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="z-50 gap-2 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
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
				<div className="hidden lg:flex gap-4 text-bold text-xl">
					<DropdownMenu>
						<NavbarItem className="hidden lg:flex">
							<DropdownMenuTrigger asChild>
								<span className="flex gap-2 items-center content-center">
									Other {icons.dropdown}
								</span>
							</DropdownMenuTrigger>
						</NavbarItem>
						<DropdownMenuContent
							aria-label="Other Options"
							className="text-bold text-base"
						>
							<DropdownMenuSeparator />
							{navDropdown.map((item, index) => (
								<DropdownMenuItem
									key={`${item.label}-${index}`}
									onClick={() => {
										window.location.href = item.href;
									}
									}>
									{item.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end">
				<NavbarItem className="hidden sm:flex justify-center gap-2">
					<Skeleton className="hidden sm:flex" isLoaded={false} />
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						{icons.github}
					</Link>
					<ThemeSwitch />
					<UserBar />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4 justify-center" justify="end">
				<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
					{icons.discord}
				</Link>
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					{icons.github}
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
				<UserBar />
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
