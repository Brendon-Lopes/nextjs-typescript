import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Conheça a HVEX: Somos única fabricante
            de equipamentos para laboratório de alta tensão,
            Unimos essas duas expertises com intuito de oferecer
            tecnologias incorporadas às áreas de smart city e smart grid,
            expandindo inovação e análise de dados para o setor elétrico."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
