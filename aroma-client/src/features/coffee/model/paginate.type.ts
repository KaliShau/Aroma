import { TypeCoffee } from '@/entities/coffee'

type TypePaginate = {
  hasNext: boolean
  hasPrev: boolean
  limit: number
  page: number
  total: number
  totalPages: number
}

export type TypePaginateAllCoffees = {
  data: TypeCoffee[]
  pagination: TypePaginate
}
