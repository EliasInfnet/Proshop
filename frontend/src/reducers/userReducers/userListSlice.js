import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    users: []
  },
  reducers: {
    user_list_request: (state, action) => {
      return { loading: true }
    },
    user_list_success: (state, action) => {
      return { loading: false, users: action.payload }
    },
    user_list_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    user_list_reset: (state, action) => {
      return { users: [] }
    }
  }
})

export const { user_list_request, user_list_success, user_list_fail, user_list_reset } = userListSlice.actions

export default userListSlice.reducer