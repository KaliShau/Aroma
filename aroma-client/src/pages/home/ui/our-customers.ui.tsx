import { CustomerCard } from '@/entities/customer'
import { TypeCustomer } from '@/entities/customer/model/customer.type'
import { EnumUserRole } from '@/entities/user/model/user.type'

import Circle from '@/shared/assets/icons/circle.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './home.module.scss'

const Customers: TypeCustomer[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'gafsddsfddfgdfgs',
    rating: 4.5,
    text: '"This coffee is absolutely amazing! Rich, smooth, and perfectly  balanced with hints of chocolate and nuts. My morning isn’t complete  without it. Highly recommend!"',
    creator: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'gdfafsddhjksdfgdfgs',
      email: 'dsf',
      role: EnumUserRole.user,
      username: 'dfuser',
      avatarUrl: '/test/tt.jpg'
    }
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'gafsdhkjgfddsdfgdfgs',
    rating: 4.5,
    text: '"This coffee is absolutely amazing! Rich, smooth, and perfectly  balanced with hints of chocolate and nuts. My morning isn’t complete  without it. Highly recommend!"',
    creator: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'gdfafsddfdsdfgdfgs',
      email: 'dsf',
      role: EnumUserRole.user,
      username: 'user'
    }
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'gafsddsdfgfghkjddfgs',
    rating: 4.5,
    text: '"This coffee is absolutely amazing! Rich, smooth, and perfectly  balanced with hints of chocolate and nuts. My morning isn’t complete  without it. Highly recommend!"',
    creator: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'gdfafsddfdsdfgdfgs',
      email: 'dsf',
      role: EnumUserRole.user,
      username: 'hgghuser'
    }
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'gafsfdddsdghkjfgdfgs',
    rating: 4.5,
    text: '"This coffee is absolutely amazing! Rich, smooth, and perfectly  balanced with hints of chocolate and nuts. My morning isn’t complete  without it. Highly recommend!"',
    creator: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'gdfafsrtyfdddsdfgdfgs',
      email: 'dsf',
      role: EnumUserRole.user,
      username: 'user'
    }
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'gafsddfdsdfdfgdfgs',
    rating: 4.5,
    text: '"This coffee is absolutely amazing! Rich, smooth, and perfectly  balanced with hints of chocolate and nuts. My morning isn’t complete  without it. Highly recommend!"',
    creator: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'gdfafsfdddsbnm,dfgdfgs',
      email: 'dsf',
      role: EnumUserRole.user,
      username: 'user',
      avatarUrl: '/test/image.jpg'
    }
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'gafsdfddsdfgbnmdfgs',
    rating: 4.5,
    text: '"This coffee is absolutely amazing! Rich, smooth, and perfectly  balanced with hints of chocolate and nuts. My morning isn’t complete  without it. Highly recommend!"',
    creator: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'gdfafdfrtsddsdfgdfgs',
      email: 'dsf',
      role: EnumUserRole.user,
      username: 'user'
    }
  }
]

export const OurCustomers = () => {
  return (
    <div className={styles.customers}>
      <h2>OUR CUSTOMERS</h2>
      <p>
        At Aroma Coffee House, your satisfaction is our top priority. Here’s
        what our guests have to say about their love for our coffee and the
        warm, inviting vibe they experience daily.
      </p>
      <div>
        {Customers &&
          Customers.map(item => <CustomerCard customer={item} key={item.id} />)}
      </div>

      <Link href={PUBLIC_ROUTES.customers()} model={EnumModelLink.fill}>
        VIEW OTHERS <Circle />
      </Link>
    </div>
  )
}
