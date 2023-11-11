import type { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonType } from './Button'

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Simple/Button',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: 'Button',
		tooltip: 'Tooltip...',
	},
}

export const Accent: Story = {
	args: {
		children: 'Button',
		tooltip: 'Tooltip...',
		type: ButtonType.accent,
	},
}

export const Success: Story = {
	args: {
		children: 'Button',
		tooltip: 'Tooltip...',
		type: ButtonType.success,
	},
}
export const Warning: Story = {
	args: {
		children: 'Button',
		tooltip: 'Tooltip...',
		type: ButtonType.warning,
	},
}
export const Danger: Story = {
	args: {
		children: 'Button',
		tooltip: 'Tooltip...',
		type: ButtonType.danger,
	},
}
