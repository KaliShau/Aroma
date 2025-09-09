import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-view.module.scss'
import { CoffeeViewTopBar } from './top-bar.ui'

type CoffeeCartMenu = {
  coffee: TypeCoffee
}

export const CoffeeView: FC<CoffeeCartMenu> = ({ coffee }) => {
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
      <CoffeeViewTopBar coffee={coffee} onClose={onClose} />
    </div>
  )
}
