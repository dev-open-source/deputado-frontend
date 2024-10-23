import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Deputado Jeferson Fernandes</title>
        <link rel="short icon" href="/img/icon-512.png"></link>
        <link rel="apple touch icon" href="/img/icon-512.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="description" content="DepUtado frontend"></meta>
        <DefaultSeo {...SEO} />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
