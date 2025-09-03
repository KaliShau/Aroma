'use client'

import LinkNext from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './link.module.scss'
import { EnumModelLink, TypeLink } from './link.type'

export const Link = forwardRef<HTMLAnchorElement | HTMLButtonElement, TypeLink>(
  ({ children, className, href, model, isButton = false, ...props }, ref?) => {
    const currentPathname = usePathname()
    const isActive = href ? currentPathname?.includes(href) : false

    if (isButton) {
      return (
        <button
          ref={ref as React.RefObject<HTMLButtonElement>}
          className={cn(styles.root, className, {
            [styles.text]: model == EnumModelLink.text,
            [styles.fill]: model == EnumModelLink.fill,
            [styles.border]: model == EnumModelLink.border,
            [styles.active]: isActive
          })}
          {...props}
        >
          {children}
        </button>
      )
    } else {
      return (
        <LinkNext
          ref={ref as React.RefObject<HTMLAnchorElement>}
          className={cn(styles.root, className, {
            [styles.text]: model == EnumModelLink.text,
            [styles.fill]: model == EnumModelLink.fill,
            [styles.border]: model == EnumModelLink.border,
            [styles.active]: isActive
          })}
          href={href!}
          {...props}
        >
          {children}
        </LinkNext>
      )
    }
  }
)
