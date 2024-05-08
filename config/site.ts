export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Tom "JoKeR"',
	description: "This is the official website of JoKeR. Here you can find all the information about the projects, partners and the developer.",
	lang: "en",
	locale: "en_GB",
	url: "https://jokerdev.xyz",
	ogImg: "https://i.imgur.com/ajmsHR5.jpeg",
	twitterImg: "https://i.imgur.com/ajmsHR5.jpeg",
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
			label: "About",
			href: "/about",
		},
		
		{
			label: "Contact",
			href: "/contact",
		},
		// {
		// 	label: "Analytics",
		// 	href: "/analytics",
		// },
		// {
		// 	label: "Profile",
		// 	href: "/user-profile",
		// },
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
			label: "Partners",
			href: "/partners",
		},
		{
			label: "About Me",
			href: "/about",
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "Analytics",
			href: "/analytics",
		},
		{
			label: "Dashboard",
			href: "/user-profile",
		},
	],
	links: {
		github: "https://github.com/JoKeRxTD",
		twitter: "https://twitter.com/JoKeRxTD",
		docs: "https://jk-scripts.gitbook.io",
		discord: "https://discord.gg/Q6ZSW63Fpw",
    	sponsor: "https://www.paypal.com/paypalme/VisionG?country.x=GB&locale.x=en_GB"
	},
	usernames: {
		github: "JoKeRxTD",
		twitter: "JoKeRxTD",
		discord: "JoKeRxTD",
	},
};
