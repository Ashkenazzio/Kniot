import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='rtl' lang='he'>
      <Head>
        <link
          rel='preload'
          href='/kniot/public/webfonts/GveretLevinAlefAlefAlef-Regular.woff'
          as='font'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
