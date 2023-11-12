import { menu } from '../../../modules/menu'
import classes from './Footer.module.scss'

type Props = {
	menu: menu.Menu
	caption: JSX.Element
}

const defaultProps: Props = {
	menu: new menu.Menu([]),
	caption: <></>,
}

const Footer = (props: Props) => {
	return (
		<div className={classes.main}>
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
			<div>{props.caption}</div>
		</div>
	)
}

Footer.defaultProps = defaultProps

export default Footer
