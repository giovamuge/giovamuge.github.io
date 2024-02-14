import React from "react"
import ProjectCard from "./ProjectCard"
import { StaticImageData } from "next/image"
import { type Post } from "@/interfaces/post"

type Props = {
	id?: string
	items?: Post[]
}

export default function Project({ items, id }: Props): JSX.Element {
	return (
		<>
			<div className="flex flex-col gap-5" id={id}>
				<h1 className="text-3xl font-bold">Progetti</h1>

				<p className="text-secondary font-space-mono">
					Per poter esprimere la mia creatività e nel
					contempo studiare e aggiornarmi continuamente,
					realizzo vari progetti personali sviluppando tutta
					una serie di idee che in momenti di noia nascono e
					crescono.
				</p>

				<p className="text-secondary font-space-mono">
					Qui riporto alcuni progetti realizzati negli anni,
					alcuni sarnno obsoleti, altri fin troppo semplici,
					ma la cosa che desidero riportare in questo
					portfolio è come applico architettura software, ux
					e design, e vari stack tecnologici.
				</p>

				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-5">
					{(items &&
						items.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))) ?? <p>Nessun progetto da mostrare</p>}
				</div>
			</div>
		</>
	)
}
