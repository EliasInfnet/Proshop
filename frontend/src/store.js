import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import productDetailSlice from './slicers/productDetailSlice';
import productsSlice from './slicers/productsSlice';
const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsSlice,
    productDetail: productDetailSlice
  },
  preloadedState: {},
  middleware
})

export default store;