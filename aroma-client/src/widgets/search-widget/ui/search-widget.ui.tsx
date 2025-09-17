import { useRouter, useSearchParams } from 'next/navigation'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import icon from '@/shared/assets/icons/search.svg'
import { Field } from '@/shared/ui/field/field.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './search-widget.module.scss'

type TypeSearchTerm = {
  searchTerm: string
}

type TypeSearchWidget = {
  routes: () => void
  isReturnOnePage?: boolean
}

export const SearchWidget: FC<TypeSearchWidget> = ({
  routes,
  isReturnOnePage = true
}) => {
  const { register, handleSubmit, setValue } = useForm<TypeSearchTerm>()
  const searchParams = useSearchParams()
  const router = useRouter()

  const onSubmit: SubmitHandler<TypeSearchTerm> = data => {
    const params = new URLSearchParams(searchParams)

    if (data.searchTerm.trim()) {
      params.set('search', data.searchTerm.trim())
    } else {
      params.delete('search')
    }

    if (isReturnOnePage) params.set('page', '1')

    router.push(`${routes()}?${params.toString()}`)
  }

  useEffect(() => {
    const param = searchParams.get('search')

    if (param) setValue('searchTerm', param)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <Field
        placeholder='Search here'
        icon={icon}
        {...register('searchTerm')}
      />
      <Link isButton={true} model={EnumModelLink.fill}>
        Search
      </Link>
    </form>
  )
}
