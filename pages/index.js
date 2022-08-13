import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home({ titulo, description, paragrafo }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{titulo}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
        </div>
    )
}

export async function getStaticProps({ locale }) {
    // console.log(locale)
    // qual é a melhor forma de fazer a internacionalização em um site?
    // acho que eu posso carregar o conteúdo a partir de um arquivo CSV assim como é feito pelo Godot
    let titulo = "Spine-runtime Module Documentation for Godot"
    let description = "Documentation site and tutorials for the spine-godot module."
    let paragrafo = "Welcome to the unofficial spine-runtime module documentation for Godot."
    if (locale === 'pt' || locale === 'pt-BR') {
        titulo = "Documentação do Módulo spine-runtime para Godot"
        description = "Site de documentação e tutoriais para o módulo spine-godot."
        paragrafo = "Bem-vindo à documentação não oficial do módulo spine-runtime para Godot."
    }
    return {
        props: {
            titulo,
            description,
            paragrafo
        }
    }
}