import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { AdminPageLayout } from '../../page-layout'
import styles from './coffee.module.scss'
import { AdminCoffeeTable } from './table.ui'

export const AdminCoffee = () => {
  return (
    <AdminPageLayout className={styles.root}>
      <div className={styles.header}>
        <h2>Coffee</h2>
        <Link isButton={true} model={EnumModelLink.fill}>
          Create coffee
        </Link>
      </div>
      <AdminCoffeeTable />
    </AdminPageLayout>
  )
}
