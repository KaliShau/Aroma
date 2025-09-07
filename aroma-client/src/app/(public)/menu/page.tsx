import { Metadata, NextPage } from 'next'

import { Menu } from '@/pages-fsd/coffee/menu'

export const metadata: Metadata = {
  title: 'Menu'
}

const MenuPage: NextPage = () => {
  return <Menu />
}

export default MenuPage
