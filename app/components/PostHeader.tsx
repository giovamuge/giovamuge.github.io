import { type Author } from "@/interfaces/author"
import React from "react"
import { PostTitle } from "./PostTitle"
import Avatar from "./Avatar"
import CoverImage from "./CoverImage"
import DateFormatter from "./DateFormatter"

type Props = {
	title: string
	coverImage: string
	date: string
	author: Author
}

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
}: Props) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="hidden md:block md:mb-12">
				<Avatar name={author.name} picture={author.picture} />
			</div>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar
						name={author.name}
						picture={author.picture}
					/>
				</div>
				<div className="mb-6 text-lg">
					<DateFormatter dateString={date} />
				</div>
			</div>
		</>
	)
}
