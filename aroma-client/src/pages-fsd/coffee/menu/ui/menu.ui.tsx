import { Footer } from '@/widgets/footer'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import { CategoryCoffeeMenu } from './filters.ui'
import styles from './menu.module.scss'
import { MenuTopBar } from './top-bar.ui'

export const Menu = () => {
  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <MenuTopBar />
      <Footer />
    </div>
  )
}
