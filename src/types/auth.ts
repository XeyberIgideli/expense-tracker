export interface Auth {
    message: string,
    username: string,
    email: string,
    fullName: string,
    accessToken: string
}

export interface AuthState {
    data: Auth,
    loading: boolean,
    error: string
}


export interface User {
    auth: {
        data: Auth | AuthState
    }
}