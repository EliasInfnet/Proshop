import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import productDetailSlice from './reducers/userReducers/userDetailsSlice';
import productsSlice from './reducers/productReducers/productsSlice';
import cartSlice from './reducers/cartReducers/cartSlice';
import userLoginSlice from './reducers/userReducers/userLoginSlice';
import userRegisterSlice from './reducers/userReducers/userRegisterSlice';
import userDetailsSlice from './reducers/userReducers/userDetailsSlice';
import userUpdateProfileSlice from './reducers/userReducers/userUpdateSlice';
const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsSlice,
    productDetail: productDetailSlice,
    cart: cartSlice,
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
    userDetails: userDetailsSlice,
    userUpdate: userUpdateProfileSlice
  },
  preloadedState: {},
  middleware
})

export default store;