import '@/styles/globals.css'
import '@/styles/hero.css'
import '@/styles/footer.css'
import '@/styles/product.css'
import '@/styles/cart.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
