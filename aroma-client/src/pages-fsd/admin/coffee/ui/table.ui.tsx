'use client'

import { useParams, useSearchParams } from 'next/navigation'

import { useCoffeeAdminInfinity } from '@/features/coffee/hooks/coffee-admin-infinity.hook'

import { CoffeeTable } from '@/entities/coffee'

import styles from './coffee.module.scss'
import { AdminCoffeeHeaderTable } from './header-table.ui'

export const AdminCoffeeTable = () => {
  const params = useSearchParams()

  const category = params.get('category') || ''
  const searchTerm = params.get('search') || ''

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCoffeeAdminInfinity(category as string, searchTerm as string)
  return (
    <div className={styles.table}>
      <AdminCoffeeHeaderTable />
      <CoffeeTable
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </div>
  )
}
