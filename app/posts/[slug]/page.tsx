import { getAllPosts, getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Container from "../../components/Container"
import Header from "../../components/Header"
import PostHeader from "../../components/PostHeader"
import { PostBody } from "../../components/PostBody"

export default async function Post({ params }: Params) {
	const post = getPostBySlug(params.slug)

	if (!post) {
		return notFound()
	}

	const content = await markdownToHtml(post.content || "")

	return (
		<main>
			{/* <Alert preview={post.preview} /> */}
			<Container>
				<Header />
				<article className="mb-32">
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
					/>
					<PostBody content={content} />
				</article>
			</Container>
		</main>
	)
}

type Params = {
	params: {
		slug: string
	}
}

export function generateMetadata({ params }: Params): Metadata {
	const post = getPostBySlug(params.slug)

	if (!post) {
		return notFound()
	}

	const title = `${post.title} | Blog by Giovanni Mugelli`

	return {
		openGraph: {
			title,
			images: [post.ogImage.url],
		},
	}
}

export async function generateStaticParams() {
	const posts = getAllPosts()

	return posts.map((post) => ({
		slug: post.slug,
	}))
}
