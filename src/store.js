import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user"
import countReducer from  './features/count'

export const store = configureStore({
    reducer: {
        user:userReducer,
        counter:countReducer
    }
})
