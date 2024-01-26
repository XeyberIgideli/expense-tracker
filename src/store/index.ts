import { configureStore } from "@reduxjs/toolkit"
import auth from './authSlice'
import { AuthState } from "../types/auth"

interface StoreType {
    auth: AuthState,
    categories: any,
    records: any
}

const store = configureStore({
    reducer: {
        auth
    }
})

export default store