import "@/src/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "../../config/site";
// import { fontSans } from "@/config/fonts";
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
import { ThemeProvider } from "@/src/app/providers";


const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: blue)', color: '3447003' },
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
interface RootLayoutProps {
	children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps, session: any) {

	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={cn(
					"min-h-screen antialiased transition-colors duration-200 ease-in-out",
					fontSans.variable
				)}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<main className="relative flex flex-col h-screen items-center">
							<Navbar />
								<div className="container mx-auto max-w-5xl flex-grow">
									{children}
									<Toaster />
								</div>
							<Footer />
						</main>
					</ThemeProvider>
				</body>
			</html>
		</SessionProvider>
	)
}

{/* 
<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
	<div className="inline-block text-center justify-center">
		{children}
	</div>
</section> */}
