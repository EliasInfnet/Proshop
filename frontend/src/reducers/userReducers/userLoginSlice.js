import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

export const userLoginSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: userInfoFromLocalStorage
  },
  reducers: {
    login_request: (state, action) => {
      return { loading: true }
    },
    login_success: (state, action) => {
      return { loading: false, userInfo: action.payload }
    },
    login_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    logout: (state, action) => {
      return {}
    }
  }
})

export const { login_request, login_success, login_fail, logout } = userLoginSlice.actions

export default userLoginSlice.reducer