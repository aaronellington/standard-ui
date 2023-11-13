import type { Meta, StoryObj } from '@storybook/react'
import OneLiner from '.'
import { FaHome } from 'react-icons/fa'
const meta: Meta<typeof OneLiner> = {
	component: OneLiner,
	title: 'Simple/OneLiner',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof OneLiner>

export const Default: Story = {
	args: {
		children: (
			<>
				<div></div>
				<FaHome />
				<FaHome />
			</>
		),
	},
}
