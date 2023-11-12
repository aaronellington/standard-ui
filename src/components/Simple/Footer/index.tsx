import { Menu } from '../../../modules/menu'
import classes from './Footer.module.scss'

type Props = {
	menu: Menu.Menu
	children: JSX.Element
}

const defaultProps: Props = {
	menu: new Menu.Menu([]),
	children: <></>,
}

const Footer = (props: Props) => {
	let menu = <></>
	if (props.menu.entries.length !== 0) {
		menu = (
			<div className={classes.menu}>
				{props.menu.entries.map((entry) => {
					return props.menu.RenderFunc(
						<>
							{entry.Icon}
							{entry.Label}
						</>,
						entry.To,
						classes.menuEntry,
						'',
					)
				})}
			</div>
		)
	}

	return (
		<div className={classes.main}>
			{menu}
			{props.children}
		</div>
	)
}

Footer.defaultProps = defaultProps

export default Footer
