import type { Meta, StoryObj } from '@storybook/react'
import Slideout from '.'
import { LayoutSilicon } from '../../..'

const meta: Meta<typeof Slideout> = {
	component: Slideout,
	title: 'Simple/Slideout',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Slideout>

export const Primary: Story = {
	args: {
		children: <>Slideout</>,
	},
	render: (args) => {
		return (
			<LayoutSilicon>
				<Slideout {...args}></Slideout>
			</LayoutSilicon>
		)
	},
}
