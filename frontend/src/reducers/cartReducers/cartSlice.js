import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
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
    },
    save_shipping_address: (state, action) => {
      return { ...state, shippingAddress: action.payload }
    }
  }
})

export const { addItem, removeItem, save_shipping_address } = cartSlice.actions

export default cartSlice.reducer