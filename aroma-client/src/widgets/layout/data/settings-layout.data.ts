import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { EnumModelLink, TypeLink } from '@/shared/ui/link/link.type'

export const SETTINGS_LAYOUT_MENU: TypeLink[] = [
  {
    children: 'Appearance',
    href: PUBLIC_ROUTES.settingsAppearance()
  }
]
