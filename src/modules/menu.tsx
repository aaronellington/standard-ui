export namespace Menu {
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

	export interface MenuEntry {
		Label: string
		To: string
	}

	export interface TopLevelMenuEntry extends MenuEntry {
		Children: MenuEntry[] | null
		Icon: JSX.Element | null
	}
}
