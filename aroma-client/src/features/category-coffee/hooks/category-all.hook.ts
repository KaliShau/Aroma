import { useQuery } from '@tanstack/react-query'

import { CategoryCoffee } from '../services/category-coffee.service'

export const useCategoryAll = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['category-all'],
    queryFn: () => CategoryCoffee.getAll(),
    staleTime: 5 * 60 * 1000,
    retry: 2
  })

  return { data, isError, isLoading }
}
