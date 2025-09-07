import { CategoryCoffee } from '@/features/category-coffee/services/category-coffee.service'

import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './menu.module.scss'

export const CategoryCoffeeMenu = async () => {
  const categories = await CategoryCoffee.getAll()

  if (!categories || categories.length === 0) {
    return <div className={styles.filters}>Нет категорий</div>
  }

  return (
    <div className={styles.filters}>
      {categories?.map(category => (
        <Link
          isButton={true}
          model={EnumModelLink.fill}
          key={category.id}
          className={styles.item}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
