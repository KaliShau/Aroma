import { Home } from '@/pages-fsd/home-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage
