import { ReactNode } from 'react'

import { DocumentationsLayout } from '@/pages-fsd/documentations/layout/ui/settings-layout.ui'

const DocumentationsLayoutNext = ({ children }: { children: ReactNode }) => {
  return <DocumentationsLayout>{children}</DocumentationsLayout>
}

export default DocumentationsLayoutNext
