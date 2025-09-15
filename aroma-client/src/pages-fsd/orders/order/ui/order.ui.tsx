'use client'

import { useParams } from 'next/navigation'

import { useOrderById } from '@/features/order'

import { OrderView } from '@/entities/order'

import bg from '@/shared/assets/images/brown-line.png'
import { Circles } from '@/shared/ui/circles/circles.ui'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './order.module.scss'

export const Order = () => {
  const { id } = useParams()

  const { data, isError, isLoading } = useOrderById(id as string)

  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <div>
        {isLoading && <Circles />}
        {data && <OrderView data={data} />}
      </div>
    </div>
  )
}
