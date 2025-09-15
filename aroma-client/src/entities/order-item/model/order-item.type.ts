import { TypeCoffee } from '@/entities/coffee'

export type TypeOrderItem = {
  coffeeId: string
  quantity: number
  id: string
  createdAt: Date
  updatedAt: Date
  price: number
  total: number
  orderId: string
  coffee: TypeCoffee
}
