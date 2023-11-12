import styles from './Slideout.module.scss'

interface Props {
	children: JSX.Element
	position: 'left' | 'right'
}

const Slideout = (props: Props) => {
	const classList = [styles.main]

	switch (props.position) {
		case 'left':
			classList.push(styles.left)
			break
		case 'right':
			classList.push(styles.right)
			break
	}

	return <div className={styles.main}>{props.children}</div>
}

const defaultProps = {
	children: <></>,
	position: 'left',
} as Props

Slideout.defaultProps = defaultProps

export default Slideout
