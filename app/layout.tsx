import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeContextProvider } from "@/context/ThemeContext"
import Head from "next/head"
import Gtag from "./components/Gtag"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
// 	title: "Giovanni Mugelli | Software Developer",
// 	description: "Portfolio of Giovanni Mugelli",
// }

export const metadata: Metadata = {
	metadataBase: new URL("https://giovamuge.github.io"),
	title: "Giovanni Mugelli | Software Developer",
	description: "Portfolio of Giovanni Mugelli",
	openGraph: {
		title: "Giovanni Mugelli | Software Developer",
		description: "Portfolio of Giovanni Mugelli",
		images: [
			{
				url: "https://giovamuge.github.io/social.jpg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@giovamuge",
		title: "Giovanni Mugelli | Software Developer",
		description: "Portfolio of Giovanni Mugelli",
		images: [
			{
				url: "https://giovamuge.github.io/social.jpg",
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Head>
				<Gtag />
			</Head>
			<ThemeContextProvider>
				<body className={inter.className}>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-MQMVBV4W"
							height="0"
							width="0"
							style={{
								display: "none",
								visibility: "hidden",
							}}
						></iframe>
					</noscript>

					{children}
				</body>
			</ThemeContextProvider>
		</html>
	)
}
