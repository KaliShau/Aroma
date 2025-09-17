import { FC, ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './table.module.scss'

type Type = {
  children: ReactNode
  className?: any
}
export const TableBody: FC<Type> = ({ children, className }) => {
  return <tbody className={cn(styles.body, className)}>{children}</tbody>
}
