'use client'

import { useSearchParams } from 'next/navigation'

import { TypeCategoryCoffee } from '@/entities/category-coffee'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './menu.module.scss'

export const CategoryCoffeeMenu = ({
  category
}: {
  category: TypeCategoryCoffee[]
}) => {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')

  const createCategoryUrl = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (currentCategory === slug) {
      params.delete('category')
    } else {
      params.set('category', slug)
    }
    params.set('page', '1')

    return `${PUBLIC_ROUTES.menu()}?${params.toString()}`
  }

  if (!category || category.length === 0) {
    return <div className={styles.filters}>Нет категорий</div>
  }

  return (
    <div className={styles.filters}>
      {category?.map(item => (
        <Link
          model={EnumModelLink.fill}
          key={item.id}
          scroll={false}
          className={cn({ [styles.active]: item.slug === currentCategory })}
          href={createCategoryUrl(item.slug)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
