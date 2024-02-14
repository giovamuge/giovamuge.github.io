"use client"

import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"

type Props = {
	id?: string
}

export default function Tecnologies({ id }: Props): JSX.Element {
	const [techs, setTechs] = useState(Array<StaticImageData>())

	useEffect(() => {
		const importAll = async () => {
			const techs = await import("@/assets/tech")
			let images: StaticImageData[] = Object.entries(techs).map(
				(value) => value[1]
			)

			setTechs(images)
		}

		importAll()
	}, [])

	return (
		<div className="flex flex-col gap-5" id={id}>
			{/* <label className="text-3xl font-bold text-center">
				Tecnologie
			</label> */}

			<p className="text-secondary text-center mb-5">
				Qui una lista delle tecnologie che ho utilizzato negli
				anni.
			</p>

			<div className="flex flex-wrap gap-10 justify-center item-center">
				{techs.map((tech, index) => (
					<Image
						key={index}
						src={tech}
						alt="Image Description"
						className="md:basis-1/5 md:w-10 md:h-10 basis-1/3 w-36 h-36 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all hover:cursor-pointer"
					/>
				))}
			</div>
		</div>
	)
}
