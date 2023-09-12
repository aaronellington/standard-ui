import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './Article'

const meta: Meta<typeof Article> = {
	component: Article,
	title: 'Simple/Article',
	parameters: {
		layout: 'centered',
	},
}
export default meta
type Story = StoryObj<typeof Article>

export const Primary: Story = {
	args: {
		children: (
			<>
				<h1>Heading 1</h1>
				<p>
					Hello <a href="#">there.</a>
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
			</>
		),
	},
}
