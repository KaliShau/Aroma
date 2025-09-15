import { useForm } from 'react-hook-form'

import { Field } from '@/shared/ui/field/field.ui'

import styles from './user-personal-info.module.scss'

export const UserPersonalInfoUpdateModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ mode: 'onChange' })

  return (
    <div className={styles.modal}>
      <h3>Update Personal Information </h3>
      {/* <div>
        <Field label='First name' placeholder='First name' {/>
      </div> */}
    </div>
  )
}
