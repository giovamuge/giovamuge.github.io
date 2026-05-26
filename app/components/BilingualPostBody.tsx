"use client"

import { useI18n } from "@/context/ThemeContext"
import { PostBody } from "./PostBody"

type Props = {
	en: string
	it: string
}

export default function BilingualPostBody({ en, it }: Props) {
	const { lang } = useI18n()
	return <PostBody content={lang === "it" ? it : en} />
}
