import { useRouter } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'
import toast from 'react-hot-toast'

import { PRIVATE_ROUTES } from '@/shared/configs/routes.config'
import { Link } from '@/shared/ui/link/link.ui'
import { Status } from '@/shared/ui/status/status.ui'
import { formatDate } from '@/shared/utils/date.utils'
import { truncateUUID } from '@/shared/utils/truncateUUID.utils'

import { TypeOrderWithCountItems } from '../../model/order.type'
import { TypeOrderTableTooltip } from './components.ui'
import styles from './order-table.module.scss'

type TypeOrderTableItem = {
  item: TypeOrderWithCountItems
  setTooltip: Dispatch<SetStateAction<TypeOrderTableTooltip>>
}

export const OrderTableItem: FC<TypeOrderTableItem> = ({
  item,
  setTooltip
}) => {
  const router = useRouter()

  const handleMouseEnter = (e: React.MouseEvent, content: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      isVisible: true,
      content,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleRowClick = () => {
    router.push(PRIVATE_ROUTES.order(item.id))
  }

  const handleMouseLeave = () => {
    setTooltip({ isVisible: false, content: '', x: 0, y: 0 })
  }

  const copyTextToClipboard = async (
    e: React.MouseEvent,
    text: string | null
  ) => {
    e.stopPropagation()

    if (!text) return toast.error('Failed to copy the text!')

    try {
      await navigator.clipboard.writeText(text)
      toast.success('The text is successfully copied to the exchange buffer!')
    } catch (err) {
      toast.error('Failed to copy the text!')
    }
  }

  return (
    <tr key={item.id} onClick={handleRowClick}>
      <th
        className={styles.id}
        onMouseEnter={e => handleMouseEnter(e, item.id)}
        onMouseLeave={handleMouseLeave}
        onClick={e => copyTextToClipboard(e, item.id)}
      >
        {truncateUUID(item.id)}
      </th>
      <td>{formatDate(item.createdAt)}</td>
      <td>
        <Status status={item.status} />
      </td>
      <td
        className={styles.id}
        onMouseEnter={e => handleMouseEnter(e, item.paymentId || 'Not found!')}
        onMouseLeave={handleMouseLeave}
        onClick={e => copyTextToClipboard(e, item.paymentId)}
      >
        {item.paymentId ? truncateUUID(item.paymentId) : 'Not found!'}
      </td>
      <td>{item.total} ₽</td>
      <td>{item._count.items} items</td>
    </tr>
  )
}
