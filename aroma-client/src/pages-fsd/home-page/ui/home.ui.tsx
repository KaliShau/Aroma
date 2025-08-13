import { HeaderHome } from './header.ui'
import styles from './home.module.scss'
import { MenuHome } from './menu.ui'

export const Home = () => {
  return (
    <div className={styles.root}>
      <HeaderHome />
      <MenuHome />
    </div>
  )
}
