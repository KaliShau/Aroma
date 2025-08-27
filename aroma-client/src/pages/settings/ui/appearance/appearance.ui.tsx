'use client'

import { SettingItemSwitch } from '@/entities/setting'

import { APPEARANCE_NAV_BAR_DATA } from '../../data/appearance.data'
import styles from './appearance.module.scss'

export const Appearance = () => {
  return (
    <div className={styles.root}>
      <h3>Navigation panel settings</h3>
      {APPEARANCE_NAV_BAR_DATA.map(item => (
        <SettingItemSwitch item={item} key={item.title} />
      ))}
    </div>
  )
}
