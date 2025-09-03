import { ReactNode } from 'react'

import { Loading, LoadingLayout } from '@/pages-fsd/loading'

import { useProfile } from '@/features/user'

import { cookieTokens } from '@/shared/utils/token.utils'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const hasToken = Boolean(cookieTokens.getAccess())

  const { isLoading } = useProfile(hasToken)

  if (!hasToken) {
    return <>{children}</>
  }

  if (isLoading) {
    return (
      <LoadingLayout>
        <Loading />
      </LoadingLayout>
    )
  }

  return <>{children}</>
}
