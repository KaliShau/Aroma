import Circle from '@/shared/assets/icons/circle.svg'
import bg from '@/shared/assets/images/header.png'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { HeaderImage } from '@/shared/ui/header-image/header-image.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './home.module.scss'
import animate from './text-animate.module.scss'

export const HeaderHome = () => {
  return (
    <div className={styles.header}>
      <HeaderImage image={bg} />
      <div>
        <h2 className={animate.typewriter}>
          <span className={animate.line1}></span>
          <br />
          <span className={animate.line2}>
            <span className={animate.highlight}></span>
          </span>
        </h2>
        <p>
          This is a coffee universe where the best espresso ideas are born, and
          every sip is a new reason for inspiration and connection.
        </p>
        <Link href={PUBLIC_ROUTES.menu()} model={EnumModelLink.fill}>
          MAKE A ORDER <Circle />
        </Link>
      </div>
    </div>
  )
}
