import { menu } from '../../../modules/menu'
import classes from './Header.module.scss'

type Props = {
	brand: menu.MenuEntry
	menu: menu.Menu
}

const defaultProps: Props = {
	menu: new menu.Menu([]),
	brand: {
		Icon: <>x</>,
		Label: '',
		To: '/',
	},
}

const Header = (props: Props) => {
	return (
		<div className={classes.main}>
			{props.menu.RenderFunc(
				<>
					{props.brand.Icon} - {props.brand.Label}
				</>,
				props.brand.To,
				classes.brand,
				'',
			)}

			<div className={classes.menu}>
				{props.menu.entries.map((entry) => {
					return props.menu.RenderFunc(
						<>
							{entry.Icon} - {entry.Label}
						</>,
						entry.To,
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
