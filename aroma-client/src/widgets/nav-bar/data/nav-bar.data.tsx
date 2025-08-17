import Image from 'next/image'

import Cart from '@/shared/assets/icons/cart.svg'
import Circle from '@/shared/assets/icons/circle.svg'
import coffee from '@/shared/assets/icons/coffee.png'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { EnumModelLink, TypeLink } from '@/shared/ui/link/link.type'

export const NAV_MENU: TypeLink[] = [
  {
    href: PUBLIC_ROUTES.menu(),
    children: 'Menu',
    model: EnumModelLink.text
  },
  {
    href: PUBLIC_ROUTES.aboutUs(),
    children: 'About Us',
    model: EnumModelLink.text
  },
  {
    href: PUBLIC_ROUTES.contact(),
    children: 'Contact',
    model: EnumModelLink.text
  }
]

export const NAV_HOME: TypeLink = {
  href: PUBLIC_ROUTES.home(),
  children: (
    <>
      <Image alt='Icon' src={coffee.src} width={54} height={54} />
      Aroma
    </>
  )
}

export const NAV_RIGHT_BAR: TypeLink[] = [
  {
    href: PUBLIC_ROUTES.menu(),
    children: (
      <>
        BREW YOUR FIRST CUP
        <Circle />
      </>
    ),
    model: EnumModelLink.fill
  },
  {
    href: PUBLIC_ROUTES.cart(),
    children: <Cart />,
    model: EnumModelLink.border
  }
]
