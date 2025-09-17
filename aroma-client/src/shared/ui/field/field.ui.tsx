import { FC } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './field.module.scss'
import { TypeField } from './field.type'

export const Field: FC<TypeField> = ({
  label,
  icon: Icon,
  error,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.root, className)}>
      {label && <span>{label}</span>}
      <div className={cn({ [styles.errorInput]: !!error })}>
        {Icon && <Icon />}
        <input type='text' placeholder={placeholder} {...rest} />
      </div>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  )
}
