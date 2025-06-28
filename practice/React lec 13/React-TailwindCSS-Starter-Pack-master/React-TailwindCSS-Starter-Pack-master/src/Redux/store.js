// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice' // ✅ Import your reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ This must return a valid initial state
  },
})

export default store
