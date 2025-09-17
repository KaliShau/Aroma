import { FetchNextPageOptions } from '@tanstack/react-query'
import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './table.module.scss'

type TypeTableFetchPage = {
  fetchNextPage: (options?: FetchNextPageOptions) => void
  className?: any
  hasNextPage: boolean
  colSpan: number
}

export const TableFetchPage: FC<TypeTableFetchPage> = ({
  fetchNextPage,
  className,
  hasNextPage,
  colSpan
}) => {
  if (!hasNextPage) return

  return (
    <tr className={cn(styles.bold, styles.fetch, className)}>
      <td colSpan={colSpan}>
        <button onClick={() => fetchNextPage()}>More...</button>
      </td>
    </tr>
  )
}
