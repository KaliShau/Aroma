import Image from 'next/image'

import img from '@/shared/assets/images/waste.jpg'

import styles from './home.module.scss'

export const CoffeeHouseHome = () => {
  return (
    <div className={styles.coffee_house}>
      <div>
        <h3>Welcome to Aroma Coffee House</h3>
        <p>
          At Aroma Coffee House, we bring together excellence, coziness, and a
          deep love for coffee. Our goal is to provide more than just beverages—
          we create moments where fragrance, flavor, and ambiance blend
          seamlessly. We meticulously choose our beans and prepare every cup
          with precision and care.
        </p>
      </div>
      <Image src={img.src} alt='Image' width={654} height={1} />
    </div>
  )
}
