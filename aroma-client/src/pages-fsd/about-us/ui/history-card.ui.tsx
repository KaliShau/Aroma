import { FC } from 'react'

import { TypeAboutUsHistoryData } from '../data/about-us.data'
import styles from './about-us.module.scss'

export const HistoryCardAboutUs: FC<TypeAboutUsHistoryData> = ({
  des,
  title
}) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{des}</p>
    </div>
  )
}
