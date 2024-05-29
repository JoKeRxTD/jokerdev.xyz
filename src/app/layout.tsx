import "@/src/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "../../config/site";
// import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import clsx from "clsx";
import type { Viewport } from 'next';
import { Inter as FontSans } from "next/font/google"
// import { Toaster } from '@/src/components/ui/toaster'
import { cn } from "@/src/utils/cn";
import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import { Toaster, toast } from 'sonner'
const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],	
}

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	openGraph: {
		title: `${siteConfig.name}`,
		description: `${siteConfig.description}`,
		url: `${siteConfig.url}`,
		siteName: `${siteConfig.name}`,
		images: [
			{
				url: `${siteConfig.ogImg}`,
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-GB",
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
		title: `${siteConfig.name}`,
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/joker_new.png",
	},
};


export default function RootLayout({ children }: React.PropsWithChildren, session: any) {
	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={cn(
					"min-h-screen bg-zinc-100 dark:bg-black text-black dark:text-gray-100 transition-colors duration-200 ease-in-out",
					fontSans.variable)}
				>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
							<div className="relative flex flex-col h-screen items-center">
								<Navbar />
								<main className="container mx-auto max-w-5xl pt-12 pb-8 px-3 flex-grow">
									<Toaster />
									{children}
								</main>
								<Footer />
							</div>
						</Providers>
				</body>
			</html>
		</SessionProvider>
	)
}
