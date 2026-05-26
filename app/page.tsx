import Intro from "@/app/components/Intro"
import Footer from "@/app/components/Footer"
import Project from "@/app/components/Project"
import Navbar from "./components/Navbar"
import Tecnologies from "@/app/components/Tecnologies"
import Repositories from "./components/Repositories"
import Contact from "./components/Contact"
import { getAllPosts } from "@/lib/api"

export default function Home() {
	const allPosts = getAllPosts()

	return (
		<>
			<main>
				<Navbar />
				<div className="max-w-editorial mx-auto px-4 lg:px-0 flex flex-col gap-24 mb-24">
					<Intro id="intro" />
					<Project id="projects" items={allPosts} />
					<Tecnologies id="technologies" />
					<Repositories id="repos" />
					<Contact id="contact" />
				</div>
			</main>
			<Footer />
		</>
	)
}
