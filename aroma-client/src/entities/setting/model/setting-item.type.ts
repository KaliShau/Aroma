import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

import { RootState } from '@/app/store/store'

export type TypeItemSwitch = {
  title: string
  action: ActionCreatorWithoutPayload
  selector: (state: RootState) => boolean
}
