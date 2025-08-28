import { EntryCode } from '@/pages/auth/entry-code'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Entry code'
}

const EntryCodePage: NextPage = () => {
  return <EntryCode />
}

export default EntryCodePage
