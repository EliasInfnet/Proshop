import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
  name: 'product',
  initialState: {
    product: {
      reviews: []
    }
  },
  reducers: {
    product_details_request: (state, action) => {
      return { loading: true, ...state }
    },
    product_details_success: (state, action) => {
      return { loading: false, product: action.payload }
    },
    product_details_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { product_details_request, product_details_success, product_details_fail } = productDetailSlice.actions

export default productDetailSlice.reducer