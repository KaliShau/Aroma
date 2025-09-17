'use client'

import { useSearchParams } from 'next/navigation'
import { FC } from 'react'

import { TypeCategoryCoffee } from '@/entities/category-coffee'

import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { useCategoryCarouselGrab } from '../../hooks/carousel-grab.hook'
import styles from './category-carousel.module.scss'

type TypeCategoryCarousel = {
  category: TypeCategoryCoffee[]
  routes: () => string
  isReturnOnePage?: boolean
}

export const CategoryCarousel: FC<TypeCategoryCarousel> = ({
  category,
  routes,
  isReturnOnePage = true
}) => {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')

  const {
    handleLinkClick,
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    isDragging,
    sliderRef
  } = useCategoryCarouselGrab(styles)

  const createCategoryUrl = (slug: string) => {
    const params = new URLSearchParams(searchParams)

    if (currentCategory === slug) {
      params.delete('category')
    } else {
      params.set('category', slug)
    }

    if (isReturnOnePage) params.set('page', '1')

    return `${routes()}?${params.toString()}`
  }

  if (!category || category.length === 0) {
    return <div className={styles.filters}>Нет категорий</div>
  }

  return (
    <div className={styles.filtersContainer}>
      <div
        ref={sliderRef}
        className={styles.filters}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {category?.map(item => (
          <Link
            model={EnumModelLink.fill}
            key={item.id}
            scroll={false}
            className={cn(styles.filterItem, {
              [styles.active]: item.slug === currentCategory
            })}
            href={createCategoryUrl(item.slug)}
            draggable={false}
            onClick={e => handleLinkClick(e, item.slug)}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div
        className={cn(styles.dragIndicator, {
          [styles.visible]: isDragging
        })}
      >
        Перетаскивайте для прокрутки
      </div>
    </div>
  )
}
