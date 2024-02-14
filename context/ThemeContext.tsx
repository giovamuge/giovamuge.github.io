"use client"

import { createContext, useContext } from "react"

type ThemeContextType = {
	theme: "dark" | "light" | "system"
}

const ThemeContext = createContext<ThemeContextType>({
	theme: "system",
})

const useAuthContext = () => useContext(ThemeContext)

type Props = {
	children: React.ReactNode
}

const ThemeContextProvider = ({ children }: Props) => {
	return (
		<ThemeContext.Provider value={{ theme: "system" }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeContext, useAuthContext, ThemeContextProvider }
export type { ThemeContextType }
