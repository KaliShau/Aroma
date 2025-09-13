import { TypeOrder, TypeOrderWithCountItems } from '@/entities/order'

import { TypePaginate } from '@/shared/models/paginate.type'

export type TypePaginateUserOrders = {
  data: TypeOrderWithCountItems[]
  pagination: TypePaginate
}
