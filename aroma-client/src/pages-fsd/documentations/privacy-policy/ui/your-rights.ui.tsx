import styles from './privacy-policy.module.scss'

export const PrivacyPolicyYourRights = () => {
  return (
    <section className={styles.policySection}>
      <h2>8. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access and receive a copy of your data</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your data</li>
        <li>Restrict or object to certain processing</li>
        <li>Data portability</li>
        <li>Withdraw consent for marketing communications</li>
      </ul>
    </section>
  )
}
