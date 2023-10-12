import { StandardUIMenu } from '../../types'
import LayoutMenu from './LayoutMenu'
import styles from './LayoutStandard.module.scss'

interface Props {
	children: JSX.Element
	footer: JSX.Element
	footerMenu: StandardUIMenu.TopLevelEntry[]
	mainMenu: StandardUIMenu.TopLevelEntry[]
	brand: JSX.Element
	renderMenuFunc?: StandardUIMenu.RenderFunc
}

const LayoutStandard = (props: Props) => {
	return (
		<div className={styles.page}>
			<div className={styles.pageHeader}>
				<div className={styles.pageHeaderBrand}>{props.brand}</div>
				<LayoutMenu
					className={styles.pageHeaderMenu}
					entries={props.mainMenu}
					renderFunc={props.renderMenuFunc}
				/>
			</div>
			<div className={styles.pageBody}>
				<div className={styles.pageBodyContent}>{props.children}</div>
			</div>
			<div className={styles.pageFooter}>
				<LayoutMenu
					className={styles.pageFooterMenu}
					entries={props.footerMenu}
					renderFunc={props.renderMenuFunc}
				/>
				<footer>{props.footer}</footer>
			</div>
		</div>
	)
}

export default LayoutStandard
