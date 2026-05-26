"use client"

import React from "react"
import { useI18n } from "@/context/ThemeContext"

export default function Footer() {
	const { t } = useI18n()
	const year = new Date().getFullYear()

	return (
		<footer className="w-full border-t border-(--border) mt-24">
			<div className="max-w-editorial mx-auto px-4 lg:px-0 py-12">
				<div className="grid sm:grid-cols-3 gap-8 mb-10">
					{/* Contact column */}
					<div className="flex flex-col gap-3">
						<span className="font-ui text-[10px] tracking-widest uppercase text-(--muted)">
							{t.footer.contact}
						</span>
						<a
							href="mailto:mugelli.giovanni@gmail.com"
							className="font-serif text-sm text-(--foreground) underline underline-offset-4 decoration-(--border) hover:decoration-(--foreground) transition-all"
						>
							mugelli.giovanni@gmail.com
						</a>
						<span className="font-ui text-xs text-(--muted)">
							p.iva 06510290486
						</span>
					</div>

					{/* Social column */}
					<div className="flex flex-col gap-3">
						<span className="font-ui text-[10px] tracking-widest uppercase text-(--muted)">
							{t.footer.social}
						</span>
						<div className="flex flex-col gap-2">
							{[
								{
									label: "LinkedIn",
									href: "https://www.linkedin.com/in/giovamuge",
								},
								{
									label: "GitHub",
									href: "https://www.github.com/giovamuge",
								},
								{
									label: "Instagram",
									href: "https://www.instagram.com/giovamuge",
								},
								{
									label: "YouTube",
									href: "https://www.youtube.com/giovamuge",
								},
							].map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="font-serif text-sm text-(--muted) hover:text-(--foreground) transition-colors"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>

					{/* Tagline column */}
					<div className="flex flex-col gap-3">
						<p className="font-serif text-sm leading-relaxed text-(--muted) italic">
							{t.footer.tagline}
						</p>
					</div>
				</div>

				<div className="border-t border-(--border) pt-6 flex items-center justify-between">
					<span className="font-display font-bold text-sm text-(--foreground)">
						giovamuge.dev
					</span>
					<span className="font-ui text-[11px] text-(--muted)">
						© {year} · {t.footer.rights}
					</span>
				</div>
			</div>
		</footer>
	)
}
