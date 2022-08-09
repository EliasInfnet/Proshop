import { createSlice } from "@reduxjs/toolkit";

export const productDeleteSlice = createSlice({
  name: 'productDelete',
  initialState: {},
  reducers: {
    product_delete_request: (state, action) => {
      return { loading: true }
    },
    product_delete_success: (state, action) => {
      return { loading: false, success: true }
    },
    product_delete_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { product_delete_request, product_delete_success, product_delete_fail } = productDeleteSlice.actions

export default productDeleteSlice.reducer