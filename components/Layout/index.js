import Link from 'next/link'

import Search from '../Search'

import styles from './Layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <nav className={styles.sidenav}>
                <Search />
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </nav>
            <div className={styles.main}>
                <div className={styles.breadcrumb}></div>
                {children}
                <div className={styles.footer}></div>
            </div>
        </div>
    )
}