import React from "react"
import Image, { StaticImageData } from "next/image"

type Props = {
	id?: string
	title: string
	subtitle: string
	description: string
	image: StaticImageData
}

export default function Intro({
	id,
	title,
	subtitle,
	description,
	image,
}: Props): JSX.Element {
	return (
		<div className="flex flex-row gap-5 max-md:flex-col" id={id}>
			<div className="border-t-primary border-t-8">
				<Image
					src={image}
					className="object-cover h-full w-auto grayscale"
					alt="Picture of the author"
					placeholder="blur"
					priority={true}
				/>
			</div>
			<div className="flex flex-col space-y-5">
				<div className="text-7xl font-bold font-league-spartan">
					{title}
				</div>
				<div className="text-4xl font-league-spartan">
					{subtitle}
				</div>
				<div className="text-xl font-space-mono">
					{description}
				</div>
			</div>
		</div>
	)
}
