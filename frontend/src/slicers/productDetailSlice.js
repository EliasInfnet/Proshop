import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
  name: 'product',
  initialState: {
    product: {
      reviews: []
    }
  },
  reducers: {
    request: (state, action) => {
      return { loading: true, ...state }
    },
    success: (state, action) => {
      return { loading: false, product: action.payload }
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { request, success, fail } = productDetailSlice.actions

export default productDetailSlice.reducer