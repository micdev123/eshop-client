import { configureStore } from '@reduxjs/toolkit' // Access configureStore
import authReducer from './slices/auth/authSlice'

// The Store
const store = configureStore({
    // Reducer
    reducer: {
        auth: authReducer
    }
}) 

// Making it accessible
export default store;