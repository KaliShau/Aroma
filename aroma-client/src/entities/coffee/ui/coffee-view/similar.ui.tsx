'use client'

import { useCoffeeAll } from '@/features/coffee/hooks/coffee-all.hook'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Link } from '@/shared/ui/link/link.ui'

import { CoffeeCardMenu } from '../coffee-card-menu/coffee-card-menu.ui'
import styles from './coffee-view.module.scss'

export const CoffeeSimilar = ({ category }: { category: string }) => {
  const { data } = useCoffeeAll(1, category, '', '4')

  return (
    <div className={styles.similar}>
      <h3>Similar goods:</h3>
      <div>
        {data?.data.map(item => (
          <CoffeeCardMenu coffee={item} key={item.id} />
        ))}
        <Link
          className={styles.threeDots}
          href={`${PUBLIC_ROUTES.menu()}?category=${category}`}
        >
          ...
        </Link>
      </div>
    </div>
  )
}
