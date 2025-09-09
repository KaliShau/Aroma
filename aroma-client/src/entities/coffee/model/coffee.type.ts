import { TypeCategoryCoffee } from '@/entities/category-coffee'

export type TypeCoffee = {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  slug: string
  description: string
  price: number
  imageUrl: string
  isAvailable: boolean

  categoryCoffeeId: string
  categoryCoffee: TypeCategoryCoffee
}
