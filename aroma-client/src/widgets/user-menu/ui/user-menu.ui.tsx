import { Dispatch, FC, RefObject, SetStateAction } from 'react'

import { useProfile } from '@/features/user'

import { EnumUserRole, UserCard } from '@/entities/user'

import { PRIVATE_ROUTES } from '@/shared/configs/routes.config'
import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import {
  EnumAccessItemUserDataMenu,
  USER_DATA_MENU
} from '../data/user-menu.data'
import { useUserMenu } from '../hooks/user-menu.hook'
import styles from './user-menu.module.scss'

type TypeUserMenu = {
  isShowMenu: boolean
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  buttonRef: RefObject<HTMLButtonElement | null>
}

export const UserMenu: FC<TypeUserMenu> = ({
  isShowMenu,
  setIsShowMenu,
  buttonRef
}) => {
  const { ref } = useUserMenu({ setIsShowMenu, buttonRef })
  const { isAuth, data } = useProfile()

  return (
    <div
      ref={ref}
      className={cn(styles.root, {
        [styles.show]: isShowMenu,
        [styles.hide]: !isShowMenu
      })}
    >
      {isAuth ? (
        <Link
          className={styles.cardWrapper}
          href={PRIVATE_ROUTES.profile()}
          onClick={() => setIsShowMenu(false)}
        >
          <UserCard user={data!} />
        </Link>
      ) : (
        <h4>User menu</h4>
      )}

      {USER_DATA_MENU.map(item => {
        let hasAccess = false

        switch (item.access) {
          case EnumAccessItemUserDataMenu.all:
            hasAccess = true
            break
          case EnumAccessItemUserDataMenu.guest:
            hasAccess = !isAuth
            break
          case EnumAccessItemUserDataMenu.private:
            hasAccess = isAuth
            break
          case EnumAccessItemUserDataMenu.admin:
            hasAccess = isAuth && data?.role === EnumUserRole.admin
            break
          default:
            hasAccess = false
        }

        if (!hasAccess) return null

        return (
          <Link
            href={item.href}
            key={item.href}
            model={EnumModelLink.fill}
            onClick={() => setIsShowMenu(false)}
            {...item}
          >
            {item.children}
          </Link>
        )
      })}
    </div>
  )
}
