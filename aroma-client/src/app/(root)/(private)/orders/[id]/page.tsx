import { Metadata, NextPage } from 'next'

import { Order } from '@/pages-fsd/orders/order'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Order',
  ...NO_INDEX_PAGE
}

const OrderPage: NextPage = () => {
  return <Order />
}

export default OrderPage
