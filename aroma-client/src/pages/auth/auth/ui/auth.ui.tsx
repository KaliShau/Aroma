'use client'

import { NotFound } from '@/pages/not-found'
import { useSearchParams } from 'next/navigation'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './auth.module.scss'

export const Auth = () => {
  const searchParams = useSearchParams()

  if (!searchParams?.size) {
    return <NotFound />
  }

  const email = searchParams.get('email')

  if (!email) {
    return <NotFound />
  }

  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      {email}
    </div>
  )
}
