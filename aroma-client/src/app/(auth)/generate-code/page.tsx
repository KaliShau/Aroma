import { GenerateCode } from '@/pages/auth/generate-code'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Generate code'
}

const GenerateCodePage: NextPage = () => {
  return <GenerateCode />
}

export default GenerateCodePage
