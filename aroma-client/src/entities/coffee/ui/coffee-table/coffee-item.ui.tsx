import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, MouseEvent } from 'react'

import { ADMIN_ROUTES } from '@/shared/configs/routes.config'
import { Tooltip } from '@/shared/ui/tooltip/tooltip.ui'
import { copyTextToClipboard } from '@/shared/utils/copy-text-to-clipboard.utils'
import { formatDate } from '@/shared/utils/date.utils'
import { truncateUUID } from '@/shared/utils/truncateUUID.utils'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-table.module.scss'

type TypeCoffeeTableItem = {
  item: TypeCoffee
}

export const CoffeeTableItem: FC<TypeCoffeeTableItem> = ({ item }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { handleMouseEnter, handleMouseLeave, TooltipHtml } = Tooltip()

  const handleRowClick = () => {
    const createPageUrl = (slug: string) => {
      const params = new URLSearchParams(searchParams)
      params.set('coffee', slug)
      return `${ADMIN_ROUTES.coffee()}?${params.toString()}`
    }

    router.push(createPageUrl(item.slug))
  }

  const handleDropDownClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e)
  }

  return (
    <tr key={item.id} className={styles.item} onClick={handleRowClick}>
      <td className={styles.image}>
        <Image alt='Image' src={item.imageUrl} width={100} height={100} />
      </td>
      <th
        onClick={e => copyTextToClipboard(e, item.id)}
        onMouseEnter={e => handleMouseEnter(e, item.id)}
        onMouseLeave={handleMouseLeave}
      >
        {truncateUUID(item.id)}
        {TooltipHtml}
      </th>
      <td>{formatDate(item.createdAt)}</td>
      <td className={styles.name}>{item.name}</td>
      <td>{item.price} ₽</td>
      <td>{String(item.isAvailable)}</td>
      <td>
        <button onClick={handleDropDownClick} className={styles.dropDownButton}>
          |||
        </button>
      </td>
    </tr>
  )
}
