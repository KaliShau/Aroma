import { Metadata, NextPage } from 'next'

import { GenerateCode } from '@/pages-fsd/auth/generate-code'

export const metadata: Metadata = {
  title: 'Generate code'
}

const GenerateCodePage: NextPage = () => {
  return <GenerateCode />
}

export default GenerateCodePage
