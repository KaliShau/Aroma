import { ReactNode } from 'react'

import { NavBar } from '@/widgets/nav-bar'

import styles from './layout.module.scss'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <NavBar />
      {children}
    </div>
  )
}
