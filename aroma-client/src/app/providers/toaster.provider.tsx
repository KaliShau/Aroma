import { Toaster } from 'react-hot-toast'

import '../styles/toast.scss'

export const ToasterProvider = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{ className: 'custom-toast' }}
    />
  )
}
