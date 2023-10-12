import type { Meta, StoryObj } from '@storybook/react'
import { FaHome, FaUser } from 'react-icons/fa'
import LayoutStandard from './LayoutStandard'

const meta: Meta<typeof LayoutStandard> = {
	component: LayoutStandard,
	title: 'Layout/LayoutStandard',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof LayoutStandard>

export const Primary: Story = {
	args: {
		children: <>Test</>,
		brand: <h1>My Site</h1>,
		mainMenu: [
			{
				Children: null,
				Icon: <FaHome />,
				Label: 'Home',
				To: '#',
			},
			{
				Children: null,
				Icon: <FaUser />,
				Label: 'About Me',
				To: '#',
			},
		],
		footer: <>Hello there</>,
		footerMenu: [
			{
				Children: null,
				Icon: <FaHome />,
				Label: 'Home',
				To: '#',
			},
			{
				Children: null,
				Icon: <FaUser />,
				Label: 'About Me',
				To: '#',
			},
		],
	},
}
