import Image from 'next/image'
import { FC } from 'react'

import { TypeUser } from '../../model/user.type'
import styles from './user-card.module.scss'

type TypeUserCard = {
  user: TypeUser
}

export const UserCard: FC<TypeUserCard> = ({ user }) => {
  return (
    <div className={styles.root}>
      {user.avatarUrl ? (
        <Image
          alt={user.username}
          src={user.avatarUrl}
          width={40}
          height={40}
        />
      ) : (
        <span>{user.username[0]}</span>
      )}
      <h4>{user.username}</h4>
    </div>
  )
}
