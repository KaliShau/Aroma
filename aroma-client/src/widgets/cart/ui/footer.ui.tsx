'use client'

import { useSelector } from 'react-redux'

import { RootState } from '@/app/store/store'

import { useCoffeeById, useCoffeeByIds } from '@/features/coffee'

import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './cart.module.scss'

export const CartFooter = () => {
  const items = useSelector((state: RootState) => state.cart.items)

  const { data: allCoffees } = useCoffeeByIds(items.map(item => item.id))

  const total = items.reduce((acc, item) => {
    const coffee = allCoffees?.find(coffee => coffee.id === item.id)
    return coffee ? acc + coffee.price * item.quantity : acc
  }, 0)

  return (
    <div className={styles.footer}>
      <h3>Summary</h3>
      <p>
        Total: <span>{total} ₽</span>
      </p>
      <Link isButton={true} model={EnumModelLink.fill}>
        Pay
      </Link>
    </div>
  )
}
