import { createSlice } from "@reduxjs/toolkit";

export const productCreateSlice = createSlice({
  name: 'productCreate',
  initialState: {},
  reducers: {
    product_create_request: (state, action) => {
      return { loading: true }
    },
    product_create_success: (state, action) => {
      return { loading: false, success: true, product: action.payload }
    },
    product_create_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    product_create_reset: (state, action) => {
      return {}
    }
  }
})

export const { product_create_request, product_create_success, product_create_fail, product_create_reset } = productCreateSlice.actions

export default productCreateSlice.reducer