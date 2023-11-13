import classes from './OneLiner.module.scss'

type Props = {
	children: any
}

const defaultProps: Props = {
	children: <></>,
}

const OneLiner = (props: Props) => {
	return <div className={classes.main}>{props.children}</div>
}

OneLiner.defaultProps = defaultProps

export default OneLiner
