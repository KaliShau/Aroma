'use client'

import { useCoffeeRandom } from '@/features/coffee/hooks/coffee-random.hook'

import { CoffeeCardHome } from '@/entities/coffee'

import Arrow from '@/shared/assets/icons/arrow.svg'
import Circle from '@/shared/assets/icons/circle.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { cn } from '@/shared/lib/cn'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import { useMenuHome } from '../hooks/menu.hooks'
import styles from './menu.module.scss'

export const MenuHome = () => {
  const { data, isLoading } = useCoffeeRandom()

  const { menuData, onClickNext, onClickPrev, direction, animationKey } =
    useMenuHome(data || [])

  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
      <div
        key={animationKey}
        className={cn(styles.carousel, {
          [styles.slide_next]: direction == 'next',
          [styles.slide_prev]: direction == 'prev'
        })}
      >
        {isLoading ? (
          <div>Loading</div>
        ) : (
          menuData &&
          menuData.map((item, i) => <CoffeeCardHome key={i} coffee={item} />)
        )}
      </div>
      <Link href={PUBLIC_ROUTES.menu()} model={EnumModelLink.fill}>
        SEE ALL <Circle />
      </Link>
      <Link isButton={true} className={styles.left_arrow} onClick={onClickPrev}>
        <Arrow />
      </Link>
      <Link
        isButton={true}
        className={styles.right_arrow}
        onClick={onClickNext}
      >
        <Arrow />
      </Link>
    </div>
  )
}
