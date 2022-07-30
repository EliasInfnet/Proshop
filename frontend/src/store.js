import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import productDetailSlice from './slicers/productDetailSlice';
import productsSlice from './slicers/productsSlice';
import cartSlice from './slicers/cartSlice';
const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsSlice,
    productDetail: productDetailSlice,
    cart: cartSlice
  },
  preloadedState: {},
  middleware
})

export default store;