import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import Image from 'next/image'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import Cross from '@/shared/assets/icons/cross.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { TypeCartItem } from '@/shared/models/cart-item.type'
import { Link } from '@/shared/ui/link/link.ui'

import { TypeCoffee } from '../../model/coffee.type'
import { UpdateQuantity } from '../update-quantity.ui'
import styles from './coffee-mini-card.module.scss'

type CoffeeMiniCard = {
  coffee: TypeCoffee
  quantity: number
  onClick?: () => void
  updateQuantity: ActionCreatorWithPayload<TypeCartItem>
  removeItem: ActionCreatorWithPayload<string>
}

export const CoffeeMiniCard: FC<CoffeeMiniCard> = ({
  coffee,
  onClick,
  quantity,
  removeItem,
  updateQuantity
}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    onClick?.()
  }

  const removeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(removeItem(coffee.id))
    toast.success('Item has been successfully deleted!')
  }

  return (
    <Link
      href={PUBLIC_ROUTES.menu(coffee.slug)}
      className={styles.root}
      scroll={false}
      onClick={handleClick}
    >
      <Link isButton={true} className={styles.exit} onClick={removeClick}>
        <Cross />
      </Link>
      <div>
        <Image src={coffee.imageUrl} alt={coffee.name} width={62} height={62} />
        <div className={styles.content}>
          <div>
            <h3>{coffee.name}</h3>
            <span>{coffee.price} ₽</span>
          </div>
          <p>{coffee.description}</p>
        </div>
      </div>
      <div className={styles.value}>
        <UpdateQuantity
          coffee={coffee}
          quantity={quantity}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
        />
        <div>
          Total: <span>{quantity * coffee.price} ₽</span>
        </div>
      </div>
    </Link>
  )
}
