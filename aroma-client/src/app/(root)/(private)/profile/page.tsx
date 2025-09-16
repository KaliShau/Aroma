import { Metadata, NextPage } from 'next'

import { Profile } from '@/pages-fsd/profile'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

const ProfilePage: NextPage = () => {
  return <Profile />
}

export default ProfilePage
