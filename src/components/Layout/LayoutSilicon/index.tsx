import styles from './layoutSilicon.module.scss'

interface Props {
	children: JSX.Element
}

const LayoutSilicon = (props: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.header}>Header</div>
				<div className={styles.body}>{props.children}</div>
				<div className={styles.footer}>Footer</div>
			</div>
			{/* <div className={styles.sidebar + ' ' + styles.left}>left</div>
			<div className={styles.sidebar + ' ' + styles.right}>Right</div> */}
		</div>
	)
}

export default LayoutSilicon
