import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeContextProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Giovanni Mugelli | Software Developer",
	description: "Portfolio of Giovanni Mugelli",
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
