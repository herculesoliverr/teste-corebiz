import React from 'react'
import {
  HeaderContainer,
  HeaderItens,
  MyAccount,
  Cart,
  FormSearch
} from './style'
import LogoCorebiz from '../../Assets/imgs/logoCorebiz.png'
import { FiUser, FiShoppingCart } from 'react-icons/fi'

function Header() {
  return (
    <HeaderContainer>
      <HeaderItens>
        <img className="LogoCorebiz" src={LogoCorebiz} alt="Logo da Corebiz" />
        <FormSearch>
          <input
            className="SearchInput"
            type="text"
            placeholder="O que está procurando?"
          />
        </FormSearch>
        <div className="ItensRight">
          <MyAccount>
            <FiUser size={'24px'} />
            <span className="MyAccountText">Minha conta</span>
          </MyAccount>
          <Cart>
            <FiShoppingCart size={'22px'} />
            <span className="CountCart">1</span>
          </Cart>
        </div>
      </HeaderItens>
    </HeaderContainer>
  )
}

export default Header
