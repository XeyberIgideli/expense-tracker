import store from "../store/"
import { setUser } from "../store/authSlice"

export default function userHandle (data: any) {
    store.dispatch(setUser(data))
}