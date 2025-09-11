import { useQuery } from '@tanstack/react-query'

import { TypeCoffee } from '@/entities/coffee'

import { CoffeeService } from '../services/coffee.service'

type Type = {
  data: TypeCoffee[]
}

export const useCoffeeAll = (
  page: number = 1,
  category?: string,
  search?: string,
  limit?: string
) => {
  const { data, isError, isLoading } = useQuery<Type>({
    queryKey: [`coffee: ${category}`],
    queryFn: () => CoffeeService.getAll(page, category, search, limit, false),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
