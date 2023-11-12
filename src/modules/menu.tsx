export namespace Menu {
	export type MenuEntry = {
		content: JSX.Element
		to: string
	}

	export type TopLevelMenuEntry = {
		children?: MenuEntry[] | null
	} & MenuEntry

	export type RenderFunc = (
		children: JSX.Element,
		to: string,
		className: string,
		activeClass: string,
	) => JSX.Element

	export const DefaultRenderFunc: RenderFunc = (
		children: JSX.Element,
		to: string,
		className: string,
		activeClass: string,
	) => {
		return (
			<a href={to} className={`${className} ${activeClass}`}>
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
