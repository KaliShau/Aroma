import { FC, ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './table.module.scss'

type Type = {
  children: ReactNode
  className?: any
}

export const TableLayout: FC<Type> = ({ children, className }) => {
  return <table className={cn(styles.layout, className)}>{children}</table>
}
