import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Link } from '@/shared/ui/link/link.ui'

import { TypeCoffee } from '../../model/coffee.type'
import styles from './coffee-card-menu.module.scss'

type CoffeeCartMenu = {
  coffee: TypeCoffee
}

export const CoffeeCardMenu: FC<CoffeeCartMenu> = ({ coffee }) => {
  const searchParams = useSearchParams()

  const createPageUrl = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('coffee', slug)
    return `${PUBLIC_ROUTES.menu()}?${params.toString()}`
  }

  return (
    <Link
      href={createPageUrl(coffee.slug)}
      className={styles.root}
      scroll={false}
    >
      <Image src={coffee.imageUrl} alt={coffee.name} width={340} height={340} />
      <div>
        <h3>{coffee.name}</h3>
        <span>{coffee.price} ₽</span>
      </div>
      <p>{coffee.description}</p>
    </Link>
  )
}
