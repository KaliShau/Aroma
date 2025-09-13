import toast from 'react-hot-toast'

import { useOrderCount } from '@/features/order'
import { useOrderItemCount } from '@/features/order-item/hooks/order-item-count.hook'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './my-orders.module.scss'

export const MyOrdersHeader = () => {
  const {
    data: order,
    isLoading: orderLoading,
    isError: orderError
  } = useOrderCount()

  const {
    data: orderItem,
    isLoading: orderItemLoading,
    isError: orderItemError
  } = useOrderItemCount()

  const isLoading = orderLoading || orderItemLoading
  const isError = orderError || orderItemError

  return (
    <div className={styles.header}>
      <HeaderImage image={bg} />
      <div>
        <h2>My Orders</h2>
        <div className={styles.stats}>
          {isError ? (
            toast.error('Failed to load order statistics!')
          ) : isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Item title='Total Orders' count={order?.count || 0} />
              <Item title='Total Order Items' count={orderItem?.count || 0} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

type TypeItemProps = {
  title: string
  count: number
}

const Item = ({ title, count }: TypeItemProps) => {
  return (
    <div className={styles.headerItem}>
      <h3>{title}</h3>
      <p>{count.toLocaleString()}</p>
    </div>
  )
}
