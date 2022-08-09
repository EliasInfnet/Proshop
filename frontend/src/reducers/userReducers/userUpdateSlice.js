import { createSlice } from "@reduxjs/toolkit";

export const userUpdateSlice = createSlice({
  name: 'userUpdate',
  initialState: {
    user: {}
  },
  reducers: {
    user_update_request: (state, action) => {
      return { loading: true }
    },
    user_update_success: (state, action) => {
      return { loading: false, success: true }
    },
    user_update_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    user_update_reset: (state, action) => {
      return { user: {} }
    }
  }
})

export const { user_update_request, user_update_success, user_update_fail, user_update_reset } = userUpdateSlice.actions

export default userUpdateSlice.reducer