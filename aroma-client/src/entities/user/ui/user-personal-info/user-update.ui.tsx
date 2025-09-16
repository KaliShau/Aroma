import { Dispatch, SetStateAction, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeUpdateUser, useUpdateUser } from '@/features/user'

import Spinner from '@/shared/assets/icons/spinner.svg'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { TypeUser } from '../../model/user.type'
import styles from './user-personal-info.module.scss'

export const UserPersonalInfoUpdateModal = ({
  setShowUpdateModal,
  user
}: {
  setShowUpdateModal: Dispatch<SetStateAction<boolean>>
  user: TypeUser
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<TypeUpdateUser>({ mode: 'onChange' })
  const { isPending, mutate, isSuccess } = useUpdateUser()

  useEffect(() => {
    setValue('firstName', user.firstName as string)
    setValue('lastName', user.lastName as string)
    setValue('phone', user.phone as string)
    setValue('username', user.username as string)
  }, [])

  const onSubmit: SubmitHandler<TypeUpdateUser> = data => {
    mutate(data)
  }

  useEffect(() => {
    if (isSuccess) {
      setShowUpdateModal(false)
    }
  }, [isSuccess, setShowUpdateModal])

  return (
    <form className={styles.modal} onSubmit={handleSubmit(onSubmit)}>
      <h3>Update Personal Information </h3>
      <div>
        <Field
          label='First name'
          placeholder='First name'
          {...register('firstName')}
        />
        <Field
          label='Last name'
          placeholder='Last name'
          {...register('lastName')}
        />
      </div>
      <div>
        <Field label='Phone' placeholder='Phone' {...register('phone')} />
        <Field
          label='Username'
          error={errors.username}
          placeholder='Username'
          {...register('username', {
            required: { value: true, message: 'This field is required!' }
          })}
        />
      </div>
      <Link isButton={true} model={EnumModelLink.fill}>
        {isPending ? <Spinner /> : 'Save changes'}
      </Link>
    </form>
  )
}
