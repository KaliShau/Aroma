'use client'

import { Dispatch, FC, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/store/store'

import { useCoffeeById } from '@/features/coffee'

import { CoffeeMiniCard } from '@/entities/coffee/ui/coffee-mini-card/coffee-mini-card.ui'

import Cross from '@/shared/assets/icons/cross.svg'

import { removeItem, updateQuantity } from '../lib/cart.slice'
import styles from './cart.module.scss'

type TypeSetIsShowCart = {
  setIsShowCart?: Dispatch<SetStateAction<boolean>>
}

const CartItem: FC<
  TypeSetIsShowCart & { itemId: string; quantity: number }
> = ({ itemId, setIsShowCart, quantity }) => {
  const { data, isLoading } = useCoffeeById(itemId)
  const dispatch = useDispatch()

  if (isLoading) return <div className={styles.wrapper}>Loading</div>
  if (!data)
    return (
      <div className={styles.wrapper}>
        Товар не найден
        <button onClick={() => dispatch(removeItem(itemId))}>
          <Cross />
        </button>
      </div>
    )

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
