import { ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

import { Loading, LoadingLayout } from '@/pages-fsd/loading'

import { persistor } from '../store/store'

export const PersistProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PersistGate
      loading={
        <LoadingLayout>
          <Loading />
        </LoadingLayout>
      }
      persistor={persistor}
    >
      {children}
    </PersistGate>
  )
}
