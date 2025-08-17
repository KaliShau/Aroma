import LogOut from '@/shared/assets/icons/log-out.svg'
import Settings from '@/shared/assets/icons/settings.svg'
import SignIn from '@/shared/assets/icons/sign-in.svg'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { TypeLink } from '@/shared/ui/link/link.type'

export enum EnumAccessItemUserDataMenu {
  public,
  private,
  admin,
  all
}

type TypeItemUserDataMenu = TypeLink & {
  access: EnumAccessItemUserDataMenu
}

export const USER_DATA_MENU: TypeItemUserDataMenu[] = [
  {
    children: (
      <>
        Settings <Settings />
      </>
    ),
    access: EnumAccessItemUserDataMenu.all,
    href: PUBLIC_ROUTES.settingsAppearance()
  },
  {
    children: (
      <>
        Sign out <LogOut />
      </>
    ),
    access: EnumAccessItemUserDataMenu.private,
    href: PRIVATE_ROUTES.signOut()
  },
  {
    children: (
      <>
        Sign in <SignIn />
      </>
    ),
    access: EnumAccessItemUserDataMenu.public,
    href: PUBLIC_ROUTES.signIn()
  }
]
