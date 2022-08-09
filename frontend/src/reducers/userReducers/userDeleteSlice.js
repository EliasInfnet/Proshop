import { createSlice } from "@reduxjs/toolkit";

export const userDeleteSlice = createSlice({
  name: 'userDelete',
  initialState: {},
  reducers: {
    user_delete_request: (state, action) => {
      return { loading: true }
    },
    user_delete_success: (state, action) => {
      return { loading: false, success: true }
    },
    user_delete_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { user_delete_request, user_delete_success, user_delete_fail } = userDeleteSlice.actions

export default userDeleteSlice.reducer