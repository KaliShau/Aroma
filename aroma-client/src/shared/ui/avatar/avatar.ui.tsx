import Image from 'next/image'

import { TypeUser } from '@/entities/user'

import User from '@/shared/assets/icons/user.svg'

import styles from './avatar.module.scss'

export const Avatar = ({
  data,
  isAuth
}: {
  data: TypeUser | undefined
  isAuth: boolean
}) => {
  if (isAuth) {
    return (
      <div className={styles.root}>
        {data?.avatarUrl ? (
          <Image alt='RL' width={40} height={40} src={data?.avatarUrl} />
        ) : (
          data?.username[0]
        )}
      </div>
    )
  } else {
    return (
      <div className={styles.root}>
        <User />
      </div>
    )
  }
}
