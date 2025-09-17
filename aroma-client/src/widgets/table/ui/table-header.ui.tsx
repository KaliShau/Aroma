import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './table.module.scss'

type Type = {
  data: string[]
  className?: any
}

export const TableHeader: FC<Type> = ({ data, className }) => {
  return (
    <thead className={cn(styles.header, className)}>
      <tr>
        {data.map(item => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  )
}
