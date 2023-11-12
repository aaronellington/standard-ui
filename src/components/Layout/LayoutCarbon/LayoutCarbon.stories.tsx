import type { Meta, StoryObj } from '@storybook/react'
import Layout from './index'
import Page from '../../Simple/Page'
import Footer from '../../Simple/Footer'
import { Header } from '../../..'
import { menu } from '../../../modules/menu'

const meta: Meta<typeof Layout> = {
	component: Layout,
	title: 'Layout/LayoutCarbon',
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Layout>

export const LayoutCarbon: Story = {
	args: {
		header: (
			<Header
				brand={{
					Icon: <>y</>,
					Label: 'Layout Carbon',
					To: '#',
				}}
				menu={
					new menu.Menu([
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page1',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page2',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page3',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page3',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page3',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page3',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page3',
							To: '#',
						},
					])
				}
			/>
		),
		footer: (
			<Footer
				caption={<>Fiivar</>}
				menu={
					new menu.Menu([
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page1',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page2',
							To: '#',
						},
						{
							Children: null,
							Icon: <>i</>,
							Label: 'Page3',
							To: '#',
						},
					])
				}
			/>
		),
		children: (
			<Page>
				<article>
					<h1>Hello there!</h1>
					<p>
						Captain. Yes, sir? Tell them we wish to board at once. With all due
						respect, the Ambassadors for the Supreme Chancellor wish to board
						immediately. Yes, yes, of course, as you know, our blockade is
						perfectly legal, and we&apos;d be happy to receive the Ambassador.
					</p>
					<p>
						that should be enough for you. Now get on board! Master Qui-Gon,
						sir, I don&apos;t want to be a problem. You won&apos;t be, Ani.
						I&apos;m not allowed to train you, so I want you to watch me and be
						mindful, always remember, your focus determines your reality.
					</p>
					<p>
						A little too warm for my taste. Space is cold. You seem sad. The
						Queen is.
					</p>
					<p>
						It&apos;s urgent that we make contact with the republic.
						They&apos;ve knocked out all our communications. Do you have
						transports? In the main hanger. This way.
					</p>
					<p>
						However, there&apos;s great risk. The weapons on your fighters may
						not penetrate the shields. And there&apos;s an even bigger danger.
						If the Viceroy escapes, Your Highness, he will return with another
						droid army.{' '}
					</p>
					<p>
						Captain. Yes, sir? Tell them we wish to board at once. With all due
						respect, the Ambassadors for the Supreme Chancellor wish to board
						immediately. Yes, yes, of course, as you know, our blockade is
						perfectly legal, and we&apos;d be happy to receive the Ambassador.
					</p>
					<p>
						that should be enough for you. Now get on board! Master Qui-Gon,
						sir, I don&apos;t want to be a problem. You won&apos;t be, Ani.
						I&apos;m not allowed to train you, so I want you to watch me and be
						mindful, always remember, your focus determines your reality.
					</p>
					<p>
						A little too warm for my taste. Space is cold. You seem sad. The
						Queen is.
					</p>
					<p>
						It&apos;s urgent that we make contact with the republic.
						They&apos;ve knocked out all our communications. Do you have
						transports? In the main hanger. This way.
					</p>
					<p>
						However, there&apos;s great risk. The weapons on your fighters may
						not penetrate the shields. And there&apos;s an even bigger danger.
						If the Viceroy escapes, Your Highness, he will return with another
						droid army.{' '}
					</p>
					<p>
						Captain. Yes, sir? Tell them we wish to board at once. With all due
						respect, the Ambassadors for the Supreme Chancellor wish to board
						immediately. Yes, yes, of course, as you know, our blockade is
						perfectly legal, and we&apos;d be happy to receive the Ambassador.
					</p>
					<p>
						that should be enough for you. Now get on board! Master Qui-Gon,
						sir, I don&apos;t want to be a problem. You won&apos;t be, Ani.
						I&apos;m not allowed to train you, so I want you to watch me and be
						mindful, always remember, your focus determines your reality.
					</p>
					<p>
						A little too warm for my taste. Space is cold. You seem sad. The
						Queen is.
					</p>
					<p>
						It&apos;s urgent that we make contact with the republic.
						They&apos;ve knocked out all our communications. Do you have
						transports? In the main hanger. This way.
					</p>
					<p>
						However, there&apos;s great risk. The weapons on your fighters may
						not penetrate the shields. And there&apos;s an even bigger danger.
						If the Viceroy escapes, Your Highness, he will return with another
						droid army.{' '}
					</p>
					<p>
						Captain. Yes, sir? Tell them we wish to board at once. With all due
						respect, the Ambassadors for the Supreme Chancellor wish to board
						immediately. Yes, yes, of course, as you know, our blockade is
						perfectly legal, and we&apos;d be happy to receive the Ambassador.
					</p>
					<p>
						that should be enough for you. Now get on board! Master Qui-Gon,
						sir, I don&apos;t want to be a problem. You won&apos;t be, Ani.
						I&apos;m not allowed to train you, so I want you to watch me and be
						mindful, always remember, your focus determines your reality.
					</p>
					<p>
						A little too warm for my taste. Space is cold. You seem sad. The
						Queen is.
					</p>
					<p>
						It&apos;s urgent that we make contact with the republic.
						They&apos;ve knocked out all our communications. Do you have
						transports? In the main hanger. This way.
					</p>
					<p>
						However, there&apos;s great risk. The weapons on your fighters may
						not penetrate the shields. And there&apos;s an even bigger danger.
						If the Viceroy escapes, Your Highness, he will return with another
						droid army.{' '}
					</p>
				</article>
			</Page>
		),
	},
}
