import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './table.module.scss'

type Type = {
  className?: any
  isLoading: boolean
  colSpan: number
}

export const TableLoading: FC<Type> = ({ className, isLoading, colSpan }) => {
  if (!isLoading) return

  return (
    <tr className={cn(styles.loading, className)}>
      <td colSpan={colSpan}>Loading...</td>
    </tr>
  )
}
