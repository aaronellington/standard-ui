import { ReactNode } from 'react'
import classes from './Article.module.scss'

interface Props {
	children: ReactNode
}

export const Article = (props: Props) => {
	return <article className={classes.main}>{props.children}</article>
}
