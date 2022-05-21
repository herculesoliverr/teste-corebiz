import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header'
import HeroBanner from '../../Components/HeroBanner/HeroBanner'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Products from '../../Components/Products/Products'

export function Home() {
  return (
    <div className="container-main">
      <Header />
      <HeroBanner />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}
