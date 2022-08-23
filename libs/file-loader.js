import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Caminho Absoluto da pasta de localização dos idiomas.
const localesDirectory = path.join(process.cwd(), 'locales')

// Função que retorna os dados de um arquivo markdown com base nos parâmetros e idioma
export function getFileByParamsAndLocale(params = [], locale = 'en') {
    // Pega o nome de todas as pastas de localização. Saída: [ 'en', 'pt-BR' ]
    const localeFolders = fs.readdirSync(localesDirectory)
    // se a linguagem existe, se o caminho está em getStaticPaths, mas a pasta de localização não está dentro do diretório docs
    if (!localeFolders.includes(locale)) {
        console.log(`Locale Folder '${locale}' Not Exists in '${localesDirectory}'`)
        return null
    }

    // Pega o caminho absoluto da pasta de localização do idioma.
    const localeFolder = path.join(localesDirectory, locale)
    // console.log(localeFolder)

    // usa os parâmetros para localizar o arquivo markdown
    const filepath = findFile(params, localeFolder)
    // console.log(filepath)
    if (filepath == null) {
        console.log(`File Not Found.`)
        return null
    }

    // carrega o arquivo markdown
    const fileContents = fs.readFileSync(filepath, 'utf8')
    // extrai os metadados e o conteúdo do arquivo markdown
    const { data, content } = matter(fileContents)
    // console.log(data)
    // console.log(content)
    return { data, content }
}

function findFile(params = [], localeFolder = '') {
    // console.log('findFile')
    // juntar os parâmetros com \\
    const filepath = path.join(localeFolder, params.join('\\'))
    // console.log(filepath)
    // verificar se é um arquivo markdown e se ele existe
    if (fs.existsSync(filepath + '.md')) {
        return filepath + '.md'
    } else {
        // se não é um arquivo markdown, verificar se é um diretório
        if (fs.existsSync(filepath)) {
            // se for um diretório, localiza o arquivo index.md
            const indexFile = path.join(filepath, 'index.md')
            // console.log(indexFile)
            // se o arquivo não existir, retorna null
            if (!fs.existsSync(indexFile)) {
                console.log(`File Index '${indexFile}' Not Exists`)
                return null
            }
            return indexFile
        } else {
            // se não é um arquivo markdown e nem um diretório, retorna null
            return null
        }
    }
}