import { TypeUser } from '@/entities/user/model/user.type'

export type TypeCustomer = {
  id: string
  createdAt: Date
  updatedAt: Date

  text: string
  rating: number

  creator: TypeUser
}
