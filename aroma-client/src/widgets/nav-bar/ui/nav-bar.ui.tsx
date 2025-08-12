import { Link } from '@/shared/ui/link/link.ui'
import styles from './nav-bar.module.scss'
import { NAV_HOME, NAV_MENU, NAV_RIGHT_BAR } from '../data/nav-bar.data'
import { EnumModelLink } from '@/shared/ui/link/link.type'

import circle from '@/shared/assets/icons/circle.svg'
import Image from 'next/image'

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
    <Link {...NAV_HOME} className={styles.logo}>
      {NAV_HOME.children}
    </Link>
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
  return (
    <div className={styles.right}>
      {NAV_RIGHT_BAR.map(item => (
        <Link key={item.href} {...item}>
          {item.children}
        </Link>
      ))}
    </div>
  )
}
