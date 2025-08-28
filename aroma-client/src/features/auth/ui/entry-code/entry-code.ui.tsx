'use client'

import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import Key from '@/shared/assets/icons/key.svg'
import SignIn from '@/shared/assets/icons/sign-in.svg'
import Spinner from '@/shared/assets/icons/spinner.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { useEntryCode } from '../../hooks/entry-code.hook'
import { TypeEntryCode } from '../../model/auth.type'
import styles from '../auth.module.scss'

export const EntryCodeForm = ({ email }: { email: string }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<TypeEntryCode>({ mode: 'onChange' })
  const { isPending, mutate, isSuccess } = useEntryCode()

  const onSubmit: SubmitHandler<TypeEntryCode> = data => {
    mutate({ code: data.code, email })
  }

  if (isSuccess) {
    redirect(PUBLIC_ROUTES.home())
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <h2>
        Entry <span>Code</span>
      </h2>
      <Field
        label='Enter the code that came to the email'
        className={styles.key}
        icon={Key}
        placeholder='Code'
        error={errors.code}
        disabled={isPending}
        {...register('code', {
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
            Sign In <SignIn />
          </>
        )}
      </Link>
    </form>
  )
}
