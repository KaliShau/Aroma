import { SettingItemSwitch } from '../items/setting-item-switch.ui'
import styles from './appearance.module.scss'

export const Appearance = () => {
  return (
    <div className={styles.root}>
      <SettingItemSwitch />
    </div>
  )
}
