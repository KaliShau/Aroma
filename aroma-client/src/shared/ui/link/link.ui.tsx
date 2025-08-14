import LinkNext from 'next/link'

import { cn } from '@/shared/lib/cn'

import styles from './link.module.scss'
import { EnumModelLink, TypeLink } from './link.type'

export const Link = ({
  children,
  className,
  model,
  isButton = false,
  ...props
}: TypeLink) => {
  if (isButton) {
    return (
      <button
        className={cn(styles.root, className, {
          [styles.text]: model == EnumModelLink.text,
          [styles.fill]: model == EnumModelLink.fill,
          [styles.border]: model == EnumModelLink.border
        })}
        {...props}
      >
        {children}
      </button>
    )
  } else {
    return (
      <LinkNext
        className={cn(styles.root, className, {
          [styles.text]: model == EnumModelLink.text,
          [styles.fill]: model == EnumModelLink.fill,
          [styles.border]: model == EnumModelLink.border
        })}
        href={props.href!}
        {...props}
      >
        {children}
      </LinkNext>
    )
  }
}
