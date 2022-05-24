import {
  FildNameType,
  InitialDataCartContextType,
  ReducerTypeAction
} from './CartContext.interfaces'

export type ActionTypeReducer = {
  type: ReducerTypeAction
  fildName?: FildNameType
  payload: any
}

const CartContextReducer = (
  state: InitialDataCartContextType,
  action: ActionTypeReducer
): InitialDataCartContextType => {
  const { payload, type } = action

  switch (type) {
    case 'addCart':
      return { qtd: payload.qtd, products: payload.products }
    case 'initialCart':
      return { qtd: payload.qtd, products: payload.products }
    default:
      return { ...state }
  }
}

export { CartContextReducer }
