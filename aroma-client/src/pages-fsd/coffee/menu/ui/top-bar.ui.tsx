'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import icon from '@/shared/assets/icons/search.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './menu.module.scss'

type TypeSearchTerm = {
  searchTerm: string
}

export const MenuTopBar = () => {
  const { register, handleSubmit } = useForm<TypeSearchTerm>()
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentSearchTerm = searchParams.get('search')

  const onSubmit: SubmitHandler<TypeSearchTerm> = data => {
    const params = new URLSearchParams(searchParams.toString())

    if (data.searchTerm.trim()) {
      params.set('search', data.searchTerm.trim())
    } else {
      params.delete('search')
    }

    params.set('page', '1')

    router.push(`${PUBLIC_ROUTES.menu()}?${params.toString()}`)
  }

  return (
    <div className={styles.topBar}>
      <h2>We deliver nothing but the finest coffee experience</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          placeholder='Search here'
          icon={icon}
          {...register('searchTerm')}
        />
        <Link isButton={true} model={EnumModelLink.fill}>
          Search
        </Link>
      </form>
    </div>
  )
}
