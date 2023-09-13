import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import { Button, ButtonType } from './Button'

const meta: Meta<typeof Card> = {
	component: Card,
	title: 'Simple/Card',
	parameters: {
		layout: 'centered',
	},
}
export default meta
type Story = StoryObj<typeof Card>

const demoData = (
	<article>
		<h1>Heading 1</h1>
		<p>
			Hello <a href="#">there</a>.
		</p>
		<p>Hello there.</p>
		<p>Hello there.</p>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
		<p>Hello there.</p>
		<p>
			<Button type={ButtonType.default}>Button</Button>
		</p>
		<p>
			<Button type={ButtonType.outline}>Button</Button>
		</p>
		<p>
			<Button type={ButtonType.accent}>Button</Button>
		</p>
		<p>
			<Button type={ButtonType.success}>Button</Button>
		</p>
		<p>
			<Button type={ButtonType.warning}>Button</Button>
		</p>
		<p>
			<Button type={ButtonType.danger}>Button</Button>
		</p>
	</article>
)

export const Primary: Story = {
	args: {
		children: <>{demoData}</>,
	},
}

export const NoPadding: Story = {
	args: {
		withPadding: false,
		children: <>{demoData}</>,
	},
}
