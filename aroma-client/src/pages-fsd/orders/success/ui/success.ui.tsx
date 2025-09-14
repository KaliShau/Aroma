'use client'

import { useParams } from 'next/navigation'

import Arrows from '@/shared/assets/icons/arrows.svg'
import Ok from '@/shared/assets/icons/ok.svg'
import bg from '@/shared/assets/images/brown-line.png'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './success.module.scss'

export const OrdersSuccess = () => {
  const param = useParams()

  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <div>
        <Ok />
        <h2>
          Thank You <span>For Your Order!</span>
        </h2>
        <p>Your Purchase is Confirmed!</p>
        <div>
          <Link model={EnumModelLink.fill} href={PUBLIC_ROUTES.home()}>
            <Arrows />
            Home
          </Link>
          <Link
            model={EnumModelLink.fill}
            href={param.id ? PRIVATE_ROUTES.order(param.id as string) : '#'}
          >
            <Arrows />
            Order
          </Link>
        </div>
      </div>
    </div>
  )
}
