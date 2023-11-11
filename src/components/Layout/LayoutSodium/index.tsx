import styles from './LayoutSodium.module.scss'

interface Props {
	children: JSX.Element
}

const LayoutSodium = (props: Props) => {
	return <div className={styles.main}>{props.children}</div>
}

export default LayoutSodium
