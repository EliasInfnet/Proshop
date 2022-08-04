import { createSlice } from "@reduxjs/toolkit";

export const orderPaySlice = createSlice({
  name: 'orderPay',
  initialState: {},
  reducers: {
    order_pay_request: (state, action) => {
      return { loading: true }
    },
    order_pay_success: (state, action) => {
      return { loading: false, success: true }
    },
    order_pay_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    order_pay_reset: (state, action) => {
      return {}
    }
  }
})

export const { order_pay_request, order_pay_success, order_pay_fail, order_pay_reset } = orderPaySlice.actions

export default orderPaySlice.reducer