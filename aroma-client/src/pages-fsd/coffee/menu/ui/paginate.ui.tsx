'use client'

import { useSearchParams } from 'next/navigation'
import { FC } from 'react'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { cn } from '@/shared/lib/cn'
import { Link } from '@/shared/ui/link/link.ui'

import { TypePaginateAllCoffees } from '../model/paginate.type'
import styles from './menu.module.scss'

type TypeMenuPaginate = Pick<TypePaginateAllCoffees, 'pagination'>

export const MenuPaginate: FC<TypeMenuPaginate> = ({ pagination }) => {
  const searchParams = useSearchParams()

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    return `${PUBLIC_ROUTES.menu()}?${params.toString()}`
  }

  return (
    <div className={styles.paginate}>
      <Link
        href={createPageUrl(pagination.page - 1)}
        className={cn({ [styles.disable]: !pagination.hasPrev })}
        scroll={false}
      >
        {'<'}
      </Link>
      <Link href={createPageUrl(1)} scroll={false}>
        1
      </Link>
      <Link
        className={styles.active}
        scroll={false}
        href={createPageUrl(pagination.page)}
      >
        {pagination.page}
      </Link>
      <Link scroll={false} href={createPageUrl(pagination.totalPages || 1)}>
        {pagination.totalPages || 1}
      </Link>
      <Link
        scroll={false}
        href={createPageUrl(pagination.page + 1)}
        className={cn({ [styles.disable]: !pagination.hasNext })}
      >
        {'>'}
      </Link>
    </div>
  )
}
