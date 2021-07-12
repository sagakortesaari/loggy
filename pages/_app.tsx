import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MenuBar from '../components/menu'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <MenuBar />
    <Component {...pageProps} />
  </>
}
export default MyApp
