import classes from './Footer.module.scss'

type Props = {
	children: JSX.Element
}

const defaultProps: Props = {
	children: <></>,
}

const Footer = (props: Props) => {
	return <div className={classes.main}>{props.children}</div>
}

Footer.defaultProps = defaultProps

export default Footer
