import { Appearance } from '@/pages/settings'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Appearance'
}

const AppearancePage: NextPage = () => {
  return <Appearance />
}

export default AppearancePage
