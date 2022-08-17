import Link from 'next/link'
import Image from 'next/image'

import styles from './Search.module.scss'

export default function Search() {
    // spine.svg
    // docs_logo.png
    return (
        <div className={styles.search}>
            <Link href='/'>
                <a className={styles.logo}>
                    <Image src="/spine.svg" alt="Godot Spine Logo" width={200} height={200} />
                </a>
            </Link>
            <div className={styles.versions}>
                Godot v3.5 Spine v4.1
            </div>
        </div>
    )
}