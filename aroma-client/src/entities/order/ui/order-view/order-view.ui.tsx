import { FC } from 'react'

import { OrderItem } from '@/entities/order-item'

import { Status } from '@/shared/ui/status/status.ui'

import { TypeOrder } from '../../model/order.type'
import styles from './order-view.module.scss'

type TypeOrderView = {
  data: TypeOrder
}

export const OrderView: FC<TypeOrderView> = ({ data }) => {
  return (
    <div className={styles.root}>
      <h2>
        Order #<span>{data.id}</span>
      </h2>
      <span>
        Status: <Status status={data.status} />
      </span>
      <div>
        <div className={styles.ordered}>
          <h3>Items ordered:</h3>
          {data.items.map(item => (
            <OrderItem orderItem={item} key={item.id} />
          ))}
        </div>
        <div className={styles.summary}>
          <h3>Summary:</h3>
          <p>
            Total: <span>{data.total} ₽</span>
          </p>
        </div>
      </div>
    </div>
  )
}
