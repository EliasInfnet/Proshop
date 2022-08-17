import { createSlice } from "@reduxjs/toolkit";

export const productReviewCreateSlice = createSlice({
  name: 'productReviewCreate',
  initialState: {},
  reducers: {
    product_create_review_request: (state, action) => {
      return { loading: true }
    },
    product_create_review_success: (state, action) => {
      return { loading: false, success: true }
    },
    product_create_review_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    product_create_review_reset: (state, action) => {
      return {}
    }
  }
})

export const { product_create_review_request, product_create_review_success, product_create_review_fail, product_create_review_reset } = productReviewCreateSlice.actions

export default productReviewCreateSlice.reducer