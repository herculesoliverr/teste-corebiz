import React from 'react'
import Header from '../../Components/Header'
import HeroBanner from '../../Components/HeroBanner/HeroBanner'
import Products from '../../Components/Products/Products'

export function Home() {
  return (
    <div className="container-main">
      <Header />
      <HeroBanner />
      <Products />
    </div>
  )
}
