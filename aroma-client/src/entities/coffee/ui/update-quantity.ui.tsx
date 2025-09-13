import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import { TypeCartItem } from '@/shared/models/cart-item.type'

import { TypeCoffee } from '../model/coffee.type'
import styles from './style.module.scss'

type TypeUpdateQuantity = {
  coffee: TypeCoffee
  quantity: number
  updateQuantity: ActionCreatorWithPayload<TypeCartItem>
  removeItem: ActionCreatorWithPayload<string>
}

export const UpdateQuantity: FC<TypeUpdateQuantity> = ({
  coffee,
  quantity,
  removeItem,
  updateQuantity
}) => {
  const dispatch = useDispatch()

  const handleButtonClick = (
    e: React.MouseEvent,
    action: 'increment' | 'decrement'
  ) => {
    e.preventDefault()
    e.stopPropagation()

    if (action === 'increment') {
      if (quantity >= 100) return toast.error('You have exceeded the limit!')
      dispatch(updateQuantity({ id: coffee.id, quantity: quantity + 1 }))
    } else {
      if (quantity <= 1) {
        dispatch(removeItem(coffee.id))
        return toast.success('Item has been successfully deleted!')
      }
      dispatch(updateQuantity({ id: coffee.id, quantity: quantity - 1 }))
    }
  }

  return (
    <div className={styles.updateQuantity}>
      <button onClick={e => handleButtonClick(e, 'decrement')}>-</button>
      <button>{quantity}</button>
      <button onClick={e => handleButtonClick(e, 'increment')}>+</button>
    </div>
  )
}
