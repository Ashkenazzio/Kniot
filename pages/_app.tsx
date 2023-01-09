import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Indie_Flower } from '@next/font/google';

export const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const gveretLevin = localFont({
  src: '../public/webfonts/GveretLevinAlefAlefAlef-Regular.woff',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={gveretLevin.className}>
      <Component {...pageProps} />;
    </div>
  );
}
