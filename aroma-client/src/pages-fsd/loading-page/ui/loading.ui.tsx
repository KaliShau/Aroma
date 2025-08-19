import { Circles } from '@/shared/ui/circles/circles.ui'

import styles from './loading.module.scss'

export const Loading = () => {
  return (
    <div className={styles.root}>
      <div>
        <h2>
          Page <span>Loading</span>
        </h2>
        <p>Please wait a bit</p>
      </div>
      <Circles />
    </div>
  )
}
