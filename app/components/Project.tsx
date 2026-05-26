"use client"

import React from "react"
import Link from "next/link"
import ProjectCard from "./ProjectCard"
import { type Post } from "@/interfaces/post"
import { useI18n } from "@/context/ThemeContext"

const PREVIEW_COUNT = 2

type Props = {
	id?: string
	items?: Post[]
}

export default function Project({ items, id }: Props) {
	const { t } = useI18n()
	const preview = items?.slice(0, PREVIEW_COUNT) ?? []

	return (
		<section className="flex flex-col gap-6" id={id}>
			<div className="border-t border-(--border) pt-6">
				<h2 className="font-display text-3xl font-bold text-(--foreground) mb-5">
					{t.projects.title}
				</h2>
				<p className="font-serif text-base leading-[1.85] text-(--muted) mb-3">
					{t.projects.description1}
				</p>
				<p className="font-serif text-base leading-[1.85] text-(--muted)">
					{t.projects.description2}
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 mt-2">
				{preview.length > 0 ? (
					preview.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))
				) : (
					<p className="font-serif text-(--muted) col-span-2">
						{t.projects.empty}
					</p>
				)}
			</div>

			{items && items.length > PREVIEW_COUNT && (
				<div className="flex flex-row mt-3">
					<Link
						href="/projects"
						className="font-ui font-bold text-[11px] underline tracking-widest text-(--foreground) hover:text-(--muted) transition-colors"
					>
						{t.projects.seeAll}
					</Link>
				</div>
			)}
		</section>
	)
}
