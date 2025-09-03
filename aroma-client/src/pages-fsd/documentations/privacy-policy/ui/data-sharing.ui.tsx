import styles from './privacy-policy.module.scss'

export const PrivacyPolicyDataSharing = () => {
  return (
    <section className={styles.policySection}>
      <h2>4. Data Sharing with Third Parties</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>
          <strong>Payment processors</strong> for secure payment handling
        </li>
        <li>
          <strong>Delivery services</strong> for order fulfillment
        </li>
        <li>
          <strong>Email marketing platforms</strong> (with your consent)
        </li>
        <li>
          <strong>Analytics providers</strong> to improve our services
        </li>
        <li>
          <strong>Legal authorities</strong> when required by law
        </li>
      </ul>
    </section>
  )
}
