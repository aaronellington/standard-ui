import type { Meta, StoryObj } from '@storybook/react'
import { LayoutStandard } from './LayoutStandard'

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
	},
}
