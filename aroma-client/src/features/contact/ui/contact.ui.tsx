'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeRequestContact } from '@/features/contact'

import Lines from '@/shared/assets/icons/lines.svg'
import { Area } from '@/shared/ui/area/area.ui'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './contact.module.scss'

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<TypeRequestContact>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<TypeRequestContact> = data => {
    console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Lines />
      <div>
        <h2>We'd love to hear from you!</h2>
        <h2>Let's get in touch</h2>
      </div>
      <div className={styles.fields}>
        <Field
          label='Title message'
          placeholder='Title'
          error={errors.title}
          {...register('title', {
            required: { value: true, message: 'This field is mandatory!' }
          })}
        />
        <Area
          label='Your message'
          error={errors.message}
          {...register('message', {
            required: { value: true, message: 'This field is mandatory!' }
          })}
        />
      </div>
      <Link isButton={true} model={EnumModelLink.fill}>
        Send Message
      </Link>
    </form>
  )
}
