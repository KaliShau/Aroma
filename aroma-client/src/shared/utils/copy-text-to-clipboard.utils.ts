import toast from 'react-hot-toast'

export const copyTextToClipboard = async (
  e: React.MouseEvent,
  text: string | null
) => {
  e.stopPropagation()

  if (!text) return toast.error('Failed to copy the text!')

  try {
    await navigator.clipboard.writeText(text)
    toast.success('The text is successfully copied to the exchange buffer!')
  } catch (err) {
    toast.error('Failed to copy the text!')
  }
}
