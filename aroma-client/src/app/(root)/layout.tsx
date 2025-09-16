import { ReactNode } from 'react'

import { Layout } from '@/widgets/layout'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}

export default RootLayout
