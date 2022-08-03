import { login_fail, login_request, login_success, logout as logoutSlice } from "../reducers/userReducers/userLoginSlice"
import { register_request, register_success, register_fail } from "../reducers/userReducers/userRegisterSlice"
import { details_fail, details_request, details_success } from "../reducers/userReducers/userDetailsSlice"
import axios from 'axios'
import { update_profile_fail, update_profile_request, update_profile_success } from "../reducers/userReducers/userUpdateSlice"

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(login_request())

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch(login_success(data))

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(login_fail(error))
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch(logoutSlice())
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(register_request())

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch(register_success(data))
    dispatch(login_success(data))

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(register_fail(error))
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(details_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(
      `/api/users/${id}`,
      config
    )

    dispatch(details_success(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(details_fail(error))
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(update_profile_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(
      `/api/users/profile`,
      user,
      config
    )

    dispatch(update_profile_success(data))
    dispatch(login_success(data))

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(update_profile_fail(error))
  }
}