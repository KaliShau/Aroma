import { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './page-layout.module.scss'

export const AdminPageLayout = ({
  children,
  className
}: {
  className?: string
  children: ReactNode
}) => {
  return <div className={cn(styles.root, className)}>{children}</div>
}
