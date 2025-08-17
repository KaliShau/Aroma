import { Url } from 'next/dist/shared/lib/router/router'
import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export enum EnumModelLink {
  text,
  fill,
  border
}

export type TypeLink = {
  children: ReactNode
  model?: EnumModelLink
  href?: Url
  isButton?: boolean
} & Omit<LinkProps, 'href'> &
  (AnchorHTMLAttributes<HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement>)
