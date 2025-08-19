'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Loading, LoadingLayout } from '@/pages-fsd/loading-page'

import { persistor, store } from '../store/store'

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  )
}
