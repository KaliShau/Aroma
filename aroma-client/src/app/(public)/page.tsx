import { Home } from '@/pages/home'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage
