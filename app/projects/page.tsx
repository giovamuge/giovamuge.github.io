import { getAllPosts } from "@/lib/api"
import { Metadata } from "next"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Container from "../components/Container"
import AllProjectsList from "../components/AllProjectsList"

export const metadata: Metadata = {
	title: "Projects",
	description:
		"All projects by Giovanni Mugelli — personal and professional software projects built over the years.",
	alternates: {
		canonical: "https://giovamuge.github.io/projects",
	},
}

export default function ProjectsPage() {
	const allPosts = getAllPosts()

	return (
		<>
			<main>
				<Navbar />
				<Container>
					<AllProjectsList posts={allPosts} />
				</Container>
			</main>
			<Footer />
		</>
	)
}
