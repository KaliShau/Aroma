import styles from './privacy-policy.module.scss'

export const PrivacyPolicyHeader = () => {
  return (
    <header className={styles.privacyHeader}>
      <h1>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last Updated: September 3, 2025</p>
    </header>
  )
}
