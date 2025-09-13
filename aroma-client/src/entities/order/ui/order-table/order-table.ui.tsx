import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { TypePaginateUserOrders } from '@/features/order'

import { Status } from '@/shared/ui/status/status.ui'
import { formatDate } from '@/shared/utils/date.utils'
import { truncateUUID } from '@/shared/utils/truncateUUID.utils'

import { TypeOrderWithCountItems } from '../../model/order.type'
import {
  OrderTableHeader,
  OrderTableTooltip,
  TypeOrderTableTooltip
} from './components.ui'
import styles from './order-table.module.scss'

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

  const handleMouseEnter = (e: React.MouseEvent, content: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      isVisible: true,
      content,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleMouseLeave = () => {
    setTooltip({ isVisible: false, content: '', x: 0, y: 0 })
  }

  const copyTextToClipboard = async (text: string | null) => {
    if (!text) return toast.error('Failed to copy the text!')

    try {
      await navigator.clipboard.writeText(text)
      toast.success('The text is successfully copied to the exchange buffer!')
    } catch (err) {
      toast.error('Failed to copy the text!')
    }
  }

  return (
    <>
      <table className={styles.root}>
        <OrderTableHeader />
        {isLoading && <Loading />}
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <th
                className={styles.id}
                onMouseEnter={e => handleMouseEnter(e, item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => copyTextToClipboard(item.id)}
              >
                {truncateUUID(item.id)}
              </th>
              <td>{formatDate(item.createdAt)}</td>
              <td>
                <Status status={item.status} />
              </td>
              <td
                className={styles.id}
                onMouseEnter={e =>
                  handleMouseEnter(e, item.paymentId || 'Not found!')
                }
                onMouseLeave={handleMouseLeave}
                onClick={() => copyTextToClipboard(item.paymentId)}
              >
                {item.paymentId ? truncateUUID(item.paymentId) : 'Not found!'}
              </td>
              <td>{item.total} ₽</td>
              <td>{item._count.items} items</td>
            </tr>
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
