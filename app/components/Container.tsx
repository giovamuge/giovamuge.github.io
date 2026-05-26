type Props = {
	children?: React.ReactNode
}

export default function Container({ children }: Props) {
	return (
		<div className="max-w-editorial mx-auto px-4 lg:px-0 flex flex-col items-center justify-center">
			{children}
		</div>
	)
}
