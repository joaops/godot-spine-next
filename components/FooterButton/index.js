import Link from 'next/link'

import styles from './FooterButton.module.scss'

export default function FooterButton({ children = <span>Button</span>, href = '/' }) {
    return (
        <Link href={href}>
            <a className={styles.button}>{children}</a>
        </Link>
    )
}