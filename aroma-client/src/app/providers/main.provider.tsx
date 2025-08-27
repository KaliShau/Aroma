'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store/store'
import { PersistProvider } from './persist.provider'
import { QueryProvider } from './query.provider'
import { ToasterProvider } from './toaster.provider'

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <PersistProvider>
          <ToasterProvider />
          <QueryProvider>{children}</QueryProvider>
        </PersistProvider>
      </Provider>
    </>
  )
}
