import { HeroBanner, Product, FooterBanner } from '../../components'
import { client } from '../../lib/client'
import React from 'react'

function Home({ products, banners}) {
  return (
    <>
      <HeroBanner bannerData={banners[0]} />

      <div className='products-heading'>
        <h2>The Best of Modern Furniture</h2>
        <p>Great Selection of Furniture, Décor and More! </p>
      </div>
      <div className='products-container'>
        {products.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  // Grab all products from sanity dashboard
  const productsQuery = '*[_type == "product"]'
  const products = await client.fetch(productsQuery)

  const bannerQuery = '*[_type == "banner"]'
  const banners = await client.fetch(bannerQuery)

  return {
    props: { products, banners}
  }
}

export default Home
