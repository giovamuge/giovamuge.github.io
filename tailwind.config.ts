import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    fontFamily: {
      "league-spartan": ["League Spartan", "sans-serif"],
      "space-mono": ["Space Mono", "monospace"],
    },
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "var(--primary-rgb)",
				secondary: "var(--secondary-rgb)",
			},
		},
	},
	plugins: [],
}
export default config
