import { StandardUIMenu } from '../../types'
import styles from './LayoutMenu.module.scss'

interface Props {
	menuItems: StandardUIMenu.TopLevelEntry[]
	menuRenderFunc: StandardUIMenu.RenderFunc
}

export type MenuRenderFunc = (
	children: JSX.Element,
	target: string,
	classNames: string,
	activeClass: string,
) => JSX.Element

const LayoutMenu = (props: Props) => {
	return (
		<div className={styles.main}>
			{props.menuItems.map((topLevelMenuEntry) => {
				if (topLevelMenuEntry.Children) {
					return <>TODO: nested menu</>
				}

				return props.menuRenderFunc(
					<>
						{topLevelMenuEntry.Icon}
						<div>{topLevelMenuEntry.Label}</div>
					</>,
					topLevelMenuEntry.To,
					'',
					'',
				)
			})}
		</div>
	)
}

const defaultProps: Props = {
	menuItems: [],
	menuRenderFunc: (
		children: JSX.Element,
		target: string,
		classNames: string,
		activeClass: string,
	) => {
		return (
			<a href={target} className={`${classNames} ${activeClass}`}>
				{children}
			</a>
		)
	},
}

LayoutMenu.defaultProps = defaultProps

export default LayoutMenu
