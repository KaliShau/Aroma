import styles from './privacy-policy.module.scss'

export const PrivacyPolicyInfoCollect = () => {
  return (
    <section className={styles.policySection}>
      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>

      <div className={styles.subsection}>
        <h3>Personal Data You Provide:</h3>
        <ul>
          <li>
            <strong>For order processing:</strong> Full name, phone number,
            email address, delivery address
          </li>
          <li>
            <strong>For payment processing:</strong> Payment information
            (processed securely by third-party providers)
          </li>
          <li>
            <strong>For account registration:</strong> Name, email, password
            (encrypted)
          </li>
          <li>
            <strong>For customer support:</strong> Information you provide when
            contacting us
          </li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h3>Automatically Collected Data:</h3>
        <ul>
          <li>
            <strong>Technical information:</strong> IP address, browser type, OS
            version, device information
          </li>
          <li>
            <strong>Usage information:</strong> Visit time, pages viewed, order
            history, referral sources
          </li>
        </ul>
      </div>
    </section>
  )
}
