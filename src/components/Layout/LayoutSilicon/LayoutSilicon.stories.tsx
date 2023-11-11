import type { Meta, StoryObj } from '@storybook/react'
import Layout from './index'

const meta: Meta<typeof Layout> = {
	component: Layout,
	title: 'Layout/LayoutSilicon',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Layout>

export const LayoutSilicon: Story = {
	args: {
		children: <>Test</>,
	},
}
