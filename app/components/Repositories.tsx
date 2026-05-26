"use client"

import React, { useEffect, useState } from "react"
import { useI18n } from "@/context/ThemeContext"

type Props = {
	id?: string
}

type RepoResponse = {
	name: string
	description: string
	html_url: string
	language: string
	updated_at: string
	fork: boolean
	parent?: { full_name: string; html_url: string }
}

export default function Repositories({ id }: Props) {
	const [repos, setRepos] = useState<RepoResponse[]>([])
	const { t } = useI18n()

	useEffect(() => {
		const fetchRepos = async () => {
			const response = await fetch(
				"https://api.github.com/users/giovamuge/repos?sort=updated&per_page=12",
			)
			if (!response.ok) return
			const data: RepoResponse[] = await response.json()
			setRepos(data.filter((r) => !r.fork))
		}
		fetchRepos()
	}, [])

	return (
		<section className="flex flex-col gap-6" id={id}>
			<div className="border-t border-(--border) pt-6">
				<h2 className="font-display text-3xl font-bold text-(--foreground) mb-4">
					{t.repositories.title}
				</h2>
				<p className="font-serif text-base leading-[1.85] text-(--muted)">
					{t.repositories.description}{" "}
					<a
						href="https://github.com/giovamuge"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2 hover:text-(--foreground) transition-colors"
					>
						github.com/giovamuge
					</a>
				</p>
			</div>
			<ul>
				{repos.map((repo, index) => (
					<li
						key={index}
						className="py-5 border-t border-(--border)"
					>
						<a
							href={repo.html_url}
							target="_blank"
							rel="noreferrer"
							className="group flex flex-col gap-1"
						>
							<div className="flex items-baseline gap-3 justify-between">
								<h3 className="font-display font-semibold text-(--foreground) group-hover:text-(--muted) transition-colors">
									{repo.name}
								</h3>
								{repo.language && (
									<span className="font-ui text-[10px] tracking-widest uppercase text-(--muted) shrink-0">
										{repo.language}
									</span>
								)}
							</div>
							<p className="font-serif text-sm leading-relaxed text-(--muted)">
								{repo.description ??
									t.repositories.noDescription}
							</p>
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}
