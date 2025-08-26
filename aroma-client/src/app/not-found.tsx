import { NotFound } from '@/pages/not-found'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found'
}

const NotFoundPage = () => {
  return <NotFound />
}

export default NotFoundPage
