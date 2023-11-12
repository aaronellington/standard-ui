export namespace Menu {
	export type MenuEntry = {
		Label: JSX.Element | string
		To: string
		Icon: JSX.Element | null
	}

	export type TopLevelMenuEntry = {
		Children: MenuEntry[] | null
	} & MenuEntry

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

	export class Menu {
		public entries: TopLevelMenuEntry[]
		public RenderFunc: RenderFunc = DefaultRenderFunc

		constructor(entries: TopLevelMenuEntry[]) {
			this.entries = entries
		}
	}
}
