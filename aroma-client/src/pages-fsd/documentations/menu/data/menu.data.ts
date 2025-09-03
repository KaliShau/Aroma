import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'

import { TypeDocumentationsMenuItem } from '../model/menu.type'

export const DOCUMENTATIONS_MENU_DATA: TypeDocumentationsMenuItem[] = [
  {
    title: 'Privacy Policy',
    description:
      'Privacy Policy describes how Aroma Coffee Shop collects, uses, and discloses your personal information',
    href: PUBLIC_ROUTES.privacyPolicy()
  }
]
