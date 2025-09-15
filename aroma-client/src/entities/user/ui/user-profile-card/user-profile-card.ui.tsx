'use client'

import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import { useSaveFile } from '@/features/file'
import { useUpdateAvatar } from '@/features/user'

import Spinner from '@/shared/assets/icons/spinner.svg'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { TypeUser } from '../../model/user.type'
import styles from './user-profile-card.module.scss'

type TypeUserProfileCard = {
  user: TypeUser
}

export const UserProfileCard: FC<TypeUserProfileCard> = ({ user }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { data, isPending: isPendingSaveFile, mutateAsync } = useSaveFile()
  const { isPending: isPendingUpdateAvatar, mutate } = useUpdateAvatar()

  const isPending = isPendingSaveFile || isPendingUpdateAvatar

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      if (!file.type.startsWith('image/')) {
        toast('Please choose the image!')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        toast('The file is too large. Maximum size: 5MB!')
        return
      }

      setSelectedAvatar(file)
    }
  }

  const handleAvatarSave = async () => {
    if (!selectedAvatar) return

    const formData = new FormData()
    formData.append('file', selectedAvatar)

    const { url } = await mutateAsync({ file: formData, folder: 'avatars' })
    mutate(url)
    setSelectedAvatar(null)
  }

  const previewUrl = selectedAvatar ? URL.createObjectURL(selectedAvatar) : null

  return (
    <div className={styles.root}>
      {isPending ? (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      ) : selectedAvatar ? (
        <Image
          width={200}
          height={200}
          alt={user.username}
          src={previewUrl as string}
          onClick={() => inputRef.current?.click()}
        />
      ) : (
        <Image
          width={200}
          height={200}
          alt={user.username}
          src={user.avatarUrl}
          onClick={() => inputRef.current?.click()}
        />
      )}
      {selectedAvatar && (
        <Link
          className={styles.saveButton}
          isButton={true}
          model={EnumModelLink.fill}
          onClick={handleAvatarSave}
        >
          Save avatar
        </Link>
      )}
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleAvatarChange}
      />
      <div>
        <h3>
          {user.firstName ? user.firstName : 'No name'} {user?.lastName}
        </h3>
        <p>{user.username}</p>
        <p>{user.role}</p>
      </div>
    </div>
  )
}
