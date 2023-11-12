import classes from './Page.module.scss'

type Props = {
	children: JSX.Element
}

const defaultProps: Props = {
	children: <></>,
}

const Page = (props: Props) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.main}>{props.children}</div>
		</div>
	)
}

Page.defaultProps = defaultProps

export default Page
