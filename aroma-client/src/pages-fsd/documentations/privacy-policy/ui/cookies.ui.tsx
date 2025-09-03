import styles from './privacy-policy.module.scss'

export const PrivacyPolicyCookies = () => {
  return (
    <section className={styles.policySection}>
      <h2>5. Cookies and Tracking Technologies</h2>
      <p>Our website uses cookies to:</p>
      <ul>
        <li>Remember items in your shopping cart</li>
        <li>Save your preferences and settings</li>
        <li>Analyze website traffic and user behavior</li>
        <li>Improve your overall experience</li>
      </ul>
      <p>You can control cookies through your browser settings.</p>
    </section>
  )
}
