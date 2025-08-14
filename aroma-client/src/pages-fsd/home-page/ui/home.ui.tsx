import { CoffeeHouseHome } from './coffee-house.ui'
import { HeaderHome } from './header.ui'
import styles from './home.module.scss'
import { MenuHome } from './menu.ui'
import { OurCustomers } from './our-custoners.ui'

export const Home = () => {
  return (
    <div className={styles.root}>
      <HeaderHome />
      <MenuHome />
      <CoffeeHouseHome />
      <OurCustomers />
    </div>
  )
}
