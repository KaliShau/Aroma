'use client'

import { useRef, useState } from 'react'

import { UserMenu } from '@/widgets/user-menu'

import User from '@/shared/assets/icons/user.svg'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { NAV_HOME, NAV_MENU, NAV_RIGHT_BAR } from '../data/nav-bar.data'
import styles from './nav-bar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles.root}>
      <Logo />
      <Links />
      <RightBar />
    </nav>
  )
}

const Logo = () => {
  return (
    <h1>
      <Link {...NAV_HOME} className={styles.logo}>
        {NAV_HOME.children}
      </Link>
    </h1>
  )
}

const Links = () => {
  return (
    <div className={styles.links}>
      {NAV_MENU.map(item => (
        <Link key={item.href} {...item}>
          {item.children}
        </Link>
      ))}
    </div>
  )
}

const RightBar = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div className={styles.right}>
      {NAV_RIGHT_BAR.map((item, i) => (
        <Link key={i} {...item}>
          {item.children}
        </Link>
      ))}
      <Link
        ref={buttonRef}
        model={EnumModelLink.border}
        isButton={true}
        onClick={() => setIsShowMenu(prev => !prev)}
      >
        <User />
      </Link>
      <UserMenu
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        buttonRef={buttonRef}
      />
    </div>
  )
}
