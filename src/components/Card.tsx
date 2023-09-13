import { ReactNode } from 'react'
import classes from './Card.module.scss'

type CardProps = {
	children: ReactNode
	withPadding?: boolean
}

const defaultProps = {
	children: <></>,
	withPadding: true,
} as CardProps

const Card = (props: CardProps) => {
	const listOfClasses = [classes.main]

	if (props.withPadding === true) {
		listOfClasses.push(classes.with_padding)
	}
	return <div className={listOfClasses.join(' ')}>{props.children}</div>
}

Card.defaultProps = defaultProps

export default Card
