import React, { useEffect } from 'react'
import {
  HeaderContainer,
  HeaderItens,
  MyAccount,
  Cart,
  FormSearch
} from './style'
import LogoCorebiz from '../../Assets/imgs/logoCorebiz.png'
import IconMenu from '../../Assets/imgs/IconMenu.svg'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from '../../Contexts/CartContext/CartContext.provider'

function Header() {
  const {
    cartContextState: { qtd },
    cartContextDispatch
  } = useCartContext()

  useEffect(() => {
    let cart = localStorage.getItem('cart')
    if (cart) {
      let cartValue = JSON.parse(cart)
      cartContextDispatch({
        payload: cartValue,
        type: 'initialCart'
      })
    }
  }, [])

  useEffect(() => {}, [qtd])

  return (
    <HeaderContainer>
      <HeaderItens>
        <img className="iconMenu" src={IconMenu} alt="Icone do menu mobile" />
        <img className="LogoCorebiz" src={LogoCorebiz} alt="Logo da Corebiz" />
        <FormSearch className="formSearchDesktop">
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
            <span className="CountCart">{qtd}</span>
          </Cart>
        </div>
      </HeaderItens>
      <FormSearch className="formSearchMobile">
        <input
          className="SearchInput"
          type="text"
          placeholder="O que está procurando?"
        />
      </FormSearch>
    </HeaderContainer>
  )
}

export default Header
