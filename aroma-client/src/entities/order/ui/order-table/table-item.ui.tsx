import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { PRIVATE_ROUTES } from '@/shared/configs/routes.config'
import { Status } from '@/shared/ui/status/status.ui'
import { Tooltip } from '@/shared/ui/tooltip/tooltip.ui'
import { copyTextToClipboard } from '@/shared/utils/copy-text-to-clipboard.utils'
import { formatDate } from '@/shared/utils/date.utils'
import { truncateUUID } from '@/shared/utils/truncateUUID.utils'

import { TypeOrderWithCountItems } from '../../model/order.type'
import styles from './order-table.module.scss'

type TypeOrderTableItem = {
  item: TypeOrderWithCountItems
}

export const OrderTableItem: FC<TypeOrderTableItem> = ({ item }) => {
  const router = useRouter()
  const { handleMouseEnter, handleMouseLeave, TooltipHtml } = Tooltip()

  const handleRowClick = () => {
    router.push(PRIVATE_ROUTES.order(item.id))
  }

  return (
    <tr key={item.id} onClick={handleRowClick}>
      <th
        className={styles.id}
        onClick={e => copyTextToClipboard(e, item.id)}
        onMouseEnter={e => handleMouseEnter(e, item.id)}
        onMouseLeave={handleMouseLeave}
      >
        {truncateUUID(item.id)}
        {TooltipHtml}
      </th>
      <td>{formatDate(item.createdAt)}</td>
      <td>
        <Status status={item.status} />
      </td>
      <td
        className={styles.id}
        onMouseEnter={e => handleMouseEnter(e, item.paymentId)}
        onMouseLeave={handleMouseLeave}
        onClick={e => copyTextToClipboard(e, item.paymentId)}
      >
        {item.paymentId ? truncateUUID(item.paymentId) : 'Not found!'}
        {TooltipHtml}
      </td>
      <td>{item.total} ₽</td>
      <td>{item._count.items} items</td>
    </tr>
  )
}
