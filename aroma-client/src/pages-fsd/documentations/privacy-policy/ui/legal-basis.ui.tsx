import styles from './privacy-policy.module.scss'

export const PrivacyPolicyLegalBasis = () => {
  return (
    <section className={styles.policySection}>
      <h2>3. Legal Basis for Processing (EEA/UK Users)</h2>
      <p>
        If you are in the European Economic Area (EEA) or UK, we process your
        data based on:
      </p>
      <ul>
        <li>
          <strong>Contract performance:</strong> To fulfill your orders
        </li>
        <li>
          <strong>Consent:</strong> For marketing communications
        </li>
        <li>
          <strong>Legitimate interests:</strong> For business improvement and
          security
        </li>
        <li>
          <strong>Legal obligation:</strong> To comply with applicable laws
        </li>
      </ul>
    </section>
  )
}
