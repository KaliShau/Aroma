import Image from 'next/image'
import { FC } from 'react'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-card-order.module.scss'

type TypeCoffeeCardOrder = {
  coffee: TypeCoffee
}

export const CoffeeCardOrder: FC<TypeCoffeeCardOrder> = ({ coffee }) => {
  return (
    <div className={styles.root}>
      <Image src={coffee.imageUrl} alt={coffee.name} width={62} height={62} />
      <div className={styles.content}>
        <div>
          <h3>{coffee.name}</h3>
          <span>{coffee.price} ₽</span>
        </div>
        <p>{coffee.description}</p>
      </div>
    </div>
  )
}
