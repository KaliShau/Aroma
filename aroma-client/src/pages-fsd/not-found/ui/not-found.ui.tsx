import { NavBar } from '@/widgets/nav-bar'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import { ErrorNotFound } from './error.ui'
import styles from './not-found.module.scss'

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <NavBar />
      <ErrorNotFound />
    </div>
  )
}
