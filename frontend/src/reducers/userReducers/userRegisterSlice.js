import { createSlice } from "@reduxjs/toolkit";

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: {},
  reducers: {
    user_register_request: (state, action) => {
      return { loading: true }
    },
    user_register_success: (state, action) => {
      return { loading: false, userInfo: action.payload }
    },
    user_register_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { user_register_request, user_register_success, user_register_fail, } = userRegisterSlice.actions

export default userRegisterSlice.reducer