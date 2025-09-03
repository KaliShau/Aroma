import { Metadata, NextPage } from 'next'

import { Appearance } from '@/pages-fsd/settings/appearance'

export const metadata: Metadata = {
  title: 'Appearance'
}

const AppearancePage: NextPage = () => {
  return <Appearance />
}

export default AppearancePage
