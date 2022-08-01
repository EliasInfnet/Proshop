import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    user:{}
  },
  reducers: {
    details_request: (state, action) => {
      return { ...state, loading: true }
    },
    details_success: (state, action) => {
      return { loading: false, user: action.payload }
    },
    details_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { details_request, details_success, details_fail, } = userDetailsSlice.actions

export default userDetailsSlice.reducer