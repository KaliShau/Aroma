import { FC } from 'react'
import { TypeCoffee } from '../../model/coffee.type'
import Image from 'next/image'
import styles from './coffee-card.module.scss'
import Link from 'next/link'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'

type CoffeeCart = {
  coffee: TypeCoffee
}

export const CoffeeCard: FC<CoffeeCart> = ({ coffee }) => {
  return (
    <Link href={PUBLIC_ROUTES.coffee(coffee.slug)} className={styles.root}>
      <Image src={coffee.imageUrl} alt={coffee.name} width={390} height={390} />
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <span>Price: {coffee.price} ₽</span>
    </Link>
  )
}
