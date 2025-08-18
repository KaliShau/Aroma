import { createSlice } from '@reduxjs/toolkit'

type TypeInitialState = {
  isDynamicNavigationBar: boolean
  isTransparentNavigationBar: boolean
}

const initialState: TypeInitialState = {
  isDynamicNavigationBar: false,
  isTransparentNavigationBar: true
}

export const appearanceCounter = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    setIsDynamicNavigationBar: state => {
      state.isDynamicNavigationBar = !state.isDynamicNavigationBar
    },
    setIsTransparentNavigationBar: state => {
      state.isTransparentNavigationBar = !state.isTransparentNavigationBar
    }
  }
})

export const { setIsDynamicNavigationBar, setIsTransparentNavigationBar } =
  appearanceCounter.actions
export default appearanceCounter.reducer
