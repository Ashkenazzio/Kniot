import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Indie_Flower } from '@next/font/google';
import { Open_Sans } from '@next/font/google';
import Head from 'next/head';

export const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie-flower',
});

export const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const gveretLevin = localFont({
  src: '../public/webfonts/GveretLevinAlefAlefAlef-Regular.woff',
  variable: '--font-gveretLevin',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kniot</title>
      </Head>
      <div
        className={`${gveretLevin.variable} font-cursive bg-bg text-body min-h-full`}
      >
        <Component {...pageProps} />;
      </div>
    </>
  );
}
