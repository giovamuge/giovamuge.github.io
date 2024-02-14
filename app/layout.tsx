import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeContextProvider } from "@/context/ThemeContext"

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
			<ThemeContextProvider>
				<body className={inter.className}>{children}</body>
			</ThemeContextProvider>
		</html>
	)
}
