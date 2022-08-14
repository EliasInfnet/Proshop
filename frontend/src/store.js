import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import productDetailReducer from './reducers/productReducers/productDetailSlice';
import productsReducer from './reducers/productReducers/productsSlice';
import productDeleteReducer from './reducers/productReducers/productDeleteSlice';
import productCreateReducer from './reducers/productReducers/productCreateSlice';
import productUpdateReducer from './reducers/productReducers/productUpdateSlice';

import cartReducer from './reducers/cartReducers/cartSlice';

import userLoginReducer from './reducers/userReducers/userLoginSlice';
import userRegisterReducer from './reducers/userReducers/userRegisterSlice';
import userDetailsReducer from './reducers/userReducers/userDetailsSlice';
import userUpdateReducer from './reducers/userReducers/userUpdateSlice';
import userUpdateProfileReducer from './reducers/userReducers/userUpdateProfileSlice';
import userListReducer from './reducers/userReducers/userListSlice';
import userDeleteReducer from './reducers/userReducers/userDeleteSlice';

import orderCreateReducer from './reducers/orderReducers/orderCreateSlice';
import orderDetailsReducer from './reducers/orderReducers/orderDetailsSlice';
import orderPayReducer from './reducers/orderReducers/orderPaySlice';
import orderListMyReducer from './reducers/orderReducers/orderListMySlice';

const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsReducer,
    productDetail: productDetailReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    userList: userListReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer
  },
  preloadedState: {},
  middleware
})

export default store;