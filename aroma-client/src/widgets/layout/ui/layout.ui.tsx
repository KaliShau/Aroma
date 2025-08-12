import { ReactNode } from 'react'
import styles from './layout.module.scss'
import { NavBar } from '@/widgets/nav-bar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <NavBar />
      {children}
    </div>
  )
}
