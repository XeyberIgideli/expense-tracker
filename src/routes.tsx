import {HomeLayout} from "./pages/HomeLayout"
import {AuthLayout} from "./pages/Auth/AuthLayout"
import {Login} from "./pages/Auth/Login"
import {Register} from "./pages/Auth/Register"
import {ReactNode} from 'react'
import { RouteObject } from 'react-router-dom';
interface Routes {
    path: string,
    element: ReactNode,
    children?: Routes[]

}

const routes:Routes[]  = [
    {
        path: "/",
        element: <HomeLayout/>
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
] 

export default routes