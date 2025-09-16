import { CustomerCard } from '@/entities/customer'
import { TypeCustomer } from '@/entities/customer/model/customer.type'
import { EnumUserRole } from '@/entities/user/model/user.type'

import styles from './home.module.scss'

const Customers: TypeCustomer[] = []

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

        {Customers.length == 0 && (
          <div className={styles.notFound}>Customers not found</div>
        )}
      </div>
    </div>
  )
}
