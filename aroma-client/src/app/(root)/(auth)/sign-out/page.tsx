import { Metadata, NextPage } from 'next'

import { SignOut } from '@/pages-fsd/auth/sign-out'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Sign Out',
  ...NO_INDEX_PAGE
}

const SignOutPage: NextPage = () => {
  return <SignOut />
}

export default SignOutPage
