export interface MenuEntry {
	Icon: JSX.Element | null
	Label: string
	To: string
}

export interface TopLevelMenuEntry extends MenuEntry {
	Children: MenuEntry[] | null
}
