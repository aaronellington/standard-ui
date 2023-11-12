import type { Meta, StoryObj } from '@storybook/react'
import Slideout from '.'

import { useState } from 'react'
import { LayoutCarbon } from '../../..'

const meta: Meta<typeof Slideout> = {
	component: Slideout,
	title: 'Simple/Slideout',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof Slideout>

export const Primary: Story = {
	args: {
		children: <>Slideout</>,
	},
	render: () => {
		const [showLeft, setShowLeft] = useState(false)
		const [showRight, setShowRight] = useState(false)
		return (
			<LayoutCarbon
				footer={<>Footer</>}
				header={
					<>
						<button
							onClick={() => {
								setShowLeft(!showLeft)
							}}
						>
							Toggle Left
						</button>
						<button
							onClick={() => {
								setShowRight(!showRight)
							}}
						>
							Toggle Right
						</button>
					</>
				}
			>
				<>
					<Slideout show={showLeft} setShow={setShowLeft} position="left">
						<>Hey here is some things</>
					</Slideout>
					<Slideout show={showRight} setShow={setShowRight} position="right">
						<>Hey here is some things</>
					</Slideout>
				</>
			</LayoutCarbon>
		)
	},
}
