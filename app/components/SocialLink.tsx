import Link from "next/link"
import React from "react"

type Props = Readonly<{
	href: string
	children: React.ReactNode
}>

export default function SocialLink({
	href,
	children,
}: Props): JSX.Element {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noreferrer"
			className="text-[var(--primary-rgb)] flex flex-row gap-2 cursor-pointer align-middle"
		>
			{children}
		</Link>
	)
}
