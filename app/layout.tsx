import type { Metadata } from "next"
import { Playfair_Display, Lora, Inter } from "next/font/google"
import "./globals.css"
import { I18nProvider } from "@/context/ThemeContext"
import Gtag from "./components/Gtag"

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

const BASE_URL = "https://giovamuge.github.io"
const OG_IMAGE = `${BASE_URL}/social.jpg`
const DESCRIPTION =
	"Portfolio and blog of Giovanni Mugelli — freelance software developer specialising in Flutter, Angular, React, .NET Core, and Swift. Based in Italy."

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	applicationName: "Giovanni Mugelli",
	title: {
		default: "Giovanni Mugelli | Software Developer",
		template: "%s | Giovanni Mugelli",
	},
	description: DESCRIPTION,
	keywords: [
		"Giovanni Mugelli",
		"software developer",
		"Flutter",
		"Angular",
		"React Native",
		"Next.js",
		".NET Core",
		"Swift",
		"iOS",
		"freelance",
		"Italy",
	],
	authors: [{ name: "Giovanni Mugelli", url: BASE_URL }],
	creator: "Giovanni Mugelli",
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
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		type: "website",
		url: BASE_URL,
		siteName: "Giovanni Mugelli",
		locale: "en_US",
		title: "Giovanni Mugelli | Software Developer",
		description: DESCRIPTION,
		images: [
			{
				url: OG_IMAGE,
				width: 1200,
				height: 630,
				alt: "Giovanni Mugelli — Software Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@giovamuge",
		creator: "@giovamuge",
		title: "Giovanni Mugelli | Software Developer",
		description: DESCRIPTION,
		images: [OG_IMAGE],
	},
	other: {
		"google-site-verification":
			"Ri-3IpOOr9_k3rfFLPZdBpgV_x6VFMsPasUdTGLwKI8",
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${playfair.variable} ${lora.variable} ${inter.variable}`}
		>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "Person",
									"@id": `${BASE_URL}/#person`,
									name: "Giovanni Mugelli",
									url: BASE_URL,
									image: `${BASE_URL}/blog/authors/giovamuge.jpeg`,
									jobTitle: "Software Developer",
									description:
										"Freelance software developer specialising in Flutter, Angular, React, .NET Core, and Swift.",
									sameAs: [
										"https://github.com/giovamuge",
										"https://twitter.com/giovamuge",
									],
								},
								{
									"@type": "WebSite",
									"@id": `${BASE_URL}/#website`,
									url: BASE_URL,
									name: "Giovanni Mugelli",
									description:
										"Portfolio and blog of Giovanni Mugelli",
									publisher: {
										"@id": `${BASE_URL}/#person`,
									},
									inLanguage: "en-US",
								},
							],
						}),
					}}
				/>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-MQMVBV4W"
						height="0"
						width="0"
						style={{
							display: "none",
							visibility: "hidden",
						}}
					/>
				</noscript>
				<Gtag />
				<I18nProvider>{children}</I18nProvider>
			</body>
		</html>
	)
}
