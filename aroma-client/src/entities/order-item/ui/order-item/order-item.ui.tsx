import { FC } from 'react'

import { CoffeeCardOrder } from '@/entities/coffee'
import { TypeOrderItem } from '@/entities/order-item'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './order-item.module.scss'

type CoffeeOrderItem = {
  orderItem: TypeOrderItem
}

export const OrderItem: FC<CoffeeOrderItem> = ({ orderItem }) => {
  return (
    <Link
      href={PUBLIC_ROUTES.menu(orderItem.coffee.slug)}
      className={styles.root}
    >
      <CoffeeCardOrder coffee={orderItem.coffee} key={orderItem.orderId} />
      <div className={styles.data}>
        <p>
          Quantity: <span>{orderItem.quantity}</span>
        </p>
        <p>
          Total: <span>{orderItem.total} ₽</span>
        </p>
      </div>
    </Link>
  )
}
