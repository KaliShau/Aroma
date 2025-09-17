'use client'

import { FC, useEffect, useState } from 'react'

import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'
import { formatDate } from '@/shared/utils/date.utils'

import { TypeUser } from '../../model/user.type'
import styles from './user-personal-info.module.scss'
import { UserPersonalInfoUpdateModal } from './user-update.ui'

type TypeUserPersonalInfo = {
  user: TypeUser
}

export const UserPersonalInfo: FC<TypeUserPersonalInfo> = ({ user }) => {
  const [isShowUpdateModal, setShowUpdateModal] = useState<boolean>(false)

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isShowUpdateModal) {
        setShowUpdateModal(false)
      }
    }

    window.addEventListener('keydown', handleEscKey)

    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [isShowUpdateModal, setShowUpdateModal])

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3>Personal information</h3>
        <Link
          isButton={true}
          model={EnumModelLink.fill}
          onClick={() => setShowUpdateModal(true)}
        >
          Edit
        </Link>
      </div>
      <div className={styles.gridWrapper}>
        <div>
          <p>First name</p>
          <span>{user.firstName || 'No name'}</span>
        </div>
        <div>
          <p>Last name</p>
          <span>{user.lastName || 'No name'}</span>
        </div>
        <div>
          <p>Phone</p>
          <span>{user.phone || 'No phone'}</span>
        </div>
        <div>
          <p>Email</p>
          <span>{user.email}</span>
        </div>
        <div>
          <p>Created at</p>
          <span>{formatDate(user.createdAt)}</span>
        </div>
        <div>
          <p>Username</p>
          <span>{user.username}</span>
        </div>
      </div>
      <div
        className={cn(styles.overlay, {
          [styles.overlayShow]: isShowUpdateModal
        })}
        onClick={() => setShowUpdateModal(false)}
      />
      {isShowUpdateModal && (
        <UserPersonalInfoUpdateModal
          user={user}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
    </div>
  )
}
