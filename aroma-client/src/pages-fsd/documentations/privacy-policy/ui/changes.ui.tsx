import styles from './privacy-policy.module.scss'

export const PrivacyPolicyChanges = () => {
  return (
    <section className={styles.policySection}>
      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. We will notify you of
        significant changes by:
      </p>
      <ul>
        <li>Posting the updated policy on this page</li>
        <li>Updating the "Last Updated" date</li>
        <li>
          Sending email notifications for major changes (where appropriate)
        </li>
      </ul>
    </section>
  )
}
