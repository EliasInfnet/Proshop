import axios from "axios";
import { order_create_request, order_create_success, order_create_fail } from "../reducers/orderReducers/orderCreateSlice";
import { order_details_request, order_details_success, order_details_fail } from "../reducers/orderReducers/orderDetailsSlice";
import { order_pay_request, order_pay_success, order_pay_fail } from "../reducers/orderReducers/orderPaySlice";
import { order_list_my_request, order_list_my_success, order_list_my_fail } from "../reducers/orderReducers/orderListMySlice";

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

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(order_details_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(
      `/api/orders/${id}`,
      config
    )

    dispatch(order_details_success(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(order_details_fail(error))
  }
}

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch(order_pay_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    )

    dispatch(order_pay_success(data))

  } catch (err) {
    const error = err.response &&
      err.response.data.message ?
      err.response.data.message :
      err.message
    dispatch(order_pay_fail(error))
  }
}

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch(order_list_my_request())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/myorders`, config)

    dispatch(order_list_my_success(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch(order_list_my_fail(message))
  }
}