import { TopLevelMenuEntry } from '../../data/menu'
import { LayoutMenu } from './LayoutMenu'
import styles from './LayoutStandard.module.scss'

interface Props {
	children: JSX.Element
	mainMenu: TopLevelMenuEntry[]
}

export const LayoutStandard = (props: Props) => {
	return (
		<div className={styles.page}>
			<div className={styles.pageHeader}>
				<div className={styles.pageHeaderBrand}>brand</div>
				<div className={styles.pageHeaderMenu}>
					<LayoutMenu menuItems={props.mainMenu} />
				</div>
			</div>
			<div className={styles.pageBody}>
				<div className={styles.pageBodyContent}>{props.children}</div>
			</div>
			<div className={styles.pageFooter}>footer</div>
		</div>
	)
}
