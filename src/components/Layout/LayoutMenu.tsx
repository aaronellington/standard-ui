import { TopLevelMenuEntry } from '../../data/menu'
import styles from './LayoutMenu.module.scss'

interface Props {
	menuItems: TopLevelMenuEntry[]
}

export const LayoutMenu = (props: Props) => {
	return (
		<div className={styles.main}>
			{props.menuItems.map((topLevelMenuEntry, i) => {
				if (topLevelMenuEntry.Children) {
					return <>TODO: nested menu</>
				}

				return (
					<a href={topLevelMenuEntry.To} key={i}>
						{topLevelMenuEntry.Label}
					</a>
				)
			})}
		</div>
	)
}
