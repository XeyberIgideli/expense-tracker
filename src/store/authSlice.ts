import { createSlice, PayloadAction } from "@reduxjs/toolkit" 
import { Auth, AuthAction, AuthState } from "../types/auth"

const initialState: AuthState = {
    data: {} as Auth,
    loading: false,
    error: ""
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state:AuthState,action:PayloadAction<AuthAction>) => {
            // state.data = action.payload 
        }
    }
})

export const {setUser} = auth.actions
export default auth.reducer