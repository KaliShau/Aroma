import { FC } from 'react'

import { CONTACT_INFO_DATA, TypeContactInfoData } from '../data/contact.data'
import styles from './contact.module.scss'

export const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h2>
        Contact <span>Us</span>
      </h2>
      <p>
        Reach out to us using any method convenient for you, and we will be
        happy to answer all your questions. Our team is ready to help you.
      </p>
      <div>
        {CONTACT_INFO_DATA.map((item, index) => (
          <Item info={item.info} title={item.title} key={index} />
        ))}
      </div>
    </div>
  )
}

const Item: FC<TypeContactInfoData> = ({ info, title }) => {
  return (
    <div className={styles.item}>
      <h5>{title}:</h5>
      <p>{info}</p>
    </div>
  )
}
