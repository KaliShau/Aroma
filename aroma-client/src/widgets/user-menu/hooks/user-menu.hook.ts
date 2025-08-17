import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react'

type TypeUseUserMenu = {
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  buttonRef: RefObject<HTMLButtonElement | null>
}

export const useUserMenu = ({ setIsShowMenu, buttonRef }: TypeUseUserMenu) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        buttonRef?.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsShowMenu])

  return { ref }
}
