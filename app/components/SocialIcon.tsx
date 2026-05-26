import React from "react"

// import socialIcons from "@/public/social-icons.svg"

type Props = {
	className?: string
	name: string
	width?: number
	height?: number
}

export default function SocialIcon({
	className = "",
	width = 22,
	height = 16,
	name,
}: Props): React.ReactElement {
	return (
		<svg
			className={className}
			aria-hidden="true"
			width={width}
			height={height}
		>
			<use xlinkHref={`/social-icons.svg#${name}`}></use>
		</svg>
	)
}
