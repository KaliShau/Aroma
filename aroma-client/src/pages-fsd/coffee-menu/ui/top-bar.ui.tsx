'use client'

import { SearchWidget } from '@/widgets/search-widget'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'

import styles from './menu.module.scss'

export const MenuTopBar = () => {
  return (
    <div className={styles.topBar}>
      <h2>We deliver nothing but the finest coffee experience</h2>
      <SearchWidget routes={PUBLIC_ROUTES.menu} />
    </div>
  )
}
