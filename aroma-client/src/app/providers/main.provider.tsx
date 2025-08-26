'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store/store'
import { PersistProvider } from './persist.provider'
import { QueryProvider } from './query.provider'

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <PersistProvider>
          <QueryProvider>{children}</QueryProvider>
        </PersistProvider>
      </Provider>
    </>
  )
}
