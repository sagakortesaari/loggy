import type { AppProps } from 'next/app'
import "@styles/app.css"
import { MenuBar } from "@components/menu"
import { ThemeContext } from "@context/ThemeContext"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeContext>
      <MenuBar />
      <Component {...pageProps} />
    </ThemeContext>
  </>
}
