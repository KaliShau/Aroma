import { GenerateCodeForm } from '@/features/auth'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './generate-code.module.scss'

export const GenerateCode = () => {
  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <GenerateCodeForm />
    </div>
  )
}
