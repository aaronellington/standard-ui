import classes from './Header.module.scss'

type Props = {
	children: JSX.Element
}

const defaultProps: Props = {
	children: <></>,
}

const Header = (props: Props) => {
	return <div className={classes.main}>{props.children}</div>
}

Header.defaultProps = defaultProps

export default Header
