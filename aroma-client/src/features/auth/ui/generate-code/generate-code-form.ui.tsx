'use client'

import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form'

import Email from '@/shared/assets/icons/email.svg'
import SignIn from '@/shared/assets/icons/sign-in.svg'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { TypeGenerateCode } from '../../model/auth.type'
import styles from './auth.module.scss'

export const GenerateCodeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<TypeGenerateCode>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<TypeGenerateCode> = data => {
    console.log(data)
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <h2>
        Generate <span>Code</span>
      </h2>
      <Field
        label='Only login via email'
        icon={Email}
        placeholder='Email address'
        error={errors.email}
        {...register('email', {
          required: { message: 'This field is mandatory!', value: true }
        })}
      />
      <p>
        By signing up or logging in, you consent to Aroma's Terms of Use and
        Privacy Policy.
      </p>
      <Link isButton={true} model={EnumModelLink.fill}>
        Get the code <SignIn />
      </Link>
    </form>
  )
}
