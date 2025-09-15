'use client'

import { useProfile } from '@/features/user'

import { UserPersonalInfo, UserProfileCard } from '@/entities/user'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './profile.module.scss'

export const Profile = () => {
  const { data, isLoading } = useProfile()

  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <h2>My profile</h2>
      {isLoading && <div>Loading</div>}
      {data && <UserProfileCard user={data} />}
      {data && <UserPersonalInfo user={data} />}
    </div>
  )
}
