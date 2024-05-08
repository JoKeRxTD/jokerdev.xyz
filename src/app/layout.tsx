import "@/src/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import clsx from "clsx"; 
import type { Viewport } from 'next';
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

export const viewport: Viewport = { 
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	openGraph: {
		title: "jokerdev.xyz",
		description: "This is the official website of JoKeR. Here you can find all the information about the projects, partners and the developer.",
		url: "https://jokerdev.xyz",
		siteName: "jokerdev.xyz",
		images: [
		{
			url: "https://cdn.mythbot.org/img/dev_4p38wqnd.png",
			width: 1920,
			height: 1080,
		},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
		  index: true,
		  follow: true,
		  "max-video-preview": -1,
		  "max-image-preview": "large",
		  "max-snippet": -1,
		},
	  },
	  twitter: {
		title: "Tom 'JoKeR'",
		card: "summary_large_image",
	  },
	  icons: {
		shortcut: "/joker_new.png",
	  },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider 
		appearance={{
			baseTheme: dark
		}}
		>
			<html lang="en" suppressHydrationWarning>
				<body
					className={clsx(
						"backdrop-blur-md dark:bg-black dark:text-white bg-white text-black font-sans",
						fontSans
					)}
				>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						<div className="relative flex flex-col h-screen items-center">
							<Navbar />
							<main className="container mx-auto max-w-5xl pt-12 px-3 flex-grow">
								{children}
							</main>
							<Footer />
						</div>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
