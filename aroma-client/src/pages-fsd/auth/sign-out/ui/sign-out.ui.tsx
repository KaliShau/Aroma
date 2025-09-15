'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { Loading } from '@/pages-fsd/loading'

import { useSignOut } from '@/features/auth/hooks/sign-out.hook'

import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'

export const SignOut = () => {
  const { isPending, isSuccess, mutate } = useSignOut()

  useEffect(() => {
    mutate()
  }, [mutate])

  if (isSuccess) {
    redirect(PUBLIC_ROUTES.home())
  }

  if (isPending) {
    return <Loading />
  }

  return <Loading />
}
