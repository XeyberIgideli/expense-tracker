import { createSlice, PayloadAction } from "@reduxjs/toolkit" 
import { Auth, AuthState } from "../types/auth" 

const initialState: AuthState = {
    data: {} as Auth,
    loading: false,
    error: ""
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state:AuthState,action:PayloadAction<Auth>) => { 
            if(action.payload) {
                localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
            } else {
                localStorage.removeItem('accessToken')
            }
            state.data = action.payload 
        },
        loginStart: (state: AuthState) => { 
            state.loading = true;
            state.error = "";
        },
        loginSuccess: (state: AuthState) => { 
            state.loading = false;
            state.error = "";
        },
        loginError: (state: AuthState, action: PayloadAction<string>) => { 
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {setUser} = auth.actions
export default auth.reducer