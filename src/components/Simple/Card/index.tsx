import classes from './Card.module.scss'

type CardProps = {
	children: JSX.Element
	withPadding?: boolean
}

const defaultProps: CardProps = {
	children: <></>,
	withPadding: true,
}

const Card = (props: CardProps) => {
	const listOfClasses = [classes.main]

	if (props.withPadding === true) {
		listOfClasses.push(classes.with_padding)
	}

	return <div className={listOfClasses.join(' ')}>{props.children}</div>
}

Card.defaultProps = defaultProps

export default Card
