import { cart_addItem, cart_removeItem, cart_save_payment_method, cart_save_shipping_address } from "../reducers/cartReducers/cartSlice";
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
  dispatch(cart_addItem(cartItem))

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch(cart_removeItem(id))
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch(cart_save_shipping_address(data))
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch(cart_save_payment_method(data))
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}