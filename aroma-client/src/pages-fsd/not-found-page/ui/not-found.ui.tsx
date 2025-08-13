import { ErrorNotFound } from './error.ui'
import { Header } from './header.ui'
import styles from './not-found.module.scss'

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <Header />
      <ErrorNotFound />
    </div>
  )
}
