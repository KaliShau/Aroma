import { createSlice } from '@reduxjs/toolkit'

type TypeInitialState = {
  isDynamicNavigationBar: boolean
  isTransparentNavigationBar: boolean
}

const initialState: TypeInitialState = {
  isDynamicNavigationBar: true,
  isTransparentNavigationBar: false
}

export const appearanceSlice = createSlice({
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
  appearanceSlice.actions
export const appearanceReducer = appearanceSlice.reducer
