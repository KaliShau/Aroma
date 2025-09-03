'use client'

import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

import { RootState } from '@/app/store/store'

import { cn } from '@/shared/lib/cn'
import { Link } from '@/shared/ui/link/link.ui'

import { NAV_HOME, NAV_MENU } from '../data/nav-bar.data'
import styles from './nav-bar.module.scss'
import { RightBar } from './right-bar.ui'

export const NavBar = () => {
  const { isDynamicNavigationBar, isTransparentNavigationBar } = useSelector(
    (state: RootState) => state.appearance
  )

  return (
    <nav
      className={cn(styles.root, {
        [styles.stickyBar]: isDynamicNavigationBar,
        [styles.bgColor]: isTransparentNavigationBar
      })}
    >
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
