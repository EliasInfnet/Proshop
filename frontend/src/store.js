import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import productDetailSlice from './reducers/productReducers/productDetailSlice';
import productsSlice from './reducers/productReducers/productsSlice';
import cartSlice from './reducers/cartReducers/cartSlice';
import userLoginSlice from './reducers/userReducers/userLoginSlice';
import userRegisterSlice from './reducers/userReducers/userRegisterSlice';
import userDetailsSlice from './reducers/userReducers/userDetailsSlice';
import userUpdateSlice from './reducers/userReducers/userUpdateSlice';
import userUpdateProfileSlice from './reducers/userReducers/userUpdateProfileSlice';
import userListSlice from './reducers/userReducers/userListSlice';
import orderCreateSlice from './reducers/orderReducers/orderCreateSlice';
import orderDetailsSlice from './reducers/orderReducers/orderDetailsSlice';
import orderPaySlice from './reducers/orderReducers/orderPaySlice';
import orderListMySlice from './reducers/orderReducers/orderListMySlice';
import userDeleteSlice from './reducers/userReducers/userDeleteSlice';
const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsSlice,
    productDetail: productDetailSlice,
    cart: cartSlice,
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
    userDetails: userDetailsSlice,
    userUpdate: userUpdateSlice,
    userUpdateProfile: userUpdateProfileSlice,
    userDelete: userDeleteSlice,
    userList: userListSlice,
    orderCreate: orderCreateSlice,
    orderDetails: orderDetailsSlice,
    orderPay: orderPaySlice,
    orderListMy: orderListMySlice
  },
  preloadedState: {},
  middleware
})

export default store;