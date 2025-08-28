import { Loading, LoadingLayout } from '@/pages/loading'
import { ReactNode, useEffect, useState } from 'react'

import { useProfile } from '@/features/user'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useProfile()

  if (isLoading) {
    return (
      <LoadingLayout>
        <Loading />
      </LoadingLayout>
    )
  }

  return <>{children}</>
}
