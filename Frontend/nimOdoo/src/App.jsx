import { RouterProvider } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoged, setUser, setAllModules } from "./redux/Slices/AppSlice"
import { prepareURLModules } from "./App.helper"
import { PageLoading } from "./components/Pages/PageElements"

export function App () {

    const isLogged = useSelector((state) => state.AppGlobals.UI.isLogged)
    const modulesConfig = useSelector((state) => state.AppGlobals.Modules.Actived)
    const user = useSelector((state) => state.AppGlobals.User)
    const dispatch = useDispatch()

    useEffect(() => {
        const allModules = JSON.parse(localStorage.getItem('nimOdooConfig'))
        if (allModules != null) {
            dispatch(setAllModules(allModules))
        }
        const userJSON = localStorage.getItem('user');
        if (userJSON != null) {
            dispatch(setUser(userJSON))
            dispatch(setIsLoged(true))
        }
    }, [])

    if (isLogged == false) return  <UserAccess/>
    if (user != null) {
        const ROUTER = prepareURLModules(modulesConfig, user.admin)
        return <RouterProvider router={ROUTER}/>
    } else return <PageLoading/>
}