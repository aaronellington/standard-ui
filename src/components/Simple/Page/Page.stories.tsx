import type { Meta, StoryObj } from '@storybook/react'
import Page from '.'

const meta: Meta<typeof Page> = {
	component: Page,
	title: 'Simple/Page',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Page>

export const Default: Story = {
	args: {
		children: (
			<article>
				<p>
					Captain. Yes, sir? Tell them we wish to board at once. With all due
					respect, the Ambassadors for the Supreme Chancellor wish to board
					immediately. Yes, yes, of course, as you know, our blockade is
					perfectly legal, and we&apos;d be happy to receive the Ambassador.
				</p>
				<p>
					that should be enough for you. Now get on board! Master Qui-Gon, sir,
					I don&apos;t want to be a problem. You won&apos;t be, Ani. I&apos;m
					not allowed to train you, so I want you to watch me and be mindful,
					always remember, your focus determines your reality.
				</p>
				<p>
					A little too warm for my taste. Space is cold. You seem sad. The Queen
					is.
				</p>
				<p>
					It&apos;s urgent that we make contact with the republic. They&apos;ve
					knocked out all our communications. Do you have transports? In the
					main hanger. This way.
				</p>
				<p>
					However, there&apos;s great risk. The weapons on your fighters may not
					penetrate the shields. And there&apos;s an even bigger danger. If the
					Viceroy escapes, Your Highness, he will return with another droid
					army.{' '}
				</p>
			</article>
		),
	},
}
