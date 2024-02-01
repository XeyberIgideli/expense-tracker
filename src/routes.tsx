import {HomeLayout} from "./pages/HomeLayout"
import {AuthLayout} from "./pages/Auth/AuthLayout"
import {Login} from "./pages/Auth/Login"
import {Register} from "./pages/Auth/Register"
import {ReactNode} from 'react'
import { RouteObject } from 'react-router-dom';
import { Home } from "./pages/Home"


const routes:RouteObject[]  = [
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
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
    },
    
] 

export default routes