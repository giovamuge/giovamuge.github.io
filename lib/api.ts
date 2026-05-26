import { Post } from "@/interfaces/post"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "")
	const fullPath = join(postsDirectory, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	const separator = "\n<!-- LANG_IT -->\n"
	const parts = content.split(separator)
	const content_en = parts[0].trim()
	const content_it = parts[1]?.trim()

	return {
		...data,
		slug: realSlug,
		content: content_en,
		...(content_it ? { content_it } : {}),
	} as Post
}

export function getAllPosts(): Post[] {
	const slugs = getPostSlugs()
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	return posts
}
