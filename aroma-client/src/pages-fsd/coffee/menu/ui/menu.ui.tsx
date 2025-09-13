'use client'

import { FC } from 'react'

import { addItem, removeItem, updateQuantity } from '@/widgets/cart'
import { Footer } from '@/widgets/footer'

import { TypePaginateAllCoffees, useCoffeeBySlug } from '@/features/coffee'

import { TypeCategoryCoffee } from '@/entities/category-coffee'
import { CoffeeCardMenu, CoffeeView } from '@/entities/coffee'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import { CategoryCoffeeMenu } from './filters.ui'
import styles from './menu.module.scss'
import { MenuPaginate } from './paginate.ui'
import { MenuTopBar } from './top-bar.ui'

type TypeMenu = {
  category: TypeCategoryCoffee[]
  coffee?: string
} & TypePaginateAllCoffees

export const Menu: FC<TypeMenu> = ({ data, pagination, category, coffee }) => {
  const {
    data: coffeeDetail,
    isLoading,
    isError
  } = useCoffeeBySlug(coffee || '')

  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      {coffee && coffeeDetail && (
        <div className={styles.wrapper}>
          <CoffeeView
            addItem={addItem}
            coffee={coffeeDetail}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        </div>
      )}

      {coffee && isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.loading}>Загрузка кофе...</div>
        </div>
      )}

      {coffee && isError && (
        <div className={styles.wrapper}>
          <div className={styles.error}>Не удалось загрузить кофе</div>
        </div>
      )}
      <MenuTopBar />
      <CategoryCoffeeMenu category={category} />
      <div className={styles.cards}>
        {data.length > 0 ? (
          data?.map(item => <CoffeeCardMenu coffee={item} key={item.id} />)
        ) : (
          <div className={styles.notFound}>Кофе не найдено</div>
        )}
      </div>
      <MenuPaginate pagination={pagination} />
      <Footer />
    </div>
  )
}
