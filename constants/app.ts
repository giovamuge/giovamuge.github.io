const PORT = process.env.PORT || 3000

const BASE_URL =
	process.env.NODE_ENV === "production"
		? process.env.PRODUCTION_BASE_URL
		: typeof window !== "undefined"
			? window.location.origin
			: "http://localhost:" + PORT
