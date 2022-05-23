import React, { useContext, useReducer } from 'react'

import { CartContext } from './CartContext.context'
import { CartContextReducer } from './CartContext.reducer'
import { InitialDataCartContext } from './CartContext.initialData'

interface teste {
  children: JSX.Element
}

const CartContextProvider: React.FC<teste> = ({ children }): JSX.Element => {
  const [cartContextState, cartContextDispatch] = useReducer(
    CartContextReducer,
    InitialDataCartContext
  )

  return (
    <CartContext.Provider value={{ cartContextState, cartContextDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext);

export { CartContextProvider }
