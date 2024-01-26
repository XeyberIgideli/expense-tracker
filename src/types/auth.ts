export interface Auth {
    message: string,
    username: string,
    email: string,
    fullName: string,
    token: string
}

export interface AuthState {
    data: Auth,
    loading: boolean,
    error: string
}

interface LOGIN_START {
    type: "LOGIN_START"
}

interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS"
}

interface LOGIN_ERROR {
    type: "LOGIN_ERROR"
}

export type AuthAction = LOGIN_ERROR | LOGIN_SUCCESS | LOGIN_START