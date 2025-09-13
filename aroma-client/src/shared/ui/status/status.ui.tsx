import { cn } from '@/shared/lib/cn'
import { EnumOrderStatus } from '@/shared/models/status.type'

import styles from './status.module.scss'

export const Status = ({ status }: { status: EnumOrderStatus }) => {
  return (
    <p
      className={cn(styles.root, {
        [styles.completed]: status === EnumOrderStatus.COMPLETED,
        [styles.failed]:
          status === (EnumOrderStatus.FAILED || EnumOrderStatus.CANCELLED),
        [styles.pending]: status === EnumOrderStatus.PENDING
      })}
    >
      {status}
    </p>
  )
}
