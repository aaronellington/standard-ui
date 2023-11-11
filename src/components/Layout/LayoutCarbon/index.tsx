import styles from './LayoutCarbon.module.scss'

interface Props {
	children: JSX.Element
}

const LayoutCarbon = (props: Props) => {
	return <div className={styles.main}>{props.children}</div>
}

export default LayoutCarbon
