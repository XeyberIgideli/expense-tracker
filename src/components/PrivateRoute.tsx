import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { User } from "../types/auth";

export default function PrivateRoute({children}:any) {

    const user = useSelector<User>(state => state.auth.data)       
    const location = useLocation()

    if(!user) {
        return <Navigate to="/auth/login" replace={true} state={{return_url: location?.pathname}}></Navigate>
    } 
    return children
}