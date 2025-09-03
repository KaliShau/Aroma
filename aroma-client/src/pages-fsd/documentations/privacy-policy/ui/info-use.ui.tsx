import styles from './privacy-policy.module.scss'

export const PrivacyPolicyInfoUse = () => {
  return (
    <section className={styles.policySection}>
      <h2>2. How We Use Your Information</h2>
      <p>We use your personal information for the following purposes:</p>
      <ul>
        <li>To process and deliver your orders</li>
        <li>
          To communicate with you about order confirmations and delivery status
        </li>
        <li>To respond to your customer service requests</li>
        <li>To improve our products, services, and website experience</li>
        <li>To send marketing communications (with your consent)</li>
        <li>To prevent fraud and ensure security</li>
        <li>To comply with legal obligations</li>
      </ul>
    </section>
  )
}
