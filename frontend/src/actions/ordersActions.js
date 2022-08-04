import { order_create_request, order_create_success, order_create_fail } from "../reducers/orderReducers/orderCreateSlice";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(order_create_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(
      `/api/orders`,
      order,
      config
    )

    dispatch(order_create_success(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(order_create_fail(error))
  }
}