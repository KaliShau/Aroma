import Category from '@/shared/assets/icons/category.svg'
import Coffee from '@/shared/assets/icons/coffee-cup.svg'
import Dashboard from '@/shared/assets/icons/dashboard.svg'
import { ADMIN_ROUTES } from '@/shared/configs/routes.config'
import { EnumModelLink, TypeLink } from '@/shared/ui/link/link.type'

export const ADMIN_NAW_BAR_DATA: TypeLink[] = [
  {
    href: ADMIN_ROUTES.dashboard(),
    children: (
      <>
        <Dashboard /> Dashboard
      </>
    ),
    model: EnumModelLink.fill
  },
  {
    href: ADMIN_ROUTES.coffee(),
    children: (
      <>
        <Coffee /> Coffee
      </>
    ),
    model: EnumModelLink.fill
  },
  {
    href: ADMIN_ROUTES.category(),
    children: (
      <>
        <Category /> Category coffee
      </>
    ),
    model: EnumModelLink.fill
  }
]
