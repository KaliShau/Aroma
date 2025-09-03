import { ReactNode } from 'react'

import { SettingsLayout } from '@/pages-fsd/settings/layout'

const SettingsLayoutNext = ({ children }: { children: ReactNode }) => {
  return <SettingsLayout>{children}</SettingsLayout>
}

export default SettingsLayoutNext
