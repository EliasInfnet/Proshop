import axios from "axios"
import { products_request, products_success, products_fail } from "../reducers/productReducers/productsSlice"
import { product_delete_request, product_delete_success, product_delete_fail } from "../reducers/productReducers/productDeleteSlice"
import { product_details_request, product_details_success, product_details_fail } from "../reducers/productReducers/productDetailSlice"
import { product_create_request, product_create_success, product_create_fail } from "../reducers/productReducers/productCreateSlice"
import { product_update_request, product_update_success, product_update_fail } from "../reducers/productReducers/productUpdateSlice"
import { product_create_review_request,product_create_review_success,product_create_review_fail } from "../reducers/productReducers/productReviewCreateSlice"


export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(product_details_request())
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch(product_details_success(data))
  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(product_details_fail(error))
  }
}

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(products_request())
    const { data } = await axios.get('/api/products')
    dispatch(products_success(data))
  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(products_fail(error))
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
    dispatch(product_delete_fail(error))
  }
}

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch(product_create_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(`/api/products/`, {}, config)
    dispatch(product_create_success(data))

  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(product_create_fail(error))
  }
}

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(product_update_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`/api/products/${product._id}`, product, config)
    dispatch(product_update_success(data))

  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(product_update_fail(error))
  }
}


export const createProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch(product_create_review_request())

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)
    dispatch(product_create_review_success())

  } catch (err) {
    const error = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(product_create_review_fail(error))
  }
}