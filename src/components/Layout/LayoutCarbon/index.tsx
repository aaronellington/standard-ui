import styles from './LayoutCarbon.module.scss'

interface Props {
	children: JSX.Element
	header: JSX.Element
	footer: JSX.Element
}

const LayoutSilicon = (props: Props) => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>{props.header}</div>
			<div className={styles.body}>{props.children}</div>
			<div className={styles.footer}>{props.footer}</div>
		</div>
	)
}

export default LayoutSilicon
