import { Metadata, NextPage } from 'next'

import { MenuDocumentations } from '@/pages-fsd/documentations/menu'

export const metadata: Metadata = {
  title: 'Docs'
}

const DocumentationsPage: NextPage = () => {
  return <MenuDocumentations />
}

export default DocumentationsPage
