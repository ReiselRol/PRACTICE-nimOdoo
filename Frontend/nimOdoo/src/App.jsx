import { RouterProvider } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoged, setUser } from "./redux/Slices/AppSlice"
import { BROWSE_ROUTER } from "./constants"


export function App () {

    const isLogged = useSelector((state) => state.AppGlobals.UI.isLogged)
    const dispatch = useDispatch()

    useEffect(() => {
        const userJSON = localStorage.getItem('user');
        if (userJSON != null) {
            dispatch(setIsLoged(true))
            dispatch(setUser(userJSON))
        }
    }, [])

    const ROUTER = BROWSE_ROUTER

    return (isLogged == false) ? <UserAccess/> : <RouterProvider router={ROUTER}/>
}