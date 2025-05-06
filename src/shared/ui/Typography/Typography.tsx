import clsx from 'clsx'
import styles from "./typography.module.css"


type Theme = 'black' | 'pink'

interface Typography {
    type: 'title' | 'subtitle' | 'caption' | 'text'
    text: string
    theme?: Theme
}

type TypographyFlavour = Omit<Typography, 'type'>

export function Title({ text, theme = "pink"  }: TypographyFlavour) {
    return <h2 className={clsx(styles[theme], styles.title)}>{text}</h2>
}

export function Subtitle({ text, theme = 'black' }: TypographyFlavour) {
    return <p className={clsx(styles[theme], styles.subtitle)}>{text}</p>
}

export function Text({ text, theme = 'black' }: TypographyFlavour) {
    return <p className={clsx(styles[theme], styles.text)}>{text}</p>
}

export function Caption({ text, theme = 'black' }: TypographyFlavour) {
    return <p className={clsx(styles[theme], styles.caption)}>{text}</p>
}


export default function Typography({ type, text}: Typography) {
    const Component = {
        title: Title,
        subtitle: Subtitle,
        caption: Caption,
        text: Text
    }[type]

    return <Component text={text} />
}
