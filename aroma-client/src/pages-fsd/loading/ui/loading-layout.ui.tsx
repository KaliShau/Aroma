import { ReactNode } from 'react'

import styles from './loading.module.scss'

export const LoadingLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.layout}>{children}</div>
}
