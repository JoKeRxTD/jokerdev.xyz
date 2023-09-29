export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "JoKeR",
	description: "JoKeR's personal website",
	lang: "en",
	locale: "en_GB",
	url: "https://jokerdev.xyz",
	ogImg: "https://jokerdev.xyz/images/og.png",
	twitterImg: "https://jokerdev.xyz/images/twitter.png",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Partners",
			href: "/partners",
		},
		{
			label: "Contact",
			href: "/contact",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Contact",
			href: "/contact",
		},
	],
	links: {
		github: "https://github.com/JoKeRxTD",
		twitter: "https://twitter.com/JoKeRxTD",
		docs: "https://jk-scripts.gitbook.io",
		discord: "https://discord.gg/Q6ZSW63Fpw",
    	sponsor: "https://www.paypal.com/paypalme/VisionG?country.x=GB&locale.x=en_GB"
	},
};
