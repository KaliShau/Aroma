import { GenerateCode } from '@/pages/auth/generate-code'
import { SignOut } from '@/pages/auth/sign-out'
import { Metadata, NextPage } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Sign Out',
  ...NO_INDEX_PAGE
}

const SignOutPage: NextPage = () => {
  return <SignOut />
}

export default SignOutPage
