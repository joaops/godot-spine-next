# Godot Spine

Site não oficial de documentação e tutoriais para o módulo spine-godot.

## Iniciando o Projeto em Modo de Desenvolvimento

Para iniciar o projeto no modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

Então abra o endereço [http://localhost:3000](http://localhost:3000) no seu navagador para ver o resultado.

## Iniciando o Projeto em Modo Produção

Para iniciar o projeto no modo produção, primeiro é necessário compilar o projeto. Para isso, execute o comando:

```bash
npm run build
```

Uma vez compilado, o projeto estará pronto para ser executado com o comando:

```bash
npm start
```

Navegue até o endereço [http://localhost:3000](http://localhost:3000) no seu navagador para ver o resultado.

## Adicionando um Nova Linguagem

Primeiro é necessário adicionar o código da linguagem no arquivo `next.config.js`, na propriedade `locales`.

Depois é necessário criar uma cópia da pasta `en`, que está dentro da pasta `locales`, e renomear para o mesmo código da linguagem escolhida.

Por fim, iniciar a tradução do conteúdo dos arquivos.

**Não pode renomear os arquivos.**

No cabeçalho de metadados, traduza apenas a propriedade `title` e `description`.

Depois de traduzir, faça o commit e push para o repositório.