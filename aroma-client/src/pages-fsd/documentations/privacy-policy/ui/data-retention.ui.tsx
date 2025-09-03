import styles from './privacy-policy.module.scss'

export const PrivacyPolicyDataRetention = () => {
  return (
    <section className={styles.policySection}>
      <h2>7. Data Retention</h2>
      <p>We retain your personal information only as long as necessary for:</p>
      <ul>
        <li>Fulfilling the purposes outlined in this policy</li>
        <li>Complying with legal obligations</li>
        <li>Resolving disputes</li>
        <li>Enforcing our agreements</li>
      </ul>
    </section>
  )
}
