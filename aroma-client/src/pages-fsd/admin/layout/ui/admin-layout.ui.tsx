import { ReactNode } from 'react'

import { NavBarAdminLayout } from '../../nav-bar'
import styles from './admin-layout.module.scss'

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <NavBarAdminLayout />
      {children}
    </div>
  )
}
