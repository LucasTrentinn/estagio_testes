import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu'
import ProductsContext from '../context/ProductsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ProductsContext>
        <Menu />
        <Component {...pageProps} />
      </ProductsContext>
    </div>
  )
}

export default MyApp
