"use client"

import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { useI18n } from "@/context/ThemeContext"

type Props = {
	id?: string
}

export default function Tecnologies({ id }: Props) {
	const [techs, setTechs] = useState<StaticImageData[]>([])
	const { t } = useI18n()

	useEffect(() => {
		const importAll = async () => {
			const techs = await import("@/assets/tech")
			const images: StaticImageData[] = Object.entries(
				techs,
			).map((value) => value[1] as StaticImageData)
			setTechs(images)
		}
		importAll()
	}, [])

	return (
		<section className="flex flex-col gap-6" id={id}>
			<div className="border-t border-(--border) pt-6">
				<h2 className="font-display text-3xl font-bold text-(--foreground) mb-4">
					{t.technologies.title}
				</h2>
				<p className="font-serif text-base leading-[1.85] text-(--muted)">
					{t.technologies.description}
				</p>
			</div>
			<div className="flex flex-wrap gap-8 items-center justify-start mt-2">
				{techs.map((tech, index) => (
					<Image
						key={index}
						src={tech}
						alt="Technology"
						className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
						width={32}
						height={32}
					/>
				))}
			</div>
		</section>
	)
}
