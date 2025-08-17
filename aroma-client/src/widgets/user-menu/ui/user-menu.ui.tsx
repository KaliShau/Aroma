import { Dispatch, FC, RefObject, SetStateAction } from 'react'

import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { USER_DATA_MENU } from '../data/user-menu.data'
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

  return (
    <div ref={ref} className={cn(styles.root, { [styles.show]: isShowMenu })}>
      <h4>User menu</h4>
      {USER_DATA_MENU.map(item => (
        <Link
          href={item.href}
          key={item.href}
          model={EnumModelLink.fill}
          onClick={() => setIsShowMenu(false)}
          {...item}
        >
          {item.children}
        </Link>
      ))}
    </div>
  )
}
