export namespace StandardUIMenu {
	export type RenderFunc = (
		children: JSX.Element,
		target: string,
		classNames: string,
		activeClass: string,
	) => JSX.Element

	export const DefaultRenderFunc: RenderFunc = (
		children: JSX.Element,
		target: string,
		classNames: string,
		activeClass: string,
	) => {
		return (
			<a href={target} className={`${classNames} ${activeClass}`}>
				{children}
			</a>
		)
	}

	export interface Entry {
		Label: string
		To: string
	}

	export interface TopLevelEntry extends Entry {
		Children: Entry[] | null
		Icon: JSX.Element | null
	}
}
