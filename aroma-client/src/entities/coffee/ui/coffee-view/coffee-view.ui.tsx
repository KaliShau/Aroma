import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'

import { TypeCartItem } from '@/shared/models/cart-item.type'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-view.module.scss'
import { CoffeeSimilar } from './similar.ui'
import { CoffeeViewTopBar } from './top-bar.ui'

type CoffeeCartMenu = {
  coffee: TypeCoffee
  addItem: ActionCreatorWithPayload<TypeCartItem>
}

export const CoffeeView: FC<CoffeeCartMenu> = ({ coffee, addItem }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const onClose = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('coffee')
    router.replace(url.toString(), { scroll: false })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [router])

  return (
    <div className={styles.root} ref={ref}>
      <CoffeeViewTopBar addItem={addItem} coffee={coffee} onClose={onClose} />
      <CoffeeSimilar category={coffee.categoryCoffee.slug} />
    </div>
  )
}
