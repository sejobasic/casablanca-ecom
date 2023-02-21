import Link from 'next/link'
import React from 'react'

function HeroBanner() {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='hero-sofa'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img
          className='hero-banner-image'
          src=''
          alt='Logan Upholstered Loveseat'
        />
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
