import Image from 'next/image'

import styles from './home.module.scss'
import bg from '@/shared/assets/images/header.png'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        draggable='false'
        alt='Background home image'
        src={bg.src}
        width='1456'
        height='1'
      />
      header
    </div>
  )
}
