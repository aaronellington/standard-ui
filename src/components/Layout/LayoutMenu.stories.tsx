import type { Meta, StoryObj } from '@storybook/react'
import { LayoutMenu } from './LayoutMenu'

const meta: Meta<typeof LayoutMenu> = {
	component: LayoutMenu,
	title: 'Layout/LayoutMenu',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof LayoutMenu>

export const Primary: Story = {
	args: {
		menuItems: [
			{
				Label: 'Home',
				Children: null,
				Icon: <>X</>,
				To: '/',
			},
		],
	},
}
