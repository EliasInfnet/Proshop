import { createSlice } from "@reduxjs/toolkit";

export const productUpdateSlice = createSlice({
  name: 'productUpdate',
  initialState: {
    product: {}
  },
  reducers: {
    product_update_request: (state, action) => {
      return { loading: true }
    },
    product_update_success: (state, action) => {
      return { loading: false, success: true, product: action.payload }
    },
    product_update_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    product_update_reset: (state, action) => {
      return { product: {} }
    }
  }
})

export const { product_update_request, product_update_success, product_update_fail, product_update_reset } = productUpdateSlice.actions

export default productUpdateSlice.reducer