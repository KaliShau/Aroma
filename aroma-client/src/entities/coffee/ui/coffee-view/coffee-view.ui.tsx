import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-view.module.scss'

type CoffeeCartMenu = {
  coffee: TypeCoffee
}

export const CoffeeView: FC<CoffeeCartMenu> = ({ coffee }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        const url = new URL(window.location.href)
        url.searchParams.delete('coffee')
        router.replace(url.toString(), { scroll: false })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [router])

  return (
    <div className={styles.root} ref={ref}>
      <Image src={coffee.imageUrl} alt={coffee.name} width={340} height={340} />
      <div>
        <h3>{coffee.name}</h3>
        <span>{coffee.price} ₽</span>
      </div>
      <p>{coffee.description}</p>
    </div>
  )
}
