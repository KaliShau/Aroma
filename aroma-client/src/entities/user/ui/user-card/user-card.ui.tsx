import Image from 'next/image'
import { FC } from 'react'

import { Avatar } from '@/shared/ui/avatar/avatar.ui'

import { TypeUser } from '../../model/user.type'
import styles from './user-card.module.scss'

type TypeUserCard = {
  user: TypeUser
}

export const UserCard: FC<TypeUserCard> = ({ user }) => {
  return (
    <div className={styles.root}>
      <Avatar data={user} isAuth />
      <h4>{user.username}</h4>
    </div>
  )
}
