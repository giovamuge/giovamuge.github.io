"use client"

import Link from "next/link"
import React, { useState } from "react"
import { useI18n } from "@/context/ThemeContext"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { lang, setLang, t } = useI18n()

	const navItems = [
		{ label: t.nav.about, href: "/#intro" },
		{ label: t.nav.projects, href: "/#projects" },
		{ label: t.nav.technologies, href: "/#technologies" },
		{ label: t.nav.repositories, href: "/#repos" },
		{ label: t.nav.contact, href: "/#contact" },
	]

	return (
		<header className="w-full border-b border-(--border) mb-16">
			<div className="max-w-editorial mx-auto px-4 lg:px-0">
				{/* Masthead */}
				<div className="py-7 flex items-center justify-between">
					<Link
						href="/"
						className="font-display text-xl font-bold tracking-tight text-(--foreground)"
					>
						{t.nav.home}
					</Link>
					<button
						className="font-ui text-[11px] tracking-widest uppercase text-(--muted) border border-(--border) px-3 py-1 hover:text-(--foreground) hover:border-(--foreground) transition-colors"
						onClick={() =>
							setLang(lang === "en" ? "it" : "en")
						}
						aria-label="Toggle language"
					>
						{lang === "en" ? "IT" : "EN"}
					</button>
				</div>

				{/* Desktop nav */}
				<nav
					className="hidden sm:flex items-center pb-4"
					aria-label="Main navigation"
				>
					{navItems.map((item, i) => (
						<React.Fragment key={item.href}>
							{i > 0 && (
								<span className="font-ui text-(--muted) text-xs mx-2 select-none">
									·
								</span>
							)}
							<Link
								href={item.href}
								className="font-ui text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--foreground) transition-colors py-1"
							>
								{item.label}
							</Link>
						</React.Fragment>
					))}
				</nav>

				{/* Mobile nav */}
				<div className="sm:hidden pb-4 flex items-center justify-between">
					<span className="font-ui text-[11px] tracking-widest uppercase text-(--muted)">
						Menu
					</span>
					<button
						className="font-ui text-lg text-(--muted) hover:text-(--foreground) transition-colors"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={
							isOpen ? "Close menu" : "Open menu"
						}
					>
						{isOpen ? "×" : "≡"}
					</button>
				</div>

				{isOpen && (
					<div className="sm:hidden flex flex-col gap-4 pb-6 border-t border-(--border) pt-4">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="font-ui text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--foreground) transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</header>
	)
}

export default Navbar
