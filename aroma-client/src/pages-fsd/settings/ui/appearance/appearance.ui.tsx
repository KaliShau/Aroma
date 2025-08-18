'use client'

import { SettingItemSwitch } from '@/entities/setting'

import { APPEARANCE_DATA } from '../../data/appearance.data'
import styles from './appearance.module.scss'

export const Appearance = () => {
  return (
    <div className={styles.root}>
      {APPEARANCE_DATA.map(item => (
        <SettingItemSwitch item={item} key={item.title} />
      ))}
    </div>
  )
}
