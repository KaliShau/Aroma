import { Dispatch, SetStateAction } from 'react'

export type TypeQuantitySelector = {
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
}
