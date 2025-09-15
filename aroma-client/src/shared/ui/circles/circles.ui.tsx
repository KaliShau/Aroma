import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './circles.module.scss'

type TypeCircles = {
  className?: string
}

export const Circles: FC<TypeCircles> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <span />
      <span />
      <span />
    </div>
  )
}
