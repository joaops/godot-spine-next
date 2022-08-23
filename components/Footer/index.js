import Link from 'next/link'
import Image from 'next/image'

import FooterButton from '../FooterButton'

import styles from './Footer.module.scss'

export default function Footer({ prev = null, next = null }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.buttonsContainer}>
                {prev &&
                    <FooterButton href={prev}>
                        <Image className={styles.svgImage} src="/left-arrow.svg" alt="Left Arrow" width={20} height={20} />
                        <span style={{ marginLeft: '8px' }}>Previous</span>
                    </FooterButton>
                }
                {!prev && <span />}
                {next &&
                    <FooterButton href={next}>
                        <span style={{ marginRight: '8px' }}>Next</span>
                        <Image className={styles.svgImage} src="/right-arrow.svg" alt="Right Arrow" width={20} height={20} />
                    </FooterButton>
                }
            </div>
            <div>
                <hr />
            </div>
            <p style={{ margin: '0 0 14px 0' }}>
                © Copyright 2022, João Paulo Siqueira (MIT license).
            </p>
            <p>
                Built with <Link href='https://nextjs.org/'>
                    <a>Next.js</a>
                </Link> using a theme inspired by the <Link href='https://docs.godotengine.org/'>
                    <a>Godot Docs</a>
                </Link>.
            </p>
        </footer>
    )
}