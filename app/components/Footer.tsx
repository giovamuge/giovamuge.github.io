import React from "react"
import SocialIcon from "./SocialIcon"
import SocialLink from "./SocialLink"

export default function Footer(): JSX.Element {
	return (
		<footer className="flex min-w-full bottom-0 border-t-2 border-primary mt-10 items-center justify-center font-space-mono text-sm">
			<div className="flex flex-row gap-5 container py-10">
				<div className="flex flex-col gap-3">
					<label className="font-bold">Contact</label>
					<dl>
						<dd>
							<a
								className="underline"
								href="mailto:mugelli.giovanni@gmail.com"
							>
								mugelli.giovanni@gmail.com
							</a>
						</dd>
						<dd>
							<strong>p.iva</strong>: 06510290486
						</dd>
					</dl>
				</div>
				<div className="flex flex-col gap-3">
					<label className="font-bold">Social</label>
					<dl className="space-y-2">
						<dd>
							<SocialLink href="https://www.linkedin.com/in/giovamuge">
								<SocialIcon
									name="linkedin"
									className="fill-[var(--secondary-rgb)]"
								/>
								Linkedin
							</SocialLink>
						</dd>
						<dd>
							<SocialLink href="https://www.instagram.com/giovamuge">
								<SocialIcon
									name="instagram"
									className="fill-[var(--secondary-rgb)]"
								/>
								Instagram
							</SocialLink>
						</dd>
						<dd>
							<SocialLink href="https://www.github.com/giovamuge">
								<SocialIcon
									name="github"
									className="fill-[var(--secondary-rgb)]"
								/>
								Github
							</SocialLink>
						</dd>
						<dd>
							<SocialLink href="https://www.youtube.com/giovamuge">
								<SocialIcon
									name="youtube"
									className="fill-[var(--secondary-rgb)]"
								/>
								YouTube
							</SocialLink>
						</dd>
					</dl>
				</div>

				<div className="flex flex-col gap-3">
					{/* <label className="font-bold">Tags</label> */}
					<em className="text-secondary">
						Giovani Mugelli, freelance software developer
						per flutter, angular, react, .net core, c#
						javascript, css, html, xamarin, react native,
						svelte e swift. fullstack developer.
					</em>
				</div>
			</div>
		</footer>
	)
}
