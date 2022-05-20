import React from 'react'
import HeroBannerImage from '../../Assets/imgs/BannerHome.png'
import { ContainerHeroBanner } from './style'

function HeroBanner() {
  return (
    <ContainerHeroBanner>
      <div>
        <img
          className="ImageBanner"
          src={HeroBannerImage}
          alt="Banner central da home"
        />
      </div>
    </ContainerHeroBanner>
  )
}

export default HeroBanner
