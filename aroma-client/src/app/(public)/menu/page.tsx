import { Metadata, NextPage } from 'next'

import { Menu } from '@/pages-fsd/coffee/menu'

import { CategoryCoffee } from '@/features/category-coffee'
import { CoffeeService } from '@/features/coffee'

export const metadata: Metadata = {
  title: 'Menu'
}

const getCachedCoffee = async (
  page: number = 1,
  category?: string,
  search?: string
) => {
  return await CoffeeService.getAll(page, category, search)
}

const getCategoryCoffee = async () => {
  return await CategoryCoffee.getAll()
}

const MenuPage: NextPage<{
  searchParams: Promise<{
    category?: string
    page?: string
    search?: string
    coffee?: string
  }>
}> = async ({ searchParams }) => {
  const params = await searchParams

  const category = params?.category || ''
  const page = parseInt(params?.page || '1')
  const searchTerm = params?.search || ''
  const coffee = params?.coffee || ''

  const coffeesPaginate = await getCachedCoffee(page, category, searchTerm)
  const categoryAll = await getCategoryCoffee()

  return (
    <Menu
      data={coffeesPaginate.data}
      pagination={coffeesPaginate.pagination}
      category={categoryAll}
      coffee={coffee}
    />
  )
}

export default MenuPage
