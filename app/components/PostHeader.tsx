"use client"

import { type Author } from "@/interfaces/author"
import React from "react"
import { PostTitle } from "./PostTitle"
import Avatar from "./Avatar"
import CoverImage from "./CoverImage"
import DateFormatter from "./DateFormatter"
import { useI18n } from "@/context/ThemeContext"

type Props = {
	title: string
	titleIt?: string
	excerpt?: string
	excerptIt?: string
	coverImage?: string
	date: string
	author: Author
}

export default function PostHeader({
	title,
	titleIt,
	excerpt,
	excerptIt,
	coverImage,
	date,
	author,
}: Props) {
	const { lang } = useI18n()
	const displayTitle = lang === "it" && titleIt ? titleIt : title
	const displayExcerpt =
		lang === "it" && excerptIt ? excerptIt : excerpt

	return (
		<>
			<div className="max-w-2xl mb-8">
				<PostTitle>{displayTitle}</PostTitle>
				<div className="flex items-center gap-4 mb-6">
					<Avatar
						name={author.name}
						picture={author.picture}
					/>
					<div className="text-sm text-(--muted)">
						<DateFormatter dateString={date} />
					</div>
				</div>
				{displayExcerpt && (
					<p className="font-serif text-xl leading-[1.85] text-(--muted)">
						{displayExcerpt}
					</p>
				)}
			</div>
			{coverImage && (
				<div className="mb-10 md:mb-16 sm:mx-0 items-center justify-center">
					<CoverImage
						title={displayTitle}
						src={coverImage}
					/>
				</div>
			)}
		</>
	)
}
