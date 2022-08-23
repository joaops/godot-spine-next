import Head from 'next/head'
import Link from 'next/link'

export default function Home({ locale, data, content }) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}

export async function getStaticPaths({ locales }) {
    // É gerado em tempo de compilação apenas as páginas index de cada idioma
    // O resto é gerado em tempo de execução, quando o usuário acessa a página
    const paths = locales.map(locale => (
        { params: { params: [] }, locale }
    ))
    // console.log(paths)
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { getFileByParamsAndLocale } = require('../libs/file-loader')
    const { locale } = context
    const { params = [] } = context.params
    // console.log('params: ', params)
    const file = getFileByParamsAndLocale(params, locale)

    if (file == null) {
        return {
            notFound: true
        }
    }

    const { marked } = require('marked')
    const DOMPurify = require('isomorphic-dompurify')
    const { renderToString } = require('react-dom/server');

    var renderer = new marked.Renderer()

    renderer.link = function (href, title, text) {
        // Pega o Componente React/Next e Renderiza para String
        return renderToString(
            <Link href={href} locale={locale} title={title} >
                <a>{text}</a>
            </Link>
        )
    }

    marked.setOptions({
        renderer: renderer,
        highlight: function (code, lang) {
            const hljs = require('highlight.js');
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
        // langPrefix: 'hljs langugage-' // 'langugage-'
    })

    return {
        props: {
            locale,
            data: file.data,
            content: DOMPurify.sanitize(marked.parse(file.content))
            // content: marked.parse(file.content)
        }
    }
}