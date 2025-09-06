import { CONTACT_DATA } from '@/shared/constants/contact.constant'

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
          <strong>Email:</strong> {CONTACT_DATA.email}
        </p>
        <p>
          <strong>Phone:</strong> {CONTACT_DATA.phone}
        </p>
        <p>
          <strong>Address:</strong> {CONTACT_DATA.address}
        </p>
      </div>
    </section>
  )
}
