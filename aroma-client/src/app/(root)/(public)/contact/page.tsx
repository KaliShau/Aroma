import { Metadata, NextPage } from 'next'

import { Contact } from '@/pages-fsd/contact'

export const metadata: Metadata = {
  title: 'Contact'
}

const ContactPage: NextPage = () => {
  return <Contact />
}

export default ContactPage
