import type { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

const meta: Meta<typeof Footer> = {
	component: Footer,
	title: 'Simple/Footer',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
	args: {},
}
