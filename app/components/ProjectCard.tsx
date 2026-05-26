"use client"

import Link from "next/link"
import { Post } from "@/interfaces/post"
import { useI18n } from "@/context/ThemeContext"

export default function ProjectCard({
	title,
	title_it,
	excerpt,
	excerpt_it,
	coverImage,
	tags,
	slug,
}: Post) {
	const { t, lang } = useI18n()

	const displayTitle = lang === "it" && title_it ? title_it : title
	const displayExcerpt =
		lang === "it" && excerpt_it ? excerpt_it : excerpt

	return (
		<article className="flex flex-col gap-3 group">
			<div className="flex flex-col gap-2">
				<p className="font-ui text-[10px] tracking-widest uppercase text-(--muted)">
					{tags.map((x) => x).join(" · ")}
				</p>
				<h3 className="font-display text-lg font-bold leading-snug text-(--foreground)">
					{displayTitle}
				</h3>
				<p className="font-serif text-sm leading-relaxed text-(--muted)">
					{displayExcerpt
						.substring(0, 120)
						.concat(
							displayExcerpt.length > 120 ? "…" : "",
						)}
				</p>
				<Link
					className="font-ui text-[11px] font-bold tracking-widest text-(--foreground) hover:text-(--muted) transition-colors mt-1"
					href={`/posts/${slug}`}
				>
					{t.projects.readMore}
				</Link>
			</div>
		</article>
	)
}
