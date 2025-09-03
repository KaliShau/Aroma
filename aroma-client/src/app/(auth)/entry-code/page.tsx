import { Metadata, NextPage } from 'next'

import { EntryCode } from '@/pages-fsd/auth/entry-code'

export const metadata: Metadata = {
  title: 'Entry code'
}

const EntryCodePage: NextPage = () => {
  return <EntryCode />
}

export default EntryCodePage
