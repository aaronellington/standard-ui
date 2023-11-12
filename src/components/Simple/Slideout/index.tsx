import styles from './Slideout.module.scss'

interface Props {
	children: JSX.Element
	position: 'left' | 'right'
	show: boolean
	setShow: (show: boolean) => void
}

const Slideout = (props: Props) => {
	const classList = [styles.sidebar]

	switch (props.position) {
		case 'left':
			classList.push(styles.left)
			break
		case 'right':
			classList.push(styles.right)
			break
	}

	if (!props.show) {
		return <></>
	}

	return (
		<div className={styles.main}>
			<div
				className={styles.overlay}
				onClick={() => {
					props.setShow(false)
				}}
			></div>
			<div className={classList.join(' ')}>{props.children}</div>
		</div>
	)
}

const defaultProps: Props = {
	children: <></>,
	position: 'left',
	setShow: () => {},
	show: false,
}

Slideout.defaultProps = defaultProps

export default Slideout
