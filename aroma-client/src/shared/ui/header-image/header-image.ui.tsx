import Image from 'next/image'
import styles from './header-image.module.scss'
import { TypeHeaderImage } from './header-image.type'

export const HeaderImage = ({ image, isSvg = false }: TypeHeaderImage) => {
  if (isSvg) {
    const Svg = image
    return <Svg className={styles.root} />
  } else {
    return (
      <Image
        className={styles.root}
        draggable='false'
        alt='Background home image'
        src={image.src}
        width='1456'
        height='1'
      />
    )
  }
}
