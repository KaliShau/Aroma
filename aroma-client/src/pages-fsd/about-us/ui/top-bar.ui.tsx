import aboutUs from '@/shared/assets/images/about-us.jpg'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './about-us.module.scss'

export const AboutUsTopBar = () => {
  return (
    <div className={styles.topBar}>
      <HeaderImage image={aboutUs} />
      <div>
        <h2>About Us</h2>
        <p>
          We strive to make online shopping convenient, enjoyable and affordable
          for everyone.
        </p>
      </div>
    </div>
  )
}
