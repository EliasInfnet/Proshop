import { createSlice } from "@reduxjs/toolkit";

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState: {
    orders: []
  },
  reducers: {
    order_list_request: (state, action) => {
      return { loading: true }
    },
    order_list_success: (state, action) => {
      return { loading: false, orders: action.payload }
    },
    order_list_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    order_list_reset: (state, action) => {
      return { orders: [] }
    }
  }
})

export const { order_list_request, order_list_success, order_list_fail, order_list_reset } = orderListSlice.actions

export default orderListSlice.reducer