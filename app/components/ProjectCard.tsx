import Image from "next/image"
import { Post } from "@/interfaces/post"

export default function ProjectCard({
	title,
	content,
	coverImage,
	tags,
	slug,
}: Post): JSX.Element {
	return (
		<div className="flex flex-col max-w-sm border-2 border-secondary hover:border-primary hover:shadow hover:shadow-primary hover:scale-105 transition-all text-secondary hover:text-primary">
			<Image
				className="w-full h-48 object-cover"
				src={coverImage}
				alt="Image Description"
				width={200}
				height={300}
			/>

			<div className="p-4 md:p-5 gap-2 flex flex-col">
				<h3 className="text-lg font-bold">{title}</h3>
				<em className="mt-1">
					{tags.map((x) => `#${x}`).join(" ")}
				</em>
				<p className="font-space-mono">
					{content
						.substring(0, 50)
						.concat(content.length > 50 ? "..." : "")}
				</p>
				<a
					className="font-bold hover:underline transition-all"
					href={`/posts/${slug}`}
				>
					Continua a leggere
				</a>
			</div>
		</div>
	)
}
