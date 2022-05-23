type FildNameType = 'qtd' | 'products'
type ReducerTypeAction =
  | 'addCart'
  | 'initialCart'

interface InitialDataCartContextType {
  [key: string]: any
  qtd: number
  products: Array<any>
}

export type {
  InitialDataCartContextType,
  FildNameType,
  ReducerTypeAction,
}
