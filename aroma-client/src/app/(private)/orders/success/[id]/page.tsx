import { Metadata, NextPage } from 'next'

import { OrdersSuccess } from '@/pages-fsd/orders/success'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Success',
  ...NO_INDEX_PAGE
}

const OrdersSuccessPage: NextPage = () => {
  return <OrdersSuccess />
}

export default OrdersSuccessPage
