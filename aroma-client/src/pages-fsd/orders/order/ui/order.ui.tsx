'use client'

import { useParams } from 'next/navigation'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

export const Order = () => {
  const { id } = useParams()

  return (
    <div>
      <HeaderImage image={bg} />
      order {id}
    </div>
  )
}
