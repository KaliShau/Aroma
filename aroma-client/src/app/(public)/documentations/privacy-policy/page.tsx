import { Metadata, NextPage } from 'next'

import { PrivacyPolicy } from '@/pages-fsd/documentations/privacy-policy'

export const metadata: Metadata = {
  title: 'Privacy policy'
}

const PrivacyPolicyPage: NextPage = () => {
  return <PrivacyPolicy />
}

export default PrivacyPolicyPage
