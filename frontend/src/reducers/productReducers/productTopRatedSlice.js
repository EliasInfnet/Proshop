import { createSlice } from "@reduxjs/toolkit";

export const productTopRatedSlice = createSlice({
  name: 'productTopRated',
  initialState: {
    products: []
  },
  reducers: {
    product_top_request: (state, action) => {
      return { loading: true, products: [] }
    },
    product_top_success: (state, action) => {
      return { loading: false, products: action.payload }
    },
    product_top_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { product_top_request, product_top_success, product_top_fail } = productTopRatedSlice.actions

export default productTopRatedSlice.reducer