import { CoffeeCard } from '@/entities/coffee/coffee-card'
import styles from './home.module.scss'
import { TypeCoffee } from '@/entities/coffee/model/coffee.type'

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
  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
      <CoffeeCard coffee={coffees[0]} />
    </div>
  )
}
