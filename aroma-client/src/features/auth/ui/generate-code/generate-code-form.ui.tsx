'use client'

import { redirect } from 'next/navigation'
import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form'

import Email from '@/shared/assets/icons/email.svg'
import SignIn from '@/shared/assets/icons/sign-in.svg'
import Spinner from '@/shared/assets/icons/spinner.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Circles } from '@/shared/ui/circles/circles.ui'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { useGenerateCode } from '../../hooks/generate-code.hook'
import { TypeGenerateCode } from '../../model/auth.type'
import styles from './auth.module.scss'

export const GenerateCodeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<TypeGenerateCode>({ mode: 'onChange' })
  const { isPending, mutate, isSuccess } = useGenerateCode()

  const onSubmit: SubmitHandler<TypeGenerateCode> = data => {
    mutate(data)
  }

  if (isSuccess) {
    redirect(PUBLIC_ROUTES.auth(getValues('email')))
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
      <Link isButton={true} model={EnumModelLink.fill} disabled={isPending}>
        {isPending ? (
          <Spinner />
        ) : (
          <>
            Get the code <SignIn />
          </>
        )}
      </Link>
    </form>
  )
}
