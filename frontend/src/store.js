import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

const middleware = [thunk]

const store = configureStore({
  reducer: {},
  preloadedState: {},
  middleware
})

export default store;