import styles from './not-found.module.scss'
import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderImage image={bg} />
    </div>
  )
}
