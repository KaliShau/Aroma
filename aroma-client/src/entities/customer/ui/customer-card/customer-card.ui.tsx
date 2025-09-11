import { FC } from 'react'

import { UserCard } from '@/entities/user'

import GG from '@/shared/assets/icons/gg.svg'
import Star from '@/shared/assets/icons/star.svg'
import { Link } from '@/shared/ui/link/link.ui'

import { TypeCustomer } from '../../model/customer.type'
import styles from './customer-card.module.scss'

type TypeCustomerCard = {
  customer: TypeCustomer
}

export const CustomerCard: FC<TypeCustomerCard> = ({ customer }) => {
  return (
    <Link isButton={true} className={styles.root}>
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
