"use client"

import React from "react"
import { useI18n } from "@/context/ThemeContext"
import ProfileReveal from "./ProfileReveal"
import profile from "@/assets/profile.jpeg"

type Props = {
	id?: string
}

export default function Intro({ id }: Props) {
	const { t } = useI18n()

	return (
		<section id={id} className="flex flex-col gap-5 pt-2">
			<h1 className="font-display text-5xl md:text-6xl font-bold leading-tight tracking-tight text-(--foreground)">
				{t.intro.title}
			</h1>
			<p className="font-display italic text-xl text-(--muted) leading-snug">
				{t.intro.subtitle}
			</p>
			<hr className="border-(--border)" />
			<p className="font-serif text-base leading-[1.85] text-(--foreground) max-w-xl">
				{t.intro.description}
			</p>
			<ProfileReveal image={profile} alt="Giovanni Mugelli" />
		</section>
	)
}
