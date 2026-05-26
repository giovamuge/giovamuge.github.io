import { getAllPosts, getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Container from "../../components/Container"
import Header from "../../components/Header"
import PostHeader from "../../components/PostHeader"
import BilingualPostBody from "../../components/BilingualPostBody"

type Params = {
	params: Promise<{ slug: string }>
}

const BASE_URL = "https://giovamuge.github.io"

export default async function Post({ params }: Params) {
	const { slug } = await params
	const post = getPostBySlug(slug)

	if (!post) {
		return notFound()
	}

	const content_en = await markdownToHtml(post.content || "")
	const content_it = await markdownToHtml(
		post.content_it || post.content || "",
	)
	const imageUrl = post.ogImage?.url
		? post.ogImage.url.startsWith("http")
			? post.ogImage.url
			: `${BASE_URL}${post.ogImage.url}`
		: `${BASE_URL}/social.jpg`
	const postUrl = `${BASE_URL}/posts/${slug}`

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.excerpt,
		image: imageUrl,
		datePublished: post.date,
		dateModified: post.date,
		url: postUrl,
		author: {
			"@type": "Person",
			"@id": `${BASE_URL}/#person`,
			name: post.author.name,
			url: BASE_URL,
		},
		publisher: {
			"@type": "Person",
			"@id": `${BASE_URL}/#person`,
			name: "Giovanni Mugelli",
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": postUrl,
		},
		keywords: post.tags?.join(", "),
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(articleSchema),
				}}
			/>
			<main>
				<Container>
					<Header />
					<article className="mb-32">
						<PostHeader
							title={post.title}
							titleIt={post.title_it}
							excerpt={post.excerpt}
							excerptIt={post.excerpt_it}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
						/>
						<BilingualPostBody
							en={content_en}
							it={content_it}
						/>
					</article>
				</Container>
			</main>
		</>
	)
}

export async function generateMetadata({
	params,
}: Params): Promise<Metadata> {
	const { slug } = await params
	const post = getPostBySlug(slug)

	if (!post) {
		return notFound()
	}

	const imageUrl = post.ogImage?.url
		? post.ogImage.url.startsWith("http")
			? post.ogImage.url
			: `${BASE_URL}${post.ogImage.url}`
		: `${BASE_URL}/social.jpg`
	const postUrl = `${BASE_URL}/posts/${slug}`

	return {
		title: post.title,
		description: post.excerpt,
		keywords: post.tags,
		authors: [{ name: post.author.name, url: BASE_URL }],
		alternates: { canonical: postUrl },
		openGraph: {
			type: "article",
			url: postUrl,
			title: post.title,
			description: post.excerpt,
			publishedTime: post.date,
			modifiedTime: post.date,
			authors: [post.author.name],
			tags: post.tags,
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [imageUrl],
		},
	}
}

export async function generateStaticParams() {
	const posts = getAllPosts()
	return posts.map((post) => ({ slug: post.slug }))
}
