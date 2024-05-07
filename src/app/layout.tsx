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
	description: siteConfig.description,
	icons: {
		icon: "/joker_new.png",
		shortcut: "/joker_new.png",
		apple: "/joker_new.png",
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