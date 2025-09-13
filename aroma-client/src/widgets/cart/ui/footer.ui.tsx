'use client'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/store/store'

import { useCoffeeByIds } from '@/features/coffee'
import { useCreatePayment } from '@/features/payment/hooks/create-payment.hook'
import { useProfile } from '@/features/user'

import Spinner from '@/shared/assets/icons/spinner.svg'
import { GUEST_ROUTES } from '@/shared/configs/routes.config'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { clearCart } from '../lib/cart.slice'
import styles from './cart.module.scss'

export const CartFooter = () => {
  const items = useSelector((state: RootState) => state.cart.items)
  const { isAuth } = useProfile()
  const { isPending, mutate } = useCreatePayment(clearCart)

  const { data: allCoffees } = useCoffeeByIds(items.map(item => item.id))

  const total = items.reduce((acc, item) => {
    const coffee = allCoffees?.find(coffee => coffee.id === item.id)
    return coffee ? acc + coffee.price * item.quantity : acc
  }, 0)

  if (items.length === 0)
    return <div className={styles.footer}>Корзина пуста</div>

  const createPayment = () => {
    mutate({
      items: items.map(item => ({
        coffeeId: item.id,
        quantity: item.quantity
      }))
    })
  }

  return (
    <div className={styles.footer}>
      <h3>Summary</h3>
      <p>
        Total: <span>{total} ₽</span>
      </p>
      {isAuth ? (
        <Link
          isButton={true}
          model={EnumModelLink.fill}
          onClick={createPayment}
          disabled={isPending}
        >
          {isPending ? <Spinner /> : 'Pay'}
        </Link>
      ) : (
        <Link href={GUEST_ROUTES.generateCode()} model={EnumModelLink.fill}>
          Sign in
        </Link>
      )}
    </div>
  )
}
