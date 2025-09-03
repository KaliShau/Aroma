import styles from './privacy-policy.module.scss'

export const PrivacyPolicyContactUs = () => {
  return (
    <section className={styles.policySection}>
      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or your personal
        data, please contact us:
      </p>
      <div className={styles.contactInfo}>
        <p>
          <strong>Email:</strong> privacy@aroma-coffee.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Address:</strong> 123 Coffee Street, Brewville, CO 12345
        </p>
      </div>
    </section>
  )
}
