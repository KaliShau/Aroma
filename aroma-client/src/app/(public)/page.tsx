import { Metadata, NextPage } from 'next'

import { Home } from '@/pages-fsd/home-page'

export const metadata: Metadata = {
  title: 'Home'
}

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage
