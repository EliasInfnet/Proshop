import { login_fail, login_request, login_success } from "../slicers/userLoginSlice"
import axios from 'axios'

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