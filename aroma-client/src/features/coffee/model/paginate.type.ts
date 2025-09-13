import { TypeCoffee } from '@/entities/coffee'

import { TypePaginate } from '@/shared/models/paginate.type'

export type TypePaginateAllCoffees = {
  data: TypeCoffee[]
  pagination: TypePaginate
}
