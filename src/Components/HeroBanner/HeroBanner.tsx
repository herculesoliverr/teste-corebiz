import React from 'react'
import HeroBannerImage from '../../Assets/imgs/BannerHome.png'
import HeroBannerMobile from '../../Assets/imgs/BannerMobile.svg'
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
        <img
          className="ImageBannerMobile"
          src={HeroBannerMobile}
          alt="Banner central da home mobile"
        />
      </div>
    </ContainerHeroBanner>
  )
}

export default HeroBanner
