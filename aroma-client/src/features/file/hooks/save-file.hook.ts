import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { TypeFileRequest } from '../model/file.type'
import { FileService } from '../services/file.service'

export const useSaveFile = () => {
  const { data, isPending, mutateAsync } = useMutation({
    mutationKey: ['save-file'],
    mutationFn: (formData: TypeFileRequest) => FileService.saveFile(formData),
    onError: err => {
      toast.error('Failed save file!')
    }
  })

  return { data, isPending, mutateAsync }
}
