import { FC, ReactNode } from 'react'

import { Footer } from '@/widgets/footer'

import bg from '@/shared/assets/images/brown-line.png'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { SETTINGS_LAYOUT_MENU } from '../../data/settings-layout.data'
import styles from './settings-layout.module.scss'

type TypeSettingsLayout = {
  children: ReactNode
}

export const SettingsLayout: FC<TypeSettingsLayout> = ({ children }) => {
  return (
    <div className={styles.root}>
      <HeaderImage image={bg} />
      <div className={styles.sidebar}>
        <aside>
          <h3>Settings</h3>
          {SETTINGS_LAYOUT_MENU.map(item => (
            <Link href={item.href} model={EnumModelLink.fill}>
              {item.children}
            </Link>
          ))}
        </aside>
        {children}
      </div>
      <Footer />
    </div>
  )
}
