import { createSlice } from "@reduxjs/toolkit";

// export const productListReducer = (state , action) => {
//   switch (action.type) {
//     case 'PRODUCT_LIST_REQUEST':
//       return { loading: true, products: [] }
//     case 'PRODUCT_LIST_SUCCESS':
//       return { loading: false, products: action.payload }
//     case 'PRODUCT_LIST_FAIL':
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    request: (state, action) => {
      return { loading: true, products: [] }
    },
    success: (state, action) => {
      return { loading: false, products: action.payload }
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const {request, success, fail} = productsSlice.actions

export default productsSlice.reducer