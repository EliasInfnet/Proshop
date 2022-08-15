import { createSlice } from "@reduxjs/toolkit";

export const orderDeliverSlice = createSlice({
  name: 'orderDeliver',
  initialState: {},
  reducers: {
    order_deliver_request: (state, action) => {
      return { loading: true }
    },
    order_deliver_success: (state, action) => {
      return { loading: false, success: true }
    },
    order_deliver_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    order_deliver_reset: (state, action) => {
      return {}
    }
  }
})

export const { order_deliver_request, order_deliver_success, order_deliver_fail, order_deliver_reset } = orderDeliverSlice.actions

export default orderDeliverSlice.reducer