import { HeroBanner, Product, FooterBanner } from '../../components'
import React from 'react'

function Home() {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>The Best of Modern Furniture</h2>
        <p>Great Selection of Furniture, Décor and More! </p>
      </div>
      <div className='products-container'>
        {['product1', 'product2'].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home
