import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { cn } from '@/shared/lib/cn'

import { TypeItemSwitch } from '../../model/setting-item.type'
import styles from './setting-item-switch.module.scss'

type TypeSettingItemSwitch = {
  item: TypeItemSwitch
}

export const SettingItemSwitch: FC<TypeSettingItemSwitch> = ({ item }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(item.action())
  }

  return (
    <div className={styles.switch}>
      <h6>{item.title}</h6>
      <label className={styles.switchLabel}>
        <input
          type='checkbox'
          className={styles.input}
          checked={useSelector(item.selector)}
          onChange={handleClick}
        />
        <span className={cn(styles.slider, styles.round)}></span>
      </label>
    </div>
  )
}
