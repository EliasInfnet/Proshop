import { addItem } from "../slicers/cartSlice";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  const cartItem = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty
  }
  dispatch(addItem(cartItem))

  console.log(cartItem)
  
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}