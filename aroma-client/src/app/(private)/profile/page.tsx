import { Metadata, NextPage } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

const ProfilePage: NextPage = () => {
  return <div>profile</div>
}

export default ProfilePage
