import classes from './Button.module.scss'

export enum ButtonType {
	default = 'default',
	accent = 'accent',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
}

export enum ButtonSize {
	small = 'small',
	normal = 'default',
	large = 'large',
}

interface ButtonProps {
	tooltip: string
	showLabel: boolean
	children: JSX.Element | string
	type: ButtonType
	size: ButtonSize
	outline: boolean
}

const defaultProps: ButtonProps = {
	type: ButtonType.default,
	size: ButtonSize.normal,
	tooltip: '',
	outline: false,
	showLabel: false,
	children: <></>,
}

const typeLookup = {} as any
typeLookup[ButtonType.default] = classes.default
typeLookup[ButtonType.accent] = classes.accent
typeLookup[ButtonType.success] = classes.success
typeLookup[ButtonType.warning] = classes.warning
typeLookup[ButtonType.danger] = classes.danger

const sizeLookup = {} as any
sizeLookup[ButtonSize.small] = classes.sizeSmall
sizeLookup[ButtonSize.normal] = classes.sizeNormal
sizeLookup[ButtonSize.large] = classes.sizeLarge

const Button = (props: ButtonProps) => {
	const classNames: string[] = [typeLookup[props.type], sizeLookup[props.size]]

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
