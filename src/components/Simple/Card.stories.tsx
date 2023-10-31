import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import Button, { ButtonType } from './Button'

const meta: Meta<typeof Card> = {
	component: Card,
	title: 'Simple/Card',
}
export default meta
type Story = StoryObj<typeof Card>

const demoData = (
	<article>
		<h1>Heading 1</h1>
		<p>
			Captain. Yes, sir? Tell them we wish to board at once. With all due
			respect, the Ambassadors for the Supreme Chancellor wish to board
			immediately. Yes, yes, of course, as you know, our blockade is perfectly
			legal, and we&apos;d be happy to receive the Ambassador. I&apos;m TC-14 at
			your service. This way, please. We are greatly honored by your visit
			Ambassadors.
		</p>
		<h2>Heading 2</h2>
		<p>
			Powerful you have become, Dooku. The dark side I sense in you. I&apos;ve
			become more powerful than any Jedi. Even you. Much to learn you still
			have. It is obvious that this contest cannot be decided by our knowledge
			of the Force, but by our skills with a lightsaber. Fought well you have,
			my old Padawan.
		</p>
		<h3>Heading 3</h3>
		<p>
			The separatists have been taken care of, my master. It is finished then.
			You have restored peace and justice to the galaxy. Send a message to the
			ships of the{' '}
			<a href="https://starwars.fandom.com/wiki/Trade_Federation">
				Trade Federation
			</a>
			. All droid units must shut down immediately.
		</p>
		<h4>Heading 4</h4>
		<p>
			Did you hear that? They&apos;ve shut down the main reactor. We&apos;ll be
			destroyed for sure. This is madness! We&apos;re doomed! There&apos;ll be
			no escape for the Princess this time. What&apos;s that? Artoo!
			Artoo-Detoo, where are you? At last! Where have you been? They&apos;re
			heading in this direction.
		</p>
		<h5>Heading 5</h5>
		<p>
			It&apos;s energy surrounds us and binds us. Luminous beings are we. ..not
			this crude matter. You must feel the Force around you. Here, between
			you...me...the tree...the rock...everywhere! Yes, even between this land
			and that ship! You want the impossible. I don&apos;t, I don&apos;t believe
			it.
		</p>
		<h6>Heading 6</h6>
		<p>
			That is why you couldn&apos;t destroy me. That&apos;s why you won&apos;t
			bring me to your Emperor now. I see you have constructed a new lightsaber.
			Your skills are complete. Indeed, you are powerful, as the Emperor has
			foreseen. Come with me. Obi-Wan once thought as you do.
		</p>
		<blockquote>
			&quot;Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
			Nam at dui sit amet ipsum cursus ornare.&quot;
			<footer>
				<cite>- Phasellus eget lacinia</cite>
			</footer>
		</blockquote>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
		<img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" />
		<form>
			<label>
				Username
				<input type="text" placeholder="chosen_one_66" />
				<small>Do a thing</small>
			</label>
			<label>
				Password
				<input type="password" />
			</label>
			<input type="reset" />
			<input type="submit" />
		</form>
		<p>
			<Button>Button</Button>
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
