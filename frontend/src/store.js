import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import productDetailSlice from './slicers/productDetailSlice';
import productsSlice from './slicers/productsSlice';
import cartSlice from './slicers/cartSlice';
import userLoginSlice from './slicers/userLoginSlice';
import userRegisterSlice from './slicers/userRegisterSlice';
const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsSlice,
    productDetail: productDetailSlice,
    cart: cartSlice,
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice
  },
  preloadedState: {},
  middleware
})

export default store;