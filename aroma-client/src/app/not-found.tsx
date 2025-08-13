import { NotFound } from '@/pages-fsd/not-found-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found'
}

const NotFoundPage = () => {
  return <NotFound />
}

export default NotFoundPage
