import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MenuBar } from "@components/menu";
import { ThemeContext } from "@context/ThemeContext"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeContext>
      <MenuBar />
      <Component {...pageProps} />
    </ThemeContext>
  </>
}
