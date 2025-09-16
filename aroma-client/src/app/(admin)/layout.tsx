import { Metadata } from 'next'
import { ReactNode } from 'react'

import { AdminLayout as AdminL } from '@/pages-fsd/admin/layout'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE
}

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminL>{children}</AdminL>
    </>
  )
}

export default AdminLayout
