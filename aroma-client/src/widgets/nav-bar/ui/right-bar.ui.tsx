import Image from 'next/image'
import { useRef, useState } from 'react'

import { UserMenu } from '@/widgets/user-menu'

import { useProfile } from '@/features/user'

import User from '@/shared/assets/icons/user.svg'
import { Avatar } from '@/shared/ui/avatar/avatar.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { NAV_RIGHT_BAR } from '../data/nav-bar.data'
import styles from './nav-bar.module.scss'

export const RightBar = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const { data, isAuth } = useProfile()

  return (
    <div className={styles.right}>
      {NAV_RIGHT_BAR.map((item, i) => (
        <Link key={i} {...item}>
          {item.children}
        </Link>
      ))}
      <Link
        ref={buttonRef}
        isButton={true}
        onClick={() => setIsShowMenu(prev => !prev)}
      >
        <Avatar data={data} isAuth={isAuth} />
      </Link>
      <UserMenu
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        buttonRef={buttonRef}
      />
    </div>
  )
}
