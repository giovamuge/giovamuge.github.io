export type Language = "en" | "it"

// Helper to convert a deeply-nested object's leaf values to string
type Stringify<T> = {
	readonly [K in keyof T]: T[K] extends string
		? string
		: Stringify<T[K]>
}

export const translations = {
	en: {
		nav: {
			home: "giovamuge.dev",
			about: "About",
			projects: "Projects",
			technologies: "Technologies",
			repositories: "Open Source",
			contact: "Contact",
		},
		intro: {
			title: "Giovanni Mugelli",
			subtitle: "Software Developer",
			description:
				"Relationships, music, and ideas are what define me. Since 2014, I have grown within innovative and youthful environments, with a charismatic, creative, dynamic, and peaceful approach. I believe in building projects that carry a positive social impact.",
		},
		projects: {
			title: "Projects",
			description1:
				"To express creativity while continuously learning, I develop personal projects — ideas that emerge and evolve over time.",
			description2:
				"Below are selected projects from recent years. Some may be dated, others deliberately simple. What I aim to showcase is how I approach software architecture, UX and design, and diverse technology stacks.",
			empty: "No projects to display.",
			readMore: "Read more →",
			seeAll: "All projects →",
		},
		technologies: {
			title: "Technologies",
			description:
				"A selection of technologies I have worked with over the years.",
		},
		repositories: {
			title: "Open Source",
			description:
				"A selection of public repositories from my GitHub profile.",
			noDescription: "No description available.",
			forkedFrom: "Forked from",
			viewOn: "View on GitHub →",
		},
		contact: {
			title: "Get in Touch",
			description:
				"If you have reached this far, you are probably looking for a way to connect. Feel free to reach out via",
			or: "or by email at",
		},
		footer: {
			contact: "Contact",
			social: "Follow",
			tagline:
				"Giovanni Mugelli · Freelance software developer specializing in Flutter, Angular, React, .NET Core, TypeScript, Svelte, and Swift. Full-stack developer.",
			rights: "All rights reserved.",
		},
	},
	it: {
		nav: {
			home: "giovamuge.dev",
			about: "Chi sono",
			projects: "Progetti",
			technologies: "Tecnologie",
			repositories: "Open Source",
			contact: "Contatti",
		},
		intro: {
			title: "Giovanni Mugelli",
			subtitle: "Software Developer",
			description:
				"Relazioni, musica e idee sono ciò che mi definisce. Dal 2014 sono cresciuto in realtà innovative e giovanili, con stile carismatico, creativo, dinamico e pacifico. Credo nello sviluppo e realizzazione di progetti che abbiano un impatto sociale positivo.",
		},
		projects: {
			title: "Progetti",
			description1:
				"Per esprimere la mia creatività e aggiornarmi continuamente, realizzo vari progetti personali sviluppando idee che nascono e crescono nel tempo.",
			description2:
				"Qui riporto alcuni progetti realizzati negli anni. Alcuni saranno obsoleti, altri fin troppo semplici, ma l'obiettivo è mostrare come applico architettura software, UX e design, e vari stack tecnologici.",
			empty: "Nessun progetto da mostrare.",
			readMore: "Continua a leggere →",
			seeAll: "Tutti i progetti →",
		},
		technologies: {
			title: "Tecnologie",
			description:
				"Una selezione delle tecnologie che ho utilizzato negli anni.",
		},
		repositories: {
			title: "Open Source",
			description:
				"Una selezione di repository pubblici dal mio profilo GitHub.",
			noDescription: "Nessuna descrizione disponibile.",
			forkedFrom: "Fork di",
			viewOn: "Vedi su GitHub →",
		},
		contact: {
			title: "Contatti",
			description:
				"Se sei arrivato fin qui, probabilmente stai cercando un modo per metterti in contatto con me. Puoi scrivermi su",
			or: "o via email a",
		},
		footer: {
			contact: "Contatti",
			social: "Social",
			tagline:
				"Giovanni Mugelli · Freelance software developer specializzato in Flutter, Angular, React, .NET Core, TypeScript, Svelte e Swift. Fullstack developer.",
			rights: "Tutti i diritti riservati.",
		},
	},
} as const

export type Translations = Stringify<(typeof translations)["en"]>
