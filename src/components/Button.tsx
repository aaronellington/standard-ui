import { ReactNode } from 'react'
import classes from './Button.module.scss'

export enum ButtonType {
	accent = 'accent',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
}

interface ButtonProps {
	tooltip?: string
	children: ReactNode
	type: ButtonType
}

const lookup = {} as any
lookup[ButtonType.accent] = classes.accent
lookup[ButtonType.success] = classes.success
lookup[ButtonType.warning] = classes.warning
lookup[ButtonType.danger] = classes.danger

export const Button = (props: ButtonProps) => {
	const classNames: string[] = [
		classes.main,
		lookup[props.type || ButtonType.accent],
	]

	return (
		<button className={classNames.join(' ')} title={props.tooltip}>
			{props.children || '---'}
		</button>
	)
}
