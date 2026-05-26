"use client"

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react"
import {
	type Language,
	translations,
	type Translations,
} from "@/lib/i18n"

type I18nContextType = {
	lang: Language
	setLang: (lang: Language) => void
	t: Translations
}

const I18nContext = createContext<I18nContextType>({
	lang: "en",
	setLang: () => {},
	t: translations.en,
})

export const useI18n = () => useContext(I18nContext)

type Props = {
	children: ReactNode
}

export function I18nProvider({ children }: Props) {
	const [lang, setLangState] = useState<Language>("en")

	useEffect(() => {
		const stored = localStorage.getItem("lang") as Language | null
		if (stored === "en" || stored === "it") {
			setLangState(stored)
		}
	}, [])

	const setLang = (newLang: Language) => {
		setLangState(newLang)
		localStorage.setItem("lang", newLang)
	}

	return (
		<I18nContext.Provider
			value={{ lang, setLang, t: translations[lang] }}
		>
			{children}
		</I18nContext.Provider>
	)
}

// Legacy export kept for backwards compat
export { I18nContext }
export const ThemeContextProvider = I18nProvider
