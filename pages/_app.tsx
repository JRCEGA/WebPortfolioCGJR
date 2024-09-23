import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'], // Optional, if you need italic styles
  display: 'swap', // Optional, for better performance
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
