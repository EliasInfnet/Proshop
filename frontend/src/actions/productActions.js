import { request, success, fail } from "../slicers/productsSlice"
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