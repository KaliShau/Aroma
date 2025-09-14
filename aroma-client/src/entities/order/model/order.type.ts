import { EnumOrderStatus } from '@/shared/models/status.type'

export type TypeOrder = {
  id: string
  createdAt: Date
  updatedAt: Date
  total: number
  status: EnumOrderStatus
  paymentId: string
  paymentExpires?: Date
  userId: string
}

export type TypeOrderWithCountItems = TypeOrder & {
  _count: {
    items: number
  }
}
