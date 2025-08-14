import { Metadata } from 'next'

import { NotFound } from '@/pages-fsd/not-found-page'

export const metadata: Metadata = {
  title: 'Not Found'
}

const NotFoundPage = () => {
  return <NotFound />
}

export default NotFoundPage
