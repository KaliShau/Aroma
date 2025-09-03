import Lock from '@/shared/assets/icons/lock.svg'
import { Link } from '@/shared/ui/link/link.ui'

import { DOCUMENTATIONS_MENU_DATA } from '../data/menu.data'
import styles from './menu.module.scss'

export const MenuDocumentations = () => {
  return (
    <div className={styles.root}>
      <h3>Documentation of our site</h3>
      {DOCUMENTATIONS_MENU_DATA.map(item => (
        <Link href={item.href} key={item.href}>
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
          <Lock />
        </Link>
      ))}
    </div>
  )
}
