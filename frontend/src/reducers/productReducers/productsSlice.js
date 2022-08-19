import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    products_request: (state, action) => {
      return { loading: true, products: [] }
    },
    products_success: (state, action) => {
      return { 
        loading: false, 
        products: action.payload.products , 
        pages: action.payload.pages,
        page: action.payload.page,
      }
    },
    products_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const {products_request, products_success, products_fail} = productsSlice.actions

export default productsSlice.reducer