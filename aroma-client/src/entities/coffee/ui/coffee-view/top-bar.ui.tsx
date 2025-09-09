import Image from 'next/image'

import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'
import { QuantitySelector } from '@/shared/ui/quantity-selector/quantity-selector.ui'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-view.module.scss'

export const CoffeeViewTopBar = ({
  coffee,
  onClose
}: {
  coffee: TypeCoffee
  onClose: () => void
}) => {
  return (
    <div className={styles.topBar}>
      <Image src={coffee.imageUrl} alt={coffee.name} width={312} height={312} />
      <div>
        <div>
          <h2>{coffee.name}</h2>
          <div>
            <span>{coffee.price} ₽</span>
            <Link
              isButton={true}
              model={EnumModelLink.border}
              onClick={onClose}
            >
              X
            </Link>
          </div>
        </div>
        <p>{coffee.description}</p>
        <p>
          Category: <span>{coffee.categoryCoffee.name}</span>
        </p>
        <div className={styles.cardButton}>
          <Link isButton={true} model={EnumModelLink.fill}>
            Add to Card
          </Link>
          <QuantitySelector />
        </div>
        <p className={styles.opacity}>
          Fresh fry. A balanced taste with a rich aroma. Ideal for espresso and
          alternatives. <br />
          Coffee of a sessile variety. Frown manually for the perfect taste.
          100% arabica. <br />
          Individual profile of frying. Unique taste. Proven quality. <br />
        </p>
      </div>
    </div>
  )
}
