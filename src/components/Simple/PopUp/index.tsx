import { useCallback, useEffect } from 'react'
import classes from './PopUp.module.scss'

type Props = {
	children: any
	open: boolean
	setOpen: (newValue: boolean) => void
}

const PopUp = (props: Props) => {
	const escFunction = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			props.setOpen(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false)

		return () => {
			document.removeEventListener('keydown', escFunction, false)
		}
	}, [escFunction])

	if (!props.open) {
		return <></>
	}

	return (
		<>
			<div
				className={classes.cover}
				onClick={() => {
					props.setOpen(false)
				}}
			></div>
			{props.children}
		</>
	)
}

export default PopUp
