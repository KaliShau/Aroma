import { useRef, useState } from 'react'

import { Cart } from '@/widgets/cart'
import { UserMenu } from '@/widgets/user-menu'

import { useProfile } from '@/features/user'

import CartSvg from '@/shared/assets/icons/cart.svg'
import Circle from '@/shared/assets/icons/circle.svg'
import { PUBLIC_ROUTES } from '@/shared/configs/routes.config'
import { Avatar } from '@/shared/ui/avatar/avatar.ui'
import { EnumModelLink } from '@/shared/ui/link/link.type'
import { Link } from '@/shared/ui/link/link.ui'

import styles from './nav-bar.module.scss'

export const RightBar = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
  const [isShowCart, setIsShowCart] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const { data, isAuth } = useProfile()

  return (
    <div className={styles.right}>
      <Link href={PUBLIC_ROUTES.menu()} model={EnumModelLink.fill}>
        BREW YOUR FIRST CUP
        <Circle />
      </Link>
      <Link
        model={EnumModelLink.border}
        isButton={true}
        onClick={() => setIsShowCart(prev => !prev)}
      >
        <CartSvg />
      </Link>

      <Link
        ref={buttonRef}
        isButton={true}
        onClick={() => setIsShowMenu(prev => !prev)}
      >
        <Avatar data={data} isAuth={isAuth} />
      </Link>
      <UserMenu
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        buttonRef={buttonRef}
      />
      <Cart isShowCart={isShowCart} setIsShowCart={setIsShowCart} />
    </div>
  )
}
