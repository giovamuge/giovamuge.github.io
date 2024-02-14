import React from "react"

type Props = {
	id?: string
}

export default function Contact({ id }: Props): JSX.Element {
	return (
		<div id={id} className="flex flex-col gap-5">
			<div className="flex flex-col gap-3 text-center">
				<h1 className="font-bold text-3xl">Contatti</h1>
				<p className="text-2xl font-space-mono">
					Ciao se sei arrivato fin qui probabilmente stai
					anche cercando una via per metterti in contatto
					con me. Ti ringrazio fin da subito puoi scrivermi
					su&nbsp;
				</p>
				<a
					href="https://www.linkedin.com/giovamuge/"
					target="_blank"
					rel="noreferrer"
					className="text-primary text-center font-bold w-full underline"
				>
					LinkedIn
				</a>
				<a
					className="font-space-mono font-bold md:text-2xl underline"
					href="mailto:mugelli.giovanni@gmail.com"
				>
					mugelli.giovanni@gmail.com
				</a>
			</div>
		</div>
	)
}
