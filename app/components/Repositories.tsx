"use client"

import React, { useEffect, useState } from "react"

type Props = {
	id?: string
}

type RepoResponse = {
	name: string
	description: string
	url: string
	html_url: string
	language: string
	updated_at: Date
	fork: boolean
	fork_url: string
}

export default function Repositories({ id }: Props): JSX.Element {
	const [repos, setRepos] = useState<RepoResponse[]>([])
	useEffect(() => {
		const fetchRepos = async () => {
			const response = await fetch(
				"https://api.github.com/users/giovamuge/repos"
			)
			const data: RepoResponse[] = await response.json()
			setRepos(data)
		}

		fetchRepos()
	}, [])

	return (
		<section className="flex flex-col gap-5" id={id}>
			<h1 className="text-3xl font-bold">Repositories</h1>
			<ul className="space-y-5">
				{repos.map((repo, index) => (
					<li
						className="hover:scale-105 transition-all hover:border-primary border-2 border-secondary px-5 py-3 text-secondary hover:text-primary flex flex-col gap-3 text-lg"
						key={index}
					>
						<a className="w-full h-full" href={repo.html_url}>
							<div className="flex flex-col gap-2">
								<label className="font-bold">
									{repo.name}
								</label>
								<p className="text-secondary font-space-mono">
									{repo.description ??
										"No description"}
								</p>
							</div>
						</a>

						{repo.fork && (
							<a
								href={repo.fork_url}
								className="font-space-mono hover:underline transition-all bg-secondary text-[var(--background-rgb)] w-fit py-1 px-3"
							>
								Forked from {repo.fork_url}{" "}
								<strong>{repo.name}</strong>
							</a>
						)}
					</li>
				))}
			</ul>
		</section>
	)
}
