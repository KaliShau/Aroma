import { PrivacyPolicyChanges } from './changes.ui'
import { PrivacyPolicyContactUs } from './contact-us.ui'
import { PrivacyPolicyCookies } from './cookies.ui'
import { PrivacyPolicyDataRetention } from './data-retention.ui'
import { PrivacyPolicySecurity } from './data-security.ui'
import { PrivacyPolicyDataSharing } from './data-sharing.ui'
import { PrivacyPolicyHeader } from './header.ui'
import { PrivacyPolicyInfoCollect } from './info-collect.ui'
import { PrivacyPolicyInfoUse } from './info-use.ui'
import { PrivacyPolicyLegalBasis } from './legal-basis.ui'
import styles from './privacy-policy.module.scss'
import { PrivacyPolicyYourRights } from './your-rights.ui'

export const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.privacyContainer}>
        <PrivacyPolicyHeader />

        <main className={styles.privacyContent}>
          <PrivacyPolicyInfoCollect />
          <PrivacyPolicyInfoUse />
          <PrivacyPolicyLegalBasis />
          <PrivacyPolicyDataSharing />
          <PrivacyPolicyCookies />
          <PrivacyPolicySecurity />
          <PrivacyPolicyDataRetention />
          <PrivacyPolicyYourRights />
          <PrivacyPolicyChanges />
          <PrivacyPolicyContactUs />
        </main>
      </div>
    </div>
  )
}
