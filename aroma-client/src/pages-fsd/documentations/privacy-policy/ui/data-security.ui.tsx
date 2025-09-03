import styles from './privacy-policy.module.scss'

export const PrivacyPolicySecurity = () => {
  return (
    <section className={styles.policySection}>
      <h2>6. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal
        information, including:
      </p>
      <ul>
        <li>Secure HTTPS connections</li>
        <li>Encrypted data storage</li>
        <li>Limited access to authorized personnel only</li>
        <li>Regular security assessments</li>
      </ul>
    </section>
  )
}
