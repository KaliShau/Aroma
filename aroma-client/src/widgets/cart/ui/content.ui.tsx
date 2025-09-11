'use client'

import { Dispatch, FC, SetStateAction } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/app/store/store'

import { useCoffeeById } from '@/features/coffee'

import { CoffeeMiniCard } from '@/entities/coffee/ui/coffee-mini-card/coffee-mini-card.ui'

import { removeItem, updateQuantity } from '../lib/cart.slice'
import styles from './cart.module.scss'

type TypeSetIsShowCart = {
  setIsShowCart?: Dispatch<SetStateAction<boolean>>
}

const CartItem: FC<
  TypeSetIsShowCart & { itemId: string; quantity: number }
> = ({ itemId, setIsShowCart, quantity }) => {
  const { data, isLoading } = useCoffeeById(itemId)

  if (isLoading) return <div>Loading</div>
  if (!data) return <div>Товар не найден</div>

  return (
    <CoffeeMiniCard
      updateQuantity={updateQuantity}
      removeItem={removeItem}
      quantity={quantity}
      onClick={() => setIsShowCart?.(false)}
      coffee={data}
    />
  )
}

export const CartContent: FC<TypeSetIsShowCart> = ({ setIsShowCart }) => {
  const items = useSelector((state: RootState) => state.cart.items)

  if (items.length == 0)
    return <div className={styles.empty}>Корзина пуста</div>

  return (
    <div className={styles.content}>
      {items.map(item => (
        <CartItem
          key={item.id}
          quantity={item.quantity}
          itemId={item.id}
          setIsShowCart={setIsShowCart}
        />
      ))}
    </div>
  )
}
