'use client'

import { useRouter } from 'next/navigation'

import Arrows from '@/shared/assets/icons/arrows.svg'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './not-found.module.scss'

export const ErrorNotFound = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <div className={styles.error}>
      <h2>
        Page <span>Not Found</span>
      </h2>
      <p>
        We've looked everywhere but couldn't find the page <br /> you were
        looking for.
      </p>
      <Link model={EnumModelLink.fill} isButton={true} onClick={goBack}>
        <Arrows />
        Go Back
      </Link>
    </div>
  )
}
