import { StandardUIMenu } from '../../types'

interface Props {
	className: string
	entries: StandardUIMenu.TopLevelEntry[]
	renderFunc?: StandardUIMenu.RenderFunc
}

const LayoutMenu = (props: Props) => {
	const func = props.renderFunc || StandardUIMenu.DefaultRenderFunc

	if (props.entries.length === 0) {
		return <></>
	}

	return (
		<div className={props.className}>
			{props.entries.map((topLevelMenuEntry, i) => {
				if (topLevelMenuEntry.Children) {
					return <>TODO: nested menu</>
				}

				if (topLevelMenuEntry.To.startsWith('http')) {
					return (
						<a
							key={i}
							href={topLevelMenuEntry.To}
							target="_blank"
							rel="noreferrer"
						>
							{topLevelMenuEntry.Icon}
							<div>{topLevelMenuEntry.Label}</div>
						</a>
					)
				}

				return func(
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
	entries: [],
	renderFunc: undefined,
	className: '',
}

LayoutMenu.defaultProps = defaultProps

export default LayoutMenu
