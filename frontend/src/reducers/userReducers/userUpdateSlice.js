import { createSlice } from "@reduxjs/toolkit";

export const userUpdateProfileSlice = createSlice({
  name: 'userUpdate',
  initialState: {},
  reducers: {
    update_profile_request: (state, action) => {
      return { loading: true }
    },
    update_profile_success: (state, action) => {
      return { loading: false, success: true, userInfo: action.payload }
    },
    update_profile_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    update_profile_reset: (state, action) => {
      return {}
    }
  }
})

export const { update_profile_request, update_profile_success, update_profile_fail, update_profile_reset } = userUpdateProfileSlice.actions

export default userUpdateProfileSlice.reducer