import profile from "@/assets/profile.jpeg"
import Intro from "@/app/components/Intro"
import Footer from "@/app/components/Footer"
import Project from "@/app/components/Project"
import Navbar from "./components/Navbar"
import { StaticImageData } from "next/image"
import Tecnologies from "@/app/components/Tecnologies"
import Repositories from "./components/Repositories"
import Contact from "./components/Contact"
import Container from "./components/Container"
import { getAllPosts } from "@/lib/api"

export default function Home() {
	const allPosts = getAllPosts()

	// const heroPost = allPosts[0];

	// const morePosts = allPosts.slice(1);

	// @ts-ignore
	// const projects: [
	// 	{
	// 		title: string
	// 		tags: Array<string>
	// 		description: string
	// 		image: string | StaticImageData
	// 		url?: string | undefined
	// 	}
	// ] = [
	// 	{
	// 		title: "Giovanni Mugelli",
	// 		tags: ["portfolio", "website"],
	// 		description: "Portfolio of Giovanni Mugelli",
	// 		image: profile,
	// 		url: "https://giovamuge.dev",
	// 	},
	// 	{
	// 		title: "Giovanni Mugelli",
	// 		tags: ["portfolio", "website"],
	// 		description: "Portfolio of Giovanni Mugelli",
	// 		image: profile,
	// 		url: "https://giovamuge.dev",
	// 	},
	// ]

	return (
		<>
			<main>
				<div className="flex flex-col min-w-full max-w-full items-center justify-center">
					<Navbar />
					
					{/* <!-- Sections -->  */}
					<div className="flex flex-col max-w-2xl max-md:px-3 gap-36 mb-36">
						<Intro
							id="intro"
							title="Giovanni Mugelli"
							subtitle="Software Developer"
							image={profile}
							description="Relazioni, musica e idee sono ciò che mi
						definisce. Dal 2014 sono cresciuto in realtà
						innovative e giovanili, con stile carismatico,
						creativo, dinamico e pacifico. Credo nello
						sviluppo e realizzazione di progetti che
						abbiano un impatto sociale positivo"
						/>

						<Project id="projects" items={allPosts} />

						<Tecnologies id="technologies" />

						<Repositories id="repos" />

						<Contact id="contact" />
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}
