import { type Author } from "./author"

export type Post = {
	slug: string
	title: string
	title_it?: string
	date: string
	coverImage?: string
	author: Author
	excerpt: string
	excerpt_it?: string
	ogImage?: {
		url: string
	}
	content: string
	content_it?: string
	preview?: boolean
	tags: string[]
}
