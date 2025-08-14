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
  return (
    <div className={styles.right}>
      {NAV_RIGHT_BAR.map((item, i) => (
        <Link key={i} {...item}>
          {item.children}
        </Link>
      ))}
    </div>
  )
}
