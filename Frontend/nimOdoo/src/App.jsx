import { AppFrame } from "./components/AppFrame/appFrame"
import { NotFoundPage } from "./components/Pages/NotFoundPage/notFoundPage"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoged, setUser } from "./redux/Slices/AppSlice"
import { Home } from "./components/Pages/Home/home"
import { AllClients, CreateClient } from "./components/Pages/Clients"


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

    const ROUTER = createBrowserRouter([
        {
            path: '/',
            element: <AppFrame><Home/></AppFrame>,
            errorElement: <NotFoundPage/>
        },
        {
            path: '/client',
            element: <AppFrame><AllClients/></AppFrame>,
            errorElement: <NotFoundPage/>
        },
        {
            path: '/client/create',
            element: <AppFrame><CreateClient/></AppFrame>,
            errorElement: <NotFoundPage/>
        }
    ])

    return (isLogged == false) ? <UserAccess/> : <RouterProvider router={ROUTER}/>
}