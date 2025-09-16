import Image from 'next/image'

import icon from '@/shared/assets/icons/coffee.png'
import Exit from '@/shared/assets/icons/log-out.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { ADMIN_NAW_BAR_DATA } from '../data/nav-bar.data'
import styles from './nav-bar.module.scss'

export const NavBarAdminLayout = () => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.header}>
          <Image src={icon} width={54} height={54} alt='Icon' />
          <h2>
            AROMA
            <br />
            Dashboard
          </h2>
        </div>
        <div className={styles.links}>
          {ADMIN_NAW_BAR_DATA.map(item => (
            <Link {...item}>{item.children}</Link>
          ))}
        </div>
      </div>
      <Link href={PUBLIC_ROUTES.home()} model={EnumModelLink.fill}>
        <Exit /> Exit
      </Link>
    </div>
  )
}
