import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './area.module.scss'
import { TypeArea } from './area.type'

export const Area: FC<TypeArea> = ({
  label,
  icon: Icon,
  error,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <span>{label}</span>
      <div className={cn({ [styles.errorInput]: !!error })}>
        {Icon && <Icon />}
        <textarea placeholder={placeholder} {...rest} />
      </div>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  )
}
