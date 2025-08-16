import { FC } from 'react'

import { INFO } from '../data/footer.data'
import { TypeInfo } from '../model/footer.type'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div>
        <h2>
          <span>AROMA COFFEE</span> - STAY WARM <br /> STAY CLOSE
        </h2>
        <div>
          {INFO.map(item => (
            <Info key={item.title} title={item.title} info={item.info} />
          ))}
        </div>
      </div>
      <span>Copyright © 2025 KaliShau</span>
    </div>
  )
}

const Info: FC<TypeInfo> = ({ info, title }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{info}</p>
    </div>
  )
}
