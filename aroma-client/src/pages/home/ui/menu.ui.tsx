'use client'

import { CoffeeCard } from '@/entities/coffee'
import { TypeCoffee } from '@/entities/coffee/model/coffee.type'

import Arrow from '@/shared/assets/icons/arrow.svg'
import Circle from '@/shared/assets/icons/circle.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { useMenuHome } from '../hooks/menu.hooks'
import styles from './menu.module.scss'

const coffees: TypeCoffee[] = [
  {
    id: 'sdsdffsdfdsfsd',
    createdAt: new Date('2025-08-10T08:00:00Z'),
    updatedAt: new Date('2025-08-13T09:30:00Z'),
    name: 'Latte',
    slug: 'latte',
    description: 'Delicate coffee with milk foam And velvety taste.',
    imageUrl: '/test/lat.png',
    price: 160,
    isAvailable: true
  },
  {
    id: 'dsfsfdaggsfda',
    createdAt: new Date('2025-08-10T08:00:00Z'),
    updatedAt: new Date('2025-08-13T09:30:00Z'),
    name: 'Doppio',
    slug: 'doppio',
    description: 'Delicate coffee with milk foam And velvety taste.',
    imageUrl: '/test/dop.png',
    price: 160,
    isAvailable: true
  },
  {
    id: 'dsfsfdaggsfdadfgdgfs',
    createdAt: new Date('2025-08-10T08:00:00Z'),
    updatedAt: new Date('2025-08-13T09:30:00Z'),
    name: 'American',
    slug: 'american',
    description: 'Delicate coffee with milk foam And velvety taste.',
    imageUrl: '/test/amer.png',
    price: 160,
    isAvailable: true
  },
  {
    id: 'dsfsfdagdffdgsfda',
    createdAt: new Date('2025-08-10T08:00:00Z'),
    updatedAt: new Date('2025-08-13T09:30:00Z'),
    name: 'Mokko',
    slug: 'mokko',
    description: 'Delicate coffee with milk foam And velvety taste.',
    imageUrl: '/test/mok.png',
    price: 160,
    isAvailable: true
  },
  {
    id: 'dsfsfdagdfffddgsfda',
    createdAt: new Date('2025-08-10T08:00:00Z'),
    updatedAt: new Date('2025-08-13T09:30:00Z'),
    name: 'Triplo',
    slug: 'triplo',
    description: 'Delicate coffee with milk foam And velvety taste.',
    imageUrl: '/test/tri.png',
    price: 160,
    isAvailable: true
  },
  {
    id: 'dsfsfdagdfffddgsfdffda',
    createdAt: new Date('2025-08-10T08:00:00Z'),
    updatedAt: new Date('2025-08-13T09:30:00Z'),
    name: 'Ekspresso',
    slug: 'ekspresso',
    description: 'Delicate coffee with milk foam And velvety taste.',
    imageUrl: '/test/eks.png',
    price: 160,
    isAvailable: true
  }
]

export const MenuHome = () => {
  const { menuData, onClickNext, onClickPrev, direction, animationKey } =
    useMenuHome(coffees)

  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
      <div
        key={animationKey}
        className={cn(styles.carousel, {
          [styles.slide_next]: direction == 'next',
          [styles.slide_prev]: direction == 'prev'
        })}
      >
        {menuData &&
          menuData.map((item, i) => <CoffeeCard key={i} coffee={item} />)}
      </div>
      <Link href={PUBLIC_ROUTES.menu()} model={EnumModelLink.fill}>
        SEE ALL <Circle />
      </Link>
      <Link isButton={true} className={styles.left_arrow} onClick={onClickPrev}>
        <Arrow />
      </Link>
      <Link
        isButton={true}
        className={styles.right_arrow}
        onClick={onClickNext}
      >
        <Arrow />
      </Link>
    </div>
  )
}
