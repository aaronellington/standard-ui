import styles from './LayoutSilicon.module.scss'

interface Props {
	children: JSX.Element
}

const LayoutSilicon = (props: Props) => {
	return <div className={styles.main}>{props.children}</div>
}

export default LayoutSilicon
