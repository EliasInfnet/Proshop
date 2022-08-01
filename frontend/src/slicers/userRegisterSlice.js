import { createSlice } from "@reduxjs/toolkit";

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: {},
  reducers: {
    register_request: (state, action) => {
      return { loading: true }
    },
    register_success: (state, action) => {
      return { loading: false, userInfo: action.payload }
    },
    register_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { register_request, register_success, register_fail, } = userRegisterSlice.actions

export default userRegisterSlice.reducer