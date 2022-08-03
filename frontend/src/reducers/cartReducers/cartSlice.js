import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: cartItemsFromLocalStorage
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find(x => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      }
      else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload)
      }
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer