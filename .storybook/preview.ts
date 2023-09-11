import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'default',
			values: [
				{
					name: 'default',
					value: 'var(--standard-ui-background-primary)',
				},
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

import '../src/styles/index.scss'

export default preview
