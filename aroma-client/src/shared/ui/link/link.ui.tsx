import styles from './link.module.scss'
import LinkNext from 'next/link'
import { EnumModelLink, TypeLink } from './link.type'
import { cn } from '@/shared/lib/cn'

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
