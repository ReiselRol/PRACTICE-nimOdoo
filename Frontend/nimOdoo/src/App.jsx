import { useState } from "react"
import { AppFrame } from "./components/AppFrame/appFrame"
import { NotFoundPage } from "./components/NotFoundPage/notFoundPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoged, setUser } from "./redux/Slices/AppSlice"


export function App () {

    const isLogged = useSelector((state) => state.AppGlobals.UI.isLogged)
    const user = useSelector((state) => state.AppGlobals.User)
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
            element: <>Hola que tal?</>,
            errorElement: <NotFoundPage/>
        },
    ])

    if (isLogged == false) return (<UserAccess/>)
    return (
        <AppFrame>
            <RouterProvider router={ROUTER}>

            </RouterProvider>
        </AppFrame>
    )
}