import { createSlice } from "@reduxjs/toolkit";

export const orderListMySlice = createSlice({
  name: 'orderListMy',
  initialState: {
    orders: []
  },
  reducers: {
    order_list_my_request: (state, action) => {
      return { loading: true }
    },
    order_list_my_success: (state, action) => {
      return { loading: false, orders: action.payload }
    },
    order_list_my_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    order_list_my_reset: (state, action) => {
      return { orders: [] }
    }
  }
})

export const { order_list_my_request, order_list_my_success, order_list_my_fail, order_list_my_reset } = orderListMySlice.actions

export default orderListMySlice.reducer