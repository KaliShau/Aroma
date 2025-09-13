import { Metadata, NextPage } from 'next'

import { MyOrders } from '@/pages-fsd/orders/my-orders'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'My Orders',
  ...NO_INDEX_PAGE
}

const OrdersPage: NextPage = () => {
  return <MyOrders />
}

export default OrdersPage
