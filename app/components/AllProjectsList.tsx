"use client"

import Link from "next/link"
import { type Post } from "@/interfaces/post"
import { useI18n } from "@/context/ThemeContext"
import DateFormatter from "./DateFormatter"

type Props = {
	posts: Post[]
}

export default function AllProjectsList({ posts }: Props) {
	const { t, lang } = useI18n()

	return (
		<section className="flex flex-col gap-6">
			<div className="border-t border-(--border) pt-6">
				<h1 className="font-display text-3xl font-bold text-(--foreground) mb-2">
					{t.projects.title}
				</h1>
				<p className="font-serif text-base leading-[1.85] text-(--muted)">
					{t.projects.description1}
				</p>
			</div>

			<ul className="flex flex-col divide-y divide-(--border) first:divide-t-0">
				{posts.map((post) => {
					const displayTitle =
						lang === "it" && post.title_it
							? post.title_it
							: post.title
					const displayExcerpt =
						lang === "it" && post.excerpt_it
							? post.excerpt_it
							: post.excerpt

					return (
						<li
							key={post.slug}
							className="py-6 flex flex-col gap-1 group"
						>
							<div className="flex items-baseline justify-between gap-4">
								<Link
									href={`/posts/${post.slug}`}
									className="font-display text-xl font-semibold leading-snug text-(--foreground) group-hover:text-(--muted) transition-colors"
								>
									{displayTitle}
								</Link>
								<span className="font-ui text-[11px] text-(--muted) shrink-0">
									<DateFormatter
										dateString={post.date}
									/>
								</span>
							</div>
							<p className="font-serif text-sm leading-relaxed text-(--muted)">
								{displayExcerpt}
							</p>
							<p className="font-ui text-[10px] tracking-widest uppercase text-(--muted) opacity-60">
								{post.tags.join(" · ")}
							</p>
						</li>
					)
				})}
			</ul>

			<div className="border-t border-(--border) pt-4">
				<Link
					href="/#projects"
					className="font-ui text-[11px] tracking-widest font-bold text-(--foreground) hover:text-(--muted) transition-colors"
				>
					←{" "}
					{lang === "it"
						? "Torna alla home"
						: "Back to home"}
				</Link>
			</div>
		</section>
	)
}
