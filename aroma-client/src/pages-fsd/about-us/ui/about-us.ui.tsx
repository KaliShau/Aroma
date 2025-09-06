import { Footer } from '@/widgets/footer'

import { ABOUT_US_HISTORY_DATA } from '../data/about-us.data'
import styles from './about-us.module.scss'
import { HistoryCardAboutUs } from './history-card.ui'
import { AboutUsTopBar } from './top-bar.ui'

export const AboutUs = () => {
  return (
    <div className={styles.root}>
      <AboutUsTopBar />
      <h3>Our Story</h3>
      <div className={styles.cards}>
        {ABOUT_US_HISTORY_DATA.map((item, index) => (
          <HistoryCardAboutUs key={index} title={item.title} des={item.des} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
