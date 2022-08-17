import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function Home({ titulo, description, paragrafo, paragrafo2 }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{titulo}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <h1>{titulo}</h1>
            <p>{description}</p>
            <p>{paragrafo}</p>
            <p>{paragrafo2}</p>
        </div>
    )
}

export async function getStaticProps({ locale }) {
    let titulo = "Godot Spine"
    let description = "Documentation site and tutorials for the spine-godot module."
    let paragrafo = "Welcome to the unofficial spine-runtime module documentation for Godot."
    let paragrafo2 = "Website under construction."
    if (locale === 'pt' || locale === 'pt-BR') {
        titulo = "Godot Spine"
        description = "Site de documentação e tutoriais para o módulo spine-godot."
        paragrafo = "Bem-vindo à documentação não oficial do módulo spine-runtime para Godot."
        paragrafo2 = "Site em construção."
    }
    return {
        props: {
            titulo,
            description,
            paragrafo,
            paragrafo2
        }
    }
}