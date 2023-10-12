import classes from './Button.module.scss'

export enum ButtonType {
	default = 'default',
	accent = 'accent',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
}

interface ButtonProps {
	tooltip: string
	showLabel: boolean
	children: JSX.Element | string
	type: ButtonType
	outline: boolean
}

const defaultProps: ButtonProps = {
	type: ButtonType.default,
	tooltip: '',
	outline: false,
	showLabel: false,
	children: <></>,
}

const lookup = {} as any
lookup[ButtonType.default] = classes.default
lookup[ButtonType.accent] = classes.accent
lookup[ButtonType.success] = classes.success
lookup[ButtonType.warning] = classes.warning
lookup[ButtonType.danger] = classes.danger

const Button = (props: ButtonProps) => {
	const classNames: string[] = [classes.main, lookup[props.type]]

	if (props.outline) {
		classNames.push(classes.outline)
	}

	return (
		<button className={classNames.join(' ')} title={props.tooltip}>
			{props.showLabel ? (
				<span className={classes.label}>{props.type}</span>
			) : (
				<></>
			)}
			{props.children}
		</button>
	)
}

Button.defaultProps = defaultProps

export default Button
