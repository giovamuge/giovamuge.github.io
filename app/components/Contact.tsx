"use client"

import React from "react"
import { useI18n } from "@/context/ThemeContext"

type Props = {
	id?: string
}

export default function Contact({ id }: Props) {
	const { t } = useI18n()

	return (
		<section id={id} className="flex flex-col gap-6">
			<div className="border-t border-(--border) pt-6">
				<h2 className="font-display text-3xl font-bold text-(--foreground) mb-5">
					{t.contact.title}
				</h2>
				<p className="font-serif text-base leading-[1.85] text-(--foreground)">
					{t.contact.description}{" "}
					<a
						href="https://www.linkedin.com/in/giovamuge/"
						target="_blank"
						rel="noreferrer"
						className="underline underline-offset-4 decoration-(--border) hover:decoration-(--foreground) transition-all"
					>
						LinkedIn
					</a>
					, {t.contact.or}{" "}
					<a
						href="mailto:mugelli.giovanni@gmail.com"
						className="underline underline-offset-4 decoration-(--border) hover:decoration-(--foreground) transition-all"
					>
						mugelli.giovanni@gmail.com
					</a>
					.
				</p>
			</div>
		</section>
	)
}
