import { Footer } from '@/widgets/footer'

import { ContactForm } from '@/features/contact'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'

import styles from './contact.module.scss'
import { ContactInfo } from './info.ui'

export const Contact = () => {
  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <div className={styles.container}>
        <ContactInfo />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
