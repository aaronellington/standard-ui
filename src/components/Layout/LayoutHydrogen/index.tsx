import styles from './LayoutHydrogen.module.scss'

interface Props {
	children: JSX.Element
}

const LayoutHydrogen = (props: Props) => {
	return <div className={styles.main}>{props.children}</div>
}

export default LayoutHydrogen
