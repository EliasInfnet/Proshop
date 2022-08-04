import { createSlice } from "@reduxjs/toolkit";

export const orderCreateSlice = createSlice({
  name: 'orderCreate',
  initialState: {},
  reducers: {
    order_create_request: (state, action) => {
      return { loading: true }
    },
    order_create_success: (state, action) => {
      return { loading: false, success: true, order: action.payload }
    },
    order_create_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { order_create_request, order_create_success, order_create_fail } = orderCreateSlice.actions

export default orderCreateSlice.reducer