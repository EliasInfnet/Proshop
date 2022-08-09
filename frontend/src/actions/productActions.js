import { request, success, fail } from "../reducers/productReducers/productsSlice"
import { product_delete_request, product_delete_success, product_delete_fail } from "../reducers/productReducers/productDeleteSlice"
import axios from "axios"

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(request())
    const { data } = await axios.get('/api/products')
    dispatch(success(data))
  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(fail(error))
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(product_delete_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    await axios.delete(`/api/products/${id}`, config)
    dispatch(product_delete_success())
    
  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(fail(error))
  }
}
