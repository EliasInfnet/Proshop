import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import productsSlice from './slicers/productsSlice';

const middleware = [thunk]

const store = configureStore({
  reducer: {
    productsReducer: productsSlice
  },
  preloadedState: {},
  middleware
})

export default store;