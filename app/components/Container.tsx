type Props = {
	children?: React.ReactNode
}

export default function Container({ children }: Props) {
	return (
		<div className="flex flex-col min-w-full max-w-full items-center justify-center">
			{children}
		</div>
	)
}
