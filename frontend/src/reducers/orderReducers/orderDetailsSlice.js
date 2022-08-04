import { createSlice } from "@reduxjs/toolkit";

export const orderDetails = createSlice({
  name: 'orderDetails',
  initialState: {
    orderItems: [],
    shippingAddress: {},
    loading: true
  },
  reducers: {
    order_details_request: (state, action) => {
      return { ...state, loading: true }
    },
    order_details_success: (state, action) => {
      return { loading: false, order: action.payload }
    },
    order_details_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { order_details_request, order_details_success, order_details_fail } = orderDetails.actions

export default orderDetails.reducer