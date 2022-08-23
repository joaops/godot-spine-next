import Link from 'next/link'

import styles from './Breadcrumb.module.scss'

export default function Breadcrumb() {
    return (
        <div className={styles.breadcrumb}>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='https://github.com/joaops/godot-spine-next'>
                    <a>Edit on GitHub</a>
                </Link>
            </div>
            <hr />
        </div>
    )
}