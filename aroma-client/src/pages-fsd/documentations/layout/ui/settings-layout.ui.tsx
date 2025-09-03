import { FC, ReactNode } from 'react'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './settings-layout.module.scss'

type TypeDocumentationsLayout = {
  children: ReactNode
}

export const DocumentationsLayout: FC<TypeDocumentationsLayout> = ({
  children
}) => {
  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <div className={styles.main}>{children}</div>
    </div>
  )
}
