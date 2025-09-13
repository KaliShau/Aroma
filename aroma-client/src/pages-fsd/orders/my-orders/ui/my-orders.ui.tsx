'use client'

import { useOrdersUser } from '@/features/order'

import { OrderTable } from '@/entities/order/ui/order-table/order-table.ui'

import { MyOrdersHeader } from './header.ui'
import styles from './my-orders.module.scss'

export const MyOrders = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useOrdersUser()

  return (
    <div className={styles.root}>
      <MyOrdersHeader />
      <OrderTable
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </div>
  )
}
