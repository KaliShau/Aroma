'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store/store'
import { AuthProvider } from './auth.provider'
import { PersistProvider } from './persist.provider'
import { QueryProvider } from './query.provider'
import { ToasterProvider } from './toaster.provider'

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <PersistProvider>
          <QueryProvider>
            <ToasterProvider />
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </PersistProvider>
      </Provider>
    </>
  )
}
