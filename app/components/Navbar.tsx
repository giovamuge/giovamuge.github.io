"use client"

import Link from "next/link"
import React, { useState } from "react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="w-full max-md:px-3 max-w-2xl mb-10">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<span className="font-bold">
							<Link href={"/"}>giovamuge.dev</Link> 
						</span>
					</div>
					<div className="max-sm:hidden flex flex-row">
						<a
							href="#intro"
							className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
						>
							Intro
						</a>
						<a
							href="#projects"
							className="  hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
						>
							Progetti
						</a>
						<a
							href="#technologies"
							className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
						>
							Tecnologie
						</a>
						<a
							href="#repos"
							className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
						>
							Repo
						</a>
					</div>

					<button
						className="sm:hidden"
						aria-controls="mobile-menu"
						aria-expanded="false"
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className="sr-only">
							Open main menu
						</span>
						<svg
							className="block h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				className={
					"sm:hidden" && isOpen
						? "block transition-all"
						: "hidden"
				}
			>
				<div className="space-y-1 flex flex-col px-2 pb-3 pt-2">
					<a
						href="#intro"
						className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
					>
						Intro
					</a>
					<a
						href="#projects"
						className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
					>
						Progetti
					</a>
					<a
						href="#technologies"
						className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
					>
						Tecnologie
					</a>
					<a
						href="#repos"
						className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
					>
						Repo
					</a>
					<a
						href="#contact"
						className="hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
					>
						Contatti
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
