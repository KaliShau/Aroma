import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './cart.module.scss'
import { CartContent } from './content.ui'
import { CartFooter } from './footer.ui'

type TypeCart = {
  setIsShowCart: Dispatch<SetStateAction<boolean>>
  isShowCart: boolean
}

export const Cart: FC<TypeCart> = ({ isShowCart, setIsShowCart }) => {
  useEffect(() => {
    if (isShowCart) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isShowCart])

  const handleOverlayClick = () => {
    setIsShowCart(false)
  }

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isShowCart) {
        setIsShowCart(false)
      }
    }

    window.addEventListener('keydown', handleEscKey)

    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [isShowCart, setIsShowCart])

  return (
    <>
      <div
        className={cn(styles.overlay, {
          [styles.overlayShow]: isShowCart
        })}
        onClick={handleOverlayClick}
      />

      <div
        className={cn(styles.root, {
          [styles.show]: isShowCart
        })}
      >
        <div className={styles.main}>
          <h2>My Cart</h2>
          <CartContent setIsShowCart={setIsShowCart} />
          <CartFooter />
        </div>
      </div>
    </>
  )
}
