import type { Meta, StoryObj } from '@storybook/react'
import Layout from './index'

const meta: Meta<typeof Layout> = {
	component: Layout,
	title: 'Layout/LayoutHydrogen',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Layout>

export const LayoutHydrogen: Story = {
	args: {
		children: <>Test</>,
	},
}