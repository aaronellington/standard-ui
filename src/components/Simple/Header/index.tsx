import { Menu } from '../../../modules/menu'
import classes from './Header.module.scss'

type Props = {
	brand: Menu.MenuEntry
	menu: Menu.Menu
}

const defaultProps: Props = {
	menu: new Menu.Menu([]),
	brand: {
		content: <>x</>,
		to: '/',
	},
}

const Header = (props: Props) => {
	return (
		<div className={classes.main}>
			{props.menu.RenderFunc(
				<>{props.brand.content}</>,
				props.brand.to,
				classes.brand,
				'',
			)}

			<div className={classes.menu}>
				{props.menu.entries.map((entry) => {
					return props.menu.RenderFunc(
						entry.content,
						entry.to,
						classes.menuEntry,
						'',
					)
				})}
			</div>
		</div>
	)
}

Header.defaultProps = defaultProps

export default Header
