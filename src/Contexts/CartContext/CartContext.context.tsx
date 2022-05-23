import React, { createContext } from 'react'

import { ActionTypeReducer } from './CartContext.reducer'
import {
  InitialDataCartContext,
} from './CartContext.initialData'
import { InitialDataCartContextType } from './CartContext.interfaces'

export type CartContextType = {
  cartContextState: InitialDataCartContextType
  cartContextDispatch: React.Dispatch<ActionTypeReducer>
}

const CartContext = createContext<CartContextType>({
  cartContextState: InitialDataCartContext,
  cartContextDispatch: (): void => {},
})

export { CartContext }
