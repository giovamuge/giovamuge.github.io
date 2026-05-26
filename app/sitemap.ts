import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/api"

export const dynamic = "force-static"

const BASE_URL = "https://giovamuge.github.io"

export default function sitemap(): MetadataRoute.Sitemap {
	const posts = getAllPosts()
	const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${BASE_URL}/posts/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly",
		priority: 0.7,
	}))

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...postEntries,
	]
}
