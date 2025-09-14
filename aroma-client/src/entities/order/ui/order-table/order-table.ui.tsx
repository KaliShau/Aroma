import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query'
import { FC, useState } from 'react'

import { TypePaginateUserOrders } from '@/features/order'

import { TypeOrderWithCountItems } from '../../model/order.type'
import {
  OrderTableHeader,
  OrderTableTooltip,
  TypeOrderTableTooltip
} from './components.ui'
import styles from './order-table.module.scss'
import { OrderTableItem } from './table-item.ui'

type TypeOrderTable = {
  data: TypeOrderWithCountItems[]
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<TypePaginateUserOrders, unknown>,
      Error
    >
  >
  hasNextPage: boolean
  isLoading: boolean
}

export const OrderTable: FC<TypeOrderTable> = ({
  data,
  fetchNextPage,
  hasNextPage,
  isLoading
}) => {
  const [tooltip, setTooltip] = useState<TypeOrderTableTooltip>({
    isVisible: false,
    content: '',
    x: 0,
    y: 0
  })

  return (
    <>
      <table className={styles.root}>
        <OrderTableHeader />
        {isLoading && <Loading />}
        <tbody>
          {data.map(item => (
            <OrderTableItem item={item} setTooltip={setTooltip} key={item.id} />
          ))}
          {hasNextPage && (
            <tr>
              <td colSpan={6}>
                <button onClick={() => fetchNextPage()}>More...</button>
              </td>
            </tr>
          )}
          {data.length === 0 && (
            <tr>
              <td colSpan={6}>
                <button onClick={() => fetchNextPage()}>Заказов нет!</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {tooltip.isVisible && <OrderTableTooltip tooltip={tooltip} />}
    </>
  )
}

const Loading = () => {
  return (
    <tbody>
      <tr>
        <td colSpan={6}>Loading...</td>
      </tr>
    </tbody>
  )
}
