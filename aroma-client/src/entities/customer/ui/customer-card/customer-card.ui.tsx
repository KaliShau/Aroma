import Link from 'next/link'
import { FC } from 'react'

import { UserCard } from '@/entities/user'

import GG from '@/shared/assets/icons/gg.svg'
import Star from '@/shared/assets/icons/star.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'

import { TypeCustomer } from '../../model/customer.type'
import styles from './customer-card.module.scss'

type TypeCustomerCard = {
  customer: TypeCustomer
}

export const CustomerCard: FC<TypeCustomerCard> = ({ customer }) => {
  return (
    <Link href={PUBLIC_ROUTES.customer(customer.id)} className={styles.root}>
      <GG />
      <p>{customer.text}</p>
      <div className={styles.rating}>
        <UserCard user={customer.creator} />
        <div>
          {customer.rating}
          <Star />
        </div>
      </div>
    </Link>
  )
}
