'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { SearchWidget } from '@/widgets/search-widget'

import { useCategoryAll } from '@/features/category-coffee/hooks/category-all.hook'

import { CategoryCarousel } from '@/entities/category-coffee/ui/category-carousel/category-carousel.ui'

import { ADMIN_ROUTES } from '@/shared/configs/routes.config'

import styles from './coffee.module.scss'

export const AdminCoffeeHeaderTable = () => {
  const { data, isLoading } = useCategoryAll()

  return (
    <div className={styles.headerTable}>
      {isLoading && <div>Loading...</div>}
      {data ? (
        <CategoryCarousel
          routes={ADMIN_ROUTES.coffee}
          category={data}
          isReturnOnePage={false}
        />
      ) : (
        'Category not found!'
      )}
      <SearchWidget routes={ADMIN_ROUTES.coffee} isReturnOnePage={false} />
    </div>
  )
}
