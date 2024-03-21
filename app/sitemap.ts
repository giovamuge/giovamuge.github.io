import { MetadataRoute } from "next"

const BASE_URL = "https://giovamuge.github.io"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: BASE_URL + "/#intro",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: BASE_URL + "/#projects",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: BASE_URL + "/#technologies",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: BASE_URL + "/#repos",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
	]
}
