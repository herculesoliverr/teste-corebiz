import React from 'react'
import { ContainerAddress, ContainerContacts, ContainerFooter } from './style'
import LogoFooter from '../../Assets/imgs/LogosFooter.png'
import IconMail from '../../Assets/imgs/Iconmail.svg'
import IconTelemarkting from '../../Assets/imgs/Icontelemarkting.svg'

function Footer() {
  return (
    <ContainerFooter>
      <div className="mainGrid">
        <div className="childrenGrid">
          <ContainerAddress>
            <h1 className="addressTitle">Localização</h1>
            <p className="addressFooter">
              Avenida Andrômeda, 2000. Bloco 6 e 8 <br /> Alphavile SP <br />
              brasil@corebiz.ag <br /> +55 11 3090 1039
            </p>
          </ContainerAddress>
        </div>
        <div className="childrenGrid">
          <ContainerContacts>
            <div className="contact">
              <img src={IconMail} alt="" />
              <p>Entre em contato</p>
            </div>
            <div className="consult">
              <img src={IconTelemarkting} alt="" />
              <p>Fale com o nosso consultor online</p>
            </div>
          </ContainerContacts>
        </div>
        <div className="childrenGrid">
          <img src={LogoFooter} alt="Logos de empresas parceiras" />
        </div>
      </div>
    </ContainerFooter>
  )
}

export default Footer
