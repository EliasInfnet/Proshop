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
    cart_addItem: (state, action) => {
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
    cart_removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload)
      }
    },
    cart_save_shipping_address: (state, action) => {
      return { ...state, shippingAddress: action.payload }
    },
    cart_save_payment_method: (state, action) => {
      return {...state, paymentMethod : action.payload}
    }
  }
})

export const { cart_addItem, cart_removeItem, cart_save_shipping_address, cart_save_payment_method } = cartSlice.actions

export default cartSlice.reducer