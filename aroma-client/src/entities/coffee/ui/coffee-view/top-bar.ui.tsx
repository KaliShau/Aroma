import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import Image from 'next/image'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/store/store'

import { TypeCartItem } from '@/shared/models/cart-item.type'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'
import { QuantitySelector } from '@/shared/ui/quantity-selector/quantity-selector.ui'

import { TypeCoffee } from '../../model/coffee.type'
import { UpdateQuantity } from '../update-quantity.ui'
import styles from './coffee-view.module.scss'

type TypeCoffeeViewTopBar = {
  addItem: ActionCreatorWithPayload<TypeCartItem>
  updateQuantity: ActionCreatorWithPayload<TypeCartItem>
  removeItem: ActionCreatorWithPayload<string>
  coffee: TypeCoffee
  onClose: () => void
}

export const CoffeeViewTopBar: FC<TypeCoffeeViewTopBar> = ({
  coffee,
  onClose,
  addItem,
  removeItem,
  updateQuantity
}) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState<number>(1)

  const items = useSelector((state: RootState) => state.cart.items)
  const currentItem = items.find(value => value.id === coffee.id)

  const createCartItem = () => {
    if (currentItem && currentItem?.quantity >= 100) {
      return toast.error('You have exceeded the limit!')
    }

    dispatch(addItem({ id: coffee.id, quantity }))
    toast.success('Item added successfully!')
  }

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
          {currentItem ? (
            <UpdateQuantity
              coffee={coffee}
              quantity={currentItem.quantity}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          ) : (
            <>
              <Link
                isButton={true}
                model={EnumModelLink.fill}
                onClick={createCartItem}
              >
                Add to Card
              </Link>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </>
          )}
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
