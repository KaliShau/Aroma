'use client'

import { useSearchParams } from 'next/navigation'

import { addItem, removeItem, updateQuantity } from '@/widgets/cart'

import { useCoffeeBySlug } from '@/features/coffee'

import { CoffeeView } from '@/entities/coffee'

import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { AdminPageLayout } from '../../page-layout'
import styles from './coffee.module.scss'
import { AdminCoffeeTable } from './table.ui'

export const AdminCoffee = () => {
  const params = useSearchParams()

  const coffee = params.get('coffee') || ''

  const { data, isLoading, isError } = useCoffeeBySlug(coffee || '')

  return (
    <AdminPageLayout className={styles.root}>
      {coffee && data && (
        <div className={styles.wrapper}>
          <CoffeeView
            addItem={addItem}
            coffee={data}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
            isSimilar={false}
          />
        </div>
      )}

      <div className={styles.header}>
        <h2>Coffee</h2>
        <Link isButton={true} model={EnumModelLink.fill}>
          Create coffee
        </Link>
      </div>
      <AdminCoffeeTable />
    </AdminPageLayout>
  )
}
