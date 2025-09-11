import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TypeCartItem } from '@/shared/models/cart-item.type'

type TypeCartState = {
  items: TypeCartItem[]
}

const initialState: TypeCartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TypeCartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<TypeCartItem>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    clearCart: state => {
      state.items = []
    }
  }
})

export const { addItem, clearCart, removeItem, updateQuantity } =
  cartSlice.actions
export const cartReducer = cartSlice.reducer
