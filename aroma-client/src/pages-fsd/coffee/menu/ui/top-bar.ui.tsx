import icon from '@/shared/assets/icons/search.svg'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { CategoryCoffeeMenu } from './filters.ui'
import styles from './menu.module.scss'

export const MenuTopBar = () => {
  return (
    <div className={styles.topBar}>
      <h2>We deliver nothing but the finest coffee experience</h2>
      <form>
        <Field placeholder='Search here' icon={icon} />
        <Link isButton={true} model={EnumModelLink.fill}>
          Search
        </Link>
      </form>
      <CategoryCoffeeMenu />
    </div>
  )
}
