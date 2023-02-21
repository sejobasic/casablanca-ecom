import Link from 'next/link'
import React from 'react'
import { urlFor } from 'lib/client'

function HeroBanner({ bannerData }) {
  console.log(bannerData)
  return (
    <div
      className='hero-banner-container'
      style={{ backgroundImage: `url(${urlFor(bannerData.image)})` }}
    >
      <div>
        <p className='hero-sofa'>{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <div>
          <Link href='/product/ID'>
            <button type='button'>TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESC HERE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
