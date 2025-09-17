import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './table.module.scss'

type Type = {
  className?: any
  isData: boolean
  colSpan: number
}

export const TableNotFound: FC<Type> = ({ className, isData, colSpan }) => {
  if (isData) return

  return (
    <tr className={cn(styles.bold, styles.notFound, className)}>
      <td colSpan={colSpan}>Заказов нет!</td>
    </tr>
  )
}
