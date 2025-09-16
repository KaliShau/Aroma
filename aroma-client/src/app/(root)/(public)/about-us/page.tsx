import { Metadata, NextPage } from 'next'

import { AboutUs } from '@/pages-fsd/about-us'

export const metadata: Metadata = {
  title: 'About Us'
}

const AboutUsPage: NextPage = () => {
  return <AboutUs />
}

export default AboutUsPage
